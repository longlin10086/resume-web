import { useContext, useState, useEffect } from "react";
import { LanguageContext } from "../contexts/LanguageContext";

export function useSwitchLang() {
  const [config, setConfig] = useState(null);
  const [language, setLanguage] = useContext(LanguageContext);

  useEffect(() => {
    const loadConfig = async () => {
      try {
        // Dynamic import based on language
        const configModule = await import(
          `../../config/config${language === "en" ? "_en" : ""}.toml`
        );
        setConfig(configModule.default);
      } catch (error) {
        console.error("Error loading config:", error);
      }
    };
    loadConfig();
  }, [language]);

  return {
    config,
    language,
    setLanguage,
  };
}
