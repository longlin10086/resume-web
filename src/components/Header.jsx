import { FaFileDownload } from "react-icons/fa";
import { RiExternalLinkLine } from "react-icons/ri";
import { PiSunLight } from "react-icons/pi";
import { IconContext } from "react-icons";
import { HiTranslate } from "react-icons/hi";
import { FaListUl } from "react-icons/fa";

import config from "../config.toml";

const title = config.header.name;

function Header() {
  return (
    <header
      className="w-full min-w-full md:min-w-max max-w-xs sm:max-w-5xl min-h-12 bg-neutral-50/[0.88] top-0 z-10 md:rounded-b-3xl md:mb-1 shadow-xl 
    text-black sticky"
    >
      <div className="ml-4 md:ml-20 mr-4 md:mr-10 mb-2 mt-1 flex max-w-full justify-between items-center">
        <div className="flex mx-2 text-nowrap">
          <a
            href="#"
            className="text-xl text-slate-950 hover:text-cyan-600 m-2 flex-row items-start font-zhuque font-bold before:content-['📄'] mx-0.5"
          >
            {title}
          </a>
        </div>

        <div className="font-zhuque text-lg flex justify-start items-center">
          <div className="justify-start items-center mx-20 hidden lg:flex">
            <div className="flex justify-center items-center ml-2 mr-4">
              <a
                href="https://github.com/longlin10086/resume-web"
                className="mx-1 hover:text-cyan-600"
              >
                GitHub
              </a>
              <RiExternalLinkLine />
            </div>

            <div className="flex justify-center items-center ml-4 mr-20">
              <a
                href="https://github.com/longlin10086/resume-web"
                className="mx-1 hover:text-cyan-600"
              >
                Download PDF
              </a>
              <FaFileDownload />
            </div>
          </div>

          {/* <div className="font-zhuque text-lg mx-5">|</div> */}

          <button className="hidden sm:flex justify-center items-center border-3 rounded-full bg-neutral-100/95 hover:ring-2 hover:ring-blue-500/50 ease-in-out duration-500 mt-1">
            <div className="m-2.5 shadow-2xl z-10">
              <IconContext.Provider value={{ size: `23px` }}>
                <div>
                  <PiSunLight />
                </div>
              </IconContext.Provider>
            </div>
          </button>

          <button className="hidden sm:flex justify-center items-center border-3 rounded-full bg-neutral-100/95 hover:ring-2 hover:ring-blue-500/50 ease-in-out duration-500 mt-1 mx-2">
            <div className="m-2.5 shadow-2xl z-10">
              <IconContext.Provider value={{ size: `23px` }}>
                <div>
                  <HiTranslate />
                </div>
              </IconContext.Provider>
            </div>
          </button>

          <button className="flex justify-center items-center border-3 rounded-full bg-neutral-100/95 hover:ring-2 hover:ring-blue-500/50 ease-in-out duration-500 mt-1 mx-2 sm:hidden">
            <div className="m-2.5 shadow-2xl z-10">
              <IconContext.Provider value={{ size: `18px` }}>
                <div>
                  <FaListUl />
                </div>
              </IconContext.Provider>
            </div>
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
