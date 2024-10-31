import { useSwitchLang } from "./utils/SwitchLang";

const copyright = {
  zh: "版权所有",
  en: "All Rights Reserved.",
};

function Footer() {
  const { config, language, setLanguage } = useSwitchLang();

  if (!config) {
    return null; // Or a loading state
  }

  let name = config.info.name;

  return (
    <footer
      className="w-full min-w-full min-h-full md:min-w-max max-w-xs sm:max-w-5xl bg-neutral-50/[0.88] bottom-0 z-0 md:rounded-t-2xl mt-0 md:mt-1 shadow-xl 
    sticky font-zhuque"
    >
      <div className="flex justify-center items-end text-sm text-gray-700 my-1">
        <div>{`Copyright © 2024 ${name}`}</div>
        <div className="mx-2">|</div>
        <div>{copyright[language === "en" ? "en" : "zh"]}</div>
      </div>
    </footer>
  );
}

export default Footer;
