import Link from "next/link";
import { useEffect, useState } from "react";

function Components_Categories() {

  const [styles, setStyles] = useState({}); // State to hold styles for each image


  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch JSON file from public folder
    fetch('/data.json')
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((json) => setData(json))
      .catch((error) => console.error('Error fetching JSON:', error));
  }, []);

  console.log(data);

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
    <div className=" lg:mt-8">
      <h1 className="mb-4 text-4xl font-semibold text-center max-[640px]:text-2xl">
        Blocks and Templates
      </h1>
      <p className="mb-6 text-lg text-center text-gray-600 dark:text-gray-200">
        Tailored UI solutions with multipurpose Tailwind blocks and templates, perfect for any project.
      </p>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {data.length === 0 ? (
          <div className="w-full h-[200px] col-span-1 md:col-span-2 lg:col-span-3 flex justify-center items-center">
            <div class="px-3 py-1  font-medium leading-none text-center  text-4xl animate-pulse  ">loading...</div>
          </div>
        ) : (
          data.map((item, index) => (
            <Link
              href={'/full-screen'}
              target="_blank"
              key={index}
              className="overflow-hidden bg-white rounded-lg shadow-md cursor-pointer hover:shadow-2xl"
            >
              <div
                className="relative overflow-hidden"
                style={{ objectFit: 'cover' }}
                onMouseMove={(e) => handleMouseMove(e, index)}
                onMouseLeave={() => handleMouseLeave(index)}
              >
                <img
                  src={item.image} // Replace with your image source
                  alt="Zoom Effect"
                  className="transition-transform ease-in-out duration-600"
                  style={styles[index] || {}} // Apply dynamic styles for this specific image
                />
              </div>
              <div className="p-4">
                <h2 className="text-xl font-semibold">Applications Components</h2>
              </div>
            </Link>
          ))
        )}

      </div>
    </div>
  );
}

export default Components_Categories;
