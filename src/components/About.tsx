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
        image: "./youth.jpg",
        icon: "fas fa-arrow-right ml-2"
    },
    {
        title: "what we Do",
        description: "We believe the church is a place to learn more about our God! If you are looking for a church where you can belong and where God’s love is changing people, you’ve come to the right place. You will find answers, healing, restoration, and life-long relationships with us. This is a place for real people and faith.",
        image: "./church.jpg",
        icon: "fas fa-arrow-right ml-2"

    },
    {
        title: "What to expect",
        description: "You can expect to be welcomed into a friendly, positive environment. Our sermons and are filled with peace and praises, readings and inspiring messages from the Bible. We are a big family of generous, helpful, and kindhearted members. You have a free source of coffee and cookings.",
        image: "./children.jpg",
        icon: "fas fa-arrow-right ml-2"
    }

]


const About = () => {
    return (
        <>
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row items-center">
                        <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
                            <img src="./church.jpg"
                                alt="church gathering"
                                className="rounded-lg shadow-xl w-full h-auto" />

                        </div>
                        <div className="md:w-1/2">
                            <h2 className="heading-font text-3xl md:text-4xl font-bold text-gray-800 wb-6">Our mission & vision</h2>
                            <p className="text-gray-600 mb-6">Shekinah sons is an interdenominational movement under the leadership of John Mash, thats is focused on raising the believers
</p>
                            <p className="text-gray-600 mb-6">Founded in 1995, our church has been a beacon of hope in the community , offering guidance, charitable works and meaning worship services. </p>
                            <div className="space-y-4">
                                <div className="flex items-start">
                                    <i className="fas fa-cross text-blue-600 mt-1 mr-3"></i>
                                    <div>
                                        <h3 className="font-bold text-gray-800">Biblical Teaching</h3>
                                        <p className="text-gray-600">Rooted in scripture and relevant to modern life</p>
                                    </div>

                                </div>
                                <div className="flex items-start">
                                    <i className="fas fa-hands-praying text-blue-600 mt-1 mr-3"></i>
                                    <div>
                                        <h3 className="font-bold text-gray-800">Prayer Ministry</h3>
                                        <p className="text-gray-600">Powerfull intercession for all needs</p>

                                    </div>

                                </div>
                                <div className="flex items-start">
                                    <i className="fas fa-heart text-blue-600 mt-1 mr-3"></i>
                                    <div>
                                        <h3 className="font-bold text-gray-800">Community Outreach</h3>
                                        <p className="text-gray-600">Serving our local community with love and compassion</p>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>

                </div>
            </section>
            {/*who we are*/}
            <section className="py-16 bg-gray-100">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="heading-font text-3xl md:text-4xl font-bold text-gray-800 mb-4">
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
                                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition duration-300"
                            >
                                <div
                                    className="h-48 bg-cover bg-center"
                                    style={{ backgroundImage: `url(${card.image})` }}
                                ></div>

                                <div className="p-6">
                                    <div className="flex items-center mb-3">
                                        <i className={`${card.icon} text-2xl text-blue-600 mr-3`}></i>
                                        <h3 className="text-xl font-bold text-gray-800">{card.title}</h3>
                                    </div>

                                    <p className="text-gray-600 mb-4">{card.description}</p>

                                    <a
                                        href="#"
                                        className="text-blue-600 font-semibold hover:text-amber-700 flex items-center"
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