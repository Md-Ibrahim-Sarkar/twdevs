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
  <body class='bg-gray-50 px-4'>
<div
    id="modal"
    class="fixed inset-0 hidden p-4 flex flex-wrap justify-center items-center w-full h-full z-[1000] before:fixed before:inset-0 before:w-full before:h-full before:bg-[rgba(0,0,0,0.5)] overflow-auto font-[sans-serif]">
    <div class="w-full max-w-lg bg-white shadow-lg rounded-lg p-6 relative">
        <div class="flex items-center pb-3 border-b border-gray-300">
            <h3 class="text-gray-800 text-xl font-bold flex-1">Modal Title</h3>
            <svg id="closeModal" xmlns="http://www.w3.org/2000/svg" class="w-3 ml-2 cursor-pointer shrink-0 fill-gray-400 hover:fill-red-500"
                viewBox="0 0 320.591 320.591">
                <path
                    d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z"
                    data-original="#000000"></path>
                <path
                    d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z"
                    data-original="#000000"></path>
            </svg>
        </div>

        <div class="my-6">
            <p class="text-gray-600 text-sm leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor auctor arcu, at fermentum dui. Maecenas Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor auctor arcu, at fermentum dui. Maecenas.</p>
            <p class="text-gray-600 text-sm leading-relaxed mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor auctor arcu, at fermentum dui. Maecenas Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor auctor arcu, at fermentum dui. Maecenas.</p>
            <p class="text-gray-600 text-sm leading-relaxed mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor auctor arcu, at fermentum dui. Maecenas Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor auctor arcu, at fermentum dui. Maecenas.</p>
        </div>

        <div class="border-t border-gray-300 pt-6 flex justify-end gap-4">
            <button type="button"
                class="px-4 py-2 rounded-lg text-gray-800 text-sm border-none outline-none tracking-wide bg-gray-200 hover:bg-gray-300 active:bg-gray-200" id="cancelButton">Close</button>
            <button type="button"
                class="px-4 py-2 rounded-lg text-black text-sm border-none outline-none tracking-wide bg-blue-600 hover:bg-blue-700 active:bg-blue-600">Save</button>
        </div>
    </div>
</div>

<div class="flex justify-center items-center w-full pt-8">
<button id="openModal" class="bg-blue-600 text-black px-4 py-2 rounded-lg">Open Modal</button>
</div>


<script>
// Select elements
const modal = document.getElementById('modal');
const openModalBtn = document.getElementById('openModal');
const closeModalBtn = document.getElementById('closeModal');
const cancelButton = document.getElementById('cancelButton');

// Function to show the modal
function showModal() {
    modal.classList.remove('hidden');
}

// Function to hide the modal
function hideModal() {
    modal.classList.add('hidden');
}

// Event listeners to open and close the modal
openModalBtn.addEventListener('click', showModal);
closeModalBtn.addEventListener('click', hideModal);
cancelButton.addEventListener('click', hideModal);

</script>

  </body>
