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
<section className="relative overflow-hidden bg-gradient-to-br from-white via-slate-50 to-sky-50">
  <div className="max-w-7xl mx-auto px-6 py-20 lg:py-28 grid lg:grid-cols-2 gap-14 items-center">

    {/* Left Side */}
    <div>
      <p className="text-sky-700 font-semibold text-base md:text-lg mb-5">
        Technology Strategy • Cybersecurity • Cloud Transformation • SaaS Solutions
      </p>

      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-950 leading-tight">
        Transforming Technology Into Business Value
      </h1>

      <p className="mt-7 text-lg md:text-xl text-slate-700 leading-relaxed">
        OttawaIT helps organizations modernize technology, strengthen cybersecurity,
        reduce risk, and deliver successful business outcomes through strategic
        advisory, cloud solutions, program leadership, and secure application development.
      </p>

      <div className="mt-9 flex flex-col sm:flex-row gap-4">
        <a
          href="#contact"
          className="inline-flex items-center justify-center rounded-full bg-sky-700 px-7 py-3 text-base font-semibold text-white shadow-lg hover:bg-sky-800 transition"
        >
          Schedule a Consultation
        </a>

        <a
          href="#solutions"
          className="inline-flex items-center justify-center rounded-full border border-slate-300 px-7 py-3 text-base font-semibold text-slate-900 hover:bg-slate-100 transition"
        >
          Explore SynexaOne
        </a>
      </div>
    </div>

    {/* Right Side */}
    <div className="flex flex-col items-center">

      <div className="rounded-full bg-white p-3 shadow-2xl ring-1 ring-slate-200">
        <Image
          src="/images/piyush.png"
          alt="Piyush Agarwal"
          width={420}
          height={420}
          className="rounded-full object-cover"
          priority
        />
      </div>

      <div className="mt-6 text-center max-w-xl">
        <p className="text-base text-slate-700 leading-relaxed font-medium">
          10+ Years Executive Leadership • 25+ Years Cross-Industry Experience • Government, Financial Services & Enterprise • Cybersecurity, Technology, Project & Program Leadership
        </p>

        <p className="mt-4 text-sm text-slate-600">
          MBA • CISSP • CISM • PMP • ITIL • SAFe
        </p>
      </div>

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
{/* SaaS Solutions */}
<section id="solutions" className="py-24 bg-white">
  <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

    {/* Left */}
    <div>
      <p className="text-blue-600 font-semibold text-lg uppercase tracking-wide">
        SaaS Solutions
      </p>

      <h2 className="text-5xl md:text-6xl font-bold text-slate-900 mt-4">
        SynexaOne
      </h2>

      <p className="mt-8 text-xl leading-relaxed text-slate-700">
        SynexaOne is an AI-powered unified enterprise platform designed to
        streamline operations through four integrated modules:
        <strong> CRM</strong>,
        <strong> SCM</strong>,
        <strong> DMS</strong>, and
        <strong> GRC</strong>.
        The platform also delivers workflow automation, analytics & reporting,
        AI-powered insights, enterprise security, and cloud-native scalability.
      </p>

      <div className="grid md:grid-cols-2 gap-6 mt-10">

        <ul className="space-y-4 text-lg text-slate-700">
          <li>✔ Customer Relationship Management (CRM)</li>
          <li>✔ Supply Chain Management (SCM)</li>
          <li>✔ Document Management System (DMS)</li>
        </ul>

        <ul className="space-y-4 text-lg text-slate-700">
          <li>✔ Governance, Risk & Compliance (GRC)</li>
          <li>✔ Workflow Automation</li>
          <li>✔ Analytics & AI Intelligence</li>
        </ul>

      </div>

      <a
        href="https://www.synexaone.com"
        target="_blank"
        rel="noreferrer"
        className="mt-10 inline-flex rounded-full bg-blue-600 px-8 py-4 text-lg font-semibold text-white hover:bg-blue-700 transition"
      >
        Explore SynexaOne
      </a>
    </div>

    {/* Right */}
    <div className="rounded-3xl bg-gradient-to-br from-blue-600 to-slate-900 p-10 text-white shadow-2xl">

      <h3 className="text-3xl font-bold mb-6">
        Enterprise SaaS Platform
      </h3>

      <p className="text-xl leading-relaxed text-blue-50">
        SynexaOne combines customer management, supply chain operations,
        document management, and governance into a single secure,
        cloud-native platform powered by AI and Python services.
      </p>

      <div className="grid grid-cols-2 gap-4 mt-10">

        <div className="rounded-xl bg-white/10 p-4">
          <h4 className="font-semibold">Cloud Native</h4>
          <p className="text-blue-100 text-sm mt-2">
            AWS • Next.js • PostgreSQL
          </p>
        </div>

        <div className="rounded-xl bg-white/10 p-4">
          <h4 className="font-semibold">AI Powered</h4>
          <p className="text-blue-100 text-sm mt-2">
            Python • Bedrock • Textract
          </p>
        </div>

        <div className="rounded-xl bg-white/10 p-4">
          <h4 className="font-semibold">Multi-Tenant</h4>
          <p className="text-blue-100 text-sm mt-2">
            Enterprise SaaS Architecture
          </p>
        </div>

        <div className="rounded-xl bg-white/10 p-4">
          <h4 className="font-semibold">Secure by Design</h4>
          <p className="text-blue-100 text-sm mt-2">
            Zero Trust • RBAC • MFA
          </p>
        </div>

      </div>

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
            <div className="text-5xl font-bold text-blue-400">10+</div>
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