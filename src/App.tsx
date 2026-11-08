import React from 'react';
import { Hud } from './components/Hud';
import { Hero } from './components/Hero';
import { QuestLog } from './components/QuestLog';
import { Experience } from './components/Experience';
import { Inventory } from './components/Inventory';
import { Certifications } from './components/Certifications';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-bg text-text font-body selection:bg-accent selection:text-bg">
      {/* Sticky Top HUD */}
      <Hud />

      {/* Main Single Column Container */}
      <main className="max-w-[1040px] mx-auto px-6">
        <Hero />
        <QuestLog />
        <Experience />
        <Inventory />
        <Certifications />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
