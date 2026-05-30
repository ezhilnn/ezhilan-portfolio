import { skillCategories } from "@/data/skills";
import SkillCard from "@/components/ui/SkillCard";

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-24"
    >
      <div className="max-w-7xl mx-auto px-8">

        <h2 className="text-4xl font-bold mb-10">
          Skills
        </h2>

        <div className="grid md:grid-cols-2 gap-8">

          {skillCategories.map((category) => (
            <div
              key={category.category}
              className="border rounded-xl p-6"
            >

              <h3 className="text-2xl font-semibold mb-6">
                {category.category}
              </h3>

              <div className="flex flex-wrap gap-3">

                {category.skills.map((skill) => (
                  <SkillCard
                    key={skill}
                    skill={skill}
                  />
                ))}

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}