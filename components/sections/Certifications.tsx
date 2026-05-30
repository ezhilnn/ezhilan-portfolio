import CertificationCard from "@/components/ui/CertificationCard";
import { certifications } from "@/data/certifications";

export default function Certifications() {
  return (
    <section
      id="certifications"
      className="py-24"
    >
      <div className="max-w-7xl mx-auto px-8">

        <h2 className="text-4xl font-bold mb-10">
          Certifications
        </h2>

        <div className="grid md:grid-cols-2 gap-6">

          {certifications.map((certificate) => (
            <CertificationCard
              key={certificate.name}
              certificate={certificate}
            />
          ))}

        </div>

      </div>
    </section>
  );
}