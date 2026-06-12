
import { motion } from 'framer-motion';
import { ChevronRight, ArrowRight, Layers, Zap, Shield, Sparkles } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden flex flex-col items-center">
      
      {/* Navigation */}
      <nav className="w-full fixed top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 flex justify-center h-14 items-center px-6">
        <div className="w-full max-w-6xl flex justify-between items-center">
          <div className="font-semibold text-lg tracking-tight">NOTtxJTE</div>
          <div className="hidden md:flex gap-8 text-sm font-medium text-apple-darkGray">
            <a href="#overview" className="hover:text-apple-black transition-colors">Overview</a>
            <a href="#features" className="hover:text-apple-black transition-colors">Features</a>
            <a href="#tech" className="hover:text-apple-black transition-colors">Tech Specs</a>
          </div>
          <button className="bg-apple-black text-white text-xs font-semibold px-4 py-1.5 rounded-full hover:bg-gray-800 transition-colors">
            Get Started
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="overview" className="w-full max-w-6xl mt-32 px-6 flex flex-col items-center text-center pb-24">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-6xl md:text-8xl font-bold tracking-tighter text-apple-black leading-tight max-w-4xl"
        >
          Profoundly powerful. <br className="hidden md:block"/> Beautifully simple.
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="mt-6 text-xl md:text-2xl text-apple-darkGray font-medium max-w-2xl"
        >
          NOTtxJTE is the next generation platform that redefines how you interact with your digital world. Seamless, secure, and stunning.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 flex flex-col md:flex-row gap-6 items-center"
        >
          <button className="bg-apple-blue text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-600 transition-colors shadow-sm cursor-pointer">
            Buy now
          </button>
          <a href="#learn-more" className="text-apple-blue font-medium text-xl flex items-center hover:underline group cursor-pointer">
            Learn more 
            <ChevronRight className="w-5 h-5 ml-1 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
        
        {/* WebGL Placeholder - Hero Parallax Device */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="mt-20 w-full h-[400px] md:h-[600px] bg-apple-gray rounded-[2.5rem] flex items-center justify-center shadow-bento relative overflow-hidden border border-gray-100"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent z-10 pointer-events-none"></div>
          <div className="text-apple-darkGray font-mono text-sm flex flex-col items-center">
            <Layers className="w-8 h-8 mb-3 opacity-50" />
            [ WebGL Area 1: Hero Parallax Device ]
          </div>
        </motion.div>
      </section>

      {/* Feature Showcase - Bento Grid */}
      <section id="features" className="w-full bg-apple-gray py-24 px-6 flex flex-col items-center">
        <div className="w-full max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-apple-black">
              Everything you need. <br/> Nothing you don't.
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
            {/* Feature 1 */}
            <div className="md:col-span-2 bg-white rounded-[24px] p-10 shadow-bento relative overflow-hidden flex flex-col justify-end">
              <div className="absolute top-10 right-10 text-apple-blue bg-blue-50 p-4 rounded-full">
                <Zap className="w-8 h-8" />
              </div>
              <h3 className="text-3xl font-bold text-apple-black mb-2 z-10">Lightning Fast.</h3>
              <p className="text-apple-darkGray text-lg z-10 max-w-sm">Built on a revolutionary architecture that anticipates your moves.</p>
            </div>
            
            {/* Feature 2 */}
            <div className="bg-white rounded-[24px] p-10 shadow-bento flex flex-col justify-end relative">
               <div className="absolute top-10 right-10 text-purple-500 bg-purple-50 p-4 rounded-full">
                <Shield className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-apple-black mb-2">Secure Core.</h3>
              <p className="text-apple-darkGray">End-to-end encryption by default.</p>
            </div>
            
            {/* Feature 3 */}
            <div className="bg-white rounded-[24px] p-10 shadow-bento flex flex-col justify-end relative">
               <div className="absolute top-10 right-10 text-green-500 bg-green-50 p-4 rounded-full">
                <Sparkles className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-apple-black mb-2">Magic Touch.</h3>
              <p className="text-apple-darkGray">Intelligent context awareness.</p>
            </div>
            
            {/* WebGL Placeholder - Feature Exploded View */}
            <div className="md:col-span-2 bg-apple-black text-white rounded-[24px] p-10 shadow-bento relative overflow-hidden flex flex-col justify-between">
              <div>
                <h3 className="text-3xl font-bold mb-2">Look inside.</h3>
                <p className="text-gray-400 text-lg max-w-sm">Every component perfectly engineered for maximum performance.</p>
              </div>
              <div className="h-32 flex items-center justify-center border border-gray-800 rounded-xl bg-gray-900/50 mt-4 backdrop-blur-md font-mono text-sm text-gray-500">
                [ WebGL Area 2: Scroll-Driven Exploded View ]
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action & Sign Up */}
      <section className="w-full max-w-3xl py-32 px-6 flex flex-col items-center text-center">
        <div className="mb-10 w-full h-[200px] border border-gray-100 bg-white rounded-[24px] shadow-sm flex items-center justify-center font-mono text-sm text-apple-darkGray">
           [ WebGL Area 3: Ambient Background Particles (Behind CTA) ]
        </div>
        
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-apple-black mb-6">
          Ready to experience NOTtxJTE?
        </h2>
        <p className="text-xl text-apple-darkGray mb-10 max-w-xl">
          Join the waitlist today and be the first to know when we launch.
        </p>
        
        <form className="w-full max-w-md flex flex-col gap-4">
          <input 
            type="email" 
            placeholder="Email address" 
            className="w-full px-6 py-4 rounded-xl border border-gray-200 bg-apple-gray text-apple-black focus:outline-none focus:ring-2 focus:ring-apple-blue focus:border-transparent transition-all"
            required
            aria-label="Email address"
          />
          <button 
            type="submit" 
            className="w-full bg-apple-black text-white font-semibold py-4 rounded-xl hover:bg-gray-800 transition-colors flex items-center justify-center cursor-pointer"
          >
            Sign Up <ArrowRight className="w-5 h-5 ml-2" />
          </button>
        </form>
        
        <p className="text-sm text-apple-darkGray mt-6">
          By signing up, you agree to our Terms of Service and Privacy Policy.
        </p>
      </section>

      {/* Footer */}
      <footer className="w-full border-t border-gray-200 py-10 px-6 bg-white text-apple-darkGray text-sm">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div>&copy; 2026 NOTtxJTE Inc. All rights reserved.</div>
          <div className="flex gap-6">
            <a href="#privacy" className="hover:text-apple-black transition-colors">Privacy Policy</a>
            <a href="#terms" className="hover:text-apple-black transition-colors">Terms of Use</a>
            <a href="#sales" className="hover:text-apple-black transition-colors">Sales and Refunds</a>
            <a href="#legal" className="hover:text-apple-black transition-colors">Legal</a>
            <a href="#sitemap" className="hover:text-apple-black transition-colors">Site Map</a>
          </div>
        </div>
      </footer>
      
    </div>
  );
}

export default App;