"use client";

import Navbar from "@/components/Navbar";
import { useState } from "react";

export default function PxToRemConverter() {
    const [pixels, setPixels] = useState(16);
    const [baseFontSize, setBaseFontSize] = useState(16);
    const [buttonText, setButtonText] = useState("Copy");

    const calculateRem = (px, base) => (px / base).toFixed(3);

    const handleCopy = () => {
        const remValue = calculateRem(pixels, baseFontSize);
        navigator.clipboard.writeText(remValue);
        setButtonText("Copied!");

        setTimeout(() => setButtonText("Copy"), 2000);
    };

    return (
        <>
            <Navbar />
            <div className="">
                <div className="flex justify-center">
                <div className=" rounded-xl p-8 max-w-md w-full text-gray-800">
                    <h1 className="text-2xl font-bold text-center mb-6">PX to REM Converter</h1>

                    <div className="flex items-center justify-between mb-6">
                        <div className="flex flex-col">
                            <label className="block text-sm font-medium text-gray-600">Pixels</label>
                            <input
                                type="number"
                                value={pixels}
                                onChange={(e) => setPixels(e.target.value)}
                                className="mt-1 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
                            />
                        </div>
                        <div className="text-2xl font-semibold text-gray-500 px-4">⇄</div>
                        <div className="relative flex flex-col">
                            <label className="block text-sm font-medium text-gray-600">REM</label>
                            <input
                                type="text"
                                value={calculateRem(pixels, baseFontSize)}
                                readOnly
                                className="mt-1 w-28 px-4 py-2 border border-gray-300 rounded-md shadow-sm bg-gray-50 cursor-not-allowed focus:outline-none"
                            />
                            <button
                                onClick={handleCopy}
                                className="absolute right-2 top-2 px-2 py-1 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700 transition focus:ring-2 focus:ring-blue-500"
                            >
                                {buttonText}
                            </button>
                        </div>
                    </div>

                    <div className="flex flex-col mb-6">
                        <label className="block text-sm font-medium text-gray-600">Base Font Size (px)</label>
                        <input
                            type="number"
                            value={baseFontSize}
                            onChange={(e) => setBaseFontSize(e.target.value)}
                            className="mt-1 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
                        />
                    </div>

                    <p className="text-sm text-gray-500 text-center">
                        This calculation is based on an adjustable default root font-size of {baseFontSize}px.
                    </p>

                </div>
                </div>

                <div className="container mx-auto mt-8">
                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold mb-4">What is a PX to REM Converter?</h2>
                        <p className=" leading-relaxed">
                            This tool allows you to easily convert any pixel (px) value into its
                            equivalent rem (root em) CSS unit. In CSS, <strong>rem</strong> refers to a
                            scalable unit of measurement based on the font-size of the root{" "}
                            <code>&lt;html&gt;</code> element. Unlike fixed pixels, rem units offer better
                            scalability and ensure consistent font sizes and spacing throughout a design.
                        </p>
                    </section>
                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold mb-4">What is 1rem in CSS?</h2>
                        <p className=" leading-relaxed">
                            By default, most browsers set the root font-size to <strong>16px</strong>,
                            meaning <strong>1rem = 16px</strong>. For example:
                        </p>
                        <ul className="list-disc ml-8 mt-2 ">
                            <li>
                                <code>2rem</code> = 32px
                            </li>
                            <li>
                                <code>0.5rem</code> = 8px
                            </li>
                        </ul>
                        <p className="mt-4  leading-relaxed">
                            If you adjust the root font-size in your CSS (e.g.,{" "}
                            <code>html &#123; font-size: 18px; &#125;</code>), all rem values scale
                            accordingly.
                        </p>
                    </section>
                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold mb-4">Why Use REM?</h2>
                        <p className=" leading-relaxed">Using rem units improves:</p>
                        <ul className="list-disc ml-8 mt-2 ">
                            <li>
                                <strong>Scalability</strong>: Easily adapt to different screen sizes or user
                                preferences.
                            </li>
                            <li>
                                <strong>Consistency</strong>: Uniform spacing and font sizes across your UI.
                            </li>
                            <li>
                                <strong>Accessibility</strong>: Automatically respects user-defined browser
                                font settings.
                            </li>
                        </ul>
                    </section>
                    <section>
                        <h2 className="text-2xl font-semibold mb-4">How to Use the PX to REM Converter</h2>
                        <p className=" leading-relaxed">
                            Follow these steps to convert pixels to rem using our tool:
                        </p>
                        <ol className="list-decimal ml-8 mt-2 ">
                            <li>Enter your pixel value in the input field.</li>
                            <li>Adjust the root font-size (default is 16px, but you can modify it).</li>
                            <li>Instantly view the rem equivalent.</li>
                        </ol>
                        <p className="mt-4  leading-relaxed">
                            This bidirectional tool ensures precise and fast conversion, making it easier to
                            design scalable and responsive web layouts.
                        </p>
                    </section>
                </div>

            </div>

        </>
    );
}
