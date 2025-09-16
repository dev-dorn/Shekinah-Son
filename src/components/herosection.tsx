import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <section id="home" className="hero text-white py-24 md:py-36 angle-bottom">
        <div className="container mx-auto px-4 text-center">
            <motion.div className="mx-auto max-w-4xl" initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: 'easeOut' }}>
                <motion.div className="inline-block px-4 py-1 rounded-full bg-white/10 backdrop-blur-sm text-sm tracking-wide mb-5" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }}>
                    Welcome to Shekinah
                </motion.div>
                <motion.h1 className="heading-font text-5xl md:text-7xl font-bold mb-6 leading-tight" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 }}>
                    Light Of Hope Christian Church
                </motion.h1>
                <motion.p className="text-lg md:text-2xl mb-10 max-w-2xl mx-auto text-white/90" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35 }}>
                    A place of worship, fellowship, and spiritual growth
                </motion.p>
                <motion.div className="flex flex-col sm:flex-row justify-center gap-4" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.45 }}>
                    <a href="#contact" className="btn-primary-gradient text-white font-semibold py-3.5 px-10 rounded-full transition duration-300">Join Our Services</a>
                    <a href="#sermons" className="bg-transparent hover:bg-white/90 hover:text-gray-900 border-2 border-white/80 text-white font-semibold py-3.5 px-10 rounded-full transition duration-300">Watch Online</a>
                </motion.div>
            </motion.div>
        </div>
    </section>
    
  );
};

export default Hero;
