import { useContext, useEffect } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

import { PiSunLight } from "react-icons/pi";
import { IconContext } from "react-icons";
import { IoMoonSharp } from "react-icons/io5";

function ThemeButton() {
  const [dark, setDark] = useContext(ThemeContext);

  const toggleDark = () => {
    setDark((preMode) => (preMode = !preMode));
  };

  useEffect(() => {
    // Add listener to update styles
    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", (e) => setDark(e.matches ? true : false));

    // Setup dark/light mode for the first time
    setDark(
      window.matchMedia("(prefers-color-scheme: dark)").matches ? true : false
    );

    // Remove listener
    return () => {
      window
        .matchMedia("(prefers-color-scheme: dark)")
        .removeEventListener("change", () => {});
    };
  }, []);

  return (
    <button
      onClick={toggleDark}
      className="hidden sm:flex justify-center items-center border-3 rounded-full bg-neutral-100/95 dark:bg-neutral-900/95 hover:ring-2 hover:ring-blue-500/50 ease-in-out duration-500 mt-1"
    >
      <div className="m-2.5 shadow-2xl z-10">
        <IconContext.Provider value={{ size: `23px` }}>
          <div className="hidden dark:block">
            <PiSunLight style={{ fill: "white" }} />
          </div>
          <div className="dark:hidden">
            <IoMoonSharp style={{ fill: "black" }} />
          </div>
        </IconContext.Provider>
      </div>
    </button>
  );
}

export default ThemeButton;
