import { HiTranslate } from "react-icons/hi";
import { FaFileDownload } from "react-icons/fa";
import { RiExternalLinkLine } from "react-icons/ri";
import { PiSunLight } from "react-icons/pi";
import { IconContext } from "react-icons";

import { useSwitchLang } from "./SwitchLang";

function HiddenList() {
  const { config, language, setLanguage } = useSwitchLang();

  const toggleLanguage = () => {
    setLanguage((prevLang) => (prevLang === "en" ? "" : "en"));
  };

  return (
    <div className="absolute right-0 top-12 sm:hidden mt-2 w-32 h-34 bg-neutral-50 flex-col items-center justify-center mx-2 my-2 z-40 rounded-xl shadow-lg duration-300">
      <div className="mx-2 my-1 flex-col justify-start items-center">
        <div className="text-gray-700 min-w-full text-[16px] text-nowrap">
          <button className="mb-1 min-w-full hover:bg-blue-200 rounded-md flex justify-start items-center">
            <IconContext.Provider value={{ size: `20px` }}>
              <div>
                <PiSunLight />
              </div>
            </IconContext.Provider>
            <div className="ml-2">
              {language === "en" ? "dark mode" : "暗色模式"}
            </div>
          </button>

          <button
            onClick={toggleLanguage}
            className="mb-1 min-w-full hover:bg-blue-200 rounded-md flex justify-start items-center"
          >
            <IconContext.Provider value={{ size: `20px` }}>
              <div>
                <HiTranslate />
              </div>
            </IconContext.Provider>
            <div className="ml-2">{language === "en" ? "中文" : "English"}</div>
          </button>

          <button className="mb-1 min-w-full hover:bg-blue-200 rounded-md flex justify-start items-center">
            <IconContext.Provider value={{ size: `20px` }}>
              <div>
                <FaFileDownload />
              </div>
            </IconContext.Provider>
            <div className="ml-2">
              {language === "en" ? "PDF ver." : "下载 PDF"}
            </div>
          </button>

          <button className="mb-1 min-w-full hover:bg-blue-200 rounded-md flex justify-start items-center">
            <IconContext.Provider value={{ size: `20px` }}>
              <div>
                <RiExternalLinkLine />
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
