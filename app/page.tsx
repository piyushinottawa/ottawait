import Image from "next/image";

const services = [
  {
    title: "Technology Strategy",
    description:
      "Build practical technology roadmaps aligned with business priorities and measurable outcomes.",
    icon: "◆",
  },
  {
    title: "Cybersecurity",
    description:
      "Strengthen governance, reduce risk, and protect critical systems, applications, and information.",
    icon: "◇",
  },
  {
    title: "Cloud Transformation",
    description:
      "Modernize infrastructure and applications for resilience, scalability, and operational efficiency.",
    icon: "☁",
  },
  {
    title: "Project & Program Delivery",
    description:
      "Lead complex enterprise initiatives from planning through implementation and operational readiness.",
    icon: "✓",
  },
  {
    title: "Enterprise Architecture",
    description:
      "Design secure, integrated, and future-ready technology environments.",
    icon: "▦",
  },
  {
    title: "Digital Transformation",
    description:
      "Improve business processes through modern technology, automation, and enterprise solutions.",
    icon: "↗",
  },
];

const modules = [
  {
    shortName: "CRM",
    title: "Customer Relationship Management",
    description:
      "Manage customers, opportunities, activities, and business relationships.",
  },
  {
    shortName: "SCM",
    title: "Supply Chain Management",
    description:
      "Improve procurement, suppliers, inventory, and operational visibility.",
  },
  {
    shortName: "DMS",
    title: "Document Management",
    description:
      "Securely organize, approve, control, and access business documents.",
  },
  {
    shortName: "GRC",
    title: "Governance, Risk & Compliance",
    description:
      "Manage risks, controls, compliance obligations, and governance activities.",
  },
];

const industries = [
  "Government & Public Sector",
  "Healthcare",
  "Manufacturing",
  "Financial Services",
  "Retail & Distribution",
  "Small & Medium Business",
];

const strengths = [
  "Business-focused approach",
  "Security by design",
  "Enterprise delivery experience",
  "Practical and scalable solutions",
  "Collaborative leadership",
  "Measurable business outcomes",
];

