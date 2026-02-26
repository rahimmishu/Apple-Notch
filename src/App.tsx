/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Hero from './components/Hero';
import Features from './components/Features';
import Footer from './components/Footer';

// ── নতুন পেজগুলো ইমপোর্ট করা হয়েছে ──────────────────────────────
import LearnMore from './components/LearnMore';
import Support from './components/Support';

// ── Page Loader ────────────────────────────────────────────────
function PageLoader({ onDone }: { onDone: () => void }) {
  useEffect(() => {
    const t = setTimeout(onDone, 1800);
    return () => clearTimeout(t);
  }, [onDone]);

  return (
    <motion.div
      className="fixed inset-0 z-[9990] flex flex-col items-center justify-center bg-[#0A0A0F]"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: 'easeInOut' }}
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="flex flex-col items-center gap-6"
      >
        <div className="relative">
          <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center shadow-[0_0_40px_rgba(255,255,255,0.2)]">
            <img src="/icon.ico" alt="Notch Logo" className="object-contain w-10 h-10" />
          </div>
          <div className="absolute inset-0 border rounded-2xl border-white/20 animate-ping-slow" />
        </div>
        <p className="text-xl font-semibold tracking-tight text-white font-display">Notch</p>
        <div className="w-32 h-px mt-2 overflow-hidden rounded-full bg-white/10">
          <motion.div
            className="h-full rounded-full bg-gradient-to-r from-indigo-400 to-violet-400"
            initial={{ width: '0%' }}
            animate={{ width: '100%' }}
            transition={{ duration: 1.4, ease: 'easeInOut' }}
          />
        </div>
      </motion.div>
    </motion.div>
  );
}

// ── Scroll Progress Bar ────────────────────────────────────────
function ScrollProgress() {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const update = () => {
      const el  = document.documentElement;
      const pct = el.scrollTop / (el.scrollHeight - el.clientHeight);
      setProgress(pct * 100);
    };
    window.addEventListener('scroll', update, { passive: true });
    return () => window.removeEventListener('scroll', update);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 h-[2px] bg-transparent">
      <motion.div
        className="h-full origin-left"
        style={{
          scaleX: progress / 100,
          background: 'linear-gradient(90deg, #6366f1, #8b5cf6, #22d3ee)',
        }}
      />
    </div>
  );
}

// ── Scroll-to-top Button ───────────────────────────────────────
function ScrollToTop() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const check = () => setVisible(window.scrollY > 400);
    window.addEventListener('scroll', check, { passive: true });
    return () => window.removeEventListener('scroll', check);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-8 right-8 z-50 w-10 h-10 rounded-full flex items-center justify-center border border-white/10 bg-white/5 backdrop-blur-xl text-white/60 hover:bg-white/10 hover:border-indigo-500/40 hover:text-white transition-all duration-200 shadow-[0_4px_20px_rgba(0,0,0,0.4)]"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M7 11V3M7 3L3 7M7 3l4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </motion.button>
      )}
    </AnimatePresence>
  );
}

// ── Minimal Nav ────────────────────────────────────────────────
function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const check = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', check, { passive: true });
    return () => window.removeEventListener('scroll', check);
  }, []);

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-40 transition-all duration-500
        ${scrolled ? 'bg-[#0A0A0F]/80 backdrop-blur-xl border border-white/8 shadow-[0_0_0_1px_rgba(255,255,255,0.05)]' : 'bg-transparent border border-transparent'} 
        rounded-2xl px-6 py-3 flex items-center gap-8`}
    >
      <Link to="/" className="flex items-center gap-2">
        <img src="/icon.ico" alt="Logo" className="w-6 h-6 rounded-[7px] object-cover" />
        <span className="text-sm font-semibold tracking-tight text-white font-display">Notch</span>
      </Link>

      <div className="items-center hidden gap-6 text-xs font-medium md:flex text-white/40">
        <Link to="/" className="transition-colors duration-200 hover:text-white/90">Features</Link>
        <Link to="/learn-more" className="transition-colors duration-200 hover:text-white/90">Learn More</Link>
        <Link to="/support" className="transition-colors duration-200 hover:text-white/90">Support</Link>
      </div>

      <a
        href="/notch.exe"
        download
        className="ml-auto hidden md:flex items-center gap-1.5 text-xs font-semibold bg-white text-black px-4 py-1.5 rounded-xl hover:bg-white/90 transition-colors duration-200"
      >
        {/* Apple SVG Icon */}
        <svg viewBox="0 0 384 512" fill="currentColor" className="w-[12px] h-[12px] pb-[1px]">
          <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.3 48.6-.8 90.5-90.8 103.1-125.5-44.3-18.9-62.4-59.5-62.2-85.1zM210.1 87c21.8-26.8 31.2-54.6 29.2-86.2-24.3 3.4-53.8 18.6-72.7 44.4-15.6 21-29.2 49-26 84.7 27.6 2.3 50.8-12.7 69.5-42.9z" />
        </svg>
        Download
      </a>
    </motion.nav>
  );
}

// ── App Root ───────────────────────────────────────────────────
export default function App() {
  const [loaded, setLoaded] = useState(false);

  return (
    <Router>
      <div className="grain-overlay min-h-screen bg-[#0A0A0F] text-white">
        <ScrollProgress />

        <AnimatePresence>
          {!loaded && <PageLoader onDone={() => setLoaded(true)} />}
        </AnimatePresence>

        <AnimatePresence>
          {loaded && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Nav />
              <main>
                <Routes>
                  <Route path="/" element={<><Hero /><Features /></>} />
                  <Route path="/support" element={<Support />} />
                  <Route path="/learn-more" element={<LearnMore />} />
                </Routes>
              </main>
              <Footer />
              <ScrollToTop />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </Router>
  );
}