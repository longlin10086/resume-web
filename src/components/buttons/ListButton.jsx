import { useState } from "react";

import { IconContext } from "react-icons";
import { FaListUl } from "react-icons/fa";

import HiddenList from "../utils/HiddenList";

function ListButton() {
  const [hover, setHover] = useState(false);

  const toggleHover = () => {
    setHover((preStat) => (preStat = !preStat));
  };

  return (
    <div className="relative">
      <button
        onClick={toggleHover}
        onMouseLeave={() => setHover(false)}
        className="flex justify-center items-center border-3 rounded-full bg-neutral-100/95 hover:ring-2 hover:ring-blue-500/50 ease-in-out duration-500 mt-1 mx-2 sm:hidden"
      >
        <div className="m-2.5 shadow-2xl z-10">
          <IconContext.Provider value={{ size: `18px` }}>
            <div>
              <FaListUl />
            </div>
          </IconContext.Provider>
        </div>
      </button>

      {hover && <HiddenList />}
    </div>
  );
}

export default ListButton;
