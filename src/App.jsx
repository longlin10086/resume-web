import Header from "./components/Header";
import Page from "./components/page";
import Footer from "./components/Footer";
import { LanguageContext } from "./components/contexts/LanguageContext";
import { ThemeContext } from "./components/contexts/ThemeContext";
import { useState } from "react";

function App() {
  const [language, setLanguage] = useState("");
  const [dark, setDark] = useState(false);
  return (
    <div className="bg-hero dark:bg-dkhero bg-cover w-full h-full min-h-screen ease-in-out duration-300">
      <LanguageContext.Provider value={[language, setLanguage]}>
        <ThemeContext.Provider value={[dark, setDark]}>
          <div className="h-full md:min-h-screen my-0">
            <div className="justify-center flex">
              <Header />
            </div>
            <div className="flex justify-center my-0 md:my-2 w-full min-h-[90vh]">
              <Page />
            </div>
          </div>
          <div className="flex justify-center">
            <Footer />
          </div>
        </ThemeContext.Provider>
      </LanguageContext.Provider>
    </div>
  );
}

export default App;
