import { IoIosMail } from "react-icons/io";
import { FaGithub } from "react-icons/fa";
import { TiWorld } from "react-icons/ti";
import { GiPositionMarker } from "react-icons/gi";
import { IconContext } from "react-icons";
import Link from "./utils/Link";

import { useSwitchLang } from "./utils/SwitchLang";

function ItemList({ blur }) {
  const { config, language, setLanguage } = useSwitchLang();

  if (!config) {
    return null; // Or a loading state
  }

  let mail_url = "mailto:" + config.info.email;
  let git_url = "https://github.com/" + config.info.github_username;
  let blog_url = "https://" + config.info.blog;

  return (
    <div className="mb-2 flex justify-start items-center flex-wrap">
      <div
        className={`before:content-['☎️'] before:mx-0.5 after:content-['|'] after:mx-0.5 blur-[${blur}] ease-in-out duration-300`}
      >
        {config.info.phone}
      </div>
      <div
        className={`flex justify-start items-end before:mx-0.5 after:content-['|'] after:mx-0.5 blur-[${blur}] ease-in-out duration-300`}
      >
        <IconContext.Provider value={{ size: `20px`, className: "mr-0.5" }}>
          <div>
            <IoIosMail />
          </div>
        </IconContext.Provider>
        <Link href={mail_url} text={config.info.email} />
      </div>
      <div
        className={`flex justify-start items-center before:mx-0.5 after:content-['|'] after:mx-0.5`}
      >
        <IconContext.Provider value={{ size: `16px`, className: "mr-0.5" }}>
          <div>
            <FaGithub />
          </div>
        </IconContext.Provider>
        <Link href={git_url} text={config.info.github_username} />
      </div>
      <div
        className={`flex justify-start items-end before:mx-0.5 after:content-['|'] after:mx-0.5`}
      >
        <IconContext.Provider value={{ size: `20px`, className: "mr-0.5" }}>
          <div>
            <TiWorld />
          </div>
        </IconContext.Provider>
        <Link href={blog_url} text={config.info.blog} />
      </div>
      <div className={`flex justify-start items-center before:mx-0.5`}>
        <GiPositionMarker />
        <div>{config.info.position.join(", ")}</div>
      </div>
    </div>
  );
}

export default ItemList;
