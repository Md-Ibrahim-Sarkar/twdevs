"use client"

import { ImNewTab } from "react-icons/im";
import { FaComputer } from "react-icons/fa6";
import { FaTabletAlt } from "react-icons/fa";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { RiCodeSSlashFill } from "react-icons/ri";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { IoIosEye, IoMdCopy } from "react-icons/io";
import CodePreview from "../CodeViewBox/CodePreview";
import { SlScreenTablet } from "react-icons/sl";


import { createHighlighter } from "shiki/index.mjs";
import Link from "next/link";
import { toast } from "react-toastify";



export const ComponentsView = ({ children, code, className, link, title, jsCode }) => {

    const [highlightCode, setHighlightCode] = useState(null)


    const highlighter = createHighlighter({
        themes: ['monokai'],
        langs: ['javascript'],
    })

    //  HTML Code

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




    const [codeOpen, setCodeOpen] = useState('Preview')


    const handleCopy = () => {
        navigator.clipboard.writeText(code).then(() => {
            toast.success('Successfully copied!', {
                position: "top-center",
                autoClose: 2000,
            })

        }).catch(err => {
            console.error("Failed to copy: ", err);
        });
    };


    return (
        <div className={` w-full h-auto mx-2 mb-8`}>
            <div className="flex items-center justify-between w-full px-4 py-2 shadow-md dark:border-b">

                <h2 className="text-2xl md:text-2xl pl-2 my-2 border-l-4  font-sans font-semibold border-mainColor text-black  dark:text-gray-200 ">{title}</h2>

                {/* Full screen Preview button */}
                {link && <Link href={link} target="_blank" className="flex gap-3 max-sm:hidden ">
                    <button className="flex items-center px-3 py-1 border rounded ">
                        <ImNewTab className="me-1" />
                        <span>Check Responsive View</span>
                    </button>

                </Link>}



                {/* Copy button */}
                <div className="relative inline-block">
                    {/* Copy Button */}
                    {
                        codeOpen === 'code' && <button
                        onClick={handleCopy}
                        type="button"
                        className="inline-flex me-4 items-center px-2 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-md ms-3 hover:bg-gray-100 hover:text-blue-700 focus:z-10 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white"
                    >
                        <IoMdCopy className="h-5 w-7" />
                        Copy Code
                    </button>
                    }


                    {/* Popup Notification */}




                    {/* Preview button and code button */}
                    <div className="inline-flex rounded-md shadow-sm" >

                        <button
                            onClick={() => setCodeOpen("code")}
                            type="button"
                            className={`inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 duration-500  border border-gray-200 rounded-s-lg  dark:bg-gray-800 dark:border-gray-700 dark:text-white   ${codeOpen === 'code' ? 'bg-mainColor dark:bg-mainColor' : ''}`}
                        >
                            <RiCodeSSlashFill className="w-5 h-5 me-1" />
                            <span>Code</span>
                        </button>

                        <button

                            onClick={() => setCodeOpen("Preview")}
                            type="button"
                            className={`inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 duration-500 border border-gray-200 rounded-e-lg   dark:bg-gray-800 dark:border-gray-700 dark:text-white    ${codeOpen === 'Preview' ? 'bg-mainColor dark:bg-mainColor' : ''}`}
                        >
                            <IoIosEye className="w-5 h-5 me-1" />
                            Preview
                        </button>



                        {jsCode && <button

                            type="button"
                            className={`inline-flex ms-4 items-center px-4 py-2 text-sm font-medium text-gray-900 duration-500  border border-gray-200 rounded-lg  dark:bg-gray-800 dark:border-gray-700 dark:text-white   ${codeOpen === 'js' ? 'bg-mainColor dark:bg-mainColor' : ''}`}
                        >
                            <RiCodeSSlashFill className="w-5 h-5 me-1" />
                            <span>Show JS</span>
                        </button>}
                    </div>
                </div>


            </div>


            {/* Body content box  for code */}
            {
                codeOpen === 'code' &&
                <CodePreview >

                    <div className="max-w-sm shiki-code-block" dangerouslySetInnerHTML={{ __html: highlightCode }} ></div>

                </CodePreview>
            }

            {/* Body content box  for preview */}

            {
                codeOpen === 'Preview' &&
                <div className={`min-h-[250px]  mx-auto outline outline-2 outline-mainColor bg-white dark:bg-gray-900 rounded-lg overflow-hidden transition-all duration-500 flex items-center`}>
                    <div className={`w-full flex justify-center items-center ${className}`}>
                        {children}
                    </div>
                </div>
            }

        </div>
    )
}


