// src/components/WebsiteTools.js
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaCaretDown } from "react-icons/fa";

function IndexDevTools() {
    return (
        <div className="py-10 ">
            <h1 className="mb-6 text-2xl font-bold text-center">Website Management Tools</h1>
            <p className="mb-8 text-center text-gray-600">
                If you are struggling to get more traffic and enhance your website performance, then use these website management tools and in-depth web analysis.
            </p>
            <div className="grid max-w-4xl grid-cols-2 gap-6 mx-auto sm:grid-cols-4">

                <Link href={'/devtools/px-to-rem'} className="relative cursor-pointer group hover:scale-110 hover:duration-300">
                    {/* Main Card */}
                    <div className="flex flex-col items-center p-6 transition duration-200 bg-white dark:bg-gray-900 rounded-lg shadow-lg hover:bg-blue-100">
                        <Image
                            src={'/images/devTools/PixeltoREM.png'}
                            width={100}
                            height={100}
                            alt="pxtorem"
                        />
                        <span className="font-medium text-center dark:text-white text-nowrap">Pixel to REM Converter</span>
                    </div>

                    {/* Hover Popup */}
                    <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-opacity-70 text-[10px] opacity-0 font-normal group-hover:opacity-100 group-hover:top-[-95px] transition-all duration-200 ">
                        <span className="relative z-10 px-2 py-1 text-white rounded bg-slate-800">
                            PX to REM Converter
                            {/* Caret icon */}
                            <span className="absolute inset-x-0 flex justify-center -bottom-3 -z-0">
                                <FaCaretDown className="w-6 h-6 text-slate-800" />
                            </span>
                        </span>

                    </div>
                </Link>
                <Link href={'/devtools/placeholder-image-generator'} className="relative cursor-pointer group hover:scale-110 hover:duration-300">
                    {/* Main Card */}
                    <div className="flex flex-col items-center p-6 transition duration-200 bg-white dark:bg-gray-900 rounded-lg shadow-lg hover:bg-blue-100">
                        <Image
                            src={'/images/devTools/Placeholder Image Generator.png'}
                            width={100}
                            height={100}
                            alt="pxtorem"
                            className="rounded"
                        />
                        <span className="font-medium text-center text-[15px] dark:text-white text-nowrap">Placeholder Image Generator</span>
                    </div>

                    {/* Hover Popup */}
                    <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-opacity-70 text-[10px] opacity-0 font-normal group-hover:opacity-100 group-hover:top-[-95px] transition-all duration-200 ">
                        <span className="relative z-10 px-2 py-1 text-white rounded bg-slate-800">
                            Placeholder Image Generator
                            {/* Caret icon */}
                            <span className="absolute inset-x-0 flex justify-center -bottom-3 -z-0">
                                <FaCaretDown className="w-6 h-6 text-slate-800" />
                            </span>
                        </span>

                    </div>
                </Link>
                <Link
                    href={'/devtools/form-builder'}
                    className="relative cursor-pointer group hover:scale-110 hover:duration-300"
                >
                    {/* Main Card */}
                    <div className="flex flex-col items-center p-6 transition duration-200 bg-white dark:bg-gray-900 rounded-lg shadow-lg hover:bg-blue-100">
                        <Image
                            src={'/images/devTools/FormBuilder.png'}
                            width={100}
                            height={100}
                            alt="form-builder"
                        />
                        <span className="font-medium text-center dark:text-white text-nowrap">
                            Form Builder
                        </span>
                    </div>

                    {/* Hover Popup */}
                    <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-opacity-70 text-[10px] opacity-0 font-normal group-hover:opacity-100 group-hover:top-[-95px] transition-all duration-200">
                        <span className="relative z-10 px-2 py-1 text-white rounded bg-slate-800">
                            Tailwind Form Builder
                            <span className="absolute inset-x-0 flex justify-center -bottom-3 -z-0">
                                <FaCaretDown className="w-6 h-6 text-slate-800" />
                            </span>
                        </span>
                    </div>
                </Link>

            </div>
        </div>
    )
}

export default IndexDevTools