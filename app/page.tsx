import Image from "next/image";

const services = [
  [
    "Cloud Consulting",
    "AWS architecture, cloud migration, DevOps, cost optimization, and infrastructure modernization."
  ],
  [
    "Cybersecurity Advisory",
    "Security assessments, governance, risk management, compliance readiness, and cloud security."
  ],
  [
    "SaaS & Application Development",
    "Design, develop, deploy, and scale secure SaaS platforms, web applications, dashboards, workflow automation, and custom business solutions."
  ],
  [
    "Technology Strategy & Delivery",
    "Executive advisory, project and program management, SDLC governance, vendor selection, and end-to-end solution delivery using Agile, Waterfall, and hybrid methodologies."
  ],
];

const industries = [
{
title: "Financial Services",
description:
"Supporting financial institutions with cybersecurity, risk management, cloud transformation, and technology modernization initiatives.",
},
{
title: "Insurance",
description:
"Helping insurers strengthen governance, information risk management, compliance, and digital transformation programs.",
},
{
title: "Government & Public Sector",
description:
"Delivering technology strategy, cybersecurity, cloud solutions, and program leadership for public sector organizations.",
},
{
title: "Manufacturing",
description:
"Improving operational efficiency through supply chain optimization, cloud solutions, and business process automation.",
},
{
title: "Healthcare",
description:
"Supporting healthcare organizations with security, privacy, compliance, and digital transformation initiatives.",
},
{
title: "Retail & Distribution",
description:
"Enhancing supply chain visibility, document management, workflow automation, and operational performance.",
},
];

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <header className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
        <Image src="/images/logo.png" alt="OttawaIT Logo" width={300} height={110} />

        <nav className="hidden gap-8 text-sm font-semibold text-slate-700 md:flex">
          <a href="#services">Services</a>
          <a href="#solutions">SaaS Solutions</a>
          <a href="#industries">Industries</a>
          <a href="#contact">Contact</a>
        </nav>

        <a
          href="mailto:info@ottawait.net?subject=OttawaIT Consultation Request"
          className="rounded-full bg-blue-700 px-5 py-2 text-sm font-semibold text-white"
        >
          Book Consultation
        </a>
      </header>

      <section className="mx-auto grid max-w-7xl items-center gap-16 px-6 py-20 md:grid-cols-2">
        <div>
          <p className="mb-4 font-semibold text-blue-700">
            Cloud • Cybersecurity • SaaS • Application Development
          </p>

          <h1 className="text-4xl font-bold leading-tight text-slate-950 md:text-6xl">
            Consulting, SaaS Solutions & Digital Transformation
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
            Helping organizations modernize cloud infrastructure, strengthen cybersecurity,
            build secure SaaS solutions, and deliver end-to-end technology initiatives.
          </p>

          <p className="mt-5 font-semibold text-slate-800">
            MBA • CISSP • CISM • PMP • ITIL • SAFe
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="mailto:info@ottawait.net?subject=OttawaIT Consultation Request"
              className="rounded-full bg-blue-700 px-6 py-3 font-semibold text-white"
            >
              Book a Consultation
            </a>
            <a
              href="#services"
              className="rounded-full border border-blue-700 px-6 py-3 font-semibold text-blue-700"
            >
              View Services
            </a>
          </div>
        </div>

        <div className="flex justify-center">
          <Image
            src="/images/piyush.png"
            alt="Piyush Agarwal"
            width={440}
            height={440}
            className="rounded-full shadow-2xl ring-8 ring-white"
            priority
          />
        </div>
      </section>

      <section className="bg-blue-950 px-6 py-12 text-white">
        <div className="mx-auto grid max-w-7xl gap-8 text-center md:grid-cols-4">
          <div>
            <p className="text-2xl font-bold">Cloud</p>
            <p className="text-sm text-blue-100">Architecture & migration</p>
          </div>
          <div>
            <p className="text-2xl font-bold">Security</p>
            <p className="text-sm text-blue-100">Governance & risk</p>
          </div>
          <div>
            <p className="text-2xl font-bold">SaaS</p>
            <p className="text-sm text-blue-100">Products & applications</p>
          </div>
          <div>
            <p className="text-2xl font-bold">Delivery</p>
            <p className="text-sm text-blue-100">Agile, Waterfall & Hybrid</p>
          </div>
        </div>
      </section>

      <section id="services" className="bg-slate-50 px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <p className="text-center font-semibold text-blue-700">Services</p>
          <h2 className="mt-2 text-center text-4xl font-bold text-slate-950">
            OttawaIT Advisory & Development Services
          </h2>

          <div className="mt-12 grid gap-6 md:grid-cols-4">
            {services.map(([title, text]) => (
              <div key={title} className="rounded-2xl bg-white p-7 shadow-sm ring-1 ring-slate-200">
                <h3 className="text-xl font-bold text-blue-800">{title}</h3>
                <p className="mt-4 leading-7 text-slate-600">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="solutions" className="px-6 py-16">
        <div className="mx-auto grid max-w-7xl items-center gap-10 rounded-3xl bg-blue-950 p-10 text-white md:grid-cols-2">
          <div>
            <p className="font-semibold text-blue-200">SaaS Solutions</p>
            <h2 className="mt-2 text-4xl font-bold">
              Building secure, scalable SaaS platforms
            </h2>
            <p className="mt-6 leading-8 text-blue-100">
              OttawaIT helps organizations design and build cloud-native SaaS products,
              internal business applications, workflow automation tools, dashboards,
              and AI-enabled digital solutions.
            </p>
          </div>

          <div className="rounded-2xl bg-white p-8 text-slate-900">
            <h3 className="text-2xl font-bold text-blue-800">SynexaOne</h3>
            <p className="mt-4 leading-7 text-slate-600">
              AI-powered business automation and productivity platform designed to
              streamline workflows, knowledge management, and operational efficiency.
            </p>
          </div>
        </div>
      </section>

      <section id="industries" className="bg-slate-50 px-6 py-14">
        <section id="industries" className="py-24 bg-white">
  <div className="max-w-7xl mx-auto px-6">
    <div className="text-center mb-16">
      <h2 className="text-4xl font-bold text-slate-900">
        Industries Served
      </h2>
      <p className="mt-4 text-lg text-slate-600 max-w-3xl mx-auto">
        OttawaIT partners with organizations across multiple industries to
        deliver technology strategy, cybersecurity, cloud transformation,
        program leadership, and SaaS solutions.
      </p>
    </div>

```
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
  {industries.map((industry) => (
    <div
      key={industry.title}
      className="bg-slate-50 rounded-xl p-8 border border-slate-200 hover:shadow-lg transition"
    >
      <h3 className="text-xl font-semibold text-slate-900 mb-3">
        {industry.title}
      </h3>
      <p className="text-slate-600">
        {industry.description}
      </p>
    </div>
  ))}
</div>
```

  </div>
</section>
      </section>

      <section id="contact" className="bg-blue-950 px-6 py-20 text-white">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold">
            Ready to discuss your technology goals?
          </h2>
          <p className="mt-4 text-blue-100">
            Contact OttawaIT for cloud, cybersecurity, SaaS development, and technology delivery support.
          </p>

          <div className="mt-8">
            <a
              href="mailto:info@ottawait.net?subject=OttawaIT Consultation Request"
              className="rounded-full bg-white px-8 py-3 font-semibold text-blue-900"
            >
              Contact OttawaIT
            </a>
          </div>

          <p className="mt-8 text-sm text-blue-200">
            1-30 Concourse Gate, Ottawa, ON, Canada
            {" • "}
            <a href="mailto:info@ottawait.net" className="underline hover:text-white">
              info@ottawait.net
            </a>
          </p>
        </div>
      </section>
    </main>
  );
}