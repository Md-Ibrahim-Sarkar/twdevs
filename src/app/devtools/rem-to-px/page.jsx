"use client";

import Footer from "@/components/footer/Footer";
import Button from "@/components/ui/Button";
import Link from "next/link";
import { useState } from "react";

export default function PxToRemConverter() {
    const [rem, setRem] = useState(1);
    const [baseFontSize, setBaseFontSize] = useState(16);
    const [buttonText, setButtonText] = useState("Copy");

    const calculateRem = (px, base) => (px * base).toFixed(0);

    const handleCopy = () => {
        const remValue = calculateRem(rem, baseFontSize);
        navigator.clipboard.writeText(remValue);
        setButtonText("Copied!");

        setTimeout(() => setButtonText("Copy"), 2000);
    };


    return (
        <>
            <div className="">
                <div className="flex justify-center">
                    <div className="w-full max-w-md p-8 text-gray-800 rounded-xl">
                        <h1 className="mb-6 text-2xl font-bold text-center dark:text-white">REM to PX Converter</h1>

                        <div className="flex items-center justify-between mb-6">
                            <div className="flex flex-col">
                                <label className="block text-sm font-medium text-gray-600 dark:text-white">REM</label>
                                <input
                                    type="number"
                                    value={rem}
                                    onChange={(e) => setRem(e.target.value)}
                                    className="px-4 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none dark:text-white"
                                />
                            </div>
                            <Link href={'/devtools/px-to-rem'} className="px-4 mt-5 text-2xl font-semibold text-gray-500">⇄</Link>
                            <div className="relative flex flex-col">
                                <label className="block text-sm font-medium text-gray-600 dark:text-white">Pixels</label>
                                <div className="flex items-center border border-gray-300 rounded-md shadow-sm">
                                    <input
                                        type="text"
                                        value={calculateRem(rem, baseFontSize)}
                                        readOnly
                                        className="px-2 py-2 mt-1 rounded-md cursor-not-allowed w-28 focus:outline-none dark:text-white "
                                    />
                                    <Button onClick={handleCopy} className='w-20 h-7 me-2' > {buttonText} </Button>
                                </div>

                            </div>
                        </div>

                        <div className="flex flex-col mb-6">
                            <label className="block text-sm font-medium text-gray-600 dark:text-white">Base Font Size (px)</label>
                            <input
                                type="number"
                                value={baseFontSize}
                                onChange={(e) => setBaseFontSize(e.target.value)}
                                className="px-4 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none dark:text-white"
                            />
                        </div>

                        <p className="text-sm text-center text-gray-500 dark:text-white">
                            This calculation is based on an adjustable default root font-size of {baseFontSize}px.
                        </p>

                    </div>
                </div>

                <div className="max-w-2xl mx-auto mt-8">
                    <section className="mb-8">
                        <h2 className="mb-4 text-2xl font-semibold">What is a PX to REM Converter?</h2>
                        <p className="leading-relaxed ">
                            This tool allows you to easily convert any pixel (px) value into its
                            equivalent rem (root em) CSS unit. In CSS, <strong>rem</strong> refers to a
                            scalable unit of measurement based on the font-size of the root{" "}
                            <code>&lt;html&gt;</code> element. Unlike fixed pixels, rem units offer better
                            scalability and ensure consistent font sizes and spacing throughout a design.
                        </p>
                    </section>
                    <section className="mb-8">
                        <h2 className="mb-4 text-2xl font-semibold">What is 1rem in CSS?</h2>
                        <p className="leading-relaxed ">
                            By default, most browsers set the root font-size to <strong>16px</strong>,
                            meaning <strong>1rem = 16px</strong>. For example:
                        </p>
                        <ul className="mt-2 ml-8 list-disc ">
                            <li>
                                <code>2rem</code> = 32px
                            </li>
                            <li>
                                <code>0.5rem</code> = 8px
                            </li>
                        </ul>
                        <p className="mt-4 leading-relaxed">
                            If you adjust the root font-size in your CSS (e.g.,{" "}
                            <code>html &#123; font-size: 18px; &#125;</code>), all rem values scale
                            accordingly.
                        </p>
                    </section>
                    <section className="mb-8">
                        <h2 className="mb-4 text-2xl font-semibold">Why Use REM?</h2>
                        <p className="leading-relaxed ">Using rem units improves:</p>
                        <ul className="mt-2 ml-8 list-disc ">
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
                        <h2 className="mb-4 text-2xl font-semibold">How to Use the PX to REM Converter</h2>
                        <p className="leading-relaxed ">
                            Follow these steps to convert pixels to rem using our tool:
                        </p>
                        <ol className="mt-2 ml-8 list-decimal ">
                            <li>Enter your pixel value in the input field.</li>
                            <li>Adjust the root font-size (default is 16px, but you can modify it).</li>
                            <li>Instantly view the rem equivalent.</li>
                        </ol>
                        <p className="mt-4 leading-relaxed">
                            This bidirectional tool ensures precise and fast conversion, making it easier to
                            design scalable and responsive web layouts.
                        </p>
                    </section>
                </div>

            </div>
            <Footer />
        </>
    );
}
