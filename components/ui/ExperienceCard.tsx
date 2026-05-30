import { Experience } from "@/types/experience";

type ExperienceCardProps = {
  experience: Experience;
};

export default function ExperienceCard({
  experience,
}: ExperienceCardProps) {
  return (
    <div className="border rounded-xl p-6">

      <h3 className="text-2xl font-bold">
        {experience.company}
      </h3>

      <p className="mt-2 text-lg">
        {experience.currentRole}
      </p>

      <p className="text-sm text-gray-500 mt-1">
        {experience.location}
      </p>

      {experience.roleHistory &&
        experience.roleHistory.length > 0 && (
          <div className="mt-6">

            <h4 className="font-semibold mb-3">
              Career Progression
            </h4>

            <div className="space-y-2">

              {experience.roleHistory.map((role) => (
                <div
                  key={`${role.role}-${role.duration}`}
                  className="flex justify-between border-l-2 pl-4"
                >
                  <span>{role.role}</span>
                  <span className="text-sm text-gray-500">
                    {role.duration}
                  </span>
                </div>
              ))}

            </div>

          </div>
      )}

      <div className="mt-6">

        <h4 className="font-semibold mb-3">
          Key Achievements
        </h4>

        <ul className="space-y-3">

          {experience.achievements.map((achievement) => (
            <li key={achievement}>
              • {achievement}
            </li>
          ))}

        </ul>

      </div>

    </div>
  );
}