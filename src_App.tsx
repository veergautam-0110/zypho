import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, User, ArrowRight, Compass, RotateCcw, Gavel } from 'lucide-react';

export default function App() {
  const [isDiscoveryOpen, setIsDiscoveryOpen] = useState(false);
  const [selectedCollection, setSelectedCollection] = useState<string | null>(null);

  const collections = {
    'Whiskey & Bourbon': [
      { name: 'Lagavulin 16 Year', region: 'Islay, Scotland', notes: 'Peat, Smoke, Seaweed' },
      { name: 'Pappy Van Winkle 15', region: 'Kentucky, USA', notes: 'Caramel, Oak, Spice' },
      { name: 'Hibiki Harmony', region: 'Osaka, Japan', notes: 'Honey, Orange, Rose' },
    ],
    'Rare Vintages': [
      { name: 'Château Margaux 1996', region: 'Bordeaux, France', notes: 'Blackberry, Violets' },
      { name: 'Dom Perignon P2 2002', region: 'Champagne, France', notes: 'Toasted Brioche, Lemon' },
    ],
    'Small Batch Gins': [
      { name: 'Monkey 47', region: 'Black Forest, Germany', notes: 'Juniper, Berries, Herbs' },
      { name: 'The Botanist', region: 'Islay, Scotland', notes: 'Citrus, Mint, Floral' },
    ],
    'Aged Rums': [
      { name: 'Zacapa XO', region: 'Guatemala', notes: 'Vanilla, Almond, Tobacco' },
      { name: 'Diplomático Reserva', region: 'Venezuela', notes: 'Maple, Orange Peel' },
    ]
  };

  const handleDiscoveryReset = () => {
    setSelectedCollection(null);
    setIsDiscoveryOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col bg-background selection:bg-primary-container selection:text-on-primary-container">
      {/* Top App Bar */}
      <header className="bg-surface/80 backdrop-blur-xl w-full border-b border-outline-variant/30 shadow-[0_4px_30px_rgba(0,0,0,0.5)] flex justify-between items-center px-6 h-20 sticky top-0 z-50">
        <button 
          id="menu-toggle"
          className="text-primary hover:text-primary-container transition-colors duration-300 p-2 rounded-full hover:bg-surface-container-high transition-all active:scale-95"
        >
          <Menu size={24} />
        </button>
               <div className="font-display text-primary tracking-[0.2em] uppercase text-3xl md:text-5xl font-bold cursor-pointer" onClick={handleDiscoveryReset}>
          ZYPHO
        </div>

        <div className="flex gap-4">
          <button className="text-primary hover:text-primary-container transition-colors duration-300 p-2 rounded-full hover:bg-surface-container-high transition-all active:scale-95">
            <User size={24} />
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow flex items-center justify-center relative overflow-hidden px-6 py-24">
        {/* Ambient Glow */}
        <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
          <div className="w-[80vw] h-[80vw] max-w-[800px] max-h-[800px] bg-primary/5 rounded-full blur-[100px] opacity-50 mix-blend-screen" />
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col items-center text-center">
          <AnimatePresence mode="wait">
            {!isDiscoveryOpen ? (
              <motion.div
                key="landing"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
                className="flex flex-col items-center w-full"
              >
                {/* Hero Glass Container */}
                <div className="bg-surface-container/10 backdrop-blur-[20px] border border-outline-variant/20 rounded-xl p-8 md:p-20 shadow-[0_8px_32px_rgba(233,193,118,0.05)] flex flex-col items-center max-w-4xl w-full relative overflow-hidden group">
                  {/* Inner Glint Trace */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none" />
                  
                  <h1 className="font-display text-5xl md:text-8xl text-primary mb-6 tracking-tight">
                    ZYPHO
                  </h1>
                  <h2 className="font-display text-2xl md:text-4xl text-on-surface-variant mb-12 max-w-2xl leading-relaxed">
                    The Art of Spirits Discovery.
                  </h2>

                  <button 
                    onClick={() => setIsDiscoveryOpen(true)}
                    className="bg-gradient-to-r from-primary to-primary-container text-on-primary font-label text-sm px-10 py-5 rounded-full uppercase tracking-[0.2em] shadow-[0_0_20px_rgba(233,193,118,0.2)] hover:shadow-[0_0_40px_rgba(233,193,118,0.4)] transition-all duration-500 transform hover:-translate-y-1 relative overflow-hidden group/btn"
                  >
                    <span className="relative z-10 flex items-center gap-3">
                      Start Discovery
                      <ArrowRight size={18} />
                    </span>
                    <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-20 group-hover/btn:animate-glint" />
                  </button>
                </div>

                {/* Decorative Elements */}
                <div className="mt-24 w-full flex justify-center opacity-40">
                  <div className="flex gap-12 items-center grayscale">
                    <img 
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuB4-sKc2CLUKv_msH6DgzzC80_VvB13keBSvWPxd-gCPVi3El29dEc1LOSpY8NfvlzZfX1M5CJcqvmEAdDvlNRGsAsK_iZ2AHY2lMDepoI5cXflRmAi8uG4mfQT-Cj83ZyZZCN-80pUG_fItu_RKMX61TBAjyGTyBvwnjBGTGHbitslRGedEWQukJoJmz-1iQw1TOkEebQ6RlxuNh_wc39mc-PKusfpVu1y3BnYiAufROby7l2t8CrBUnektVuLIj59kfiMNj41TRhW" 
                      alt="Whiskey Cask" 
                      className="h-10 md:h-12 object-contain"
                      referrerPolicy="no-referrer"
                    />
                    <img 
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuCKsezseAJ2pv6mNkBzqZOEKtmbeTd2ZMFN6k38uVuQFB2F6KyXzy30qaZYqrvD1pwnU-twioYccW9xDt0Iw0ldRhA-3gQodAsykTLRXEuoz6d9kJQBkn6Sl-50foH8HySmgBUIza3yFG8FDR8T3cpgH9stfVYkRlZNTcwUbCFupQVKYT2e1-i2rdPOaCCwtrOllZ-H60onzjUUc67Yk8Q6ugY4QqHy_IDaLL9h9-yToJYSSyBmUguTmtRlH5qAeUfqXrmqundAbaEK" 
                      alt="Crystal Glass" 
                      className="h-12 md:h-16 object-contain"
                      referrerPolicy="no-referrer"
                    />
                    <img 
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuA1m2wtHTS9VetRbEfeHOT1Qcfpoq2kH4s3IiGoMPjGWOw_H7tl4ZCFGmfYSUJczahFRxEE4f5XGnaww6Q2p99pdzXiwTmky-f2HelXvNcLj45n9W_UDn0y-90FOSyYvO54ojWq7Pcf4FE2Kvy_VY295CKajf8Vq_sagHJgiGR-zAHrmrosNkZWgMBQ0fbY8i_naed1PaSFLrZJ11gOxYiCzrimYZ_C8Z4DRFuAa4eOk9uRYqVIFzyHcqwr10Bdy8LVWORJtdFh__a-" 
                      alt="Copper Still" 
                      className="h-14 md:h-20 object-contain"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="discovery"
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="w-full max-w-4xl bg-surface-container-low/40 backdrop-blur-3xl border border-outline-variant/30 rounded-2xl p-8 md:p-12 shadow-2xl"
              >
                <AnimatePresence mode="wait">
                  {!selectedCollection ? (
                    <motion.div 
                      key="list"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="text-left"
                    >
                      <span className="font-label text-primary tracking-[0.3em] font-semibold text-xs uppercase mb-4 block">Discovery Initialized</span>
                      <h3 className="font-display text-4xl text-on-surface mb-8">What are we tasting today?</h3>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {Object.keys(collections).map((collection) => (
                          <button 
                            key={collection}
                            onClick={() => setSelectedCollection(collection)}
                            className="group relative p-6 bg-surface-container-high/50 border border-outline-variant/20 rounded-xl hover:border-primary/50 transition-all duration-300 text-left overflow-hidden"
                          >
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                            <span className="font-display text-xl text-on-surface group-hover:text-primary transition-colors block mb-2">{collection}</span>
                            <p className="text-on-surface-variant text-sm line-clamp-2">Explore the finest selections curated by our master distillers.</p>
                          </button>
                        ))}
                      </div>

                      <button 
                        onClick={() => setIsDiscoveryOpen(false)}
                        className="mt-12 text-on-surface-variant hover:text-primary transition-colors flex items-center gap-2 group"
                      >
                        <ArrowRight className="rotate-180 group-hover:-translate-x-1 transition-transform" size={18} />
                        <span className="font-label text-xs uppercase tracking-widest">Return to Library</span>
                      </button>
                    </motion.div>
                  ) : (
                    <motion.div 
                      key="detail"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="text-left"
                    >
                      <button 
                        onClick={() => setSelectedCollection(null)}
                        className="text-primary hover:text-primary-container transition-colors flex items-center gap-2 mb-6 group"
                      >
                        <ArrowRight className="rotate-180 group-hover:-translate-x-1 transition-transform" size={16} />
                        <span className="font-label text-[10px] uppercase tracking-widest">Back to Collections</span>
                      </button>

                      <h3 className="font-display text-4xl text-primary mb-8">{selectedCollection}</h3>
                      
                      <div className="space-y-4">
                        {collections[selectedCollection as keyof typeof collections].map((item, idx) => (
                          <motion.div 
                            key={item.name}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            className="p-6 bg-surface-container-high/30 border border-outline-variant/10 rounded-xl flex justify-between items-center group hover:bg-surface-container-high/50 transition-colors"
                          >
                            <div>
                              <h4 className="font-display text-xl text-on-surface">{item.name}</h4>
                              <p className="text-primary/70 text-xs font-mono uppercase tracking-widest mt-1">{item.region}</p>
                              <p className="text-on-surface-variant text-sm mt-3 italic">Notes: {item.notes}</p>
                            </div>
                            <button className="h-10 w-10 rounded-full border border-primary/20 flex items-center justify-center text-primary hover:bg-primary hover:text-on-primary transition-all">
                              <ArrowRight size={16} />
                            </button>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-surface-container-low border-t border-outline-variant/10 w-full py-10 px-6 flex flex-col items-center gap-6 text-center">
        <div className="font-mono text-[10px] md:text-xs uppercase tracking-widest text-on-tertiary-fixed-variant leading-relaxed">
          ZYPHO © 2024. PLEASE DRINK RESPONSIBLY. FOR AGES 21+ ONLY.
        </div>
        <div className="flex gap-8 font-mono text-[10px] md:text-xs uppercase tracking-widest">
          <a href="#" className="text-on-tertiary-fixed-variant hover:text-primary transition-colors">Terms</a>
          <a href="#" className="text-on-tertiary-fixed-variant hover:text-primary transition-colors">Privacy</a>
          <a href="#" className="text-on-tertiary-fixed-variant hover:text-primary transition-colors">State Pricing</a>
        </div>
      </footer>

      {/* Mobile Bottom Navigation */}
      <nav className="md:hidden bg-surface-container-lowest/90 backdrop-blur-2xl border-t border-outline-variant/20 fixed bottom-0 left-0 w-full z-50 flex justify-around items-center h-24 px-6 pb-safe rounded-t-2xl">
        <button 
          onClick={() => { setIsDiscoveryOpen(true); setSelectedCollection(null); }}
          className="flex flex-col items-center justify-center text-on-tertiary-fixed-variant opacity-60 hover:opacity-100 hover:text-primary transition-all group"
        >
          <Compass size={24} className="mb-1 group-hover:scale-110 transition-transform" />
          <span className="font-label text-[10px] uppercase tracking-tighter">Discovery</span>
        </button>
        <button 
          onClick={handleDiscoveryReset}
          className="flex flex-col items-center justify-center text-on-tertiary-fixed-variant opacity-60 hover:opacity-100 hover:text-primary transition-all group"
        >
          <RotateCcw size={24} className="mb-1 group-hover:scale-110 transition-transform" />
          <span className="font-label text-[10px] uppercase tracking-tighter">Reset</span>
        </button>
        <button className="flex flex-col items-center justify-center text-on-tertiary-fixed-variant opacity-60 hover:opacity-100 hover:text-primary transition-all group">
          <Gavel size={24} className="mb-1 group-hover:scale-110 transition-transform" />
          <span className="font-label text-[10px] uppercase tracking-tighter">Compliance</span>
        </button>
      </nav>
    </div>
  );
}
