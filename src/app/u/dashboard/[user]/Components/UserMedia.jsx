
import { FaTwitter, FaLinkedinIn, FaGithub } from "react-icons/fa";
const Media = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
      <div>
        <div className="flex gap-4">
          <span className="bannerIcon">
            <a target="_blank" href="https://github.com/Md-Ibrahim-Sarkar"> <FaGithub /></a>
          </span>
          <span className="bannerIcon">
            <FaTwitter />
          </span>
          <span className="bannerIcon">
            <a target="_blank" href="https://www.linkedin.com/in/ibrahim-sarkar/"><FaLinkedinIn /></a>
          </span>
        </div>
      </div>
    </div>
  )
}

export default Media