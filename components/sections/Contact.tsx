import { personalInfo } from "@/data/personal";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-24"
    >
      <div className="max-w-7xl mx-auto px-8">

        <h2 className="text-4xl font-bold mb-10">
          Contact
        </h2>

        <div className="border rounded-xl p-8">

          <div className="space-y-4">

            <p>
              <strong>Email:</strong>{" "}
              <a
                href={`mailto:${personalInfo.email}`}
                className="underline"
              >
                {personalInfo.email}
              </a>
            </p>

            <p>
              <strong>Phone:</strong>{" "}
              <a
                href={`tel:${personalInfo.phone}`}
                className="underline"
              >
                {personalInfo.phone}
              </a>
            </p>

            <p>
              <strong>Location:</strong>{" "}
              {personalInfo.location}
            </p>

            <p>
              <strong>LinkedIn:</strong>{" "}
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                Ezhilan Nagarajan
              </a>
            </p>

            <p>
              <strong>GitHub:</strong>{" "}
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                ezhilnn
              </a>
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}