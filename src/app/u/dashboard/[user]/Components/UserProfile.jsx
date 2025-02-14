"use client"
import Link from "next/link"
import { useParams, usePathname } from "next/navigation"
import Button from "@/components/ui/Button";
import ComponentPicView from "@/components/componetPicview/ComponentPicView";
import UserMedia from './UserMedia'
const getLastSegment = () => {
  const path = usePathname(); // বর্তমান URL পাথ নেয়া
  const segments = path.split("/").filter(Boolean); // `/` দিয়ে ভাগ করা ও খালি অংশ বাদ দেয়া
  return segments.length > 0 ? segments[segments.length - 1] : ""; // শেষ অংশ রিটার্ন করা
};


const UserProfile = () => {

  const { user: userParam } = useParams()
  const lastSegment = getLastSegment();
  return (
    <>
      <div>
        <div class="w-full  bg-black">
          <div
            class="w-full h-fit bg-[url('https://cdn.pixabay.com/photo/2021/08/04/13/06/software-developer-6521720_1280.jpg')] bg-cover bg-center bg-no-repeat">
            <div class="w-full h-full relative top-10 pb-20">
              <div class="lg:px-16 px-8 flex sm:flex-row flex-col flex-col-reverse gap-6 justify-center items-center">
                <div class="sm:text-left text-center text-white">
                  <h4 class="sm:text-2xl text-3xl font-semibold w-fit bg-gray-900/40 p-3 ps-0">Hello, My name is
                    <span class="text-cyan-500 outline-cyan-500 sm:text-2xl text-xl font-serif"> Ibrahim Sarkar</span>
                  </h4>
                  <h1 class="mt-4 sm:text-4xl text-2xl">I'm
                    <span class="typing libre-baskerville-bold text-cyan-500 outline-cyan-500"> FullStack Developer</span>
                  </h1>

                  <p class="mt-4 text-lg bg-gray-900/40 capitalize">Experienced full-stack developer
                    with 4+
                    years of expertise in Laravel, NestJS, Nuxt.js, Next.js, Android, and some Flutter experience.</p>
                  <div class=" mt-6 flex items-center sm:flex-row flex-col gap-4 sm:justify-start justify-center">
                    <div>
                      <button class=" px-6 py-3 hover:-translate-y-1 text-white font-semibold rounded outline outline-2 outline-cyan-500 hover:bg-cyan-600 duration-300">Hire Me</button>
                    </div>
                    <UserMedia />
                  </div>
                </div>

                {/* <!-- Image --> */}
                <img class="md:max-w-[30%] sm:max-w-[40%] max-w-[70%] sm:rounded-sm sm:rounded-br-[5rem] sm:rounded-tl-[5rem] rounded-full sm:outline-none outline outline-[.3rem] outline-green-400/60" src="https://techakim.com/sam/tg/7268/li/imgs/profile.jpg" alt="My Pic" />

              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between px-4 mt-5">
            <div className="flex gap-6 items-center">
              <h1 className="mt-6 text-2xl font-bold">{lastSegment === `${userParam}` ? 'My Components' : 'Components'}</h1>
              {lastSegment === `${userParam}` &&
                <Link href={'/playground'}>
                  <Button className='mt-6'>Add Component</Button>
                </Link>
              }

            </div>
            <div className="flex justify-between items-center mt-6">
              <div></div>
              <div className="">Showing All Components</div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6 px-4">
          <ComponentPicView />
          <ComponentPicView />
          <ComponentPicView />
          <ComponentPicView />

        </div>
      </div>
    </>
  )
}

export default UserProfile