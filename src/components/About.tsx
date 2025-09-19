import { motion } from 'framer-motion'

interface CardData {
    title: string;
    description: string;
    image: string;
    icon: string;
}
const cardData: CardData[] = [
    {
        title: "Who we are",
        description: "We are a group of the most ordinary people you could ever meet. We all have our lives, our dreams, our problems, and concerns. However, once we get together under this wonderful roof, we forget all about what hurts. We share only one powerful goal, which is to get closer to God mentally and spiritually.",
        image: "/youth.jpg",
        icon: "fas fa-arrow-right ml-2"
    },
    {
        title: "what we Do",
        description: "We believe the church is a place to learn more about our God! If you are looking for a church where you can belong and where God’s love is changing people, you’ve come to the right place. You will find answers, healing, restoration, and life-long relationships with us. This is a place for real people and faith.",
        image: "/church.jpg",
        icon: "fas fa-arrow-right ml-2"

    },
    {
        title: "What to expect",
        description: "You can expect to be welcomed into a friendly, positive environment. Our sermons and are filled with peace and praises, readings and inspiring messages from the Bible. We are a big family of generous, helpful, and kindhearted members. You have a free source of coffee and cookings.",
        image: "/children.jpg",
        icon: "fas fa-arrow-right ml-2"
    }

]


