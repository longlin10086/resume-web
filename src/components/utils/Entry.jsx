import GhLink from "./GhLink";
import { RiExternalLinkLine } from "react-icons/ri";
import { useSwitchLang } from "./SwitchLang";

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

  const { config, language, setLanguage } = useSwitchLang();

  return (
    <div className="w-full mt-1 flex-row justify-start items-center mb-2">
      <div className="flex justify-between items-end">
        <div className="flex justify-start items-center">
          <h2 className="text-lg font-bold text-nowrap leading-4">{tl}</h2>
          <h4
            className={
              tl_comment && language !== "en"
                ? "before:content-['·'] before:mx-1 text-nowrap hidden sm:block text-sm leading-4"
                : ""
            }
          >
            {language !== "en" ? tl_comment : ""}
          </h4>
          {is_git ? (
            <a href={tr}>
              <RiExternalLinkLine className="block sm:hidden mx-1 items-end" />
            </a>
          ) : (
            <div></div>
          )}
        </div>
        <div className="">
          {is_git ? (
            <GhLink
              base_link={remain_path}
              className="hidden sm:flex align-text-bottom"
            />
          ) : (
            <p className={`text-nowrap hidden sm:block`}>{tr}</p>
          )}
        </div>
      </div>

      <div className="flex justify-between items-center">
        <h2
          before={tr}
          className={`text-md font-bold text-pretty ${
            is_git ? "" : `after:content-[attr(before)] after:ml-2`
          } sm:after:content-none`}
        >
          {bl}
        </h2>
        <p>{br}</p>
      </div>

      {contents.length > 0 && (
        <ul className="list-disc ml-4 text-pretty">
          {contents.map((content, index) => (
            <li key={index}>{content}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Entry;
