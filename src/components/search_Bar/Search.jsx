import { useState } from 'react';
import { IoCloseSharp, IoSearch } from 'react-icons/io5';

function Search() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <div className="relative flex items-center p-2 border border-gray-300 dark:bg-gray-900 rounded-lg cursor-pointer xl:w-70 lg:w-50 ">
        <input
          type="text"
          placeholder="Search"
          className="flex-grow text-gray-700 bg-transparent outline-none cursor-pointer"
          onClick={openModal}
        />
        <span className="absolute right-0 z-40 mr-3 text-xs text-black inset-y-3 dark:text-white">
          CTRL K
        </span>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 w-full z-50 flex items-center justify-center bg-gray-800 bg-opacity-75 top-60 ">
          <div className="p-6 border pt-2 bg-white dark:bg-gray-900 rounded-lg shadow-lg md:w-[500px]">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold text-black   dark:text-gray-300">
                Search
              </h2>
              <button
                onClick={closeModal}
                className="text-gray-500 hover:text-gray-700"
              >
                <IoCloseSharp className="w-7 h-7 mb-1" />
              </button>
            </div>
            <div className="flex items-center p-2 border border-gray-300 rounded-lg  bg-gray-50 dark:bg-gray-900">
              <IoSearch className="mr-2 text-gray-500" />
              <input
                type="text"
                placeholder="Search"
                className="flex-grow  bg-transparent outline-none"
              />
            </div>
            <div className="h-[200px]"></div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Search;
