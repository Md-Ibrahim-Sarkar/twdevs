"use client"
import Link from "next/link"
import Image from "next/image"
import Button from "@/components/ui/Button"
import { useContext } from "react"
import { AuthContext } from "@/context/authProvider/AuthProvider"
import { useRouter, useSearchParams } from "next/navigation"
import GoogleIcon from "@/components/ui/svgIcons/GoogleIcon"
function page() {
    const router = useRouter()
    const searchParams = useSearchParams();
    const from = searchParams.get("from") || "/";
    const { signInWithGoogle, createUser, updateUserProfile, setUser } =
        useContext(AuthContext)

    const handleSignUp = async e => {
        e.preventDefault()
        const form = e.target
        const email = form.email.value
        const name = form.name.value
        const pass = form.password.value
        console.log({ email, pass, name })
        try {
            //2. User Registration
            const result = await createUser(email, pass)
            console.log(result)
            await updateUserProfile(name)
            setUser({ ...result.user, displayName: name })
            router.push(from)
        } catch (err) {
            console.log(err)
        }
    }

    // Google Signin
    const handleGoogleSignIn = async () => {
        try {
            await signInWithGoogle()

            router.push(from)
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <div>
            <div className="min-h-screen  py-6 flex flex-col justify-center sm:py-8">
                <div className="relative py-3 sm:max-w-xl sm:mx-auto">
                    <div
                        className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-sky-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl">
                    </div>
                    <div className="relative px-4 py-10 bg-white dark:bg-gray-900 shadow-lg sm:rounded-3xl sm:p-10">
                        <div className="text-center ">
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
                        <h3 class="text-2xl text-center my-6 font-bold text-cyan-500">Create an account</h3>
                        <form onSubmit={handleSignUp}>
                            <div className=" space-y-6 w-full">
                                <div className="relative w-full">
                                    <input autocomplete="off" id="name" name="name" type="text" className="peer placeholder-transparent bg-white dark:bg-gray-900 h-10 md:w-96 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Full Name" />
                                    <label for="password" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Full Name</label>
                                </div>

                                <div className="relative">
                                    <input autocomplete="off" id="email" name="email" type="text" className="peer placeholder-transparent bg-white dark:bg-gray-900 h-10 md:w-96 w-full border-b-2 border-gray-300  focus:outline-none focus:borer-rose-600" placeholder="Email address" />
                                    <label for="email" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Email Address</label>
                                </div>
                                <div className="relative">
                                    <input autocomplete="off" id="password" name="password" type="password" className="peer placeholder-transparent bg-white dark:bg-gray-900 md:w-96 h-10 w-full border-b-2 border-gray-300  focus:outline-none focus:borer-rose-600" placeholder="Email address" />
                                    <label for="email" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Passwords</label>
                                </div>
                            </div>

                            <div className="mt-8">
                                <Button>
                                    Sign up
                                </Button>
                            </div>
                        </form>
                        <div className="my-4 flex items-center gap-4">
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
                        <p class=" text-sm mt-6 text-center">Already have an account? <Link href={'/login'} class="text-cyan-500 font-semibold hover:underline ml-1">Login here</Link></p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default page