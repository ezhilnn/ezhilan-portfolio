type SkillCardProps = {
  skill: string;
};

export default function SkillCard({
  skill,
}: SkillCardProps) {
  return (
    <div className="px-5 py-3 border rounded-lg">
      {skill}
    </div>
  );
}