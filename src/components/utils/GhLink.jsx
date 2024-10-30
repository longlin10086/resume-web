import Link from "./Link";
import { FaGithub } from "react-icons/fa";
import { IconContext } from "react-icons";

function GhLink({ base_link, className }) {
  const git_url = "https://github.com/" + base_link;

  return (
    <div
      className={`flex justify-start items-center before:mx-0.5 ${className}`}
    >
      <IconContext.Provider value={{ size: `18px`, className: "mr-0.5" }}>
        <div>
          <FaGithub />
        </div>
      </IconContext.Provider>
      <Link href={git_url} text={base_link} />
    </div>
  );
}

export default GhLink;
