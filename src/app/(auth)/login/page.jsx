"use client"
import Button from "@/components/ui/Button"
import GoogleIcon from "@/components/ui/svgIcons/GoogleIcon"
import { AuthContext } from "@/context/authProvider/AuthProvider"
import Image from "next/image"
import Link from "next/link"
import { useRouter, useSearchParams } from "next/navigation"
import { useContext } from "react"
import { toast } from "react-toastify"


const page = () => {

  const router = useRouter()
  const searchParams = useSearchParams();
  const from = searchParams.get("from") || "/";
  const { signIn, signInWithGoogle } = useContext(AuthContext)

  // Google Signin
  const handleGoogleSignIn = async () => {
    try {
      await signInWithGoogle()

      toast.success('Signin Successful')
      router.push(from)
    } catch (err) {
      console.log(err)
      toast.error(err?.message)
    }
  }

  // Email Password Signin
  const handleSignIn = async e => {
    e.preventDefault()
    const form = e.target
    const email = form.email.value
    const pass = form.password.value
    try {
      //User Login
      await signIn(email, pass)
      toast.success('Signin Successful')
      router.push(from)
    } catch (err) {
      console.log(err)
      toast.error(err?.message)
    }
  }


  return (
    <>
      <div className="min-h-screen  py-6 flex flex-col justify-center sm:py-12">
        <div className="relative py-3 sm:max-w-xl sm:mx-auto">
          <div
            className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-sky-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl">
          </div>
          <div className="relative px-4 py-10 dark:bg-gray-900 bg-white shadow-lg sm:rounded-3xl sm:p-10 md:px-10">
            <div className="text-center mb-12">
              <Link href="#">
                <Image
                  src="/logos/logo.png"
                  alt="logo"
                  width={160} // w-40 = 160px
                  height={40}
                  className="inline-block"
                />
              </Link>
            </div>
            <div className="max-w-md mx-auto">

              <div>
                <h1 className="text-2xl text-center  font-semibold">Log In</h1>
              </div>
              <div className="divide-y ">
                <div className="py-8 text-base leading-6 space-y-4  sm:text-lg sm:leading-7">
                  <form className="space-y-4" onSubmit={handleSignIn}>

                    <div className="relative">
                      <input autocomplete="off" id="email" name="email" type="text" className="peer placeholder-transparent bg-white dark:bg-gray-900 h-10 w-full md:w-96 border-b-2 border-gray-300  focus:outline-none focus:borer-rose-600" placeholder="Email address" />
                      <label for="email" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Email Address</label>
                    </div>
                    <div className="relative">
                      <input autocomplete="off" id="password" name="password" type="password" className="peer placeholder-transparent bg-white dark:bg-gray-900 h-10 w-full md:w-96 border-b-2 border-gray-300  focus:outline-none focus:borer-rose-600" placeholder="Password" />
                      <label for="password" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Password</label>
                    </div>
                    <div className="relative">
                      <Button className="bg-cyan-500 text-white rounded-md px-2 py-1">Submit</Button>
                    </div>
                  </form>

                </div>
              </div>
            </div>
            <div className="mb-4 flex items-center gap-4">
              <hr className="w-full border-gray-300" />
              <p className="text-sm text-gray-800 text-center">or</p>
              <hr className="w-full border-gray-300" />
            </div>
            <div className="w-full flex justify-center">
              <button onClick={handleGoogleSignIn} className="flex items-center bg-white border border-gray-300 rounded-lg shadow-md px-6 py-2 text-sm font-medium text-gray-800 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
                <GoogleIcon />
                <span>Continue with Google</span>
              </button>
            </div>
            <p class=" text-sm !mt-8 text-center">Don't have an account? <Link href={'/signup'} class="text-cyan-500 hover:underline ml-1 whitespace-nowrap font-semibold">Register here</Link></p>
          </div>
        </div>
      </div>
    </>
  )
}

export default page