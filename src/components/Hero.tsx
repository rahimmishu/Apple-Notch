import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const SLIDER_PHOTOS = [
  "/slide1.jpg",
  "/slide2.png",
  "/slide3.png",
  "/slide4.jpg",
  "/slide5.png",
  "/slide6.jpg",
  "/slide7.png",
];

export default function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % SLIDER_PHOTOS.length);
    }, 3000); 
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-32 md:pt-40 overflow-hidden bg-[#050507]">

      {/* Subtle radial glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full bg-[radial-gradient(ellipse_at_center,_#1a1a2e_0%,_transparent_70%)] opacity-80" />
        <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-[radial-gradient(ellipse_at_center,_rgba(99,102,241,0.08)_0%,_transparent_70%)]" />
      </div>

      {/* Noise texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")` }}
      />

      <motion.div style={{ y, opacity }} className="container z-10 flex flex-col items-center px-6 mx-auto text-center">
        
        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="font-bold tracking-[-0.04em] leading-[0.95] mb-6"
          style={{ fontFamily: "'SF Pro Display', -apple-system, 'Helvetica Neue', sans-serif" }}
        >
          <span className="block text-[clamp(64px,12vw,130px)] text-white">The Notch.</span>
          <span className="block text-[clamp(40px,8vw,90px)] text-white/30 mt-1 font-semibold">Now on Windows.</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-[17px] md:text-[19px] text-white/40 max-w-[520px] mb-14 leading-[1.6] font-normal"
          style={{ fontFamily: "'SF Pro Text', -apple-system, 'Helvetica Neue', sans-serif" }}
        >
          A seamless Dynamic Island experience for your desktop.
          Media controls, system stats, notifications — all in one elegant space.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="flex flex-col items-center gap-4 sm:flex-row"
        >
          <motion.a
            href="/notch.exe"
            download
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="group flex items-center gap-2.5 px-7 py-3 rounded-full bg-white text-black text-[15px] font-semibold transition-all duration-200 hover:bg-white/90 cursor-pointer"
            style={{ fontFamily: "'SF Pro Text', -apple-system, sans-serif" }}
          >
            {/* Apple SVG Icon Here */}
            <svg viewBox="0 0 384 512" fill="currentColor" className="w-[14px] h-[14px] pb-[1px] text-black">
              <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.3 48.6-.8 90.5-90.8 103.1-125.5-44.3-18.9-62.4-59.5-62.2-85.1zM210.1 87c21.8-26.8 31.2-54.6 29.2-86.2-24.3 3.4-53.8 18.6-72.7 44.4-15.6 21-29.2 49-26 84.7 27.6 2.3 50.8-12.7 69.5-42.9z" />
            </svg>
            Download Free
            <ArrowRight className="w-3.5 h-3.5 opacity-0 -ml-2 group-hover:opacity-100 group-hover:ml-0 transition-all duration-200" />
          </motion.a>

          <Link to="/learn-more">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center gap-2 px-7 py-3 rounded-full text-white/60 text-[15px] font-medium border border-white/[0.1] hover:border-white/[0.2] hover:text-white/80 transition-all duration-200"
              style={{ fontFamily: "'SF Pro Text', -apple-system, sans-serif" }}
            >
              Learn More
            </motion.button>
          </Link>
        </motion.div>

        {/* Fine print */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-5 text-[12px] text-white/20"
          style={{ fontFamily: "'SF Pro Text', -apple-system, sans-serif" }}
        >
          Compatible with Windows 10 & 11 · Free forever
        </motion.p>
      </motion.div>

      {/* ── Media Section ── */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="z-10 w-full max-w-[85rem] px-6 mx-auto mt-20"
      >
        <div className="relative flex flex-col items-stretch justify-center gap-6 lg:flex-row h-[500px] lg:h-[600px]">
          
          {/* ১. Fixed YouTube Video Section */}
          <div className="relative z-10 w-full lg:w-[35%] h-full rounded-[30px] overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.6)] bg-[#0a0a0f]">
            <iframe
              className="w-full h-full opacity-90 pointer-events-none scale-[1.35]"
              src="https://www.youtube.com/embed/e1QTM-IwH7M?autoplay=1&mute=1&loop=1&playlist=e1QTM-IwH7M&controls=0&showinfo=0&rel=0&modestbranding=1"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>

          {/* ২. Auto Sliding Photos Section */}
          <div className="relative z-10 w-full lg:w-[65%] h-full overflow-hidden rounded-[30px] border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.6)] bg-[#0a0a0f]">
            
            <motion.div
              className="flex w-full h-full"
              animate={{ x: `-${currentSlide * 100}%` }}
              transition={{
                ease: [0.25, 1, 0.5, 1], 
                duration: 0.8, 
              }}
            >
              {SLIDER_PHOTOS.map((src, i) => (
                <div key={i} className="relative w-full h-full shrink-0">
                  <img
                    src={src}
                    alt={`slide-${i}`}
                    className="object-cover w-full h-full opacity-90"
                  />
                  <div className="absolute inset-x-0 bottom-0 h-32 pointer-events-none bg-gradient-to-t from-black/80 to-transparent" />
                </div>
              ))}
            </motion.div>

            <div className="absolute flex gap-2.5 -translate-x-1/2 bottom-8 left-1/2 z-20">
              {SLIDER_PHOTOS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentSlide(i)}
                  className={`h-2 rounded-full transition-all duration-500 ${
                    i === currentSlide ? "w-8 bg-white" : "w-2 bg-white/30 hover:bg-white/60"
                  }`}
                />
              ))}
            </div>

          </div>

        </div>
      </motion.div>

      <div className="absolute bottom-0 left-0 right-0 z-20 h-48 pointer-events-none bg-gradient-to-t from-[#050507] to-transparent" />
    </section>
  );
}