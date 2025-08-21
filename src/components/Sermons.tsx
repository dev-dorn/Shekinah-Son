

const Sermons = () => {
  return (
    <section id="sermons" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="heading-font text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            &ldquo;Your faith can move mountains&rdquo;
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            — Matthew 17:20
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {/*sermons card*/}
          <div className="sermon-card bg-white rounded-lg shadow-md overflow-hidden">
            <div className="relative">
              <img src="https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80"
                alt="Sermon thumbnail"
                className="w-full h-48 object-cover" />
              <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                <button className="bg-blue-600 hover:bg-amber-700 text-white rounded-full w-16 h-16 flex items-center justify-center transition duration-300">
                  <i className="fas fa-play text-xl"></i>
                </button>
              </div>
            </div>
            <div className="p-6">
              <div className="flex justify-between items-center mb-3">
                <span className="text-sm text-blue-600 font-semibold">June 12, 2023</span>
                <span className="text-sm text-gray-500"><i className="fas fa-clock mr-1"></i> 42 min</span>
              </div>
              <h3 className="heading-font text-xl font-bold text-gray-800 mb-3">Finding Peace in Troubled Times</h3>
              <p className="text-gray-600 mb-4">Pastor John explores Philippians 4:6-7 and how to experience God's peace in difficult circumstances.</p>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500"><i className="fas fa-user mr-1"></i> Pastor John Smith</span>
                <a href="#" className="text-sm text-blue-600 hover:text-amber-700 font-semibold">Listen Now</a>
              </div>
            </div>
          </div>


          {/*sermon card 2*/}
          <div className="sermon-card bg-white rounded-lg shadow-md overflow-hidden">
            <div className="relative">
              <img src="https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80"
                alt="Sermon thumbnail"
                className="w-full h-48 object-cover" />
              <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                <button className="bg-blue-600 hover:bg-amber-700 text-white rounded-full w-16 h-16 flex items-center justify-center transition duration-300">
                  <i className="fas fa-play text-xl"></i>
                </button>
              </div>
            </div>
            <div className="p-6">
              <div className="flex justify-between items-center mb-3">
                <span className="text-sm text-blue-600 font-semibold">September 19 | 10:00 PM</span>
                <span className="text-sm text-gray-500"><i className="fas fa-clock mr-1"></i> 42 min</span>
              </div>
              <h3 className="heading-font text-xl font-bold text-gray-800 mb-3">Faith for the Family
              </h3>
              <p className="text-gray-600 mb-4">Pastor John explores Philippians 4:6-7 and how to experience God's peace in difficult circumstances.</p>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500"><i className="fas fa-user mr-1"></i> Pastor John Smith</span>
                <a href="#" className="text-sm text-blue-600 hover:text-amber-700 font-semibold">Listen Now</a>
              </div>
            </div>
          </div>
          {/*sermonn card */}
          <div className="sermon-card bg-white rounded-lg shadow-md overflow-hidden">
            <div className="relative">
              <img src="https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80"
                alt="Sermon thumbnail"
                className="w-full h-48 object-cover" />
              <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                <button className="bg-blue-600 hover:bg-amber-700 text-white rounded-full w-16 h-16 flex items-center justify-center transition duration-300">
                  <i className="fas fa-play text-xl"></i>
                </button>
              </div>
            </div>
            <div className="p-6">
              <div className="flex justify-between items-center mb-3">
                <span className="text-sm text-blue-600 font-semibold">June 12, 2023</span>
                <span className="text-sm text-gray-500"><i className="fas fa-clock mr-1"></i> 42 min</span>
              </div>
              <h3 className="heading-font text-xl font-bold text-gray-800 mb-3">Is the Bible Just a Book?
              </h3>
              <p className="text-gray-600 mb-4">Pastor John explores Philippians 4:6-7 and how to experience God's peace in difficult circumstances.</p>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500"><i className="fas fa-user mr-1"></i> Pastor John Smith</span>
                <a href="#" className="text-sm text-blue-600 hover:text-amber-700 font-semibold">Listen Now</a>
              </div>
            </div>
          </div>

        </div>
        <div className="text-center mt-12">
          <button className="bg-transparent hover:bg-blue-600 text-blue-600 hover:text-white border-2 border-blue-600 font-bold py-3 px-8 rounded-full transition duration-300">
            See All Sermons
          </button>
        </div>
      </div>
    </section>
  );
};

export default Sermons;
