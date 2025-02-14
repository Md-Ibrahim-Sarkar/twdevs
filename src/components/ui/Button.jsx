import { FaFolderPlus } from "react-icons/fa6"


const Button = ({ children, className }) => {
  return (
    <>
      <div className={`flex justify-center hover:scale-105 active:scale-100 items-center gap-12 h-full ${className}`}>
        <div
          className="bg-gradient-to-b from-stone-300/40 to-transparent dark:bg-gradient-to-b dark:from-gray-600 dark:to-transparent p-[4px] rounded-[16px]"
        >
          <button
            className="group p-[4px] cursor-pointer rounded-[12px] bg-gradient-to-b from-cyan-300 to-cyan-300 shadow-[0_1px_3px_rgba(0,0,0,0.5)] active:shadow-[0_0px_1px_rgba(0,0,0,0.5)] active:scale-[0.995]"
          >
            <div
              className="bg-gradient-to-b  from-cyan-400 to-cyan-300 cursor-pointer rounded-[8px] px-3 py-1"
            >
              <div className="flex gap-2 items-center">
                {children === 'Create' && <FaFolderPlus className="dark:text-gray-900" />}

                <span className="font-semibold dark:text-gray-900">{children}</span>
              </div>
            </div>
          </button>
        </div>
      </div>

    </>
  )
}

export default Button