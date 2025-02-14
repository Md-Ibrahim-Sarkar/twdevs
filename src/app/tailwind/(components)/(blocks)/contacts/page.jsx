/* eslint-disable react/no-unescaped-entities */
import { ComponentsView } from "@/components/CodeViewBoxTwo/Index"


const Page = () => {
  return (
    <>
      <ComponentsView>
        <div class="grid md:grid-cols-3 items-start gap-4 max-md:gap-12 max-w-6xl mx-auto py-6 bg-white font-[sans-serif]">
          <div class="px-4">
            <h2 class="text-gray-800 text-xl font-semibold">Contact Information</h2>

            <div class="space-y-8 mt-8">
              <div class="flex">
                <div class="w-8 h-8 flex items-center shrink-0 rounded border p-1.5">
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-full" viewBox="0 0 32 32">
                    <path
                      d="M8 30a1.001 1.001 0 0 1-1-1v-5H4c-1.654 0-3-1.346-3-3V5c0-1.654 1.346-3 3-3h24c1.654 0 3 1.346 3 3v16c0 1.654-1.346 3-3 3H15.851l-7.226 5.781A.998.998 0 0 1 8 30zM4 4c-.552 0-1 .449-1 1v16c0 .551.448 1 1 1h4a1 1 0 0 1 1 1v3.92l5.875-4.701A1 1 0 0 1 15.5 22H28c.552 0 1-.449 1-1V5c0-.551-.448-1-1-1z"
                      data-original="#000000" />
                    <path d="M24 12H8a1 1 0 1 1 0-2h16a1 1 0 1 1 0 2zm-8 4H8a1 1 0 1 1 0-2h8a1 1 0 1 1 0 2z"
                      data-original="#000000" />
                  </svg>
                </div>

                <div class="ml-4">
                  <h4 class="text-gray-800 text-base font-semibold">Chat to us</h4>
                  <p class="text-xs mt-1 text-gray-500">Chat with our team to help.</p>
                  <p class="text-sm mt-4">read@gmail.com</p>
                </div>
              </div>

              <div class="flex">
                <div class="w-8 h-8 flex items-center shrink-0 rounded border p-1.5">
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-full" viewBox="0 0 512 512">
                    <path
                      d="M341.476 338.285c54.483-85.493 47.634-74.827 49.204-77.056C410.516 233.251 421 200.322 421 166 421 74.98 347.139 0 256 0 165.158 0 91 74.832 91 166c0 34.3 10.704 68.091 31.19 96.446l48.332 75.84C118.847 346.227 31 369.892 31 422c0 18.995 12.398 46.065 71.462 67.159C143.704 503.888 198.231 512 256 512c108.025 0 225-30.472 225-90 0-52.117-87.744-75.757-139.524-83.715zm-194.227-92.34a15.57 15.57 0 0 0-.517-.758C129.685 221.735 121 193.941 121 166c0-75.018 60.406-136 135-136 74.439 0 135 61.009 135 136 0 27.986-8.521 54.837-24.646 77.671-1.445 1.906 6.094-9.806-110.354 172.918L147.249 245.945zM256 482c-117.994 0-195-34.683-195-60 0-17.016 39.568-44.995 127.248-55.901l55.102 86.463a14.998 14.998 0 0 0 25.298 0l55.101-86.463C411.431 377.005 451 404.984 451 422c0 25.102-76.313 60-195 60z"
                      data-original="#000000" />
                    <path
                      d="M256 91c-41.355 0-75 33.645-75 75s33.645 75 75 75 75-33.645 75-75-33.645-75-75-75zm0 120c-24.813 0-45-20.187-45-45s20.187-45 45-45 45 20.187 45 45-20.187 45-45 45z"
                      data-original="#000000" />
                  </svg>
                </div>

                <div class="ml-4">
                  <h4 class="text-gray-800 text-base font-semibold">Visit us</h4>
                  <p class="text-xs mt-1 text-gray-500">Visit our office HQ.</p>
                  <p class="text-sm mt-4">173 Street 356 House</p>
                </div>
              </div>

              <div class="flex">
                <div class="w-8 h-8 flex items-center shrink-0 rounded border p-1.5">
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-full" viewBox="0 0 473.806 473.806">
                    <path
                      d="M374.456 293.506c-9.7-10.1-21.4-15.5-33.8-15.5-12.3 0-24.1 5.3-34.2 15.4l-31.6 31.5c-2.6-1.4-5.2-2.7-7.7-4-3.6-1.8-7-3.5-9.9-5.3-29.6-18.8-56.5-43.3-82.3-75-12.5-15.8-20.9-29.1-27-42.6 8.2-7.5 15.8-15.3 23.2-22.8 2.8-2.8 5.6-5.7 8.4-8.5 21-21 21-48.2 0-69.2l-27.3-27.3c-3.1-3.1-6.3-6.3-9.3-9.5-6-6.2-12.3-12.6-18.8-18.6-9.7-9.6-21.3-14.7-33.5-14.7s-24 5.1-34 14.7l-.2.2-34 34.3c-12.8 12.8-20.1 28.4-21.7 46.5-2.4 29.2 6.2 56.4 12.8 74.2 16.2 43.7 40.4 84.2 76.5 127.6 43.8 52.3 96.5 93.6 156.7 122.7 23 10.9 53.7 23.8 88 26 2.1.1 4.3.2 6.3.2 23.1 0 42.5-8.3 57.7-24.8.1-.2.3-.3.4-.5 5.2-6.3 11.2-12 17.5-18.1 4.3-4.1 8.7-8.4 13-12.9 9.9-10.3 15.1-22.3 15.1-34.6 0-12.4-5.3-24.3-15.4-34.3l-54.9-55.1zm35.8 105.3c-.1 0-.1.1 0 0-3.9 4.2-7.9 8-12.2 12.2-6.5 6.2-13.1 12.7-19.3 20-10.1 10.8-22 15.9-37.6 15.9-1.5 0-3.1 0-4.6-.1-29.7-1.9-57.3-13.5-78-23.4-56.6-27.4-106.3-66.3-147.6-115.6-34.1-41.1-56.9-79.1-72-119.9-9.3-24.9-12.7-44.3-11.2-62.6 1-11.7 5.5-21.4 13.8-29.7l34.1-34.1c4.9-4.6 10.1-7.1 15.2-7.1 6.3 0 11.4 3.8 14.6 7l.3.3c6.1 5.7 11.9 11.6 18 17.9 3.1 3.2 6.3 6.4 9.5 9.7l27.3 27.3c10.6 10.6 10.6 20.4 0 31-2.9 2.9-5.7 5.8-8.6 8.6-8.4 8.6-16.4 16.6-25.1 24.4-.2.2-.4.3-.5.5-8.6 8.6-7 17-5.2 22.7l.3.9c7.1 17.2 17.1 33.4 32.3 52.7l.1.1c27.6 34 56.7 60.5 88.8 80.8 4.1 2.6 8.3 4.7 12.3 6.7 3.6 1.8 7 3.5 9.9 5.3.4.2.8.5 1.2.7 3.4 1.7 6.6 2.5 9.9 2.5 8.3 0 13.5-5.2 15.2-6.9l34.2-34.2c3.4-3.4 8.8-7.5 15.1-7.5 6.2 0 11.3 3.9 14.4 7.3l.2.2 55.1 55.1c10.3 10.2 10.3 20.7.1 31.3zm-154.2-286.1c26.2 4.4 50 16.8 69 35.8s31.3 42.8 35.8 69c1.1 6.6 6.8 11.2 13.3 11.2.8 0 1.5-.1 2.3-.2 7.4-1.2 12.3-8.2 11.1-15.6-5.4-31.7-20.4-60.6-43.3-83.5s-51.8-37.9-83.5-43.3c-7.4-1.2-14.3 3.7-15.6 11s3.5 14.4 10.9 15.6zm217.2 96.3c-8.9-52.2-33.5-99.7-71.3-137.5s-85.3-62.4-137.5-71.3c-7.3-1.3-14.2 3.7-15.5 11-1.2 7.4 3.7 14.3 11.1 15.6 46.6 7.9 89.1 30 122.9 63.7 33.8 33.8 55.8 76.3 63.7 122.9 1.1 6.6 6.8 11.2 13.3 11.2.8 0 1.5-.1 2.3-.2 7.3-1.1 12.3-8.1 11-15.4z"
                      data-original="#000000" />
                  </svg>
                </div>

                <div class="ml-4">
                  <h4 class="text-gray-800 text-base font-semibold">Call us</h4>
                  <p class="text-xs mt-1 text-gray-500">Monday to Friday.</p>
                  <p class="text-sm mt-4">+0189402356</p>
                </div>
              </div>
            </div>
          </div>

          <div class="bg-gray-900 rounded-3xl md:col-span-2 p-8">
            <h2 class="text-xl text-red-600 font-semibold">Product or Service Inquiry</h2>
            <p class="text-sm text-gray-400 mt-2 leading-relaxed">Have some big idea or brand to develop and need help?
              Then
              reach out we'd love to hear about your project and provide help.</p>

            <form>
              <div class="space-y-4 mt-8">
                <input type="text" placeholder="Full Name"
                  class="px-2 py-3 bg-transparent text-gray-200 font-medium w-full text-sm border-b border-gray-400 focus:border-yellow-300 outline-none" />
                <input type="text" placeholder="Street"
                  class="px-2 py-3 bg-transparent text-gray-200 font-medium w-full text-sm border-b border-gray-400 focus:border-yellow-300 outline-none" />
                <input type="number" placeholder="Phone No."
                  class="px-2 py-3 bg-transparent text-gray-200 font-medium w-full text-sm border-b border-gray-400 focus:border-yellow-300 outline-none" />

                <input type="email" placeholder="Email"
                  class="px-2 py-3 bg-transparent text-gray-200 font-medium w-full text-sm border-b border-gray-400 focus:border-yellow-300 outline-none" />

                <textarea placeholder="Write Message"
                  class="px-2 pt-3 bg-transparent text-gray-200 font-medium w-full text-sm border-b border-gray-400 focus:border-yellow-300 outline-none"></textarea>
              </div>

              <button type="button"
                class="mt-8 flex items-center justify-center text-sm rounded-md px-4 py-2.5 text-gray-800 bg-red-600 ">
                <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" fill='currentColor' class="mr-3"
                  viewBox="0 0 548.244 548.244">
                  <path fill-rule="evenodd"
                    d="M392.19 156.054 211.268 281.667 22.032 218.58C8.823 214.168-.076 201.775 0 187.852c.077-13.923 9.078-26.24 22.338-30.498L506.15 1.549c11.5-3.697 24.123-.663 32.666 7.88 8.542 8.543 11.577 21.165 7.879 32.666L390.89 525.906c-4.258 13.26-16.575 22.261-30.498 22.338-13.923.076-26.316-8.823-30.728-22.032l-63.393-190.153z"
                    clip-rule="evenodd" data-original="#000000" />
                </svg>
                Send Message
              </button>
            </form>
          </div>
        </div>
      </ComponentsView>
      <ComponentsView>
        <div class="grid sm:grid-cols-2 items-start gap-16 p-4 mx-auto max-w-4xl bg-white font-[sans-serif]">
          <div>
            <h1 class="text-gray-800 text-3xl font-extrabold">Contact</h1>
            <p class="text-sm text-gray-500 mt-4">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate illum
              recusandae ad officiis aliquam vero animi accusamus dolores cumque nam.</p>

            <div class="mt-12">
              <h2 class="text-gray-800 text-base font-bold">Email</h2>
              <ul class="mt-4">
                <li class="flex items-center">
                  <div class="bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill='#007bff'
                      viewBox="0 0 479.058 479.058">
                      <path
                        d="M434.146 59.882H44.912C20.146 59.882 0 80.028 0 104.794v269.47c0 24.766 20.146 44.912 44.912 44.912h389.234c24.766 0 44.912-20.146 44.912-44.912v-269.47c0-24.766-20.146-44.912-44.912-44.912zm0 29.941c2.034 0 3.969.422 5.738 1.159L239.529 264.631 39.173 90.982a14.902 14.902 0 0 1 5.738-1.159zm0 299.411H44.912c-8.26 0-14.971-6.71-14.971-14.971V122.615l199.778 173.141c2.822 2.441 6.316 3.655 9.81 3.655s6.988-1.213 9.81-3.655l199.778-173.141v251.649c-.001 8.26-6.711 14.97-14.971 14.97z"
                        data-original="#000000" />
                    </svg>
                  </div>
                  <a href="#" class="text-[#007bff] text-sm ml-4">
                    <small class="block">Mail</small>
                    <strong>info@example.com</strong>
                  </a>
                </li>
              </ul>
            </div>

            <div class="mt-12">
              <h2 class="text-gray-800 text-base font-bold">Socials</h2>

              <ul class="flex mt-4 space-x-4">
                <li class="bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                  <a href="#">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill='#007bff'
                      viewBox="0 0 24 24">
                      <path
                        d="M6.812 13.937H9.33v9.312c0 .414.335.75.75.75l4.007.001a.75.75 0 0 0 .75-.75v-9.312h2.387a.75.75 0 0 0 .744-.657l.498-4a.75.75 0 0 0-.744-.843h-2.885c.113-2.471-.435-3.202 1.172-3.202 1.088-.13 2.804.421 2.804-.75V.909a.75.75 0 0 0-.648-.743A26.926 26.926 0 0 0 15.071 0c-7.01 0-5.567 7.772-5.74 8.437H6.812a.75.75 0 0 0-.75.75v4c0 .414.336.75.75.75zm.75-3.999h2.518a.75.75 0 0 0 .75-.75V6.037c0-2.883 1.545-4.536 4.24-4.536.878 0 1.686.043 2.242.087v2.149c-.402.205-3.976-.884-3.976 2.697v2.755c0 .414.336.75.75.75h2.786l-.312 2.5h-2.474a.75.75 0 0 0-.75.75V22.5h-2.505v-9.312a.75.75 0 0 0-.75-.75H7.562z"
                        data-original="#000000" />
                    </svg>
                  </a>
                </li>
                <li class="bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                  <a href="#">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill='#007bff'
                      viewBox="0 0 511 512">
                      <path
                        d="M111.898 160.664H15.5c-8.285 0-15 6.719-15 15V497c0 8.285 6.715 15 15 15h96.398c8.286 0 15-6.715 15-15V175.664c0-8.281-6.714-15-15-15zM96.898 482H30.5V190.664h66.398zM63.703 0C28.852 0 .5 28.352.5 63.195c0 34.852 28.352 63.2 63.203 63.2 34.848 0 63.195-28.352 63.195-63.2C126.898 28.352 98.551 0 63.703 0zm0 96.395c-18.308 0-33.203-14.891-33.203-33.2C30.5 44.891 45.395 30 63.703 30c18.305 0 33.195 14.89 33.195 33.195 0 18.309-14.89 33.2-33.195 33.2zm289.207 62.148c-22.8 0-45.273 5.496-65.398 15.777-.684-7.652-7.11-13.656-14.942-13.656h-96.406c-8.281 0-15 6.719-15 15V497c0 8.285 6.719 15 15 15h96.406c8.285 0 15-6.715 15-15V320.266c0-22.735 18.5-41.23 41.235-41.23 22.734 0 41.226 18.495 41.226 41.23V497c0 8.285 6.719 15 15 15h96.403c8.285 0 15-6.715 15-15V302.066c0-79.14-64.383-143.523-143.524-143.523zM466.434 482h-66.399V320.266c0-39.278-31.953-71.23-71.226-71.23-39.282 0-71.239 31.952-71.239 71.23V482h-66.402V190.664h66.402v11.082c0 5.77 3.309 11.027 8.512 13.524a15.01 15.01 0 0 0 15.875-1.82c20.313-16.294 44.852-24.907 70.953-24.907 62.598 0 113.524 50.926 113.524 113.523zm0 0"
                        data-original="#000000" />
                    </svg>
                  </a>
                </li>
                <li class="bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                  <a href="#">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill='#007bff'
                      viewBox="0 0 24 24">
                      <path
                        d="M12 9.3a2.7 2.7 0 1 0 0 5.4 2.7 2.7 0 0 0 0-5.4Zm0-1.8a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9Zm5.85-.225a1.125 1.125 0 1 1-2.25 0 1.125 1.125 0 0 1 2.25 0ZM12 4.8c-2.227 0-2.59.006-3.626.052-.706.034-1.18.128-1.618.299a2.59 2.59 0 0 0-.972.633 2.601 2.601 0 0 0-.634.972c-.17.44-.265.913-.298 1.618C4.805 9.367 4.8 9.714 4.8 12c0 2.227.006 2.59.052 3.626.034.705.128 1.18.298 1.617.153.392.333.674.632.972.303.303.585.484.972.633.445.172.918.267 1.62.3.993.047 1.34.052 3.626.052 2.227 0 2.59-.006 3.626-.052.704-.034 1.178-.128 1.617-.298.39-.152.674-.333.972-.632.304-.303.485-.585.634-.972.171-.444.266-.918.299-1.62.047-.993.052-1.34.052-3.626 0-2.227-.006-2.59-.052-3.626-.034-.704-.128-1.18-.299-1.618a2.619 2.619 0 0 0-.633-.972 2.595 2.595 0 0 0-.972-.634c-.44-.17-.914-.265-1.618-.298-.993-.047-1.34-.052-3.626-.052ZM12 3c2.445 0 2.75.009 3.71.054.958.045 1.61.195 2.185.419A4.388 4.388 0 0 1 19.49 4.51c.457.45.812.994 1.038 1.595.222.573.373 1.227.418 2.185.042.96.054 1.265.054 3.71 0 2.445-.009 2.75-.054 3.71-.045.958-.196 1.61-.419 2.185a4.395 4.395 0 0 1-1.037 1.595 4.44 4.44 0 0 1-1.595 1.038c-.573.222-1.227.373-2.185.418-.96.042-1.265.054-3.71.054-2.445 0-2.75-.009-3.71-.054-.958-.045-1.61-.196-2.185-.419A4.402 4.402 0 0 1 4.51 19.49a4.414 4.414 0 0 1-1.037-1.595c-.224-.573-.374-1.227-.419-2.185C3.012 14.75 3 14.445 3 12c0-2.445.009-2.75.054-3.71s.195-1.61.419-2.185A4.392 4.392 0 0 1 4.51 4.51c.45-.458.994-.812 1.595-1.037.574-.224 1.226-.374 2.185-.419C9.25 3.012 9.555 3 12 3Z">
                      </path>
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <form class="ml-auto space-y-4">
            <input type='text' placeholder='Name'
              class="w-full rounded-md py-3 px-4 bg-gray-100 text-gray-800 text-sm outline-red-500 focus:bg-transparent" />
            <input type='email' placeholder='Email'
              class="w-full rounded-md py-3 px-4 bg-gray-100 text-gray-800 text-sm outline-red-500 focus:bg-transparent" />
            <input type='text' placeholder='Subject'
              class="w-full rounded-md py-3 px-4 bg-gray-100 text-gray-800 text-sm outline-red-500 focus:bg-transparent" />
            <textarea placeholder='Message' rows="6"
              class="w-full rounded-md px-4 bg-gray-100 text-gray-800 text-sm pt-3 outline-red-500 focus:bg-transparent"></textarea>
            <button type='button'
              class="text-white bg-red-500  tracking-wide rounded-md text-sm px-4 py-3 w-full !mt-6">Send</button>
          </form>
        </div>
      </ComponentsView>
      <ComponentsView>
        <div class="max-w-5xl max-lg:max-w-3xl mx-auto bg-white my-6 font-[sans-serif]">
          <div class="text-center px-6">
            <h2 class="text-gray-800 text-3xl font-bold">Contact Us</h2>
            <p class="text-sm text-gray-500 mt-4">Have some big idea or brand to develop and need help?</p>
          </div>

          <div
            class="grid lg:grid-cols-3 items-start gap-4 p-2 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] rounded-lg mt-12">

            <div class="bg-[#011c2b] rounded-lg p-6 h-full max-lg:order-1">
              <h2 class="text-xl text-white">Contact Information</h2>
              <p class="text-sm text-gray-300 mt-4">Have some big idea or brand to develop and need help?</p>

              <ul class="mt-16 space-y-8">
                <li class="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" fill='#fff'
                    viewBox="0 0 479.058 479.058">
                    <path
                      d="M434.146 59.882H44.912C20.146 59.882 0 80.028 0 104.794v269.47c0 24.766 20.146 44.912 44.912 44.912h389.234c24.766 0 44.912-20.146 44.912-44.912v-269.47c0-24.766-20.146-44.912-44.912-44.912zm0 29.941c2.034 0 3.969.422 5.738 1.159L239.529 264.631 39.173 90.982a14.902 14.902 0 0 1 5.738-1.159zm0 299.411H44.912c-8.26 0-14.971-6.71-14.971-14.971V122.615l199.778 173.141c2.822 2.441 6.316 3.655 9.81 3.655s6.988-1.213 9.81-3.655l199.778-173.141v251.649c-.001 8.26-6.711 14.97-14.971 14.97z"
                      data-original="#000000" />
                  </svg>
                  <a href="javascript:void(0)" class="text-sm text-gray-300 ml-4">
                    open@eopio.com
                  </a>
                </li>
                <li class="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" fill='#fff'
                    viewBox="0 0 482.6 482.6">
                    <path
                      d="M98.339 320.8c47.6 56.9 104.9 101.7 170.3 133.4 24.9 11.8 58.2 25.8 95.3 28.2 2.3.1 4.5.2 6.8.2 24.9 0 44.9-8.6 61.2-26.3.1-.1.3-.3.4-.5 5.8-7 12.4-13.3 19.3-20 4.7-4.5 9.5-9.2 14.1-14 21.3-22.2 21.3-50.4-.2-71.9l-60.1-60.1c-10.2-10.6-22.4-16.2-35.2-16.2-12.8 0-25.1 5.6-35.6 16.1l-35.8 35.8c-3.3-1.9-6.7-3.6-9.9-5.2-4-2-7.7-3.9-11-6-32.6-20.7-62.2-47.7-90.5-82.4-14.3-18.1-23.9-33.3-30.6-48.8 9.4-8.5 18.2-17.4 26.7-26.1 3-3.1 6.1-6.2 9.2-9.3 10.8-10.8 16.6-23.3 16.6-36s-5.7-25.2-16.6-36l-29.8-29.8c-3.5-3.5-6.8-6.9-10.2-10.4-6.6-6.8-13.5-13.8-20.3-20.1-10.3-10.1-22.4-15.4-35.2-15.4-12.7 0-24.9 5.3-35.6 15.5l-37.4 37.4c-13.6 13.6-21.3 30.1-22.9 49.2-1.9 23.9 2.5 49.3 13.9 80 17.5 47.5 43.9 91.6 83.1 138.7zm-72.6-216.6c1.2-13.3 6.3-24.4 15.9-34l37.2-37.2c5.8-5.6 12.2-8.5 18.4-8.5 6.1 0 12.3 2.9 18 8.7 6.7 6.2 13 12.7 19.8 19.6 3.4 3.5 6.9 7 10.4 10.6l29.8 29.8c6.2 6.2 9.4 12.5 9.4 18.7s-3.2 12.5-9.4 18.7c-3.1 3.1-6.2 6.3-9.3 9.4-9.3 9.4-18 18.3-27.6 26.8l-.5.5c-8.3 8.3-7 16.2-5 22.2.1.3.2.5.3.8 7.7 18.5 18.4 36.1 35.1 57.1 30 37 61.6 65.7 96.4 87.8 4.3 2.8 8.9 5 13.2 7.2 4 2 7.7 3.9 11 6 .4.2.7.4 1.1.6 3.3 1.7 6.5 2.5 9.7 2.5 8 0 13.2-5.1 14.9-6.8l37.4-37.4c5.8-5.8 12.1-8.9 18.3-8.9 7.6 0 13.8 4.7 17.7 8.9l60.3 60.2c12 12 11.9 25-.3 37.7-4.2 4.5-8.6 8.8-13.3 13.3-7 6.8-14.3 13.8-20.9 21.7-11.5 12.4-25.2 18.2-42.9 18.2-1.7 0-3.5-.1-5.2-.2-32.8-2.1-63.3-14.9-86.2-25.8-62.2-30.1-116.8-72.8-162.1-127-37.3-44.9-62.4-86.7-79-131.5-10.3-27.5-14.2-49.6-12.6-69.7z"
                      data-original="#000000"></path>
                  </svg>
                  <a href="javascript:void(0)" class="text-sm text-gray-300 ml-4">
                    +01827059564
                  </a>
                </li>
                <li class="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" fill='#fff'
                    viewBox="0 0 368.16 368.16">
                    <path
                      d="M184.08 0c-74.992 0-136 61.008-136 136 0 24.688 11.072 51.24 11.536 52.36 3.576 8.488 10.632 21.672 15.72 29.4l93.248 141.288c3.816 5.792 9.464 9.112 15.496 9.112s11.68-3.32 15.496-9.104l93.256-141.296c5.096-7.728 12.144-20.912 15.72-29.4.464-1.112 11.528-27.664 11.528-52.36 0-74.992-61.008-136-136-136zM293.8 182.152c-3.192 7.608-9.76 19.872-14.328 26.8l-93.256 141.296c-1.84 2.792-2.424 2.792-4.264 0L88.696 208.952c-4.568-6.928-11.136-19.2-14.328-26.808-.136-.328-10.288-24.768-10.288-46.144 0-66.168 53.832-120 120-120s120 53.832 120 120c0 21.408-10.176 45.912-10.28 46.152z"
                      data-original="#000000"></path>
                    <path
                      d="M184.08 64.008c-39.704 0-72 32.304-72 72s32.296 72 72 72 72-32.304 72-72-32.296-72-72-72zm0 128c-30.872 0-56-25.12-56-56s25.128-56 56-56 56 25.12 56 56-25.128 56-56 56z"
                      data-original="#000000"></path>
                  </svg>
                  <a href="javascript:void(0)" class="text-sm text-gray-300 ml-4">
                    123 Street 256 House
                  </a>
                </li>
              </ul>

              <ul class="flex flex-wrap gap-4 mt-16">
                <li
                  class="bg-gray-800 hover:bg-gray-900 h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                  <a href="javascript:void(0)">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18px" height="18px" fill='#fff' viewBox="0 0 24 24">
                      <path
                        d="M6.812 13.937H9.33v9.312c0 .414.335.75.75.75l4.007.001a.75.75 0 0 0 .75-.75v-9.312h2.387a.75.75 0 0 0 .744-.657l.498-4a.75.75 0 0 0-.744-.843h-2.885c.113-2.471-.435-3.202 1.172-3.202 1.088-.13 2.804.421 2.804-.75V.909a.75.75 0 0 0-.648-.743A26.926 26.926 0 0 0 15.071 0c-7.01 0-5.567 7.772-5.74 8.437H6.812a.75.75 0 0 0-.75.75v4c0 .414.336.75.75.75zm.75-3.999h2.518a.75.75 0 0 0 .75-.75V6.037c0-2.883 1.545-4.536 4.24-4.536.878 0 1.686.043 2.242.087v2.149c-.402.205-3.976-.884-3.976 2.697v2.755c0 .414.336.75.75.75h2.786l-.312 2.5h-2.474a.75.75 0 0 0-.75.75V22.5h-2.505v-9.312a.75.75 0 0 0-.75-.75H7.562z"
                        data-original="#000000" />
                    </svg>
                  </a>
                </li>
                <li
                  class="bg-gray-800 hover:bg-gray-900 h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                  <a href="javascript:void(0)">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18px" height="18px" fill='#fff'
                      viewBox="0 0 511 512">
                      <path
                        d="M111.898 160.664H15.5c-8.285 0-15 6.719-15 15V497c0 8.285 6.715 15 15 15h96.398c8.286 0 15-6.715 15-15V175.664c0-8.281-6.714-15-15-15zM96.898 482H30.5V190.664h66.398zM63.703 0C28.852 0 .5 28.352.5 63.195c0 34.852 28.352 63.2 63.203 63.2 34.848 0 63.195-28.352 63.195-63.2C126.898 28.352 98.551 0 63.703 0zm0 96.395c-18.308 0-33.203-14.891-33.203-33.2C30.5 44.891 45.395 30 63.703 30c18.305 0 33.195 14.89 33.195 33.195 0 18.309-14.89 33.2-33.195 33.2zm289.207 62.148c-22.8 0-45.273 5.496-65.398 15.777-.684-7.652-7.11-13.656-14.942-13.656h-96.406c-8.281 0-15 6.719-15 15V497c0 8.285 6.719 15 15 15h96.406c8.285 0 15-6.715 15-15V320.266c0-22.735 18.5-41.23 41.235-41.23 22.734 0 41.226 18.495 41.226 41.23V497c0 8.285 6.719 15 15 15h96.403c8.285 0 15-6.715 15-15V302.066c0-79.14-64.383-143.523-143.524-143.523zM466.434 482h-66.399V320.266c0-39.278-31.953-71.23-71.226-71.23-39.282 0-71.239 31.952-71.239 71.23V482h-66.402V190.664h66.402v11.082c0 5.77 3.309 11.027 8.512 13.524a15.01 15.01 0 0 0 15.875-1.82c20.313-16.294 44.852-24.907 70.953-24.907 62.598 0 113.524 50.926 113.524 113.523zm0 0"
                        data-original="#000000" />
                    </svg>
                  </a>
                </li>
                <li
                  class="bg-gray-800 hover:bg-gray-900 h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                  <a href="javascript:void(0)">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18px" height="18px" fill='#fff' viewBox="0 0 24 24">
                      <path
                        d="M12 9.3a2.7 2.7 0 1 0 0 5.4 2.7 2.7 0 0 0 0-5.4Zm0-1.8a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9Zm5.85-.225a1.125 1.125 0 1 1-2.25 0 1.125 1.125 0 0 1 2.25 0ZM12 4.8c-2.227 0-2.59.006-3.626.052-.706.034-1.18.128-1.618.299a2.59 2.59 0 0 0-.972.633 2.601 2.601 0 0 0-.634.972c-.17.44-.265.913-.298 1.618C4.805 9.367 4.8 9.714 4.8 12c0 2.227.006 2.59.052 3.626.034.705.128 1.18.298 1.617.153.392.333.674.632.972.303.303.585.484.972.633.445.172.918.267 1.62.3.993.047 1.34.052 3.626.052 2.227 0 2.59-.006 3.626-.052.704-.034 1.178-.128 1.617-.298.39-.152.674-.333.972-.632.304-.303.485-.585.634-.972.171-.444.266-.918.299-1.62.047-.993.052-1.34.052-3.626 0-2.227-.006-2.59-.052-3.626-.034-.704-.128-1.18-.299-1.618a2.619 2.619 0 0 0-.633-.972 2.595 2.595 0 0 0-.972-.634c-.44-.17-.914-.265-1.618-.298-.993-.047-1.34-.052-3.626-.052ZM12 3c2.445 0 2.75.009 3.71.054.958.045 1.61.195 2.185.419A4.388 4.388 0 0 1 19.49 4.51c.457.45.812.994 1.038 1.595.222.573.373 1.227.418 2.185.042.96.054 1.265.054 3.71 0 2.445-.009 2.75-.054 3.71-.045.958-.196 1.61-.419 2.185a4.395 4.395 0 0 1-1.037 1.595 4.44 4.44 0 0 1-1.595 1.038c-.573.222-1.227.373-2.185.418-.96.042-1.265.054-3.71.054-2.445 0-2.75-.009-3.71-.054-.958-.045-1.61-.196-2.185-.419A4.402 4.402 0 0 1 4.51 19.49a4.414 4.414 0 0 1-1.037-1.595c-.224-.573-.374-1.227-.419-2.185C3.012 14.75 3 14.445 3 12c0-2.445.009-2.75.054-3.71s.195-1.61.419-2.185A4.392 4.392 0 0 1 4.51 4.51c.45-.458.994-.812 1.595-1.037.574-.224 1.226-.374 2.185-.419C9.25 3.012 9.555 3 12 3Z">
                      </path>
                    </svg>
                  </a>
                </li>
              </ul>
            </div>

            <div class="p-4 lg:col-span-2">
              <form>
                <div class="grid sm:grid-cols-2 gap-8">
                  <div class="relative flex items-center">
                    <input type="text" placeholder="First Name"
                      class="px-2 py-3 bg-white w-full text-sm text-gray-800 border-b border-gray-300 focus:border-blue-500 outline-none" />
                    <svg xmlns="http://www.w3.org/2000/svg" fill="#bbb" stroke="#bbb"
                      class="w-[18px] h-[18px] absolute right-2" viewBox="0 0 24 24">
                      <circle cx="10" cy="7" r="6" data-original="#000000"></circle>
                      <path
                        d="M14 15H6a5 5 0 0 0-5 5 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 5 5 0 0 0-5-5zm8-4h-2.59l.3-.29a1 1 0 0 0-1.42-1.42l-2 2a1 1 0 0 0 0 1.42l2 2a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42l-.3-.29H22a1 1 0 0 0 0-2z"
                        data-original="#000000"></path>
                    </svg>
                  </div>

                  <div class="relative flex items-center">
                    <input type="text" placeholder="Last Name"
                      class="px-2 py-3 bg-white w-full text-sm text-gray-800 border-b border-gray-300 focus:border-blue-500 outline-none" />
                    <svg xmlns="http://www.w3.org/2000/svg" fill="#bbb" stroke="#bbb"
                      class="w-[18px] h-[18px] absolute right-2" viewBox="0 0 24 24">
                      <circle cx="10" cy="7" r="6" data-original="#000000"></circle>
                      <path
                        d="M14 15H6a5 5 0 0 0-5 5 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 5 5 0 0 0-5-5zm8-4h-2.59l.3-.29a1 1 0 0 0-1.42-1.42l-2 2a1 1 0 0 0 0 1.42l2 2a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42l-.3-.29H22a1 1 0 0 0 0-2z"
                        data-original="#000000"></path>
                    </svg>
                  </div>

                  <div class="relative flex items-center">
                    <input type="number" placeholder="Phone No."
                      class="px-2 py-3 bg-white text-black w-full text-sm text-gray-800 border-b border-gray-300 focus:border-blue-500 outline-none" />
                    <svg fill="#bbb" class="w-[18px] h-[18px] absolute right-2" viewBox="0 0 64 64">
                      <path
                        d="m52.148 42.678-6.479-4.527a5 5 0 0 0-6.963 1.238l-1.504 2.156c-2.52-1.69-5.333-4.05-8.014-6.732-2.68-2.68-5.04-5.493-6.73-8.013l2.154-1.504a4.96 4.96 0 0 0 2.064-3.225 4.98 4.98 0 0 0-.826-3.739l-4.525-6.478C20.378 10.5 18.85 9.69 17.24 9.69a4.69 4.69 0 0 0-1.628.291 8.97 8.97 0 0 0-1.685.828l-.895.63a6.782 6.782 0 0 0-.63.563c-1.092 1.09-1.866 2.472-2.303 4.104-1.865 6.99 2.754 17.561 11.495 26.301 7.34 7.34 16.157 11.9 23.011 11.9 1.175 0 2.281-.136 3.29-.406 1.633-.436 3.014-1.21 4.105-2.302.199-.199.388-.407.591-.67l.63-.899a9.007 9.007 0 0 0 .798-1.64c.763-2.06-.007-4.41-1.871-5.713z"
                        data-original="#000000"></path>
                    </svg>
                  </div>

                  <div class="relative flex items-center">
                    <input type="email" placeholder="Email"
                      class="px-2 py-3 bg-white text-black w-full text-sm text-gray-800 border-b border-gray-300 focus:border-blue-500 outline-none" />
                    <svg xmlns="http://www.w3.org/2000/svg" fill="#bbb" stroke="#bbb"
                      class="w-[18px] h-[18px] absolute right-2" viewBox="0 0 682.667 682.667">
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

                  <div class="relative flex items-center sm:col-span-2">
                    <textarea placeholder="Write Message"
                      class="px-2 pt-3 bg-white text-black w-full text-sm text-gray-800 border-b border-gray-300 focus:border-blue-500 outline-none"></textarea>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="#bbb" stroke="#bbb"
                      class="w-[18px] h-[18px] absolute right-2" viewBox="0 0 682.667 682.667">
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

                  <div class="col-span-full">
                    <h6 class="text-sm text-gray-800">Select Subject</h6>
                    <div class="flex max-lg:flex-col gap-6 mt-4">
                      <div class="flex items-center">
                        <input id="radio1" type="radio" name="value1" class="hidden peer" checked />
                        <label for="radio1"
                          class="relative p-0.5 flex items-center justify-center shrink-0 peer-checked:before:hidden before:block before:absolute before:w-full before:h-full before:bg-white w-5 h-5 cursor-pointer border-2 border-[#011c2b] rounded-full overflow-hidden">
                          <span class="border-[4px] border-[#011c2b] rounded-full w-full h-full"></span>
                        </label>
                        <p class="text-sm text-gray-500 ml-4">General Support</p>
                      </div>

                      <div class="flex items-center">
                        <input id="radio2" type="radio" name="value1" class="hidden peer" />
                        <label for="radio2"
                          class="relative p-0.5 flex items-center justify-center shrink-0 peer-checked:before:hidden before:block before:absolute before:w-full before:h-full before:bg-white w-5 h-5 cursor-pointer border-2 border-[#011c2b] rounded-full overflow-hidden">
                          <span class="border-[4px] border-[#011c2b] rounded-full w-full h-full"></span>
                        </label>
                        <p class="text-sm text-gray-500 ml-4">Technical Support</p>
                      </div>

                      <div class="flex items-center">
                        <input id="radio3" type="radio" name="value1" class="hidden peer" />
                        <label for="radio3"
                          class="relative p-0.5 flex items-center justify-center shrink-0 peer-checked:before:hidden before:block before:absolute before:w-full before:h-full before:bg-white w-5 h-5 cursor-pointer border-2 border-[#011c2b] rounded-full overflow-hidden">
                          <span class="border-[4px] border-[#011c2b] rounded-full w-full h-full"></span>
                        </label>
                        <p class="text-sm text-gray-500 ml-4">Website Feedback</p>
                      </div>
                    </div>
                  </div>
                </div>

                <button type="button"
                  class="mt-12 flex items-center justify-center text-sm lg:ml-auto max-lg:w-full rounded-lg px-4 py-3 tracking-wide text-white bg-blue-600 hover:bg-blue-700">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" fill='#fff' class="mr-2"
                    viewBox="0 0 548.244 548.244">
                    <path fill-rule="evenodd"
                      d="M392.19 156.054 211.268 281.667 22.032 218.58C8.823 214.168-.076 201.775 0 187.852c.077-13.923 9.078-26.24 22.338-30.498L506.15 1.549c11.5-3.697 24.123-.663 32.666 7.88 8.542 8.543 11.577 21.165 7.879 32.666L390.89 525.906c-4.258 13.26-16.575 22.261-30.498 22.338-13.923.076-26.316-8.823-30.728-22.032l-63.393-190.153z"
                      clip-rule="evenodd" data-original="#000000" />
                  </svg>
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </ComponentsView>
      <ComponentsView>
        <div class="max-w-7xl mx-auto p-4 md:p-8">
          <div class="grid md:grid-cols-2 gap-8 items-start">
            <div class="bg-gray-50 rounded-lg p-6">
              <h2 class="text-3xl font-bold text-indigo-900 mb-4">Contact Page </h2>
              <p class="text-gray-600 mb-8 text-sm">Feel free to contact us and we will get back to you as soon as
                possible
              </p>

              <div class="space-y-4">
                <input type="text" placeholder="Name"
                  class="w-full p-3 rounded-lg bg-white border text-sm border-gray-200 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none" />
                <input type="email" placeholder="E-mail"
                  class="w-full p-3 rounded-lg bg-white border text-sm border-gray-200 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none" />
                <textarea placeholder="Message" rows={4}
                  class="w-full p-3 rounded-lg bg-white border text-sm border-gray-200 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none resize-none"></textarea>
                <button type="button"
                  class="w-full text-sm bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors">
                  Send
                </button>
              </div>
            </div>

            <div class="space-y-8">
              <div class="bg-white rounded-lg p-6 shadow">
                <h3 class="text-xl font-semibold text-indigo-900 mb-6">Contact Information</h3>

                <div class="space-y-4">
                  <div class="flex items-start space-x-3">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 fill-indigo-900" viewBox="0 0 64 64">
                      <path
                        d="M32 0A24.032 24.032 0 0 0 8 24c0 17.23 22.36 38.81 23.31 39.72a.99.99 0 0 0 1.38 0C33.64 62.81 56 41.23 56 24A24.032 24.032 0 0 0 32 0zm0 35a11 11 0 1 1 11-11 11.007 11.007 0 0 1-11 11z"
                        data-original="#000000" />
                    </svg>
                    <div>
                      <h4 class="font-semibold text-gray-900 text-sm mb-1">Our Location</h4>
                      <p class="text-gray-600 text-sm">123 Business Street</p>
                      <p class="text-gray-600 text-sm">New York, NY 10001</p>
                    </div>
                  </div>

                  <div class="flex items-start space-x-3">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 fill-indigo-900"
                      viewBox="0 0 513.64 513.64">
                      <path
                        d="m499.66 376.96-71.68-71.68c-25.6-25.6-69.12-15.359-79.36 17.92-7.68 23.041-33.28 35.841-56.32 30.72-51.2-12.8-120.32-79.36-133.12-133.12-7.68-23.041 7.68-48.641 30.72-56.32 33.28-10.24 43.52-53.76 17.92-79.36l-71.68-71.68c-20.48-17.92-51.2-17.92-69.12 0L18.38 62.08c-48.64 51.2 5.12 186.88 125.44 307.2s256 176.641 307.2 125.44l48.64-48.64c17.921-20.48 17.921-51.2 0-69.12z"
                        data-original="#000000" />
                    </svg>
                    <div>
                      <h4 class="font-semibold text-gray-900 text-sm mb-1">Phone Number</h4>
                      <p class="text-gray-600 text-sm">+01827059564</p>
                    </div>
                  </div>

                  <div class="flex items-start space-x-3">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 fill-indigo-900" viewBox="0 0 512 512">
                      <path
                        d="M298.789 313.693c-12.738 8.492-27.534 12.981-42.789 12.981-15.254 0-30.05-4.489-42.788-12.981L3.409 173.82A76.269 76.269 0 0 1 0 171.403V400.6c0 26.278 21.325 47.133 47.133 47.133h417.733c26.278 0 47.133-21.325 47.133-47.133V171.402a75.21 75.21 0 0 1-3.416 2.422z"
                        data-original="#000000" />
                      <path
                        d="m20.05 148.858 209.803 139.874c7.942 5.295 17.044 7.942 26.146 7.942 9.103 0 18.206-2.648 26.148-7.942L491.95 148.858c12.555-8.365 20.05-22.365 20.05-37.475 0-25.981-21.137-47.117-47.117-47.117H47.117C21.137 64.267 0 85.403 0 111.408a44.912 44.912 0 0 0 20.05 37.45z"
                        data-original="#000000" />
                    </svg>
                    <div>
                      <h4 class="font-semibold text-gray-900 text-sm mb-1">Email Address</h4>
                      <p class="text-gray-600 text-sm">m811664@gmail.com</p>
                    </div>
                  </div>
                </div>
              </div>

              <div class="bg-white rounded-lg p-6 shadow">
                <h3 class="text-xl font-semibold text-indigo-900 mb-6">Hours of Operation</h3>
                <div class="space-y-4">
                  <div class="flex justify-between">
                    <span class="text-gray-600 text-sm">Monday - Friday</span>
                    <span class="text-gray-800 text-sm">8:00 AM - 5:00 PM</span>
                  </div>
                  <div class="flex justify-between">
                    <span class="text-gray-600 text-sm">Saturday</span>
                    <span class="text-gray-800 text-sm">10:00 AM - 4:00 PM</span>
                  </div>
                  <div class="flex justify-between">
                    <span class="text-gray-600 text-sm">Sunday</span>
                    <span class="text-gray-800 text-sm">Closed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ComponentsView>
      <ComponentsView>
        <div class="p-8 mt-8 max-w-lg mx-auto">
          <h1 class="text-4xl text-gray-800 sm:text-4xl font-bold mb-4">Contact Form</h1>
          <form>
            <div class="p-2 w-full">
              <div class="relative">
                <label for="name" class="leading-7 py-4 text-lg text-gray-900">Name</label>
                <input type="text" id="name" name="name" required=""
                  class=" w-full bg-white rounded border border-gray-400 focus:border-orange-500 focus:bg-white focus:ring-2 focus:ring-orange-200 text-base outline-none text-gray-900 py-1 px-1 leading-8 transition-colors duration-200 ease-in-out " />
              </div>
            </div>
            <div class="p-2 w-full">
              <div class="relative">
                <label for="email" class="leading-7 py-4 text-lg text-gray-900">Email</label>
                <input type="email" id="email" name="email" required=""
                  class=" w-full bg-white rounded border border-gray-400 focus:border-orange-500 focus:bg-white focus:ring-2 focus:ring-orange-200 text-base outline-none text-gray-900 py-1 px-1 leading-8 transition-colors duration-200 ease-in-out" />
              </div>
            </div>
            <div class="p-2 w-full">
              <div class="relative">
                <label for="message" class="leading-7 py-4 text-lg text-gray-900">Message</label>
                <textarea id="message" name="message" required=""
                  class=" w-full bg-white rounded border border-gray-400 focus:border-orange-500 focus:bg-white focus:ring-2 focus:ring-orange-200 h-32 text-base outline-none text-gray-900 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
              </div>
            </div>
            <div class="p-2 w-full">
              <div>
                <button type="submit"
                  class="flex text-white bg-orange-700 border-0 py-3 px-6 focus:outline-none  rounded text-xl font-bold shadow-lg mx-0 flex-col text-center">
                  Send
                </button>
              </div>
            </div>
          </form>
        </div>
      </ComponentsView>
    </>
  )
}

export default Page