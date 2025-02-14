/* eslint-disable react-hooks/rules-of-hooks */
'use client';
import { CodeView } from '@/components/CodeViewBox/codeIndex';
import { ComponentsView } from '@/components/CodeViewBoxTwo/Index';
import { Github } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

function page() {
  const [styles, setStyles] = useState({}); // State to hold styles for each image
  const [data, setData] = useState([
    { id: 1, title: 'Applications Components', imageUrl: 'https://tailwindflex.com/storage/thumbnails/sb-admin-2-login-page-with-tailwind/canvas.min.webp?v=1' },
    // Add more items as needed
  ]);



  const copyCode = () => {

  }


  //  image hover view
  const handleMouseMove = (e, index) => {
    const { left, top, width, height } = e.target.getBoundingClientRect();
    const x = e.clientX - left; // cursor X position relative to the image
    const y = e.clientY - top; // cursor Y position relative to the image

    const xPercent = (x / width) * 100;
    const yPercent = (y / height) * 100;

    setStyles((prevStyles) => ({
      ...prevStyles,
      [index]: {
        transform: 'scale(1.9)', // zoom scale
        transformOrigin: `${xPercent}% ${yPercent}%`, // cursor-based transform origin
        transition: 'transform 0.6s ease-in-out', // Smooth transition
      },
    }));
  };

  const handleMouseLeave = (index) => {
    setStyles((prevStyles) => ({
      ...prevStyles,
      [index]: {
        transform: 'scale(1)', // Reset scale when mouse leaves
        transformOrigin: '50% 50%', // Centered origin
        transition: 'transform 0.6s ease-in-out', // Same transition for smooth revert
      },
    }));
  };

  return (
    <div>
      <div className="mx-auto p-6">
        <h1 className="text-3xl font-semibold text-gray-900">
          Core Components
        </h1>
        <p className="mt-2 text-gray-600">
          Kickstart almost any project with essential Tailwind CSS UI elements
          through our Core Components collection. This category includes
          versatile button styles, checkbox variations, tab styles, accordions,
          alerts, forms, list styles, toggle buttons, badges, breadcrumbs,
          dropdowns, tooltips, progress bars, and more – Almost all core
          components are free for commercial use.
        </p>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6">
          {data.map((item, index) => (
            <div
              key={item.id}
              className="group overflow-hidden bg-white rounded-lg shadow-md cursor-pointer hover:shadow-2xl"
            >
              <div
                className="relative overflow-hidden"
                style={{ objectFit: 'cover' }}
                onMouseMove={(e) => handleMouseMove(e, index)}
                onMouseLeave={() => handleMouseLeave(index)}
              >
                <img
                  src={item.imageUrl} // Dynamic image URL
                  alt="Zoom Effect"
                  className="transition-transform ease-in-out duration-600"
                  style={styles[index] || {}} // Apply dynamic styles for this specific image
                />

                {/* Hover buttons */}

              </div>

              <div className="p-4">
                <div className="flex-1 items-start justify-center opacity-0 group-hover:opacity-100  hover:block transition-opacity duration-300">
                  <div className="flex space-x-4 mt-4">
                    <button
                      onClick={() => copyCode()}

                      className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600"
                    >
                      Copy Code
                    </button>
                    <Link href={'/components/tailwind/footers/footer-one'}
                      target='_blank'
                      className="px-4 py-2 bg-green-500 text-white rounded-lg shadow-md hover:bg-green-600"
                    >
                      Check Responsive
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>


      </div>
    </div>
  );
}

export default page;
