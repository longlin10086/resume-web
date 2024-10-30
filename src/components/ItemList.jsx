import { IoIosMail } from "react-icons/io";
import { FaGithub } from "react-icons/fa";
import { TiWorld } from "react-icons/ti";
import { GiPositionMarker } from "react-icons/gi";
import Link from "./utils/Link";

import config from "../config.toml";

const mail_url = "mailto:" + config.info.email;
const git_url = "https://github.com/" + config.info.github_username;
const blog_url = "https://" + config.info.blog;

function ItemList({ blur }) {
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
        <IoIosMail />
        <Link href={mail_url} text={config.info.email} />
      </div>
      <div
        className={`flex justify-start items-center before:mx-0.5 after:content-['|'] after:mx-0.5`}
      >
        <FaGithub />
        <Link href={git_url} text={config.info.github_username} />
      </div>
      <div
        className={`flex justify-start items-end before:mx-0.5 after:content-['|'] after:mx-0.5`}
      >
        <TiWorld />
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
