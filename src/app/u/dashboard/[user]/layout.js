"use client"
import Link from "next/link"
import LeftSide from "./Components/LeftSide"
import { useParams, usePathname } from "next/navigation"
import Button from "@/components/ui/Button";
import Sidebar from "./Components/Sidebar";

const getLastSegment = () => {
  const path = usePathname(); // বর্তমান URL পাথ নেয়া
  const segments = path.split("/").filter(Boolean); // `/` দিয়ে ভাগ করা ও খালি অংশ বাদ দেয়া
  return segments.length > 0 ? segments[segments.length - 1] : ""; // শেষ অংশ রিটার্ন করা
};

function layout({ children }) {
  const { user } = useParams()
  const lastSegment = getLastSegment();



  return (
    <div className="lg:flex max-lg:flex-col gap-4 ">
      <Sidebar />
      <div className="w-full scrollbar-hidden h-screen">


        {children}
      </div>
    </div>
  )
}

export default layout