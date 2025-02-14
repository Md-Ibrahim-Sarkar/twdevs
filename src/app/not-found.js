import Link from 'next/link';
import React from 'react';
import {
  FaBook,
  FaCubes,
  FaDiscord,
  FaFigma,
  FaFolder,
  FaHome,
  FaPencilAlt,
  FaPlayCircle,
} from 'react-icons/fa';

function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center py-11 pt-16">
      <h1 className="text-4xl font-bold text-blue-500">404 - Page Not Found</h1>
      <p className="mt-4 text-gray-400">
        Whoops! That page doesn’t exist. But do not fret, check out our other
        resources from below to get started.
      </p>
      <div className="grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
        <Link
          href="/"
          className="flex flex-col items-center p-4 bg-gray-800 rounded-lg hover:bg-gray-700"
        >
          <FaHome className="text-2xl text-blue-500" />
          <span className="mt-2">Homepage</span>
        </Link>
        <Link
          href="/tailwind/components"
          className="flex flex-col items-center p-4 bg-gray-800 rounded-lg hover:bg-gray-700"
        >
          <FaBook className="text-2xl text-purple-500" />
          <span className="mt-2">Taileind Components</span>
        </Link>
        <Link
          href="/blocks"
          className="flex flex-col items-center p-4 bg-gray-800 rounded-lg hover:bg-gray-700"
        >
          <FaCubes className="text-2xl text-green-500" />
          <span className="mt-2">Blocks</span>
        </Link>
        <Link
          href="/icons"
          className="flex flex-col items-center p-4 bg-gray-800 rounded-lg hover:bg-gray-700"
        >
          <FaPlayCircle className="text-2xl text-blue-500" />
          <span className="mt-2">CodeBase Icons</span>
        </Link>
      </div>
      <div className="grid grid-cols-2  gap-4 mt-8">
        <Link
          href="/devtools"
          className="flex flex-col items-center p-4 bg-gray-800 rounded-lg hover:bg-gray-700"
        >
          <svg
            className="w-6 h-6 text-gray-800 dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M7.58209 8.96025 9.8136 11.1917l-1.61782 1.6178c-1.08305-.1811-2.23623.1454-3.07364.9828-1.1208 1.1208-1.32697 2.8069-.62368 4.1363.14842.2806.42122.474.73509.5213.06726.0101.1347.0133.20136.0098-.00351.0666-.00036.1341.00977.2013.04724.3139.24069.5867.52125.7351 1.32944.7033 3.01552.4971 4.13627-.6237.8375-.8374 1.1639-1.9906.9829-3.0736l4.8107-4.8108c1.0831.1811 2.2363-.1454 3.0737-.9828 1.1208-1.1208 1.3269-2.80688.6237-4.13632-.1485-.28056-.4213-.474-.7351-.52125-.0673-.01012-.1347-.01327-.2014-.00977.0035-.06666.0004-.13409-.0098-.20136-.0472-.31386-.2406-.58666-.5212-.73508-1.3294-.70329-3.0155-.49713-4.1363.62367-.8374.83741-1.1639 1.9906-.9828 3.07365l-1.7788 1.77875-2.23152-2.23148-1.41419 1.41424Zm1.31056-3.1394c-.04235-.32684-.24303-.61183-.53647-.76186l-1.98183-1.0133c-.38619-.19746-.85564-.12345-1.16234.18326l-.86321.8632c-.3067.3067-.38072.77616-.18326 1.16235l1.0133 1.98182c.15004.29345.43503.49412.76187.53647l1.1127.14418c.3076.03985.61628-.06528.8356-.28461l.86321-.8632c.21932-.21932.32446-.52801.2846-.83561l-.14417-1.1127ZM19.4448 16.4052l-3.1186-3.1187c-.7811-.781-2.0474-.781-2.8285 0l-.1719.172c-.7811.781-.7811 2.0474 0 2.8284l3.1186 3.1187c.7811.781 2.0474.781 2.8285 0l.1719-.172c.7811-.781.7811-2.0474 0-2.8284Z"
            />
          </svg>

          <span className="mt-2">DevTools</span>
        </Link>
        <Link
          href="/contact-us"
          className="flex flex-col items-center p-4 bg-gray-800 rounded-lg hover:bg-gray-700"
        >
          <FaPencilAlt className="text-2xl text-yellow-500" />
          <span className="mt-2">Contact us</span>
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
