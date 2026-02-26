import { useRef, useState, MouseEvent } from 'react';
import { motion, useInView } from 'framer-motion';
import { 
  Music, Calendar, Video, BatteryCharging, FileBox, 
  SlidersHorizontal, Palette, Wand2, Play, SkipForward, 
  SkipBack, Sun, Volume2 
} from 'lucide-react';

// ─── Helper Component: Premium Card Wrapper ───────────────────
function FeatureCard({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const divRef = useRef<HTMLDivElement>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const isInView = useInView(divRef, { once: true, margin: "-10%" });

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!divRef.current) return;
    const rect = divRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <motion.div
      ref={divRef}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.8, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsFocused(true)}
      onMouseLeave={() => setIsFocused(false)}
      className={`relative overflow-hidden rounded-[32px] border border-white/[0.08] bg-[#0A0A0F] p-8 group ${className}`}
    >
      {/* Spotlight Gradient Effect */}
      <div
        className="absolute inset-0 transition-opacity duration-500 pointer-events-none -z-10"
        style={{
          opacity: isFocused ? 1 : 0,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(255,255,255,0.06), transparent 40%)`,
        }}
      />
      {/* Subtle border glow on hover */}
      <div 
        className="absolute inset-0 transition-opacity duration-500 opacity-0 pointer-events-none group-hover:opacity-100 -z-10"
        style={{
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(99,102,241,0.15), transparent 40%)`,
        }}
      />
      
      <div className="relative z-10 flex flex-col h-full">
        {children}
      </div>
    </motion.div>
  );
}

