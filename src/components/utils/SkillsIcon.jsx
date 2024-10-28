function SkillsIcon({ skills }) {
  let skills_str = skills.join(",");
  return (
    <div className="my-2">
      <img src={`https://skillicons.dev/icons?i=${skills_str}`} />
    </div>
  );
}

export default SkillsIcon;
