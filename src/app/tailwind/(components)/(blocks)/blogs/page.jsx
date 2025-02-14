/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import { ComponentsView } from "@/components/CodeViewBoxTwo/Index"


const Page = () => {
  return (
    <>
      <div>
        <ComponentsView code={''} title="" link="" >
          <div class="bg-white font-[sans-serif] my-4">
            <div class="max-w-6xl mx-auto">
              <div class="text-center">
                <h2
                  class="text-3xl font-extrabold text-gray-800 inline-block relative after:absolute after:w-4/6 after:h-1 after:left-0 after:right-0 after:-bottom-4 after:mx-auto after:bg-pink-400 after:rounded-full">
                  LATEST BLOGS</h2>
              </div>
              <div
                class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-16 max-lg:max-w-3xl max-md:max-w-md mx-auto">
                <div
                  class="bg-white cursor-pointer rounded overflow-hidden shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] relative top-0 hover:-top-2 transition-all duration-300">
                  <img src="https://cdn.pixabay.com/photo/2021/01/21/14/44/laptop-5937580_640.jpg" alt="Blog Post 1"
                    class="w-full h-60 object-cover" />
                  <div class="p-6">
                    <span class="text-sm block text-gray-400 mb-2">1 FEB 2025 | BY JOHN DOE</span>
                    <h3 class="text-xl font-bold text-gray-800">A Guide to Igniting Your Imagination</h3>
                    <hr class="my-4" />
                    <p class="text-gray-400 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                      accumsan,
                      nunc et tempus blandit, metus mi consectetur felis turpis vitae ligula.</p>
                  </div>
                </div>
                <div
                  class="bg-white cursor-pointer rounded overflow-hidden shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] relative top-0 hover:-top-2 transition-all duration-300">
                  <img src="https://cdn.pixabay.com/photo/2020/09/09/14/47/man-5557864_1280.jpg" alt="Blog Post 2"
                    class="w-full h-60 object-cover" />
                  <div class="p-6">
                    <span class="text-sm block text-gray-400 mb-2">1 JUN 2025 | BY MARK ADAIR</span>
                    <h3 class="text-xl font-bold text-gray-800">Hacks to Supercharge Your Day</h3>
                    <hr class="my-4" />
                    <p class="text-gray-400 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                      accumsan,
                      nunc et tempus blandit, metus mi consectetur felis turpis vitae ligula.</p>
                  </div>
                </div>
                <div
                  class="bg-white cursor-pointer rounded overflow-hidden shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] relative top-0 hover:-top-2 transition-all duration-300">
                  <img
                    src="https://images.pexels.com/photos/3194523/pexels-photo-3194523.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt="Blog Post 3" class="w-full h-60 object-cover" />
                  <div class="p-6">
                    <span class="text-sm block text-gray-400 mb-2">5 JUN 2025 | BY SIMON KONECKI</span>
                    <h3 class="text-xl font-bold text-gray-800">Trends and Predictions</h3>
                    <hr class="my-4" />
                    <p class="text-gray-400 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                      accumsan,
                      nunc et tempus blandit, metus mi consectetur felis turpis vitae ligula.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ComponentsView>
        <ComponentsView code={''} title="" link="" >
          <div class="dark:bg-gray-100 dark:text-gray-900">
            <div class="container grid grid-cols-12 mx-auto">
              <div
                class="flex flex-col justify-center col-span-12 align-middle dark:bg-gray-300 bg-no-repeat bg-cover lg:col-span-6 lg:h-auto"
                style={{
                  backgroundImage: "url('https://source.unsplash.com/random/640x480')",
                  backgroundPosition: 'center center',
                  backgroundBlendMode: 'multiply',
                  backgroundSize: 'cover'
                }}>
                <div class="flex flex-col items-center p-8 py-12 text-center dark:text-gray-800">
                  <span>12 June</span>
                  <h1 class="py-4 text-5xl font-bold">Lorem, ipsum dolor sit amet consectetur adipisicing.</h1>
                  <p class="pb-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, a!</p>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-7 h-7">
                    <path fill-rule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clip-rule="evenodd"></path>
                  </svg>
                </div>
              </div>
              <div class="flex flex-col col-span-12 p-6 divide-y lg:col-span-6 lg:p-10 dark:divide-gray-300">
                <div class="pt-6 pb-4 space-y-2">
                  <span>12 June</span>
                  <h1 class="text-3xl font-bold">Lorem ipsum dolor sit.</h1>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, a!</p>
                  <a rel="noopener noreferrer" href="#"
                    class="inline-flex items-center py-2 space-x-2 text-sm hover:scale-110 dark:text-violet-600">
                    <span class="">Read more</span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-4 h-4">
                      <path fill-rule="evenodd"
                        d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                        clip-rule="evenodd"></path>
                    </svg>
                  </a>
                </div>
                <div class="pt-6 pb-4 space-y-2">
                  <span>12 June</span>
                  <h1 class="text-3xl font-bold">Lorem ipsum dolor sit.</h1>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, a!</p>
                  <a rel="noopener noreferrer" href="#"
                    class="inline-flex items-center py-2 space-x-2 text-sm hover:scale-110 dark:text-violet-600">
                    <span class="hover:scale-110">Read more</span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-4 h-4">
                      <path fill-rule="evenodd"
                        d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                        clip-rule="evenodd"></path>
                    </svg>
                  </a>
                </div>
                <div class="pt-6 pb-4 space-y-2">
                  <span>12 June</span>
                  <h1 class="text-3xl font-bold">Lorem ipsum dolor sit.</h1>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, a!</p>
                  <a rel="noopener noreferrer" href="#"
                    class="inline-flex items-center py-2 hover:scale-110 space-x-2 text-sm dark:text-violet-600">
                    <span>Read more</span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-4 h-4">
                      <path fill-rule="evenodd"
                        d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                        clip-rule="evenodd"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </ComponentsView>
        <ComponentsView code={''} title="" link="" >
          <div class="bg-white font-[sans-serif] p-4">
            <div class="max-w-6xl mx-auto">
              <div class="text-center max-w-xl mx-auto">
                <h2 class="text-3xl font-extrabold text-gray-800 inline-block">LATEST BLOGS</h2>
                <p class="text-gray-600 text-sm mt-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                  accumsan,
                  nunc et tempus blandit, metus mi consectetur felis turpis vitae ligula.</p>
              </div>
              <div
                class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-12 max-lg:max-w-3xl max-md:max-w-md mx-auto">
                <div
                  class="bg-white cursor-pointer rounded-lg overflow-hidden group relative before:absolute before:inset-0 before:z-10 before:bg-black before:opacity-60">
                  <img
                    src="https://images.pexels.com/photos/4240505/pexels-photo-4240505.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt="Blog Post 1"
                    class="w-full h-96 object-cover group-hover:scale-110 transition-all duration-300" />
                  <div class="p-6 absolute bottom-0 left-0 right-0 z-20">
                    <span class="text-sm block mb-2 text-yellow-400 font-semibold">10 FEB 2023 | BY JOHN DOE</span>
                    <h3 class="text-xl font-bold text-white">A Guide to Igniting Your Imagination</h3>
                    <div class="mt-4">
                      <p class="text-gray-200 text-sm ">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                        accumsan, nunc et tempus blandit, metus mi consectetur felis turpis vitae ligula.</p>
                    </div>
                  </div>
                </div>
                <div
                  class="bg-white cursor-pointer rounded-lg overflow-hidden group relative before:absolute before:inset-0 before:z-10 before:bg-black before:opacity-60">
                  <img
                    src="https://images.pexels.com/photos/4240507/pexels-photo-4240507.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt="Blog Post 2"
                    class="w-full h-96 object-cover group-hover:scale-110 transition-all duration-300" />
                  <div class="p-6 absolute bottom-0 left-0 right-0 z-20">
                    <span class="text-sm block mb-2 text-yellow-400 font-semibold">7 JUN 2023 | BY MARK ADAIR</span>
                    <h3 class="text-xl font-bold text-white">Hacks to Supercharge Your Day</h3>
                    <div class="mt-4">
                      <p class="text-gray-200 text-sm ">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                        accumsan, nunc et tempus blandit, metus mi consectetur felis turpis vitae ligula.</p>
                    </div>
                  </div>
                </div>
                <div
                  class="bg-white cursor-pointer rounded-lg overflow-hidden group relative before:absolute before:inset-0 before:z-10 before:bg-black before:opacity-60">
                  <img
                    src="https://images.pexels.com/photos/5052851/pexels-photo-5052851.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt="Blog Post 3"
                    class="w-full h-96 object-cover group-hover:scale-110 transition-all duration-300" />
                  <div class="p-6 absolute bottom-0 left-0 right-0 z-20">
                    <span class="text-sm block mb-2 text-yellow-400 font-semibold">5 OCT 2023 | BY SIMON KONECKI</span>
                    <h3 class="text-xl font-bold text-white">Trends and Predictions</h3>
                    <div class="mt-4">
                      <p class="text-gray-200 text-sm ">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                        accumsan, nunc et tempus blandit, metus mi consectetur felis turpis vitae ligula.</p>
                    </div>
                  </div>
                </div>
                <div
                  class="bg-white cursor-pointer rounded-lg overflow-hidden group relative before:absolute before:inset-0 before:z-10 before:bg-black before:opacity-60">
                  <img
                    src="https://images.pexels.com/photos/305086/pexels-photo-305086.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt="Blog Post 3"
                    class="w-full h-96 object-cover group-hover:scale-110 transition-all duration-300" />
                  <div class="p-6 absolute bottom-0 left-0 right-0 z-20">
                    <span class="text-sm block mb-2 text-yellow-400 font-semibold">5 OCT 2023 | BY SIMON KONECKI</span>
                    <h3 class="text-xl font-bold text-white">Trends and Predictions</h3>
                    <div class="mt-4">
                      <p class="text-gray-200 text-sm ">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                        accumsan, nunc et tempus blandit, metus mi consectetur felis turpis vitae ligula.</p>
                    </div>
                  </div>
                </div>
                <div
                  class="bg-white cursor-pointer rounded-lg overflow-hidden group relative before:absolute before:inset-0 before:z-10 before:bg-black before:opacity-60">
                  <img
                    src="https://images.pexels.com/photos/8978878/pexels-photo-8978878.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt="Blog Post 3"
                    class="w-full h-96 object-cover group-hover:scale-110 transition-all duration-300" />
                  <div class="p-6 absolute bottom-0 left-0 right-0 z-20">
                    <span class="text-sm block mb-2 text-yellow-400 font-semibold">5 OCT 2023 | BY SIMON KONECKI</span>
                    <h3 class="text-xl font-bold text-white">Trends and Predictions</h3>
                    <div class="mt-4">
                      <p class="text-gray-200 text-sm ">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                        accumsan, nunc et tempus blandit, metus mi consectetur felis turpis vitae ligula.</p>
                    </div>
                  </div>
                </div>
                <div
                  class="bg-white cursor-pointer rounded-lg overflow-hidden group relative before:absolute before:inset-0 before:z-10 before:bg-black before:opacity-60">
                  <img
                    src="https://images.pexels.com/photos/243757/pexels-photo-243757.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt="Blog Post 3"
                    class="w-full h-96 object-cover group-hover:scale-110 transition-all duration-300" />
                  <div class="p-6 absolute bottom-0 left-0 right-0 z-20">
                    <span class="text-sm block mb-2 text-yellow-400 font-semibold">5 OCT 2023 | BY SIMON KONECKI</span>
                    <h3 class="text-xl font-bold text-white">Trends and Predictions</h3>
                    <div class="mt-4">
                      <p class="text-gray-200 text-sm ">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                        accumsan, nunc et tempus blandit, metus mi consectetur felis turpis vitae ligula.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ComponentsView>

        <ComponentsView code={''} title="" link="" >
          <div class="bg-gray-100 md:px-10 px-4 py-12 font-[sans-serif]">
            <div class="max-w-5xl max-lg:max-w-3xl max-sm:max-w-sm mx-auto">
              <h2 class="text-3xl font-extrabold text-gray-800 mb-8">Latest Blog Posts</h2>
              <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-sm:gap-8">
                <div class="bg-white rounded overflow-hidden">
                  <img
                    src="https://images.pexels.com/photos/212372/pexels-photo-212372.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt="Blog Post 1" class="w-full h-52 object-cover" />
                  <div class="p-6">
                    <h3 class="text-lg font-bold text-gray-800 mb-3">Lorem Ipsum Dolor</h3>
                    <p class="text-gray-500 text-sm">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                      dolore...</p>
                    <p class="text-orange-500 text-[13px] font-semibold mt-4">1 JUN 2025</p>
                    <a href="javascript:void(0);"
                      class="mt-4 inline-block px-4 py-2 rounded tracking-wider bg-red-500 hover:scale-105 hover:bg-orange-600 text-white text-[13px]">Read
                      More</a>
                  </div>
                </div>
                <div class="bg-white rounded overflow-hidden">
                  <img
                    src="https://images.pexels.com/photos/225157/pexels-photo-225157.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt="Blog Post 2" class="w-full h-52 object-cover" />
                  <div class="p-6">
                    <h3 class="text-lg font-bold text-gray-800 mb-3">Consectetur Adipiscing</h3>
                    <p class="text-gray-500 text-sm">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                      dolore...</p>
                    <p class="text-orange-500 text-[13px] font-semibold mt-4">1 JUN 2025</p>
                    <a href="javascript:void(0);"
                      class="mt-4 inline-block px-4 py-2 rounded tracking-wider bg-red-500 hover:scale-105 hover:bg-orange-600 text-white text-[13px]">Read
                      More</a>
                  </div>
                </div>
                <div class="bg-white rounded overflow-hidden">
                  <img
                    src="https://images.pexels.com/photos/821750/pexels-photo-821750.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt="Blog Post 3" class="w-full h-52 object-cover" />
                  <div class="p-6">
                    <h3 class="text-lg font-bold text-gray-800 mb-3">Lorem Ipsum Sit Amet</h3>
                    <p class="text-gray-500 text-sm">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                      dolore...</p>
                    <p class="text-orange-500 text-[13px] font-semibold mt-4">1 JUN 2025</p>
                    <a href="javascript:void(0);"
                      class="mt-4 inline-block px-4 py-2 rounded tracking-wider bg-red-500 hover:scale-105 hover:bg-orange-600 text-white text-[13px]">Read
                      More</a>
                  </div>
                </div>
                <div class="bg-white rounded overflow-hidden">
                  <img src="https://images.pexels.com/photos/19671/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600"
                    alt="Blog Post 3" class="w-full h-52 object-cover" />
                  <div class="p-6">
                    <h3 class="text-lg font-bold text-gray-800 mb-3">Lorem Ipsum Sit Amet</h3>
                    <p class="text-gray-500 text-sm">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                      dolore...</p>
                    <p class="text-orange-500 text-[13px] font-semibold mt-4">1 JUN 2025</p>
                    <a href="javascript:void(0);"
                      class="mt-4 inline-block px-4 py-2 rounded tracking-wider bg-red-500 hover:scale-105 hover:bg-orange-600 text-white text-[13px]">Read
                      More</a>
                  </div>
                </div>
                <div class="bg-white rounded overflow-hidden">
                  <img
                    src="https://images.pexels.com/photos/1117132/pexels-photo-1117132.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt="Blog Post 3" class="w-full h-52 object-cover" />
                  <div class="p-6">
                    <h3 class="text-lg font-bold text-gray-800 mb-3">Lorem Ipsum Sit Amet</h3>
                    <p class="text-gray-500 text-sm">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                      dolore...</p>
                    <p class="text-orange-500 text-[13px] font-semibold mt-4">08 April 2024</p>
                    <a href="javascript:void(0);"
                      class="mt-4 inline-block px-4 py-2 rounded tracking-wider hover:scale-105 bg-red-500 hover:bg-orange-600 text-white text-[13px]">Read
                      More</a>
                  </div>
                </div>
                <div class="bg-white rounded overflow-hidden">
                  <img src="https://images.pexels.com/photos/69970/pexels-photo-69970.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt="Blog Post 3" class="w-full h-52 object-cover" />
                  <div class="p-6">
                    <h3 class="text-lg font-bold text-gray-800 mb-3">Lorem Ipsum Sit Amet</h3>
                    <p class="text-gray-500 text-sm">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                      dolore...</p>
                    <p class="text-orange-500 text-[13px] font-semibold mt-4">1 JUN 2025</p>
                    <a href="#"
                      class="mt-4 inline-block px-4 py-2 hover:scale-105 rounded tracking-wider bg-red-500 hover:bg-orange-600 text-white text-[13px]">Read
                      More</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ComponentsView>
        <ComponentsView code={''} title="" link="" >
          <div class="bg-gray-50 sm:px-6 px-4 py-12 font-sans">
            <div class="max-w-7xl mx-auto">
              <div class="text-left">
                <h2 class="text-3xl font-extrabold text-gray-800 inline-block">LATEST BLOGS</h2>
              </div>
              <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mt-16 max-md:max-w-lg mx-auto">
                <div class="cursor-pointer rounded overflow-hidden group">
                  <div>
                    <span class="text-sm block text-gray-400 mb-2">10 JUN 2025</span>
                    <h3 class="text-xl font-bold text-gray-800 group-hover:text-blue-500 transition-all">A Guide to
                      Igniting
                      Your Imagination</h3>
                    <div class="mt-4">
                      <p class="text-gray-400 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                        accumsan, nunc et tempus blandit, metus mi consectetur felis turpis vitae ligula.</p>
                    </div>
                  </div>
                  <hr class="my-5 border-gray-300" />
                  <div class="flex flex-wrap items-center gap-3">
                    <img
                      src='https://images.pexels.com/photos/1121796/pexels-photo-1121796.jpeg?auto=compress&cs=tinysrgb&w=600'
                      class="w-9 h-9 rounded-full" />
                    <p class="text-xs text-gray-400 font-semibold">BY RAKIB</p>
                  </div>
                </div>
                <div class="cursor-pointer rounded overflow-hidden group">
                  <div>
                    <span class="text-sm block text-gray-400 mb-2">10 JUN 2025</span>
                    <h3 class="text-xl font-bold text-gray-800 group-hover:text-blue-500 transition-all">Hacks to
                      Supercharge
                      Your Day</h3>
                    <div class="mt-4">
                      <p class="text-gray-400 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                        accumsan, nunc et tempus blandit, metus mi consectetur felis turpis vitae ligula.</p>
                    </div>
                  </div>
                  <hr class="my-5 border-gray-300" />
                  <div class="flex flex-wrap items-center gap-3">
                    <img
                      src='https://images.pexels.com/photos/839011/pexels-photo-839011.jpeg?auto=compress&cs=tinysrgb&w=600'
                      class="w-9 h-9 rounded-full" />
                    <p class="text-xs text-gray-400 font-semibold">BY NABIL</p>
                  </div>
                </div>
                <div class="cursor-pointer rounded overflow-hidden group">
                  <div>
                    <span class="text-sm block text-gray-400 mb-2">10 JUN 2025</span>
                    <h3 class="text-xl font-bold text-gray-800 group-hover:text-blue-500 transition-all">Trends and
                      Predictions</h3>
                    <div class="mt-4">
                      <p class="text-gray-400 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                        accumsan, nunc et tempus blandit, metus mi consectetur felis turpis vitae ligula.</p>
                    </div>
                  </div>
                  <hr class="my-5 border-gray-300" />
                  <div class="flex flex-wrap items-center gap-3">
                    <img
                      src='https://images.pexels.com/photos/715546/pexels-photo-715546.jpeg?auto=compress&cs=tinysrgb&w=600'
                      class="w-9 h-9 rounded-full" />
                    <p class="text-xs text-gray-400 font-semibold">BY SHAKIB</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ComponentsView>
        <ComponentsView code={''} title="" link="" >
          <div class="bg-white font-sans p-4">
            <div class="max-w-5xl max-lg:max-w-3xl max-md:max-w-sm mx-auto">
              <div>
                <h2 class="text-3xl font-extrabold text-gray-800 inline-block">LATEST BLOGS</h2>
              </div>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
                <div
                  class="flex max-lg:flex-col bg-white cursor-pointer rounded overflow-hidden shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] hover:scale-[1.03] transition-all duration-300">
                  <div class="h-64 lg:w-full">
                    <img
                      src="https://media.istockphoto.com/id/1587315781/photo/happy-laughing-guy-posing-with-arms-folded.webp?b=1&s=612x612&w=0&k=20&c=2vc79-lwuUHL6tRZvOujXNwlxZEmV-7Og-OXtZNP9MU="
                      alt="Blog Post 1" class="w-full h-full object-cover" />
                  </div>
                  <div class="p-6">
                    <h3 class="text-xl font-bold text-gray-800">A Guide to Igniting Your Imagination</h3>
                    <span class="text-sm block text-gray-400 mt-2">10 JUN 2025 | BY RAKIB</span>
                    <p class="text-sm text-gray-500 mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                      accumsan, nunc et tempus blandit.</p>
                    <a href="#" class="mt-4 inline-block text-blue-600 font-semibold text-sm hover:underline">Read
                      More</a>
                  </div>
                </div>
                <div
                  class="flex max-lg:flex-col bg-white cursor-pointer rounded overflow-hidden shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] hover:scale-[1.03] transition-all duration-300">
                  <div class="h-64 lg:w-full">
                    <img
                      src="https://images.pexels.com/photos/775279/pexels-photo-775279.jpeg?auto=compress&cs=tinysrgb&w=600"
                      alt="Blog Post 2" class="w-full h-full object-cover" />
                  </div>
                  <div class="p-6">
                    <h3 class="text-xl font-bold text-gray-800">Hacks to Supercharge Your Day</h3>
                    <span class="text-sm block text-gray-400 mt-2">1 JUN 2025 | BY NABIL</span>
                    <p class="text-sm text-gray-500 mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                      accumsan, nunc et tempus blandit.</p>
                    <a href="#" class="mt-4 inline-block text-blue-600 font-semibold text-sm hover:underline">Read
                      More</a>
                  </div>
                </div>
                <div
                  class="flex max-lg:flex-col bg-white cursor-pointer rounded overflow-hidden shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] hover:scale-[1.03] transition-all duration-300">
                  <div class="h-64 lg:w-full">
                    <img
                      src="https://images.pexels.com/photos/1496647/pexels-photo-1496647.jpeg?auto=compress&cs=tinysrgb&w=600"
                      alt="Blog Post 2" class="w-full h-full object-cover" />
                  </div>
                  <div class="p-6">
                    <h3 class="text-xl font-bold text-gray-800">Trends and Predictions</h3>
                    <span class="text-sm block text-gray-400 mt-2">1 JUN 2025 | BY SHAKIB</span>
                    <p class="text-sm text-gray-500 mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                      accumsan, nunc et tempus blandit.</p>
                    <a href="#" class="mt-4 inline-block text-blue-600 font-semibold text-sm hover:underline">Read
                      More</a>
                  </div>
                </div>
                <div
                  class="flex max-lg:flex-col bg-white cursor-pointer rounded overflow-hidden shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] hover:scale-[1.03] transition-all duration-300">
                  <div class="h-64 lg:w-full">
                    <img
                      src="https://images.pexels.com/photos/39866/entrepreneur-startup-start-up-man-39866.jpeg?auto=compress&cs=tinysrgb&w=600"
                      alt="Blog Post 2" class="w-full h-full object-cover" />
                  </div>
                  <div class="p-6">
                    <h3 class="text-xl font-bold text-gray-800">Innovators Changing the Game</h3>
                    <span class="text-sm block text-gray-400 mt-2">10 JUN 2025 | BY SHAKIB</span>
                    <p class="text-sm text-gray-500 mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                      accumsan, nunc et tempus blandit.</p>
                    <a href="#" class="mt-4 inline-block text-blue-600 font-semibold text-sm hover:underline">Read
                      More</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ComponentsView>
        <ComponentsView code={''} title="" link="" >
          <div class="bg-white font-sans">
            <div class="max-w-6xl mx-auto p-4">
              <div class="text-center">
                <h2
                  class="text-3xl font-extrabold text-gray-800 inline-block relative after:absolute after:w-4/6 after:h-1 after:left-0 after:right-0 after:-bottom-4 after:mx-auto after:bg-red-400 after:rounded-lg-full">
                  LATEST BLOGS</h2>
              </div>
              <div
                class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16 max-lg:max-w-3xl max-md:max-w-md mx-auto">
                <div
                  class="bg-white cursor-pointer rounded-lg overflow-hidden shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] relative group">
                  <img
                    src="https://images.pexels.com/photos/440731/pexels-photo-440731.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt="Blog Post 1" class="w-full h-96 object-cover" />
                  <div class="p-6 absolute bottom-0 left-0 right-0 bg-red-200 opacity-90">
                    <span class="text-sm block text-gray-800 mb-2">10 JUN 2025 | BY RAKIB</span>
                    <h3 class="text-xl font-bold text-gray-800">Igniting Your Imagination</h3>
                    <div class="h-0 overflow-hidden group-hover:h-16 group-hover:mt-4 transition-all duration-300">
                      <p class="text-gray-800 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                        accumsan, nunc et tempus blandit, metus mi consectetur felis turpis vitae ligula.</p>
                    </div>
                  </div>
                </div>
                <div
                  class="bg-white cursor-pointer rounded-lg overflow-hidden shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] relative group">
                  <img
                    src="https://images.pexels.com/photos/957024/forest-trees-perspective-bright-957024.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt="Blog Post 2" class="w-full h-96 object-cover" />
                  <div class="p-6 absolute bottom-0 left-0 right-0 bg-red-200 opacity-90">
                    <span class="text-sm block text-gray-800 mb-2">7 JUN 2025 | BY MAMON</span>
                    <h3 class="text-xl font-bold text-gray-800">Hacks to Supercharge Your Day</h3>
                    <div class="h-0 overflow-hidden group-hover:h-16 group-hover:mt-4 transition-all duration-300">
                      <p class="text-gray-800 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                        accumsan, nunc et tempus blandit, metus mi consectetur felis turpis vitae ligula.</p>
                    </div>
                  </div>
                </div>
                <div
                  class="bg-white cursor-pointer rounded-lg overflow-hidden shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] relative group">
                  <img
                    src="https://images.pexels.com/photos/35196/water-plant-green-fine-layers.jpg?auto=compress&cs=tinysrgb&w=600"
                    alt="Blog Post 3" class="w-full h-96 object-cover" />
                  <div class="p-6 absolute bottom-0 left-0 right-0 bg-red-200 opacity-90">
                    <span class="text-sm block text-gray-800 mb-2">5 JUN 2025 | BY SHAKIB</span>
                    <h3 class="text-xl font-bold text-gray-800">Trends and Predictions</h3>
                    <div class="h-0 overflow-hidden group-hover:h-16 group-hover:mt-4 transition-all duration-300">
                      <p class="text-gray-800 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                        accumsan, nunc et tempus blandit, metus mi consectetur felis turpis vitae ligula.</p>
                    </div>
                  </div>
                </div>
                <div
                  class="bg-white cursor-pointer rounded-lg overflow-hidden shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] relative group">
                  <img
                    src="https://images.pexels.com/photos/409696/pexels-photo-409696.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt="Blog Post 3" class="w-full h-96 object-cover" />
                  <div class="p-6 absolute bottom-0 left-0 right-0 bg-red-200 opacity-90">
                    <span class="text-sm block text-gray-800 mb-2">5 JUN 2025 | BY NABIL</span>
                    <h3 class="text-xl font-bold text-gray-800">Trends and Predictions</h3>
                    <div class="h-0 overflow-hidden group-hover:h-16 group-hover:mt-4 transition-all duration-300">
                      <p class="text-gray-800 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                        accumsan, nunc et tempus blandit, metus mi consectetur felis turpis vitae ligula.</p>
                    </div>
                  </div>
                </div>
                <div
                  class="bg-white cursor-pointer rounded-lg overflow-hidden shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] relative group">
                  <img
                    src="https://images.pexels.com/photos/66869/green-leaf-natural-wallpaper-royalty-free-66869.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt="Blog Post 3" class="w-full h-96 object-cover" />
                  <div class="p-6 absolute bottom-0 left-0 right-0 bg-red-200 opacity-90">
                    <span class="text-sm block text-gray-800 mb-2">5 JUN 2025 | BY SHAKIB</span>
                    <h3 class="text-xl font-bold text-gray-800">Trends and Predictions</h3>
                    <div class="h-0 overflow-hidden group-hover:h-16 group-hover:mt-4 transition-all duration-300">
                      <p class="text-gray-800 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                        accumsan, nunc et tempus blandit, metus mi consectetur felis turpis vitae ligula.</p>
                    </div>
                  </div>
                </div>
                <div
                  class="bg-white cursor-pointer rounded-lg overflow-hidden shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] relative group">
                  <img
                    src="https://images.pexels.com/photos/192136/pexels-photo-192136.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt="Blog Post 3" class="w-full h-96 object-cover" />
                  <div class="p-6 absolute bottom-0 left-0 right-0 bg-red-200 opacity-90">
                    <span class="text-sm block text-gray-800 mb-2">5 JUN 2025 | BY RAKIB</span>
                    <h3 class="text-xl font-bold text-gray-800">Trends and Predictions</h3>
                    <div class="h-0 overflow-hidden group-hover:h-16 group-hover:mt-4 transition-all duration-300">
                      <p class="text-gray-800 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                        accumsan, nunc et tempus blandit, metus mi consectetur felis turpis vitae ligula.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ComponentsView>
        <ComponentsView code={''} title="" link="" >
          <div class="bg-white px-4 py-10 font-sans">
            <div class="max-w-6xl max-lg:max-w-3xl max-sm:max-w-sm mx-auto">
              <div class="text-center">
                <h2 class="text-3xl font-extrabold text-gray-800">LATEST BLOGS</h2>
              </div>
              <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 max-sm:gap-8 mt-12">
                <div class="overflow-hidden p-4 rounded-md bg-purple-100  hover:bg-purple-300 transition-all duration-300">
                  <img
                    src="https://images.pexels.com/photos/749114/pexels-photo-749114.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt="Blog Post 1" class="w-full h-64 object-cover rounded-md" />
                  <div class="text-center">
                    <span class="text-sm block text-gray-800 mb-2 mt-4">10 JUN 2025 | BY RAKIB</span>
                    <h3 class="text-xl font-bold text-gray-800 mb-4">Igniting Your Imagination</h3>
                    <p class="text-gray-800 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                      accumsan,
                      nunc et tempus blandit, metus mi consectetur felis turpis vitae ligula.</p>
                    <button type="button"
                      class="px-5 py-2.5 text-white text-sm tracking-wider border-none outline-none rounded-md bg-purple-500 hover:bg-purple-600 mt-6">Read
                      more</button>
                  </div>
                </div>

                <div class="overflow-hidden p-4 bg-purple-100  rounded-md hover:bg-purple-300 transition-all duration-300">
                  <img
                    src="https://images.pexels.com/photos/1113145/pexels-photo-1113145.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt="Blog Post 2" class="w-full h-64 object-cover rounded-md" />
                  <div class="text-center">
                    <span class="text-sm block text-gray-800 mb-2 mt-4">7 JUN 2025 | BY SHAKIB</span>
                    <h3 class="text-xl font-bold text-gray-800 mb-4">Hacks to Supercharge Your Day</h3>
                    <p class="text-gray-800 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                      accumsan,
                      nunc et tempus blandit, metus mi consectetur felis turpis vitae ligula.</p>
                    <button type="button"
                      class="px-5 py-2.5 text-white text-sm tracking-wider border-none outline-none rounded-md bg-purple-500 hover:bg-purple-600 mt-6">Read
                      more</button>
                  </div>
                </div>

                <div class="overflow-hidden p-4 bg-purple-100 rounded-md hover:bg-purple-300 transition-all duration-300">
                  <img
                    src="https://images.pexels.com/photos/867349/pexels-photo-867349.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt="Blog Post 3" class="w-full h-64 object-cover rounded-md" />
                  <div class="text-center">
                    <span class="text-sm block text-gray-800 mb-2 mt-4">5 JUN 2025 | BY NABIL</span>
                    <h3 class="text-xl font-bold text-gray-800 mb-4">Trends and Predictions</h3>
                    <p class="text-gray-800 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                      accumsan,
                      nunc et tempus blandit, metus mi consectetur felis turpis vitae ligula.</p>
                    <button type="button"
                      class="px-5 py-2.5 text-white text-sm tracking-wider border-none outline-none rounded-md bg-purple-500 hover:bg-purple-600 mt-6">Read
                      more</button>
                  </div>
                </div>


                <div class="overflow-hidden p-4 bg-purple-100 rounded-md hover:bg-purple-300 transition-all duration-300">
                  <img
                    src="https://images.pexels.com/photos/906150/pexels-photo-906150.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt="Blog Post 3" class="w-full h-64 object-cover rounded-md" />
                  <div class="text-center">
                    <span class="text-sm block text-gray-800 mb-2 mt-4">5 JUN 2025 | BY NABIL</span>
                    <h3 class="text-xl font-bold text-gray-800 mb-4">Trends and Predictions</h3>
                    <p class="text-gray-800 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                      accumsan,
                      nunc et tempus blandit, metus mi consectetur felis turpis vitae ligula.</p>
                    <button type="button"
                      class="px-5 py-2.5 text-white text-sm tracking-wider border-none outline-none rounded-md bg-purple-500 hover:bg-purple-600 mt-6">Read
                      more</button>
                  </div>
                </div>

                <div class="overflow-hidden p-4 bg-purple-100 rounded-md hover:bg-purple-300 transition-all duration-300">
                  <img
                    src="https://images.pexels.com/photos/376533/pexels-photo-376533.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt="Blog Post 3" class="w-full h-64 object-cover rounded-md" />
                  <div class="text-center">
                    <span class="text-sm block text-gray-800 mb-2 mt-4">5 JUN 2025 | BY NABIL</span>
                    <h3 class="text-xl font-bold text-gray-800 mb-4">Trends and Predictions</h3>
                    <p class="text-gray-800 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                      accumsan,
                      nunc et tempus blandit, metus mi consectetur felis turpis vitae ligula.</p>
                    <button type="button"
                      class="px-5 py-2.5 text-white text-sm tracking-wider border-none outline-none rounded-md bg-purple-500 hover:bg-purple-600 mt-6">Read
                      more</button>
                  </div>
                </div>

                <div class="overflow-hidden p-4 bg-purple-100 rounded-md hover:bg-purple-300 transition-all duration-300">
                  <img
                    src="https://images.pexels.com/photos/253905/pexels-photo-253905.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt="Blog Post 3" class="w-full h-64 object-cover rounded-md" />
                  <div class="text-center">
                    <span class="text-sm block text-gray-800 mb-2 mt-4">5 JUN 2025 | BY NABIL</span>
                    <h3 class="text-xl font-bold text-gray-800 mb-4">Trends and Predictions</h3>
                    <p class="text-gray-800 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                      accumsan,
                      nunc et tempus blandit, metus mi consectetur felis turpis vitae ligula.</p>
                    <button type="button"
                      class="px-5 py-2.5 text-white text-sm tracking-wider border-none outline-none rounded-md bg-purple-500 hover:bg-purple-600 mt-6">Read
                      more</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ComponentsView>
        <ComponentsView code={''} title="" link="" >
          <section class="dark:bg-gray-100 dark:text-gray-800">
            <div class="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
              <a rel="noopener noreferrer" href="#"
                class="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 dark:bg-gray-50">
                <img
                  src="https://images.pexels.com/photos/1133957/pexels-photo-1133957.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="" class="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 dark:bg-gray-500" />
                <div class="p-6 space-y-2 lg:col-span-5">
                  <h3 class="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">
                    LATEST BLOGS</h3>
                  <span class="text-xs dark:text-gray-600">JUN, 2025</span>
                  <p>Ei delenit sensibus liberavisse pri. Quod suscipit no nam. Est in graece fuisset, eos affert putent
                    doctus id.</p>
                </div>
              </a>
              <div class="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                <a rel="noopener noreferrer" href="#"
                  class="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-50">
                  <img role="presentation" class="object-cover w-full rounded h-44 dark:bg-gray-500"
                    src="https://images.pexels.com/photos/126271/pexels-photo-126271.jpeg?auto=compress&cs=tinysrgb&w=600" />
                  <div class="p-6 space-y-2">
                    <h3 class="text-2xl font-semibold group-hover:underline group-focus:underline">In usu laoreet
                      repudiare
                      legendos</h3>
                    <span class="text-xs dark:text-gray-600">JUN 21, 2025</span>
                    <p>Mei ex aliquid eleifend forensibus, quo ad dicta apeirian neglegentur, ex has tantas percipit
                      perfecto. At per tempor albucius perfecto, ei probatus consulatu patrioque mea, ei vocent delicata
                      indoctum pri.</p>
                  </div>
                </a>
                <a rel="noopener noreferrer" href="#"
                  class="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-50">
                  <img role="presentation" class="object-cover w-full rounded h-44 dark:bg-gray-500"
                    src="https://images.pexels.com/photos/208421/pexels-photo-208421.jpeg?auto=compress&cs=tinysrgb&w=600" />
                  <div class="p-6 space-y-2">
                    <h3 class="text-2xl font-semibold group-hover:underline group-focus:underline">
                      LATEST BLOGS</h3>
                    <span class="text-xs dark:text-gray-600">JUN 22, 2025</span>
                    <p>Mei ex aliquid eleifend forensibus, quo ad dicta apeirian neglegentur, ex has tantas percipit
                      perfecto. At per tempor albucius perfecto, ei probatus consulatu patrioque mea, ei vocent delicata
                      indoctum pri.</p>
                  </div>
                </a>
                <a rel="noopener noreferrer" href="#"
                  class="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-50">
                  <img role="presentation" class="object-cover w-full rounded h-44 dark:bg-gray-500"
                    src="https://images.pexels.com/photos/334978/pexels-photo-334978.jpeg?auto=compress&cs=tinysrgb&w=600" />
                  <div class="p-6 space-y-2">
                    <h3 class="text-2xl font-semibold group-hover:underline group-focus:underline">In usu laoreet
                      repudiare
                      legendos</h3>
                    <span class="text-xs dark:text-gray-600">JUN 23, 2025</span>
                    <p>Mei ex aliquid eleifend forensibus, quo ad dicta apeirian neglegentur, ex has tantas percipit
                      perfecto. At per tempor albucius perfecto, ei probatus consulatu patrioque mea, ei vocent delicata
                      indoctum pri.</p>
                  </div>
                </a>
                <a rel="noopener noreferrer" href="#"
                  class="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-50 hidden sm:block">
                  <img role="presentation" class="object-cover w-full rounded h-44 dark:bg-gray-500"
                    src="https://images.pexels.com/photos/1043458/pexels-photo-1043458.jpeg?auto=compress&cs=tinysrgb&w=600" />
                  <div class="p-6 space-y-2">
                    <h3 class="text-2xl font-semibold group-hover:underline group-focus:underline">In usu laoreet
                      repudiare
                      legendos</h3>
                    <span class="text-xs dark:text-gray-600">JUN 24, 2025</span>
                    <p>Mei ex aliquid eleifend forensibus, quo ad dicta apeirian neglegentur, ex has tantas percipit
                      perfecto. At per tempor albucius perfecto, ei probatus consulatu patrioque mea, ei vocent delicata
                      indoctum pri.</p>
                  </div>
                </a>
                <a rel="noopener noreferrer" href="#"
                  class="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-50 hidden sm:block">
                  <img role="presentation" class="object-cover w-full rounded h-44 dark:bg-gray-500"
                    src="https://images.pexels.com/photos/413195/pexels-photo-413195.jpeg?auto=compress&cs=tinysrgb&w=600" />
                  <div class="p-6 space-y-2">
                    <h3 class="text-2xl font-semibold group-hover:underline group-focus:underline">In usu laoreet
                      repudiare
                      legendos</h3>
                    <span class="text-xs dark:text-gray-600">JUN 25, 2025</span>
                    <p>Mei ex aliquid eleifend forensibus, quo ad dicta apeirian neglegentur, ex has tantas percipit
                      perfecto. At per tempor albucius perfecto, ei probatus consulatu patrioque mea, ei vocent delicata
                      indoctum pri.</p>
                  </div>
                </a>
                <a rel="noopener noreferrer" href="#"
                  class="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-50 hidden sm:block">
                  <img role="presentation" class="object-cover w-full rounded h-44 dark:bg-gray-500"
                    src="https://images.pexels.com/photos/212324/pexels-photo-212324.jpeg?auto=compress&cs=tinysrgb&w=600" />
                  <div class="p-6 space-y-2">
                    <h3 class="text-2xl font-semibold group-hover:underline group-focus:underline">In usu laoreet
                      repudiare
                      legendos</h3>
                    <span class="text-xs dark:text-gray-600">JUN 26, 2025</span>
                    <p>Mei ex aliquid eleifend forensibus, quo ad dicta apeirian neglegentur, ex has tantas percipit
                      perfecto. At per tempor albucius perfecto, ei probatus consulatu patrioque mea, ei vocent delicata
                      indoctum pri.</p>
                  </div>
                </a>
              </div>
              <div class="text-center">
                <button class="px-6 py-3 hover:scale-105 text-sm rounded-md  dark:bg-gray-50 dark:text-gray-600">Load more
                  posts...</button>

              </div>
            </div>
          </section>
        </ComponentsView>

      </div>
    </>
  )
}

export default Page