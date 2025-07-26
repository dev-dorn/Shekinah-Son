import { Menu } from "lucide-react"
const Navbar = () => {
    return (
        <>
            <nav className='bg-white shadow-md sticky top-0 z-50'>
                <div className="container mx-auto px-4 py-3 flex justify-between items-center">
                    <div className='flex items-center'>
                        <span className="heading-font text-2xl font-bold text-gray-800">Shekinah Sons</span>
                    </div>
                    {/*desktop Navigation*/}

                    <div className="hidden align-baseline md:flex space-x-8">
                        <a href="#" className="nav-link text-gray-700 hover:amber-600">Home</a>
                        <a href="#" className="nav-link text-gray-700 hover:amber-600">About</a>
                        <a href="#" className="nav-link text-gray-700 hover:amber-600">Sermons</a>
                        <a href="#" className="nav-link text-gray-700 hover:amber-600">Community</a>
                        <a href="#" className="nav-link text-gray-700 hover:amber-600">Events</a>
                        <div>
                        <button className="bg-blue-600 hover:bg-amber-700 text-white font-bold py-2 px-4 rounded-full transition duration-300">
                            Join Us
                        </button>
                        </div>

                    </div>
                    {/*mobile Menu button*/}
                    <button id="mobile-menu-button" className="md:hidden text-gray-700 focus:outline-none">
                        <Menu className="text-2xl" />
                    </button>
                </div>
                {/*mobile Navigation*/}
                <div id="mobile-menu" className="mobile-menu hidden bg-white">
                    <div className="px-4 py-2 flex flex-col space-y-3">
                        <a href="#" className="block py-2 text-gray-700 hover:text-amber-600">Home</a>
                        <a href="#" className="block py-2 text-gray-700 hover:text-amber-600">About</a>
                        <a href="#" className="block py-2 text-gray-700 hover:text-amber-600">Sermons</a>
                        <a href="#" className="block py-2 text-gray-700 hover:text-amber-600">Community</a>
                        <a href="#" className="block py-2 text-gray-700 hover:text-amber-600">Events</a>
                        <a href="#" className="block py-2 text-gray-700 hover:text-amber-600">Join</a>
                    </div>

                </div>
            </nav>

        </>
    )
}
export default Navbar