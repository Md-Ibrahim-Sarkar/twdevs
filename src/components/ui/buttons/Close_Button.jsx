

const Close_Button = ({ closeModal }) => {
  return (
    <>
      <div onClick={closeModal}>
        <button
          class="relative hover:bg-black border-2 hover:border-none border-transparent  group   w-12 h-12 duration-500 overflow-hidden"
          type="button"
        >
          <p
            class="font-Manrope text-5xl -mt-3 h-full w-full flex items-center justify-center duration-500 relative z-10 group-hover:scale-0"
          >
            ×
          </p>
          <span
            class="absolute w-full h-full bg-mainColor rotate-45 group-hover:top-9 duration-500 top-12 left-0"
          ></span>
          <span
            class="absolute w-full h-full bg-mainColor rotate-45 top-0 group-hover:left-9 duration-500 left-12"
          ></span>
          <span
            class="absolute w-full h-full bg-mainColor rotate-45 top-0 group-hover:right-9 duration-500 right-12"
          ></span>
          <span
            class="absolute w-full h-full bg-mainColor rotate-45 group-hover:bottom-9 duration-500 bottom-12 right-0"
          ></span>
        </button>

      </div>
    </>
  )
}

export default Close_Button