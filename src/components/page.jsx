import ItemList from "./ItemList";
import Hr from "./utils/Hr";
import Entry from "./utils/Entry";
import SkillsIcon from "./utils/SkillsIcon";
import { useSwitchLang } from "./utils/SwitchLang";

function Page() {
  const { config, language, setLanguage } = useSwitchLang();

  if (!config) {
    return null; // Or a loading state
  }

  let name = config.info.name;
  let education = config.titles.education;
  let projects = config.titles.projects;
  let clubs = config.titles.clubs;
  let skills = config.titles.skills;
  let misc = config.titles.misc;
  return (
    <div className="bg-white dark:bg-[#121212]/[0.9] dark:text-neutral-300 w-full h-full z-20 min-w-3xl max-w-3xl min-h-[92vh] max-h-[92vh] shadow-2xl rounded-sm overflow-y-auto animate-slideUp ease-in-out duration-300">
      <div className="mx-8 my-8 font-zhuque overflow-auto">
        <div className={`text-4xl mb-2 font-bold ease-in-out`}>{name}</div>
        <ItemList />
        <Hr />

        <h2 className="before:content-['🎓'] before:mr-1 font-bold text-xl">
          {education}
        </h2>
        <Entry
          tl={config.education.school}
          tl_comment={config.education.description}
          tr={config.education.year}
          bl={config.education.major}
          contents={config.education.contents}
        />
        <Hr />

        <h2 className="before:content-['🔨'] before:mr-1 font-bold text-xl">
          {projects}
        </h2>
        {config.projects.map((project, index) => {
          return (
            <Entry
              tl={project.name ? project.name : ""}
              tl_comment={project.subtitle ? project.subtitle : ""}
              tr={project.gh_url ? project.gh_url : ""}
              bl={project.description ? project.description : ""}
              contents={project.contents ? project.contents : []}
              key={index}
            />
          );
        })}
        <Hr />

        <h2 className="before:content-['🏫'] before:mr-1 font-bold text-xl">
          {clubs}
        </h2>
        {config.clubs.map((club, index) => {
          return (
            <Entry
              tl={club.name ? club.name : ""}
              tl_comment={club.subtitle ? club.subtitle : ""}
              tr={club.year ? club.year : ""}
              bl={club.description ? club.description : ""}
              contents={club.contents ? club.contents : []}
              key={index}
            />
          );
        })}
        <Hr />

        <h2 className="before:content-['🧱'] before:mr-1 font-bold text-xl">
          {skills}
        </h2>
        <SkillsIcon skills={config.skills.contents} />
        <Hr />

        <h2 className="before:content-['ℹ️'] before:mr-1 font-bold text-xl">
          {misc}
        </h2>
        {config.misc.contents.map((content, index) => (
          <p key={index}>{content}</p>
        ))}
      </div>
    </div>
  );
}

export default Page;
