import { ComponentsView } from '@/components/CodeViewBoxTwo/Index'

function page() {
  return (
    <div>
      <ComponentsView title='' link='' >


        <nav class="flex" aria-label="Breadcrumb">
          <ol class="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
            <li class="inline-flex items-center">
              <a href="#" class="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
                <svg class="w-3 h-3 me-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
                </svg>
                Home
              </a>
            </li>
            <li>
              <div class="flex items-center">
                <svg class="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4" />
                </svg>
                <a href="#" class="ms-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white">Projects</a>
              </div>
            </li>
            <li aria-current="page">
              <div class="flex items-center">
                <svg class="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4" />
                </svg>
                <span class="ms-1 text-sm font-medium text-gray-500 md:ms-2 dark:text-gray-400">Flowbite</span>
              </div>
            </li>
          </ol>
        </nav>

      </ComponentsView>

      <ComponentsView title='' link='' >
      <ul class="flex items-center justify-center space-x-4 font-[sans-serif] mt-4">
      <li class="text-gray-500 bg-gray-100 px-4 py-2 rounded-full text-sm tracking-wide font-bold cursor-pointer flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" class="w-4 fill-current mr-2" viewBox="0 0 511 511.999">
          <path
            d="M498.7 222.695c-.016-.011-.028-.027-.04-.039L289.805 13.81C280.902 4.902 269.066 0 256.477 0c-12.59 0-24.426 4.902-33.332 13.809L14.398 222.55c-.07.07-.144.144-.21.215-18.282 18.386-18.25 48.218.09 66.558 8.378 8.383 19.44 13.235 31.273 13.746.484.047.969.07 1.457.07h8.32v153.696c0 30.418 24.75 55.164 55.168 55.164h81.711c8.285 0 15-6.719 15-15V376.5c0-13.879 11.293-25.168 25.172-25.168h48.195c13.88 0 25.168 11.29 25.168 25.168V497c0 8.281 6.715 15 15 15h81.711c30.422 0 55.168-24.746 55.168-55.164V303.14h7.719c12.586 0 24.422-4.903 33.332-13.813 18.36-18.367 18.367-48.254.027-66.633zm-21.243 45.422a17.03 17.03 0 0 1-12.117 5.024h-22.72c-8.285 0-15 6.714-15 15v168.695c0 13.875-11.289 25.164-25.168 25.164h-66.71V376.5c0-30.418-24.747-55.168-55.169-55.168H232.38c-30.422 0-55.172 24.75-55.172 55.168V482h-66.71c-13.876 0-25.169-11.29-25.169-25.164V288.14c0-8.286-6.715-15-15-15H48a13.9 13.9 0 0 0-.703-.032c-4.469-.078-8.66-1.851-11.8-4.996-6.68-6.68-6.68-17.55 0-24.234.003 0 .003-.004.007-.008l.012-.012L244.363 35.02A17.003 17.003 0 0 1 256.477 30c4.574 0 8.875 1.781 12.113 5.02l208.8 208.796.098.094c6.645 6.692 6.633 17.54-.031 24.207zm0 0"
            data-original="#000000" />
        </svg>
        Home
      </li>
      <li class="text-gray-500 text-3xl">/</li>
      <li class="text-gray-500 bg-gray-100 px-4 py-2 rounded-full text-sm tracking-wide font-bold cursor-pointer flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" class="w-4 fill-current mr-2" viewBox="0 0 512 512">
          <path
            d="M437.02 74.98C388.668 26.63 324.379 0 256 0S123.332 26.629 74.98 74.98C26.63 123.332 0 187.621 0 256s26.629 132.668 74.98 181.02C123.332 485.37 187.621 512 256 512s132.668-26.629 181.02-74.98C485.37 388.668 512 324.379 512 256s-26.629-132.668-74.98-181.02zM111.105 429.297c8.454-72.735 70.989-128.89 144.895-128.89 38.96 0 75.598 15.179 103.156 42.734 23.281 23.285 37.965 53.687 41.742 86.152C361.641 462.172 311.094 482 256 482s-105.637-19.824-144.895-52.703zM256 269.507c-42.871 0-77.754-34.882-77.754-77.753C178.246 148.879 213.13 114 256 114s77.754 34.879 77.754 77.754c0 42.871-34.883 77.754-77.754 77.754zm170.719 134.427a175.9 175.9 0 0 0-46.352-82.004c-18.437-18.438-40.25-32.27-64.039-40.938 28.598-19.394 47.426-52.16 47.426-89.238C363.754 132.34 315.414 84 256 84s-107.754 48.34-107.754 107.754c0 37.098 18.844 69.875 47.465 89.266-21.887 7.976-42.14 20.308-59.566 36.542-25.235 23.5-42.758 53.465-50.883 86.348C50.852 364.242 30 312.512 30 256 30 131.383 131.383 30 256 30s226 101.383 226 226c0 56.523-20.86 108.266-55.281 147.934zm0 0"
            data-original="#000000" />
        </svg>
        Profile
      </li>
      <li class="text-gray-500 text-3xl">/</li>
      <li class="text-white bg-gray-700 px-4 py-2 rounded-full text-sm tracking-wide font-bold cursor-pointer flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" class="w-4 fill-current mr-2" viewBox="0 0 24 24">
          <g fill-rule="evenodd" clip-rule="evenodd">
            <path
              d="M7 4a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-6a1 1 0 1 1 2 0v6a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5h6a1 1 0 1 1 0 2z"
              data-original="#000000" />
            <path
              d="M19.197 4a.803.803 0 0 0-.567.235l-7.877 7.877-.379 1.514 1.514-.379 7.877-7.877A.803.803 0 0 0 19.197 4zm-1.981-1.18a2.802 2.802 0 1 1 3.963 3.964l-8.073 8.073a1 1 0 0 1-.464.263l-3.4.85a1 1 0 0 1-1.212-1.213l.85-3.399a1 1 0 0 1 .263-.464z"
              data-original="#000000" />
            <path d="M15.293 5.293a1 1 0 0 1 1.414 0l2 2a1 1 0 0 1-1.414 1.414l-2-2a1 1 0 0 1 0-1.414z"
              data-original="#000000" />
          </g>
        </svg>
        Edit
      </li>
    </ul>
      </ComponentsView>

      <ComponentsView title='' link='' >
      <ul class="bg-white shadow-[0_2px_8px_-1px_rgba(6,81,237,0.4)] p-2 space-x-4 w-max flex items-center rounded-lg mx-auto font-[sans-serif] mt-4">
      <li class="text-gray-400 hover:bg-gray-100 px-4 py-2.5 rounded-lg text-sm font-bold cursor-pointer flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" class="w-4 fill-current mr-3" viewBox="0 0 511 511.999">
          <path
            d="M498.7 222.695c-.016-.011-.028-.027-.04-.039L289.805 13.81C280.902 4.902 269.066 0 256.477 0c-12.59 0-24.426 4.902-33.332 13.809L14.398 222.55c-.07.07-.144.144-.21.215-18.282 18.386-18.25 48.218.09 66.558 8.378 8.383 19.44 13.235 31.273 13.746.484.047.969.07 1.457.07h8.32v153.696c0 30.418 24.75 55.164 55.168 55.164h81.711c8.285 0 15-6.719 15-15V376.5c0-13.879 11.293-25.168 25.172-25.168h48.195c13.88 0 25.168 11.29 25.168 25.168V497c0 8.281 6.715 15 15 15h81.711c30.422 0 55.168-24.746 55.168-55.164V303.14h7.719c12.586 0 24.422-4.903 33.332-13.813 18.36-18.367 18.367-48.254.027-66.633zm-21.243 45.422a17.03 17.03 0 0 1-12.117 5.024h-22.72c-8.285 0-15 6.714-15 15v168.695c0 13.875-11.289 25.164-25.168 25.164h-66.71V376.5c0-30.418-24.747-55.168-55.169-55.168H232.38c-30.422 0-55.172 24.75-55.172 55.168V482h-66.71c-13.876 0-25.169-11.29-25.169-25.164V288.14c0-8.286-6.715-15-15-15H48a13.9 13.9 0 0 0-.703-.032c-4.469-.078-8.66-1.851-11.8-4.996-6.68-6.68-6.68-17.55 0-24.234.003 0 .003-.004.007-.008l.012-.012L244.363 35.02A17.003 17.003 0 0 1 256.477 30c4.574 0 8.875 1.781 12.113 5.02l208.8 208.796.098.094c6.645 6.692 6.633 17.54-.031 24.207zm0 0"
            data-original="#000000" />
        </svg>
        Home
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" class="fill-gray-400 w-3 -rotate-90 leading-none" viewBox="0 0 24 24">
          <path fill-rule="evenodd"
            d="M11.99997 18.1669a2.38 2.38 0 0 1-1.68266-.69733l-9.52-9.52a2.38 2.38 0 1 1 3.36532-3.36532l7.83734 7.83734 7.83734-7.83734a2.38 2.38 0 1 1 3.36532 3.36532l-9.52 9.52a2.38 2.38 0 0 1-1.68266.69734z"
            clip-rule="evenodd" data-original="#000000"></path>
        </svg>
      </li>
      <li class="text-white bg-blue-500 px-4 py-2.5 rounded-lg text-sm font-bold cursor-pointer flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" class="w-4 fill-current mr-3" viewBox="0 0 512 512">
          <path
            d="M437.02 74.98C388.668 26.63 324.379 0 256 0S123.332 26.629 74.98 74.98C26.63 123.332 0 187.621 0 256s26.629 132.668 74.98 181.02C123.332 485.37 187.621 512 256 512s132.668-26.629 181.02-74.98C485.37 388.668 512 324.379 512 256s-26.629-132.668-74.98-181.02zM111.105 429.297c8.454-72.735 70.989-128.89 144.895-128.89 38.96 0 75.598 15.179 103.156 42.734 23.281 23.285 37.965 53.687 41.742 86.152C361.641 462.172 311.094 482 256 482s-105.637-19.824-144.895-52.703zM256 269.507c-42.871 0-77.754-34.882-77.754-77.753C178.246 148.879 213.13 114 256 114s77.754 34.879 77.754 77.754c0 42.871-34.883 77.754-77.754 77.754zm170.719 134.427a175.9 175.9 0 0 0-46.352-82.004c-18.437-18.438-40.25-32.27-64.039-40.938 28.598-19.394 47.426-52.16 47.426-89.238C363.754 132.34 315.414 84 256 84s-107.754 48.34-107.754 107.754c0 37.098 18.844 69.875 47.465 89.266-21.887 7.976-42.14 20.308-59.566 36.542-25.235 23.5-42.758 53.465-50.883 86.348C50.852 364.242 30 312.512 30 256 30 131.383 131.383 30 256 30s226 101.383 226 226c0 56.523-20.86 108.266-55.281 147.934zm0 0"
            data-original="#000000" />
        </svg>
        Profile
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" class="fill-gray-400 w-3 -rotate-90 leading-none" viewBox="0 0 24 24">
          <path fill-rule="evenodd"
            d="M11.99997 18.1669a2.38 2.38 0 0 1-1.68266-.69733l-9.52-9.52a2.38 2.38 0 1 1 3.36532-3.36532l7.83734 7.83734 7.83734-7.83734a2.38 2.38 0 1 1 3.36532 3.36532l-9.52 9.52a2.38 2.38 0 0 1-1.68266.69734z"
            clip-rule="evenodd" data-original="#000000"></path>
        </svg>
      </li>
      <li class="text-gray-400 hover:bg-gray-100 px-4 py-2.5 rounded-lg text-sm font-bold cursor-pointer flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" class="w-4 fill-current mr-3" viewBox="0 0 24 24">
          <g fill-rule="evenodd" clip-rule="evenodd">
            <path
              d="M7 4a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-6a1 1 0 1 1 2 0v6a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5h6a1 1 0 1 1 0 2z"
              data-original="#000000" />
            <path
              d="M19.197 4a.803.803 0 0 0-.567.235l-7.877 7.877-.379 1.514 1.514-.379 7.877-7.877A.803.803 0 0 0 19.197 4zm-1.981-1.18a2.802 2.802 0 1 1 3.963 3.964l-8.073 8.073a1 1 0 0 1-.464.263l-3.4.85a1 1 0 0 1-1.212-1.213l.85-3.399a1 1 0 0 1 .263-.464z"
              data-original="#000000" />
            <path d="M15.293 5.293a1 1 0 0 1 1.414 0l2 2a1 1 0 0 1-1.414 1.414l-2-2a1 1 0 0 1 0-1.414z"
              data-original="#000000" />
          </g>
        </svg>
        Edit
      </li>
    </ul>
      </ComponentsView>


      <ComponentsView title='' link='' >
      <nav class="flex" aria-label="Breadcrumb">
<ol class="inline-flex items-center space-x-1 md:space-x-3">
<li class="inline-flex items-center">
 <svg class="w-5 h-5 mr-2" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
   <g clip-path="url(#clip0_11192_719)">
     <path d="M1.66663 4.99999C1.66663 3.15904 3.15901 1.66666 4.99996 1.66666C6.84091 1.66666 8.33329 3.15904 8.33329 4.99999C8.33329 6.84094 6.84091 8.33332 4.99996 8.33332C3.15901 8.33332 1.66663 6.84094 1.66663 4.99999Z" stroke="#111827" stroke-width="1.6" />
     <path d="M1.66663 15C1.66663 13.4286 1.66663 12.643 2.15478 12.1548C2.64294 11.6667 3.42861 11.6667 4.99996 11.6667C6.57131 11.6667 7.35698 11.6667 7.84514 12.1548C8.33329 12.643 8.33329 13.4286 8.33329 15C8.33329 16.5713 8.33329 17.357 7.84514 17.8452C7.35698 18.3333 6.57131 18.3333 4.99996 18.3333C3.42861 18.3333 2.64294 18.3333 2.15478 17.8452C1.66663 17.357 1.66663 16.5713 1.66663 15Z" stroke="#111827" stroke-width="1.6" />
     <path d="M11.6666 4.99999C11.6666 3.42864 11.6666 2.64297 12.1548 2.15481C12.6429 1.66666 13.4286 1.66666 15 1.66666C16.5713 1.66666 17.357 1.66666 17.8451 2.15481C18.3333 2.64297 18.3333 3.42864 18.3333 4.99999C18.3333 6.57134 18.3333 7.35701 17.8451 7.84517C17.357 8.33332 16.5713 8.33332 15 8.33332C13.4286 8.33332 12.6429 8.33332 12.1548 7.84517C11.6666 7.35701 11.6666 6.57134 11.6666 4.99999Z" stroke="#111827" stroke-width="1.6" />
     <path d="M11.6666 15C11.6666 13.159 13.159 11.6667 15 11.6667C16.8409 11.6667 18.3333 13.159 18.3333 15C18.3333 16.8409 16.8409 18.3333 15 18.3333C13.159 18.3333 11.6666 16.8409 11.6666 15Z" stroke="#111827" stroke-width="1.6" />
   </g>
   <defs>
     <clipPath id="clip0_11192_719">
       <rect width="20" height="20" fill="white" />
     </clipPath>
   </defs>
 </svg>
 <a href="javascript:;" class="inline-flex items-center text-base font-medium text-gray-900 hover:text-indigo-800 whitespace-nowrap"> Tab text </a>
</li>
<li>
 <div class="flex items-center">
   <svg class="mx-1 w-5 h-5" viewBox="0 0 5 20" fill="none" xmlns="http://www.w3.org/2000/svg">
     <path d="M4.12561 1.13672L0.999943 18.8633" stroke="#E5E7EB" stroke-width="1.6" stroke-linecap="round" />
   </svg>
   <a href="javascript:;" class="ml-1 text-base font-medium text-gray-900 hover:text-indigo-800 md:ml-2 whitespace-nowrap"> Tab text</a>
 </div>
</li>
<li aria-current="page">
 <div class="flex items-center">
   <svg class="mx-1 w-5 h-5" viewBox="0 0 5 20" fill="none" xmlns="http://www.w3.org/2000/svg">
     <path d="M4.12561 1.13672L0.999943 18.8633" stroke="#E5E7EB" stroke-width="1.6" stroke-linecap="round" />
   </svg>
   <span class="ml-1 text-base font-medium text-indigo-600 md:ml-2 whitespace-nowrap ">Tab text</span>
 </div>
</li>
</ol>
</nav>
      </ComponentsView>

      <ComponentsView title='' link='' >
      <div class="w-full relative">
<nav class="flex" aria-label="Breadcrumb">
<ol class="inline-flex items-center ">
 <li class="inline-flex items-center">
   <a href="javascript:;" class="inline-flex items-center text-base font-medium  text-indigo-600 bg-indigo-50 py-2 px-5 rounded-full whitespace-nowrap">
     <svg class="w-5 h-5 text-indigo-600 mr-2" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
       <g clip-path="url(#clip0_11192_719)">
         <path d="M1.66663 4.99999C1.66663 3.15904 3.15901 1.66666 4.99996 1.66666C6.84091 1.66666 8.33329 3.15904 8.33329 4.99999C8.33329 6.84094 6.84091 8.33332 4.99996 8.33332C3.15901 8.33332 1.66663 6.84094 1.66663 4.99999Z" stroke="currentColor" stroke-width="1.6"></path>
         <path d="M1.66663 15C1.66663 13.4286 1.66663 12.643 2.15478 12.1548C2.64294 11.6667 3.42861 11.6667 4.99996 11.6667C6.57131 11.6667 7.35698 11.6667 7.84514 12.1548C8.33329 12.643 8.33329 13.4286 8.33329 15C8.33329 16.5713 8.33329 17.357 7.84514 17.8452C7.35698 18.3333 6.57131 18.3333 4.99996 18.3333C3.42861 18.3333 2.64294 18.3333 2.15478 17.8452C1.66663 17.357 1.66663 16.5713 1.66663 15Z" stroke="currentColor" stroke-width="1.6"></path>
         <path d="M11.6666 4.99999C11.6666 3.42864 11.6666 2.64297 12.1548 2.15481C12.6429 1.66666 13.4286 1.66666 15 1.66666C16.5713 1.66666 17.357 1.66666 17.8451 2.15481C18.3333 2.64297 18.3333 3.42864 18.3333 4.99999C18.3333 6.57134 18.3333 7.35701 17.8451 7.84517C17.357 8.33332 16.5713 8.33332 15 8.33332C13.4286 8.33332 12.6429 8.33332 12.1548 7.84517C11.6666 7.35701 11.6666 6.57134 11.6666 4.99999Z" stroke="currentColor" stroke-width="1.6"></path>
         <path d="M11.6666 15C11.6666 13.159 13.159 11.6667 15 11.6667C16.8409 11.6667 18.3333 13.159 18.3333 15C18.3333 16.8409 16.8409 18.3333 15 18.3333C13.159 18.3333 11.6666 16.8409 11.6666 15Z" stroke="currentColor" stroke-width="1.6"></path>
       </g>
       <defs>
         <clipPath id="clip0_11192_719">
           <rect width="20" height="20" fill="white"></rect>
         </clipPath>
       </defs>
     </svg> Tab text </a>
 </li>
 <li>
   <div class="flex items-center">
     <svg class=" w-1 h-5 mx-2" viewBox="0 0 5 20" fill="none" xmlns="http://www.w3.org/2000/svg">
       <path d="M4.12561 1.13672L0.999943 18.8633" stroke="#E5E7EB" stroke-width="1.6" stroke-linecap="round"></path>
     </svg>
     <a href="javascript:;" class="group text-base font-medium text-gray-900 hover:text-indigo-800 hover:bg-gray-100 py-2 px-5 rounded-full whitespace-nowrap"> Tab text <span class="py-1 px-2 bg-indigo-50 text-indigo-600 text-xs rounded-full ml-3 group-hover:bg-white">New</span>
     </a>
   </div>
 </li>
 <li aria-current="page">
   <div class="flex items-center">
     <svg class=" w-1 h-5 mx-2" viewBox="0 0 5 20" fill="none" xmlns="http://www.w3.org/2000/svg">
       <path d="M4.12561 1.13672L0.999943 18.8633" stroke="#E5E7EB" stroke-width="1.6" stroke-linecap="round"></path>
     </svg>
     <a href="javascript:;" class="text-base font-medium text-gray-900 py-2 px-5 rounded-full hover:bg-gray-100 hover:text-indigo-800 whitespace-nowrap">Tab text</a>
   </div>
 </li>
</ol>
</nav>
<nav class="flex mt-5" aria-label="Breadcrumb">
<ol class="inline-flex items-center ">
 <li class="inline-flex items-center">
   <a href="javascript:;" class="group inline-flex items-center text-base font-medium text-gray-900  hover:text-indigo-800 whitespace-nowrap">
     <svg class="w-5 h-5 mr-2 text-gray-900 group-hover:text-indigo-800" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
       <g clip-path="url(#clip0_11192_719)">
         <path d="M1.66663 4.99999C1.66663 3.15904 3.15901 1.66666 4.99996 1.66666C6.84091 1.66666 8.33329 3.15904 8.33329 4.99999C8.33329 6.84094 6.84091 8.33332 4.99996 8.33332C3.15901 8.33332 1.66663 6.84094 1.66663 4.99999Z" stroke="currentColor" stroke-width="1.6"></path>
         <path d="M1.66663 15C1.66663 13.4286 1.66663 12.643 2.15478 12.1548C2.64294 11.6667 3.42861 11.6667 4.99996 11.6667C6.57131 11.6667 7.35698 11.6667 7.84514 12.1548C8.33329 12.643 8.33329 13.4286 8.33329 15C8.33329 16.5713 8.33329 17.357 7.84514 17.8452C7.35698 18.3333 6.57131 18.3333 4.99996 18.3333C3.42861 18.3333 2.64294 18.3333 2.15478 17.8452C1.66663 17.357 1.66663 16.5713 1.66663 15Z" stroke="currentColor" stroke-width="1.6"></path>
         <path d="M11.6666 4.99999C11.6666 3.42864 11.6666 2.64297 12.1548 2.15481C12.6429 1.66666 13.4286 1.66666 15 1.66666C16.5713 1.66666 17.357 1.66666 17.8451 2.15481C18.3333 2.64297 18.3333 3.42864 18.3333 4.99999C18.3333 6.57134 18.3333 7.35701 17.8451 7.84517C17.357 8.33332 16.5713 8.33332 15 8.33332C13.4286 8.33332 12.6429 8.33332 12.1548 7.84517C11.6666 7.35701 11.6666 6.57134 11.6666 4.99999Z" stroke="currentColor" stroke-width="1.6"></path>
         <path d="M11.6666 15C11.6666 13.159 13.159 11.6667 15 11.6667C16.8409 11.6667 18.3333 13.159 18.3333 15C18.3333 16.8409 16.8409 18.3333 15 18.3333C13.159 18.3333 11.6666 16.8409 11.6666 15Z" stroke="currentColor" stroke-width="1.6"></path>
       </g>
       <defs>
         <clipPath id="clip0_11192_719">
           <rect width="20" height="20" fill="white"></rect>
         </clipPath>
       </defs>
     </svg>Tab text </a>
 </li>
 <li>
   <div class="flex items-center">
     <svg class=" w-1 h-5 mx-5" viewBox="0 0 5 20" fill="none" xmlns="http://www.w3.org/2000/svg">
       <path d="M4.12561 1.13672L0.999943 18.8633" stroke="#E5E7EB" stroke-width="1.6" stroke-linecap="round"></path>
     </svg>
     <span class="text-base font-medium text-gray-400 whitespace-nowrap "> Tab text</span>
   </div>
 </li>
 <li>
   <div class="flex items-center">
     <svg class=" w-1 h-5 mx-5" viewBox="0 0 5 20" fill="none" xmlns="http://www.w3.org/2000/svg">
       <path d="M4.12561 1.13672L0.999943 18.8633" stroke="#E5E7EB" stroke-width="1.6" stroke-linecap="round"></path>
     </svg>
     <span href="#" class="text-base font-medium text-gray-400 whitespace-nowrap "> Tab text</span>
   </div>
 </li>
 <li aria-current="page">
   <div class="flex items-center">
     <svg class=" w-1 h-5 mx-5" viewBox="0 0 5 20" fill="none" xmlns="http://www.w3.org/2000/svg">
       <path d="M4.12561 1.13672L0.999943 18.8633" stroke="#E5E7EB" stroke-width="1.6" stroke-linecap="round"></path>
     </svg>
     <span class="text-base font-medium text-gray-400  pr-2 rounded-full flex items-center whitespace-nowrap">Tab text <span class="py-1 px-2 bg-indigo-50  text-indigo-600 text-xs rounded-full ml-3">New</span>
     </span>
   </div>
 </li>
</ol>
</nav>
</div>
      </ComponentsView>

    </div>
  )
}

export default page