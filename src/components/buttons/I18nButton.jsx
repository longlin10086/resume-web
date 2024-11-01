import { HiTranslate } from "react-icons/hi";
import { IconContext } from "react-icons";

import { useContext } from "react";
import { LanguageContext } from "../contexts/LanguageContext";

function I18nButton() {
  const [language, setLanguage] = useContext(LanguageContext);

  const toggleLanguage = () => {
    setLanguage((prevLang) => (prevLang === "en" ? "" : "en"));
  };

  return (
    <button
      onClick={toggleLanguage}
      className="hidden sm:flex justify-center items-center border-3 rounded-full bg-neutral-100/95 dark:bg-neutral-900/95 hover:ring-2 hover:ring-blue-500/50 ease-in-out duration-500 mt-1 mx-2"
    >
      <div className="m-2.5 shadow-2xl z-10">
        <IconContext.Provider value={{ size: `23px` }}>
          <div className="hidden dark:block">
            <HiTranslate style={{ fill: "white" }} />
          </div>
          <div className="dark:hidden">
            <HiTranslate style={{ fill: "black" }} />
          </div>
        </IconContext.Provider>
      </div>
    </button>
  );
}

export default I18nButton;
