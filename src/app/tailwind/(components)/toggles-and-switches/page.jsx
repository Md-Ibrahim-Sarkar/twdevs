import { ComponentsView } from '@/components/CodeViewBoxTwo/Index'

function page() {
  return (
    <div>
      <ComponentsView className='' title='' link=''>
        <div class="flex w-max gap-6">
          <div class="relative inline-block w-11 h-5">
            <input checked id="switch-component-blue" type="checkbox" class="peer appearance-none w-11 h-5 bg-slate-100 rounded-full checked:bg-blue-600 cursor-pointer transition-colors duration-300" />
            <label for="switch-component-blue" class="absolute top-0 left-0 w-5 h-5 bg-white rounded-full border border-slate-300 shadow-sm transition-transform duration-300 peer-checked:translate-x-6 peer-checked:border-blue-600 cursor-pointer">
            </label>
          </div>
          <div class="relative inline-block w-11 h-5">
            <input checked id="switch-component-red" type="checkbox" class="peer appearance-none w-11 h-5 bg-slate-100 rounded-full checked:bg-red-600 cursor-pointer transition-colors duration-300" />
            <label for="switch-component-red" class="absolute top-0 left-0 w-5 h-5 bg-white rounded-full border border-slate-300 shadow-sm transition-transform duration-300 peer-checked:translate-x-6 peer-checked:border-red-600 cursor-pointer">
            </label>
          </div>
          <div class="relative inline-block w-11 h-5">
            <input checked id="switch-component-green" type="checkbox" class="peer appearance-none w-11 h-5 bg-slate-100 rounded-full checked:bg-green-600 cursor-pointer transition-colors duration-300" />
            <label for="switch-component-green" class="absolute top-0 left-0 w-5 h-5 bg-white rounded-full border border-slate-300 shadow-sm transition-transform duration-300 peer-checked:translate-x-6 peer-checked:border-green-600 cursor-pointer">
            </label>
          </div>
          <div class="relative inline-block w-11 h-5">
            <input checked id="switch-component-amber" type="checkbox" class="peer appearance-none w-11 h-5 bg-slate-100 rounded-full checked:bg-amber-600 cursor-pointer transition-colors duration-300" />
            <label for="switch-component-amber" class="absolute top-0 left-0 w-5 h-5 bg-white rounded-full border border-slate-300 shadow-sm transition-transform duration-300 peer-checked:translate-x-6 peer-checked:border-amber-600 cursor-pointer">
            </label>
          </div>
          <div class="relative inline-block w-11 h-5">
            <input checked id="switch-component-teal" type="checkbox" class="peer appearance-none w-11 h-5 bg-slate-100 rounded-full checked:bg-teal-600 cursor-pointer transition-colors duration-300" />
            <label for="switch-component-teal" class="absolute top-0 left-0 w-5 h-5 bg-white rounded-full border border-slate-300 shadow-sm transition-transform duration-300 peer-checked:translate-x-6 peer-checked:border-teal-600 cursor-pointer">
            </label>
          </div>
          <div class="relative inline-block w-11 h-5">
            <input checked id="switch-component-indigo" type="checkbox" class="peer appearance-none w-11 h-5 bg-slate-100 rounded-full checked:bg-indigo-600 cursor-pointer transition-colors duration-300" />
            <label for="switch-component-indigo" class="absolute top-0 left-0 w-5 h-5 bg-white rounded-full border border-slate-300 shadow-sm transition-transform duration-300 peer-checked:translate-x-6 peer-checked:border-indigo-600 cursor-pointer">
            </label>
          </div>
          <div class="relative inline-block w-11 h-5">
            <input checked id="switch-component-purple" type="checkbox" class="peer appearance-none w-11 h-5 bg-slate-100 rounded-full checked:bg-purple-600 cursor-pointer transition-colors duration-300" />
            <label for="switch-component-purple" class="absolute top-0 left-0 w-5 h-5 bg-white rounded-full border border-slate-300 shadow-sm transition-transform duration-300 peer-checked:translate-x-6 peer-checked:border-purple-600 cursor-pointer">
            </label>
          </div>
          <div class="relative inline-block w-11 h-5">
            <input checked id="switch-component-pink" type="checkbox" class="peer appearance-none w-11 h-5 bg-slate-100 rounded-full checked:bg-pink-600 cursor-pointer transition-colors duration-300" />
            <label for="switch-component-pink" class="absolute top-0 left-0 w-5 h-5 bg-white rounded-full border border-slate-300 shadow-sm transition-transform duration-300 peer-checked:translate-x-6 peer-checked:border-pink-600 cursor-pointer">
            </label>
          </div>
        </div>
      </ComponentsView>

      <ComponentsView className='' title='' link=''>
        <label
          for="toggleFour"
          class="flex items-center cursor-pointer select-none text-dark dark:text-white"
        >
          <div class="relative">
            <input
              type="checkbox"
              id="toggleFour"
              class="peer sr-only"
            />
            <div
              class="block h-8 rounded-full box bg-dark dark:bg-dark-2 w-14 peer-checked:bg-primary"
            ></div>
            <div
              class="absolute flex items-center justify-center w-6 h-6 transition bg-white rounded-full dot left-1 top-1 dark:bg-dark-5 peer-checked:translate-x-full peer-checked:dark:bg-white"
            ></div>
          </div>
        </label>
      </ComponentsView>

      <ComponentsView className='' title='' link=''>
        <div class="flex h-screen w-full flex-col items-center justify-center gap-6 bg-white">
          <label class="relative inline-flex cursor-pointer items-center">
            <input id="switch" type="checkbox" class="peer sr-only" />
            <label for="switch" class="hidden"></label>
            <div class="peer h-6 w-11 rounded-full border bg-slate-200 after:absolute after:left-[2px] after:top-0.5 after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-slate-800 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:ring-green-300"></div>
          </label>

          <label class="relative inline-flex cursor-pointer items-center">
            <input id="switch-2" type="checkbox" class="peer sr-only" />
            <label for="switch-2" class="hidden"></label>
            <div class="peer h-4 w-11 rounded-full border bg-slate-200 after:absolute after:-top-1 after:left-0 after:h-6 after:w-6 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-green-300 peer-checked:after:translate-x-full peer-focus:ring-green-300"></div>
          </label>

          <label class="relative inline-flex cursor-pointer items-center">
            <input id="switch-3" type="checkbox" class="peer sr-only" />
            <label for="switch-3" class="hidden"></label>
            <div class="peer h-4 w-11 rounded border bg-slate-200 after:absolute after:-top-1 after:left-0 after:h-6 after:w-6 after:rounded-md after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-green-300 peer-checked:after:translate-x-full peer-focus:ring-green-300"></div>
          </label>
        </div>
      </ComponentsView>

    </div>
  )
}

export default page