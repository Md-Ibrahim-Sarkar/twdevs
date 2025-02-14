import Link from 'next/link'
import { RiTailwindCssFill } from "react-icons/ri";
import { FaReact } from "react-icons/fa";
import { FaBolt } from "react-icons/fa";
function Banner() {
  return (
    <div className="flex flex-col items-center justify-center px-4 py-10 text-center">
      <div className="px-4 py-1 mb-4 text-sm text-blue-700 bg-blue-100 rounded-full">
      Ultimate Open-Source UI Library
      </div>
      <h1 className="mb-4 text-4xl font-bold md:text-5xl lg:text-6xl">
      Experience Speed<FaBolt className='w-11 h-11 px-1 inline text-mainColor' />and Style with Modern Design Excellence
      </h1>
      <p className="mb-8 text-lg text-gray-600 md:text-xl">
      Supercharge your web development with our open-source Tailwind CSS library. Access 1000+ customizable Tailwind components, pages, and sections to help you build stunning websites faster and more efficiently than ever before.
      </p>
      <div className="flex mb-8 space-x-4">
        <Link href={'/components'} className="btn-donate">
          Get Components
        </Link>
        <Link href={'/blocks'} className="btn-donate">
          Explore Blocks <i className="fas fa-arrow-right"></i>
        </Link>
      </div>
      <div className="mb-4 text-sm text-gray-500">
      Empowering Developers and Designers Across the Globe
      </div>
      <div className="flex space-x-2">
        <RiTailwindCssFill className="w-10 h-10 rounded-full" />
        <FaReact className="w-10 h-10 rounded-full" />
      </div>
    </div>
  )
}

export default Banner