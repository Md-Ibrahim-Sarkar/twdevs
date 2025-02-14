import { ComponentsView } from '@/components/CodeViewBoxTwo/Index'

function page() {
  return (
    <div>
      <ComponentsView className='' title='' link=''>
        <form class="space-y-4 font-[sans-serif] text-[#333] max-w-md mx-auto">
          <div class="relative flex items-center">
            <input type="email" placeholder="Enter Email"
              class="px-4 py-3 bg-[#f0f1f2] focus:bg-transparent w-full text-sm border outline-[#007bff] rounded transition-all" />

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
              class="px-4 py-3 bg-[#f0f1f2] focus:bg-transparent w-full text-sm border outline-[#007bff] rounded transition-all" />

            <svg xmlns="http://www.w3.org/2000/svg" fill="#bbb" stroke="#bbb"
              class="w-[18px] h-[18px] absolute right-4 cursor-pointer" viewBox="0 0 128 128">
              <path
                d="M64 104C22.127 104 1.367 67.496.504 65.943a4 4 0 0 1 0-3.887C1.367 60.504 22.127 24 64 24s62.633 36.504 63.496 38.057a4 4 0 0 1 0 3.887C126.633 67.496 105.873 104 64 104zM8.707 63.994C13.465 71.205 32.146 96 64 96c31.955 0 50.553-24.775 55.293-31.994C114.535 56.795 95.854 32 64 32 32.045 32 13.447 56.775 8.707 63.994zM64 88c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm0-40c-8.822 0-16 7.178-16 16s7.178 16 16 16 16-7.178 16-16-7.178-16-16-16z"
                data-original="#000000"></path>
            </svg>
          </div>

          <div class="flex items-center">
            <input type="checkbox" class="w-4 h-4 shrink-0" />
            <label class="text-sm ml-3">Remember me</label>
          </div>

          <button type="button"
            class="px-6 py-2.5 w-full !mt-8 text-sm bg-[#007bff] hover:bg-blue-600 text-white rounded active:bg-[#006bff]">Submit</button>
        </form>
      </ComponentsView>

      <ComponentsView className='' title='' link=''>
        <form class="space-y-6 font-[sans-serif] max-w-lg mx-auto">
          <div class="relative flex items-center">
            <input type="email" placeholder="Enter Email"
              class="px-2 py-3 bg-white text-black w-full text-sm border-b-2 focus:border-blue-500 outline-none" />
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
              class="px-2 py-3 bg-white text-black w-full text-sm border-b-2 focus:border-blue-500 outline-none" />
            <svg xmlns="http://www.w3.org/2000/svg" fill="#bbb" stroke="#bbb"
              class="w-[18px] h-[18px] absolute right-4 cursor-pointer" viewBox="0 0 128 128">
              <path
                d="M64 104C22.127 104 1.367 67.496.504 65.943a4 4 0 0 1 0-3.887C1.367 60.504 22.127 24 64 24s62.633 36.504 63.496 38.057a4 4 0 0 1 0 3.887C126.633 67.496 105.873 104 64 104zM8.707 63.994C13.465 71.205 32.146 96 64 96c31.955 0 50.553-24.775 55.293-31.994C114.535 56.795 95.854 32 64 32 32.045 32 13.447 56.775 8.707 63.994zM64 88c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm0-40c-8.822 0-16 7.178-16 16s7.178 16 16 16 16-7.178 16-16-7.178-16-16-16z"
                data-original="#000000"></path>
            </svg>
          </div>

          <div class="flex">
            <input type="checkbox" class="w-4" />
            <label class="text-sm ml-4 ">Remember me</label>
          </div>

          <button type="button"
            class="!mt-8 px-8 py-2.5 bg-blue-500 text-sm text-white hover:bg-blue-600 rounded-sm">Submit</button>
        </form>
      </ComponentsView>

      <ComponentsView className='' title='' link=''>
        <div class="space-y-6 font-[sans-serif] max-w-md mx-auto">
          <div>
            <labe class="mb-2 text-sm text-black block">Your Name</labe>
            <div class="relative flex items-center">
              <input type='text' placeholder='Enter name'
                class="pr-4 pl-14 py-3 text-sm text-black rounded bg-white border border-gray-400 w-full outline-[#333]" />

              <div class="absolute left-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="22px" height="22px" fill="#bbb" viewBox="0 0 512 512">
                  <path
                    d="M437.02 74.981C388.667 26.629 324.38 0 256 0S123.333 26.629 74.98 74.981C26.629 123.333 0 187.62 0 256s26.629 132.667 74.98 181.019C123.333 485.371 187.62 512 256 512s132.667-26.629 181.02-74.981C485.371 388.667 512 324.38 512 256s-26.629-132.667-74.98-181.019zM256 482c-66.869 0-127.037-29.202-168.452-75.511C113.223 338.422 178.948 290 256 290c-49.706 0-90-40.294-90-90s40.294-90 90-90 90 40.294 90 90-40.294 90-90 90c77.052 0 142.777 48.422 168.452 116.489C383.037 452.798 322.869 482 256 482z"
                    data-original="#000000"></path>
                </svg>
              </div>
            </div>
          </div>

          <div>
            <labe class="mb-2 text-sm text-black block">Your Email</labe>
            <div class="relative flex items-center">
              <input type='text' placeholder='Enter email'
                class="pr-4 pl-14 py-3 text-sm text-black rounded bg-white border border-gray-400 w-full outline-[#333]" />

              <div class="absolute left-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="22px" height="22px" fill="#bbb" viewBox="0 0 512 512">
                  <path
                    d="M298.789 313.693c-12.738 8.492-27.534 12.981-42.789 12.981-15.254 0-30.05-4.489-42.788-12.981L3.409 173.82A76.269 76.269 0 0 1 0 171.403V400.6c0 26.278 21.325 47.133 47.133 47.133h417.733c26.278 0 47.133-21.325 47.133-47.133V171.402a75.21 75.21 0 0 1-3.416 2.422z"
                    data-original="#000000" />
                  <path
                    d="m20.05 148.858 209.803 139.874c7.942 5.295 17.044 7.942 26.146 7.942 9.103 0 18.206-2.648 26.148-7.942L491.95 148.858c12.555-8.365 20.05-22.365 20.05-37.475 0-25.981-21.137-47.117-47.117-47.117H47.117C21.137 64.267 0 85.403 0 111.408a44.912 44.912 0 0 0 20.05 37.45z"
                    data-original="#000000" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </ComponentsView>

      <ComponentsView className='' title='' link=''>

        <form class="max-w-sm mx-auto">
          <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your message</label>
          <textarea id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Leave a comment..."></textarea>
        </form>

      </ComponentsView>

      <ComponentsView className='' title='' link=''>

        <form class="max-w-lg mx-auto">
          <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="user_avatar">Upload file</label>
          <input class="block w-full text-sm text-gray-900 border border-gray-300 rounded-md cursor-pointer dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" aria-describedby="user_avatar_help" id="user_avatar" type="file" />
          <div class="mt-1 text-sm text-gray-500 dark:text-gray-300" id="user_avatar_help">A profile picture is useful to confirm your are logged into your account</div>
        </form>

      </ComponentsView>

      <ComponentsView className='' title='' link=''>


        <form class="max-w-md mx-auto py-4">
          <div class="relative z-0 w-full mb-5 group">
            <input type="email" name="floating_email" id="floating_email" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
            <label for="floating_email" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
          </div>
          <div class="relative z-0 w-full mb-5 group">
            <input type="password" name="floating_password" id="floating_password" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
            <label for="floating_password" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
          </div>
          <div class="relative z-0 w-full mb-5 group">
            <input type="password" name="repeat_password" id="floating_repeat_password" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
            <label for="floating_repeat_password" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Confirm password</label>
          </div>
          <div class="grid md:grid-cols-2 md:gap-6">
            <div class="relative z-0 w-full mb-5 group">
              <input type="text" name="floating_first_name" id="floating_first_name" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
              <label for="floating_first_name" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">First name</label>
            </div>
            <div class="relative z-0 w-full mb-5 group">
              <input type="text" name="floating_last_name" id="floating_last_name" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
              <label for="floating_last_name" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Last name</label>
            </div>
          </div>
          <div class="grid md:grid-cols-2 md:gap-6">
            <div class="relative z-0 w-full mb-5 group">
              <input type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" name="floating_phone" id="floating_phone" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
              <label for="floating_phone" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-1 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Phone number (123-456-7890)</label>
            </div>
            <div class="relative z-0 w-full mb-5 group">
              <input type="text" name="floating_company" id="floating_company" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
              <label for="floating_company" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Company (Ex. Google)</label>
            </div>
          </div>
          <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
        </form>

      </ComponentsView>

      <ComponentsView className='' title='' link=''>
        <form class="font-[sans-serif] max-w-4xl mx-auto py-4">
          <div class="grid sm:grid-cols-2 gap-8">
            <div class="relative">
              <div class="relative flex items-center">
                <input type="text" placeholder="First Name"
                  class="px-2 py-3 bg-white text-black w-full text-sm border-b-2 focus:border-[#007bff] outline-none" />
                <svg xmlns="http://www.w3.org/2000/svg" fill="#bbb" stroke="#bbb" class="w-[18px] h-[18px] absolute right-2"
                  viewBox="0 0 24 24">
                  <circle cx="10" cy="7" r="6" data-original="#000000"></circle>
                  <path
                    d="M14 15H6a5 5 0 0 0-5 5 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 5 5 0 0 0-5-5zm8-4h-2.59l.3-.29a1 1 0 0 0-1.42-1.42l-2 2a1 1 0 0 0 0 1.42l2 2a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42l-.3-.29H22a1 1 0 0 0 0-2z"
                    data-original="#000000"></path>
                </svg>
              </div>
              <p class="hidden absolute -bottom-5 px-2 text-xs text-red-500">This fields is required!</p>
            </div>

            <div class="relative">
              <div class="relative flex items-center">
                <input type="text" placeholder="Last Name"
                  class="px-2 py-3 bg-white text-black w-full text-sm border-b-2 focus:border-[#007bff] outline-none" />
                <svg xmlns="http://www.w3.org/2000/svg" fill="#bbb" stroke="#bbb" class="w-[18px] h-[18px] absolute right-2"
                  viewBox="0 0 24 24">
                  <circle cx="10" cy="7" r="6" data-original="#000000"></circle>
                  <path
                    d="M14 15H6a5 5 0 0 0-5 5 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 5 5 0 0 0-5-5zm8-4h-2.59l.3-.29a1 1 0 0 0-1.42-1.42l-2 2a1 1 0 0 0 0 1.42l2 2a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42l-.3-.29H22a1 1 0 0 0 0-2z"
                    data-original="#000000"></path>
                </svg>
              </div>
              <p class="hidden absolute -bottom-5 px-2 text-xs text-red-500">This fields is required!</p>
            </div>

            <div class="relative">
              <div class="relative flex items-center">
                <input type="number" placeholder="Phone No."
                  class="px-2 py-3 bg-white text-black w-full text-sm border-b-2 border-red-500 focus:border-[#007bff] outline-none" />
                <svg fill="#bbb" class="w-[18px] h-[18px] absolute right-2" viewBox="0 0 64 64">
                  <path
                    d="m52.148 42.678-6.479-4.527a5 5 0 0 0-6.963 1.238l-1.504 2.156c-2.52-1.69-5.333-4.05-8.014-6.732-2.68-2.68-5.04-5.493-6.73-8.013l2.154-1.504a4.96 4.96 0 0 0 2.064-3.225 4.98 4.98 0 0 0-.826-3.739l-4.525-6.478C20.378 10.5 18.85 9.69 17.24 9.69a4.69 4.69 0 0 0-1.628.291 8.97 8.97 0 0 0-1.685.828l-.895.63a6.782 6.782 0 0 0-.63.563c-1.092 1.09-1.866 2.472-2.303 4.104-1.865 6.99 2.754 17.561 11.495 26.301 7.34 7.34 16.157 11.9 23.011 11.9 1.175 0 2.281-.136 3.29-.406 1.633-.436 3.014-1.21 4.105-2.302.199-.199.388-.407.591-.67l.63-.899a9.007 9.007 0 0 0 .798-1.64c.763-2.06-.007-4.41-1.871-5.713z"
                    data-original="#000000"></path>
                </svg>
              </div>
              <p class="absolute -bottom-5 px-2 text-xs text-red-500">This number is already exist!</p>
            </div>

            <div class="relative">
              <div class="relative flex items-center">
                <input type="text" placeholder="Country"
                  class="px-2 py-3 bg-white text-black w-full text-sm border-b-2 focus:border-[#007bff] outline-none" />
                <svg xmlns="http://www.w3.org/2000/svg" fill="#bbb" class="w-[18px] h-[18px] absolute right-2"
                  viewBox="0 0 24 24">
                  <path
                    d="M20.48 8.301A9.217 9.217 0 0 1 21.25 12c0 5.105-4.145 9.25-9.25 9.25S2.75 17.105 2.75 12 6.895 2.75 12 2.75a.75.75 0 0 0 0-1.5C6.067 1.25 1.25 6.067 1.25 12S6.067 22.75 12 22.75 22.75 17.933 22.75 12c0-1.529-.32-2.983-.896-4.301a.75.75 0 0 0-1.374.602z"
                    data-original="#000000" />
                  <path
                    d="M17 1.25a3.443 3.443 0 0 0-3.442 3.442c0 .594.269 1.317.685 2.023.835 1.421 2.227 2.815 2.227 2.815a.749.749 0 0 0 1.06 0s1.392-1.394 2.227-2.815c.416-.706.685-1.429.685-2.023 0-1.9-1.542-3.442-3.442-3.442zm0 1.5c1.072 0 1.942.87 1.942 1.942 0 .528-.393 1.177-.815 1.789A15.328 15.328 0 0 1 17 7.901c-.325-.366-.75-.874-1.127-1.42-.422-.612-.815-1.261-.815-1.789 0-1.072.87-1.942 1.942-1.942zM1.603 12.636l3.27 2.044c.596.372 1.285.57 1.987.57h.76c.657 0 1.281.287 1.709.786l1.051 1.227a2.25 2.25 0 0 1 .456 2.082l-.557 1.949a.75.75 0 0 0 1.442.412l.557-1.949a3.748 3.748 0 0 0-.759-3.47l-1.052-1.227a3.746 3.746 0 0 0-2.847-1.31h-.76c-.421 0-.834-.118-1.192-.342l-3.271-2.044a.75.75 0 1 0-.794 1.272z"
                    data-original="#000000" />
                  <path
                    d="m5.329 4.335 1.596 3.192a2.748 2.748 0 0 0 1.757 1.429l1.758.465c.443.117.786.467.894.912l.753 3.087a2.75 2.75 0 0 0 1.146 1.637l.466.31a2.746 2.746 0 0 0 3.985-1.058l.575-1.151a1.25 1.25 0 0 1 .815-.653l2.791-.698a.75.75 0 0 0-.364-1.455l-2.791.697a2.752 2.752 0 0 0-1.792 1.438l-.576 1.151a1.246 1.246 0 0 1-1.811.481l-.466-.31a1.25 1.25 0 0 1-.521-.744l-.752-3.087a2.75 2.75 0 0 0-1.969-2.007l-1.758-.465a1.247 1.247 0 0 1-.798-.65L6.671 3.665a.75.75 0 1 0-1.342.67z"
                    data-original="#000000" />
                </svg>
              </div>
              <p class="hidden absolute -bottom-5 px-2 text-xs text-red-500">This fields is required!</p>
            </div>

            <div class="relative sm:col-span-2">
              <div class="relative flex items-center">
                <input type="email" placeholder="Email"
                  class="px-2 py-3 bg-white text-black w-full text-sm border-b-2 border-red-500 focus:border-[#007bff] outline-none" />
                <svg xmlns="http://www.w3.org/2000/svg" fill="#bbb" stroke="#bbb" class="w-[18px] h-[18px] absolute right-2"
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
              <p class="absolute -bottom-5 px-2 text-xs text-red-500">Invalid email Id</p>
            </div>

            <div class="relative sm:col-span-2">
              <div class="relative flex items-center">
                <input type="password" placeholder="Password" autocomplete="new-password"
                  class="px-2 py-3 bg-white text-black w-full text-sm border-b-2 focus:border-[#007bff] outline-none" />
                <svg xmlns="http://www.w3.org/2000/svg" fill="#bbb" stroke="#bbb"
                  class="w-[18px] h-[18px] absolute right-2 cursor-pointer" viewBox="0 0 128 128">
                  <path
                    d="M64 104C22.127 104 1.367 67.496.504 65.943a4 4 0 0 1 0-3.887C1.367 60.504 22.127 24 64 24s62.633 36.504 63.496 38.057a4 4 0 0 1 0 3.887C126.633 67.496 105.873 104 64 104zM8.707 63.994C13.465 71.205 32.146 96 64 96c31.955 0 50.553-24.775 55.293-31.994C114.535 56.795 95.854 32 64 32 32.045 32 13.447 56.775 8.707 63.994zM64 88c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm0-40c-8.822 0-16 7.178-16 16s7.178 16 16 16 16-7.178 16-16-7.178-16-16-16z"
                    data-original="#000000"></path>
                </svg>
              </div>
              <p class="hidden absolute -bottom-5 px-2 text-xs text-red-500">This fields is required!</p>
            </div>
          </div>

          <button type="button"
            class="mt-8 px-8 py-3 rounded-sm mx-auto block text-sm bg-[#007bff] text-white hover:bg-[#006bff]">Submit</button>
        </form>
      </ComponentsView>

      <ComponentsView className='py-6' title='' link=''>
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

     
          <label class="flex items-center border-2 focus-within:border-[#333] rounded-full font-[sans-serif] max-w-sm mx-auto">
            <div class="relative">
              <button type="button" class="px-5 border-r-2 text-[#333] text-sm flex items-center">US
                <svg xmlns="http://www.w3.org/2000/svg" class="w-3 ml-2 rotate-180 fill-black" viewBox="0 0 451.847 451.847">
                  <path
                    d="M225.923 354.706c-8.098 0-16.195-3.092-22.369-9.263L9.27 151.157c-12.359-12.359-12.359-32.397 0-44.751 12.354-12.354 32.388-12.354 44.748 0l171.905 171.915 171.906-171.909c12.359-12.354 32.391-12.354 44.744 0 12.365 12.354 12.365 32.392 0 44.751L248.292 345.449c-6.177 6.172-14.274 9.257-22.369 9.257z"
                    data-original="#000000"></path>
                </svg>
              </button>

              <ul class="absolute bg-white shadow-lg min-w-[150px] top-9 py-2">
                <li class="cursor-pointer hover:bg-blue-50 px-4 py-3 text-[#333] text-sm">US</li>
                <li class="cursor-pointer hover:bg-blue-50 px-4 py-3 text-[#333] text-sm">MT</li>
                <li class="cursor-pointer hover:bg-blue-50 px-4 py-3 text-[#333] text-sm">PL</li>
                <li class="cursor-pointer hover:bg-blue-50 px-4 py-3 text-[#333] text-sm">CH</li>
                <li class="cursor-pointer hover:bg-blue-50 px-4 py-3 text-[#333] text-sm">IN</li>
                <li class="cursor-pointer hover:bg-blue-50 px-4 py-3 text-[#333] text-sm">ZM</li>
              </ul>
            </div>

            <input type="number" placeholder="+158-666-889"
              class="px-3 py-3 text-[#333] w-full text-sm outline-none rounded-full" />
          </label>



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