export default function HomePage() {
  const services = [
    {
      title: "Technology Strategy",
      description:
        "Develop practical technology roadmaps that align investments with business objectives.",
    },
    {
      title: "Cybersecurity",
      description:
        "Strengthen governance, reduce risk, and protect critical business systems and information.",
    },
    {
      title: "Cloud Transformation",
      description:
        "Modernize infrastructure and applications for improved resilience, scalability, and efficiency.",
    },
    {
      title: "Project & Program Delivery",
      description:
        "Lead complex enterprise initiatives from planning and governance through implementation.",
    },
    {
      title: "Enterprise Architecture",
      description:
        "Design secure, integrated, and future-ready technology environments.",
    },
    {
      title: "Digital Transformation",
      description:
        "Improve business processes through modern technology, automation, and enterprise solutions.",
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
        "Improve procurement, inventory, suppliers, and operational visibility.",
    },
    {
      shortName: "DMS",
      title: "Document Management",
      description:
        "Securely organize, control, approve, and access business documents.",
    },
    {
      shortName: "GRC",
      title: "Governance, Risk & Compliance",
      description:
        "Manage organizational risk, controls, compliance, and governance.",
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

  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* Navigation */}
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <a href="#home" className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-700 text-lg font-bold text-white">
              O
            </div>

            <div>
              <p className="text-xl font-bold tracking-tight text-slate-950">
                OttawaIT
              </p>
              <p className="text-xs text-slate-500">
                Technology Consulting & SaaS
              </p>
            </div>
          </a>

          <nav className="hidden items-center gap-7 text-sm font-medium text-slate-700 lg:flex">
            <a className="transition hover:text-blue-700" href="#home">
              Home
            </a>
            <a className="transition hover:text-blue-700" href="#services">
              Services
            </a>
            <a className="transition hover:text-blue-700" href="#saas">
              SaaS Solutions
            </a>
            <a className="transition hover:text-blue-700" href="#industries">
              Industries
            </a>
            <a className="transition hover:text-blue-700" href="#about">
              About
            </a>
            <a className="transition hover:text-blue-700" href="#contact">
              Contact
            </a>
          </nav>

          <a
            href="#contact"
            className="rounded-lg bg-blue-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-800"
          >
            Book Consultation
          </a>
        </div>
      </header>

      {/* Hero */}
      <section
        id="home"
        className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50"
      >
        <div className="absolute -right-40 -top-40 h-96 w-96 rounded-full bg-blue-100/60 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-6 py-24 lg:grid-cols-2 lg:px-8 lg:py-32">
          <div>
            <p className="mb-6 text-sm font-bold uppercase tracking-[0.2em] text-blue-700">
              Technology Strategy • Cybersecurity • Cloud • SaaS Solutions
            </p>

            <h1 className="max-w-3xl text-5xl font-bold leading-tight tracking-tight text-slate-950 md:text-6xl lg:text-7xl">
              Technology That Drives Business
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-600 md:text-xl">
              Helping organizations modernize technology, strengthen
              cybersecurity, accelerate cloud transformation, and deliver
              enterprise SaaS solutions that create measurable business value.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
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
            <div className="rounded-3xl border border-blue-100 bg-white p-8 shadow-2xl shadow-blue-900/10">
              <div className="rounded-2xl bg-slate-950 p-8 text-white">
                <p className="text-sm font-semibold uppercase tracking-widest text-blue-300">
                  OttawaIT
                </p>

                <h2 className="mt-4 text-3xl font-bold">
                  Secure technology.
                  <br />
                  Stronger outcomes.
                </h2>

                <p className="mt-5 leading-7 text-slate-300">
                  Enterprise technology leadership spanning strategy,
                  cybersecurity, cloud transformation, architecture, and
                  complex program delivery.
                </p>

                <div className="mt-8 grid grid-cols-2 gap-4">
                  <div className="rounded-xl bg-white/10 p-5">
                    <p className="text-3xl font-bold text-white">25+</p>
                    <p className="mt-1 text-sm text-slate-300">
                      Years of experience
                    </p>
                  </div>

                  <div className="rounded-xl bg-white/10 p-5">
                    <p className="text-3xl font-bold text-white">4</p>
                    <p className="mt-1 text-sm text-slate-300">
                      Integrated SaaS modules
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-5 grid grid-cols-3 gap-3 text-center">
                {["Strategy", "Security", "Delivery"].map((item) => (
                  <div
                    key={item}
                    className="rounded-xl bg-blue-50 px-3 py-4 text-sm font-semibold text-blue-800"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="border-y border-blue-800 bg-blue-700 text-white">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-6 py-8 text-center md:grid-cols-4 lg:px-8">
          <div>
            <p className="text-2xl font-bold">25+ Years</p>
            <p className="mt-1 text-sm text-blue-100">
              Technology Leadership
            </p>
          </div>

          <div>
            <p className="text-2xl font-bold">Enterprise</p>
            <p className="mt-1 text-sm text-blue-100">
              Public & Private Sector
            </p>
          </div>

          <div>
            <p className="text-2xl font-bold">Security First</p>
            <p className="mt-1 text-sm text-blue-100">
              Risk & Compliance
            </p>
          </div>

          <div>
            <p className="text-2xl font-bold">End-to-End</p>
            <p className="mt-1 text-sm text-blue-100">
              Strategy Through Delivery
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="scroll-mt-24 py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-700">
              Technology Consulting Services
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">
              Transform Technology Into Business Value
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Helping organizations plan, secure, modernize, and deliver
              technology with confidence.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <article
                key={service.title}
                className="group rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 font-bold text-blue-700">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <h3 className="mt-6 text-xl font-bold text-slate-950">
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
        className="scroll-mt-24 bg-slate-950 py-24 text-white"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-300">
              Enterprise SaaS Solutions
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">
              Purpose-Built Software for Modern Organizations
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-300">
              Secure and integrated business platforms that simplify
              operations, improve visibility, and strengthen governance.
            </p>
          </div>

          <div className="mt-14 rounded-3xl border border-white/10 bg-white/5 p-7 md:p-10">
            <div className="grid gap-10 lg:grid-cols-[0.85fr_1.4fr]">
              <div>
                <p className="text-sm font-semibold uppercase tracking-widest text-blue-300">
                  Featured Platform
                </p>

                <h3 className="mt-3 text-4xl font-bold">SynexaOne</h3>

                <p className="mt-3 text-xl font-semibold text-blue-200">
                  Unified Business Operations Platform
                </p>

                <p className="mt-6 leading-7 text-slate-300">
                  One integrated enterprise platform connecting customers,
                  suppliers, documents, governance, risk, and compliance.
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
                    <div className="flex h-11 w-14 items-center justify-center rounded-lg bg-blue-600 font-bold">
                      {module.shortName}
                    </div>

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
      <section className="bg-slate-50 py-24">
        <div className="mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-700">
              Why OttawaIT
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">
              Experience That Delivers Results
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Technology transformation requires strategic leadership,
              disciplined execution, and a strong understanding of business
              objectives.
            </p>

            <p className="mt-4 text-lg leading-8 text-slate-600">
              OttawaIT helps organizations improve performance, reduce risk,
              and create lasting business value.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              "Business-First Approach",
              "Security by Design",
              "Enterprise Delivery Experience",
              "Collaborative Partnership",
              "Practical & Scalable Solutions",
              "Measurable Business Outcomes",
            ].map((item) => (
              <div
                key={item}
                className="flex items-center gap-4 rounded-xl border border-slate-200 bg-white p-5 shadow-sm"
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-100 font-bold text-blue-700">
                  ✓
                </span>
                <p className="font-semibold text-slate-800">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section id="industries" className="scroll-mt-24 py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-700">
              Industries
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">
              Industries We Serve
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Technology solutions tailored to the operational, security, and
              regulatory needs of each organization.
            </p>
          </div>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((industry, index) => (
              <div
                key={industry}
                className="rounded-2xl border border-slate-200 bg-white p-7 transition hover:border-blue-300 hover:shadow-lg"
              >
                <p className="text-sm font-bold text-blue-700">
                  0{index + 1}
                </p>
                <h3 className="mt-3 text-xl font-bold text-slate-950">
                  {industry}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="scroll-mt-24 bg-blue-50 py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
          <div className="rounded-3xl bg-blue-700 p-10 text-white shadow-xl">
            <div className="flex h-24 w-24 items-center justify-center rounded-full border-4 border-white/20 bg-white/10 text-3xl font-bold">
              PA
            </div>

            <h3 className="mt-7 text-3xl font-bold">Piyush Agarwal</h3>

            <p className="mt-2 text-blue-100">
              Founder & Technology Leader
            </p>

            <div className="mt-7 flex flex-wrap gap-2">
              {["MBA", "PMP", "CISSP", "CISM", "ITIL", "SAFe Agilist"].map(
                (certification) => (
                  <span
                    key={certification}
                    className="rounded-full bg-white/10 px-4 py-2 text-sm font-semibold"
                  >
                    {certification}
                  </span>
                ),
              )}
            </div>
          </div>

          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-700">
              About OttawaIT
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">
              Leadership You Can Trust
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              OttawaIT is led by Piyush Agarwal, a technology leader with more
              than 25 years of experience delivering enterprise transformation
              across government and private sector organizations.
            </p>

            <p className="mt-4 text-lg leading-8 text-slate-600">
              With expertise in technology strategy, cybersecurity, cloud
              transformation, enterprise architecture, governance, and program
              delivery, OttawaIT helps organizations navigate complex
              technology initiatives with confidence.
            </p>

            <div className="mt-8">
              <p className="text-sm font-bold uppercase tracking-widest text-slate-500">
                Professional Certifications
              </p>

              <p className="mt-3 text-lg font-bold text-slate-900">
                MBA • PMP • CISSP • CISM • ITIL • SAFe Agilist
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section
        id="contact"
        className="scroll-mt-24 bg-slate-950 py-24 text-white"
      >
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-300">
            Start a Conversation
          </p>

          <h2 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">
            Ready to Transform Your Business?
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            Whether you are planning a technology initiative, strengthening
            cybersecurity, modernizing cloud infrastructure, or exploring
            enterprise SaaS solutions, OttawaIT is ready to help.
          </p>

          <a
            href="mailto:info@ottawait.net"
            className="mt-10 inline-flex rounded-lg bg-blue-600 px-8 py-4 font-semibold text-white transition hover:bg-blue-500"
          >
            Book a Consultation
          </a>
        </div>
      </section>

{/* Footer */}
<footer className="border-t border-slate-800 bg-slate-950 text-slate-300">
  <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-10 md:flex-row md:items-center md:justify-between lg:px-8">
    <div>
      <p className="text-xl font-bold text-white">OttawaIT</p>

      <p className="mt-2 text-sm">
        Technology Strategy • Cybersecurity • Cloud • SaaS Solutions
      </p>

      <p className="mt-2 text-sm">
        1-30 Concourse Gate
        <br />
        Ottawa, Ontario, K2E 7V7, Canada
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
            <a href="#about" className="transition hover:text-white">
              About
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