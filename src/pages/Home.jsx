import Banner from '@/components/Home/Banner';
import Components_Categories from '@/components/Home/Components_Categories';
import Tailwind_CSS_Components from '@/components/Home/Tailwind_CSS_Components';
import Words_Of_Trust from '@/components/Home/Words_Of_Trust';
import Link from 'next/link';
import React from 'react';

function Home() {
  return (
    <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
      {/* first section */}
      <Banner />

      {/* hero section */}
      <Tailwind_CSS_Components />

      {/* Category for UI Components and Templates */}
      <Components_Categories />

      {/* review section */}
      <Words_Of_Trust />
    </div>
  );
}

export default Home;
