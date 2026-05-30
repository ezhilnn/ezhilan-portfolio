import { projects } from "@/data/projects";
import ProjectCard from "@/components/ui/ProjectCard";

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-24"
    >
      <div className="max-w-7xl mx-auto px-8">

        <h2 className="text-4xl font-bold mb-10">
          Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-6">

          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              project={project}
            />
          ))}

        </div>

      </div>
    </section>
  );
}