import { motion } from 'framer-motion';
import { Cpu, Layout, Zap, Shield, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function LearnMore() {
  const features = [
    {
      icon: <Layout className="w-6 h-6 text-indigo-400" />,
      title: "Seamless Integration",
      description: "Built with advanced overlay technology, Notch lives natively on your Windows desktop without interfering with your active windows or gaming sessions."
    },
    {
      icon: <Zap className="w-6 h-6 text-cyan-400" />,
      title: "Dynamic Context",
      description: "It intelligently adapts to your current workflow. Whether you're playing music, transferring files, or checking your calendar, Notch shows exactly what you need, when you need it."
    },
    {
      icon: <Cpu className="w-6 h-6 text-emerald-400" />,
      title: "Ultra Lightweight",
      description: "Engineered to ensure zero impact on your PC's performance. It consumes minimal RAM and CPU resources while running incredibly smoothly in the background."
    },
    {
      icon: <Shield className="w-6 h-6 text-rose-400" />,
      title: "Privacy First",
      description: "Notch doesn't track your personal data or send telemetry to the cloud. Everything processes locally on your machine for complete peace of mind."
    }
  ];

  return (
    <div className="relative min-h-screen pt-32 pb-20 overflow-hidden bg-[#0A0A0F]">
      {/* Background Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-indigo-600/10 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="container relative z-10 max-w-6xl px-6 mx-auto">
        
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto mb-24 text-center"
        >
          <h1 className="mb-6 text-5xl font-bold tracking-tight text-white md:text-6xl font-display">
            Elevate Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">Workspace.</span>
          </h1>
          <p className="text-lg leading-relaxed text-white/50 md:text-xl">
            Notch is more than just a visual upgrade. It's a fundamental shift in how you interact with your Windows PC, bringing the elegant "Dynamic Island" experience directly to your desktop.
          </p>
        </motion.div>

        {/* The Story / About Section */}
        <div className="grid items-center gap-12 mb-32 md:grid-cols-2">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="mb-4 text-3xl font-bold text-white font-display">Bridging the Gap</h2>
            <p className="mb-6 leading-relaxed text-white/50">
              For years, Windows users have relied on the taskbar and system tray for quick information. While functional, it often breaks your focus when you have to look away from the center of your screen.
            </p>
            <p className="leading-relaxed text-white/50">
              We built Notch to solve this. By utilizing the unused space at the top center of your monitor, we've created a beautiful, interactive command center that feels like a native part of the operating system. It's there when you need it, and quietly fades away when you don't.
            </p>
          </motion.div>

          {/* Abstract Visual Representation */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-[300px] md:h-[400px] rounded-3xl border border-white/10 bg-white/[0.02] flex items-center justify-center overflow-hidden"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.1)_0%,transparent_70%)]" />
            <motion.div 
              animate={{ width: ["120px", "280px", "120px"], height: ["36px", "80px", "36px"], borderRadius: ["18px", "24px", "18px"] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="bg-black shadow-[0_0_30px_rgba(99,102,241,0.3)] border border-white/10 flex items-center justify-center"
            >
              <div className="flex gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-white/40 animate-pulse" />
                <div className="w-1.5 h-1.5 rounded-full bg-white/20" />
                <div className="w-1.5 h-1.5 rounded-full bg-white/20" />
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Features Grid */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid gap-6 mb-32 md:grid-cols-2 lg:grid-cols-4"
        >
          {features.map((feature, index) => (
            <div key={index} className="p-8 rounded-3xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-colors">
              <div className="flex items-center justify-center w-12 h-12 mb-6 rounded-2xl bg-white/[0.05] border border-white/10">
                {feature.icon}
              </div>
              <h3 className="mb-3 text-lg font-bold text-white">{feature.title}</h3>
              <p className="text-sm leading-relaxed text-white/40">{feature.description}</p>
            </div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center"
        >
          <h2 className="mb-6 text-3xl font-bold text-white font-display">Ready to upgrade your desktop?</h2>
          <div className="flex flex-col gap-4 sm:flex-row">
            <a
              href="/Notch-Setup.exe"
              download
              className="flex items-center justify-center gap-2 px-8 py-4 text-sm font-bold text-black transition-all bg-white rounded-full hover:bg-white/90 hover:scale-105"
            >
              Download for Windows
              <ArrowRight className="w-4 h-4" />
            </a>
            <Link to="/support">
              <button className="flex items-center justify-center px-8 py-4 text-sm font-bold transition-all border rounded-full text-white/70 border-white/10 hover:border-white/20 hover:text-white">
                Read the Docs
              </button>
            </Link>
          </div>
        </motion.div>

      </div>
    </div>
  );
}