import { ComponentsView } from '@/components/CodeViewBoxTwo/Index';
import Image from 'next/image';
import Link from 'next/link';

function page() {
  return (
    <div>
      <ComponentsView
        link="/components/tailwind/footers/footer-one"
        title="Footer with Links"
      >
        <footer className="font-sans tracking-wide bg-[#213343] pt-12 pb-4 px-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-screen-xl mx-auto">
            <div>
              <h4 className="text-[#FFA726] font-semibold textLg mb-6">
                Quick Links
              </h4>
              <ul className="space-y-5">
                <li>
                  <Link
                    href="javascript:void(0)"
                    className="hover:text-[#FFA726] text-gray-300 text-[15px] transition-all"
                  >
                    Our Story
                  </Link>
                </li>
                <li>
                  <a
                    href="javascript:void(0)"
                    className="hover:text-[#FFA726] text-gray-300 text-[15px] transition-all"
                  >
                    Newsroom
                  </a>
                </li>
                <li>
                  <a
                    href="javascript:void(0)"
                    className="hover:text-[#FFA726] text-gray-300 text-[15px] transition-all"
                  >
                    Careers
                  </a>
                </li>
                <li>
                  <a
                    href="javascript:void(0)"
                    className="hover:text-[#FFA726] text-gray-300 text-[15px] transition-all"
                  >
                    Blog
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-[#FFA726] font-semibold textLg mb-6">
                Services
              </h4>
              <ul className="space-y-5">
                <li>
                  <a
                    href="javascript:void(0)"
                    className="hover:text-[#FFA726] text-gray-300 text-[15px] transition-all"
                  >
                    Web Development
                  </a>
                </li>
                <li>
                  <a
                    href="javascript:void(0)"
                    className="hover:text-[#FFA726] text-gray-300 text-[15px] transition-all"
                  >
                    Testing Automation
                  </a>
                </li>
                <li>
                  <a
                    href="javascript:void(0)"
                    className="hover:text-[#FFA726] text-gray-300 text-[15px] transition-all"
                  >
                    AWS Development Services
                  </a>
                </li>
                <li>
                  <a
                    href="javascript:void(0)"
                    className="hover:text-[#FFA726] text-gray-300 text-[15px] transition-all"
                  >
                    Mobile App Development
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-[#FFA726] font-semibold textLg mb-6">
                Platforms
              </h4>
              <ul className="space-y-5">
                <li>
                  <a
                    href="javascript:void(0)"
                    className="hover:text-[#FFA726] text-gray-300 text-[15px] transition-all"
                  >
                    Hubspot
                  </a>
                </li>
                <li>
                  <a
                    href="javascript:void(0)"
                    className="hover:text-[#FFA726] text-gray-300 text-[15px] transition-all"
                  >
                    Marketo Integration Services
                  </a>
                </li>
                <li>
                  <a
                    href="javascript:void(0)"
                    className="hover:text-[#FFA726] text-gray-300 text-[15px] transition-all"
                  >
                    Marketing Glossary
                  </a>
                </li>
                <li>
                  <a
                    href="javascript:void(0)"
                    className="hover:text-[#FFA726] text-gray-300 text-[15px] transition-all"
                  >
                    UIPath
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-[#FFA726] font-semibold textLg mb-6">
                Company
              </h4>
              <ul className="space-y-5">
                <li>
                  <a
                    href="javascript:void(0)"
                    className="hover:text-[#FFA726] text-gray-300 text-[15px] transition-all"
                  >
                    Accessibility
                  </a>
                </li>
                <li>
                  <a
                    href="javascript:void(0)"
                    className="hover:text-[#FFA726] text-gray-300 text-[15px] transition-all"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="javascript:void(0)"
                    className="hover:text-[#FFA726] text-gray-300 text-[15px] transition-all"
                  >
                    Contact
                  </a>
                </li>
                <li>
                  <a
                    href="javascript:void(0)"
                    className="hover:text-[#FFA726] text-gray-300 text-[15px] transition-all"
                  >
                    Learn more
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t text-center border-[#6b5f5f] pt-4 mt-8">
            <p className="text-gray-300 text-[15px]">
              © ReadymadeUI. All rights reserved.
            </p>
          </div>
        </footer>
      </ComponentsView>

      <ComponentsView
        link="/components/tailwind/footers/footer-one"
        title="Footer for blog"
      >
        <footer>
          <div className="bg-gray-800 py-4 text-gray-400">
            <div className="container px-4 mx-auto">
              <div className="-mx-4 flex flex-wrap justify-between">
                <div className="px-4 my-4 w-full xl:w-1/5">
                  <Link href="/" className="block w-56 mb-10">
                    <svg
                      version="1.1"
                      viewBox="0 0 3368 512"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g fill="none" fillRule="evenodd">
                        <g transform="translate(0 -75)">
                          <g transform="translate(0 75)">
                            <rect
                              width="512"
                              height="512"
                              rx="128"
                              fill="#3D5AFE"
                            ></rect>
                            <rect
                              x="149"
                              y="176"
                              width="220"
                              height="220"
                              fill="#fff"
                            ></rect>
                            <circle
                              cx="259"
                              cy="156"
                              r="40"
                              fill="#fff"
                            ></circle>
                            <circle
                              cx="369"
                              cy="286"
                              r="40"
                              fill="#2962FF"
                            ></circle>
                          </g>
                          <text
                            fill="white"
                            fontFamily="Nunito-Bold, Nunito"
                            fontSize="512"
                            fontWeight="bold"
                          >
                            <tspan x="654" y="518">
                              Tailwindow
                            </tspan>
                          </text>
                        </g>
                      </g>
                    </svg>
                  </Link>
                  <p className="text-justify">
                    Tailwindow is a collection of UI Components created using
                    Tailwind CSS Framework. The UI Components gives you all of
                    the building blocks you need to build any designs without
                    any annoying opinionated styles you have to fight to
                    override.
                  </p>
                </div>

                <div className="px-4 my-4 w-full sm:w-auto">
                  <div>
                    <h2 className="inline-block text-2xl pb-4 mb-4 border-b-4 border-blue-600">
                      Company
                    </h2>
                  </div>
                  <ul className="leading-8">
                    <li>
                      <a href="#" className="hover:text-blue-400">
                        About Us
                      </a>
                    </li>
                    <li>
                      <a href="#" className="hover:text-blue-400">
                        Terms &amp; Conditions
                      </a>
                    </li>
                    <li>
                      <a href="#" className="hover:text-blue-400">
                        Privacy Policy
                      </a>
                    </li>
                    <li>
                      <a href="#" className="hover:text-blue-400">
                        Contact Us
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="px-4 my-4 w-full sm:w-auto">
                  <div>
                    <h2 className="inline-block text-2xl pb-4 mb-4 border-b-4 border-blue-600">
                      Blog
                    </h2>
                  </div>
                  <ul className="leading-8">
                    <li>
                      <a href="#" className="hover:text-blue-400">
                        Getting Started With HTML and CSS
                      </a>
                    </li>
                    <li>
                      <a href="#" className="hover:text-blue-400">
                        What Is Flex And When to Use It?
                      </a>
                    </li>
                    <li>
                      <a href="#" className="hover:text-blue-400">
                        How TailwindCSS Can Help Your Productivity?
                      </a>
                    </li>
                    <li>
                      <a href="#" className="hover:text-blue-400">
                        5 Tips to Make Responsive Website
                      </a>
                    </li>
                    <li>
                      <a href="#" className="hover:text-blue-400">
                        See More
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="px-4 my-4 w-full sm:w-auto xl:w-1/5">
                  <div>
                    <h2 className="inline-block text-2xl pb-4 mb-4 border-b-4 border-blue-600">
                      Connect With Us
                    </h2>
                  </div>
                  <a
                    href="#"
                    className="inline-flex items-center justify-center h-8 w-8 border border-gray-100 rounded-full mr-1 hover:text-blue-400 hover:border-blue-400"
                  >
                    <svg
                      className="w-4 h-4 fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 320 512"
                    >
                      <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path>
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="inline-flex items-center justify-center h-8 w-8 border border-gray-100 rounded-full mr-1 hover:text-blue-400 hover:border-blue-400"
                  >
                    <svg
                      className="w-4 h-4 fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path>
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="inline-flex items-center justify-center h-8 w-8 border border-gray-100 rounded-full mr-1 hover:text-blue-400 hover:border-blue-400"
                  >
                    <svg
                      className="w-4 h-4 fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                    >
                      <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path>
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="inline-flex items-center justify-center h-8 w-8 border border-gray-100 rounded-full mr-1 hover:text-blue-400 hover:border-blue-400"
                  >
                    <svg
                      className="w-4 h-4 fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 496 512"
                    >
                      <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path>
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="inline-flex items-center justify-center h-8 w-8 border border-gray-100 rounded-full hover:text-blue-400 hover:border-blue-400"
                  >
                    <svg
                      className="w-4 h-4 fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 576 512"
                    >
                      <path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-indigo-700 py-4 text-gray-100">
            <div className="container mx-auto px-4">
              <div className="-mx-4 flex flex-wrap justify-between">
                <div className="px-4 w-full text-center sm:w-auto sm:textLeft">
                  Copyright © 2025 CodeBase UI. All Rights Reserved.
                </div>
                <div className="px-4 w-full text-center sm:w-auto sm:textLeft">
                  Made with ❤️ by Tailwindow.
                </div>
              </div>
            </div>
          </div>
        </footer>
      </ComponentsView>

      <ComponentsView
        link="/components/tailwind/footers/footer-one"
        title="Multi-Section Footer"
      >
        <footer className="font-sans tracking-wide bg-gray-50 px-10 pt-12 pb-6">
          <div className="flex flex-wrap justify-between gap-10">
            <div className="max-w-md">
              <a href="javascript:void(0)">
                <img
                  src="https://readymadeui.com/readymadeui.svg"
                  alt="logo"
                  className="w-36"
                />
              </a>
              <div className="mt-6">
                <p className="text-gray-600 leading-relaxed text-sm">
                  ReadymadeUI is a library of pre-designed UI components built
                  for Tailwind CSS. It offers a collection of versatile,
                  ready-to-use components that streamline the development
                  process by providing a wide range of UI elements.
                </p>
              </div>
              <ul className="mt-10 flex space-x-5">
                <li>
                  <a href="javascript:void(0)">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="fill-blue-600 w-8 h-8"
                      viewBox="0 0 49.652 49.652"
                    >
                      <path
                        d="M24.826 0C11.137 0 0 11.137 0 24.826c0 13.688 11.137 24.826 24.826 24.826 13.688 0 24.826-11.138 24.826-24.826C49.652 11.137 38.516 0 24.826 0zM31 25.7h-4.039v14.396h-5.985V25.7h-2.845v-5.088h2.845v-3.291c0-2.357 1.12-6.04 6.04-6.04l4.435.017v4.939h-3.219c-.524 0-1.269.262-1.269 1.386v2.99h4.56z"
                        data-original="#000000"
                      />
                    </svg>
                  </a>
                </li>
                <li>
                  <a href="javascript:void(0)">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-8 h-8"
                      viewBox="0 0 112.196 112.196"
                    >
                      <circle
                        cx="56.098"
                        cy="56.097"
                        r="56.098"
                        fill="#007ab9"
                        data-original="#007ab9"
                      />
                      <path
                        fill="#fff"
                        d="M89.616 60.611v23.128H76.207V62.161c0-5.418-1.936-9.118-6.791-9.118-3.705 0-5.906 2.491-6.878 4.903-.353.862-.444 2.059-.444 3.268v22.524h-13.41s.18-36.546 0-40.329h13.411v5.715c-.027.045-.065.089-.089.132h.089v-.132c1.782-2.742 4.96-6.662 12.085-6.662 8.822 0 15.436 5.764 15.436 18.149zm-54.96-36.642c-4.587 0-7.588 3.011-7.588 6.967 0 3.872 2.914 6.97 7.412 6.97h.087c4.677 0 7.585-3.098 7.585-6.97-.089-3.956-2.908-6.967-7.496-6.967zm-6.791 59.77H41.27v-40.33H27.865v40.33z"
                        data-original="#f1f2f2"
                      />
                    </svg>
                  </a>
                </li>
                <li>
                  <a href="javascript:void(0)">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-8 h-8"
                      viewBox="0 0 152 152"
                    >
                      <linearGradient
                        id="a"
                        x1="22.26"
                        x2="129.74"
                        y1="22.26"
                        y2="129.74"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop offset="0" stopColor="#fae100" />
                        <stop offset=".15" stopColor="#fcb720" />
                        <stop offset=".3" stopColor="#ff7950" />
                        <stop offset=".5" stopColor="#ff1c74" />
                        <stop offset="1" stopColor="#6c1cd1" />
                      </linearGradient>
                      <g data-name="Layer 2">
                        <g data-name="03.Instagram">
                          <rect
                            width="152"
                            height="152"
                            fill="url(#a)"
                            data-original="url(#a)"
                            rx="76"
                          />
                          <g fill="#fff">
                            <path
                              fill="#ffffff10"
                              d="M133.2 26c-11.08 20.34-26.75 41.32-46.33 60.9S46.31 122.12 26 133.2q-1.91-1.66-3.71-3.46A76 76 0 1 1 129.74 22.26q1.8 1.8 3.46 3.74z"
                              data-original="#ffffff10"
                            />
                            <path
                              d="M94 36H58a22 22 0 0 0-22 22v36a22 22 0 0 0 22 22h36a22 22 0 0 0 22-22V58a22 22 0 0 0-22-22zm15 54.84A18.16 18.16 0 0 1 90.84 109H61.16A18.16 18.16 0 0 1 43 90.84V61.16A18.16 18.16 0 0 1 61.16 43h29.68A18.16 18.16 0 0 1 109 61.16z"
                              data-original="#ffffff"
                            />
                            <path
                              d="m90.59 61.56-.19-.19-.16-.16A20.16 20.16 0 0 0 76 55.33 20.52 20.52 0 0 0 55.62 76a20.75 20.75 0 0 0 6 14.61 20.19 20.19 0 0 0 14.42 6 20.73 20.73 0 0 0 14.55-35.05zM76 89.56A13.56 13.56 0 1 1 89.37 76 13.46 13.46 0 0 1 76 89.56zm26.43-35.18a4.88 4.88 0 0 1-4.85 4.92 4.81 4.81 0 0 1-3.42-1.43 4.93 4.93 0 0 1 3.43-8.39 4.82 4.82 0 0 1 3.09 1.12l.1.1a3.05 3.05 0 0 1 .44.44l.11.12a4.92 4.92 0 0 1 1.1 3.12z"
                              data-original="#ffffff"
                            />
                          </g>
                        </g>
                      </g>
                    </svg>
                  </a>
                </li>
                <li>
                  <a href="javascript:void(0)">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-8 h-8"
                      viewBox="0 0 1227 1227"
                    >
                      <path
                        d="M613.5 0C274.685 0 0 274.685 0 613.5S274.685 1227 613.5 1227 1227 952.315 1227 613.5 952.315 0 613.5 0z"
                        data-original="#000000"
                      />
                      <path
                        fill="#fff"
                        d="m680.617 557.98 262.632-305.288h-62.235L652.97 517.77 470.833 252.692H260.759l275.427 400.844-275.427 320.142h62.239l240.82-279.931 192.35 279.931h210.074L680.601 557.98zM345.423 299.545h95.595l440.024 629.411h-95.595z"
                        data-original="#ffffff"
                      />
                    </svg>
                  </a>
                </li>
              </ul>
            </div>

            <div className="maxLg:min-w-[140px]">
              <h4 className="text-gray-800 font-semibold text-base relative max-sm:cursor-pointer">
                Services
              </h4>

              <ul className="mt-6 space-y-4">
                <li>
                  <a
                    href="javascript:void(0)"
                    className="hover:text-gray-800 text-gray-600 text-sm"
                  >
                    Web Development
                  </a>
                </li>
                <li>
                  <a
                    href="javascript:void(0)"
                    className="hover:text-gray-800 text-gray-600 text-sm"
                  >
                    Pricing
                  </a>
                </li>
                <li>
                  <a
                    href="javascript:void(0)"
                    className="hover:text-gray-800 text-gray-600 text-sm"
                  >
                    Support
                  </a>
                </li>
                <li>
                  <a
                    href="javascript:void(0)"
                    className="hover:text-gray-800 text-gray-600 text-sm"
                  >
                    Client Portal
                  </a>
                </li>
                <li>
                  <a
                    href="javascript:void(0)"
                    className="hover:text-gray-800 text-gray-600 text-sm"
                  >
                    Resources
                  </a>
                </li>
              </ul>
            </div>

            <div className="maxLg:min-w-[140px]">
              <h4 className="text-gray-800 font-semibold text-base relative max-sm:cursor-pointer">
                Platforms
              </h4>
              <ul className="space-y-4 mt-6">
                <li>
                  <a
                    href="javascript:void(0)"
                    className="hover:text-gray-800 text-gray-600 text-sm"
                  >
                    Hubspot
                  </a>
                </li>
                <li>
                  <a
                    href="javascript:void(0)"
                    className="hover:text-gray-800 text-gray-600 text-sm"
                  >
                    Integration Services
                  </a>
                </li>
                <li>
                  <a
                    href="javascript:void(0)"
                    className="hover:text-gray-800 text-gray-600 text-sm"
                  >
                    Marketing Glossar
                  </a>
                </li>
                <li>
                  <a
                    href="javascript:void(0)"
                    className="hover:text-gray-800 text-gray-600 text-sm"
                  >
                    UIPath
                  </a>
                </li>
              </ul>
            </div>

            <div className="maxLg:min-w-[140px]">
              <h4 className="text-gray-800 font-semibold text-base relative max-sm:cursor-pointer">
                Company
              </h4>

              <ul className="space-y-4 mt-6">
                <li>
                  <a
                    href="javascript:void(0)"
                    className="hover:text-gray-800 text-gray-600 text-sm"
                  >
                    About us
                  </a>
                </li>
                <li>
                  <a
                    href="javascript:void(0)"
                    className="hover:text-gray-800 text-gray-600 text-sm"
                  >
                    Careers
                  </a>
                </li>
                <li>
                  <a
                    href="javascript:void(0)"
                    className="hover:text-gray-800 text-gray-600 text-sm"
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    href="javascript:void(0)"
                    className="hover:text-gray-800 text-gray-600 text-sm"
                  >
                    Portfolio
                  </a>
                </li>
                <li>
                  <a
                    href="javascript:void(0)"
                    className="hover:text-gray-800 text-gray-600 text-sm"
                  >
                    Events
                  </a>
                </li>
              </ul>
            </div>

            <div className="maxLg:min-w-[140px]">
              <h4 className="text-gray-800 font-semibold text-base relative max-sm:cursor-pointer">
                Additional
              </h4>

              <ul className="space-y-4 mt-6">
                <li>
                  <a
                    href="javascript:void(0)"
                    className="hover:text-gray-800 text-gray-600 text-sm"
                  >
                    FAQ
                  </a>
                </li>
                <li>
                  <a
                    href="javascript:void(0)"
                    className="hover:text-gray-800 text-gray-600 text-sm"
                  >
                    Partners
                  </a>
                </li>
                <li>
                  <a
                    href="javascript:void(0)"
                    className="hover:text-gray-800 text-gray-600 text-sm"
                  >
                    Sitemap
                  </a>
                </li>
                <li>
                  <a
                    href="javascript:void(0)"
                    className="hover:text-gray-800 text-gray-600 text-sm"
                  >
                    Contact
                  </a>
                </li>
                <li>
                  <a
                    href="javascript:void(0)"
                    className="hover:text-gray-800 text-gray-600 text-sm"
                  >
                    News
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <hr className="mt-10 mb-6 border-gray-300" />

          <div className="flex flex-wrap max-md:flex-col gap-4">
            <ul className="md:flex md:space-x-6 max-md:space-y-2">
              <li>
                <a
                  href="javascript:void(0)"
                  className="hover:text-gray-800 text-gray-600 text-sm"
                >
                  Terms of Service
                </a>
              </li>
              <li>
                <a
                  href="javascript:void(0)"
                  className="hover:text-gray-800 text-gray-600 text-sm"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="javascript:void(0)"
                  className="hover:text-gray-800 text-gray-600 text-sm"
                >
                  Security
                </a>
              </li>
            </ul>

            <p className="text-gray-600 text-sm md:ml-auto">
              © ReadymadeUI. All rights reserved.
            </p>
          </div>
        </footer>
      </ComponentsView>

      <ComponentsView
        link="/components/tailwind/footers/footer-one"
        title="Footer for blog"
      >
        <footer className="px-3 pt-4 lg:px-9 border-t-2 bg-gray-50">
          <div className="grid gap-10 row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-4">
            <div className="sm:col-span-2">
              <a href="#" className="inline-flex items-center">
                <img
                  src="https://mcqmate.com/public/images/logos/60x60.png"
                  alt="logo"
                  className="h-8 w-8"
                />
                <span className="ml-2 text-xl font-bold tracking-wide text-gray-800">
                  Company Name
                </span>
              </a>
              <div className="mt-6 lg:max-w-xl">
                <p className="text-sm text-gray-800">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                  felis mi, faucibus dignissim lorem id, imperdiet interdum
                  mauris. Vestibulum ultrices sed libero non porta. Vivamus
                  malesuada urna eu nibh malesuada, non finibus massa laoreet.
                  Nunc nisi velit, feugiat a semper quis, pulvinar id libero.
                  Vivamus mi diam, consectetur non orci ut, tincidunt pretium
                  justo. In vehicula porta molestie. Suspendisse potenti.
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-2 text-sm">
              <p className="text-base font-bold tracking-wide text-gray-900">
                Popular Courses
              </p>
              <a href="#">UPSC - Union Public Service Commission</a>
              <a href="#">General Knowledge</a>
              <a href="#">MBA</a>
              <p className="text-base font-bold tracking-wide text-gray-900">
                Popular Topics
              </p>
              <a href="#">Human Resource Management</a>
              <a href="#">Operations Management</a>
              <a href="#">Marketing Management</a>
            </div>

            <div>
              <p className="text-base font-bold tracking-wide text-gray-900">
                COMPANY IS ALSO AVAILABLE ON
              </p>
              <div className="flex items-center gap-1 px-2">
                <a href="#" className="w-full min-w-xl">
                  <img
                    src="https://mcqmate.com/public/images/icons/playstore.svg"
                    alt="Playstore Button"
                    className="h-10"
                  />
                </a>
                <a
                  className="w-full min-w-xl"
                  href="https://www.youtube.com/channel/UCo8tEi6SrGFP8XG9O0ljFgA"
                >
                  <img
                    src="https://mcqmate.com/public/images/icons/youtube.svg"
                    alt="Youtube Button"
                    className="h-28"
                  />
                </a>
              </div>
              <p className="text-base font-bold tracking-wide text-gray-900">
                Contacts
              </p>
              <div className="flex">
                <p className="mr-1 text-gray-800">Email:</p>
                <a href="#" title="send email">
                  admin@company.com
                </a>
              </div>
            </div>
          </div>

          <div className="flex flex-col-reverse justify-between pt-5 pb-10 border-t lg:flex-row">
            <p className="text-sm text-gray-600">
              © Copyright 2023 Company. All rights reserved.
            </p>
            <ul className="flex flex-col mb-3 space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row">
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                >
                  Privacy &amp; Cookies Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                >
                  Disclaimer
                </a>
              </li>
            </ul>
          </div>
        </footer>
      </ComponentsView>

      <ComponentsView
        link="/components/tailwind/footers/footer-one"
        title="Footer With Arrow Icons"
      >
        <footer className="bg-[#0b0e37] font-sans pt-12 pb-8 px-12 tracking-wide relative overflow-hidden">
          <div className="max-w-screen-xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 lg:gap-12 gap-8 z-20 relative">
              <div>
                <h2 className="textLg text-gray-300 mb-6">Company</h2>
                <ul className="space-y-5">
                  <li>
                    <a
                      href="javascript:void(0)"
                      className="text-gray-400 hover:text-white text-base inline-flex items-center transition-all"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="inline mr-1.5 h-4 w-4 shrink-0"
                      >
                        <path d="M9 18l6-6-6-6" />
                      </svg>
                      About
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:void(0)"
                      className="text-gray-400 hover:text-white text-base inline-flex items-center transition-all"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="inline mr-1.5 h-4 w-4 shrink-0"
                      >
                        <path d="M9 18l6-6-6-6" />
                      </svg>
                      Services
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:void(0)"
                      className="text-gray-400 hover:text-white text-base inline-flex items-center transition-all"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="inline mr-1.5 h-4 w-4 shrink-0"
                      >
                        <path d="M9 18l6-6-6-6" />
                      </svg>
                      Contact
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="textLg text-gray-300 mb-6">Products</h2>
                <ul className="space-y-5">
                  <li>
                    <a
                      href="javascript:void(0)"
                      className="text-gray-400 hover:text-white text-base inline-flex items-center transition-all"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="inline mr-1.5 h-4 w-4 shrink-0"
                      >
                        <path d="M9 18l6-6-6-6" />
                      </svg>
                      Featured
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:void(0)"
                      className="text-gray-400 hover:text-white text-base inline-flex items-center transition-all"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="inline mr-1.5 h-4 w-4 shrink-0"
                      >
                        <path d="M9 18l6-6-6-6" />
                      </svg>
                      New Arrivals
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:void(0)"
                      className="text-gray-400 hover:text-white text-base inline-flex items-center transition-all"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="inline mr-1.5 h-4 w-4 shrink-0"
                      >
                        <path d="M9 18l6-6-6-6" />
                      </svg>
                      Sale
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="textLg text-gray-300 mb-6">Resources</h2>
                <ul className="space-y-5">
                  <li>
                    <a
                      href="javascript:void(0)"
                      className="text-gray-400 hover:text-white text-base inline-flex items-center transition-all"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="inline mr-1.5 h-4 w-4 shrink-0"
                      >
                        <path d="M9 18l6-6-6-6" />
                      </svg>
                      Documentation
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:void(0)"
                      className="text-gray-400 hover:text-white text-base inline-flex items-center transition-all"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="inline mr-1.5 h-4 w-4 shrink-0"
                      >
                        <path d="M9 18l6-6-6-6" />
                      </svg>
                      FAQ
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:void(0)"
                      className="text-gray-400 hover:text-white text-base inline-flex items-center transition-all"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="inline mr-1.5 h-4 w-4 shrink-0"
                      >
                        <path d="M9 18l6-6-6-6" />
                      </svg>
                      Support
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="textLg text-gray-300 mb-6">Connect</h2>
                <ul className="space-y-5">
                  <li>
                    <a
                      href="javascript:void(0)"
                      className="text-gray-400 hover:text-white text-base inline-flex items-center transition-all"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="inline mr-1.5 h-4 w-4 shrink-0"
                      >
                        <path d="M9 18l6-6-6-6" />
                      </svg>
                      Facebook
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:void(0)"
                      className="text-gray-400 hover:text-white text-base inline-flex items-center transition-all"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="inline mr-1.5 h-4 w-4 shrink-0"
                      >
                        <path d="M9 18l6-6-6-6" />
                      </svg>
                      Twitter
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:void(0)"
                      className="text-gray-400 hover:text-white text-base inline-flex items-center transition-all"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="inline mr-1.5 h-4 w-4 shrink-0"
                      >
                        <path d="M9 18l6-6-6-6" />
                      </svg>
                      Instagram
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <hr className="border-gray-600 my-8" />

            <div className="flex flex-wrap sm:justify-between gap-6 relative z-20">
              <div className="flex space-x-5">
                <a
                  href="javascript:void(0)"
                  className="text-gray-400 hover:text-white text-base inline-transition-all"
                >
                  <svg
                    className="w-5 h-5 fill-gray-400 hover:fill-white"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63
                  .772-1.63 1.558V12h2.77l-.443 2.89h-2.327V22C18.343 21.128 22 16.991 22 12"
                    ></path>
                  </svg>
                </a>
                <a
                  href="javascript:void(0)"
                  className="text-gray-400 hover:text-white text-base inline-transition-all"
                >
                  <svg
                    className="w-5 h-5 fill-gray-400 hover:fill-white"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      d="M12 2C6.486 2 2 6.486 2 12c0 5.513 4.486 10 10 10s10-4.487 10-10c0-5.514-4.486-10-10-10zm0 1.542c4.951 0 8.458 3.392 8.458 8.458 0 4.949-3.391 8.458-8.458 8.458-4.948 0-8.458-3.391-8.458-8.458
                      0-4.949 3.392-8.458 8.458-8.458zM9.743 16.747V7.128l6.027 4.31-6.027 4.309z"
                    ></path>
                  </svg>
                </a>
                <a
                  href="javascript:void(0)"
                  className="text-gray-400 hover:text-white text-base inline-transition-all"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    className="fill-gray-400 hover:fill-white w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fillRule="evenodd"
                      d="M21 5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5zm-2.5 8.2v5.3h-2.79v-4.93a1.4 1.4 0 0 0-1.4-1.4c-.77 0-1.39.63-1.39 1.4v4.93h-2.79v-8.37h2.79v1.11c.48-.78 1.47-1.3 2.32-1.3 1.8 0 3.26 1.46 3.26 3.26zM6.88 8.56a1.686 1.686 0 0 0 0-3.37 1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68zm1.39 1.57v8.37H5.5v-8.37h2.77z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </a>
              </div>

              <p className="text-gray-400 text-sm">
                © ReadymadeUI. All rights reserved.
              </p>
            </div>
          </div>
          <img
            src="https://readymadeui.com/bg-image.webp"
            className="absolute w-full inset-0 object-cover opacity-5 -z-0"
          />
        </footer>
      </ComponentsView>

      {/* <ComponentsView link='/components/tailwind/footers/footer-one' title='Footer With Arrow Icons'>
                <div className="bg-gray-100">
                    <div className="max-w-screen-xl py-10 px-4 sm:px-6 text-gray-800 sm:flex justify-between mx-auto">
                        <div className="p-5 sm:w-4/12">
                            <h3 className="font-bold text-xl text-indigo-600 mb-4">Company name</h3>
                            <p className="text-gray-500 text-sm mb-5">Lorem Ipsum is simply dummy text of the printing and typesetting
                                industry.</p>
                            <div className="flex-row flex">
                                <a href="/#" className="w-6 mx-1">
                                    <svg className="fill-current cursor-pointer text-gray-500 hover:text-indigo-600" width="100%"
                                        height="100%" viewBox="0 0 24 24" version="1.1"
                                        
                                        style="fillRule: evenodd; clipRule: evenodd; strokeLinejoin: round; stroke-miterlimit: 2;">
                                        <path id="Twitter" d="M24,12c0,6.627 -5.373,12 -12,12c-6.627,0 -12,-5.373 -12,-12c0,-6.627
                  5.373,-12 12,-12c6.627,0 12,5.373 12,12Zm-6.465,-3.192c-0.379,0.168
                  -0.786,0.281 -1.213,0.333c0.436,-0.262 0.771,-0.676
                  0.929,-1.169c-0.408,0.242 -0.86,0.418 -1.341,0.513c-0.385,-0.411
                  -0.934,-0.667 -1.541,-0.667c-1.167,0 -2.112,0.945 -2.112,2.111c0,0.166
                  0.018,0.327 0.054,0.482c-1.754,-0.088 -3.31,-0.929
                  -4.352,-2.206c-0.181,0.311 -0.286,0.674 -0.286,1.061c0,0.733 0.373,1.379
                  0.94,1.757c-0.346,-0.01 -0.672,-0.106 -0.956,-0.264c-0.001,0.009
                  -0.001,0.018 -0.001,0.027c0,1.023 0.728,1.877 1.694,2.07c-0.177,0.049
                  -0.364,0.075 -0.556,0.075c-0.137,0 -0.269,-0.014 -0.397,-0.038c0.268,0.838
                  1.048,1.449 1.972,1.466c-0.723,0.566 -1.633,0.904 -2.622,0.904c-0.171,0
                  -0.339,-0.01 -0.504,-0.03c0.934,0.599 2.044,0.949 3.237,0.949c3.883,0
                  6.007,-3.217 6.007,-6.008c0,-0.091 -0.002,-0.183 -0.006,-0.273c0.413,-0.298
                  0.771,-0.67 1.054,-1.093Z"></path>
                                    </svg>
                                </a>
                                <a href="/#" className="w-6 mx-1">
                                    <svg className="fill-current cursor-pointer text-gray-500 hover:text-indigo-600" width="100%"
                                        height="100%" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg"
                                        
                                        style="fillRule: evenodd; clipRule: evenodd; strokeLinejoin: round; stroke-miterlimit: 2;">
                                        <path id="Facebook" d="M24,12c0,6.627 -5.373,12 -12,12c-6.627,0 -12,-5.373 -12,-12c0,-6.627
                  5.373,-12 12,-12c6.627,0 12,5.373
                  12,12Zm-11.278,0l1.294,0l0.172,-1.617l-1.466,0l0.002,-0.808c0,-0.422
                  0.04,-0.648 0.646,-0.648l0.809,0l0,-1.616l-1.295,0c-1.555,0 -2.103,0.784
                  -2.103,2.102l0,0.97l-0.969,0l0,1.617l0.969,0l0,4.689l1.941,0l0,-4.689Z"></path>
                                    </svg>
                                </a>
                                <a href="/#" className="w-6 mx-1">
                                    <svg className="fill-current cursor-pointer text-gray-500 hover:text-indigo-600" width="100%"
                                        height="100%" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg"
                                        
                                        style="fillRule: evenodd; clipRule: evenodd; strokeLinejoin: round; stroke-miterlimit: 2;">
                                        <g id="Layer_1">
                                            <circle id="Oval" cx="12" cy="12" r="12"></circle>
                                            <path id="Shape" d="M19.05,8.362c0,-0.062 0,-0.125 -0.063,-0.187l0,-0.063c-0.187,-0.562
                     -0.687,-0.937 -1.312,-0.937l0.125,0c0,0 -2.438,-0.375 -5.75,-0.375c-3.25,0
                     -5.75,0.375 -5.75,0.375l0.125,0c-0.625,0 -1.125,0.375
                     -1.313,0.937l0,0.063c0,0.062 0,0.125 -0.062,0.187c-0.063,0.625 -0.25,1.938
                     -0.25,3.438c0,1.5 0.187,2.812 0.25,3.437c0,0.063 0,0.125
                     0.062,0.188l0,0.062c0.188,0.563 0.688,0.938 1.313,0.938l-0.125,0c0,0
                     2.437,0.375 5.75,0.375c3.25,0 5.75,-0.375 5.75,-0.375l-0.125,0c0.625,0
                     1.125,-0.375 1.312,-0.938l0,-0.062c0,-0.063 0,-0.125
                     0.063,-0.188c0.062,-0.625 0.25,-1.937 0.25,-3.437c0,-1.5 -0.125,-2.813
                     -0.25,-3.438Zm-4.634,3.927l-3.201,2.315c-0.068,0.068 -0.137,0.068
                     -0.205,0.068c-0.068,0 -0.136,0 -0.204,-0.068c-0.136,-0.068 -0.204,-0.204
                     -0.204,-0.34l0,-4.631c0,-0.136 0.068,-0.273 0.204,-0.341c0.136,-0.068
                     0.272,-0.068 0.409,0l3.201,2.316c0.068,0.068 0.136,0.204
                     0.136,0.34c0.068,0.136 0,0.273 -0.136,0.341Z" style="fill: rgb(255, 255, 255);"></path>
                                        </g>
                                    </svg>
                                </a>
                                <a href="/#" className="w-6 mx-1">
                                    <svg className="fill-current cursor-pointer text-gray-500 hover:text-indigo-600" width="100%"
                                        height="100%" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg"
                                       
                                        style="fillRule: evenodd; clipRule: evenodd; strokeLinejoin: round; stroke-miterlimit: 2;">
                                        <path id="Shape" d="M7.3,0.9c1.5,-0.6 3.1,-0.9 4.7,-0.9c1.6,0 3.2,0.3 4.7,0.9c1.5,0.6 2.8,1.5
                  3.8,2.6c1,1.1 1.9,2.3 2.6,3.8c0.7,1.5 0.9,3 0.9,4.7c0,1.7 -0.3,3.2
                  -0.9,4.7c-0.6,1.5 -1.5,2.8 -2.6,3.8c-1.1,1 -2.3,1.9 -3.8,2.6c-1.5,0.7
                  -3.1,0.9 -4.7,0.9c-1.6,0 -3.2,-0.3 -4.7,-0.9c-1.5,-0.6 -2.8,-1.5
                  -3.8,-2.6c-1,-1.1 -1.9,-2.3 -2.6,-3.8c-0.7,-1.5 -0.9,-3.1 -0.9,-4.7c0,-1.6
                  0.3,-3.2 0.9,-4.7c0.6,-1.5 1.5,-2.8 2.6,-3.8c1.1,-1 2.3,-1.9
                  3.8,-2.6Zm-0.3,7.1c0.6,0 1.1,-0.2 1.5,-0.5c0.4,-0.3 0.5,-0.8 0.5,-1.3c0,-0.5
                  -0.2,-0.9 -0.6,-1.2c-0.4,-0.3 -0.8,-0.5 -1.4,-0.5c-0.6,0 -1.1,0.2
                  -1.4,0.5c-0.3,0.3 -0.6,0.7 -0.6,1.2c0,0.5 0.2,0.9 0.5,1.3c0.3,0.4 0.9,0.5
                  1.5,0.5Zm1.5,10l0,-8.5l-3,0l0,8.5l3,0Zm11,0l0,-4.5c0,-1.4 -0.3,-2.5
                  -0.9,-3.3c-0.6,-0.8 -1.5,-1.2 -2.6,-1.2c-0.6,0 -1.1,0.2 -1.5,0.5c-0.4,0.3
                  -0.8,0.8 -0.9,1.3l-0.1,-1.3l-3,0l0.1,2l0,6.5l3,0l0,-4.5c0,-0.6 0.1,-1.1
                  0.4,-1.5c0.3,-0.4 0.6,-0.5 1.1,-0.5c0.5,0 0.9,0.2 1.1,0.5c0.2,0.3 0.4,0.8
                  0.4,1.5l0,4.5l2.9,0Z"></path>
                                    </svg>
                                </a>
                                <a href="/#" className="w-6 mx-1">
                                    <svg className="fill-current cursor-pointer text-gray-500 hover:text-indigo-600" width="100%"
                                        height="100%" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg"
                                        
                                        style="fillRule: evenodd; clipRule: evenodd; strokeLinejoin: round; stroke-miterlimit: 2;">
                                        <path id="Combined-Shape" d="M12,24c6.627,0 12,-5.373 12,-12c0,-6.627 -5.373,-12 -12,-12c-6.627,0
                  -12,5.373 -12,12c0,6.627 5.373,12 12,12Zm6.591,-15.556l-0.722,0c-0.189,0
                  -0.681,0.208 -0.681,0.385l0,6.422c0,0.178 0.492,0.323
                  0.681,0.323l0.722,0l0,1.426l-4.675,0l0,-1.426l0.935,0l0,-6.655l-0.163,0l-2.251,8.081l-1.742,0l-2.222,-8.081l-0.168,0l0,6.655l0.935,0l0,1.426l-3.74,0l0,-1.426l0.519,0c0.203,0
                  0.416,-0.145 0.416,-0.323l0,-6.422c0,-0.177 -0.213,-0.385
                  -0.416,-0.385l-0.519,0l0,-1.426l4.847,0l1.583,5.704l0.042,0l1.598,-5.704l5.021,0l0,1.426Z"></path>
                                    </svg>
                                </a>
                            </div>
                        </div>
                        <div className="p-5 sm:w-5/12 flex flex-col">
                            <div className="text-sm uppercase text-indigo-600 font-bold mb-5">Recent Blogs</div>
                            <div className="flex mb-3">
                                <div className="h-20 w-3/12 bg-cover"
                                    style="background-image: url('https://tailwindcss.com/img/cardLeft.jpg')"
                                    title="Woman holding a mug">
                                </div>
                                <div className="pl-3 w-9/12">
                                    <div className="font-bold text-sm">The Coldest Sunset</div>
                                    <p className="text-gray-700 text-sm">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                    </p>
                                </div>
                            </div>
                            <div className="flex mb-3">
                                <div className="h-20 w-3/12 bg-cover"
                                    style="background-image: url('https://tailwindcss.com/img/cardLeft.jpg')"
                                    title="Woman holding a mug">
                                </div>
                                <div className="pl-3 w-9/12">
                                    <div className="font-bold text-sm">The Coldest Sunset</div>
                                    <p className="text-gray-700 text-sm">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="p-5 sm:w-3/12">
                            <div className="text-sm uppercase text-indigo-600 font-bold mb-5">Instagram</div>
                            <ul className="grid grid-cols-2 gap-5">
                                <li>
                                    <img src="https://images.pexels.com/photos/174938/pexels-photo-174938.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=1&amp;w=500" className="w-100" />
                                </li>
                                <li>
                                    <img src="https://images.pexels.com/photos/174938/pexels-photo-174938.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=1&amp;w=500" className="w-100" />
                                </li>
                                <li>
                                    <img src="https://images.pexels.com/photos/174938/pexels-photo-174938.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=1&amp;w=500" className="w-100" />
                                </li>
                                <li>
                                    <img src="https://images.pexels.com/photos/174938/pexels-photo-174938.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=1&amp;w=500" className="w-100" />
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="flex py-5 m-auto text-gray-800 text-sm flex-col items-center border-t max-w-screen-xl">
                        <p>© Copyright 2023. All Rights Reserved.</p>
                    </div>
                </div>
            </ComponentsView> */}
    </div>
  );
}

export default page;
