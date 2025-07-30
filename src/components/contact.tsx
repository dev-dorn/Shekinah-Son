import React from "react";

const ContactSection: React.FC = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Add form submission logic here
    console.log("Contact form submitted");
  };

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row">
          {/* Contact Info Section */}
          <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
            <h2 className="heading-font text-3xl md:text-4xl font-bold text-gray-800 mb-6">Contact Us</h2>
            <p className="text-gray-600 mb-8">
              We'd love to hear from you! Whether you have questions, prayer requests, or just want to say hello, our team is here to help.
            </p>

            <div className="space-y-6">
              {/* Address */}
              <div className="flex items-start">
                <i className="fas fa-map-marker-alt text-blue-600 mt-1 mr-4 text-xl" aria-hidden="true"></i>
                <div>
                  <h3 className="font-bold text-gray-800 mb-1">Address</h3>
                  <p className="text-gray-600">Nyayo<br />Nanyuki, Kenya</p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start">
                <i className="fas fa-phone-alt text-blue-600 mt-1 mr-4 text-xl" aria-hidden="true"></i>
                <div>
                  <h3 className="font-bold text-gray-800 mb-1">Phone</h3>
                  <p className="text-gray-600">(+254) 123-4567</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start">
                <i className="fas fa-envelope text-blue-600 mt-1 mr-4 text-xl" aria-hidden="true"></i>
                <div>
                  <h3 className="font-bold text-gray-800 mb-1">Email</h3>
                  <p className="text-gray-600">info@shekinah.com</p>
                </div>
              </div>

              {/* Service Times */}
              <div className="flex items-start">
                <i className="fas fa-clock text-blue-600 mt-1 mr-4 text-xl" aria-hidden="true"></i>
                <div>
                  <h3 className="font-bold text-gray-800 mb-1">Service Times</h3>
                  <p className="text-gray-600">
                    Sunday: 9:00 AM & 11:00 AM<br />
                    Wednesday Bible Study: 7:00 PM
                  </p>
                </div>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex space-x-4 mt-8">
              {[
                { icon: "fab fa-facebook-f", href: "#", bg: "bg-gray-800" },
                { icon: "fab fa-twitter", href: "#", bg: "bg-blue-400" },
                { icon: "fab fa-instagram", href: "#", bg: "bg-pink-600" },
                { icon: "fab fa-youtube", href: "#", bg: "bg-red-600" },
              ].map(({ icon, href, bg }, idx) => (
                <a
                  key={idx}
                  href={href}
                  className={`${bg} hover:brightness-110 text-white w-10 h-10 rounded-full flex items-center justify-center transition duration-300`}
                  aria-label={`Social icon ${icon}`}
                >
                  <i className={icon}></i>
                </a>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="md:w-1/2">
            <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-md p-6 md:p-8">
              {[
                { label: "Your Name", id: "name", type: "text" },
                { label: "Email Address", id: "email", type: "email" },
                { label: "Subject", id: "subject", type: "text" },
              ].map(({ label, id, type }) => (
                <div key={id} className="mb-6">
                  <label htmlFor={id} className="block text-gray-700 font-bold mb-2">{label}</label>
                  <input
                    id={id}
                    type={type}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  />
                </div>
              ))}

              {/* Message */}
              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-700 font-bold mb-2">Message</label>
                <textarea
                    id="message"
                    rows={5}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
