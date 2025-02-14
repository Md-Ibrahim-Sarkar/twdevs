

const LeftSide = () => {
  return (
    <>
      <div>
        <div className=" p-6  lg:max-w-sm w-full mx-4 sm:mx-6 md:mx-8 lg:mx-10 xl:mx-12">
          <div className="flex justify-center">
            <img src="https://placehold.co/100x100" alt="Profile picture of Barakatullah" className="rounded-full w-24 h-24" />
          </div>
          <div className="text-center mt-4">
            <h1 className="text-xl font-semibold">Barakatullah</h1>
            <p className="text-gray-500">@wavesapce_agency</p>
            <p className="text-gray-500">ERG program manager</p>
            <div className="flex justify-center space-x-4 mt-2">
              <a href="#" className="text-blue-600"><i className="fab fa-facebook"></i></a>
              <a href="#" className="text-blue-400"><i className="fab fa-twitter"></i></a>
              <a href="#" className="text-blue-700"><i className="fab fa-linkedin"></i></a>
              <a href="#" className="text-pink-500"><i className="fab fa-instagram"></i></a>
            </div>
          </div>
          <div className="flex justify-center space-x-2 mt-4 flex-wrap">
            <span className="bg-pink-200 text-pink-600 px-3 py-1 rounded-full text-sm">Women's ERG</span>
            <span className="bg-red-200 text-red-600 px-3 py-1 rounded-full text-sm">Tast ERG</span>
            <span className="bg-blue-200 text-blue-600 px-3 py-1 rounded-full text-sm">Veterans ERG</span>
          </div>
          <p className="text-gray-700 mt-4 text-center">
            Dedicated to fostering an inclusive workplace through impactful programming & community support. Passionate about ... <span className="text-blue-600">Read More</span>
          </p>
          <div className="mt-6">
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <i className="fas fa-map-marker-alt text-gray-500"></i>
                <span className="ml-2 text-gray-700">Location</span>
              </div>
              <span className="text-gray-700">United States</span>
            </div>
            <div className="flex justify-between items-center mt-2">
              <div className="flex items-center">
                <i className="fas fa-language text-gray-500"></i>
                <span className="ml-2 text-gray-700">Language</span>
              </div>
              <span className="text-gray-700">English</span>
            </div>
          </div>
          <div className="mt-6">
            <h2 className="text-lg font-semibold">Event Statistics</h2>
            <div className="bg-gray-100 p-4 rounded-lg mt-2">
              <div className="flex justify-between items-center">
                <span className="text-gray-700">Total Sparks</span>
                <span className="text-gray-700 font-semibold text-xl">190</span>
              </div>
            </div>
          </div>
          <div className="mt-6">
            <h2 className="text-lg font-semibold">List of Past Sparks</h2>
            <div className="flex items-center mt-2">
              <img src="https://placehold.co/50x50" alt="Tech Conference" className="w-12 h-12 rounded-lg" />
              <div className="ml-4">
                <h3 className="text-gray-700 font-semibold">Tech Conference</h3>
                <p className="text-gray-500 text-sm">Convention Center</p>
                <p className="text-gray-500 text-sm">Tech Innovators</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default LeftSide