'use client';
import { ComponentsView } from '@/components/CodeViewBoxTwo/Index';

function page() {
  return (
    <div>
      <ComponentsView title="Responsive Header with Logo, Navigation, Actions, and Mobile Menu">
        <iframe
          srcDoc={`<html>
  <head>
    <script src='https://cdn.tailwindcss.com'></script>
    <style>
      ::-webkit-scrollbar {
        width: 10px;
        height: 10px;
      }
      ::-webkit-scrollbar-track {
        background-color: #f1f1f1;
      }
      ::-webkit-scrollbar-thumb {
        background-color: #ccc;
        border-radius: 5px;
      }
      ::-webkit-scrollbar-thumb:hover {
        background-color: #aaa;
      }
    </style>
  </head>
  <body class='bg-gray-50 px-4'>

   <header class='flex shadow-lg py-4 px-4 sm:px-10 bg-white font-[sans-serif] min-h-[70px] tracking-wide relative z-50'>
                    <div class='flex flex-wrap items-center justify-between gap-4 w-full'>
                        <a href="javascript:void(0)"
                            class="lg:absolute max-lg:left-10 lg:top-2/4 lg:left-2/4 lg:-translate-x-1/2 lg:-translate-y-1/2 max-sm:hidden"><img
                                src="/nav-logo.png" alt="logo" class='w-36' />
                        </a>
                        <a href="javascript:void(0)"
                            class="hidden max-sm:block"><img
                                src="https://Codebase UI.com/Codebase UI-short.svg" alt="logo" class='w-9' />
                        </a>

                        <div id="collapseMenu"
                            class='max-lg:hidden lg:!block max-lg:w-full max-lg:fixed max-lg:before:fixed max-lg:before:bg-black max-lg:before:opacity-50 max-lg:before:inset-0 max-lg:before:z-50'>
                            <button id="toggleClose" class='lg:hidden fixed top-2 right-4 z-[100] rounded-full bg-white w-9 h-9 flex items-center justify-center border'>
                                <svg xmlns="http://www.w3.org/2000/svg" class="w-3.5 h-3.5 fill-black" viewBox="0 0 320.591 320.591">
                                    <path
                                        d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z"
                                        data-original="#000000"></path>
                                    <path
                                        d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z"
                                        data-original="#000000"></path>
                                </svg>
                            </button>

                            <ul
                                class='lg:flex lg:gap-x-5 max-lg:space-y-3 max-lg:fixed max-lg:bg-white max-lg:w-1/2 max-lg:min-w-[300px] max-lg:top-0 max-lg:left-0 max-lg:p-6 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto z-50'>
                                <li class='mb-6 hidden max-lg:block'>
                                    <a href="javascript:void(0)"><img src="https://Codebase UI.com/Codebase UI.svg" alt="logo" class='w-36' />
                                    </a>
                                </li>
                                <li class='max-lg:border-b max-lg:py-3 px-3'>
                                    <a href='javascript:void(0)'
                                        class='hover:text-[#84c6d9] text-[#39CBF5] block font-semibold text-[15px]'>Home</a>
                                </li>
                                <li class='max-lg:border-b max-lg:py-3 px-3'><a href='javascript:void(0)'
                                    class='hover:text-[#39CBF5] text-[#333] block font-semibold text-[15px]'>About</a>
                                </li>
                                <li class='max-lg:border-b max-lg:py-3 px-3'><a href='javascript:void(0)'
                                    class='hover:text-[#39CBF5] text-[#333] block font-semibold text-[15px]'>Learn</a>
                                </li>
                                <li class='max-lg:border-b max-lg:py-3 px-3'><a href='javascript:void(0)'
                                    class='hover:text-[#39CBF5] text-[#333] block font-semibold text-[15px]'>Blog</a>
                                </li>
                            </ul>
                        </div>

                        <div class='flex items-center ml-auto space-x-6'>
                            <button class='font-semibold text-[15px] border-none outline-none'><a href='javascript:void(0)'
                                class='text-[#39CBF5] hover:underline'>Login</a></button>
                            <button
                                class='px-4 py-2 text-sm rounded-sm font-bold text-white border-2 border-[#39CBF5] bg-[#39CBF5] transition-all ease-in-out duration-300 hover:bg-transparent hover:text-[#39CBF5]'>Sign
                                up</button>

                            <button id="toggleOpen" class='lg:hidden'>
                                <svg class="w-7 h-7" fill="#333" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd"
                                        d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                        clip-rule="evenodd"></path>
                                </svg>
                            </button>
                        </div>
                    </div>
                </header>



  </body>
</html>`}
          width="100%"
          height="400"
          style={{ border: 'none' }}
        ></iframe>
      </ComponentsView>

      <ComponentsView title="Header with Address, Navigation, and Mobile Menu">
        <header class="shadow-md font-sans tracking-wide relative z-50">
          <section class="py-2 bg-[#39CBF5] text-white text-right px-10">
            <p class="text-sm">
              <strong class="mx-3">Address:</strong>SWF New York 185669
              <strong class="mx-3">Contact No:</strong>1800333665
            </p>
          </section>

          <div class="flex flex-wrap items-center justify-between gap-4 px-10 py-4 bg-white min-h-[70px]">
            <a href="javascript:void(0)">
              <img
                src="https://Codebase UI.com/Codebase UI.svg"
                alt="logo"
                class="w-36"
              />
            </a>

            <div
              id="collapseMenu"
              class="max-lg:hidden lg:!block max-lg:before:fixed max-lg:before:bg-black max-lg:before:opacity-50 max-lg:before:inset-0 max-lg:before:z-50"
            >
              <button
                id="toggleClose"
                class="lg:hidden fixed top-2 right-4 z-[100] rounded-full bg-white w-9 h-9 flex items-center justify-center border"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-3.5 h-3.5 fill-black"
                  viewBox="0 0 320.591 320.591"
                >
                  <path
                    d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z"
                    data-original="#000000"
                  ></path>
                  <path
                    d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z"
                    data-original="#000000"
                  ></path>
                </svg>
              </button>

              <ul class="lg:flex lg:gap-x-5 max-lg:space-y-3 max-lg:fixed max-lg:bg-white max-lg:w-1/2 max-lg:min-w-[300px] max-lg:top-0 max-lg:left-0 max-lg:p-6 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto z-50">
                <li class="mb-6 hidden max-lg:block">
                  <a href="javascript:void(0)">
                    <img
                      src="https://Codebase UI.com/Codebase UI.svg"
                      alt="logo"
                      class="w-36"
                    />
                  </a>
                </li>
                <li class="max-lg:border-b max-lg:py-3 px-3">
                  <a
                    href="javascript:void(0)"
                    class="hover:text-[#39CBF5] text-[#39CBF5] block font-bold text-[15px]"
                  >
                    Home
                  </a>
                </li>
                <li class="max-lg:border-b max-lg:py-3 px-3">
                  <a
                    href="javascript:void(0)"
                    class="hover:text-[#39CBF5] text-[#333] block font-bold text-[15px]"
                  >
                    Team
                  </a>
                </li>
                <li class="max-lg:border-b max-lg:py-3 px-3">
                  <a
                    href="javascript:void(0)"
                    class="hover:text-[#39CBF5] text-[#333] block font-bold text-[15px]"
                  >
                    Feature
                  </a>
                </li>
                <li class="max-lg:border-b max-lg:py-3 px-3">
                  <a
                    href="javascript:void(0)"
                    class="hover:text-[#39CBF5] text-[#333] block font-bold text-[15px]"
                  >
                    Blog
                  </a>
                </li>
                <li class="max-lg:border-b max-lg:py-3 px-3">
                  <a
                    href="javascript:void(0)"
                    class="hover:text-[#39CBF5] text-[#333] block font-bold text-[15px]"
                  >
                    About
                  </a>
                </li>
                <li class="max-lg:border-b max-lg:py-3 px-3">
                  <a
                    href="javascript:void(0)"
                    class="hover:text-[#39CBF5] text-[#333] block font-bold text-[15px]"
                  >
                    Contact
                  </a>
                </li>
                <li class="max-lg:border-b max-lg:py-3 px-3">
                  <a
                    href="javascript:void(0)"
                    class="hover:text-[#39CBF5] text-[#333] block font-bold text-[15px]"
                  >
                    Source
                  </a>
                </li>
              </ul>
            </div>

            <div class="flex max-lg:ml-auto">
              <button id="toggleOpen" class="lg:hidden">
                <svg
                  class="w-7 h-7"
                  fill="#000"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </header>
      </ComponentsView>

      <ComponentsView title="Header with Logo, Icons, and Navigation Menu">
        <header class="shadow-md bg-white font-sans tracking-wide relative z-50">
          <section class="flex items-center lg:justify-center flex-wrap gap-5 relative py-3 sm:px-10 px-4 border-gray-200 border-b lg:min-h-[80px] max-lg:min-h-[60px]">
            <a href="javascript:void(0)">
              <img
                src="https://Codebase UI.com/Codebase UI.svg"
                alt="logo"
                class="md:w-[170px] w-32"
              />
            </a>

            <div class="space-x-4 md:absolute md:right-10 flex items-center max-md:ml-auto">
              <div class="w-7 h-7 flex items-center justify-center rounded-md text-gray-800 hover:bg-blue-600 hover:text-white transition-all">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="cursor-pointer w-5 h-5 fill-current transition-all"
                  viewBox="0 0 155.139 155.139"
                >
                  <path
                    d="M89.584 155.139V84.378h23.742l3.562-27.585H89.584V39.184c0-7.984 2.208-13.425 13.67-13.425l14.595-.006V1.08C115.325.752 106.661 0 96.577 0 75.52 0 61.104 12.853 61.104 36.452v20.341H37.29v27.585h23.814v70.761h28.48z"
                    data-original="#010002"
                  />
                </svg>
              </div>
              <div class="w-7 h-7 flex items-center justify-center rounded-md text-gray-800 hover:bg-blue-600 hover:text-white transition-all">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="cursor-pointer w-5 h-5 fill-current transition-all"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M23.994 24v-.001H24v-8.802c0-4.306-.927-7.623-5.961-7.623-2.42 0-4.044 1.328-4.707 2.587h-.07V7.976H8.489v16.023h4.97v-7.934c0-2.089.396-4.109 2.983-4.109 2.549 0 2.587 2.384 2.587 4.243V24zM.396 7.977h4.976V24H.396zM2.882 0C1.291 0 0 1.291 0 2.882s1.291 2.909 2.882 2.909 2.882-1.318 2.882-2.909A2.884 2.884 0 0 0 2.882 0z"
                    data-original="#000000"
                  />
                </svg>
              </div>
              <div class="w-7 h-7 flex items-center justify-center rounded-md text-gray-800 hover:bg-black hover:text-white transition-all">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="cursor-pointer w-5 h-5 fill-current transition-all"
                  viewBox="0 0 1226.37 1226.37"
                >
                  <path
                    d="M727.348 519.284 1174.075 0h-105.86L680.322 450.887 370.513 0H13.185l468.492 681.821L13.185 1226.37h105.866l409.625-476.152 327.181 476.152h357.328L727.322 519.284zM582.35 687.828l-47.468-67.894-377.686-540.24H319.8l304.797 435.991 47.468 67.894 396.2 566.721H905.661L582.35 687.854z"
                    data-original="#000000"
                  />
                </svg>
              </div>
            </div>
          </section>

          <div class="flex flex-wrap py-3.5 px-10 overflow-x-auto">
            <div
              id="collapseMenu"
              class="w-full max-lg:hidden lg:!block max-lg:before:fixed max-lg:before:bg-black max-lg:before:opacity-50 max-lg:before:inset-0 max-lg:before:z-50"
            >
              <button
                id="toggleClose"
                class="lg:hidden fixed top-2 right-4 z-[100] rounded-full bg-white w-9 h-9 flex items-center justify-center border"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-3.5 h-3.5 fill-black"
                  viewBox="0 0 320.591 320.591"
                >
                  <path
                    d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z"
                    data-original="#000000"
                  ></path>
                  <path
                    d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z"
                    data-original="#000000"
                  ></path>
                </svg>
              </button>

              <ul class="lg:flex lg:justify-center lg:gap-x-10 max-lg:space-y-3 max-lg:fixed max-lg:bg-white max-lg:w-1/2 max-lg:min-w-[300px] max-lg:top-0 max-lg:left-0 max-lg:p-6 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto z-50">
                <li class="mb-6 hidden max-lg:block">
                  <a href="javascript:void(0)">
                    <img
                      src="https://Codebase UI.com/Codebase UI.svg"
                      alt="logo"
                      class="w-36"
                    />
                  </a>
                </li>
                <li class="max-lg:border-b max-lg:py-3">
                  <a
                    href="javascript:void(0)"
                    class="hover:text-[#39CBF5] text-[#39CBF5] font-bold text-[15px] block"
                  >
                    Home
                  </a>
                </li>
                <li class="max-lg:border-b max-lg:py-3">
                  <a
                    href="javascript:void(0)"
                    class="hover:text-[#39CBF5] text-gray-500 font-bold text-[15px] block"
                  >
                    Team
                  </a>
                </li>
                <li class="max-lg:border-b max-lg:py-3">
                  <a
                    href="javascript:void(0)"
                    class="hover:text-[#39CBF5] text-gray-500 font-bold text-[15px] block"
                  >
                    Feature
                  </a>
                </li>
                <li class="max-lg:border-b max-lg:py-3">
                  <a
                    href="javascript:void(0)"
                    class="hover:text-[#39CBF5] text-gray-500 font-bold text-[15px] block"
                  >
                    Blog
                  </a>
                </li>
                <li class="max-lg:border-b max-lg:py-3">
                  <a
                    href="javascript:void(0)"
                    class="hover:text-[#39CBF5] text-gray-500 font-bold text-[15px] block"
                  >
                    About
                  </a>
                </li>
                <li class="max-lg:border-b max-lg:py-3">
                  <a
                    href="javascript:void(0)"
                    class="hover:text-[#39CBF5] text-gray-500 font-bold text-[15px] block"
                  >
                    Contact
                  </a>
                </li>
                <li class="max-lg:border-b max-lg:py-3">
                  <a
                    href="javascript:void(0)"
                    class="hover:text-[#39CBF5] text-gray-500 font-bold text-[15px] block"
                  >
                    Source
                  </a>
                </li>
                <li class="max-lg:border-b max-lg:py-3">
                  <a
                    href="javascript:void(0)"
                    class="hover:text-[#39CBF5] text-gray-500 font-bold text-[15px] block"
                  >
                    Store
                  </a>
                </li>
                <li class="max-lg:border-b max-lg:py-3">
                  <a
                    href="javascript:void(0)"
                    class="hover:text-[#39CBF5] text-gray-500 font-bold text-[15px] block"
                  >
                    Fashion
                  </a>
                </li>
                <li class="max-lg:border-b max-lg:py-3">
                  <a
                    href="javascript:void(0)"
                    class="hover:text-[#39CBF5] text-gray-500 font-bold text-[15px] block"
                  >
                    Partner
                  </a>
                </li>
                <li class="max-lg:border-b max-lg:py-3">
                  <a
                    href="javascript:void(0)"
                    class="hover:text-[#39CBF5] text-gray-500 font-bold text-[15px] block"
                  >
                    More
                  </a>
                </li>
              </ul>
            </div>

            <div class="flex ml-auto lg:hidden">
              <button id="toggleOpen">
                <svg
                  class="w-7 h-7"
                  fill="#000"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </header>
      </ComponentsView>

      <ComponentsView title="Responsive Header: Logo, Navigation, Actions, and Mobile Menu">
        <header class="flex border-b py-4 px-4 sm:px-10 bg-white font-sans min-h-[70px] tracking-wide relative z-50">
          <div class="flex flex-wrap items-center gap-4 w-full max-w-6xl mx-auto">
            <a href="javascript:void(0)" class="max-sm:hidden">
              <img
                src="https://Codebase UI.com/Codebase UI.svg"
                alt="logo"
                class="w-36"
              />
            </a>
            <a href="javascript:void(0)" class="hidden max-sm:block">
              <img
                src="https://Codebase UI.com/Codebase UI-short.svg"
                alt="logo"
                class="w-9"
              />
            </a>

            <div
              id="collapseMenu"
              class="lg:!flex lg:flex-auto lg:ml-12 max-lg:hidden max-lg:before:fixed max-lg:before:bg-black max-lg:before:opacity-50 max-lg:before:inset-0 max-lg:before:z-50"
            >
              <button
                id="toggleClose"
                class="lg:hidden fixed top-2 right-4 z-[100] rounded-full bg-white w-9 h-9 flex items-center justify-center border"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-3.5 h-3.5 fill-black"
                  viewBox="0 0 320.591 320.591"
                >
                  <path
                    d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z"
                    data-original="#000000"
                  ></path>
                  <path
                    d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z"
                    data-original="#000000"
                  ></path>
                </svg>
              </button>

              <div class="lg:!flex lg:flex-auto max-lg:fixed max-lg:bg-white max-lg:w-1/2 max-lg:min-w-[300px] max-lg:top-0 max-lg:left-0 max-lg:p-6 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto z-50">
                <ul class="lg:flex lg:gap-x-8 max-lg:space-y-2">
                  <li class="mb-6 hidden max-lg:block">
                    <a href="javascript:void(0)">
                      <img
                        src="https://Codebase UI.com/Codebase UI.svg"
                        alt="logo"
                        class="w-36"
                      />
                    </a>
                  </li>
                  <li class="max-lg:border-b max-lg:py-3">
                    <a
                      href="javascript:void(0)"
                      class="hover:text-[#39CBF5] text-[#39CBF5] block font-bold text-[15px]"
                    >
                      Home
                    </a>
                  </li>
                  <li class="max-lg:border-b max-lg:py-3">
                    <a
                      href="javascript:void(0)"
                      class="hover:text-[#39CBF5] text-gray-600 block font-bold text-[15px]"
                    >
                      Shop
                    </a>
                  </li>
                  <li class="max-lg:border-b max-lg:py-3">
                    <a
                      href="javascript:void(0)"
                      class="hover:text-[#39CBF5] text-gray-600 block font-bold text-[15px]"
                    >
                      Sale
                    </a>
                  </li>
                  <li class="max-lg:border-b max-lg:py-3">
                    <a
                      href="javascript:void(0)"
                      class="hover:text-[#39CBF5] text-gray-600 block font-bold text-[15px]"
                    >
                      Manage
                    </a>
                  </li>
                </ul>

                <ul class="lg:flex lg:items-center ml-auto max-lg:block lg:space-x-8">
                  <li class="max-lg:border-b max-lg:py-3 max-lg:mt-2">
                    <a
                      href="javascript:void(0)"
                      class="hover:text-[#39CBF5] text-gray-600 block font-bold text-[15px]"
                    >
                      Pricing
                    </a>
                  </li>
                  <li class="max-lg:border-b max-lg:py-3 max-lg:mt-2">
                    <a
                      href="javascript:void(0)"
                      class="hover:text-[#39CBF5] text-gray-600 block font-bold text-[15px]"
                    >
                      Learn
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div class="border-l border-[#333] h-6 max-lg:hidden"></div>

            <div class="flex items-center ml-auto space-x-4">
              <a
                href="javascript:void(0)"
                class="hover:text-[#39CBF5] text-gray-600 block font-bold text-[15px]"
              >
                Log in
              </a>
              <button class="px-4 py-2 text-sm rounded font-semibold text-white border-2 border-[#1d294f] bg-[#1d294f] transition-all ease-in-out duration-300 hover:bg-transparent hover:text-[#1d294f]">
                Start free trial
              </button>

              <button id="toggleOpen" class="lg:hidden">
                <svg
                  class="w-7 h-7"
                  fill="#000"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </header>
      </ComponentsView>

      <ComponentsView>
        <iframe
          srcDoc={`<html>
  <head>
    <script src='https://cdn.tailwindcss.com'></script>
    <style>
      ::-webkit-scrollbar {
        width: 10px;
        height: 10px;
      }
      ::-webkit-scrollbar-track {
        background-color: #f1f1f1;
      }
      ::-webkit-scrollbar-thumb {
        background-color: #ccc;
        border-radius: 5px;
      }
      ::-webkit-scrollbar-thumb:hover {
        background-color: #aaa;
      }
    </style>
  </head>
  <body class='bg-gray-50 px-4'>

    <nav class="bg-white border-gray-200 dark:bg-gray-900">
                    <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                        <a href="https://flowbite.com/" class="flex items-center space-x-3 rtl:space-x-reverse">
                            <img src="https://flowbite.com/docs/images/logo.svg" class="h-8" alt="Flowbite Logo" />
                            <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
                        </a>
                        <div class="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                            <button type="button" class="flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">
                                <span class="sr-only">Open user menu</span>
                                <img class="w-8 h-8 rounded-full" src="/docs/images/people/profile-picture-3.jpg" alt="user photo"/>
                            </button>
                            {/* <!-- Dropdown menu --> */}
                            <div class="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600" id="user-dropdown">
                                <div class="px-4 py-3">
                                    <span class="block text-sm text-gray-900 dark:text-white">Bonnie Green</span>
                                    <span class="block text-sm  text-gray-500 truncate dark:text-gray-400">name@flowbite.com</span>
                                </div>
                                <ul class="py-2" aria-labelledby="user-menu-button">
                                    <li>
                                        <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Dashboard</a>
                                    </li>
                                    <li>
                                        <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Settings</a>
                                    </li>
                                    <li>
                                        <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Earnings</a>
                                    </li>
                                    <li>
                                        <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</a>
                                    </li>
                                </ul>
                            </div>
                            <button data-collapse-toggle="navbar-user" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-user" aria-expanded="false">
                                <span class="sr-only">Open main menu</span>
                                <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
                                </svg>
                            </button>
                        </div>
                        <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-user">
                            <ul class="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                                <li>
                                    <a href="#" class="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500" aria-current="page">Home</a>
                                </li>
                                <li>
                                    <a href="#" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</a>
                                </li>
                                <li>
                                    <a href="#" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Services</a>
                                </li>
                                <li>
                                    <a href="#" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Pricing</a>
                                </li>
                                <li>
                                    <a href="#" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contact</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>



  </body>
</html>`}
          width="100%"
          height="400"
          style={{ border: 'none' }}
        ></iframe>
      </ComponentsView>
    </div>
  );
}

export default page;