const About = () => {
    return (
        <>
						<section id="about" className="py-20 md:py-28 bg-white bg-fixed-church">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row items-center">
                        <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
                            <img src="/church.jpg"
                                alt="church gathering"
                                className="rounded-lg shadow-xl w-full h-auto" />

                        </div>
						<div className="md:w-1/2 bg-white/70 backdrop-blur rounded-3xl border border-gray-100 shadow-xl p-6 md:p-8">
							<h2 className="heading-font text-3xl md:text-4xl font-bold text-gray-900 tracking-tight mb-6">Our Mission & Vision</h2>
							<div className="space-y-4 mb-8">
								<div>
									<h3 className="font-bold text-gray-800">Vision</h3>
									<p className="text-gray-600">To raise mature sons of God that are able to manifest the tangible presence of God in every place.</p>
								</div>
								<div>
									<h3 className="font-bold text-gray-800">Mission</h3>
									<p className="text-gray-600">To ensure people come to the knowledge of truth through the teaching of the word of God.</p>
								</div>
							</div>
							<div className="flex items-center justify-center mt-4">
								<div className="relative w-96 h-96 md:w-[28rem] md:h-[28rem] rounded-full p-6 bg-gradient-to-br from-blue-50 to-white shadow-2xl ring-1 ring-gray-100 drop-shadow-[0_0_20px_rgba(37,99,235,0.15)]">
								<svg viewBox="0 0 300 300" className="absolute inset-0 w-full h-full">
									<defs>
										<linearGradient id="ringGrad" x1="0%" y1="0%" x2="100%" y2="100%">
											<stop offset="0%" stopColor="#2563eb" />
											<stop offset="50%" stopColor="#7c3aed" />
											<stop offset="100%" stopColor="#ec4899" />
										</linearGradient>
										<linearGradient id="centerGrad" x1="0%" y1="0%" x2="100%" y2="100%">
											<stop offset="0%" stopColor="#2563eb" />
											<stop offset="50%" stopColor="#7c3aed" />
											<stop offset="100%" stopColor="#ec4899" />
										</linearGradient>
										<marker id="arrow" markerWidth="10" markerHeight="10" refX="6" refY="3" orient="auto-start-reverse">
											<path d="M0,0 L0,6 L6,3 z" fill="#2563eb" />
										</marker>
									</defs>

									{/* Center */}
									<g>
										<motion.circle cx="150" cy="150" r="40" fill="url(#centerGrad)" animate={{ scale: [1, 1.05, 1] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }} />
										<text x="150" y="146" textAnchor="middle" className="fill-white" style={{ fontWeight: 800, fontSize: 12, letterSpacing: 0.3 }}>
											<tspan x="150" dy="0">Our Core</tspan>
											<tspan x="150" dy="16">Values</tspan>
										</text>
									</g>

									{/* Rotating ring visuals only */}
									<motion.g animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 24, ease: "linear" }} style={{ transformOrigin: '150px 150px' }}>
										<circle cx="150" cy="150" r="110" fill="none" stroke="url(#ringGrad)" strokeWidth="2.5" strokeDasharray="12 10" />
										{/* Decorative dots */}
										{[0,1,2,3,4,5,6,7].map((i)=>{
											const angle = (i * 45) * Math.PI / 180;
											const x = 150 + 110 * Math.cos(angle);
											const y = 150 + 110 * Math.sin(angle);
											return (
												<circle key={i} cx={x} cy={y} r="2.5" fill="#2563eb" />
											)
										})}
									</motion.g>

									{/* Static lines with arrows from center to each value */}
									<line x1="150" y1="150" x2="230" y2="150" stroke="#2563eb" strokeWidth="2.5" markerEnd="url(#arrow)" />
									<line x1="150" y1="150" x2="150" y2="70" stroke="#2563eb" strokeWidth="2.5" markerEnd="url(#arrow)" />
									<line x1="150" y1="150" x2="70" y2="150" stroke="#2563eb" strokeWidth="2.5" markerEnd="url(#arrow)" />
									<line x1="150" y1="150" x2="150" y2="230" stroke="#2563eb" strokeWidth="2.5" markerEnd="url(#arrow)" />

									{/* Fixed value nodes */}
									<g>
										<circle cx="230" cy="150" r="22" fill="#ffffff" stroke="#2563eb" strokeWidth="2" />
										<text x="230" y="150" textAnchor="middle" dominantBaseline="middle" className="fill-gray-800" style={{ fontWeight: 700, fontSize: 12 }}>Love</text>
									</g>
									<g>
										<circle cx="150" cy="70" r="22" fill="#ffffff" stroke="#2563eb" strokeWidth="2" />
										<text x="150" y="70" textAnchor="middle" dominantBaseline="middle" className="fill-gray-800" style={{ fontWeight: 700, fontSize: 12 }}>Patience</text>
									</g>
									<g>
										<circle cx="70" cy="150" r="22" fill="#ffffff" stroke="#2563eb" strokeWidth="2" />
										<text x="70" y="150" textAnchor="middle" dominantBaseline="middle" className="fill-gray-800" style={{ fontWeight: 700, fontSize: 12 }}>Humility</text>
									</g>
									<g>
										<circle cx="150" cy="230" r="22" fill="#ffffff" stroke="#2563eb" strokeWidth="2" />
										<text x="150" y="230" textAnchor="middle" dominantBaseline="middle" className="fill-gray-800" style={{ fontWeight: 700, fontSize: 12 }}>Sacrifice</text>
									</g>
								</svg>
							</div>
						</div>

                        </div>
                    </div>

                </div>
            </section>
            {/*who we are*/}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="heading-font text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                            Our Ministries
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">We offer various ministries to help you grow in faith and connect with others

                        </p>

                    </div>
                    {/*
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                        <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition duration 300">
                            <div className="h-48 bg-cover bg-center" style={{ backgroundImage: "url('./public/youth.jpg')" }}></div>
                            <div className="p-6">
                                <h3 className="heading-font text-xl font-bold text-gray-800 mb-2">Who we are

</h3>
                                <p className="text-gray-600 mb-4">We are a group of the most ordinary people you could ever meet. We all have our lives, our dreams, our problems, and concerns. However, once we get together under this wonderful roof, we forget all about what hurts. We share only one powerful goal, which is to get closer to God mentally and spiritually.</p>
                                <a href='#' className="text-blue-600 font-semibold hover:text-amber-700 flex items-center">
                                    Learn More <i className="fas fa-arrow-right ml-2"></i>
                                    </a>
                            </div>
                        </div>
                        
                        <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition duration 300">
                            <div className="h-48 bg-cover bg-center" style={{ backgroundImage: "url('./public/youth.jpg')" }}></div>
                            <div className="p-6">
                                <h3 className="heading-font text-xl font-bold text-gray-800 mb-2">Who we are

</h3>
                                <p className="text-gray-600 mb-4">We are a group of the most ordinary people you could ever meet. We all have our lives, our dreams, our problems, and concerns. However, once we get together under this wonderful roof, we forget all about what hurts. We share only one powerful goal, which is to get closer to God mentally and spiritually.</p>
                                <a href='#' className="text-blue-600 font-semibold hover:text-amber-700 flex items-center">
                                    Learn More <i className="fas fa-arrow-right ml-2"></i>
                                    </a>
                            </div>
                        </div>
                         <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition duration 300">
                            <div className="h-48 bg-cover bg-center" style={{ backgroundImage: "url('./public/youth.jpg')" }}></div>
                            <div className="p-6">
                                <h3 className="heading-font text-xl font-bold text-gray-800 mb-2">Who we are

</h3>
                                <p className="text-gray-600 mb-4">We are a group of the most ordinary people you could ever meet. We all have our lives, our dreams, our problems, and concerns. However, once we get together under this wonderful roof, we forget all about what hurts. We share only one powerful goal, which is to get closer to God mentally and spiritually.</p>
                                <a href='#' className="text-blue-600 font-semibold hover:text-amber-700 flex items-center">
                                    Learn More <i className="fas fa-arrow-right ml-2"></i>
                                    </a>
                            </div>
                        </div>

                    </div>
                       
                    */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {cardData.map((card, index) => (
                            <div
                                key={index}
                                className="group bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden transition duration-300 hover:-translate-y-1 hover:shadow-lg"
                                data-aos="fade-up" data-aos-delay={index * 50}
                            >
                                <div
                                    className="h-48 bg-cover bg-center"
                                    style={{ backgroundImage: `url(${card.image})` }}
                                ></div>

                                <div className="p-6">
                                    <div className="flex items-center mb-3">
                                        <i className={`${card.icon} text-2xl text-blue-600 mr-3`}></i>
                                        <h3 className="text-xl font-bold text-gray-900">{card.title}</h3>
                                    </div>

                                    <p className="text-gray-600 mb-4">{card.description}</p>

                                    <a
                                        href="#"
                                        className="font-semibold flex items-center brand-text-gradient hover:opacity-80"
                                    >
                                        Learn More <i className="fas fa-arrow-right ml-2"></i>
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>


            </section>
        </>

    )
}

export default About