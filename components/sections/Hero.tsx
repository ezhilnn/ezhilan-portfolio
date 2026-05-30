import Image from "next/image";
import { personalInfo } from "@/data/personal";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-8 w-full">

        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12">

          <div className="flex-1">

            <p className="text-lg text-gray-500">
              Hello, I'm
            </p>

            <h1 className="text-5xl md:text-7xl font-bold mt-2">
              {personalInfo.name}
            </h1>

            <h2 className="text-2xl md:text-3xl text-gray-400 mt-4">
              {personalInfo.title}
            </h2>

            <p className="mt-6 text-lg max-w-2xl">
              {personalInfo.tagline}
            </p>

            <div className="flex flex-wrap gap-4 mt-8">

                <a
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 border rounded-lg"
                >
                    LinkedIn
                </a>

                <a
                    href={personalInfo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 border rounded-lg"
                >
                    GitHub
                </a>

                <a
                    href={personalInfo.resume}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 border rounded-lg"
                >
                    Resume
                </a>

            </div>

          </div>

          <div className="flex-1 flex justify-center">

            <Image
              src="/images/profile/profile.jpg"
              alt="Profile"
              width={350}
              height={350}
              className="rounded-full object-cover"
            />

          </div>

        </div>

      </div>
    </section>
  );
}