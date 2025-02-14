import { ComponentsView } from '@/components/CodeViewBoxTwo/Index'

function page() {
  return (
    <div>
      <ComponentsView title='' link='' >
        <button type="button" class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 ">Blue</button>
        <button type="button" class="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Green</button>
        <button type="button" class="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Cyan</button>
        <button type="button" class="text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 shadow-lg shadow-teal-500/50 dark:shadow-lg dark:shadow-teal-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Teal</button>
        <button type="button" class="text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 shadow-lg shadow-lime-500/50 dark:shadow-lg dark:shadow-lime-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Lime</button>
        <button type="button" class="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Red</button>
        <button type="button" class="text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 shadow-lg shadow-pink-500/50 dark:shadow-lg dark:shadow-pink-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Pink</button>
        <button type="button" class="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Purple</button>

      </ComponentsView>
      <ComponentsView title='' link='' >
        <div class="font-[sans-serif] space-x-4 space-y-4 text-center">
          <button type="button"
            class="px-5 py-2.5 rounded-lg text-sm tracking-wider font-medium border border-blue-700 outline-none bg-transparent hover:bg-blue-700 text-blue-700 hover:text-white transition-all duration-300">Blue</button>

          <button type="button"
            class="px-5 py-2.5 rounded-lg text-sm tracking-wider font-medium border border-purple-700 outline-none bg-transparent hover:bg-purple-700 text-purple-700 hover:text-white transition-all duration-300">Purple</button>

          <button type="button"
            class="px-5 py-2.5 rounded-lg text-sm tracking-wider font-medium border border-red-700 outline-none bg-transparent hover:bg-red-700 text-red-700 hover:text-white transition-all duration-300">Red</button>

          <button type="button"
            class="px-5 py-2.5 rounded-lg text-sm tracking-wider font-medium border border-orange-700 outline-none bg-transparent hover:bg-orange-700 text-orange-700 hover:text-white transition-all duration-300">Orange</button>

          <button type="button"
            class="px-5 py-2.5 rounded-lg text-sm tracking-wider font-medium border border-green-700 outline-none bg-transparent hover:bg-green-700 text-green-700 hover:text-white transition-all duration-300">Green</button>

          <button type="button"
            class="px-5 py-2.5 rounded-lg text-sm tracking-wider font-medium border border-black outline-none bg-transparent hover:bg-black text-black hover:text-white transition-all duration-300">Dark</button>
        </div>
      </ComponentsView>

      <ComponentsView title='' link='' >
        <div className='flex flex-col justify-center'>
          <div class='inline-flex gap-2 mb-8 ps-4'>
            <button type='button' class='py-2.5 px-6 text-sm rounded-full border border-solid border-indigo-200 text-indigo-600 cursor-pointer font-semibold text-center shadow-xs transition-all duration-500 hover:bg-indigo-600 hover:text-white'>Button</button>
            <button type='button' class='py-2.5 px-6 text-sm rounded-full border border-solid border-red-200 text-red-600 cursor-pointer font-semibold text-center shadow-xs transition-all duration-500 hover:bg-red-600 hover:text-white'>Button</button>
            <button type='button' class='py-2.5 px-6 text-sm rounded-full border border-solid border-amber-200 text-amber-600 cursor-pointer font-semibold text-center shadow-xs transition-all duration-500 hover:bg-amber-600 hover:text-white'>Button</button>
            <button type='button' class='py-2.5 px-6 text-sm rounded-full border border-solid border-emerald-200 text-emerald-600 cursor-pointer font-semibold text-center shadow-xs transition-all duration-500 hover:bg-emerald-600 hover:text-white'>Button</button>
            <button type='button' class='py-2.5 px-6 text-sm rounded-full border border-solid border-blue-200 text-blue-600 cursor-pointer font-semibold text-center shadow-xs transition-all duration-500 hover:bg-blue-600 hover:text-white'>Button</button>
            <button type='button' class='py-2.5 px-6 text-sm rounded-full border border-solid border-purple-200 text-purple-600 cursor-pointer font-semibold text-center shadow-xs transition-all duration-500 hover:bg-purple-600 hover:text-white'>Button</button>
            <button type='button' class='py-2.5 px-6 text-sm rounded-full border border-solid border-gray-200 text-gray-600 cursor-pointer font-semibold text-center shadow-xs transition-all duration-500 hover:bg-gray-900 hover:text-white'>Button</button>
          </div>
          <div class='inline-flex gap-2 pe-4'>
            <button type='button' class='py-2.5 px-6 text-sm rounded-lg border border-solid border-indigo-200 text-indigo-600 cursor-pointer font-semibold text-center shadow-xs transition-all duration-500 hover:bg-indigo-600 hover:text-white'>Button</button>
            <button type='button' class='py-2.5 px-6 text-sm rounded-lg border border-solid border-red-200 text-red-600 cursor-pointer font-semibold text-center shadow-xs transition-all duration-500 hover:bg-red-600 hover:text-white'>Button</button>
            <button type='button' class='py-2.5 px-6 text-sm rounded-lg border border-solid border-amber-200 text-amber-600 cursor-pointer font-semibold text-center shadow-xs transition-all duration-500 hover:bg-amber-600 hover:text-white'>Button</button>
            <button type='button' class='py-2.5 px-6 text-sm rounded-lg border border-solid border-emerald-200 text-emerald-600 cursor-pointer font-semibold text-center shadow-xs transition-all duration-500 hover:bg-emerald-600 hover:text-white'>Button</button>
            <button type='button' class='py-2.5 px-6 text-sm rounded-lg border border-solid border-blue-200 text-blue-600 cursor-pointer font-semibold text-center shadow-xs transition-all duration-500 hover:bg-blue-600 hover:text-white'>Button</button>
            <button type='button' class='py-2.5 px-6 text-sm rounded-lg border border-solid border-purple-200 text-purple-600 cursor-pointer font-semibold text-center shadow-xs transition-all duration-500 hover:bg-purple-600 hover:text-white'>Button</button>
            <button type='button' class='py-2.5 px-6 text-sm rounded-lg border border-solid border-gray-200 text-gray-600 cursor-pointer font-semibold text-center shadow-xs transition-all duration-500 hover:bg-gray-900 hover:text-white'>Button</button>
          </div>
        </div>
      </ComponentsView>

      <ComponentsView title='' link='' >
        <div>
          <div class="mb-8 ">
            <button
              class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm text-gray-600 font-semibold rounded-full group bg-gradient-to-br from-violet-600 to-teal-400 group-hover:from-indigo-600 group-hover:to-indigo-500 hover:text-white">
              <span
                class="relative py-2 px-5 transition-all ease-in duration-75 bg-white rounded-full group-hover:bg-opacity-0">
                Button
              </span>
            </button>
            <button
              class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm text-gray-600 font-semibold rounded-full group bg-gradient-to-br from-violet-600 to-cyan-100 group-hover:from-blue-500 group-hover:to-blue-300 hover:text-white">
              <span
                class="relative py-2 px-5 transition-all ease-in duration-75 bg-white rounded-full group-hover:bg-opacity-0">
                Button
              </span>
            </button>
            <button
              class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm text-gray-600 font-semibold rounded-full group bg-gradient-to-br from-violet-600 to-pink-500 group-hover:from-green-500 group-hover:to-green-300 hover:text-white">
              <span
                class="relative py-2 px-5 transition-all ease-in duration-75 bg-white rounded-full group-hover:bg-opacity-0">
                Button
              </span>
            </button>
            <button
              class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm text-gray-600 font-semibold rounded-full group bg-gradient-to-br from-violet-600 to-yellow-400 group-hover:from-pink-500 group-hover:to-pink-400 hover:text-white">
              <span
                class="relative py-2 px-5 transition-all ease-in duration-75 bg-white rounded-full group-hover:bg-opacity-0">
                Button
              </span>
            </button>
            <button
              class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm text-gray-600 font-semibold rounded-full group bg-gradient-to-br from-violet-600 to-orange-400 group-hover:from-orange-500 group-hover:to-orange-300 hover:text-white">
              <span
                class="relative py-2 px-5 transition-all ease-in duration-75 bg-white rounded-full group-hover:bg-opacity-0">
                Button
              </span>
            </button>
            <button
              class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm text-gray-600 font-semibold rounded-full group bg-gradient-to-br from-violet-600 to-red-600 group-hover:from-yellow-400 group-hover:to-yellow-200 hover:text-white">
              <span
                class="relative py-2 px-5 transition-all ease-in duration-75 bg-white rounded-full group-hover:bg-opacity-0">
                Button
              </span>
            </button>
            <button
              class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm text-gray-600 font-semibold rounded-full group bg-gradient-to-br from-violet-600 to-pink-300 group-hover:from-gray-700 group-hover:to-gray-500 hover:text-white">
              <span
                class="relative py-2 px-5 transition-all ease-in duration-75 bg-white rounded-full group-hover:bg-opacity-0">
                Button
              </span>
            </button>
            <button
              class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm text-gray-600 font-semibold rounded-full group bg-gradient-to-br from-violet-600 to-blue-400 group-hover:from-indigo-600 group-hover:to-indigo-500 hover:text-white">
              <span
                class="relative py-2 px-5 transition-all ease-in duration-75 bg-white rounded-full group-hover:bg-opacity-0">
                Button
              </span>
            </button>
          </div>

          <div class=" ">
            <button
              class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm text-gray-600 font-semibold rounded-lg group bg-gradient-to-br from-violet-600 to-teal-400 group-hover:from-indigo-600 group-hover:to-indigo-500 hover:text-white">
              <span
                class="relative py-2 px-5 transition-all ease-in duration-75 bg-white rounded-md group-hover:bg-opacity-0">
                Button
              </span>
            </button>
            <button
              class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm text-gray-600 font-semibold rounded-lg group bg-gradient-to-br from-violet-600 to-cyan-100 group-hover:from-blue-500 group-hover:to-blue-300 hover:text-white">
              <span
                class="relative py-2 px-5 transition-all ease-in duration-75 bg-white rounded-md group-hover:bg-opacity-0">
                Button
              </span>
            </button>
            <button
              class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm text-gray-600 font-semibold rounded-lg group bg-gradient-to-br from-violet-600 to-pink-500 group-hover:from-green-500 group-hover:to-green-300 hover:text-white">
              <span
                class="relative py-2 px-5 transition-all ease-in duration-75 bg-white rounded-md group-hover:bg-opacity-0">
                Button
              </span>
            </button>
            <button
              class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm text-gray-600 font-semibold rounded-lg group bg-gradient-to-br from-violet-600 to-yellow-400 group-hover:from-pink-500 group-hover:to-pink-400 hover:text-white">
              <span
                class="relative py-2 px-5 transition-all ease-in duration-75 bg-white rounded-md group-hover:bg-opacity-0">
                Button
              </span>
            </button>
            <button
              class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm text-gray-600 font-semibold rounded-lg group bg-gradient-to-br from-violet-600 to-orange-400 group-hover:from-orange-500 group-hover:to-orange-300 hover:text-white">
              <span
                class="relative py-2 px-5 transition-all ease-in duration-75 bg-white rounded-md group-hover:bg-opacity-0">
                Button
              </span>
            </button>
            <button
              class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm text-gray-600 font-semibold rounded-lg group bg-gradient-to-br from-violet-600 to-red-600 group-hover:from-yellow-400 group-hover:to-yellow-200 hover:text-white">
              <span
                class="relative py-2 px-5 transition-all ease-in duration-75 bg-white rounded-md group-hover:bg-opacity-0">
                Button
              </span>
            </button>
            <button
              class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm text-gray-600 font-semibold rounded-lg group bg-gradient-to-br from-violet-600 to-pink-300 group-hover:from-gray-700 group-hover:to-gray-500 hover:text-white">
              <span
                class="relative py-2 px-5 transition-all ease-in duration-75 bg-white rounded-md group-hover:bg-opacity-0">
                Button
              </span>
            </button>
            <button
              class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm text-gray-600 font-semibold rounded-lg group bg-gradient-to-br from-violet-600 to-blue-400 group-hover:from-indigo-600 group-hover:to-indigo-500 hover:text-white">
              <span
                class="relative py-2 px-5 transition-all ease-in duration-75 bg-white rounded-md group-hover:bg-opacity-0">
                Button
              </span>
            </button>
          </div>
        </div>

      </ComponentsView>

      <ComponentsView title='' link='' >

        <button type="button" class="text-white bg-[#3b5998] hover:bg-[#3b5998]/90 focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#3b5998]/55 me-2 mb-2">
          <svg class="w-4 h-4 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 8 19">
            <path fill-rule="evenodd" d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" clip-rule="evenodd" />
          </svg>
          Sign in with Facebook
        </button>
        <button type="button" class="text-white bg-[#1da1f2] hover:bg-[#1da1f2]/90 focus:ring-4 focus:outline-none focus:ring-[#1da1f2]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#1da1f2]/55 me-2 mb-2">
          <svg class="w-4 h-4 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 17">
            <path fill-rule="evenodd" d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z" clip-rule="evenodd" />
          </svg>
          Sign in with Twitter
        </button>
        <button type="button" class="text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 me-2 mb-2">
          <svg class="w-4 h-4 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z" clip-rule="evenodd" />
          </svg>
          Sign in with Github
        </button>
        <button type="button" class="text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 me-2 mb-2">
          <svg class="w-4 h-4 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 19">
            <path fill-rule="evenodd" d="M8.842 18.083a8.8 8.8 0 0 1-8.65-8.948 8.841 8.841 0 0 1 8.8-8.652h.153a8.464 8.464 0 0 1 5.7 2.257l-2.193 2.038A5.27 5.27 0 0 0 9.09 3.4a5.882 5.882 0 0 0-.2 11.76h.124a5.091 5.091 0 0 0 5.248-4.057L14.3 11H9V8h8.34c.066.543.095 1.09.088 1.636-.086 5.053-3.463 8.449-8.4 8.449l-.186-.002Z" clip-rule="evenodd" />
          </svg>
          Sign in with Google
        </button>
        <button type="button" class="text-white bg-[#050708] hover:bg-[#050708]/90 focus:ring-4 focus:outline-none focus:ring-[#050708]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#050708]/50 dark:hover:bg-[#050708]/30 me-2 mb-2">
          <svg class="w-5 h-5 me-2 -ms-1" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="apple" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="currentColor" d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"></path></svg>
          Sign in with Apple
        </button>

      </ComponentsView>

      <ComponentsView title='' link='' >
        <div class="font-[sans-serif] space-x-4 space-y-4 text-center">
          <button type="button"
            class="bg-white py-2.5 min-w-[140px] shadow-xl shadow-blue-200 text-black text-sm tracking-wider font-medium outline-none border border-blue-600 active:shadow-inner">Blue</button>

          <button type="button"
            class="bg-white py-2.5 min-w-[140px] shadow-xl shadow-purple-200 rounded-full text-black text-sm tracking-wider font-medium outline-none border border-purple-600 active:shadow-inner">Purple</button>

          <button type="button"
            class="bg-white py-2.5 min-w-[140px] shadow-xl rounded-full text-black text-sm tracking-wider font-medium border-none outline-none active:shadow-inner">Button</button>

          <button type="button"
            class="bg-orange-600 py-2.5 min-w-[140px] shadow-xl shadow-orange-200 text-white text-sm tracking-wider font-medium border-none outline-none active:shadow-inner">Orange</button>

        </div>
      </ComponentsView>

      <ComponentsView title='' link='' >
        <div class=" hidden sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
          <button type="button"
            class="py-2.5 px-6 text-sm rounded-full bg-gradient-to-br from-violet-600 to-teal-400 text-white cursor-pointer font-semibold text-center shadow-xs transition-all duration-500 hover:bg-gradient-to-tr">violet
            to teal</button>
          <button type="button"
            class="py-2.5 px-6 text-sm rounded-full bg-gradient-to-br from-violet-600 to-cyan-100 text-white cursor-pointer font-semibold text-center shadow-xs transition-all duration-500 hover:bg-gradient-to-tr">violet
            to cyan</button>
          <button type="button"
            class="py-2.5 px-6 text-sm rounded-full bg-gradient-to-r from-violet-600 to-pink-500 text-white cursor-pointer font-semibold text-center shadow-xs transition-all duration-500 hover:bg-gradient-to-tr">violet
            to pink</button>
          <button type="button"
            class="py-2.5 px-6 text-sm rounded-full bg-gradient-to-r from-violet-600 to-yellow-400 text-white cursor-pointer font-semibold text-center shadow-xs transition-all duration-500 hover:bg-gradient-to-tr">violet
            to yellow</button>
          <button type="button"
            class="py-2.5 px-6 text-sm rounded-full bg-gradient-to-r from-violet-600 to-orange-400 text-white cursor-pointer font-semibold text-center shadow-xs transition-all duration-500 hover:bg-gradient-to-tr">violet
            to orange</button>
          <button type="button"
            class="py-2.5 px-6 text-sm rounded-full bg-gradient-to-r from-violet-600 to-red-600 text-white cursor-pointer font-semibold text-center shadow-xs transition-all duration-500 hover:bg-gradient-to-tr">violet
            to red</button>
          <button type="button"
            class="py-2.5 px-6 text-sm rounded-full bg-gradient-to-r from-violet-600 to-pink-300 text-white cursor-pointer font-semibold text-center shadow-xs transition-all duration-500 hover:bg-gradient-to-tr">violet
            to pink</button>
          <button type="button"
            class="py-2.5 px-6 text-sm rounded-full bg-gradient-to-r from-violet-600 to-blue-400 text-white cursor-pointer font-semibold text-center shadow-xs transition-all duration-500 hover:bg-gradient-to-tr">violet
            to blue</button>
        </div>
        <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 ">
          <button type="button"
            class="py-2.5 px-6 text-sm rounded-lg bg-gradient-to-br from-violet-600 to-teal-400 text-white cursor-pointer font-semibold text-center shadow-xs transition-all duration-500 hover:bg-gradient-to-tr">violet
            to teal</button>
          <button type="button"
            class="py-2.5 px-6 text-sm rounded-lg bg-gradient-to-br from-violet-600 to-cyan-100 text-white cursor-pointer font-semibold text-center shadow-xs transition-all duration-500 hover:bg-gradient-to-tr">violet
            to cyan</button>
          <button type="button"
            class="py-2.5 px-6 text-sm rounded-lg bg-gradient-to-r from-violet-600 to-pink-500 text-white cursor-pointer font-semibold text-center shadow-xs transition-all duration-500 hover:bg-gradient-to-tr">violet
            to pink</button>
          <button type="button"
            class="py-2.5 px-6 text-sm rounded-lg bg-gradient-to-r from-violet-600 to-yellow-400 text-white cursor-pointer font-semibold text-center shadow-xs transition-all duration-500 hover:bg-gradient-to-tr">violet
            to yellow</button>
          <button type="button"
            class="py-2.5 px-6 text-sm rounded-lg bg-gradient-to-r from-violet-600 to-orange-400 text-white cursor-pointer font-semibold text-center shadow-xs transition-all duration-500 hover:bg-gradient-to-tr">violet
            to orange</button>
          <button type="button"
            class="py-2.5 px-6 text-sm rounded-lg bg-gradient-to-r from-violet-600 to-red-600 text-white cursor-pointer font-semibold text-center shadow-xs transition-all duration-500 hover:bg-gradient-to-tr">violet
            to red</button>
          <button type="button"
            class="py-2.5 px-6 text-sm rounded-lg bg-gradient-to-r from-violet-600 to-pink-300 text-white cursor-pointer font-semibold text-center shadow-xs transition-all duration-500 hover:bg-gradient-to-tr">violet
            to pink</button>
          <button type="button"
            class="py-2.5 px-6 text-sm rounded-lg bg-gradient-to-r from-violet-600 to-blue-400 text-white cursor-pointer font-semibold text-center shadow-xs transition-all duration-500 hover:bg-gradient-to-tr">violet
            to blue</button>
        </div>

      </ComponentsView>

      <ComponentsView title='' link='' >
        <div className='flex flex-wrap gap-4 px-5'>
          <button class="relative inline-block group">
            <span
              class="relative z-10 px-3.5 py-2 overflow-hidden font-medium leading-tight flex items-centrer justify-center text-indigo-600 transition-colors duration-300 ease-out border-2 border-indigo-600 rounded-lg group-hover:text-white">
              <span class="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
              <span
                class="absolute left-0 w-40 h-40 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-indigo-600 group-hover:-rotate-180 ease"></span>
              <span class="relative text-base font-semibold">Button Text</span>
            </span>
            <span
              class="absolute bottom-0 right-0 w-full h-9 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-indigo-600 rounded-lg group-hover:mb-0 group-hover:mr-0 group-hover:mb-2"
              data-rounded="rounded-lg"></span>
          </button>

          <button
            class="rounded-lg px-3.5 py-2 m-1 overflow-hidden relative group cursor-pointer border-2 font-medium border-indigo-600 text-indigo-600 text-white">
            <span
              class="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-indigo-600 top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
            <span
              class="relative text-base font-semibold text-indigo-600 transition duration-300 group-hover:text-white ease">Button
              Text</span>
          </button>

          <button
            class="px-5 py-2.5 relative rounded-lg group overflow-hidden font-medium bg-indigo-50 text-indigo-600 flex items-center justify-center">
            <span
              class="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-indigo-600 group-hover:h-full opacity-90"></span>
            <span class="relative group-hover:text-white text-base font-semibold">Button Text</span>
          </button>

          <button
            class="relative inline-flex items-center justify-center p-4 px-3.5 py-2.5 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out rounded-lg shadow-xl group hover:ring-0 hover:ring-purple-500">
            <span class="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-600 via-purple-600 to-pink-700"></span>
            <span
              class="absolute bottom-0 right-0 block w-64 h-64 mb-32 mr-4 transition duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-pink-500 rounded-full opacity-30 group-hover:rotate-90 ease"></span>
            <span class="relative text-white text-base font-semibold">Button Text</span>
          </button>

          <button
            class="relative px-5 py-2.5 overflow-hidden font-medium text-indigo-600 bg-indigo-50 border border-gray-100 rounded-lg shadow-inner group">
            <span
              class="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-indigo-600 group-hover:w-full ease"></span>
            <span
              class="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-indigo-600 group-hover:w-full ease"></span>
            <span
              class="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-indigo-600 group-hover:h-full ease"></span>
            <span
              class="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-indigo-600 group-hover:h-full ease"></span>
            <span
              class="absolute inset-0 w-full h-full duration-300 delay-300 bg-indigo-600 opacity-0 group-hover:opacity-100"></span>
            <span
              class="relative text-base font-semibold transition-colors duration-300 delay-200 group-hover:text-white ease">Button
              Text</span>
          </button>

          <button
            class="relative inline-flex items-center justify-center px-3.5 py-2.5 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-indigo-500 rounded-lg shadow-md group">
            <span
              class="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-indigo-500 group-hover:translate-x-0 ease">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </span>
            <span
              class="absolute flex items-center text-base font-semibold justify-center w-full h-full text-indigo-500 transition-all duration-300 transform group-hover:translate-x-full ease">Button
              Text</span>
            <span class="relative text-base font-semibold invisible">Button Text</span>
          </button>

          <button
            class="relative rounded px-5 py-2.5 overflow-hidden group bg-indigo-500 relative hover:bg-gradient-to-r hover:from-indigo-500 hover:to-indigo-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-indigo-400 transition-all ease-out duration-300">
            <span
              class="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
            <span class="relative text-base font-semibold">Button Text</span>
          </button>

          <button
            class="relative px-10 py-3 font-medium text-white transition duration-300 bg-indigo-400 rounded-md hover:bg-indigo-500 ease">
            <span class="absolute bottom-0 left-0 h-full -ml-2">
              <svg viewBox="0 0 487 487" class="w-auto h-full opacity-100 object-stretch" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M0 .3c67 2.1 134.1 4.3 186.3 37 52.2 32.7 89.6 95.8 112.8 150.6 23.2 54.8 32.3 101.4 61.2 149.9 28.9 48.4 77.7 98.8 126.4 149.2H0V.3z"
                  fill="#FFF" fill-rule="nonzero" fill-opacity=".1"></path>
              </svg>
            </span>
            <span class="absolute top-0 right-0 w-12 h-full -mr-3">
              <svg viewBox="0 0 487 487" class="object-cover w-full h-full" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M487 486.7c-66.1-3.6-132.3-7.3-186.3-37s-95.9-85.3-126.2-137.2c-30.4-51.8-49.3-99.9-76.5-151.4C70.9 109.6 35.6 54.8.3 0H487v486.7z"
                  fill="#FFF" fill-rule="nonzero" fill-opacity=".1"></path>
              </svg>
            </span>
            <span class="relative text-base font-semibold">Button Text</span>
          </button>

          <button
            class="relative inline-flex items-center justify-center inline-block p-4 px-5 py-3 overflow-hidden font-medium text-indigo-600 rounded-lg shadow-2xl group">
            <span
              class="absolute top-0 left-0 w-40 h-40 -mt-10 -ml-3 transition-all duration-700 bg-blue-600 rounded-full blur-md ease"></span>
            <span class="absolute inset-0 w-full h-full transition duration-700 group-hover:rotate-180 ease">
              <span class="absolute bottom-0 left-0 w-24 h-24 -ml-10 bg-pink-600 rounded-full blur-md"></span>
              <span class="absolute bottom-0 right-0 w-24 h-24 -mr-10 bg-purple-700 rounded-full blur-md"></span>
            </span>
            <span class="relative text-white text-base font-semibold">Button Text</span>
          </button>

          <button
            class="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-indigo-500 rounded-xl group">
            <span
              class="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-indigo-700 rounded group-hover:-mr-4 group-hover:-mt-4">
              <span class="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
            </span>
            <span
              class="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full translate-y-full bg-indigo-600 rounded-2xl group-hover:mb-12 group-hover:translate-x-0"></span>
            <span
              class="relative w-full text-base font-semibold text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white">Button
              Text</span>
          </button>

          <button
            class="relative group inline-flex items-center px-8 py-2.5 overflow-hidden text-lg font-medium text-indigo-600 border-2 border-indigo-600 rounded-lg hover:text-white group hover:bg-gray-50">
            <span
              class="absolute left-0 block w-full h-0 transition-all bg-indigo-600 opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
            <span
              class="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </span>
            <span class="relative text-base font-semibold transition-all duration-300 group-hover:-translate-x-3">Button
              Text</span>
          </button>

          <button
            class="relative inline-flex items-center justify-center px-6 py-3 overflow-hidden font-bold bg-gray-200 text-gray-900 rounded-lg shadow-2xl shadow-black/60 group hover:text-white">
            <span
              class="absolute inset-0 w-full h-full transition duration-300 ease-out opacity-0 bg-gradient-to-br from-pink-600 via-purple-700 to-blue-400 group-hover:opacity-100"></span>
            {/* <!-- Top glass gradient --> */}
            <span class="absolute top-0 left-0 w-full bg-gradient-to-b from-white to-transparent opacity-5 h-1/3"></span>
            {/* <!-- Bottom gradient --> */}
            <span class="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-white to-transparent opacity-5"></span>
            {/* <!-- Left gradient --> */}
            <span class="absolute bottom-0 left-0 w-4 h-full bg-gradient-to-r from-white to-transparent opacity-5"></span>
            {/* <!-- Right gradient --> */}
            <span class="absolute bottom-0 right-0 w-4 h-full bg-gradient-to-l from-white to-transparent opacity-5"></span>
            <span class="absolute inset-0 w-full h-full border border-white rounded-md opacity-10"></span>
            <span
              class="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-56 group-hover:h-56 opacity-5"></span>
            <span class="relative text-base font-semibold">Button Text</span>
          </button>

          <button
            class="relative inline-flex items-center bg-indigo-50 justify-start inline-block px-5 py-3 overflow-hidden font-bold rounded-lg group">
            <span
              class="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-indigo-600 opacity-[3%]"></span>
            <span
              class="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-indigo-600 opacity-100 group-hover:-translate-x-8"></span>
            <span
              class="relative w-full text-base font-semibold text-left text-gray-900 transition-colors duration-200 ease-in-out group-hover:text-white">Button
              Text</span>
            <span class="absolute inset-0 border-2 border-white rounded-md"></span>
          </button>

          <button
            class="relative inline-flex items-center justify-start inline-block px-5 py-2.5 overflow-hidden font-medium transition-all bg-indigo-600 rounded-lg hover:bg-indigo-50 group">
            <span
              class="absolute inset-0 border-0 group-hover:border-[25px] ease-linear duration-100 transition-all border-indigo-50 rounded-lg"></span>
            <span
              class="relative w-full text-base font-semibold text-left text-white transition-colors duration-200 ease-in-out group-hover:text-indigo-600">Button
              Text</span>
          </button>

          <button
            class="relative inline-flex items-center justify-center px-8 py-2.5 overflow-hidden tracking-tighter text-white bg-gray-800 rounded-lg group">
            <span
              class="absolute w-0 h-0 transition-all duration-500 ease-out bg-indigo-600 rounded-full group-hover:w-56 group-hover:h-56"></span>
            <span
              class="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-700"></span>
            <span class="relative text-base font-semibold">Button Text</span>
          </button>

          <button
            class="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-indigo-100 rounded hover:bg-white group">
            <span
              class="w-48 h-48 rounded rotate-[-40deg] bg-indigo-600 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
            <span
              class="relative w-full text-base font-semibold text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white ">Button
              Text</span>
          </button>

          <button class="text-base font-semibold m-6 group relative w-max">
            <span>Hover over me</span>
            <span class="absolute -bottom-1 left-0 w-0 transition-all h-0.5 bg-indigo-600 group-hover:w-full"></span>
          </button>

          <a href="javascript:;" class="text-base font-semibold m-6 group relative w-max">
            <span>Hover over me</span>
            <span class="absolute -bottom-1 right-0 w-0 transition-all h-0.5 bg-indigo-600 group-hover:w-full"></span>
          </a>

          <a href="javascript:;" class="text-base font-semibold m-6 group relative w-max">
            <span>Hover over me</span>
            <span class="absolute -bottom-1 left-1/2 w-0 transition-all h-0.5 bg-indigo-600 group-hover:w-3/6"></span>
            <span class="absolute -bottom-1 right-1/2 w-0 transition-all h-0.5 bg-indigo-600 group-hover:w-3/6"></span>
          </a>

          <a href="javascript:;" class="text-base font-semibold m-6 group relative w-max">
            <span class="px-1 relative z-10 group-hover:text-white">Hover over me</span>
            <span class="absolute left-0 bottom-0 w-full h-0.5 transition-all bg-indigo-600 z-0 group-hover:h-full "></span>
          </a>
        </div>

      </ComponentsView>
      <ComponentsView >
        <div class="font-[sans-serif] space-x-4 space-y-4 text-center">
          <button type="button"
            class="px-5 py-2.5 rounded-lg text-white text-sm tracking-wider font-medium border border-current outline-none bg-blue-700 hover:bg-blue-800 active:bg-blue-700">Blue</button>

          <button type="button"
            class="px-5 py-2.5 rounded-lg text-white text-sm tracking-wider font-medium border border-current outline-none bg-purple-700 hover:bg-purple-800 active:bg-purple-700">Purple</button>

          <button type="button"
            class="px-5 py-2.5 rounded-lg text-white text-sm tracking-wider font-medium border border-current outline-none bg-red-700 hover:bg-red-800 active:bg-red-700">Red</button>

          <button type="button"
            class="px-5 py-2.5 rounded-lg text-white text-sm tracking-wider font-medium border border-current outline-none bg-orange-700 hover:bg-orange-800 active:bg-orange-700">Orange</button>

          <button type="button"
            class="px-5 py-2.5 rounded-lg text-white text-sm tracking-wider font-medium border border-current outline-none bg-green-700 hover:bg-green-800 active:bg-green-700">Green</button>

          <button type="button"
            class="px-5 py-2.5 rounded-lg text-white text-sm tracking-wider font-medium border border-current outline-none bg-[#333] hover:bg-[#222] active:bg-[#333]">Dark</button>
        </div>
      </ComponentsView>
      <ComponentsView >
        <div class="font-[sans-serif] space-x-4 space-y-4 text-center">
          <button type="button"
            class="px-5 py-2.5 rounded-lg text-sm tracking-wider font-medium border border-blue-700 outline-none bg-transparent hover:bg-blue-700 text-blue-700 hover:text-white transition-all duration-300">Blue</button>

          <button type="button"
            class="px-5 py-2.5 rounded-lg text-sm tracking-wider font-medium border border-purple-700 outline-none bg-transparent hover:bg-purple-700 text-purple-700 hover:text-white transition-all duration-300">Purple</button>

          <button type="button"
            class="px-5 py-2.5 rounded-lg text-sm tracking-wider font-medium border border-red-700 outline-none bg-transparent hover:bg-red-700 text-red-700 hover:text-white transition-all duration-300">Red</button>

          <button type="button"
            class="px-5 py-2.5 rounded-lg text-sm tracking-wider font-medium border border-orange-700 outline-none bg-transparent hover:bg-orange-700 text-orange-700 hover:text-white transition-all duration-300">Orange</button>

          <button type="button"
            class="px-5 py-2.5 rounded-lg text-sm tracking-wider font-medium border border-green-700 outline-none bg-transparent hover:bg-green-700 text-green-700 hover:text-white transition-all duration-300">Green</button>

          <button type="button"
            class="px-5 py-2.5 rounded-lg text-sm tracking-wider font-medium border border-black outline-none bg-transparent hover:bg-black text-black hover:text-white transition-all duration-300">Dark</button>
        </div>
      </ComponentsView>
      <ComponentsView >
        <div class="font-[sans-serif] space-x-4 space-y-4 text-center">
          <button type="button"
            class="bg-white py-2.5 min-w-[140px] shadow-xl shadow-blue-200 text-black text-sm tracking-wider font-medium outline-none border border-blue-600 active:shadow-inner">Blue</button>

          <button type="button"
            class="bg-white py-2.5 min-w-[140px] shadow-xl shadow-purple-200 rounded-full text-black text-sm tracking-wider font-medium outline-none border border-purple-600 active:shadow-inner">Purple</button>

          <button type="button"
            class="bg-white py-2.5 min-w-[140px] shadow-xl rounded-full text-black text-sm tracking-wider font-medium border-none outline-none active:shadow-inner">Button</button>

          <button type="button"
            class="bg-orange-600 py-2.5 min-w-[140px] shadow-xl shadow-orange-200 text-white text-sm tracking-wider font-medium border-none outline-none active:shadow-inner">Orange</button>

        </div>
      </ComponentsView>
      <ComponentsView >
        <div class="font-[sans-serif] flex justify-center items-center gap-4 mt-4">

          <button type="button"
            class="px-5 py-2.5 flex items-center justify-center rounded text-white text-sm tracking-wider font-medium border-none outline-none bg-purple-600 hover:bg-purple-700 active:bg-purple-600">
            <svg xmlns="http://www.w3.org/2000/svg" width="16px" fill="currentColor" class="mr-2 inline" viewBox="0 0 24 24">
              <path
                d="M1 1a1 1 0 1 0 0 2h1.78a.694.694 35.784 0 1 .657.474l3.297 9.893c.147.44.165.912.053 1.362l-.271 1.087C6.117 17.41 7.358 19 9 19h12a1 1 0 1 0 0-2H9c-.39 0-.64-.32-.545-.697l.205-.818A.64.64 142.028 0 1 9.28 15H20a1 1 0 0 0 .95-.684l2.665-8A1 1 0 0 0 22.666 5H6.555a.694.694 35.783 0 1-.658-.474l-.948-2.842A1 1 0 0 0 4 1zm7 19a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm12 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4z"
                data-original="#000000" paint-order="fill markers stroke" />
            </svg>
            Buy
          </button>

          <button type="button"
            class="px-5 py-2.5 flex items-center justify-center rounded text-white text-sm tracking-wider font-medium border-none outline-none bg-blue-600 hover:bg-blue-700 active:bg-blue-600">
            Download
            <svg xmlns="http://www.w3.org/2000/svg" width="16px" fill="currentColor" class="ml-2 inline" viewBox="0 0 24 24">
              <path
                d="M12 16a.749.749 0 0 1-.542-.232l-5.25-5.5A.75.75 0 0 1 6.75 9H9.5V3.25c0-.689.561-1.25 1.25-1.25h2.5c.689 0 1.25.561 1.25 1.25V9h2.75a.75.75 0 0 1 .542 1.268l-5.25 5.5A.749.749 0 0 1 12 16zm10.25 6H1.75C.785 22 0 21.215 0 20.25v-.5C0 18.785.785 18 1.75 18h20.5c.965 0 1.75.785 1.75 1.75v.5c0 .965-.785 1.75-1.75 1.75z"
                data-original="#000000" />
            </svg>
          </button>

          <button type="button"
            class="px-5 py-2.5 flex items-center justify-center text-white text-sm tracking-wider font-semibold border-none outline-none bg-purple-600 hover:bg-purple-700 active:bg-purple-600">
            <svg xmlns="http://www.w3.org/2000/svg" width="18px" fill="#fff" class="mr-2 inline animate-spin"
              viewBox="0 0 26.349 26.35">
              <circle cx="13.792" cy="3.082" r="3.082" data-original="#000000" />
              <circle cx="13.792" cy="24.501" r="1.849" data-original="#000000" />
              <circle cx="6.219" cy="6.218" r="2.774" data-original="#000000" />
              <circle cx="21.365" cy="21.363" r="1.541" data-original="#000000" />
              <circle cx="3.082" cy="13.792" r="2.465" data-original="#000000" />
              <circle cx="24.501" cy="13.791" r="1.232" data-original="#000000" />
              <path
                d="M4.694 19.84a2.155 2.155 0 0 0 0 3.05 2.155 2.155 0 0 0 3.05 0 2.155 2.155 0 0 0 0-3.05 2.146 2.146 0 0 0-3.05 0z"
                data-original="#000000" />
              <circle cx="21.364" cy="6.218" r=".924" data-original="#000000" />
            </svg>
            Loading
          </button>

          <button type="button"
            class="px-5 py-2.5 flex items-center justify-center rounded-full text-white text-sm tracking-wider font-semibold border-none outline-none bg-red-600 hover:bg-red-700 active:bg-orange-600">
            Loading
            <svg xmlns="http://www.w3.org/2000/svg" width="18px" fill="#fff" class="ml-2 inline animate-spin"
              viewBox="0 0 24 24">
              <path fill-rule="evenodd"
                d="M7.03 2.757a1 1 0 0 1 1.213-.727l4 1a1 1 0 0 1 .59 1.525l-2 3a1 1 0 0 1-1.665-1.11l.755-1.132a7.003 7.003 0 0 0-2.735 11.77 1 1 0 0 1-1.376 1.453A8.978 8.978 0 0 1 3 12a9 9 0 0 1 4.874-8l-.117-.03a1 1 0 0 1-.727-1.213zm10.092 3.017a1 1 0 0 1 1.414.038A8.973 8.973 0 0 1 21 12a9 9 0 0 1-5.068 8.098 1 1 0 0 1-.707 1.864l-3.5-1a1 1 0 0 1-.557-1.517l2-3a1 1 0 0 1 1.664 1.11l-.755 1.132a7.003 7.003 0 0 0 3.006-11.5 1 1 0 0 1 .039-1.413z"
                clip-rule="evenodd" data-original="#000000" />
            </svg>
          </button>




        </div>
      </ComponentsView>
    </div>
  )
}
export default page