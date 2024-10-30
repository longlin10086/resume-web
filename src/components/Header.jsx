import { FaFileDownload, FaGithub } from "react-icons/fa";
import { RiForbidLine } from "react-icons/ri";

import config from "../config.toml";

const title = config.header.name;

function Header() {
  return (
    <header
      className="w-full min-w-max max-w-xs sm:max-w-5xl min-h-12 bg-neutral-50 dark:bg-neutral-900 top-0 z-10 rounded-b-3xl mb-2 shadow-xl 
    text-black dark:text-white sticky"
    >
      <div className="mx-10 mb-2 flex max-w-full justify-between items-center">
        <a
          href="#"
          className="text-lg text-slate-950 hover:text-cyan-600 m-2 flex-row items-start font-zhuque before:content-['📄'] mx-0.5"
        >
          {title}
        </a>
        {/* <button className="flex justify-center items-center border-2 rounded-full hover:ring-2 hover:ring-blue-500/50 ease-in-out duration-300">
          <div className="m-1">
            <RiForbidLine />
          </div>
          <div className="font-zhuque mx-1 my-1">关闭敏感信息保护</div>
        </button> */}
      </div>
    </header>
  );
}

export default Header;
