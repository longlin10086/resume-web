import { HiTranslate } from "react-icons/hi";
import { FaFileDownload } from "react-icons/fa";
import { RiExternalLinkLine } from "react-icons/ri";
import { PiSunLight } from "react-icons/pi";
import { IoMoonSharp } from "react-icons/io5";
import { IconContext } from "react-icons";

import { useSwitchLang } from "./SwitchLang";
import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

function HiddenList() {
  const { config, language, setLanguage } = useSwitchLang();
  const [dark, setDark] = useContext(ThemeContext);

  const toggleLanguage = () => {
    setLanguage((prevLang) => (prevLang === "en" ? "" : "en"));
  };

  const toggleDark = () => {
    setDark((preMode) => (preMode = !preMode));
    document.body.classList.toggle("dark");
  };

  return (
    <div className="absolute right-0 top-12 sm:hidden mt-2 w-32 h-34 bg-neutral-50 dark:bg-neutral-950 flex-col items-center justify-center mx-2 my-2 z-40 rounded-xl shadow-lg duration-300">
      <div className="mx-2 my-1 flex-col justify-start items-center">
        <div className="text-gray-700 dark:text-gray-300 min-w-full text-[16px] text-nowrap">
          <button
            onClick={toggleDark}
            className="mb-1 min-w-full hover:bg-blue-200 dark:hover:bg-blue-800 rounded-md flex justify-start items-center"
          >
            <IconContext.Provider value={{ size: `20px` }}>
              <div className="hidden dark:block">
                <PiSunLight style={{ fill: "white" }} />
              </div>
              <div className="dark:hidden">
                <IoMoonSharp style={{ fill: "black" }} />
              </div>
            </IconContext.Provider>
            <div className="ml-2">
              {dark
                ? language === "en"
                  ? "dark mode"
                  : "暗色模式"
                : language === "en"
                ? "light mode"
                : "亮色模式"}
            </div>
          </button>

          <button
            onClick={toggleLanguage}
            className="mb-1 min-w-full hover:bg-blue-200 rounded-md flex justify-start items-center"
          >
            <IconContext.Provider value={{ size: `20px` }}>
              <div className="hidden dark:block">
                <HiTranslate style={{ fill: "white" }} />
              </div>
              <div className="dark:hidden">
                <HiTranslate style={{ fill: "black" }} />
              </div>
            </IconContext.Provider>
            <div className="ml-2">{language === "en" ? "中文" : "English"}</div>
          </button>

          <button className="mb-1 min-w-full hover:bg-blue-200 rounded-md flex justify-start items-center">
            <IconContext.Provider value={{ size: `20px` }}>
              <div className="hidden dark:block">
                <FaFileDownload style={{ fill: "white" }} />
              </div>
              <div className="dark:hidden">
                <FaFileDownload style={{ fill: "black" }} />
              </div>
            </IconContext.Provider>
            <div className="ml-2">
              {language === "en" ? "PDF ver." : "下载 PDF"}
            </div>
          </button>

          <button className="mb-1 min-w-full hover:bg-blue-200 rounded-md flex justify-start items-center">
            <IconContext.Provider value={{ size: `20px` }}>
              <div className="hidden dark:block">
                <RiExternalLinkLine style={{ fill: "white" }} />
              </div>
              <div className="block dark:hidden">
                <RiExternalLinkLine style={{ fill: "black" }} />
              </div>
            </IconContext.Provider>
            <a
              className="ml-2"
              href="https://github.com/longlin10086/resume-web"
            >
              GitHub
            </a>
          </button>
        </div>
      </div>
    </div>
  );
}

export default HiddenList;
