import Demo from '@/components/demo-contant';
import Sidebar from '@/app/dashboard/Components/Sidebar';

export default function Page() {
  const logoPath = '/docs-logo.png';

  return (
    <div className="flex h-screen overflow-hidden xl:px-10">
      <div className="w-auto">
        <div className="max-[1080px]:hidden">
          <Sidebar />
        </div>
      </div>

      <div className="overflow-auto scrollbar-hide scrollbar-custom w-[65%] max-[1080px]:w-[100%]">
        <div className="p-4 bg-muted/50">
          <Demo />
        </div>
      </div>

      <div className=" border-l w-[20%] max-[1080px]:hidden overflow-auto scrollbar-hide scrollbar-custom">
        <ul className="p-2 px-4 space-y-2 ">
          <h3 className="font-semibold">
            Beautifully Crafted Components for Your Apps
          </h3>
          <li>Introduction</li>
          <li>What Are Beautifully Crafted Components? </li>
          <li>Key Features of These Components </li>
          <li>Ready to Copy, Paste, and Customize</li>
          <li>Accessible</li>
          <li>Adaptable to Different Use Cases</li>
          <li>Open Source</li>
          <li>Benefits of Using Ready-Made Components</li>
        </ul>
      </div>
    </div>
  );
}
