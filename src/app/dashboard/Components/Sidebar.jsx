"use client"

import Image from 'next/image';
import React from 'react'

const { useState } = React;
import { FaPlus, FaMinus } from "react-icons/fa6";


const SidebarItem = ({ title, children, defaultOpen = false }) => {
    const [isOpen, setIsOpen] = useState(defaultOpen);

    return (
        <div>
            <div
                className="flex items-center justify-between px-4 py-2 cursor-pointer dark:hover:text-mainColor hover:bg-gray-200"
                onClick={() => setIsOpen(!isOpen)}
            >
                <span className="font-semibold">{title}</span>
                {isOpen ? <FaMinus /> : <FaPlus />}
            </div>
            {isOpen && <div className="pl-6 space-y-2">{children}</div>}
        </div>
    );
};



function Sidebar() {


    return (
        <div className="z-50 w-64 h-screen p-4 bg-white rounded-lg xl:w-72 dark:bg-black dark:text-white ">
            <div className="flex items-center gap-4 mb-4">
                <Image
                    src={'/docs-logo.png'}
                    width={20}
                    height={20}
                    alt='docs logo'
                />
                <div>
                    <div className="text-lg font-bold">Documentation</div>
                    <div className="text-sm text-gray-500">v1.0.0</div>
                </div>
            </div>
            <div className="relative mb-4">
                <input
                    type="text"
                    placeholder="Search the docs..."
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>
            <div className='flex-col  h-[calc(100vh-160px)] overflow-y-auto scrollbar-custom'>
                <div className=''>
                    <SidebarItem title="Getting Started" defaultOpen={false}>
                        <div className="px-2 py-1 border-b rounded cursor-pointer dark:hover:text-black">Routing</div>
                        <div className="px-2 py-1 border-b rounded cursor-pointer dark:hover:text-black">Data Fetching</div>
                        <div className="px-2 py-1 border-b rounded cursor-pointer dark:hover:text-black hover:bg-gray-200">Rendering</div>
                        <div className="px-2 py-1 border-b rounded cursor-pointer dark:hover:text-black hover:bg-gray-200">Caching</div>
                        <div className="px-2 py-1 border-b rounded cursor-pointer dark:hover:text-black hover:bg-gray-200">Styling</div>
                        <div className="px-2 py-1 border-b rounded cursor-pointer dark:hover:text-black hover:bg-gray-200">Optimizing</div>
                        <div className="px-2 py-1 border-b rounded cursor-pointer dark:hover:text-black hover:bg-gray-200">Configuring</div>
                        <div className="px-2 py-1 border-b rounded cursor-pointer dark:hover:text-black hover:bg-gray-200">Testing</div>
                    </SidebarItem>
                    <SidebarItem title="Components" defaultOpen={true}>
                        <div className="px-2 py-1 border-b rounded cursor-pointer dark:hover:text-black hover:bg-gray-200">Accordion</div>
                        <div className="px-2 py-1 border-b rounded cursor-pointer dark:hover:text-black">Alerts</div>
                        <div className="px-2 py-1 border-b rounded cursor-pointer dark:hover:text-black hover:bg-gray-200">Avatar</div>
                        <div className="px-2 py-1 border-b rounded cursor-pointer dark:hover:text-black hover:bg-gray-200">Badge</div>
                        <div className="px-2 py-1 border-b rounded cursor-pointer dark:hover:text-black hover:bg-gray-200">Banner</div>
                        <div className="px-2 py-1 border-b rounded cursor-pointer dark:hover:text-black hover:bg-gray-200">Bottom Navigation</div>
                        <div className="px-2 py-1 border-b rounded cursor-pointer dark:hover:text-black hover:bg-gray-200">Breadcrumb</div>
                        <div className="px-2 py-1 border-b rounded cursor-pointer dark:hover:text-black hover:bg-gray-200">Buttons</div>
                        <div className="px-2 py-1 border-b rounded cursor-pointer dark:hover:text-black hover:bg-gray-200">Button Group</div>
                        <div className="px-2 py-1 border-b rounded cursor-pointer dark:hover:text-black hover:bg-gray-200">Card</div>
                        <div className="px-2 py-1 border-b rounded cursor-pointer dark:hover:text-black hover:bg-gray-200">Carousel</div>
                        <div className="px-2 py-1 border-b rounded cursor-pointer dark:hover:text-black hover:bg-gray-200">Chat Bubble</div>
                        <div className="px-2 py-1 border-b rounded cursor-pointer dark:hover:text-black hover:bg-gray-200">Clipboard</div>
                        <div className="px-2 py-1 border-b rounded cursor-pointer dark:hover:text-black hover:bg-gray-200">Datepicker</div>
                        <div className="px-2 py-1 border-b rounded cursor-pointer dark:hover:text-black hover:bg-gray-200">Device Mockups</div>
                        <div className="px-2 py-1 border-b rounded cursor-pointer dark:hover:text-black hover:bg-gray-200">Drawer</div>
                        <div className="px-2 py-1 border-b rounded cursor-pointer dark:hover:text-black hover:bg-gray-200">Dropdowns</div>
                        <div className="px-2 py-1 border-b rounded cursor-pointer dark:hover:text-black hover:bg-gray-200">Footer</div>
                        <div className="px-2 py-1 border-b rounded cursor-pointer dark:hover:text-black hover:bg-gray-200">Forms</div>
                        <div className="px-2 py-1 border-b rounded cursor-pointer dark:hover:text-black hover:bg-gray-200">Gallery</div>
                        <div className="px-2 py-1 border-b rounded cursor-pointer dark:hover:text-black hover:bg-gray-200">Indicators</div>
                        <div className="px-2 py-1 border-b rounded cursor-pointer dark:hover:text-black hover:bg-gray-200">Jumbotron</div>
                        <div className="px-2 py-1 border-b rounded cursor-pointer dark:hover:text-black hover:bg-gray-200">KBD</div>
                        <div className="px-2 py-1 border-b rounded cursor-pointer dark:hover:text-black hover:bg-gray-200">List Group</div>
                        <div className="px-2 py-1 border-b rounded cursor-pointer dark:hover:text-black hover:bg-gray-200">Mega Menu</div>
                        <div className="px-2 py-1 border-b rounded cursor-pointer dark:hover:text-black hover:bg-gray-200">Modal</div>
                        <div className="px-2 py-1 border-b rounded cursor-pointer dark:hover:text-black hover:bg-gray-200">Navbar</div>
                        <div className="px-2 py-1 border-b rounded cursor-pointer dark:hover:text-black hover:bg-gray-200">Pagination</div>
                        <div className="px-2 py-1 border-b rounded cursor-pointer dark:hover:text-black hover:bg-gray-200">Popover</div>
                        <div className="px-2 py-1 border-b rounded cursor-pointer dark:hover:text-black hover:bg-gray-200">Progress</div>
                        <div className="px-2 py-1 border-b rounded cursor-pointer dark:hover:text-black hover:bg-gray-200">Rating</div>
                        <div className="px-2 py-1 border-b rounded cursor-pointer dark:hover:text-black hover:bg-gray-200">Sidebar</div>
                        <div className="px-2 py-1 border-b rounded cursor-pointer dark:hover:text-black hover:bg-gray-200">Skeleton</div>
                        <div className="px-2 py-1 border-b rounded cursor-pointer dark:hover:text-black hover:bg-gray-200">Speed Dial</div>
                        <div className="px-2 py-1 border-b rounded cursor-pointer dark:hover:text-black hover:bg-gray-200">Spinner</div>
                        <div className="px-2 py-1 border-b rounded cursor-pointer dark:hover:text-black hover:bg-gray-200">Stepper</div>
                        <div className="px-2 py-1 border-b rounded cursor-pointer dark:hover:text-black hover:bg-gray-200">Tables</div>
                        <div className="px-2 py-1 border-b rounded cursor-pointer dark:hover:text-black hover:bg-gray-200">Tabs</div>
                        <div className="px-2 py-1 border-b rounded cursor-pointer dark:hover:text-black hover:bg-gray-200">Timeline</div>
                        <div className="px-2 py-1 border-b rounded cursor-pointer dark:hover:text-black hover:bg-gray-200">Toast</div>

                    </SidebarItem>
                    <SidebarItem title="API Reference" defaultOpen={false}>
                        <div className="px-2 py-1 border-b rounded cursor-pointer dark:hover:text-black hover:bg-gray-200">Routing</div>
                        <div className="px-2 py-1 border-b rounded cursor-pointer dark:hover:text-black">Data Fetching</div>
                        <div className="px-2 py-1 border-b rounded cursor-pointer dark:hover:text-black hover:bg-gray-200">Rendering</div>
                        <div className="px-2 py-1 border-b rounded cursor-pointer dark:hover:text-black hover:bg-gray-200">Caching</div>
                        <div className="px-2 py-1 border-b rounded cursor-pointer dark:hover:text-black hover:bg-gray-200">Styling</div>
                        <div className="px-2 py-1 border-b rounded cursor-pointer dark:hover:text-black hover:bg-gray-200">Optimizing</div>
                        <div className="px-2 py-1 border-b rounded cursor-pointer dark:hover:text-black hover:bg-gray-200">Configuring</div>
                        <div className="px-2 py-1 border-b rounded cursor-pointer dark:hover:text-black hover:bg-gray-200">Testing</div>
                    </SidebarItem>
                    <SidebarItem title="Architecture" defaultOpen={false}>
                        <div className="px-2 py-1 border-b rounded cursor-pointer dark:hover:text-black hover:bg-gray-200">Routing</div>
                        <div className="px-2 py-1 border-b rounded cursor-pointer dark:hover:text-black">Data Fetching</div>
                        <div className="px-2 py-1 border-b rounded cursor-pointer dark:hover:text-black hover:bg-gray-200">Rendering</div>
                        <div className="px-2 py-1 border-b rounded cursor-pointer dark:hover:text-black hover:bg-gray-200">Caching</div>
                        <div className="px-2 py-1 border-b rounded cursor-pointer dark:hover:text-black hover:bg-gray-200">Styling</div>
                        <div className="px-2 py-1 border-b rounded cursor-pointer dark:hover:text-black hover:bg-gray-200">Optimizing</div>
                        <div className="px-2 py-1 border-b rounded cursor-pointer dark:hover:text-black hover:bg-gray-200">Configuring</div>
                        <div className="px-2 py-1 border-b rounded cursor-pointer dark:hover:text-black hover:bg-gray-200">Testing</div>
                    </SidebarItem>
                    <SidebarItem title="Community" defaultOpen={false}>
                        <div className="px-2 py-1 border-b rounded cursor-pointer dark:hover:text-black hover:bg-gray-200">Routing</div>
                        <div className="px-2 py-1 border-b rounded cursor-pointer dark:hover:text-black">Data Fetching</div>
                        <div className="px-2 py-1 border-b rounded cursor-pointer dark:hover:text-black hover:bg-gray-200">Rendering</div>
                        <div className="px-2 py-1 border-b rounded cursor-pointer dark:hover:text-black hover:bg-gray-200">Caching</div>
                        <div className="px-2 py-1 border-b rounded cursor-pointer dark:hover:text-black hover:bg-gray-200">Styling</div>
                        <div className="px-2 py-1 border-b rounded cursor-pointer dark:hover:text-black hover:bg-gray-200">Optimizing</div>
                        <div className="px-2 py-1 border-b rounded cursor-pointer dark:hover:text-black hover:bg-gray-200">Configuring</div>
                        <div className="px-2 py-1 border-b rounded cursor-pointer dark:hover:text-black hover:bg-gray-200">Testing</div>
                    </SidebarItem>
                </div>
                <div className='mt-auto'>
                    <h2>Here Us</h2>
                </div>
            </div>
        </div>
    )
}

export default Sidebar