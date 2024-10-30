function SkillsIcon({ skills }) {
  return (
    <div className="my-2 flex items-center flex-wrap">
      {skills.map((skill) => {
        return (
          <div className="group flex justify-center items-center border-2 rounded-xl mx-1 mb-1 hover:shadow-lg hover:ring-2 hover:ring-blue-500/50 ease-in-out duration-500">
            <img
              src={`https://skillicons.dev/icons?i=${skill}&theme=light`}
              width="25"
              className="mx-1 my-1"
            />
            <div className="text-lg mb-2 ml-1 mr-2">{skill}</div>
          </div>
        );
      })}
    </div>
  );
}

export default SkillsIcon;
