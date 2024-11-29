import { FaFileDownload } from "react-icons/fa";
import { RiExternalLinkLine } from "react-icons/ri";
import { PiSunLight } from "react-icons/pi";
import { IconContext } from "react-icons";

import I18nButton from "./buttons/I18nButton";
import ListButton from "./buttons/ListButton";
import ThemeButton from "./buttons/ThemeButton";

import { useSwitchLang } from "./utils/SwitchLang";

function Header() {
  const { config, language, setLanguage } = useSwitchLang();

  if (!config) {
    return null; // Or a loading state
  }
  let title = config.header.name;

  return (
    <header
      className="w-full min-w-full md:min-w-max max-w-xs sm:max-w-5xl min-h-12 bg-neutral-50/[0.88] dark:bg-neutral-950 top-0 z-30 md:rounded-b-3xl md:mb-1 shadow-xl 
    text-black dark:text-white sticky animate-slideDown"
    >
      <div className="ml-4 md:ml-20 mr-4 md:mr-10 mb-2 mt-1 flex max-w-full justify-between items-center">
        <div className="flex mx-2 text-nowrap">
          <a
            href="#"
            className="text-xl hover:text-cyan-600 m-2 flex-row items-start font-zhuque font-bold before:content-['📄'] mx-0.5"
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
              <div className="hidden dark:block">
                <RiExternalLinkLine style={{ fill: "white" }} />
              </div>
              <div className="dark:hidden">
                <RiExternalLinkLine style={{ fill: "black" }} />
              </div>
            </div>

            <div className="flex justify-center items-center ml-4 mr-20">
              <a
                href="https://github.com/longlin10086/resume-web"
                className="mx-1 hover:text-cyan-600"
              >
                {language === "en" ? "Download PDF" : "PDF 下载"}
              </a>

              <div className="hidden dark:block">
                <FaFileDownload style={{ fill: "white" }} />
              </div>
              <div className="dark:hidden">
                <FaFileDownload style={{ fill: "black" }} />
              </div>
            </div>
          </div>

          <ThemeButton />

          <I18nButton />

          <ListButton />
        </div>
      </div>
    </header>
  );
}

export default Header;
