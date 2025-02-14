"use client"
import { AuthContext } from "@/context/authProvider/AuthProvider"
import Link from "next/link"
import { usePathname } from "next/navigation";
import { useContext, useEffect, useRef, useState } from "react"


const getLastSegment = () => {
  const path = usePathname(); // বর্তমান URL পাথ নেয়া
  const segments = path.split("/").filter(Boolean); // `/` দিয়ে ভাগ করা ও খালি অংশ বাদ দেয়া
  return segments.length > 0 ? segments[segments.length - 1] : ""; // শেষ অংশ রিটার্ন করা
};
const User = () => {
  const { logOut, user } = useContext(AuthContext)
  const pathName = getLastSegment();
  const slugify = (name) => {
    return name?.toLowerCase().replace(/\s+./g, "-"); // স্পেসগুলো "-" দিয়ে রিপ্লেস করবে
  };
  const addSpase = slugify(user?.displayName);
  const slug = addSpase?.replace(/\./g, "");


  return (
    <>
      <div className='flex items-center ml-auto'>
        <ul className="flex space-x-4">
          <li id="profile-dropdown-toggle"
            className={`relative px-1 after:absolute after:bg-cyan-500 ${pathName === slug ? 'after:w-full' : 'after:w-0 hover:after:w-full'} after:h-[3px] after:block after:-bottom-2 after:left-0 after:transition-all after:duration-300 `}>
            <Link href={`/u/dashboard/${slug}`} className="flex flex-col justify-center items-center cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" width="18px" height="18px" viewBox="0 0 512 512">
                <path
                  d="M337.711 241.3a16 16 0 0 0-11.461 3.988c-18.739 16.561-43.688 25.682-70.25 25.682s-51.511-9.121-70.25-25.683a16.007 16.007 0 0 0-11.461-3.988c-78.926 4.274-140.752 63.672-140.752 135.224v107.152C33.537 499.293 46.9 512 63.332 512h385.336c16.429 0 29.8-12.707 29.8-28.325V376.523c-.005-71.552-61.831-130.95-140.757-135.223zM446.463 480H65.537V376.523c0-52.739 45.359-96.888 104.351-102.8C193.75 292.63 224.055 302.97 256 302.97s62.25-10.34 86.112-29.245c58.992 5.91 104.351 50.059 104.351 102.8zM256 234.375a117.188 117.188 0 1 0-117.188-117.187A117.32 117.32 0 0 0 256 234.375zM256 32a85.188 85.188 0 1 1-85.188 85.188A85.284 85.284 0 0 1 256 32z"
                  data-original="#000000" />
              </svg>
              <span className="text-xs font-semibold mt-1">Profile</span>
            </Link>

          </li>

        </ul>
      </div >
    </>
  )
}

export default User