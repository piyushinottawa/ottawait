import Image from "next/image";

export default function Page() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-12">
      <h1 className="mb-4 text-4xl font-bold">
        SynexaOne Enterprise Reference Architecture
      </h1>

      <p className="mb-8 text-lg text-slate-600">
        A unified business operations platform connecting SCM, CRM, document
        management, GRC, AI and automation.
      </p>

      <Image
        src="/images/synexaone-marketing-architecture.png"
        alt="SynexaOne Enterprise Reference Architecture"
        width={1536}
        height={1024}
        priority
        className="h-auto w-full rounded-xl border shadow-lg"
      />
    </main>
  );
}