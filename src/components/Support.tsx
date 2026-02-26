import { motion } from 'framer-motion';
import { Mail, Book, MessageCircle, Search, FileQuestion, ChevronRight } from 'lucide-react';

export default function Support() {
  // সাধারণ কিছু প্রশ্নোত্তর (FAQ)
  const faqs = [
    {
      q: "How do I install Notch?",
      a: "Simply download the installer from our home page, run the .exe file, and follow the on-screen instructions. Notch will automatically start and sit at the top of your screen."
    },
    {
      q: "Is Notch compatible with Windows 10?",
      a: "Yes! Notch is fully compatible with both Windows 10 and Windows 11."
    },
    {
      q: "Will this slow down my PC?",
      a: "Not at all. Notch is built to be ultra-lightweight, consuming minimal RAM and 0% CPU when idle."
    },
    {
      q: "How can I customize the modules?",
      a: "Right-click the Notch and open 'Settings'. From there, you can drag and drop modules, change colors, and adjust the size."
    }
  ];

  return (
    <div className="relative min-h-screen pt-32 pb-24 overflow-hidden bg-[#0A0A0F]">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-indigo-600/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="container relative z-10 max-w-5xl px-6 mx-auto">
        
        {/* Header & Search Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center mb-20 text-center"
        >
          <h1 className="mb-6 text-5xl font-bold tracking-tight text-white md:text-6xl font-display">
            How can we <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">help?</span>
          </h1>
          <p className="max-w-2xl mb-10 text-lg text-white/50">
            Search our knowledge base or get in touch with our support team. We're here to make your experience seamless.
          </p>

          {/* Search Bar */}
          <div className="relative w-full max-w-xl group">
            <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
              <Search className="w-5 h-5 transition-colors text-white/40 group-focus-within:text-indigo-400" />
            </div>
            <input 
              type="text" 
              placeholder="Search for articles, guides, or FAQs..." 
              className="w-full py-4 pl-12 pr-4 text-white placeholder-white/30 transition-all border outline-none bg-white/[0.03] border-white/10 rounded-2xl focus:border-indigo-500/50 focus:bg-white/[0.05] focus:ring-4 focus:ring-indigo-500/10 shadow-[0_4px_20px_rgba(0,0,0,0.2)]"
            />
          </div>
        </motion.div>

        {/* Support Option Cards */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid gap-6 mb-24 md:grid-cols-3"
        >
          {/* Card 1: Documentation */}
          <div className="p-8 transition-all border group rounded-3xl border-white/5 bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/10 cursor-pointer hover:-translate-y-1">
            <div className="flex items-center justify-center w-12 h-12 mb-6 text-indigo-400 transition-transform border rounded-2xl bg-indigo-500/10 border-indigo-500/20 group-hover:scale-110">
              <Book className="w-6 h-6" />
            </div>
            <h3 className="mb-3 text-xl font-bold text-white">Documentation</h3>
            <p className="mb-6 text-sm leading-relaxed text-white/40">Detailed guides on how to install, configure, and get the most out of Notch.</p>
            <div className="flex items-center text-sm font-semibold text-indigo-400">
              Read Guides <ChevronRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
            </div>
          </div>

          {/* Card 2: Email */}
          <a href="mailto:rahimsaroarmishu@gmail.com" className="block p-8 transition-all border group rounded-3xl border-white/5 bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/10 hover:-translate-y-1">
            <div className="flex items-center justify-center w-12 h-12 mb-6 transition-transform border rounded-2xl bg-cyan-500/10 border-cyan-500/20 text-cyan-400 group-hover:scale-110">
              <Mail className="w-6 h-6" />
            </div>
            <h3 className="mb-3 text-xl font-bold text-white">Email Support</h3>
            <p className="mb-6 text-sm leading-relaxed text-white/40">Can't find what you're looking for? Send us an email and we'll reply within 24 hours.</p>
            <div className="flex items-center text-sm font-semibold text-cyan-400">
              rahimsaroarmishu@gmail.com <ChevronRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
            </div>
          </a>

          {/* Card 3: Community */}
          <div className="p-8 transition-all border group rounded-3xl border-white/5 bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/10 cursor-pointer hover:-translate-y-1">
            <div className="flex items-center justify-center w-12 h-12 mb-6 transition-transform border rounded-2xl bg-emerald-500/10 border-emerald-500/20 text-emerald-400 group-hover:scale-110">
              <MessageCircle className="w-6 h-6" />
            </div>
            <h3 className="mb-3 text-xl font-bold text-white">Community</h3>
            <p className="mb-6 text-sm leading-relaxed text-white/40">Join our Discord server to chat with other users, share setups, and request features.</p>
            <div className="flex items-center text-sm font-semibold text-emerald-400">
              Join Discord <ChevronRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
            </div>
          </div>
        </motion.div>

        {/* FAQs Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto"
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="flex items-center justify-center w-10 h-10 border rounded-xl bg-white/5 border-white/10">
              <FileQuestion className="w-5 h-5 text-white/70" />
            </div>
            <h2 className="text-3xl font-bold text-white font-display">Frequently Asked Questions</h2>
          </div>
          
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="p-6 transition-colors border rounded-2xl border-white/5 bg-white/[0.02] hover:bg-white/[0.05]">
                <h3 className="mb-3 text-lg font-semibold text-white/90">{faq.q}</h3>
                <p className="text-sm leading-relaxed text-white/50">{faq.a}</p>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </div>
  );
}