</html>`}
          width="100%"
          height="550"
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
  <body class='bg-gray-50 px-4'>

    <div
    id="modal"
    class="fixed inset-0 p-4 flex flex-wrap justify-center items-center w-full h-full z-[1000] before:fixed before:inset-0 before:w-full before:h-full before:bg-[rgba(0,0,0,0.5)] overflow-auto font-[sans-serif] hidden">
    <div class="w-full max-w-lg bg-white shadow-lg rounded-lg p-6 relative">
                <div class="flex items-center pb-3 border-b border-gray-200">
                    <div class="flex-1">
                        <h3 class="text-gray-800 text-xl font-bold">Upload File</h3>
                        <p class="text-gray-600 text-xs mt-1">Upload file to this project</p>
                    </div>

                    <svg id="closeModal" xmlns="http://www.w3.org/2000/svg" class="w-3 ml-2 cursor-pointer shrink-0 fill-gray-400 hover:fill-red-500"
                        viewBox="0 0 320.591 320.591">
                        <path
                            d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z"
                            data-original="#000000"></path>
                        <path
                            d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z"
                            data-original="#000000"></path>
                    </svg>
                </div>

                <div class="rounded-lg border-2 border-gray-200 border-dashed mt-6">
                    <div class="p-4 min-h-[180px] flex flex-col items-center justify-center text-center cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-10 mb-4 fill-gray-600 inline-block" viewBox="0 0 32 32">
                            <path
                                d="M23.75 11.044a7.99 7.99 0 0 0-15.5-.009A8 8 0 0 0 9 27h3a1 1 0 0 0 0-2H9a6 6 0 0 1-.035-12 1.038 1.038 0 0 0 1.1-.854 5.991 5.991 0 0 1 11.862 0A1.08 1.08 0 0 0 23 13a6 6 0 0 1 0 12h-3a1 1 0 0 0 0 2h3a8 8 0 0 0 .75-15.956z"
                                data-original="#000000" />
                            <path
                                d="M20.293 19.707a1 1 0 0 0 1.414-1.414l-5-5a1 1 0 0 0-1.414 0l-5 5a1 1 0 0 0 1.414 1.414L15 16.414V29a1 1 0 0 0 2 0V16.414z"
                                data-original="#000000" />
                        </svg>

                        <h4 class="text-sm text-gray-600">Drag & Drop or <label for="chooseFile" class="text-blue-600 cursor-pointer">Choose file</label> to upload</h4>
                        <input type="file" id="chooseFile" class="hidden" />
                    </div>
                </div>

                <div class="flex flex-col bg-gray-50 p-4 rounded-lg mt-4">
                    <div class="flex">
                        <p class="text-xs text-gray-600 flex-1">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="w-5 mr-2 fill-current inline-block">
                                <path d="m433.798 106.268-96.423-91.222C327.119 5.343 313.695 0 299.577 0H116C85.673 0 61 24.673 61 55v402c0 30.327 24.673 55 55 55h280c30.327 0 55-24.673 55-55V146.222c0-15.049-6.27-29.612-17.202-39.954zM404.661 120H330c-2.757 0-5-2.243-5-5V44.636zM396 482H116c-13.785 0-25-11.215-25-25V55c0-13.785 11.215-25 25-25h179v85c0 19.299 15.701 35 35 35h91v307c0 13.785-11.215 25-25 25z" data-original="#000000" />
                                <path d="M363 200H143c-8.284 0-15 6.716-15 15s6.716 15 15 15h220c8.284 0 15-6.716 15-15s-6.716-15-15-15zm0 80H143c-8.284 0-15 6.716-15 15s6.716 15 15 15h220c8.284 0 15-6.716 15-15s-6.716-15-15-15zm-147.28 80H143c-8.284 0-15 6.716-15 15s6.716 15 15 15h72.72c8.284 0 15-6.716 15-15s-6.716-15-15-15z" data-original="#000000" />
                            </svg>
                            document.file <span class="ml-2">1.5 mb</span>
                        </p>
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-3 cursor-pointer shrink-0 fill-gray-400 hover:fill-red-500"
                            viewBox="0 0 320.591 320.591">
                            <path
                                d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z"
                                data-original="#000000"></path>
                            <path
                                d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z"
                                data-original="#000000"></path>
                        </svg>
                    </div>

                    <div class="bg-gray-300 rounded-full w-full h-2 my-2">
                        <div class="w-1/3 h-full rounded-full bg-blue-600 flex items-center relative">
                            <span class="absolute text-xs right-0 bg-white w-2 h-2 rounded-full"></span>
                        </div>
                    </div>

                    <p class="text-xs text-gray-600 flex-1">35% done</p>
                </div>

                <div class="border-t border-gray-200 pt-6 flex justify-between gap-4 mt-6">
                    <button  id="cancelButton" type="button"
                class="w-full px-4 py-2 rounded-lg text-gray-800 text-sm border-none outline-none tracking-wide bg-gray-200 hover:bg-gray-300 active:bg-gray-200">Cancel</button>
                    <button type="button"
                        class="w-full px-4 py-2 rounded-lg text-black text-sm border-none outline-none tracking-wide bg-blue-600 hover:bg-blue-700 active:bg-blue-600">Import</button>
                </div>
            </div>
</div>

<div class="flex justify-center items-center w-full pt-8">
<button id="openModal" class="bg-blue-600 text-black px-4 py-2 rounded-lg">Open Modal</button>
</div>


<script>
  // Select elements
const modal = document.getElementById('modal');
const openModalBtn = document.getElementById('openModal');
const closeModalBtn = document.getElementById('closeModal');
const cancelButton = document.getElementById('cancelButton');

// Function to show modal
function showModal() {
    modal.classList.remove('hidden');
}

// Function to hide modal
function hideModal() {
    modal.classList.add('hidden');
}

// Event listeners
openModalBtn.addEventListener('click', showModal);
closeModalBtn.addEventListener('click', hideModal);
cancelButton.addEventListener('click', hideModal);

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
  <body class='bg-gray-50 px-4'>

   <div id="modal"
    class="fixed inset-0 hidden p-4 flex flex-wrap justify-center items-center w-full h-full z-[1000] before:fixed before:inset-0 before:w-full before:h-full before:bg-[rgba(0,0,0,0.5)] overflow-auto font-[sans-serif]">
    <div class="w-full max-w-md bg-white shadow-lg rounded-xl p-6 relative">
        <svg id="closeModal" xmlns="http://www.w3.org/2000/svg"
            class="w-3.5 cursor-pointer shrink-0 fill-gray-400 hover:fill-red-500 float-right" viewBox="0 0 320.591 320.591">
            <path
                d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z"
                data-original="#000000"></path>
            <path
                d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z"
                data-original="#000000"></path>
        </svg>

        <div class="my-8 text-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-14 fill-red-500 inline" viewBox="0 0 286.054 286.054">
                <path fill="#e2574c"
                    d="M143.027 0C64.04 0 0 64.04 0 143.027c0 78.996 64.04 143.027 143.027 143.027 78.996 0 143.027-64.022 143.027-143.027C286.054 64.04 222.022 0 143.027 0zm0 259.236c-64.183 0-116.209-52.026-116.209-116.209S78.844 26.818 143.027 26.818s116.209 52.026 116.209 116.209-52.026 116.209-116.209 116.209zm.009-196.51c-10.244 0-17.995 5.346-17.995 13.981v79.201c0 8.644 7.75 13.972 17.995 13.972 9.994 0 17.995-5.551 17.995-13.972V76.707c-.001-8.43-8.001-13.981-17.995-13.981zm0 124.997c-9.842 0-17.852 8.01-17.852 17.86 0 9.833 8.01 17.843 17.852 17.843s17.843-8.01 17.843-17.843c-.001-9.851-8.001-17.86-17.843-17.86z"
                    data-original="#e2574c" />
            </svg>

            <h4 class="text-lg text-gray-800 font-semibold mt-6">Your account will be deleted permanently!</h4>
            <p class="text-sm text-gray-500 mt-2">Are you sure to proceed?</p>
        </div>

        <div class="flex max-sm:flex-col gap-4">
            <button type="button"
                class="px-5 py-2.5 rounded-lg w-full tracking-wide text-gray-800 text-sm border-none outline-none bg-gray-200 hover:bg-gray-300" id="cancelButton">I am not sure</button>
            <button type="button"
                class="px-5 py-2.5 rounded-lg w-full tracking-wide text-black text-sm border-none outline-none bg-red-500 hover:bg-red-600">Remove my account</button>
        </div>
    </div>
</div>

<!-- Button to trigger modal -->
<div class="flex justify-center items-center w-full pt-8">
<button id="openModal" class="bg-rose-500 text-black px-4 py-2 rounded-lg">Delete Modal</button>
</div>


<script>
// Select elements
const modal = document.getElementById('modal');
const openModalBtn = document.getElementById('openModal');
const closeModalBtn = document.getElementById('closeModal');
const cancelButton = document.getElementById('cancelButton');

// Function to show the modal
function showModal() {
    modal.classList.remove('hidden');
}

// Function to hide the modal
function hideModal() {
    modal.classList.add('hidden');
}

// Event listeners to open and close the modal
openModalBtn.addEventListener('click', showModal);
closeModalBtn.addEventListener('click', hideModal);
cancelButton.addEventListener('click', hideModal);


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
  <body class='bg-gray-50 px-4'>

    <div id="modal"
    class="fixed inset-0 hidden p-4 flex flex-wrap justify-center items-center w-full h-full z-[1000] before:fixed before:inset-0 before:w-full before:h-full before:bg-[rgba(0,0,0,0.5)] overflow-auto font-[sans-serif]">
    <div class="w-full max-w-lg bg-white shadow-lg rounded-lg p-8 relative">
        <svg id="closeModal" xmlns="http://www.w3.org/2000/svg"
            class="w-3.5 cursor-pointer shrink-0 fill-gray-400 hover:fill-red-500 float-right" viewBox="0 0 320.591 320.591">
            <path
                d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z"
                data-original="#000000"></path>
            <path
                d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z"
                data-original="#000000"></path>
        </svg>

        <div class="my-8 text-center">
            <h4 class="text-3xl text-gray-800 font-extrabold">Sign In</h4>
            <p class="text-sm text-gray-500 mt-4">Login to your account to continue the process</p>
        </div>

        <form class="space-y-4">
            <div class="relative flex items-center">
                <input type="email" placeholder="Enter Email"
                    class="px-4 py-3 bg-white text-gray-800 w-full text-sm border border-gray-300 focus:border-blue-600 outline-none rounded-lg" />
                <svg xmlns="http://www.w3.org/2000/svg" fill="#bbb" stroke="#bbb" class="w-[18px] h-[18px] absolute right-4"
                    viewBox="0 0 682.667 682.667">
                    <defs>
                        <clipPath id="a" clipPathUnits="userSpaceOnUse">
                            <path d="M0 512h512V0H0Z" data-original="#000000"></path>
                        </clipPath>
                    </defs>
                    <g clip-path="url(#a)" transform="matrix(1.33 0 0 -1.33 0 682.667)">
                        <path fill="none" stroke-miterlimit="10" stroke-width="40"
                            d="M452 444H60c-22.091 0-40-17.909-40-40v-39.446l212.127-157.782c14.17-10.54 33.576-10.54 47.746 0L492 364.554V404c0 22.091-17.909 40-40 40Z"
                            data-original="#000000"></path>
                        <path
                            d="M472 274.9V107.999c0-11.027-8.972-20-20-20H60c-11.028 0-20 8.973-20 20V274.9L0 304.652V107.999c0-33.084 26.916-60 60-60h392c33.084 0 60 26.916 60 60v196.653Z"
                            data-original="#000000"></path>
                    </g>
                </svg>
            </div>

            <div class="relative flex items-center">
                <input type="password" placeholder="Enter Password"
                    class="px-4 py-3 bg-white text-gray-800 w-full text-sm border border-gray-300 focus:border-blue-600 outline-none rounded-lg" />
                <svg xmlns="http://www.w3.org/2000/svg" fill="#bbb" stroke="#bbb"
                    class="w-[18px] h-[18px] absolute right-4 cursor-pointer" viewBox="0 0 128 128">
                    <path
                        d="M64 104C22.127 104 1.367 67.496.504 65.943a4 4 0 0 1 0-3.887C1.367 60.504 22.127 24 64 24s62.633 36.504 63.496 38.057a4 4 0 0 1 0 3.887C126.633 67.496 105.873 104 64 104zM8.707 63.994C13.465 71.205 32.146 96 64 96c31.955 0 50.553-24.775 55.293-31.994C114.535 56.795 95.854 32 64 32 32.045 32 13.447 56.775 8.707 63.994zM64 88c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm0-40c-8.822 0-16 7.178-16 16s7.178 16 16 16 16-7.178 16-16-7.178-16-16-16z"
                        data-original="#000000"></path>
                    </svg>
            </div>

            <div class="flex">
                <input type="checkbox" class="w-4" />
                <label class="text-sm ml-4 text-gray-500">Remember me</label>
            </div>

            <button type="button"
                class="px-5 py-2.5 !mt-8 w-full bg-blue-600 hover:bg-blue-700 text-black text-sm rounded-lg tracking-wide">Sign
                in</button>
        </form>

        <a href="javascript:void(0)" class="text-sm text-blue-600 text-center mt-4 block hover:underline">Forgot Your
            Password?</a>

        <hr class="my-8 border-gray-300" />

        <p class="text-sm text-center text-gray-500">Don't Have an Account? <a href="javascript:void(0)"
            class="text-sm text-blue-600 hover:underline">Sign Up</a></p>
    </div>
</div>

<!-- Button to trigger modal -->

<div class="flex justify-center items-center w-full pt-8">
<button id="openModal" class="bg-green-400 text-black px-4 py-2 rounded-lg">Sign In Modal</button>
</div>


<script>
// Select elements
const modal = document.getElementById('modal');
const openModalBtn = document.getElementById('openModal');
const closeModalBtn = document.getElementById('closeModal');

// Function to show the modal
function showModal() {
    modal.classList.remove('hidden');
}

// Function to hide the modal
function hideModal() {
    modal.classList.add('hidden');
}

// Event listeners to open and close the modal
openModalBtn.addEventListener('click', showModal);
closeModalBtn.addEventListener('click', hideModal);


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
  <body class='bg-gray-50 px-4'>

    <div id="modal"
    class="fixed inset-0 hidden p-4 flex flex-wrap justify-center items-center w-full h-full z-[1000] before:fixed before:inset-0 before:w-full before:h-full before:bg-[rgba(0,0,0,0.5)] overflow-auto font-[sans-serif]">
    <div class="w-full max-w-lg bg-white shadow-lg rounded-lg p-8 relative">
        <svg id="closeModal" xmlns="http://www.w3.org/2000/svg"
            class="w-3.5 cursor-pointer shrink-0 fill-gray-400 hover:fill-red-500 float-right" viewBox="0 0 320.591 320.591">
            <path
                d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z"
                data-original="#000000"></path>
            <path
                d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z"
                data-original="#000000"></path>
        </svg>

       <div class="my-8 text-center">
                    <h4 class="text-3xl text-gray-800 font-extrabold">Register</h4>
                    <p class="text-sm text-gray-500 mt-4">Create an account with us</p>
                </div>

                <form class="space-y-4">
                    <div class="relative flex items-center">
                        <input type="email" placeholder="Enter Email"
                            class="px-4 py-3 bg-white text-gray-800 w-full text-sm border border-gray-300 focus:border-blue-600 outline-none rounded-lg" />
                        <svg xmlns="http://www.w3.org/2000/svg" fill="#bbb" stroke="#bbb" class="w-[18px] h-[18px] absolute right-4"
                            viewBox="0 0 682.667 682.667">
                            <defs>
                                <clipPath id="a" clipPathUnits="userSpaceOnUse">
                                    <path d="M0 512h512V0H0Z" data-original="#000000"></path>
                                </clipPath>
                            </defs>
                            <g clip-path="url(#a)" transform="matrix(1.33 0 0 -1.33 0 682.667)">
                                <path fill="none" stroke-miterlimit="10" stroke-width="40"
                                    d="M452 444H60c-22.091 0-40-17.909-40-40v-39.446l212.127-157.782c14.17-10.54 33.576-10.54 47.746 0L492 364.554V404c0 22.091-17.909 40-40 40Z"
                                    data-original="#000000"></path>
                                <path
                                    d="M472 274.9V107.999c0-11.027-8.972-20-20-20H60c-11.028 0-20 8.973-20 20V274.9L0 304.652V107.999c0-33.084 26.916-60 60-60h392c33.084 0 60 26.916 60 60v196.653Z"
                                    data-original="#000000"></path>
                            </g>
                        </svg>
                    </div>

                    <div class="relative flex items-center">
                        <input type="password" placeholder="Enter Password"
                            class="px-4 py-3 bg-white text-gray-800 w-full text-sm border border-gray-300 focus:border-blue-600 outline-none rounded-lg" />
                        <svg xmlns="http://www.w3.org/2000/svg" fill="#bbb" stroke="#bbb"
                            class="w-[18px] h-[18px] absolute right-4 cursor-pointer" viewBox="0 0 128 128">
                            <path
                                d="M64 104C22.127 104 1.367 67.496.504 65.943a4 4 0 0 1 0-3.887C1.367 60.504 22.127 24 64 24s62.633 36.504 63.496 38.057a4 4 0 0 1 0 3.887C126.633 67.496 105.873 104 64 104zM8.707 63.994C13.465 71.205 32.146 96 64 96c31.955 0 50.553-24.775 55.293-31.994C114.535 56.795 95.854 32 64 32 32.045 32 13.447 56.775 8.707 63.994zM64 88c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm0-40c-8.822 0-16 7.178-16 16s7.178 16 16 16 16-7.178 16-16-7.178-16-16-16z"
                                data-original="#000000"></path>
                        </svg>
                    </div>

                    <div class="relative flex items-center">
                        <input type="password" placeholder="Confirm Password"
                            class="px-4 py-3 bg-white text-gray-800 w-full text-sm border border-gray-300 focus:border-blue-600 outline-none rounded-lg" />
                        <svg xmlns="http://www.w3.org/2000/svg" fill="#bbb" stroke="#bbb"
                            class="w-[18px] h-[18px] absolute right-4 cursor-pointer" viewBox="0 0 128 128">
                            <path
                                d="M64 104C22.127 104 1.367 67.496.504 65.943a4 4 0 0 1 0-3.887C1.367 60.504 22.127 24 64 24s62.633 36.504 63.496 38.057a4 4 0 0 1 0 3.887C126.633 67.496 105.873 104 64 104zM8.707 63.994C13.465 71.205 32.146 96 64 96c31.955 0 50.553-24.775 55.293-31.994C114.535 56.795 95.854 32 64 32 32.045 32 13.447 56.775 8.707 63.994zM64 88c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm0-40c-8.822 0-16 7.178-16 16s7.178 16 16 16 16-7.178 16-16-7.178-16-16-16z"
                                data-original="#000000"></path>
                        </svg>
                    </div>

                    <div class="flex">
                        <input type="checkbox" class="w-4" />
                        <label class="text-sm ml-4 text-gray-500">I have read and accept the <a href="javascript:void(0)"
                            class="text-sm text-blue-600 hover:underline">Terms and Conditions</a></label>
                    </div>

                    <div class="!mt-8 space-y-4">
                        <button type="button"
                            class="px-5 py-2.5 w-full bg-blue-600 hover:bg-blue-700 text-black text-sm rounded-lg tracking-wide">Create an account</button>

                        <button type="button"
                            class="px-5 py-2.5 w-full bg-gray-200 hover:bg-gray-300 text-gray-800 text-sm rounded-lg tracking-wide">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20px" fill="#fff" class="inline mr-4" viewBox="0 0 512 512">
                                <path fill="#fbbd00"
                                    d="M120 256c0-25.367 6.989-49.13 19.131-69.477v-86.308H52.823C18.568 144.703 0 198.922 0 256s18.568 111.297 52.823 155.785h86.308v-86.308C126.989 305.13 120 281.367 120 256z"
                                    data-original="#fbbd00" />
                                <path fill="#0f9d58"
                                    d="m256 392-60 60 60 60c57.079 0 111.297-18.568 155.785-52.823v-86.216h-86.216C305.044 385.147 281.181 392 256 392z"
                                    data-original="#0f9d58" />
                                <path fill="#31aa52"
                                    d="m139.131 325.477-86.308 86.308a260.085 260.085 0 0 0 22.158 25.235C123.333 485.371 187.62 512 256 512V392c-49.624 0-93.117-26.72-116.869-66.523z"
                                    data-original="#31aa52" />
                                <path fill="#3c79e6"
                                    d="M512 256a258.24 258.24 0 0 0-4.192-46.377l-2.251-12.299H256v120h121.452a135.385 135.385 0 0 1-51.884 55.638l86.216 86.216a260.085 260.085 0 0 0 25.235-22.158C485.371 388.667 512 324.38 512 256z"
                                    data-original="#3c79e6" />
                                <path fill="#cf2d48"
                                    d="m352.167 159.833 10.606 10.606 84.853-84.852-10.606-10.606C388.668 26.629 324.381 0 256 0l-60 60 60 60c36.326 0 70.479 14.146 96.167 39.833z"
                                    data-original="#cf2d48" />
                                <path fill="#eb4132"
                                    d="M256 120V0C187.62 0 123.333 26.629 74.98 74.98a259.849 259.849 0 0 0-22.158 25.235l86.308 86.308C162.883 146.72 206.376 120 256 120z"
                                    data-original="#eb4132" />
                            </svg>
                            Continue with Google
                        </button>
                    </div>
                </form>

                <hr class="my-8 border-gray-300" />

                <p class="text-sm text-center text-gray-500">Already have an account? <a href="javascript:void(0)"
                    class="text-sm text-blue-600 hover:underline">Login</a></p>
    </div>
</div>

<!-- Button to trigger modal -->

<div class="flex justify-center items-center w-full pt-8">
<button id="openModal" class="bg-green-400 text-black px-4 py-2 rounded-lg">Sign Up / Register Modal</button>
</div>


<script>
// Select elements
const modal = document.getElementById('modal');
const openModalBtn = document.getElementById('openModal');
const closeModalBtn = document.getElementById('closeModal');

// Function to show the modal
function showModal() {
    modal.classList.remove('hidden');
}

// Function to hide the modal
function hideModal() {
    modal.classList.add('hidden');
}

// Event listeners to open and close the modal
openModalBtn.addEventListener('click', showModal);
closeModalBtn.addEventListener('click', hideModal);


</script>


  </body>
</html>`}
                width="100%"
                height="650"
                style={{ border: "none" }}
            ></iframe>
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


    
        /* Optional: smooth transition */
        .transition-opacity {
            transition: opacity 0.3s ease-in-out;
        }
        .transition-transform {
            transition: transform 0.3s ease-in-out;
        }
    
    </style>
  </head>
  <body class='bg-gray-50 px-4'>

    <!-- Open Modal Button -->
    <button onclick="openModal()" class="bg-blue-600 text-white py-2 px-4 rounded-md mt-10 mx-auto block">Open Modal</button>

    <!-- Modal -->
    <div id="modal" class="fixed inset-0 p-4 flex justify-center items-center w-full h-full z-[1000] before:fixed before:inset-0 before:w-full before:h-full before:bg-[rgba(0,0,0,0.5)] overflow-auto font-[sans-serif] hidden opacity-0 transition-opacity duration-300 ease-in-out">
        <div class="w-full max-w-md bg-white shadow-lg rounded-lg p-4 relative">
                 <!-- Close button -->
            <svg xmlns="http://www.w3.org/2000/svg" class="w-3.5 cursor-pointer float-right fill-gray-400 hover:fill-red-500" viewBox="0 0 320.591 320.591" onclick="closeModal()">
                <path d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z"></path>
                <path d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z"></path>
            </svg>

                <div class="mt-4 p-4">
                    <div class="text-center">
                        <h3 class="text-2xl font-semibold flex-1 text-gray-800">How many stars would you like to give us?</h3>
                        <p class="text-sm mt-4 text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor auctor arcu,
                            at fermentum dui.</p>
                    </div>

                    <div class="flex justify-center space-x-2 mt-4">
                        <svg class="w-6 cursor-pointer fill-blue-600 hover:fill-[#CED5D8]" viewBox="0 0 14 13" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                        </svg>
                        <svg class="w-6 cursor-pointer fill-blue-600 hover:fill-[#CED5D8]" viewBox="0 0 14 13" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                        </svg>
                        <svg class="w-6 cursor-pointer fill-blue-600 hover:fill-[#CED5D8]" viewBox="0 0 14 13" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                        </svg>
                        <svg class="w-6 cursor-pointer fill-[#CED5D8] hover:fill-blue-600" viewBox="0 0 14 13" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                        </svg>
                        <svg class="w-6 cursor-pointer fill-[#CED5D8] hover:fill-blue-600" viewBox="0 0 14 13" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                        </svg>
                    </div>

                    <div class="mt-8 space-y-4">
                        <button type="button" class="text-sm px-5 py-2.5 w-full bg-blue-600 hover:bg-blue-700 text-white rounded-md tracking-wide">Submit</button>
                        <button type="button" class="text-sm w-full bg-transparent hover:underline text-blue-600 tracking-wide">No, thanks</button>
                    </div>
                </div>
            </div>
    </div>

    <script>
        // Open modal with animation
        function openModal() {
            const modal = document.getElementById('modal');
            modal.classList.remove('hidden', 'opacity-0', 'scale-95');
            modal.classList.add('opacity-100', 'scale-100');
        }

        // Close modal with animation
        function closeModal() {
            const modal = document.getElementById('modal');
            modal.classList.remove('opacity-100', 'scale-100');
            modal.classList.add('opacity-0', 'scale-95');
            
            // After transition ends, add hidden class to remove modal from view
            setTimeout(() => {
                modal.classList.add('hidden');
            }, 300); // match duration of transition
        }
    </script>


  </body>
</html>`}
                width="100%"
                height="400"
                style={{ border: "none" }}
            ></iframe>
      </ComponentsView>

    </div>
  )
}

export default page