export default function HomePage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-white text-slate-900">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 shadow-sm backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-3 lg:px-8">
          <a
            href="#home"
            aria-label="OttawaIT home"
            className="block shrink-0"
          >
            <div className="relative h-20 w-64 overflow-hidden sm:w-72">
              <Image
                src="/images/logo.png"
                alt="OttawaIT"
                fill
                priority
                sizes="288px"
                className="scale-[1.7] object-contain"
              />
            </div>
          </a>

          <nav className="hidden items-center gap-7 text-sm font-semibold text-slate-700 lg:flex">
            <a href="#services" className="transition hover:text-blue-700">
              Services
            </a>

            <a href="#saas" className="transition hover:text-blue-700">
              SaaS Solutions
            </a>

            <a href="#industries" className="transition hover:text-blue-700">
              Industries
            </a>

            <a href="#leadership" className="transition hover:text-blue-700">
              Leadership
            </a>

            <a href="#contact" className="transition hover:text-blue-700">
              Contact
            </a>
          </nav>

          <a
            href="#contact"
            className="shrink-0 rounded-lg bg-blue-700 px-4 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-blue-800 md:px-6"
          >
            Book Consultation
          </a>
        </div>
      </header>

      {/* Hero */}
      <section
        id="home"
        className="relative scroll-mt-28 overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-blue-800 text-white"
      >
        <div className="absolute inset-0 opacity-30">
          <div className="absolute -right-24 -top-24 h-96 w-96 rounded-full bg-blue-400 blur-3xl" />
          <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-cyan-500 blur-3xl" />
        </div>

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-20">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.15em] text-blue-200">
              Technology Strategy • Cybersecurity • Cloud • SaaS Solutions
            </p>

            <h1 className="mt-5 max-w-2xl text-4xl font-bold leading-tight tracking-tight md:text-5xl">
              Technology That Drives Business
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-blue-50">
              OttawaIT helps organizations modernize technology, strengthen
              cybersecurity, accelerate cloud transformation, and deliver
              enterprise solutions that create measurable business value.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="#contact"
                className="rounded-lg bg-blue-500 px-7 py-4 text-center font-semibold text-white shadow-lg transition hover:bg-blue-400"
              >
                Book a Consultation
              </a>

              <a
                href="#saas"
                className="rounded-lg border border-white/30 bg-white/10 px-7 py-4 text-center font-semibold text-white backdrop-blur transition hover:bg-white/20"
              >
                Explore SaaS Solutions
              </a>
            </div>
          </div>

          {/* Technology visual */}
          <div className="relative mx-auto w-full max-w-lg">
            <div className="absolute inset-0 rounded-full bg-blue-400/30 blur-3xl" />

            <div className="relative rounded-3xl border border-white/20 bg-white/10 p-6 shadow-2xl backdrop-blur">
              <div className="rounded-2xl border border-white/10 bg-slate-950/70 p-8">
                <div className="flex items-center justify-between">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-600 text-3xl">
                    ☁
                  </div>

                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-500 text-3xl">
                    ◇
                  </div>
                </div>

                <div className="my-7 h-px bg-gradient-to-r from-transparent via-blue-300 to-transparent" />

                <h2 className="text-2xl font-bold">
                  Secure. Connected. Scalable.
                </h2>

                <p className="mt-4 leading-7 text-slate-300">
                  Enterprise technology leadership across strategy,
                  cybersecurity, cloud transformation, architecture, and
                  complex program delivery.
                </p>

                <div className="mt-7 grid grid-cols-3 gap-3">
                  {["Strategy", "Security", "Delivery"].map((item) => (
                    <div
                      key={item}
                      className="rounded-xl border border-white/10 bg-white/10 px-3 py-4 text-center text-sm font-semibold"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust strip */}
      <section className="border-y border-blue-700 bg-blue-800 text-white">
        <div className="mx-auto grid max-w-7xl gap-7 px-6 py-7 text-center sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
          <div>
            <p className="text-xl font-bold">25+ Years</p>
            <p className="mt-1 text-sm text-blue-100">
              Technology Leadership
            </p>
          </div>

          <div>
            <p className="text-xl font-bold">Enterprise Experience</p>
            <p className="mt-1 text-sm text-blue-100">
              Public and Private Sector
            </p>
          </div>

          <div>
            <p className="text-xl font-bold">Security First</p>
            <p className="mt-1 text-sm text-blue-100">
              Governance, Risk and Compliance
            </p>
          </div>

          <div>
            <p className="text-xl font-bold">End-to-End Delivery</p>
            <p className="mt-1 text-sm text-blue-100">
              Strategy Through Operations
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="scroll-mt-28 bg-slate-50 py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.15em] text-blue-700">
              Technology Consulting Services
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 md:text-4xl">
              Transform Technology Into Business Value
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Strategic guidance and disciplined delivery to help organizations
              plan, secure, modernize, and manage technology.
            </p>
          </div>

          <div className="mt-11 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <article
                key={service.title}
                className="group rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:border-blue-300 hover:shadow-xl"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-xl font-bold text-blue-700 transition group-hover:bg-blue-700 group-hover:text-white">
                  {service.icon}
                </div>

                <h3 className="mt-5 text-xl font-bold text-slate-950">
                  {service.title}
                </h3>

                <p className="mt-3 leading-7 text-slate-600">
                  {service.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SaaS */}
      <section
        id="saas"
        className="scroll-mt-28 bg-slate-950 py-16 text-white lg:py-20"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.15em] text-blue-300">
              SaaS Solutions
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-4xl">
              Enterprise Software for Modern Organizations
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-300">
              Secure and integrated platforms that simplify operations,
              improve visibility, and strengthen governance.
            </p>
          </div>

          <div className="mt-11 rounded-3xl border border-white/10 bg-gradient-to-br from-blue-950 to-slate-950 p-7 shadow-2xl md:p-10">
            <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
              <div>
                <p className="text-sm font-semibold uppercase tracking-widest text-blue-300">
                  Featured Platform
                </p>

                <h3 className="mt-3 text-3xl font-bold">SynexaOne</h3>

                <p className="mt-3 text-xl font-semibold text-blue-200">
                  Unified Business Operations Platform
                </p>

                <p className="mt-5 leading-7 text-slate-300">
                  Connect customers, suppliers, documents, governance, risk,
                  and compliance within one integrated business platform.
                </p>

                <a
                  href="https://www.synexaone.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 inline-flex rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-500"
                >
                  Explore SynexaOne
                </a>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {modules.map((module) => (
                  <article
                    key={module.shortName}
                    className="rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:border-blue-400/50 hover:bg-white/10"
                  >
                    <span className="inline-flex rounded-lg bg-blue-600 px-4 py-2 text-sm font-bold">
                      {module.shortName}
                    </span>

                    <h4 className="mt-5 text-lg font-bold">{module.title}</h4>

                    <p className="mt-3 text-sm leading-6 text-slate-300">
                      {module.description}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why OttawaIT */}
      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.15em] text-blue-700">
              Why OttawaIT
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 md:text-4xl">
              Experience That Delivers Results
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              OttawaIT combines technology strategy, cybersecurity expertise,
              enterprise architecture, and disciplined program delivery to
              improve performance and reduce organizational risk.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {strengths.map((strength) => (
              <div
                key={strength}
                className="flex items-center gap-4 rounded-xl border border-slate-200 bg-slate-50 p-5"
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-100 font-bold text-blue-700">
                  ✓
                </span>

                <p className="font-semibold text-slate-800">{strength}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section
        id="industries"
        className="scroll-mt-28 bg-slate-50 py-16 lg:py-20"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.15em] text-blue-700">
              Industries
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 md:text-4xl">
              Industry Experience
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Technology solutions aligned with operational, security, and
              regulatory requirements.
            </p>
          </div>

          <div className="mt-11 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((industry) => (
              <article
                key={industry}
                className="rounded-2xl border border-slate-200 bg-white p-7 text-center shadow-sm transition hover:-translate-y-1 hover:border-blue-300 hover:shadow-lg"
              >
                <h3 className="text-xl font-bold text-slate-950">
                  {industry}
                </h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section
        id="leadership"
        className="scroll-mt-28 bg-gradient-to-br from-blue-950 to-slate-950 py-16 text-white lg:py-20"
      >
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 lg:grid-cols-[0.7fr_1.3fr] lg:px-8">
          <div className="mx-auto max-w-xs">
            <div className="overflow-hidden rounded-3xl border border-white/20 bg-white/10 p-4 shadow-2xl">
              <Image
                src="/images/piyush.png"
                alt="Piyush Agarwal"
                width={500}
                height={600}
                className="h-auto w-full rounded-2xl object-cover"
              />
            </div>
          </div>

          <div>
            <p className="text-sm font-bold uppercase tracking-[0.15em] text-blue-300">
              Leadership
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-4xl">
              Experience You Can Trust
            </h2>

            <h3 className="mt-6 text-2xl font-bold">Piyush Agarwal</h3>

            <p className="mt-1 font-semibold text-blue-300">
              Founder & Technology Leader
            </p>

            <p className="mt-5 text-lg leading-8 text-slate-300">
              Piyush brings more than 25 years of experience in technology
              strategy, cybersecurity, cloud transformation, enterprise
              architecture, governance, and complex program delivery.
            </p>

            <p className="mt-4 text-lg leading-8 text-slate-300">
              His experience spans government and private-sector
              organizations, supporting secure transformation and measurable
              business outcomes.
            </p>

            <div className="mt-7">
              <p className="text-sm font-bold uppercase tracking-widest text-blue-300">
                Professional Credentials
              </p>

              <p className="mt-3 text-lg font-bold leading-8">
                MBA • PMP • CISSP • CISM • ITIL • SAFe Agilist
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="scroll-mt-28 bg-blue-700 py-16 text-white lg:py-20"
      >
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
          <p className="text-sm font-bold uppercase tracking-[0.15em] text-blue-100">
            Start a Conversation
          </p>

          <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-4xl">
            Ready to Move Your Technology Initiative Forward?
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-blue-100">
            Discuss your technology strategy, cybersecurity, cloud
            transformation, enterprise delivery, or SaaS requirements with
            OttawaIT.
          </p>

          <a
            href="mailto:info@ottawait.net"
            className="mt-8 inline-flex rounded-lg bg-white px-8 py-4 font-semibold text-blue-800 shadow-lg transition hover:bg-blue-50"
          >
            Book a Consultation
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800 bg-slate-950 text-slate-300">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 py-10 md:flex-row md:items-center md:justify-between lg:px-8">
          <div>
            <div className="relative h-16 w-56 overflow-hidden rounded-md bg-white">
              <Image
                src="/images/logo.png"
                alt="OttawaIT"
                fill
                sizes="224px"
                className="scale-[1.55] object-contain"
              />
            </div>

            <p className="mt-4 text-sm">
              Technology Strategy • Cybersecurity • Cloud • SaaS Solutions
            </p>

            <p className="mt-3 text-sm leading-6">
              1-30 Concourse Gate
              <br />
              Ottawa, Ontario, Canada
            </p>
          </div>

          <div className="flex flex-wrap gap-5 text-sm">
            <a href="#services" className="transition hover:text-white">
              Services
            </a>

            <a href="#saas" className="transition hover:text-white">
              SaaS Solutions
            </a>

            <a href="#industries" className="transition hover:text-white">
              Industries
            </a>

            <a href="#leadership" className="transition hover:text-white">
              Leadership
            </a>

            <a href="#contact" className="transition hover:text-white">
              Contact
            </a>
          </div>
        </div>

        <div className="border-t border-slate-800 px-6 py-5 text-center text-sm text-slate-500">
          © {new Date().getFullYear()} OttawaIT. All rights reserved.
        </div>
      </footer>
    </main>
  );
}