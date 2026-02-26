import { Github, Twitter, Heart, Mail, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function Footer() {
  const footerLinks = [
    {
      title: "Product",
      links: [
        { label: "Features", href: "/", isInternal: true },
        { label: "Learn More", href: "/learn-more", isInternal: true },
        { label: "Download", href: "/notch.exe", isInternal: false },
      ]
    },
    {
      title: "Support",
      links: [
        { label: "Help Center", href: "/support", isInternal: true },
        { label: "Contact Us", href: "mailto:support@notch.app", isInternal: false },
        { label: "Discord", href: "#", isInternal: false },
      ]
    },
    {
      title: "Legal",
      links: [
        { label: "Privacy Policy", href: "#", isInternal: false },
        { label: "Terms of Service", href: "#", isInternal: false },
      ]
    }
  ];

  const socialLinks = [
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Mail, href: "mailto:support@notch.app", label: "Email" },
  ];

  return (
    <footer className="relative pt-20 overflow-hidden border-t border-white/[0.05] bg-[#050507]">
      {/* Subtle background glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[1px] bg-gradient-to-r from-transparent via-indigo-500/20 to-transparent" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-32 bg-indigo-500/5 blur-[100px] pointer-events-none" />

      <div className="container relative z-10 px-6 pt-12 pb-8 mx-auto max-w-7xl">
        
        {/* Top Grid Section */}
        <div className="grid grid-cols-1 gap-12 pb-16 md:grid-cols-2 lg:grid-cols-5 md:gap-8">
          
          {/* Brand Column */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <div className="flex items-center gap-3 mb-6">
              <img src="/icon.ico" alt="Notch Logo" className="w-8 h-8 rounded-[10px] object-cover shadow-[0_0_20px_rgba(255,255,255,0.1)]" />
              <span className="text-2xl font-bold tracking-tight text-white font-display">Notch</span>
            </div>
            <p className="max-w-xs mb-8 text-sm leading-relaxed text-white/40">
              Transforming your unused screen space into a beautiful, interactive command center for Windows.
            </p>
            
            {/* Social Icons */}
            <div className="flex items-center gap-3">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="flex items-center justify-center w-10 h-10 transition-all duration-300 border rounded-full border-white/5 bg-white/[0.02] hover:bg-white/[0.06] hover:border-white/20 hover:scale-110 group"
                >
                  <Icon className="w-4 h-4 transition-colors duration-300 text-white/40 group-hover:text-white/90" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Links Columns */}
          {footerLinks.map((section, index) => (
            <motion.div 
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 * (index + 1) }}
              className="flex flex-col"
            >
              <h4 className="mb-6 font-semibold text-white">{section.title}</h4>
              <ul className="flex flex-col gap-4">
                {section.links.map((link) => (
                  <li key={link.label}>
                    {link.isInternal ? (
                      <Link 
                        to={link.href}
                        className="flex items-center gap-1 text-sm transition-colors text-white/40 hover:text-white group w-fit"
                      >
                        {link.label}
                        <ArrowRight className="w-3 h-3 text-indigo-400 transition-transform -translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0" />
                      </Link>
                    ) : (
                      <a 
                        href={link.href}
                        {...(link.label === "Download" ? { download: true } : {})}
                        className="flex items-center gap-1 text-sm transition-colors text-white/40 hover:text-white group w-fit"
                      >
                        {link.label}
                        <ArrowRight className="w-3 h-3 text-indigo-400 transition-transform -translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0" />
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Divider */}
        <div className="w-full h-px mb-8 bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        {/* Bottom Bar */}
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-xs text-white/30"
          >
            &copy; {new Date().getFullYear()} Notch App. All rights reserved.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-1.5 text-xs text-white/30"
          >
            Crafted with
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
            </motion.span>
            by Rahim Saroar
          </motion.div>
        </div>
      </div>

      {/* Giant Background Text */}
      <div 
        className="absolute bottom-[-40px] left-1/2 -translate-x-1/2 text-[12vw] font-black text-white/[0.015] select-none pointer-events-none tracking-tighter whitespace-nowrap overflow-hidden z-0"
        style={{ fontFamily: "'SF Pro Display', -apple-system, sans-serif" }}
      >
        
      </div>
    </footer>
  );
}