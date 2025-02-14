import { DrawerContext } from '@/context';
import { useContext } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { IoClose } from "react-icons/io5";
import Components_Sidebar from './Componets_Siderbar';

function Docs_MenuDrawer() {
    const { isOpen, setIsOpen } = useContext(DrawerContext);

    const toggleOpen = () => {
        const menuElement = document.querySelector('.menu');
        const canvasElement = document.querySelector('.canvas');

        if (menuElement) {
            menuElement.classList.toggle('opened');
        }

        if (canvasElement) {
            canvasElement.classList.toggle('hidden');
            canvasElement.classList.toggle('translate-x-full');
            canvasElement.classList.toggle('overflow-y-auto');
            canvasElement.classList.toggle('transform transition-all ease-linear duration-500');
            canvasElement.classList.toggle('transition-transform');
        }

        setIsOpen(!isOpen); // Single state update
    };

    return (
        <div className="min-[1280px]:hidden">
            <button
                onClick={toggleOpen}
                aria-controls="drawer-right-example"
                className="w-10 h-10 menu min-[1280px]:hidden bg-transparent text-white dark:text-white"
                aria-label="Main Menu"
            >
                <svg width="100" height="40" viewBox="0 0 100 100" className="text-current">
                    <path
                        className="line line1"
                        d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                    />
                    <path
                        className="line line2"
                        d="M 20,50 H 80"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                    />
                    <path
                        className="line line3"
                        d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                    />
                </svg>
            </button>
            <div
                onClick={toggleOpen}
                id="drawer-right-example"
                className="fixed -top-5 -left-4 z-40 h-screen p-4 text-black canvas overflow-y-auto transition-transform translate-x-full  w-full dark:bg-[rgba(4,5,5,0.51)] hidden"
                aria-labelledby="drawer-right-label"
            >

                <div onClick={(e) => e.stopPropagation()} className='max-w-[255px] h-screen bg-white dark:bg-black'>
                    <h5
                        id="drawer-right-label"
                        className="inline-flex items-center mb-4 text-base font-semibold text-gray-500 dark:text-gray-400"
                    >
                        <span className="text-4xl text-black font-lobster">
                            <Image
                                src={'/nav-logo.png'}
                                width={200} height={100}
                                alt='image'
                            />
                        </span>
                        <button
                            type="button"
                            onClick={toggleOpen}
                            className="text-2xl ps-6"
                        >
                           <IoClose />
                        </button>
                    </h5>

                    <div className=''>
                        <Components_Sidebar />
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Docs_MenuDrawer;
