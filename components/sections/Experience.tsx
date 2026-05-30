import ExperienceCard from "@/components/ui/ExperienceCard";
import { experiences } from "@/data/experience";

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-24"
    >
      <div className="max-w-7xl mx-auto px-8">

        <h2 className="text-4xl font-bold mb-10">
          Experience
        </h2>

        <div className="space-y-6">

          {experiences.map((experience) => (
            <ExperienceCard
              key={`${experience.company}`}
              experience={experience}
            />
          ))}

        </div>

      </div>
    </section>
  );
}