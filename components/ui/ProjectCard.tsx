import { Project } from "@/types/project";

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({
  project,
}: ProjectCardProps) {
  return (
    <div className="border rounded-xl p-6">

      <h3 className="text-2xl font-bold">
        {project.title}
      </h3>

      <p className="mt-4">
        {project.description}
      </p>

      <div className="mt-6">

        <h4 className="font-semibold mb-3">
          Features
        </h4>

        <ul className="space-y-2">

          {project.features.map((feature) => (
            <li key={feature}>
              • {feature}
            </li>
          ))}

        </ul>

      </div>

      <div className="flex flex-wrap gap-2 mt-6">

        {project.techStack.map((tech) => (
          <span
            key={tech}
            className="px-3 py-1 border rounded-md text-sm"
          >
            {tech}
          </span>
        ))}

      </div>
      <div className="flex gap-4 mt-6">

      {project.githubUrl && (
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 border rounded-lg"
        >
          GitHub
        </a>
      )}

    

</div>

    </div>
  );
}