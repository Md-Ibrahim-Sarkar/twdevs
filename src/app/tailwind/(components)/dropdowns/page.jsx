import { ComponentsView } from '@/components/CodeViewBoxTwo/Index'

function page() {
  return (
    <div>
      <ComponentsView className='' title='' link=''>
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
  <body class='bg-gray-50 px-4 pt-5'>

     <div class="relative font-[sans-serif] w-max mx-auto">
      <button type="button" id="dropdownToggle"
        class="px-5 py-2.5 border border-gray-300 text-gray-800 text-sm outline-none bg-white hover:bg-gray-50">
        Dropdown menu
        <svg xmlns="http://www.w3.org/2000/svg" class="w-3 fill-gray-500 inline ml-3" viewBox="0 0 24 24">
          <path fill-rule="evenodd"
            d="M11.99997 18.1669a2.38 2.38 0 0 1-1.68266-.69733l-9.52-9.52a2.38 2.38 0 1 1 3.36532-3.36532l7.83734 7.83734 7.83734-7.83734a2.38 2.38 0 1 1 3.36532 3.36532l-9.52 9.52a2.38 2.38 0 0 1-1.68266.69734z"
            clip-rule="evenodd" data-original="#000000" />
        </svg>
      </button>

      <ul id="dropdownMenu" class='absolute hidden shadow-[0_8px_19px_-7px_rgba(6,81,237,0.2)] bg-white py-2 z-[1000] min-w-full w-max divide-y max-h-96 overflow-auto'>
        <li class='py-3 px-5 hover:bg-gray-50 text-gray-800 text-sm cursor-pointer'>Dropdown option</li>
        <li class='py-3 px-5 hover:bg-gray-50 text-gray-800 text-sm cursor-pointer'>Cloth set</li>
        <li class='py-3 px-5 hover:bg-gray-50 text-gray-800 text-sm cursor-pointer'>Sales details</li>
        <li class='py-3 px-5 hover:bg-gray-50 text-gray-800 text-sm cursor-pointer'>Marketing</li>
      </ul>
    </div>


    
          <script>
                    let dropdownToggle = document.getElementById('dropdownToggle');
                    let dropdownMenu = document.getElementById('dropdownMenu');

                    function handleClick() {
              if (dropdownMenu.className.includes('block')) {
                      dropdownMenu.classList.add('hidden')
                  dropdownMenu.classList.remove('block')
              } else {
                      dropdownMenu.classList.add('block')
                  dropdownMenu.classList.remove('hidden')
              }
          }

          dropdownToggle.addEventListener('click', handleClick);
        </script>


  </body>
</html>`}
          width="100%"
          height="250"
          style={{ border: "none" }}
        ></iframe>
      </ComponentsView>

      <ComponentsView className='' title='' link=''>
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
  <body class='bg-gray-50 px-4 pt-7'>

   <div class="relative font-[sans-serif] w-max mx-auto">
      <button type="button" id="dropdownToggle"
        class="px-5 py-2.5 rounded text-white text-sm font-semibold border-none outline-none bg-blue-600 hover:bg-blue-700 active:bg-blue-600">
        Dropdown menu with checkbox
        <svg xmlns="http://www.w3.org/2000/svg" class="w-3 fill-white inline ml-3" viewBox="0 0 24 24">
          <path fill-rule="evenodd"
            d="M11.99997 18.1669a2.38 2.38 0 0 1-1.68266-.69733l-9.52-9.52a2.38 2.38 0 1 1 3.36532-3.36532l7.83734 7.83734 7.83734-7.83734a2.38 2.38 0 1 1 3.36532 3.36532l-9.52 9.52a2.38 2.38 0 0 1-1.68266.69734z"
            clip-rule="evenodd" data-original="#000000" />
        </svg>
      </button>

      <ul id="dropdownMenu" class='absolute block shadow-lg bg-white py-2 px-2 z-[1000] min-w-full w-max rounded max-h-96 overflow-auto'>
        <li class="mb-2">
          <input placeholder="Search..."
            class="px-4 py-2.5 w-full rounded text-black text-sm border-none outline-blue-600 bg-gray-50 focus:bg-transparent" />
        </li>
        <li class='py-2.5 px-4 hover:bg-blue-50 rounded text-black text-sm cursor-pointer'>
          <div class="flex items-center">
            <input id="checkbox1" type="checkbox" class="hidden peer" checked />
            <label for="checkbox1"
              class="relative mr-3 flex items-center justify-center p-1 peer-checked:before:hidden before:block before:absolute before:w-full before:h-full before:bg-white w-5 h-5 cursor-pointer bg-blue-600 border rounded overflow-hidden">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-full fill-white" viewBox="0 0 520 520">
                <path
                  d="M79.423 240.755a47.529 47.529 0 0 0-36.737 77.522l120.73 147.894a43.136 43.136 0 0 0 36.066 16.009c14.654-.787 27.884-8.626 36.319-21.515L486.588 56.773a6.13 6.13 0 0 1 .128-.2c2.353-3.613 1.59-10.773-3.267-15.271a13.321 13.321 0 0 0-19.362 1.343q-.135.166-.278.327L210.887 328.736a10.961 10.961 0 0 1-15.585.843l-83.94-76.386a47.319 47.319 0 0 0-31.939-12.438z"
                  data-name="7-Check" data-original="#000000" />
              </svg>
            </label>
            Dropdown option
          </div>
        </li>
        <li class='py-2.5 px-4 hover:bg-blue-50 rounded text-black text-sm cursor-pointer'>
          <div class="flex items-center">
            <input id="checkbox2" type="checkbox" class="hidden peer" />
            <label for="checkbox2"
              class="relative mr-3 flex items-center justify-center p-1 peer-checked:before:hidden before:block before:absolute before:w-full before:h-full before:bg-white w-5 h-5 cursor-pointer bg-blue-600 border rounded overflow-hidden">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-full fill-white" viewBox="0 0 520 520">
                <path
                  d="M79.423 240.755a47.529 47.529 0 0 0-36.737 77.522l120.73 147.894a43.136 43.136 0 0 0 36.066 16.009c14.654-.787 27.884-8.626 36.319-21.515L486.588 56.773a6.13 6.13 0 0 1 .128-.2c2.353-3.613 1.59-10.773-3.267-15.271a13.321 13.321 0 0 0-19.362 1.343q-.135.166-.278.327L210.887 328.736a10.961 10.961 0 0 1-15.585.843l-83.94-76.386a47.319 47.319 0 0 0-31.939-12.438z"
                  data-name="7-Check" data-original="#000000" />
              </svg>
            </label>
            Cloth set
          </div>
        </li>
        <li class='py-2.5 px-4 hover:bg-blue-50 rounded text-black text-sm cursor-pointer'>
          <div class="flex items-center">
            <input id="checkbox3" type="checkbox" class="hidden peer" />
            <label for="checkbox3"
              class="relative mr-3 flex items-center justify-center p-1 peer-checked:before:hidden before:block before:absolute before:w-full before:h-full before:bg-white w-5 h-5 cursor-pointer bg-blue-600 border rounded overflow-hidden">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-full fill-white" viewBox="0 0 520 520">
                <path
                  d="M79.423 240.755a47.529 47.529 0 0 0-36.737 77.522l120.73 147.894a43.136 43.136 0 0 0 36.066 16.009c14.654-.787 27.884-8.626 36.319-21.515L486.588 56.773a6.13 6.13 0 0 1 .128-.2c2.353-3.613 1.59-10.773-3.267-15.271a13.321 13.321 0 0 0-19.362 1.343q-.135.166-.278.327L210.887 328.736a10.961 10.961 0 0 1-15.585.843l-83.94-76.386a47.319 47.319 0 0 0-31.939-12.438z"
                  data-name="7-Check" data-original="#000000" />
              </svg>
            </label>
            Sales details
          </div>
        </li>
        <li class='py-2.5 px-4 hover:bg-blue-50 rounded text-black text-sm cursor-pointer'>
          <div class="flex items-center">
            <input id="checkbox4" type="checkbox" class="hidden peer" />
            <label for="checkbox4"
              class="relative mr-3 flex items-center justify-center p-1 peer-checked:before:hidden before:block before:absolute before:w-full before:h-full before:bg-white w-5 h-5 cursor-pointer bg-blue-600 border rounded overflow-hidden">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-full fill-white" viewBox="0 0 520 520">
                <path
                  d="M79.423 240.755a47.529 47.529 0 0 0-36.737 77.522l120.73 147.894a43.136 43.136 0 0 0 36.066 16.009c14.654-.787 27.884-8.626 36.319-21.515L486.588 56.773a6.13 6.13 0 0 1 .128-.2c2.353-3.613 1.59-10.773-3.267-15.271a13.321 13.321 0 0 0-19.362 1.343q-.135.166-.278.327L210.887 328.736a10.961 10.961 0 0 1-15.585.843l-83.94-76.386a47.319 47.319 0 0 0-31.939-12.438z"
                  data-name="7-Check" data-original="#000000" />
              </svg>
            </label>
            Marketing
          </div>
        </li>
      </ul>
    </div>


     <script>
                  let dropdownToggle = document.getElementById('dropdownToggle');
          let dropdownMenu = document.getElementById('dropdownMenu');

          function handleClick() {
              if (dropdownMenu.className.includes('block')) {
                  dropdownMenu.classList.add('hidden')
                  dropdownMenu.classList.remove('block')
              } else {
                  dropdownMenu.classList.add('block')
                  dropdownMenu.classList.remove('hidden')
              }
          }

          dropdownToggle.addEventListener('click', handleClick);
        </script>



  </body>
</html>`}
                width="100%"
                height="400"
                style={{ border: "none" }}
            ></iframe>
      </ComponentsView>

      <ComponentsView className='' title='' link=''>
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
  <body class='bg-gray-50 px-4 pt-4'>

   <div class="relative font-[sans-serif] w-max mx-auto">
      <button type="button" id="dropdownToggle"
        class="w-12 h-12 flex items-center justify-center rounded-full text-white border-none outline-none bg-blue-600 hover:bg-blue-700">
        <svg xmlns="http://www.w3.org/2000/svg" width="18px" class="cursor-pointer fill-[#fff]"
          viewBox="0 0 371.263 371.263">
          <path
            d="M305.402 234.794v-70.54c0-52.396-33.533-98.085-79.702-115.151.539-2.695.838-5.449.838-8.204C226.539 18.324 208.215 0 185.64 0s-40.899 18.324-40.899 40.899c0 2.695.299 5.389.778 7.964-15.868 5.629-30.539 14.551-43.054 26.647-23.593 22.755-36.587 53.354-36.587 86.169v73.115c0 2.575-2.096 4.731-4.731 4.731-22.096 0-40.959 16.647-42.995 37.845-1.138 11.797 2.755 23.533 10.719 32.276 7.904 8.683 19.222 13.713 31.018 13.713h72.217c2.994 26.887 25.869 47.905 53.534 47.905s50.54-21.018 53.534-47.905h72.217c11.797 0 23.114-5.03 31.018-13.713 7.904-8.743 11.797-20.479 10.719-32.276-2.036-21.198-20.958-37.845-42.995-37.845a4.704 4.704 0 0 1-4.731-4.731zM185.64 23.952c9.341 0 16.946 7.605 16.946 16.946 0 .778-.12 1.497-.24 2.275-4.072-.599-8.204-1.018-12.336-1.138-7.126-.24-14.132.24-21.078 1.198-.12-.778-.24-1.497-.24-2.275.002-9.401 7.607-17.006 16.948-17.006zm0 323.358c-14.431 0-26.527-10.3-29.342-23.952h58.683c-2.813 13.653-14.909 23.952-29.341 23.952zm143.655-67.665c.479 5.15-1.138 10.12-4.551 13.892-3.533 3.773-8.204 5.868-13.353 5.868H59.89c-5.15 0-9.82-2.096-13.294-5.868-3.473-3.772-5.09-8.743-4.611-13.892.838-9.042 9.282-16.168 19.162-16.168 15.809 0 28.683-12.874 28.683-28.683v-73.115c0-26.228 10.419-50.719 29.282-68.923 18.024-17.425 41.498-26.887 66.528-26.887 1.198 0 2.335 0 3.533.06 50.839 1.796 92.277 45.929 92.277 98.325v70.54c0 15.809 12.874 28.683 28.683 28.683 9.88 0 18.264 7.126 19.162 16.168z"
            data-original="#000000"></path>
        </svg>
      </button>

      <div id="dropdownMenu" class='absolute block right-0 shadow-lg bg-white py-4 z-[1000] min-w-full rounded-lg w-[410px] max-h-[500px] overflow-auto mt-2'>
        <div class="flex items-center justify-between px-4 mb-4">
          <p class="text-xs text-blue-600 cursor-pointer">Clear all</p>
          <p class="text-xs text-blue-600 cursor-pointer">Mark as read</p>
        </div>

        <ul class="divide-y">
          <li class='p-4 flex items-center hover:bg-gray-50 cursor-pointer'>
            <img src="https://readymadeui.com/profile_2.webp" class="w-12 h-12 rounded-full shrink-0" />

            <div class="ml-6">
              <h3 class="text-sm text-[#333] font-semibold">Your have a new message from Yin</h3>
              <p class="text-xs text-gray-500 mt-2">Hello there, check this new items in from the your may interested from
                the motion school.</p>
              <p class="text-xs text-blue-600 leading-3 mt-2">10 minutes ago</p>
            </div>
          </li>

          <li class='p-4 flex items-center hover:bg-gray-50 cursor-pointer'>
            <img src="https://readymadeui.com/team-2.webp" class="w-12 h-12 rounded-full shrink-0" />

            <div class="ml-6">
              <h3 class="text-sm text-[#333] font-semibold">Your have a new message from Haper</h3>
              <p class="text-xs text-gray-500 mt-2">Hello there, check this new items in from the your may interested from
                the motion school.</p>
              <p class="text-xs text-blue-600 leading-3 mt-2">2 hours ago</p>
            </div>
          </li>

          <li class='p-4 flex items-center hover:bg-gray-50 cursor-pointer'>
            <img src="https://readymadeui.com/team-3.webp" class="w-12 h-12 rounded-full shrink-0" />

            <div class="ml-6">
              <h3 class="text-sm text-[#333] font-semibold">Your have a new message from San</h3>
              <p class="text-xs text-gray-500 mt-2">Hello there, check this new items in from the your may interested from
                the motion school.</p>
              <p class="text-xs text-blue-600 leading-3 mt-2">1 day ago</p>
            </div>
          </li>

          <li class='p-4 flex items-center hover:bg-gray-50 cursor-pointer'>
            <img src="https://readymadeui.com/team-4.webp" class="w-12 h-12 rounded-full shrink-0" />

            <div class="ml-6">
              <h3 class="text-sm text-[#333] font-semibold">Your have a new message from Seeba</h3>
              <p class="text-xs text-gray-500 mt-2">Hello there, check this new items in from the your may interested from
                the motion school.</p>
              <p class="text-xs text-blue-600 leading-3 mt-2">30 minutes ago</p>
            </div>
          </li>
        </ul>
        <p class="text-xs px-4 mt-6 mb-4 inline-block text-blue-600 cursor-pointer">View all Notifications</p>
      </div>
    </div>


     <script>
        let dropdownToggle = document.getElementById('dropdownToggle');
          let dropdownMenu = document.getElementById('dropdownMenu');

          function handleClick() {
              if (dropdownMenu.className.includes('block')) {
                  dropdownMenu.classList.add('hidden')
                  dropdownMenu.classList.remove('block')
              } else {
                  dropdownMenu.classList.add('block')
                  dropdownMenu.classList.remove('hidden')
              }
          }

          dropdownToggle.addEventListener('click', handleClick);
        </script>



  </body>
</html>`}
                width="100%"
                height="600"
                style={{ border: "none" }}
            ></iframe>
      </ComponentsView>

      <ComponentsView className='' title='' link=''>
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
  <body class='bg-gray-50 px-4 pt-4'>

  <div class="relative font-[sans-serif] w-max mx-auto">
      <button type="button" id="dropdownToggle"
        class="px-6 py-3 rounded-lg text-white text-sm tracking-wide border-none outline-none bg-blue-600 hover:bg-blue-700 active:bg-blue-600">
        Multi Section Dropdown
        <svg xmlns="http://www.w3.org/2000/svg" class="w-3 fill-white inline ml-3" viewBox="0 0 24 24">
          <path fill-rule="evenodd"
            d="M11.99997 18.1669a2.38 2.38 0 0 1-1.68266-.69733l-9.52-9.52a2.38 2.38 0 1 1 3.36532-3.36532l7.83734 7.83734 7.83734-7.83734a2.38 2.38 0 1 1 3.36532 3.36532l-9.52 9.52a2.38 2.38 0 0 1-1.68266.69734z"
            clip-rule="evenodd" data-original="#000000" />
        </svg>
      </button>

      <div id="dropdownMenu" class='absolute block p-4 shadow-xl bg-white z-[1000] w-max rounded-lg max-h-96 overflow-auto min-w-[300px] '>
        <input placeholder="Search.."
          class="px-4 py-3 w-full rounded-lg text-black text-sm border-none outline-blue-600 bg-gray-50 focus:bg-transparent" />

        <h3 class="text-sm text-blue-600 font-semibold mt-4 mb-2">Recent list</h3>
        <ul>
          <li class='flex items-center py-3 px-4 hover:bg-gray-50 text-black text-sm cursor-pointer rounded-lg'>
            <svg xmlns="http://www.w3.org/2000/svg" width="18px" height="18px" class="mr-3 inline-block"
              viewBox="0 0 64 64">
              <path
                d="M61.92 30.93a7.076 7.076 0 0 0-6.05-5.88 8.442 8.442 0 0 0-.87-.04V22A15.018 15.018 0 0 0 40 7H24A15.018 15.018 0 0 0 9 22v3.01a8.442 8.442 0 0 0-.87.04 7.076 7.076 0 0 0-6.05 5.88A6.95 6.95 0 0 0 7 38.7V52a3.009 3.009 0 0 0 3 3v6a1 1 0 0 0 1 1h3a1 1 0 0 0 .96-.73L16.75 55h30.5l1.79 6.27A1 1 0 0 0 50 62h3a1 1 0 0 0 1-1v-6a3.009 3.009 0 0 0 3-3V38.7a6.95 6.95 0 0 0 4.92-7.77ZM11 22A13.012 13.012 0 0 1 24 9h16a13.012 13.012 0 0 1 13 13v3.3a6.976 6.976 0 0 0-5 6.7v3.18a3 3 0 0 0-1-.18H17a3 3 0 0 0-1 .18V32a6.976 6.976 0 0 0-5-6.7Zm37 16v5H16v-5a1 1 0 0 1 1-1h30a1 1 0 0 1 1 1ZM13.25 60H12v-5h2.67ZM52 60h-1.25l-1.42-5H52Zm3.83-23.08a1.008 1.008 0 0 0-.83.99V52a1 1 0 0 1-1 1H10a1 1 0 0 1-1-1V37.91a1.008 1.008 0 0 0-.83-.99 4.994 4.994 0 0 1 .2-9.88A4.442 4.442 0 0 1 9 27h.01a4.928 4.928 0 0 1 3.3 1.26A5.007 5.007 0 0 1 14 32v12a1 1 0 0 0 1 1h34a1 1 0 0 0 1-1V32a5.007 5.007 0 0 1 1.69-3.74 4.932 4.932 0 0 1 3.94-1.22 5.018 5.018 0 0 1 4.31 4.18v.01a4.974 4.974 0 0 1-4.11 5.69Z"
                data-original="#000000" />
            </svg>
            Furniture Store
          </li>
          <li class='flex items-center py-3 px-4 hover:bg-gray-50 text-black text-sm cursor-pointer rounded-lg'>
            <svg xmlns="http://www.w3.org/2000/svg" width="18px" height="18px" class="mr-3 inline-block"
              viewBox="0 0 1700 1700">
              <path
                d="M916.7 1269.4c-10.7 0-20.4-7.2-23.2-18l-29.9-114.7c-3.3-12.8 4.3-25.9 17.2-29.3 12.8-3.3 25.9 4.3 29.3 17.2l29.9 114.7c3.3 12.8-4.3 25.9-17.2 29.3-2 .5-4.1.8-6.1.8zm-169.4 0c-2 0-4-.3-6.1-.8-12.8-3.3-20.5-16.4-17.2-29.3l29.9-114.7c3.3-12.8 16.4-20.5 29.3-17.2 12.8 3.3 20.5 16.4 17.2 29.3l-29.9 114.7c-2.8 10.8-12.6 18-23.2 18z"
                data-original="#000000" />
              <path
                d="M1066.6 1358.8H597.4c-13.3 0-24-10.7-24-24 0-62.6 50.9-113.5 113.5-113.5h290.4c62.6 0 113.5 50.9 113.5 113.5-.2 13.3-10.9 24-24.2 24zm-440.7-48H1038c-9.6-24.3-33.3-41.5-60.9-41.5H686.8c-27.6.1-51.3 17.3-60.9 41.5zM276.4 762.7c-13.3 0-24-10.7-24-24V395c0-29.7 24.2-53.9 53.9-53.9h1051.4c29.7 0 53.9 24.2 53.9 53.9v297.8c0 13.3-10.7 24-24 24s-24-10.7-24-24V395c0-3.2-2.6-5.9-5.9-5.9H306.3c-3.2 0-5.9 2.6-5.9 5.9v343.7c0 13.2-10.7 24-24 24zm904.5 392H446.5c-13.3 0-24-10.7-24-24s10.7-24 24-24h734.3c13.3 0 24 10.7 24 24s-10.6 24-23.9 24zm0-120.8H446.5c-13.3 0-24-10.7-24-24s10.7-24 24-24h734.3c13.3 0 24 10.7 24 24s-10.6 24-23.9 24z"
                data-original="#000000" />
              <path
                d="M424.1 1358.8H128.4c-25.6 0-46.4-20.8-46.4-46.4V761.1c0-25.6 20.8-46.4 46.4-46.4h295.7c25.6 0 46.4 20.8 46.4 46.4v551.3c0 25.6-20.8 46.4-46.4 46.4zm-294.1-48h292.5V762.7H130z"
                data-original="#000000" />
              <path
                d="M446.5 853.6H106c-13.3 0-24-10.7-24-24s10.7-24 24-24h340.5c13.3 0 24 10.7 24 24s-10.7 24-24 24zm0 414.4H106c-13.3 0-24-10.7-24-24s10.7-24 24-24h340.5c13.3 0 24 10.7 24 24s-10.7 24-24 24zm1125.1 90.8h-368.3c-25.6 0-46.4-20.8-46.4-46.4V715.2c0-25.6 20.8-46.4 46.4-46.4h368.3c25.6 0 46.4 20.8 46.4 46.4v597.2c0 25.6-20.8 46.4-46.4 46.4zm-366.7-48H1570v-594h-365.1z"
                data-original="#000000" />
              <path
                d="M1594 811.8h-413.1c-13.3 0-24-10.7-24-24s10.7-24 24-24H1594c13.3 0 24 10.7 24 24s-10.7 24-24 24zm0 452h-413.1c-13.3 0-24-10.7-24-24s10.7-24 24-24H1594c13.3 0 24 10.7 24 24s-10.7 24-24 24z"
                data-original="#000000" />
            </svg>
            Electronic Store
          </li>
        </ul>

        <hr class="my-4" />

        <h3 class="text-sm text-blue-600 font-semibold mt-4 mb-2">Collections</h3>
        <ul>
          <li class='flex items-center py-3 px-4 hover:bg-gray-50 text-black text-sm cursor-pointer rounded-lg'>
            <svg xmlns="http://www.w3.org/2000/svg" width="18px" height="18px" class="mr-3 inline-block"
              viewBox="0 0 407.7 407.7">
              <path
                d="M405.5 118.021a7.93 7.93 0 0 0-.29-.29l-84.16-74.8a7.994 7.994 0 0 0-2.64-1.6l-60.88-21.76a8 8 0 0 0-10.72 7.12c0 1.76-2.64 42.32-43.2 42.96-40.8-.64-43.36-41.2-43.44-42.96a8 8 0 0 0-10.64-7.12l-60.8 22c-.976.357-1.872.9-2.64 1.6l-83.6 74.56a8 8 0 0 0 0 11.6l66.56 67.28v184a8 8 0 0 0 8 8h253.6a8 8 0 0 0 8-8v-184l66.56-67.28a8 8 0 0 0 .29-11.31zm-67.09 55.79v-37.12a8 8 0 0 0-16 0v235.52H84.73v-235.52a8 8 0 0 0-16 0v37.2l-49.2-49.84 76.16-68.16 50.08-18.08c6.204 31.966 37.147 52.851 69.113 46.647 23.607-4.582 42.065-23.04 46.647-46.647l50.08 18.08 75.92 68.16-49.12 49.76z"
                data-original="#000000" />
            </svg>
            Fashion Store
          </li>
          <li class='flex items-center py-3 px-4 hover:bg-gray-50 text-black text-sm cursor-pointer rounded-lg'>
            <svg xmlns="http://www.w3.org/2000/svg" width="18px" height="18px" class="mr-2 inline-block"
              viewBox="0 0 512 512">
              <path
                d="M434.1 243.904h-5.955a95.572 95.572 0 0 1-61.022-22.072l-117.812-98.055a49.716 49.716 0 0 0-31.743-11.481c-27.361 0-49.621 22.26-49.621 49.621v11.586c0 22.572-18.364 40.937-40.937 40.937-15.844 0-30.407-9.279-37.102-23.639l-3.261-6.995c-7.434-15.944-23.604-26.246-41.195-26.246C20.39 157.56 0 177.949 0 203.012v118.792c0 42.954 34.946 77.9 77.9 77.9h356.2c42.954 0 77.9-34.946 77.9-77.9 0-42.954-34.946-77.9-77.9-77.9zm0 125.8H77.9c-17.829 0-33.403-9.799-41.65-24.287h439.5c-8.247 14.488-23.821 24.287-41.65 24.287zM30 315.419V203.012c0-8.521 6.932-15.452 15.452-15.452 5.98 0 11.478 3.503 14.005 8.923l3.261 6.994c11.601 24.884 36.837 40.963 64.293 40.963 39.115 0 70.937-31.822 70.937-70.937v-11.586c0-10.819 8.802-19.621 19.621-19.621a19.66 19.66 0 0 1 12.552 4.54l28.901 24.055-32.93 32.93 21.213 21.213 34.872-34.871 13.031 10.846-31.444 31.444 21.213 21.213 33.386-33.385 13.031 10.846-29.958 29.958 21.213 21.213 32.115-32.115c21.284 15.35 47.024 23.723 73.383 23.723h5.955c24.246 0 44.328 18.112 47.461 41.513H30z"
                data-original="#000000" />
            </svg>
            Shoes Store
          </li>
          <li class='flex items-center py-3 px-4 hover:bg-gray-50 text-black text-sm cursor-pointer rounded-lg'>
            <svg xmlns="http://www.w3.org/2000/svg" width="18px" height="18px" class="mr-3 inline-block"
              viewBox="0 0 64 64">
              <path
                d="M61.92 30.93a7.076 7.076 0 0 0-6.05-5.88 8.442 8.442 0 0 0-.87-.04V22A15.018 15.018 0 0 0 40 7H24A15.018 15.018 0 0 0 9 22v3.01a8.442 8.442 0 0 0-.87.04 7.076 7.076 0 0 0-6.05 5.88A6.95 6.95 0 0 0 7 38.7V52a3.009 3.009 0 0 0 3 3v6a1 1 0 0 0 1 1h3a1 1 0 0 0 .96-.73L16.75 55h30.5l1.79 6.27A1 1 0 0 0 50 62h3a1 1 0 0 0 1-1v-6a3.009 3.009 0 0 0 3-3V38.7a6.95 6.95 0 0 0 4.92-7.77ZM11 22A13.012 13.012 0 0 1 24 9h16a13.012 13.012 0 0 1 13 13v3.3a6.976 6.976 0 0 0-5 6.7v3.18a3 3 0 0 0-1-.18H17a3 3 0 0 0-1 .18V32a6.976 6.976 0 0 0-5-6.7Zm37 16v5H16v-5a1 1 0 0 1 1-1h30a1 1 0 0 1 1 1ZM13.25 60H12v-5h2.67ZM52 60h-1.25l-1.42-5H52Zm3.83-23.08a1.008 1.008 0 0 0-.83.99V52a1 1 0 0 1-1 1H10a1 1 0 0 1-1-1V37.91a1.008 1.008 0 0 0-.83-.99 4.994 4.994 0 0 1 .2-9.88A4.442 4.442 0 0 1 9 27h.01a4.928 4.928 0 0 1 3.3 1.26A5.007 5.007 0 0 1 14 32v12a1 1 0 0 0 1 1h34a1 1 0 0 0 1-1V32a5.007 5.007 0 0 1 1.69-3.74 4.932 4.932 0 0 1 3.94-1.22 5.018 5.018 0 0 1 4.31 4.18v.01a4.974 4.974 0 0 1-4.11 5.69Z"
                data-original="#000000" />
            </svg>
            Furniture Store
          </li>
        </ul>
      </div>
    </div>


     <script>
         let dropdownToggle = document.getElementById('dropdownToggle');
let dropdownMenu = document.getElementById('dropdownMenu');

function handleClick() {
    if (dropdownMenu.className.includes('block')) {
        dropdownMenu.classList.add('hidden')
        dropdownMenu.classList.remove('block')
    } else {
        dropdownMenu.classList.add('block')
        dropdownMenu.classList.remove('hidden')
    }
}

dropdownToggle.addEventListener('click', handleClick);
        </script>



  </body>
</html>`}
                width="100%"
                height="500"
                style={{ border: "none" }}
            ></iframe>
      </ComponentsView>
    </div>
  )
}

export default page