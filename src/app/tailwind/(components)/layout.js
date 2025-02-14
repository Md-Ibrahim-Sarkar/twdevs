/* eslint-disable react-hooks/rules-of-hooks */
'use client';
import Components_Sidebar from '@/app/tailwind/Components/Componets_Siderbar';

function layout({ children }) {
  return (
    <div className="flex  pb-2 max-h-screen ">
      <div className="h-screen">
        <Components_Sidebar />
      </div>
      <div className="w-full pe-5 mt-11  scrollbar-hidden">{children}</div>

      <div className="w-[20%] max-[1280px]:hidden  sticky top-8"></div>
    </div>
  );
}

export default layout;
