import { ComponentsView } from '@/components/CodeViewBoxTwo/Index'

function page() {
  return (
    <div>
      <ComponentsView className='' title='' link=''>
        <div class="max-w-2xl mx-auto">

          <nav aria-label="Page navigation example">
            <ul class="inline-flex -space-x-px">
              <li>
                <a href="#"
                  class="bg-white border border-gray-300 text-gray-500 hover:bg-gray-100 hover:text-gray-700 ml-0 rounded-l-lg leading-tight py-2 px-3 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Previous</a>
              </li>
              <li>
                <a href="#"
                  class="bg-white border border-gray-300 text-gray-500 hover:bg-gray-100 hover:text-gray-700 leading-tight py-2 px-3 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">1</a>
              </li>
              <li>
                <a href="#"
                  class="bg-white border border-gray-300 text-gray-500 hover:bg-gray-100 hover:text-gray-700 leading-tight py-2 px-3 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">2</a>
              </li>
              <li>
                <a href="#" aria-current="page"
                  class="bg-blue-50 border border-gray-300 text-blue-600 hover:bg-blue-100 hover:text-blue-700  py-2 px-3 dark:border-gray-700 dark:bg-gray-700 dark:text-white">3</a>
              </li>
              <li>
                <a href="#"
                  class="bg-white border border-gray-300 text-gray-500 hover:bg-gray-100 hover:text-gray-700 leading-tight py-2 px-3 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">4</a>
              </li>
              <li>
                <a href="#"
                  class="bg-white border border-gray-300 text-gray-500 hover:bg-gray-100 hover:text-gray-700 leading-tight py-2 px-3 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">5</a>
              </li>
              <li>
                <a href="#"
                  class="bg-white border border-gray-300 text-gray-500 hover:bg-gray-100 hover:text-gray-700 rounded-r-lg leading-tight py-2 px-3 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Next</a>
              </li>
            </ul>
          </nav>

          <p class="mt-5">This pagination component is part of a larger, open-source library of Tailwind CSS components. Learn more
            by going to the official <a class="text-blue-600 hover:underline"
              href="#" target="_blank">Flowbite Documentation</a>.
          </p>
        </div>
      </ComponentsView>

      <ComponentsView className='' title='' link=''>

        <div class="flex items-center justify-center py-10 lg:px-0 sm:px-6 px-4">


          <div class="lg:w-3/5 w-full  flex items-center justify-between border-t border-gray-200">
            <div class="flex items-center pt-3 text-gray-600 hover:text-indigo-700 cursor-pointer">
              <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.1665 4H12.8332" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M1.1665 4L4.49984 7.33333" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M1.1665 4.00002L4.49984 0.666687" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
              <p class="text-sm ml-3 font-medium leading-none ">Previous</p>
            </div>
            <div class="sm:flex hidden">
              <p class="text-sm font-medium leading-none cursor-pointer text-gray-600 hover:text-indigo-700 border-t border-transparent hover:border-indigo-400 pt-3 mr-4 px-2">1</p>
              <p class="text-sm font-medium leading-none cursor-pointer text-gray-600 hover:text-indigo-700 border-t border-transparent hover:border-indigo-400 pt-3 mr-4 px-2">2</p>
              <p class="text-sm font-medium leading-none cursor-pointer text-gray-600 hover:text-indigo-700 border-t border-transparent hover:border-indigo-400 pt-3 mr-4 px-2">3</p>
              <p class="text-sm font-medium leading-none cursor-pointer text-indigo-700 border-t border-indigo-400 pt-3 mr-4 px-2">4</p>
              <p class="text-sm font-medium leading-none cursor-pointer text-gray-600 hover:text-indigo-700 border-t border-transparent hover:border-indigo-400 pt-3 mr-4 px-2">5</p>
              <p class="text-sm font-medium leading-none cursor-pointer text-gray-600 hover:text-indigo-700 border-t border-transparent hover:border-indigo-400 pt-3 mr-4 px-2">6</p>
              <p class="text-sm font-medium leading-none cursor-pointer text-gray-600 hover:text-indigo-700 border-t border-transparent hover:border-indigo-400 pt-3 mr-4 px-2">7</p>
              <p class="text-sm font-medium leading-none cursor-pointer text-gray-600 hover:text-indigo-700 border-t border-transparent hover:border-indigo-400 pt-3 mr-4 px-2">8</p>
            </div>
            <div class="flex items-center pt-3 text-gray-600 hover:text-indigo-700 cursor-pointer">
              <p class="text-sm font-medium leading-none mr-3">Next</p>
              <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.1665 4H12.8332" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M9.5 7.33333L12.8333 4" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M9.5 0.666687L12.8333 4.00002" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
              </svg>

            </div>
          </div>
        </div>
      </ComponentsView>

      <ComponentsView className='' title='' link=''>
        <div class="flex flex-col lg:flex-row justify-between">    <div class="flex flex-col lg:flex-row items-center space-x-2 text-xs">      <button class="py-2 px-4 bg-white text-gray-600 font-medium rounded hover:bg-gray-100 active:bg-gray-200 disabled:opacity-50 inline-flex items-center">        10 items        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">          <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />        </svg>      </button>      <p class="text-gray-500 mt-4 lg:mt-0">Showing 11 to 20 of 95 entires</p>    </div>    <nav aria-label="Pagination" class="flex justify-center items-center text-gray-600 mt-8 lg:mt-0">      <a href="#" class="p-2 mr-4 rounded hover:bg-gray-100">        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />        </svg>      </a>      <a href="#" class="px-4 py-2 rounded hover:bg-gray-100"> 1 </a>      <a href="#" class="px-4 py-2 rounded bg-gray-200 text-gray-900 font-medium hover:bg-gray-100"> 2 </a>      <a href="#" class="px-4 py-2 rounded hover:bg-gray-100"> 3 </a>      <a href="#" class="px-4 py-2 rounded hover:bg-gray-100"> ... </a>      <a href="#" class="px-4 py-2 rounded hover:bg-gray-100"> 9 </a>      <a href="#" class="p-2 ml-4 rounded hover:bg-gray-100">        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />        </svg>      </a>    </nav>  </div>
      </ComponentsView>

      <ComponentsView className='' title='' link=''>
        <nav aria-label="Pagination" class="flex items-center text-gray-600">    <a href="#" class="p-2 mr-4 rounded hover:bg-gray-100">      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />      </svg>    </a>    <a href="#" class="px-4 py-2 rounded hover:bg-gray-100"> 1 </a>    <a href="#" class="px-4 py-2 rounded bg-gray-200 text-gray-900 font-medium hover:bg-gray-100"> 2 </a>    <a href="#" class="px-4 py-2 rounded hover:bg-gray-100"> 3 </a>    <a href="#" class="px-4 py-2 rounded hover:bg-gray-100"> ... </a>    <a href="#" class="px-4 py-2 rounded hover:bg-gray-100"> 9 </a>    <a href="#" class="p-2 ml-4 rounded hover:bg-gray-100">      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />      </svg>    </a>  </nav>
      </ComponentsView>

      <ComponentsView className='' title='' link=''>
        <div className="flex justify-center space-x-1 dark:text-gray-800">
          <button title="previous" type="button" className="inline-flex items-center justify-center w-8 h-8 py-0 border rounded-md shadow-md dark:bg-gray-50 dark:border-gray-100">
            <svg viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="w-4">
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
          </button>
          <button type="button" title="Page 1" className="inline-flex items-center justify-center w-8 h-8 text-sm font-semibold border rounded shadow-md dark:bg-gray-50 dark:text-violet-600 dark:border-violet-600">1</button>
          <button type="button" className="inline-flex items-center justify-center w-8 h-8 text-sm border rounded shadow-md dark:bg-gray-50 dark:border-gray-100" title="Page 2">2</button>
          <button type="button" className="inline-flex items-center justify-center w-8 h-8 text-sm border rounded shadow-md dark:bg-gray-50 dark:border-gray-100" title="Page 3">3</button>
          <button type="button" className="inline-flex items-center justify-center w-8 h-8 text-sm border rounded shadow-md dark:bg-gray-50 dark:border-gray-100" title="Page 4">4</button>
          <button title="next" type="button" className="inline-flex items-center justify-center w-8 h-8 py-0 border rounded-md shadow-md dark:bg-gray-50 dark:border-gray-100">
            <svg viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="w-4">
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </button>
        </div>
      </ComponentsView>
    </div>
  )
}

export default page