import GhLink from "./GhLink";
import { RiExternalLinkLine } from "react-icons/ri";

function Entry({
  tl = "",
  tl_comment = "",
  tr = "",
  bl = "",
  br = "",
  contents = [],
}) {
  const pattern = /https:\/\/github\.com\//;
  let is_git = false;
  let remain_path = "";

  if (pattern.test(tr)) {
    is_git = true;
    remain_path = tr.replace(/https:\/\/github\.com\//, "");
  }

  return (
    <div className="w-full mt-1 flex-row justify-start items-center mb-2">
      <div className="flex justify-between items-start">
        <div className="flex justify-start items-center flex-wrap overflow-auto">
          <h2 className="font-bold text-nowrap">{tl}</h2>
          <h2
            className={
              tl_comment
                ? "before:content-['·'] before:mx-1 text-nowrap hidden sm:block text-sm"
                : ""
            }
          >
            {tl_comment}
          </h2>
          {is_git ? (
            <a href={tr}>
              <RiExternalLinkLine className="block sm:hidden mx-1" />
            </a>
          ) : (
            <div></div>
          )}
        </div>
        <div className="">
          {is_git ? (
            <GhLink base_link={remain_path} className="hidden sm:flex" />
          ) : (
            <p className="text-nowrap">{tr}</p>
          )}
        </div>
      </div>

      <div className="flex justify-between items-center">
        <h2 className="font-bold text-nowrap overflow-auto">{bl}</h2>
        <p>{br}</p>
      </div>

      {contents.length > 0 && (
        <ul className="list-disc ml-4 text-balance">
          {contents.map((content, index) => (
            <li key={index}>{content}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Entry;
