const Hero = () => {
  return (
    <section className="hero text-white py-20 md:py-32">
        <div className="container mx-auto px-4 text-center">
            <h1 className="heading-font text-4xl md:text-6xl font-bold mb-6">
                Light Of Hope Christian Church
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">A place pf worship, fellowship, and spiritual growth</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
                <button className="bg-blue-600 hover:bg-amber-700 text-white font-bold py-3 px-8 rounded-full transition duration-300">
                    Join Our Services
                </button>
                <button className="bg-transparent hover:bg-white hover:text-gray-900 border-2 border-white text-white font-bold py-3 px-8 rounded-full transition duration-300">
                    Watch Online
                </button>
            </div>
        </div>
    </section>
    
  );
};

export default Hero;
