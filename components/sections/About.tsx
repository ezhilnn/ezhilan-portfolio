import { about } from "@/data/about";

export default function About() {
  return (
    <section
      id="about"
      className="py-24"
    >
      <div className="max-w-7xl mx-auto px-8">

        <h2 className="text-4xl font-bold mb-10">
          About Me
        </h2>

        <div className="space-y-6 text-lg leading-8">

          <p>
            {about.introduction}
          </p>

          <p>
            {about.background}
          </p>

          <p>
            {about.expertise}
          </p>

          <p>
            {about.interests}
          </p>

        </div>

      </div>
    </section>
  );
}