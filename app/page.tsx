import Image from "next/image";

const services = [
  {
    title: "Cloud Consulting",
    description:
      "AWS architecture, cloud migration, DevOps, infrastructure modernization, governance, automation, and cloud cost optimization.",
  },
  {
    title: "Cybersecurity Advisory",
    description:
      "Security assessments, governance, risk management, compliance readiness, cloud security, and cybersecurity strategy.",
  },
  {
    title: "SaaS & Application Development",
    description:
      "Design, develop, deploy, and scale secure SaaS platforms, dashboards, workflow automation, and custom business applications.",
  },
  {
    title: "Technology Strategy & Delivery",
    description:
      "Executive advisory, roadmaps, vendor selection, project and program management, SDLC governance, and solution delivery.",
  },
];

const whyOttawaIT = [
  "10+ Years Technology Leadership",
  "MBA Education",
  "CISSP Certified",
  "CISM Certified",
  "PMP Certified",
  "ITIL & SAFe Certified",
  "Cybersecurity & Risk Management Expertise",
  "Cloud Transformation Experience",
  "Enterprise Program Delivery",
  "SaaS Product Development",
  "Business-Focused Technology Strategy",
  "Government & Enterprise Experience",
];

const industries = [
  "Government & Public Sector",
  "Manufacturing",
  "Healthcare",
  "Retail & Distribution",
  "Supply Chain & Operations",
  "Small & Mid-Sized Businesses",
];

