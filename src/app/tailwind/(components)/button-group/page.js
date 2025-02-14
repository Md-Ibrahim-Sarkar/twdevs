import { ComponentsView } from '@/components/CodeViewBoxTwo/Index'

function page() {
  return (
    <div>
      <ComponentsView title='' link='' >
        <div class="inline-flex rounded-md shadow-sm" role="group">
          <button type="button" class="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-s-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white">
            <svg class="w-3 h-3 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
            </svg>
            Profile
          </button>
          <button type="button" class="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border-t border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white">
            <svg class="w-3 h-3 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 12.25V1m0 11.25a2.25 2.25 0 0 0 0 4.5m0-4.5a2.25 2.25 0 0 1 0 4.5M4 19v-2.25m6-13.5V1m0 2.25a2.25 2.25 0 0 0 0 4.5m0-4.5a2.25 2.25 0 0 1 0 4.5M10 19V7.75m6 4.5V1m0 11.25a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5ZM16 19v-2" />
            </svg>
            Settings
          </button>
          <button type="button" class="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-e-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white">
            <svg class="w-3 h-3 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
              <path d="M14.707 7.793a1 1 0 0 0-1.414 0L11 10.086V1.5a1 1 0 0 0-2 0v8.586L6.707 7.793a1 1 0 1 0-1.414 1.414l4 4a1 1 0 0 0 1.416 0l4-4a1 1 0 0 0-.002-1.414Z" />
              <path d="M18 12h-2.55l-2.975 2.975a3.5 3.5 0 0 1-4.95 0L4.55 12H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2Zm-3 5a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z" />
            </svg>
            Downloads
          </button>
        </div>

      </ComponentsView>
      <ComponentsView title='' link='' >
        <div class="font-[sans-serif] w-max mx-auto border-2 border-[#333] rounded-lg overflow-hidden flex m-4">
          <button type="button"
            class="px-5 py-2.5 text-[#333] text-sm tracking-wider font-semibold border-r-2 border-[#333] outline-none hover:bg-[#333] hover:text-white transition-all">Left</button>
          <button type="button"
            class="px-5 py-2.5 text-[#333] text-sm tracking-wider font-semibold border-r-2 border-[#333] outline-none hover:bg-[#333] hover:text-white transition-all">Middle</button>
          <button type="button"
            class="px-5 py-2.5 text-[#333] text-sm tracking-wider font-semibold border-none outline-none hover:bg-[#333] hover:text-white transition-all">Right</button>
        </div>
      </ComponentsView>
      <ComponentsView title='' link='' >
        <div class="font-[sans-serif] w-max mx-auto bg-gray-200 border divide-x divide-white flex rounded overflow-hidden">
          <button type="button"
            class="px-5 py-2.5 flex items-center text-[#333] text-sm outline-none hover:bg-gray-300 transition-all">
            <svg xmlns="http://www.w3.org/2000/svg" width="17px" fill="currentColor" class="mr-2" viewBox="0 0 24 24">
              <path d="M8.087 2a.989.989 0 0 0-.583.13l-7 4a1 1 0 0 0 0 1.737l7 4c.766.438 1.682-.256 1.467-1.111l-.316-1.27A.39.39 128.005 0 1 9.034 9H15.5c2.51 0 4.5 1.991 4.5 4.5S18.01 18 15.5 18H8a2 2 0 0 0 0 4h7.5c4.67 0 8.5-3.83 8.5-8.5S20.17 5 15.5 5H9.032a.39.39 52.01 0 1-.38-.485l.32-1.275A1.003 1.003 0 0 0 8.086 2z" data-original="#000000" paint-order="fill markers stroke" />
            </svg>
            Undo
          </button>

          <button type="button"
            class="px-5 py-2.5 flex items-center text-[#333] text-sm outline-none hover:bg-gray-300 transition-all">
            <svg xmlns="http://www.w3.org/2000/svg" width="17px" fill="currentColor" class="mr-2" viewBox="0 0 24 24">
              <path d="m20 8.6-8.38 8.38c-.29.29-.67.47-1.08.51l-2.93.27H7.5c-.33 0-.65-.13-.88-.37-.26-.26-.39-.63-.36-1l.27-2.93c.04-.41.22-.79.51-1.08L15.4 4zm1.94-5.83-.71-.71a2.758 2.758 0 0 0-3.89 0l-.88.88 4.6 4.6.88-.88a2.732 2.732 0 0 0 0-3.88zm-1.19 16.24V13.2c0-.41-.34-.75-.75-.75s-.75.34-.75.75v5.81c0 1.24-1.01 2.25-2.25 2.25H5c-1.24 0-2.25-1.01-2.25-2.25V7c0-1.24 1.01-2.25 2.25-2.25h5.81c.41 0 .75-.34.75-.75s-.34-.75-.75-.75H5C2.93 3.25 1.25 4.93 1.25 7v12c0 2.07 1.68 3.75 3.75 3.75h12c2.07 0 3.75-1.68 3.75-3.75z" data-original="#000000" />
            </svg>
            Edit
          </button>

          <button type="button"
            class="px-5 py-2.5 flex items-center text-[#333] text-sm outline-none hover:bg-gray-300 transition-all">
            <svg xmlns="http://www.w3.org/2000/svg" width="17px" fill="currentColor" class="mr-2" viewBox="0 0 6.35 6.35">
              <path fill-rule="evenodd" d="M3.181.264A2.92 2.92 0 0 0 .264 3.18a2.922 2.922 0 0 0 2.917 2.917A2.92 2.92 0 0 0 6.096 3.18 2.919 2.919 0 0 0 3.18.264zm0 .53A2.38 2.38 0 0 1 5.566 3.18 2.382 2.382 0 0 1 3.18 5.566 2.384 2.384 0 0 1 .794 3.179 2.383 2.383 0 0 1 3.181.794zm-.004 1.057a.265.265 0 0 0-.263.27v.794h-.793a.265.265 0 0 0-.028 0 .266.266 0 0 0 .028.53h.793v.794a.265.265 0 0 0 .531 0v-.793h.794a.265.265 0 0 0 0-.531h-.794v-.794a.265.265 0 0 0-.268-.27z" data-original="#000000" paint-order="stroke fill markers" />
            </svg>
            Create
          </button>
        </div>
      </ComponentsView>

      <ComponentsView title='' link='' >
        <div class="flex justify-center ">
          <button type="button" class="py-3 px-4 inline-flex justify-center items-center gap-2 -ml-px first:rounded-l-lg first:ml-0 last:rounded-r-lg border font-medium bg-white text-gray-900 align-middle hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-2 focus:ring-indigo-600 transition-all text-sm ">
            <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8.52464 15.8155C9.58965 17.0908 9.4241 18.9922 8.15487 20.0624C6.88565 21.1325 4.99338 20.9661 3.92838 19.6908C2.86337 18.4155 3.02892 16.5141 4.29815 15.4439C5.56737 14.3738 7.45964 14.5401 8.52464 15.8155ZM8.52464 15.8155L19.2493 6.77307" stroke="#111827" stroke-width="1.6" stroke-linecap="round" class="my-path"></path>
              <path d="M8.71703 8.18449C7.65202 9.45984 5.75975 9.62619 4.49053 8.55605C3.22131 7.48591 3.05575 5.58452 4.12076 4.30917C5.18576 3.03383 7.07803 2.86748 8.34726 3.93762C9.61648 5.00776 9.78203 6.90915 8.71703 8.18449ZM8.71703 8.18449L19.4416 17.2269" stroke="#111827" stroke-width="1.6" stroke-linecap="round" class="my-path"></path>
              <path d="M17 12H19M21 12H22" stroke="#111827" stroke-width="1.6" stroke-linecap="round" class="my-path"></path>
            </svg> Cut </button>
          <button type="button" class="py-3 px-4 inline-flex justify-center items-center gap-2 -ml-px first:rounded-l-lg first:ml-0 last:rounded-r-lg border font-medium bg-white text-gray-900 align-middle hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-2 focus:ring-indigo-600 transition-all text-sm ">
            <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8.66667 15.3333V19.3333C8.66667 20.8061 9.86057 22 11.3333 22H19.3333C20.8061 22 22 20.8061 22 19.3333V11.3333C22 9.86057 20.8061 8.66667 19.3333 8.66667H15.3333M4.66667 15.3333H12.6667C14.1394 15.3333 15.3333 14.1394 15.3333 12.6667V4.66667C15.3333 3.19391 14.1394 2 12.6667 2H4.66667C3.19391 2 2 3.19391 2 4.66667V12.6667C2 14.1394 3.19391 15.3333 4.66667 15.3333Z" stroke="#111827" stroke-width="1.6" stroke-linecap="round" class="my-path"></path>
            </svg> Copy </button>
          <button type="button" class="py-3 px-4 inline-flex justify-center items-center gap-2 -ml-px first:rounded-l-lg first:ml-0 last:rounded-r-lg border font-medium bg-white text-gray-900 align-middle hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-2 focus:ring-indigo-600 transition-all text-sm ">
            <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 8.25V18C20 21 18.21 22 16 22H8C5.79 22 4 21 4 18V8.25C4 5 5.79 4.25 8 4.25C8 4.87 8.24997 5.43 8.65997 5.84C9.06997 6.25 9.63 6.5 10.25 6.5H13.75C14.99 6.5 16 5.49 16 4.25C18.21 4.25 20 5 20 8.25Z" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M16 4.25C16 5.49 14.99 6.5 13.75 6.5H10.25C9.63 6.5 9.06997 6.25 8.65997 5.84C8.24997 5.43 8 4.87 8 4.25C8 3.01 9.01 2 10.25 2H13.75C14.37 2 14.93 2.25 15.34 2.66C15.75 3.07 16 3.63 16 4.25Z" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M8 13H12" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M8 17H16" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            </svg> Paste </button>
        </div>
      </ComponentsView>
      <ComponentsView title='' link='' >
        <div class="font-[sans-serif] bg-white shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] flex items-center gap-4 w-max mx-auto py-2 px-4 mt-4">
          <button type="button"
            class="px-5 py-2.5 flex items-center text-sm tracking-wider outline-none bg-blue-50 rounded">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 fill-blue-500" viewBox="0 0 24 24">
              <path
                d="M12 16a.749.749 0 0 1-.542-.232l-5.25-5.5A.75.75 0 0 1 6.75 9H9.5V3.25c0-.689.561-1.25 1.25-1.25h2.5c.689 0 1.25.561 1.25 1.25V9h2.75a.75.75 0 0 1 .542 1.268l-5.25 5.5A.749.749 0 0 1 12 16zm10.25 6H1.75C.785 22 0 21.215 0 20.25v-.5C0 18.785.785 18 1.75 18h20.5c.965 0 1.75.785 1.75 1.75v.5c0 .965-.785 1.75-1.75 1.75z"
                data-original="#000000"></path>
            </svg>
          </button>

          <button type="button"
            class="px-5 py-2.5 flex items-center text-sm tracking-wider font-semibold outline-none text-white bg-blue-500 hover:bg-blue-600 rounded">
            Action button
          </button>

          <div class="border-2 flex rounded">
            <button type="button"
              class="px-5 py-2.5 flex items-center text-sm tracking-wider outline-none">
              <svg class="w-4 h-4 fill-gray-400" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clip-rule="evenodd"></path>
              </svg>
            </button>

            <button type="button"
              class="px-5 py-2.5 flex items-center text-sm tracking-wider outline-none bg-blue-50">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 fill-blue-500" viewBox="0 0 24 24">
                <path
                  d="M1 1a1 1 0 1 0 0 2h1.78a.694.694 35.784 0 1 .657.474l3.297 9.893c.147.44.165.912.053 1.362l-.271 1.087C6.117 17.41 7.358 19 9 19h12a1 1 0 1 0 0-2H9c-.39 0-.64-.32-.545-.697l.205-.818A.64.64 142.028 0 1 9.28 15H20a1 1 0 0 0 .95-.684l2.665-8A1 1 0 0 0 22.666 5H6.555a.694.694 35.783 0 1-.658-.474l-.948-2.842A1 1 0 0 0 4 1zm7 19a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm12 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4z"
                  data-original="#000000" paint-order="fill markers stroke"></path>
              </svg>
            </button>
          </div>
        </div>
      </ComponentsView>
      <ComponentsView title='' link='' >
        <div class="inline-flex rounded-md shadow-sm" role="group">
          <button type="button" class="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-transparent border border-gray-900 rounded-s-lg hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700">
            <svg class="w-3 h-3 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
            </svg>
            Profile
          </button>
          <button type="button" class="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-transparent border-t border-b border-gray-900 hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700">
            <svg class="w-3 h-3 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 12.25V1m0 11.25a2.25 2.25 0 0 0 0 4.5m0-4.5a2.25 2.25 0 0 1 0 4.5M4 19v-2.25m6-13.5V1m0 2.25a2.25 2.25 0 0 0 0 4.5m0-4.5a2.25 2.25 0 0 1 0 4.5M10 19V7.75m6 4.5V1m0 11.25a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5ZM16 19v-2" />
            </svg>
            Settings
          </button>
          <button type="button" class="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-transparent border border-gray-900 rounded-e-lg hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700">
            <svg class="w-3 h-3 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
              <path d="M14.707 7.793a1 1 0 0 0-1.414 0L11 10.086V1.5a1 1 0 0 0-2 0v8.586L6.707 7.793a1 1 0 1 0-1.414 1.414l4 4a1 1 0 0 0 1.416 0l4-4a1 1 0 0 0-.002-1.414Z" />
              <path d="M18 12h-2.55l-2.975 2.975a3.5 3.5 0 0 1-4.95 0L4.55 12H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2Zm-3 5a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z" />
            </svg>
            Downloads
          </button>
        </div>
      </ComponentsView>

      <ComponentsView title='' link='' >
        <div class="font-[sans-serif] w-max mx-auto bg-white border-2 divide-x-2 flex rounded overflow-hidden">
          <button type="button"
            class="px-6 py-3 flex items-centertracking-wider outline-none bg-gray-200 hover:bg-gray-100 transition-all">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-3 h-3 fill-black" viewBox="0 0 181.395 181.395">
              <path d="M20.618 181.395V0h62.293c22.506 0 40.074 4.174 52.699 12.521 12.623 8.346 18.936 20.785 18.936 37.313 0 8.639-2.033 16.318-6.104 23.049-4.07 6.729-10.34 11.795-18.813 15.199 10.631 2.408 18.479 7.246 23.547 14.514 5.064 7.268 7.6 15.637 7.6 25.104 0 17.691-5.939 31.064-17.814 40.115-11.879 9.055-28.904 13.58-51.082 13.58H20.618zM62.853 75.623h20.93c9.551-.166 16.695-2.014 21.43-5.545 4.734-3.529 7.102-8.699 7.102-15.51 0-7.725-2.41-13.35-7.225-16.881-4.82-3.529-12.211-5.295-22.178-5.295H62.853v43.231zm0 27.908v45.473H91.88c8.971 0 15.699-1.766 20.184-5.297 4.484-3.529 6.729-8.947 6.729-16.256 0-7.891-1.932-13.85-5.795-17.879-3.861-4.027-10.111-6.041-18.748-6.041H62.853z" data-original="#000000" />
            </svg>
          </button>

          <button type="button"
            class="px-6 py-3 flex items-centertracking-wider outline-none hover:bg-gray-100 transition-all">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-3 h-3 fill-black" viewBox="0 0 64 64">
              <path d="M45.171 1.62H27.829a5 5 0 0 0 0 10h3.217l-8.451 40.675c-.006.029-.003.056-.008.085h-3.758a5 5 0 1 0 0 10h17.342c2.762 0 5-2.238 5-5s-2.238-5-5-5h-3.399l8.467-40.76h3.932a5 5 0 1 0 0-10z" data-original="#000000" />
            </svg>
          </button>

          <button type="button"
            class="px-6 py-3 flex items-centertracking-wider outline-none hover:bg-gray-100 transition-all">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-3 h-3 fill-black" viewBox="0 0 985 985">
              <path d="M915 61.55H70c-38.7 0-70 31.3-70 70s31.3 70 70 70h845c38.7 0 70-31.3 70-70s-31.3-70-70-70zm70 551.301c0-38.701-31.3-70-70-70H70c-38.7 0-70 31.299-70 70 0 38.699 31.3 70 70 70h845c38.7 0 70-31.401 70-70zM70 442.15h695.4c38.699 0 70-31.3 70-70s-31.301-70-70-70H70c-38.7 0-70 31.3-70 70s31.3 70 70 70zm522.3 411.3c0-38.701-31.3-70-70-70H70c-38.7 0-70 31.299-70 70 0 38.699 31.3 70 70 70h452.3c38.7 0 70-31.301 70-70z" data-original="#000000" />
            </svg>
          </button>

          <button type="button"
            class="px-6 py-3 flex items-centertracking-wider outline-none bg-gray-200 hover:bg-gray-100 transition-all">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-3 h-3 fill-black" viewBox="0 0 990.9 990.9">
              <path d="M920.8 64.5H70c-38.7 0-70 31.3-70 70s31.3 70 70 70h850.9c38.7 0 70-31.3 70-70s-31.4-70-70.1-70zm0 481.301H70c-38.7 0-70 31.299-70 70 0 38.699 31.3 70 70 70h850.9c38.7 0 70-31.301 70-70 0-38.701-31.4-70-70.1-70zM804.101 445.1c38.699 0 70-31.3 70-70s-31.301-70-70-70H186.8c-38.7 0-70 31.3-70 70s31.3 70 70 70h617.301zM682.5 926.4c38.7 0 70-31.301 70-70 0-38.701-31.3-70-70-70H308.3c-38.7 0-70 31.299-70 70 0 38.699 31.3 70 70 70h374.2z" data-original="#000000" />
            </svg>
          </button>

          <button type="button"
            class="px-6 py-3 flex items-centertracking-wider outline-none hover:bg-gray-100 transition-all">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-3 h-3 fill-black" viewBox="0 0 985 985">
              <path d="M70 201.55h845c38.7 0 70-31.3 70-70s-31.3-70-70-70H70c-38.7 0-70 31.3-70 70s31.3 70 70 70zm845 341.301H70c-38.7 0-70 31.299-70 70 0 38.699 31.3 70 70 70h845c38.7 0 70-31.301 70-70 0-38.702-31.3-70-70-70zm0-240.701H219.6c-38.7 0-70 31.3-70 70s31.3 70 70 70H915c38.7 0 70-31.3 70-70s-31.3-70-70-70zm0 481.3H462.7c-38.7 0-70 31.299-70 70 0 38.699 31.3 70 70 70H915c38.7 0 70-31.301 70-70 0-38.701-31.3-70-70-70z" data-original="#000000" />
            </svg>
          </button>
        </div>
      </ComponentsView>
    </div>
  )
}

export default page