// ─── Main Features Component ─────────────────────────────────────────────
export default function Features() {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true });

  return (
    <section className="relative py-32 overflow-hidden bg-[#050507]">
      {/* Background Ambiance */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-indigo-600/10 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="container px-6 mx-auto max-w-[85rem]">
        
        {/* Section Header */}
        <div ref={headerRef} className="max-w-3xl mx-auto mb-24 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="mb-6 text-4xl font-bold tracking-tight text-white md:text-5xl font-display"
          >
            Transform Your <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 via-white/90 to-cyan-300">
              Windows to Mac 
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="max-w-2xl mx-auto text-lg leading-relaxed text-white/50"
          >
            A powerful suite of features hidden right at the top of your screen. 
            Everything feels natural, smooth, and just pure awesomeness!
          </motion.p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-6 gap-6 auto-rows-[minmax(220px,auto)]">

          {/* 1. Cool Music Controls ✨ (Large Card) */}
          <FeatureCard className="col-span-6 row-span-1 lg:col-span-4 lg:row-span-2" delay={0.1}>
            <div className="flex items-start justify-between mb-8">
              <div>
                <div className="flex items-center justify-center w-12 h-12 mb-4 text-indigo-300 rounded-2xl bg-indigo-500/20">
                  <Music className="w-6 h-6" />
                </div>
                <h3 className="mb-2 text-2xl font-bold text-white">Cool Music Controls ✨</h3>
                <p className="max-w-md leading-relaxed text-white/50">Your favorite tunes at your fingertips! Watch album covers blend beautifully with magical color effects in your notch. Skip, play, and groove with style! 🎸</p>
              </div>
            </div>

            {/* Animated Music Player Preview */}
            <div className="flex items-center gap-5 p-5 mt-auto border backdrop-blur-md rounded-[24px] bg-white/[0.03] border-white/[0.05]">
              <div className="flex items-center justify-center w-16 h-16 shadow-lg bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl shrink-0">
                <Music className="w-6 h-6 text-white/80" />
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="font-semibold text-white truncate">Midnight City</h4>
                <p className="mb-3 text-sm truncate text-white/40">M83 · Hurry Up, We're Dreaming</p>
                
                {/* Live Waveform Bars */}
                <div className="relative flex items-center h-8 gap-1 overflow-hidden">
                  {[...Array(30)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="w-1 rounded-full bg-indigo-400/80"
                      animate={{
                        height: [
                          `${Math.random() * 15 + 10}%`,
                          `${Math.random() * 80 + 20}%`,
                          `${Math.random() * 15 + 10}%`
                        ]
                      }}
                      transition={{ duration: 0.8 + Math.random() * 0.5, repeat: Infinity, ease: "easeInOut", delay: i * 0.05 }}
                    />
                  ))}
                </div>
              </div>
              <div className="flex items-center gap-3 text-white sm:gap-4 shrink-0">
                <SkipBack className="w-8 h-8 p-1.5 hover:bg-white/10 rounded-full cursor-pointer transition-colors" />
                <div className="flex items-center justify-center w-12 h-12 text-black transition-transform bg-white rounded-full shadow-lg cursor-pointer shadow-white/20 hover:scale-105">
                  <Play className="w-6 h-6 ml-1" fill="currentColor" />
                </div>
                <SkipForward className="w-8 h-8 p-1.5 hover:bg-white/10 rounded-full cursor-pointer transition-colors" />
              </div>
            </div>
          </FeatureCard>

          {/* 2. Never Miss a Meeting 📆 */}
          <FeatureCard className="col-span-6 row-span-1 md:col-span-3 lg:col-span-2" delay={0.2}>
            <div className="flex items-center gap-3 mb-4">
              <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-rose-500/20 text-rose-300">
                <Calendar className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white">Never Miss a Meeting 📆</h3>
            </div>
            <p className="mb-6 text-sm text-white/50">All your important dates and meetings pop up right in your notch - super easy to see what’s coming up next!</p>
            
            <div className="flex flex-col gap-3 mt-auto">
              <div className="flex items-center gap-4 p-3 border rounded-xl bg-white/10 border-white/10">
                <div className="w-1 h-8 rounded-full bg-rose-400" />
                <div>
                  <p className="text-sm font-medium text-white">Team Sync</p>
                  <p className="text-xs text-white/40">10:00 AM · Zoom</p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-3 border opacity-50 rounded-xl bg-white/[0.02] border-white/[0.05]">
                <div className="w-1 h-8 rounded-full bg-white/20" />
                <div>
                  <p className="text-sm font-medium text-white">Design Review</p>
                  <p className="text-xs text-white/40">1:30 PM · Meet</p>
                </div>
              </div>
            </div>
          </FeatureCard>

          {/* 3. Look Your Best! 🤳 */}
          <FeatureCard className="col-span-6 row-span-1 md:col-span-3 lg:col-span-2" delay={0.3}>
            <div className="flex items-center gap-3 mb-4">
              <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-300">
                <Video className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white">Look Your Best! 🤳</h3>
            </div>
            <p className="mb-6 text-sm text-white/50">Quick camera check before your Zoom call? We’ve got you covered! Just like a tiny mirror in your notch 💫</p>
            
            <div className="relative flex items-center justify-center flex-1 w-full overflow-hidden border bg-white/5 rounded-2xl border-white/10">
               <div className="absolute top-3 right-3 w-2 h-2 bg-emerald-400 rounded-full shadow-[0_0_8px_#34d399] animate-pulse" />
               <Video className="w-8 h-8 text-white/20" />
            </div>
          </FeatureCard>

          {/* 4. Power Buddy 🔋 */}
          <FeatureCard className="col-span-6 row-span-1 md:col-span-3 lg:col-span-2" delay={0.4}>
            <div className="flex items-center gap-3 mb-4">
              <div className="flex items-center justify-center w-10 h-10 text-yellow-300 rounded-xl bg-yellow-500/20">
                <BatteryCharging className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white">Power Buddy 🔋</h3>
            </div>
            <p className="mb-6 text-sm text-white/50">See how much juice your MacBook has left with pretty battery indicators. No more surprise shutdowns! ⚡</p>
            
            <div className="flex items-center justify-center flex-1">
               <div className="relative w-32 h-12 p-1.5 border-2 border-white/20 rounded-xl">
                 <motion.div 
                    className="h-full rounded-lg bg-gradient-to-r from-yellow-400 to-green-400"
                    initial={{ width: "20%" }}
                    whileInView={{ width: "85%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                 />
                 <div className="absolute right-[-6px] top-1/2 -translate-y-1/2 w-1.5 h-4 bg-white/20 rounded-r-sm" />
               </div>
            </div>
          </FeatureCard>

          {/* 5. Share Files Like a Pro! 🚀 */}
          <FeatureCard className="col-span-6 row-span-1 md:col-span-3 lg:col-span-2" delay={0.5}>
            <div className="flex items-center gap-3 mb-4">
              <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-cyan-500/20 text-cyan-300">
                <FileBox className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white">Share Files Like a Pro! 🚀</h3>
            </div>
            <p className="mb-6 text-sm text-white/50">Drop files right into your notch for super-quick sharing! Drag, drop, done! 📱</p>
            
            <div className="flex items-center justify-center flex-1 w-full border-2 border-dashed rounded-xl border-cyan-500/30 bg-cyan-500/5">
               <motion.div 
                 animate={{ y: [0, -5, 0] }}
                 transition={{ duration: 2, repeat: Infinity }}
                 className="flex flex-col items-center text-cyan-400"
               >
                 <FileBox className="w-8 h-8 mb-2" />
                 <span className="text-xs font-semibold tracking-wider uppercase">Drag & Drop</span>
               </motion.div>
            </div>
          </FeatureCard>

          {/* 6. Redesigned HUD 🛠️ */}
          <FeatureCard className="col-span-6 row-span-1 md:col-span-3 lg:col-span-2" delay={0.6}>
            <div className="flex items-center gap-3 mb-4">
              <div className="flex items-center justify-center w-10 h-10 text-gray-300 bg-gray-500/20 rounded-xl">
                <SlidersHorizontal className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white">Redesigned HUD 🛠️</h3>
            </div>
            <p className="mb-6 text-sm text-white/50">Replace the standard macOS brightness/volume HUDs with beautiful sliders that blend seamlessly into the notch.</p>
            
            <div className="flex flex-col justify-center flex-1 gap-4">
               {/* Brightness slider */}
               <div className="flex items-center gap-3 p-2.5 rounded-full bg-white/5 border border-white/10">
                 <Sun className="w-4 h-4 ml-2 text-white/70" />
                 <div className="flex-1 h-1.5 bg-white/10 rounded-full overflow-hidden">
                   <div className="w-[70%] h-full bg-white rounded-full" />
                 </div>
               </div>
               {/* Volume slider */}
               <div className="flex items-center gap-3 p-2.5 rounded-full bg-white/5 border border-white/10">
                 <Volume2 className="w-4 h-4 ml-2 text-white/70" />
                 <div className="flex-1 h-1.5 bg-white/10 rounded-full overflow-hidden">
                   <div className="w-[40%] h-full bg-white rounded-full" />
                 </div>
               </div>
            </div>
          </FeatureCard>

          {/* 7. Pretty & Smart Design 🎨 (Wide Card) */}
          <FeatureCard className="col-span-6 row-span-1 md:col-span-3 lg:col-span-3" delay={0.7}>
            <div className="flex items-center gap-3 mb-4">
              <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-fuchsia-500/20 text-fuchsia-300">
                <Palette className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white">Pretty & Smart Design 🎨</h3>
            </div>
            
            <div className="flex flex-col gap-6 md:flex-row md:items-center">
              <p className="flex-1 text-sm text-white/50">Watch your notch come alive with beautiful colors that match your music! Smooth animations and cool blurry effects make everything look amazing! ✨</p>
              
              <div className="relative flex items-center justify-center w-24 h-24 shrink-0">
                <motion.div 
                  animate={{ rotate: 360, scale: [1, 1.1, 1] }} 
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 rounded-full bg-gradient-to-tr from-fuchsia-500 to-cyan-500 blur-xl opacity-60"
                />
                <div className="relative w-16 h-16 border shadow-xl bg-black/40 backdrop-blur-xl border-white/20 rounded-2xl" />
              </div>
            </div>
          </FeatureCard>

          {/* 8. Works Like Magic! 🪄 (Wide Card) */}
          <FeatureCard className="col-span-6 row-span-1 md:col-span-3 lg:col-span-3" delay={0.8}>
            <div className="flex items-center gap-3 mb-4">
              <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-violet-500/20 text-violet-300">
                <Wand2 className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white">Works Like Magic! 🪄</h3>
            </div>
            
            <div className="flex flex-col gap-6 md:flex-row md:items-center">
              <p className="flex-1 text-sm text-white/50">Everything feels natural and smooth - just like it came with your Mac! No complicated stuff, just pure awesomeness!</p>
              
              <div className="relative flex items-center justify-center w-full h-16 overflow-hidden border md:w-32 bg-white/5 border-white/10 rounded-2xl shrink-0">
                <motion.div 
                  className="absolute w-2 h-2 bg-white rounded-full shadow-[0_0_15px_white]"
                  animate={{ x: [-40, 40, -40] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent blur-sm" />
              </div>
            </div>
          </FeatureCard>

        </div>
      </div>
    </section>
  );
}