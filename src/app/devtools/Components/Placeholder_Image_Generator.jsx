'use client';

import Close_Button from "@/components/ui/buttons/Close_Button";
import Download_Button from "@/components/ui/buttons/Download_Button";
import Button from "@/components/ui/preview&download/button";
import html2canvas from "html2canvas";
import { useState } from "react";
import { FaArrowsTurnRight } from "react-icons/fa6";



function Placeholder_Image_Generator() {
  const [width, setWidth] = useState(300);
  const [height, setHeight] = useState(200);
  const [bgColor, setBgColor] = useState("#dddddd");
  const [textColor, setTextColor] = useState("#aaaaaa");
  const [fontSize, setFontSize] = useState(40);
  const [fontFamily, setFontFamily] = useState("Arial");
  const [fontWeight, setFontWeight] = useState("400");
  const [isOpen, setIsOpen] = useState(false)

  const handleDownload = () => {
    const element = document.getElementById("preview");
    const scale = 1; // স্কেলকে ১-এ সেট করি, যেন ডিভাইস পিক্সেল রেশিও কাজ না করে

    html2canvas(element, {
      scale, // ডিভাইস পিক্সেল রেশিও স্কেলিং বন্ধ করা হলো
      useCORS: true, // ক্রস-অরিজিন রিসোর্স সঠিকভাবে ক্যাপচার করতে
    }).then((canvas) => {
      const link = document.createElement("a");
      const randomName = `placeholder_${Math.random().toString(36).substring(2, 10)}.png`;
      link.download = randomName;
      link.href = canvas.toDataURL("image/png");
      link.click();
    });
  };


  const openModal = () => {
    setIsOpen(true)
  }
  const closeModal = () => {
    setIsOpen(false)
  }

  return (
    <div className="p-4 max-w-5xl mx-auto">
      <h1 className="text-3xl font-extrabold mb-4 text-center">
        Placeholder Image Generator
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-1 gap-8">
        {/* Form Section */}
        <div className="border shadow-lg rounded-lg p-3">
          <h2 className="text-xl font-bold text-center mb-3 ">
            Customize Your Placeholder
          </h2>
          <div className="flex flex-col gap-4">
            <div className="grid grid-cols-3 gap-4 ">
              <div className="flex flex-col">
                <label className="text-sm font-medium mb-2">
                  Width (px)
                </label>
                <input
                  type="number"
                  value={width}
                  onChange={(e) => setWidth(e.target.value)}
                  placeholder="Width"
                  className="p-2 border rounded-lg"
                />
              </div>

              <div className="flex flex-col">
                <label className="text-sm font-medium mb-2">
                  Height (px)
                </label>
                <input
                  type="number"
                  value={height}
                  onChange={(e) => setHeight(e.target.value)}
                  placeholder="Height"
                  className="p-2 border rounded-lg"
                />
              </div>

              <div className="flex flex-col">
                <label className="text-sm font-medium mb-2">
                  Font Size (px)
                </label>
                <input
                  type="number"
                  value={fontSize}
                  onChange={(e) => setFontSize(e.target.value)}
                  placeholder="Font Size"
                  className="p-2 border rounded-lg"
                />
              </div>
            </div>

            <div className="flex items-center gap-8   w-full">
              {/* Fill Color Section */}
              <div className="w-full">
                <label className="text-sm font-medium  w-20">Fill Color</label>
                <div className="flex items-center gap-2 w-full">
                  <input
                    type="color"
                    value={bgColor}
                    onChange={(e) => setBgColor(e.target.value)}
                    className=" h-10 w-12 cursor-pointer  border-gray-300 rounded"
                  />
                  <input
                    type="text"
                    value={bgColor}
                    onChange={(e) => setBgColor(e.target.value)}
                    className="p-2 border border-gray-300 rounded-lg w-full focus:outline-none"
                  />

                </div>
              </div>

              {/* Text Color Section */}
              <div className="w-full">
                <label className="text-sm font-medium   w-20">Text Color</label>
                <div className="flex items-center gap-2 w-full">
                  <input
                    type="color"
                    value={textColor}
                    onChange={(e) => setTextColor(e.target.value)}
                    className="h-10  w-12 cursor-pointer  border-gray-300 rounded"
                  />
                  <input
                    type="text"
                    value={textColor}
                    onChange={(e) => setTextColor(e.target.value)}
                    className="p-2 border border-gray-300 rounded-lg w-full focus:outline-none"
                  />

                </div>
              </div>
            </div>

            <div className="flex w-full gap-5">
              <div className="flex flex-col w-full">
                <label className="text-sm font-medium mb-2 ">
                  Font Family
                </label>
                <select
                  value={fontFamily}
                  onChange={(e) => setFontFamily(e.target.value)}
                  className="p-2 border rounded-lg w-full"
                >
                  <option value="Arial">Arial</option>
                  <option value="Lato">Lato</option>
                  <option value="Roboto">Roboto</option>
                </select>
              </div>

              <div className="flex flex-col w-full">
                <label className="text-sm font-medium  mb-2">
                  Font Weight
                </label>
                <select
                  value={fontWeight}
                  onChange={(e) => setFontWeight(e.target.value)}
                  className="p-2 border rounded-lg w-full"
                >
                  <option value="400">Regular</option>
                  <option value="700">Bold</option>
                </select>
              </div>
            </div>

            <button >
              <Button openModal={openModal} />
            </button>
          </div>
        </div>

        {/* Preview Section */}
        <div className={`fixed right-0 top-0 z-50 h-full w-5/6 bg-white dark:bg-gray-900   shadow-lg transform transition-transform scrollbar-hidden duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}>

          <Close_Button closeModal={closeModal} />

          <div className="flex gap-1 justify-center items-center ">
            <h2 className="text-4xl font-bold text-center mb-6 -mt-10">Preview</h2>
            <FaArrowsTurnRight className="rotate-90 -mb-4 w-5 h-5 -mt-14" />
          </div>
          <div
            id="preview"
            style={{
              width: `${width}px`,
              height: `${height}px`,
              backgroundColor: bgColor,
              color: textColor,
              fontSize: `${fontSize}px`,
              fontFamily,
              fontWeight,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            className=" rounded mb-6 mx-auto"
          >
            {width + " X " + height}
          </div>
          <div className="flex justify-center mb-8">
            <Download_Button onclick={handleDownload} />
          </div>
        </div>
      </div>
      {isOpen && (
        <div
          onClick={closeModal}
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
        ></div>
      )}
    </div>
  );
}

export default Placeholder_Image_Generator;
