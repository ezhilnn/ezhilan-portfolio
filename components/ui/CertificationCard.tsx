import { Certificate } from "@/types/certificate";

type CertificationCardProps = {
  certificate: Certificate;
};

export default function CertificationCard({
  certificate,
}: CertificationCardProps) {
  return (
    <div className="border rounded-xl p-6">

      <h3 className="text-xl font-semibold">
        {certificate.name}
      </h3>

      <p className="mt-2 text-gray-500">
        {certificate.issuer}
      </p>

    </div>
  );
}