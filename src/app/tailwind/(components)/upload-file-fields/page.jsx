import { ComponentsView } from '@/components/CodeViewBoxTwo/Index'

function page() {
  return (
    <div>
      <ComponentsView className='' title='' link=''>
        <div class="font-[sans-serif] max-w-md mx-auto">
          <label class="text-base text-gray-500 font-semibold mb-2 block">Upload file</label>
          <input type="file"
            class="w-full text-gray-400 font-semibold text-sm bg-white border file:cursor-pointer cursor-pointer file:border-0 file:py-3 file:px-4 file:mr-4 file:bg-gray-100 file:hover:bg-gray-200 file:text-gray-500 rounded" />
          <p class="text-xs text-gray-400 mt-2">PNG, JPG SVG, WEBP, and GIF are Allowed.</p>
        </div>
      </ComponentsView>

      <ComponentsView className='' title='' link=''>
        <label for="uploadFile1"
          class="bg-white text-gray-500 font-semibold text-base rounded max-w-md h-52 flex flex-col items-center justify-center cursor-pointer border-2 border-gray-300 border-dashed mx-auto font-[sans-serif]">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-11 mb-2 fill-gray-500" viewBox="0 0 32 32">
            <path
              d="M23.75 11.044a7.99 7.99 0 0 0-15.5-.009A8 8 0 0 0 9 27h3a1 1 0 0 0 0-2H9a6 6 0 0 1-.035-12 1.038 1.038 0 0 0 1.1-.854 5.991 5.991 0 0 1 11.862 0A1.08 1.08 0 0 0 23 13a6 6 0 0 1 0 12h-3a1 1 0 0 0 0 2h3a8 8 0 0 0 .75-15.956z"
              data-original="#000000" />
            <path
              d="M20.293 19.707a1 1 0 0 0 1.414-1.414l-5-5a1 1 0 0 0-1.414 0l-5 5a1 1 0 0 0 1.414 1.414L15 16.414V29a1 1 0 0 0 2 0V16.414z"
              data-original="#000000" />
          </svg>
          Upload file

          <input type="file" id='uploadFile1' class="hidden" />
          <p class="text-xs font-medium text-gray-400 mt-2">PNG, JPG SVG, WEBP, and GIF are Allowed.</p>
        </label>
      </ComponentsView>

      <ComponentsView className='' title='' link=''>
        {/* <!-- component --> */}
        <div class=" flex items-center justify-center h-screen w-screen bg-white ">
          <div class="max-w-md mx-auto rounded-lg overflow-hidden md:max-w-xl">
            <div class="md:flex">
              <div class="w-full p-3">
                <div class="relative border-dotted h-48 rounded-lg border-dashed border-2 border-blue-700 bg-gray-100 flex justify-center items-center">

                  <div class="absolute">

                    <div class="flex flex-col items-center">
                      <i class="fa fa-folder-open fa-4x text-blue-700"></i>
                      <span class="block text-gray-400 font-normal">Attach you files here</span>
                    </div>
                  </div>

                  <input type="file" class="h-full w-full opacity-0" name="" />

                </div>
              </div>
            </div>
          </div>
        </div>
      </ComponentsView>

      <ComponentsView className='' title='' link=''>

        <div>
          <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="small_size">Small file input</label>
          <input class="block w-full mb-5 text-xs text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id="small_size" type="file" />

          <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="default_size">Default size</label>
          <input class="block w-full mb-5 text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id="default_size" type="file" />

          <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="large_size">Large file input</label>
          <input class="block w-full text-lg text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id="large_size" type="file" />
        </div>

      </ComponentsView>


    </div>
  )
}

export default page