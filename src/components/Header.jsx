import { FaFileDownload, FaGithub } from "react-icons/fa";

import config from "../config.toml";

const title = config.header.name;

function Header() {
  return (
    <header
      className="w-full min-w-max max-w-xs sm:max-w-5xl min-h-12 bg-neutral-50 dark:bg-neutral-900 top-0 z-10 rounded-b-3xl mb-2 shadow-xl 
    text-black dark:text-white sticky"
    >
      <div className="mx-10 my-2 flex-row max-w-4xl justify-between">
        <a
          href="#"
          className="text-lg text-slate-950 hover:text-cyan-600 m-2 flex-row items-start font-zhuque before:content-['📄'] mx-0.5"
        >
          {title}
        </a>
      </div>
    </header>
  );
}

export default Header;
