import Link from "./Link";
import { FaGithub } from "react-icons/fa";

function GhLink({ base_link, className }) {
  const git_url = "https://github.com/" + base_link;

  return (
    <div
      className={`flex justify-start items-center before:mx-0.5 ${className}`}
    >
      <FaGithub />
      <Link href={git_url} text={base_link} />
    </div>
  );
}

export default GhLink;
