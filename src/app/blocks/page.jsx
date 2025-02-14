
import { FaSearch } from "react-icons/fa";
function page() {
    const demo = [1, 2, 3, 4,5,6,7,8]
    return (
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="mt-4 ">
                <div className="flex flex-col items-start justify-between mb-4 lg:flex-row lg:items-center">
                    <div className="mb-4 lg:mb-0 w-full">
                        <h1 className="text-3xl text-center my-2 font-bold">CodeBaseUI Blocks - Tailwind UI components</h1>
                        <div className="flex justify-center ">
                            <p className="text-gray-600 text-center max-w-[900px] dark:text-gray-100">Get started with 459 free and premium UI components built with the utility classes from Tailwind CSS to upgrade your web development stack and customize the colors, fonts, and dark mode using the configurator.</p>
                        </div>
                    </div>

                </div>
                <div className="flex flex-col  items-center  p-4 bg-gray-100 dark:bg-gray-900 rounded-lg lg:flex-row">
                    <div className="flex items-center w-full p-2 mb-4 bg-white dark:border dark:bg-gray-900 rounded-lg shadow-sm lg:max-w-md lg:mb-0">
                    <FaSearch className="w-4 me-2 h-4 text-gray-900 dark:text-white"/>
                        <input type="text" placeholder="Search block sections" className="w-full bg-transparent outline-none" />
                    </div>
                    <div className="mb-4 ml-0 lg:ml-4 lg:mb-0">
                        <button className="flex items-center w-full p-2 bg-white dark:bg-gray-900  dark:border rounded-lg shadow-sm lg:w-auto">
                            <span>All categories</span>
                            <i className="ml-2 text-gray-400 fas fa-chevron-down"></i>
                        </button>
                    </div>
                    <div className="ml-0 text-gray-600 dark:text-gray-300 lg:ml-auto">
                        Showing 78 results.
                    </div>
                </div>
            </div>
            <div className="gap-4 mt-4 grid max-[500px]:grid-cols-1 max-md:grid-cols-2 max-lg:grid-cols-3 lg:grid-cols-4">
            {demo.map(item =>
                <div key={item} className="">
                    <div className="w-full p-4 mb-4 bg-white dark:bg-gray-900 rounded-lg shadow-md cursor-pointer md:mb-0 hover:shadow-2xl">
                        <div className="flex items-center justify-between mb-4">
                            <h2 className="text-lg font-semibold">Hero Sections</h2>
                            <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">Marketing UI</span>
                        </div>
                        <p className="mb-2 text-gray-500 dark:text-gray-300">18 components</p>
                        <div className="flex items-center justify-center h-32 bg-gray-100 rounded">
                            <img src="https://placehold.co/100x100" alt="Placeholder for Hero Sections" className="w-16 h-16" />
                        </div>
                    </div>            
                   
                </div>

            )}
            </div>

    

        </div>
    )
}

export default page