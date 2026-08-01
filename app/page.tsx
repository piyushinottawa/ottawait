import Image from "next/image";

const services = [
  {
    title: "Technology Strategy",
    description:
      "Align technology investments with business priorities through practical strategies and roadmaps.",
  },
  {
    title: "Cybersecurity",
    description:
      "Strengthen security, governance, risk management, and regulatory compliance.",
  },
  {
    title: "Cloud Transformation",
    description:
      "Modernize infrastructure and applications for resilience, scalability, and operational efficiency.",
  },
  {
    title: "Project & Program Delivery",
    description:
      "Lead complex technology initiatives from planning through implementation and operational readiness.",
  },
  {
    title: "Enterprise Architecture",
    description:
      "Design secure, integrated, and future-ready technology environments.",
  },
  {
    title: "Digital Transformation",
    description:
      "Improve operations through modern technology, automation, and process optimization.",
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
      "Improve supplier, procurement, inventory, and operational visibility.",
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
  {
    title: "Government & Public Sector",
    description:
      "Secure modernization, governance, cybersecurity, and enterprise program delivery.",
  },
  {
    title: "Healthcare",
    description:
      "Reliable technology solutions that improve operations and protect sensitive information.",
  },
  {
    title: "Manufacturing",
    description:
      "Modern operations, stronger supply chains, and improved business visibility.",
  },
  {
    title: "Financial Services",
    description:
      "Cybersecurity, compliance, resilience, and secure technology transformation.",
  },
  {
    title: "Retail & Distribution",
    description:
      "Connected operations, customer management, and supply-chain efficiency.",
  },
  {
    title: "Small & Medium Business",
    description:
      "Practical and scalable technology solutions designed to support growth.",
  },
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
    <main className="min-h-screen bg-white text-slate-900">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-5 px-5 py-3 lg:px-8">
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
                className="scale-[1.65] object-contain"
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
            className="shrink-0 rounded-lg bg-blue-700 px-4 py-3 text-sm font-semibold text-white transition hover:bg-blue-800 md:px-6"
          >
            Book Consultation
          </a>
        </div>
      </header>

      {/* Hero */}
      <section
        id="home"
        className="scroll-mt-28 overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50"
      >
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-16 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-20">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.14em] text-blue-700">
              Technology Strategy • Cybersecurity • Cloud • SaaS Solutions
            </p>

            <h1 className="mt-5 max-w-2xl text-4xl font-bold leading-tight tracking-tight text-slate-950 md:text-5xl">
              Technology That Drives Business
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              OttawaIT helps organizations modernize technology, strengthen
              cybersecurity, accelerate cloud transformation, and deliver
              enterprise solutions that create measurable business value.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="#contact"
                className="rounded-lg bg-blue-700 px-7 py-4 text-center font-semibold text-white transition hover:bg-blue-800"
              >
                Book a Consultation
              </a>

              <a
                href="#saas"
                className="rounded-lg border border-slate-300 bg-white px-7 py-4 text-center font-semibold text-slate-800 transition hover:border-blue-700 hover:text-blue-700"
              >
                Explore SaaS Solutions
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -right-10 -top-10 h-64 w-64 rounded-full bg-blue-200/60 blur-3xl" />
            <div className="absolute -bottom-10 -left-10 h-56 w-56 rounded-full bg-slate-200/70 blur-3xl" />

            <div className="relative rounded-3xl border border-blue-100 bg-white p-7 shadow-xl shadow-blue-900/10">
              <div className="rounded-2xl bg-slate-950 p-8 text-white">
                <p className="text-sm font-semibold uppercase tracking-widest text-blue-300">
                  Enterprise Technology Leadership
                </p>

                <h2 className="mt-5 text-2xl font-bold leading-snug">
                  Secure technology.
                  <br />
                  Stronger business outcomes.
                </h2>

                <p className="mt-5 leading-7 text-slate-300">
                  Strategic technology leadership across cybersecurity, cloud
                  transformation, enterprise architecture, and complex program
                  delivery.
                </p>

                <div className="mt-7 grid gap-3 sm:grid-cols-3">
                  {["Strategy", "Security", "Delivery"].map((item) => (
                    <div
                      key={item}
                      className="rounded-xl bg-white/10 px-4 py-4 text-center text-sm font-semibold"
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

      {/* Trust Strip */}
      <section className="bg-blue-700 text-white">
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
      <section id="services" className="scroll-mt-28 py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.14em] text-blue-700">
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
                className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:border-blue-300 hover:shadow-lg"
              >
                <div className="h-1 w-12 rounded-full bg-blue-700" />

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

      {/* SaaS Solutions */}
      <section
        id="saas"
        className="scroll-mt-28 bg-slate-950 py-16 text-white lg:py-20"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.14em] text-blue-300">
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

          <div className="mt-11 rounded-3xl border border-white/10 bg-white/5 p-7 md:p-10">
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
                  href="#contact"
                  className="mt-8 inline-flex rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-500"
                >
                  Explore SynexaOne
                </a>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {modules.map((module) => (
                  <article
                    key={module.shortName}
                    className="rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:bg-white/10"
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
      <section className="bg-slate-50 py-16 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.14em] text-blue-700">
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
                className="flex items-center gap-4 rounded-xl border border-slate-200 bg-white p-5 shadow-sm"
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
      <section id="industries" className="scroll-mt-28 py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.14em] text-blue-700">
              Industries
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 md:text-4xl">
              Industry Experience
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Technology solutions aligned with each organization&apos;s
              operational, security, and regulatory requirements.
            </p>
          </div>

          <div className="mt-11 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {industries.map((industry) => (
              <article
                key={industry.title}
                className="rounded-2xl border border-slate-200 bg-white p-7 transition hover:border-blue-300 hover:shadow-lg"
              >
                <h3 className="text-xl font-bold text-slate-950">
                  {industry.title}
                </h3>

                <p className="mt-3 leading-7 text-slate-600">
                  {industry.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section
        id="leadership"
        className="scroll-mt-28 bg-blue-50 py-16 lg:py-20"
      >
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 lg:grid-cols-[0.7fr_1.3fr] lg:px-8">
          <div className="mx-auto max-w-xs">
            <div className="overflow-hidden rounded-3xl border border-blue-100 bg-white p-4 shadow-xl">
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
            <p className="text-sm font-bold uppercase tracking-[0.14em] text-blue-700">
              Leadership
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 md:text-4xl">
              Experience You Can Trust
            </h2>

            <h3 className="mt-6 text-2xl font-bold text-slate-950">
              Piyush Agarwal
            </h3>

            <p className="mt-1 font-semibold text-blue-700">
              Founder & Technology Leader
            </p>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Piyush brings more than 25 years of experience in technology
              strategy, cybersecurity, cloud transformation, enterprise
              architecture, governance, and complex program delivery.
            </p>

            <p className="mt-4 text-lg leading-8 text-slate-600">
              His experience spans government and private-sector
              organizations, supporting secure transformation and measurable
              business outcomes.
            </p>

            <div className="mt-7">
              <p className="text-sm font-bold uppercase tracking-widest text-slate-500">
                Professional Credentials
              </p>

              <p className="mt-3 text-lg font-bold leading-8 text-slate-900">
                MBA • PMP • CISSP • CISM • ITIL • SAFe Agilist
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="scroll-mt-28 bg-slate-950 py-16 text-white lg:py-20"
      >
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
          <p className="text-sm font-bold uppercase tracking-[0.14em] text-blue-300">
            Start a Conversation
          </p>

          <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-4xl">
            Ready to Move Your Technology Initiative Forward?
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-300">
            Discuss your technology strategy, cybersecurity, cloud
            transformation, enterprise delivery, or SaaS requirements with
            OttawaIT.
          </p>

          <a
            href="mailto:info@ottawait.net"
            className="mt-8 inline-flex rounded-lg bg-blue-600 px-8 py-4 font-semibold text-white transition hover:bg-blue-500"
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