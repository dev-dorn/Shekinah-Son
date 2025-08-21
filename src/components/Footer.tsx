import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo + Social */}
          <div>
            <div className="flex items-center mb-4">
              <i className="fas fa-cross text-2xl text-amber-600 mr-2" aria-hidden="true"></i>
              <span className="heading-font text-2xl font-bold">Shekinah</span>
            </div>
            <p className="text-gray-400 mb-4">
             Shekinah Sons is an interdenominational movement under the leadership of John Mas, focused on raising believers.
            </p>
            <div className="flex space-x-4">
              {["facebook-f", "twitter", "instagram", "youtube"].map((icon, idx) => (
                <a
                  key={idx}
                  href="#"
                  className="text-gray-400 hover:text-amber-600 transition duration-300"
                  aria-label={`Link to ${icon}`}
                >
                  <i className={`fab fa-${icon}`} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="heading-font text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {["Home", "About Us", "Beliefs", "Ministries", "Sermons", "Events"].map((link, idx) => (
                <li key={idx}>
                  <a href="#" className="text-gray-400 hover:text-amber-600 transition duration-300">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Ministries */}
          <div>
            <h3 className="heading-font text-lg font-bold mb-4">Ministries</h3>
            <ul className="space-y-2">
              {["Children", "Youth", "Women", "Men", "Seniors", "Missions"].map((group, idx) => (
                <li key={idx}>
                  <a href="#" className="text-gray-400 hover:text-amber-600 transition duration-300">
                    {group}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="heading-font text-lg font-bold mb-4">Contact Info</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-start">
                <i className="fas fa-map-marker-alt mt-1 mr-2 text-amber-600" aria-hidden="true" />
                <span>Nyeri, Kenya</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-phone-alt mt-1 mr-2 text-amber-600" aria-hidden="true" />
                <span>(+254) 123-4567</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-envelope mt-1 mr-2 text-amber-600" aria-hidden="true" />
                <span>info@shekinahsons.org</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Text */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2025 Apexium Tech Solutions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
