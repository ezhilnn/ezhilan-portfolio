import { personalInfo } from "@/data/personal";

export default function Footer() {
  return (
    <footer className="border-t py-8 mt-12">
      <div className="max-w-7xl mx-auto px-8">

        <div className="flex flex-col md:flex-row justify-between items-center gap-4">

          <p>
            © 2026 {personalInfo.name}
          </p>

          <div className="flex gap-6">

            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>

            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>

          </div>

        </div>

      </div>
    </footer>
  );
}