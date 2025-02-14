'use client';
import { FullComponentsView } from '@/components/CodeViewBox/codeIndex';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

function Layout({ children }) {
  const [styles, setStyles] = useState({}); // State to hold styles for each image

  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('/json_files/tailwindData.json')
      .then(response => {
        return response.json();
      })
      .then(data => setData(data.footers))
      .catch(error => console.error('Error fetching JSON:', error));
  }, []);

  const handleMouseMove = (e, index) => {
    const { left, top, width, height } = e.target.getBoundingClientRect();
    const x = e.clientX - left; // cursor X position relative to the image
    const y = e.clientY - top; // cursor Y position relative to the image

    const xPercent = (x / width) * 100;
    const yPercent = (y / height) * 100;

    setStyles(prevStyles => ({
      ...prevStyles,
      [index]: {
        transform: 'scale(1.9)', // zoom scale
        transformOrigin: `${xPercent}% ${yPercent}%`, // cursor-based transform origin
        transition: 'transform 0.6s ease-in-out', // Smooth transition
      },
    }));
  };

  const handleMouseLeave = index => {
    setStyles(prevStyles => ({
      ...prevStyles,
      [index]: {
        transform: 'scale(1)', // Reset scale when mouse leaves
        transformOrigin: '50% 50%', // Centered origin
        transition: 'transform 0.6s ease-in-out', // Same transition for smooth revert
      },
    }));
  };
  return (
    <div className="">
      <div className="container mx-auto px-4">
        <div className="py-6">
          <nav className="flex flex-col md:flex-row justify-between items-center mb-4">
            <div className="flex items-center space-x-2 mb-2 md:mb-0">
              <a href="#" className="text-blue-600">
                Home
              </a>
              <span>&gt;</span>
              <a href="#" className="text-blue-600">
                header
              </a>
              <span>&gt;</span>
              <span className="text-gray-600">navbar-with-center-items</span>
            </div>
          </nav>
        </div>
        {children}
      </div>
      <h2 class="flex flex-row flex-nowrap items-center mt-8">
        <span class="flex-grow block border-t border-black dark:border-white"></span>
        <span class="flex-none block mx-4 px-4 py-2.5 text-xl rounded leading-none font-medium bg-mainColor text-black">
          Related Components
        </span>
        <span class="flex-grow block border-t border-black dark:border-white"></span>
      </h2>

      <div className="container mx-auto my-5 px-4">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {data.length === 0 ? (
            <div className="grid lg:col-span-3 md:col-span-2 col-span-1 grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3 xl:col-span-4 xl:grid-cols-4">
              <div
                role="status"
                class="flex items-center justify-center h-56 max-w-sm bg-gray-300 rounded-lg animate-pulse dark:bg-gray-700"
              >
                <svg
                  class="w-10 h-10 text-gray-200 dark:text-gray-600"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 16 20"
                >
                  <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
                  <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM9 13a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2Zm4 .382a1 1 0 0 1-1.447.894L10 13v-2l1.553-1.276a1 1 0 0 1 1.447.894v2.764Z" />
                </svg>
                <span class="sr-only">Loading...</span>
              </div>
              <div
                role="status"
                class="flex items-center justify-center h-56 max-w-sm bg-gray-300 rounded-lg animate-pulse dark:bg-gray-700"
              >
                <svg
                  class="w-10 h-10 text-gray-200 dark:text-gray-600"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 16 20"
                >
                  <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
                  <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM9 13a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2Zm4 .382a1 1 0 0 1-1.447.894L10 13v-2l1.553-1.276a1 1 0 0 1 1.447.894v2.764Z" />
                </svg>
                <span class="sr-only">Loading...</span>
              </div>
              <div
                role="status"
                class="flex items-center justify-center h-56 max-w-sm bg-gray-300 rounded-lg animate-pulse dark:bg-gray-700"
              >
                <svg
                  class="w-10 h-10 text-gray-200 dark:text-gray-600"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 16 20"
                >
                  <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
                  <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM9 13a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2Zm4 .382a1 1 0 0 1-1.447.894L10 13v-2l1.553-1.276a1 1 0 0 1 1.447.894v2.764Z" />
                </svg>
                <span class="sr-only">Loading...</span>
              </div>
              <div
                role="status"
                class="flex items-center justify-center h-56 max-w-sm bg-gray-300 rounded-lg animate-pulse dark:bg-gray-700"
              >
                <svg
                  class="w-10 h-10 text-gray-200 dark:text-gray-600"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 16 20"
                >
                  <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
                  <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM9 13a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2Zm4 .382a1 1 0 0 1-1.447.894L10 13v-2l1.553-1.276a1 1 0 0 1 1.447.894v2.764Z" />
                </svg>
                <span class="sr-only">Loading...</span>
              </div>
            </div>
          ) : (
            data.map((item, index) => (
              <Link
                href={item.link}
                target="_blank"
                key={index}
                className="overflow-hidden bg-white border rounded-lg shadow-md cursor-pointer hover:shadow-2xl"
              >
                <div
                  className="relative overflow-hidden"
                  style={{ objectFit: 'cover' }}
                  onMouseMove={e => handleMouseMove(e, index)}
                  onMouseLeave={() => handleMouseLeave(index)}
                >
                  <img
                    src={item.image} // Replace with your image source
                    alt="Zoom Effect"
                    className="transition-transform ease-in-out duration-600"
                    style={styles[index] || {}} // Apply dynamic styles for this specific image
                  />
                </div>
                <div className="px-4 py-2 border-t">
                  <h2 className="text-xl dark:text-black font-semibold">
                    {item.name}
                  </h2>
                </div>
              </Link>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default Layout;
