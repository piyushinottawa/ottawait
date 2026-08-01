import Image from "next/image";
import Link from "next/link";

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <section className="mx-auto max-w-7xl px-6 py-16">
        <header className="mb-12">
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-700">
            OttawaIT Insights
          </p>

          <h1 className="mt-3 text-4xl font-bold text-slate-900 md:text-5xl">
            Blog
          </h1>

          <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-600">
            Insights on enterprise technology, cloud, cybersecurity, digital
            transformation and SynexaOne.
          </p>
        </header>

        <article className="max-w-xl overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          <Link href="/blog/synexaone-enterprise-architecture/">
            <Image
              src="/images/synexaone-marketing-architecture.png"
              alt="SynexaOne Enterprise Reference Architecture"
              width={1536}
              height={1024}
              className="h-64 w-full object-cover"
            />
          </Link>

          <div className="p-6">
            <p className="text-sm font-semibold uppercase tracking-wide text-blue-700">
              SynexaOne
            </p>

            <h2 className="mt-2 text-2xl font-bold text-slate-900">
              <Link href="/blog/synexaone-enterprise-architecture/">
                SynexaOne Enterprise Reference Architecture
              </Link>
            </h2>

            <p className="mt-4 leading-7 text-slate-600">
              Explore how SynexaOne connects supply chain management, CRM,
              document management, governance, risk, compliance, security and
              AI in one unified platform.
            </p>

            <Link
              href="/blog/synexaone-enterprise-architecture/"
              className="mt-6 inline-block font-semibold text-blue-700"
            >
              Read article →
            </Link>
          </div>
        </article>
      </section>
    </main>
  );
}
