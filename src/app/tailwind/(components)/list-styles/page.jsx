import { ComponentsView } from '@/components/CodeViewBoxTwo/Index'

function page() {
  return (
    <div>
      <ComponentsView className='' title='' link=''>

        <div>
        <h2 class="mb-2 text-lg font-semibold text-gray-900 dark:text-white">Password requirements:</h2>
        <ul class="max-w-md space-y-1 text-gray-500 list-inside dark:text-gray-400">
          <li class="flex items-center">
            <svg class="w-3.5 h-3.5 me-2 text-green-500 dark:text-green-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
            </svg>
            At least 10 characters
          </li>
          <li class="flex items-center">
            <svg class="w-3.5 h-3.5 me-2 text-green-500 dark:text-green-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
            </svg>
            At least one lowercase character
          </li>
          <li class="flex items-center">
            <svg class="w-3.5 h-3.5 me-2 text-gray-500 dark:text-gray-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
            </svg>
            At least one special character, e.g., ! @ # ?
          </li>
        </ul>
       </div>

      </ComponentsView>

      <ComponentsView className='' title='' link=''>

        <div>
        <h2 class="mb-2 text-lg font-semibold text-gray-900 dark:text-white">Top students:</h2>
        <ol class="max-w-md space-y-1 text-gray-500 list-decimal list-inside dark:text-gray-400">
          <li>
            <span class="font-semibold text-gray-900 dark:text-white">Bonnie Green</span> with <span class="font-semibold text-gray-900 dark:text-white">70</span> points
          </li>
          <li>
            <span class="font-semibold text-gray-900 dark:text-white">Jese Leos</span> with <span class="font-semibold text-gray-900 dark:text-white">63</span> points
          </li>
          <li>
            <span class="font-semibold text-gray-900 dark:text-white">Leslie Livingston</span> with <span class="font-semibold text-gray-900 dark:text-white">57</span> points
          </li>
        </ol>

       </div>
      </ComponentsView>

      <ComponentsView className='' title='' link=''>

        <dl class="max-w-md text-gray-900 divide-y divide-gray-200 dark:text-white dark:divide-gray-700">
          <div class="flex flex-col pb-3">
            <dt class="mb-1 text-gray-500 md:text-lg dark:text-gray-400">Email address</dt>
            <dd class="text-lg font-semibold">yourname@flowbite.com</dd>
          </div>
          <div class="flex flex-col py-3">
            <dt class="mb-1 text-gray-500 md:text-lg dark:text-gray-400">Home address</dt>
            <dd class="text-lg font-semibold">92 Miles Drive, Newark, NJ 07103, California, USA</dd>
          </div>
          <div class="flex flex-col pt-3">
            <dt class="mb-1 text-gray-500 md:text-lg dark:text-gray-400">Phone number</dt>
            <dd class="text-lg font-semibold">+00 123 456 789 / +12 345 678</dd>
          </div>
        </dl>

      </ComponentsView>

      <ComponentsView className='' title='' link=''>

        <ul class="max-w-md divide-y divide-gray-200 dark:divide-gray-700">
          <li class="pb-3 sm:pb-4">
            <div class="flex items-center space-x-4 rtl:space-x-reverse">
              <div class="flex-shrink-0">
                <img class="w-8 h-8 rounded-full" src="/docs/images/people/profile-picture-1.jpg" alt="Neil image"/>
              </div>
              <div class="flex-1 min-w-0">
                <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                  Neil Sims
                </p>
                <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                  email@flowbite.com
                </p>
              </div>
              <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                $320
              </div>
            </div>
          </li>
          <li class="py-3 sm:py-4">
            <div class="flex items-center space-x-4 rtl:space-x-reverse">
              <div class="flex-shrink-0">
                <img class="w-8 h-8 rounded-full" src="/docs/images/people/profile-picture-3.jpg" alt="Neil image"/>
              </div>
              <div class="flex-1 min-w-0">
                <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                  Bonnie Green
                </p>
                <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                  email@flowbite.com
                </p>
              </div>
              <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                $3467
              </div>
            </div>
          </li>
          <li class="py-3 sm:py-4">
            <div class="flex items-center space-x-4 rtl:space-x-reverse">
              <div class="flex-shrink-0">
                <img class="w-8 h-8 rounded-full" src="/docs/images/people/profile-picture-2.jpg" alt="Neil image"/>
              </div>
              <div class="flex-1 min-w-0">
                <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                  Michael Gough
                </p>
                <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                  email@flowbite.com
                </p>
              </div>
              <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                $67
              </div>
            </div>
          </li>
          <li class="py-3 sm:py-4">
            <div class="flex items-center space-x-4 rtl:space-x-reverse">
              <div class="flex-shrink-0">
                <img class="w-8 h-8 rounded-full" src="/docs/images/people/profile-picture-5.jpg" alt="Neil image"/>
              </div>
              <div class="flex-1 min-w-0">
                <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                  Thomas Lean
                </p>
                <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                  email@flowbite.com
                </p>
              </div>
              <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                $2367
              </div>
            </div>
          </li>
          <li class="pt-3 pb-0 sm:pt-4">
            <div class="flex items-center space-x-4 rtl:space-x-reverse">
              <div class="flex-shrink-0">
                <img class="w-8 h-8 rounded-full" src="/docs/images/people/profile-picture-4.jpg" alt="Neil image"/>
              </div>
              <div class="flex-1 min-w-0">
                <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                  Lana Byrd
                </p>
                <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                  email@flowbite.com
                </p>
              </div>
              <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                $367
              </div>
            </div>
          </li>
        </ul>

      </ComponentsView>

      <ComponentsView className='' title='' link=''>

        <ul class="flex flex-wrap items-center justify-center text-gray-900 dark:text-white">
          <li>
            <a href="#" class="me-4 hover:underline md:me-6 ">About</a>
          </li>
          <li>
            <a href="#" class="me-4 hover:underline md:me-6">Premium</a>
          </li>
          <li>
            <a href="#" class="me-4 hover:underline md:me-6 ">Campaigns</a>
          </li>
          <li>
            <a href="#" class="me-4 hover:underline md:me-6">Blog</a>
          </li>
          <li>
            <a href="#" class="me-4 hover:underline md:me-6">Affiliate Program</a>
          </li>
          <li>
            <a href="#" class="me-4 hover:underline md:me-6">FAQs</a>
          </li>
          <li>
            <a href="#" class="me-4 hover:underline md:me-6">Contact</a>
          </li>
        </ul>

      </ComponentsView>
    </div>
  )
}

export default page