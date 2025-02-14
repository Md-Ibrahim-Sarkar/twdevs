import { FaDownload } from "react-icons/fa"
import './style.css'

const Button = ({ openModal }) => {
  return (
    <>
      <div className="ms-3 hover:rounded-md ">
        <button onClick={() => openModal()} className="preview-button rounded-md border ">
          <div class="text flex gap-1 pt-1 font-bold border border-mainColor  border-b-2 rounded pb-3">
            <span>Preview</span>
            <span>&</span>
            <span className="mt-4"><FaDownload /></span>
          </div>
          <div className="clone pt-1.5 ps-2 font-bold hover:bg-mainColor rounded-md dark:hover:text-black hover:duration-300">
            <span>Preview</span>
            <span>Me</span>
          </div>

        </button>
      </div>
    </>
  )
}

export default Button