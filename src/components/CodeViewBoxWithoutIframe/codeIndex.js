"use client"
import ReactDOMServer from "react-dom/server";
import { ImNewTab } from "react-icons/im";
import { FaComputer } from "react-icons/fa6";
import { FaTabletAlt } from "react-icons/fa";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { RiCodeSSlashFill } from "react-icons/ri";
import { useEffect, useRef, useState } from "react";
import { useTheme } from "next-themes";
import { IoIosEye, IoMdCopy } from "react-icons/io";
import CodePreview from "./CodePreview";
import { SlScreenTablet } from "react-icons/sl";
import { BsArrowsFullscreen } from "react-icons/bs";

import { createHighlighter } from "shiki/index.mjs";
import Link from "next/link";
import { toast } from "react-toastify";
import ModalView from "./ModalView";
import { PiControlFill } from "react-icons/pi";

// modal
import { motion, AnimatePresence } from "framer-motion";
import { AiOutlineFullscreenExit } from "react-icons/ai";



export const FullComponentsViewWithoutIframe = ({ children, code, className, link, jsCode, title, description, reactCode, customHight }) => {

    //  modal state
    const [modalOpen, setModalOpen] = useState(false);


    // state change
    const [codeOpen, setCodeOpen] = useState('Preview')

    // responsive state change
    const [displaySize, setDisplaySize] = useState("laptop");




    const highlighter = createHighlighter({
        themes: ['monokai'],
        langs: ['javascript'],
    })

    //  HTML Code
    const [highlightCode, setHighlightCode] = useState(null)
    useEffect(() => {
        const highlightCode = async () => {
            const html = (await highlighter).codeToHtml(code, {
                lang: 'javascript',
                theme: 'monokai'
            });
            setHighlightCode(html)
        };

        highlightCode();
    }, []);


    //  js code
    const [jsHighlightCode, setJsHighlightCode] = useState(null)

    useEffect(() => {
        const jsHighlightCode = async () => {
            const js = (await highlighter).codeToHtml(jsCode, {
                lang: 'javascript',
                theme: 'monokai'
            });
            setJsHighlightCode(js)
        };

        jsHighlightCode();
    }, []);

    // react code

    const [reHighlightCode, setReHighlightCode] = useState(null)

    useEffect(() => {
        const reHighlightCode = async () => {
            const re = (await highlighter).codeToHtml(reactCode, {
                lang: 'javascript',
                theme: 'monokai'
            });
            setReHighlightCode(re)
        };

        reHighlightCode();
    }, []);


    console.log(reHighlightCode);



    // Handle class dynamically based on display size
    const getDisplayClass = () => {
        if (displaySize === "laptop") return "max-w-full";
        if (displaySize === "tablet") return "max-w-[768px]";
        if (displaySize === "mobile") return "max-w-[320px]";
        return "";
    };




    const handleCopy = () => {
        navigator.clipboard.writeText(code).then(() => {
            toast.success('HTML Code copied Successfully!', {
                position: "top-center",
                autoClose: 2000,
            })

        }).catch(err => {
            console.error("Failed to copy: ", err);
        });
    };


    const reactHandleCopy = () => {
        navigator.clipboard.writeText(reactCode).then(() => {
            toast.success('React Code copied Successfully!', {
                position: "top-center",
                autoClose: 2000,
            })

        }).catch(err => {
            console.error("Failed to copy: ", err);
        });
    }

    const handleJsCopy = () => {
        navigator.clipboard.writeText(jsCode).then(() => {
            toast.success('Js Code copied Successfully!', {
                position: "top-center",
                autoClose: 2000,
            })

        }).catch(err => {
            console.error("Failed to copy: ", err);
        });

    }


   
    return (
        <div className={` w-full h-auto mx-auto  ${className}`}>

            <div class=" mx-auto text-center mt-2">
                <h2 class="flex flex-row flex-nowrap items-center">
                    {/* <span class="flex-grow block border-t border-mainColor"></span> */}
                    <span class="flex-none block me-4 px-3 py-[6px] text-2xl rounded leading-none font-semibold bg-mainColor text-black">
                        {title}
                    </span>
                    <span class="flex-grow block border-t border-mainColor"></span>
                </h2>
                <p class="text-lg text-start mb-3 ">{description}</p>
            </div>

            <div className="flex items-center justify-between w-full px-4 py-2 shadow-md dark:border-b">






                {/* Preview button and code button */}
                <div className="inline-flex rounded-md shadow-sm" >
                    <button

                        onClick={() => setCodeOpen("Preview")}
                        type="button"
                        className={`inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 duration-500 border border-gray-200 rounded-s-lg   dark:bg-gray-800 dark:border-gray-700 dark:text-white    ${codeOpen === 'Preview' ? 'bg-mainColor dark:bg-mainColor' : ''}`}
                    >
                        <IoIosEye className="w-5 h-5 me-1" />
                        Preview
                    </button>

                    <button
                        onClick={() => setCodeOpen("code")}
                        type="button"
                        className={`inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 duration-500  border border-gray-200  dark:bg-gray-800 dark:border-gray-700 dark:text-white   ${codeOpen === 'code' ? 'bg-mainColor dark:bg-mainColor' : ''}`}
                    >
                        <RiCodeSSlashFill className="w-5 h-5 me-1" />
                        <span>Html</span>
                    </button>

                    {jsCode && <button
                        onClick={() => setCodeOpen("jsCode")}
                        type="button"
                        className={`inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 duration-500  border border-gray-200  dark:bg-gray-800 dark:border-gray-700 dark:text-white   ${codeOpen === 'jsCode' ? 'bg-mainColor dark:bg-mainColor' : ''}`}
                    >
                        <RiCodeSSlashFill className="w-5 h-5 me-1" />
                        <span>JS Code</span>


                    </button>}



                    {
                        reactCode && <button
                            onClick={() => setCodeOpen("reactCode")}
                            type="button"
                            className={`inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 duration-500  border border-gray-200 rounded-e-lg  dark:bg-gray-800 dark:border-gray-700 dark:text-white   ${codeOpen === 'reactCode' ? 'bg-mainColor dark:bg-mainColor' : ''}`}
                        >
                            <RiCodeSSlashFill className="w-5 h-5 me-1" />
                            <span>React</span>
                        </button>
                    }


                </div>




                {/* Copy button */}
                <div className="relative inline-block">
                    {/* Copy Button */}
                    {code && <button
                        onClick={handleCopy}
                        type="button"
                        className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-l-lg ms-3 hover:bg-gray-100 hover:text-blue-700 focus:z-10 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white"
                    >
                        <IoMdCopy className="h-5 w-7" />
                        Copy HTML Code
                    </button>}
                    {jsCode && <button
                        onClick={handleJsCopy}
                        type="button"
                        className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-e-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white"
                    >
                        <IoMdCopy className="h-5 w-7" />
                        Copy Js
                    </button>}


                </div>


                {/* React code copy */}

                {reactCode && <button
                    onClick={reactHandleCopy}
                    type="button"
                    className="inline-flex me-4 items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-md ms-3 hover:bg-gray-100 hover:text-blue-700 focus:z-10 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white"
                >
                    <IoMdCopy className="h-5 w-7" />
                    Copy React Code
                </button>}




                {/* Full screen Preview button */}


                <div className="relative group">
                    <button
                        onClick={() => setModalOpen(true)}
                        type="button"
                        className="inline-flex me-4 items-center px-2  py-1.5 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-md ms-3 hover:bg-gray-100  focus:z-10 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-mainColor dark:focus:text-white"
                    >
                        <BsArrowsFullscreen className="w-6 h-4 me-1 font-bold" />
                    </button>

                    <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 text-white bg-black rounded opacity-0 transition-opacity duration-300 pointer-events-none group-hover:opacity-100 dark:text-black dark:bg-mainColor whitespace-nowrap z-50">
                        Large View <span><PiControlFill className="absolute -bottom-2.5 left-7 dark:text-mainColor rotate-180 text-black  z-50 w-7 h-7" /></span>
                    </div>

                </div>



                {/* Responsive design buttons */}
                <div className="flex gap-4 max-lg:hidden">


                    {/* Laptop View Button */}
                    <div className="relative group">
                        <button
                            onClick={() => setDisplaySize("laptop")}
                            className={`flex items-center justify-center w-8 h-8 duration-300 border rounded focus:bg-mainColor ${displaySize === "laptop" ? "bg-mainColor" : ""
                                }`}
                        >
                            <FaComputer className="w-6 h-4" />
                        </button>
                        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 text-white bg-black rounded opacity-0 transition-opacity duration-300 pointer-events-none group-hover:opacity-100  dark:bg-mainColor dark:text-black whitespace-nowrap z-50">
                            Laptop View  <span><PiControlFill className="absolute -bottom-2.5 left-9 dark:text-mainColor rotate-180 text-black  z-50 w-7 h-7" /></span>
                        </div>
                    </div>

                    {/* Tablet View Button */}
                    <div className="relative group">
                        <button
                            onClick={() => setDisplaySize("tablet")}
                            className={`flex items-center justify-center w-8 h-8 duration-300 border rounded focus:bg-mainColor ${displaySize === "tablet" ? "bg-mainColor" : ""
                                }`}
                        >
                            <SlScreenTablet className="w-6 h-4" />
                        </button>
                        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 text-white bg-black rounded opacity-0 transition-opacity duration-300 pointer-events-none group-hover:opacity-100 dark:bg-mainColor dark:text-black whitespace-nowrap z-50">
                            Tablet View  <span><PiControlFill className="absolute -bottom-2.5 left-9 dark:text-mainColor rotate-180 text-black  z-50 w-7 h-7" /></span>
                        </div>
                    </div>

                    {/* Mobile View Button */}
                    <div className="relative group">
                        <button
                            onClick={() => setDisplaySize("mobile")}
                            className={`flex items-center justify-center w-8 h-8 duration-300 border rounded focus:bg-mainColor ${displaySize === "mobile" ? "bg-mainColor" : ""
                                }`}
                        >
                            <IoPhonePortraitOutline className="w-6 h-4" />
                        </button>
                        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 text-white bg-black rounded opacity-0 transition-opacity duration-300 pointer-events-none group-hover:opacity-100 dark:bg-mainColor dark:text-black whitespace-nowrap z-50">
                            Mobile View  <span><PiControlFill className="absolute -bottom-2.5 left-9 dark:text-mainColor rotate-180 text-black  z-50 w-7 h-7" /></span>
                        </div>
                    </div>
                </div>

            </div>

            {/* jsCode  */}

            {
                codeOpen === 'jsCode' &&

                <CodePreview>
                    <div className="max-w-sm shiki-code-block" dangerouslySetInnerHTML={{ __html: jsHighlightCode }} ></div>
                </CodePreview>

            }


            {/* HTML code */}
            {
                codeOpen === 'code' &&
                <CodePreview >

                    <div className="max-w-sm shiki-code-block" dangerouslySetInnerHTML={{ __html: highlightCode }} ></div>

                </CodePreview>
            }

            {/* react code  */}
            {
                codeOpen === 'reactCode' &&
                <CodePreview >

                    <div className="max-w-sm shiki-code-block" dangerouslySetInnerHTML={{ __html: reHighlightCode }} ></div>

                </CodePreview>
            }

            {/* Body content box  for preview */}

            {
                codeOpen === 'Preview' &&
                <div className="border-[2px] border-gray-500 dark:border-gray-600 rounded-lg">
                    <div
                        className={`mx-auto py-auto outline outline-2 outline-mainColor bg-white dark:bg-gray-900 rounded-lg overflow-hidden transition-all duration-500 ${getDisplayClass()}`}
                    >
                        <div className="w-full">
                            {children}
                        </div>
                    </div>
                </div>
            }








            {/* Modal for preview component */}


            <AnimatePresence>
                {modalOpen && (
                    <motion.div
                        className="w-full z-50 flex items-center justify-center min-h-screen fixed top-0 left-0 cursor-pointer bg-[rgba(0,0,0,0.33)] overflow-auto scrollbar-hide scrollbar-custom"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setModalOpen(false)}
                    >
                        <button
                            onClick={() => setModalOpen(false)}
                            className="p-1 absolute z-50 me-3 mt-3 bg-white right-0 top-5 border border-mainColor text-black rounded-md cursor-pointer"
                        >
                            <AiOutlineFullscreenExit className="w-6 h-6" />
                        </button>
                        <motion.div
                            className="relative border cursor-default items-center mx-auto w-full "
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            onClick={(e) => e.stopPropagation()}
                            style={{
                                position: "relative", // Make sure modal is fixed relative to viewport
                                maxHeight: "90vh", // Prevent modal from growing too large
                                overflowY: "auto", // Allow scrolling inside modal if content overflows
                            }}
                        >


                            {children}
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>




        </div>
    )
}