const outcomes = [
  {
    title: "Cloud Transformation",
    description:
      "Helping organizations modernize infrastructure, improve scalability, strengthen security, and reduce operational complexity.",
  },
  {
    title: "Cybersecurity & Risk",
    description:
      "Implementing governance, compliance, security controls, and information risk management programs aligned to business objectives.",
  },
  {
    title: "Program Leadership",
    description:
      "Leading enterprise initiatives from strategy through delivery using Agile, Waterfall, and hybrid delivery models.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-950">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          <a href="#" className="flex items-center">
            <Image
              src="/images/logo.png"
              alt="OttawaIT Logo"
              width={220}
              height={80}
              priority
            />
          </a>

          <nav className="hidden md:flex items-center gap-8 text-slate-900 font-semibold">
            <a href="#services" className="hover:text-blue-600">
              Services
            </a>
            <a href="#solutions" className="hover:text-blue-600">
              SaaS Solutions
            </a>
            <a href="#industries" className="hover:text-blue-600">
              Industries
            </a>
            <a href="#blog" className="hover:text-blue-600">
              Blog
            </a>
            <a href="#contact" className="hover:text-blue-600">
              Contact
            </a>
          </nav>

          <a
            href="#contact"
            className="hidden md:inline-flex rounded-full bg-blue-600 px-7 py-3 font-semibold text-white hover:bg-blue-700 transition"
          >
            Book Consultation
          </a>
          <a
  href="https://www.linkedin.com/in/impiyushagarwal/"
  target="_blank"
  rel="noopener noreferrer"
  className="hover:text-blue-600 transition"
>
  LinkedIn
</a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-white via-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-6 py-24 lg:py-32 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-blue-600 font-semibold text-lg md:text-xl mb-6">
              IT Strategy • Cybersecurity • Cloud Transformation • SaaS Solutions
            </p>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-950 leading-tight">
              Transforming Technology Into Business Value
            </h1>

            <p className="mt-8 text-xl md:text-2xl text-slate-700 leading-relaxed">
              OttawaIT helps organizations modernize technology, strengthen
              cybersecurity, reduce risk, and deliver successful business
              outcomes through strategic advisory, cloud solutions, program
              leadership, and secure SaaS development.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full bg-blue-600 px-8 py-4 text-lg font-semibold text-white shadow-lg hover:bg-blue-700 transition"
              >
                Schedule a Consultation
              </a>

              <a
                href="mailto:info@ottawait.net"
                className="inline-flex items-center justify-center rounded-full border border-slate-300 px-8 py-4 text-lg font-semibold text-slate-900 hover:bg-slate-100 transition"
              >
                Contact OttawaIT
              </a>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="rounded-full bg-white p-4 shadow-2xl">
              <Image
                src="/images/piyush.png"
                alt="Piyush Agarwal"
                width={440}
                height={440}
                className="rounded-full"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why OttawaIT */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-blue-600 font-semibold text-lg uppercase tracking-wide">
              Why OttawaIT
            </p>
            <h2 className="text-4xl md:text-5xl font-bold mt-4">
              Trusted Technology Leadership
            </h2>
            <p className="mt-6 text-xl text-slate-600 max-w-4xl mx-auto">
              With over 10 years of experience leading enterprise technology,
              cybersecurity, cloud transformation, and strategic initiatives,
              OttawaIT helps organizations align technology investments with
              business objectives.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyOttawaIT.map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-8 shadow-sm"
              >
                <h3 className="text-lg font-bold text-slate-900">{item}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-blue-600 font-semibold text-lg uppercase tracking-wide">
              Services
            </p>

            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mt-4">
              Advisory & Development Services
            </h2>

            <p className="mt-6 text-xl text-slate-600 max-w-4xl mx-auto">
              OttawaIT helps organizations modernize technology, strengthen
              cybersecurity, deliver cloud transformation initiatives, and
              develop scalable SaaS solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
            {services.map((service) => (
              <div
                key={service.title}
                className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm hover:shadow-lg transition"
              >
                <h3 className="text-2xl font-bold text-blue-700 mb-6">
                  {service.title}
                </h3>
                <p className="text-lg leading-relaxed text-slate-700">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SynexaOne */}
      <section id="solutions" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-blue-600 font-semibold text-lg uppercase tracking-wide">
              SaaS Solutions
            </p>
            <h2 className="text-4xl md:text-5xl font-bold mt-4">
              SynexaOne
            </h2>
            <p className="mt-6 text-lg text-slate-700 leading-relaxed">
  SynexaOne is an integrated business platform with three core modules:
  Customer Relationship Management (CRM), Supply Chain Management (SCM), and Document
  Management (DM). It also supports workflow automation, analytics and reporting,
  risk management, compliance management, audit management, and business
  continuity capabilities.
</p>

            <div className="mt-8 grid sm:grid-cols-2 gap-4 text-lg text-slate-700">
              <div>• CRM</div>
              <div>• Supply Chain Management</div>
              <div>• Document Management</div>
              <div>• Workflow Automation</div>
              <div>• Risk & Compliance</div>
              <div>• Analytics & Reporting</div>
            </div>

            <a
              href="https://www.synexaone.com"
              target="_blank"
              rel="noreferrer"
              className="mt-10 inline-flex rounded-full bg-blue-600 px-8 py-4 text-lg font-semibold text-white hover:bg-blue-700 transition"
            >
              Learn More About SynexaOne
            </a>
          </div>

          <div className="rounded-3xl bg-gradient-to-br from-blue-600 to-slate-900 p-10 text-white shadow-2xl">
            <h3 className="text-3xl font-bold mb-6">
              Consulting + Product Development
            </h3>
            <p className="text-xl leading-relaxed text-blue-50">
              OttawaIT does more than advise. We design and build secure,
              cloud-native business platforms that improve operations,
              governance, visibility, and decision-making.
            </p>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section id="industries" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-blue-600 font-semibold text-lg uppercase tracking-wide">
              Industries
            </p>
            <h2 className="text-4xl md:text-5xl font-bold mt-4">
              Industries Served
            </h2>
            <p className="mt-6 text-xl text-slate-600 max-w-4xl mx-auto">
              OttawaIT supports organizations where technology modernization,
              cybersecurity, cloud transformation, and operational efficiency
              are business priorities.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {industries.map((industry) => (
              <div
                key={industry}
                className="rounded-2xl bg-white border border-slate-200 p-8 shadow-sm"
              >
                <h3 className="text-2xl font-bold text-slate-900">
                  {industry}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Outcomes */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-blue-600 font-semibold text-lg uppercase tracking-wide">
              Outcomes
            </p>
            <h2 className="text-4xl md:text-5xl font-bold mt-4">
              Experience That Delivers Results
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {outcomes.map((outcome) => (
              <div
                key={outcome.title}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-8"
              >
                <h3 className="text-2xl font-bold text-blue-700 mb-4">
                  {outcome.title}
                </h3>
                <p className="text-lg text-slate-700 leading-relaxed">
                  {outcome.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Metrics */}
      <section className="py-20 bg-slate-950 text-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-5xl font-bold text-blue-400">20+</div>
            <p className="mt-3 text-lg text-slate-300">Years Experience</p>
          </div>
          <div>
            <div className="text-5xl font-bold text-blue-400">5+</div>
            <p className="mt-3 text-lg text-slate-300">Certifications</p>
          </div>
          <div>
            <div className="text-5xl font-bold text-blue-400">Enterprise</div>
            <p className="mt-3 text-lg text-slate-300">Program Delivery</p>
          </div>
          <div>
            <div className="text-5xl font-bold text-blue-400">Cloud</div>
            <p className="mt-3 text-lg text-slate-300">Security Expertise</p>
          </div>
        </div>
      </section>

      {/* Contact + Footer */}
<section id="contact" className="py-20 bg-slate-900 text-white">
  <div className="max-w-5xl mx-auto px-6 text-center">
    <h2 className="text-3xl md:text-4xl font-bold">
      Ready to Discuss Your Next Technology Initiative?
    </h2>

    <p className="mt-5 text-lg leading-relaxed text-slate-300 max-w-3xl mx-auto">
      Whether you need technology strategy, cybersecurity expertise, cloud
      transformation, project leadership, or SaaS development, OttawaIT can help.
    </p>

    <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
      <a
        href="https://calendly.com/YOUR-CALENDLY-LINK"
        target="_blank"
        rel="noreferrer"
        className="rounded-full bg-white px-7 py-3 text-base font-semibold text-slate-900 hover:bg-slate-100 transition"
      >
        Schedule a Consultation
      </a>

      <a
        href="mailto:info@ottawait.net"
        className="rounded-full border border-white/30 px-7 py-3 text-base font-semibold text-white hover:bg-white/10 transition"
      >
        Email OttawaIT
      </a>
    </div>

    <div className="mt-10 border-t border-white/10 pt-8 text-slate-300 text-sm md:text-base">
      <p>OttawaIT • Technology Strategy • Cybersecurity • Cloud Solutions • SaaS Development</p>
      <p className="mt-3">1-30 Concourse Gate, Ottawa, Ontario, Canada • info@ottawait.net</p>
            <p className="mt-3 text-slate-400">© 2026 OttawaIT. All Rights Reserved.</p>
    </div>
  </div>
  </section>
  {/* Footer */}
    </main>
  );
}