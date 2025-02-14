"use client"

import Banner from "@/components/Home/Banner";
import Components_Categories from "@/components/Home/Components_Categories";
import Tailwind_CSS_Components from "@/components/Home/Tailwind_CSS_Components";
function page() {


  return (
    <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <Banner />
        <Tailwind_CSS_Components />
        <Components_Categories />
    </div>
  )
}

export default page