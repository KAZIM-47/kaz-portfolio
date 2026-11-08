import React from 'react';
import { siteConfig } from '../config/site';
import { PixelButton } from './PixelButton';

export type FormStatus = 'idle' | 'sending' | 'success' | 'error';

export interface ContactFormProps {
  id?: string;
  className?: string;
  hidden?: boolean;
}

export const ContactForm: React.FC<ContactFormProps> = ({
  id = 'contact-form',
  className = '',
  hidden = false,
}) => {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [message, setMessage] = React.useState('');
  const [botcheck, setBotcheck] = React.useState('');
  const [status, setStatus] = React.useState<FormStatus>('idle');

  const recipientEmail = siteConfig.contact?.recipientEmail || siteConfig.email;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Honeypot check: If bot filled it, pretend success and return without sending
    if (botcheck.trim() !== '') {
      setStatus('success');
      setName('');
      setEmail('');
      setMessage('');
      setBotcheck('');
      return;
    }

    const accessKey = siteConfig.contact?.accessKey;
    if (!accessKey) {
      setStatus('error');
      return;
    }

    setStatus('sending');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: accessKey,
          name: name.trim(),
          email: email.trim(),
          replyto: email.trim(),
          subject: 'New message from KAZ portfolio',
          from_name: 'KAZ Portfolio',
          message: message.trim(),
          botcheck: botcheck,
        }),
      });

      if (!response.ok) {
        setStatus('error');
        return;
      }

      const data = await response.json();
      if (data.success) {
        setStatus('success');
        setName('');
        setEmail('');
        setMessage('');
        setBotcheck('');
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  const isSending = status === 'sending';

  return (
    <div
      id={id}
      hidden={hidden}
      className={`contact-form-panel mt-10 w-full max-w-[640px] ${hidden ? 'hidden' : ''} ${className}`.trim()}
    >
      <form onSubmit={handleSubmit} noValidate={false} className="flex flex-col gap-6">
        {/* Honeypot field (hidden from real users, tabindex -1) */}
        <input
          type="text"
          name="botcheck"
          tabIndex={-1}
          aria-hidden="true"
          autoComplete="off"
          value={botcheck}
          onChange={(e) => setBotcheck(e.target.value)}
          style={{
            position: 'absolute',
            left: '-9999px',
            opacity: 0,
            pointerEvents: 'none',
          }}
        />

        {/* Name */}
        <div className="flex flex-col">
          <label
            htmlFor="contact-name"
            className="font-pixel text-[10px] text-muted uppercase tracking-normal mb-2"
          >
            YOUR NAME *
          </label>
          <input
            id="contact-name"
            type="text"
            name="name"
            required
            maxLength={100}
            value={name}
            onChange={(e) => setName(e.target.value)}
            disabled={isSending}
            className="w-full bg-panel border-2 border-line text-text px-4 py-3 font-body text-[20px] tablet:text-[22px] leading-tight rounded-none outline-none focus:border-accent transition-colors duration-100 ease-[steps(1)] disabled:opacity-50 disabled:cursor-not-allowed"
          />
        </div>

        {/* Email */}
        <div className="flex flex-col">
          <label
            htmlFor="contact-email"
            className="font-pixel text-[10px] text-muted uppercase tracking-normal mb-2"
          >
            EMAIL ADDRESS *
          </label>
          <input
            id="contact-email"
            type="email"
            name="email"
            required
            maxLength={200}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={isSending}
            className="w-full bg-panel border-2 border-line text-text px-4 py-3 font-body text-[20px] tablet:text-[22px] leading-tight rounded-none outline-none focus:border-accent transition-colors duration-100 ease-[steps(1)] disabled:opacity-50 disabled:cursor-not-allowed"
          />
        </div>

        {/* Message */}
        <div className="flex flex-col">
          <label
            htmlFor="contact-message"
            className="font-pixel text-[10px] text-muted uppercase tracking-normal mb-2"
          >
            MESSAGE *
          </label>
          <textarea
            id="contact-message"
            name="message"
            required
            maxLength={2000}
            rows={5}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            disabled={isSending}
            className="w-full bg-panel border-2 border-line text-text px-4 py-3 font-body text-[20px] tablet:text-[22px] leading-tight rounded-none outline-none focus:border-accent transition-colors duration-100 ease-[steps(1)] resize-y disabled:opacity-50 disabled:cursor-not-allowed"
          />
        </div>

        {/* Status Message */}
        <div role="status" aria-live="polite" className="min-h-[20px]">
          {status === 'success' && (
            <p className="font-pixel text-[11px] leading-relaxed uppercase text-accent tracking-normal">
              MESSAGE SENT. I'LL REPLY SOON.
            </p>
          )}
          {status === 'error' && (
            <p className="font-pixel text-[11px] leading-relaxed uppercase text-muted tracking-normal">
              COULD NOT SEND. USE THE DIRECT EMAIL LINK BELOW.
            </p>
          )}
        </div>

        {/* Submit Button */}
        <div>
          <PixelButton
            type="submit"
            variant="solid"
            disabled={isSending}
          >
            {isSending ? 'SENDING...' : 'SEND MESSAGE'}
          </PixelButton>
        </div>

        {/* Direct Email Fallback */}
        <div className="font-body text-[20px] tablet:text-[22px] text-muted">
          Or email me directly:{' '}
          <a
            href={`mailto:${recipientEmail}`}
            className="text-text hover:text-accent underline transition-colors duration-100 ease-[steps(1)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          >
            {recipientEmail}
          </a>
        </div>
      </form>
    </div>
  );
};
