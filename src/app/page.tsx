import Image from "next/image";
import Header from "@/components/Header";
import ContactForm from "@/components/ContactForm";
import { images } from "@/lib/images";

export default function HomePage() {
  return (
    <>
      <Header />
      <main id="main">
        {/* Hero */}
        <section id="home" className="relative flex min-h-dvh items-center justify-center overflow-hidden px-6 pb-16 pt-[calc(72px+3rem)]">
          <div className="absolute inset-0 z-0">
            <Image src={images.hero.src} alt={images.hero.alt} fill priority className="object-cover" sizes="100vw" />
            <div className="absolute inset-0" style={{ background: "linear-gradient(180deg,rgba(11,18,32,0.55) 0%,rgba(11,18,32,0.45) 40%,rgba(11,18,32,0.65) 100%)" }} />
          </div>
          <div className="relative z-10 mx-auto max-w-[820px] text-center">
            <div className="mb-6">
              <span className="inline-block rounded-full border border-white/25 bg-white/12 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-white backdrop-blur-sm">
                Technology • Energy • Possibility
              </span>
            </div>
            <h1 className="mb-4 text-4xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-5xl md:text-[4.25rem]">
              Engineering the<br />
              <span className="hero-highlight">Intelligence of Energy</span>
            </h1>
            <p className="mb-4 text-lg font-medium text-white/95 sm:text-xl">Technology and Energy Solutions Built for Africa</p>
            <p className="mx-auto mb-8 max-w-[640px] text-base leading-relaxed text-white/80">
              Helum Limited connects innovative technology, reliable energy and productive solutions to help businesses, households, institutions and enterprises overcome real-world energy challenges.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="#services" className="inline-flex items-center justify-center rounded-full bg-[#e8a317] px-7 py-3.5 text-base font-semibold text-[#0b1220] transition hover:bg-[#d4920f]">Explore Our Solutions</a>
              <a href="#contact" className="inline-flex items-center justify-center rounded-full border-2 border-white/60 bg-transparent px-7 py-3.5 text-base font-semibold text-white transition hover:border-white hover:bg-white/10">Talk to Helum</a>
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="bg-white py-20">
          <div className="mx-auto max-w-[1200px] px-6">
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-[#e8a317]">About Helum</p>
            <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-[#1a1f2e] md:text-4xl">Technology. Energy. Possibility.</h2>
            <p className="mb-12 text-xl font-medium text-[#5a6478]">Building Practical Solutions for a Sustainable Africa</p>
            <div className="grid items-start gap-12 lg:grid-cols-[1.1fr_0.9fr]">
              <div>
                <p className="mb-5 text-lg font-medium leading-relaxed text-[#1a1f2e]">
                  HELUM LIMITED is a Kenyan technology and renewable-energy company focused on developing, sourcing and delivering innovative solutions that address real-world energy and productivity challenges.
                </p>
                <p className="mb-5 text-[#5a6478]">We believe Africa's future will be shaped by companies that can effectively connect technology, reliable energy, business opportunity and customer value.</p>
                <p className="mb-5 text-[#5a6478]">Helum combines local market knowledge with strategic international partnerships and access to innovative technologies.</p>
                <p className="mb-8 text-[#5a6478]">We focus on understanding customer problems — energy access, power reliability, productive use of energy, business efficiency, agricultural productivity, water access and technology adoption — and applying technology to address them.</p>
                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="rounded-lg border border-[#e5e8ef] bg-[#f7f8fa] p-6">
                    <h3 className="mb-3 text-sm font-bold uppercase tracking-wider text-[#e8a317]">Vision</h3>
                    <p className="text-sm text-[#5a6478]">To become a leading African technology and energy solutions company, transforming how people and businesses access, use and benefit from technology and sustainable energy.</p>
                  </div>
                  <div className="rounded-lg border border-[#e5e8ef] bg-[#f7f8fa] p-6">
                    <h3 className="mb-3 text-sm font-bold uppercase tracking-wider text-[#e8a317]">Mission</h3>
                    <p className="text-sm text-[#5a6478]">To connect innovative technology, reliable energy and entrepreneurial opportunity to create practical solutions that improve lives, strengthen businesses and accelerate sustainable development.</p>
                  </div>
                </div>
              </div>
              <div className="relative overflow-hidden rounded-lg shadow-lg">
                <Image src={images.about.src} alt={images.about.alt} width={800} height={1000} className="h-auto min-h-[320px] w-full object-cover lg:min-h-[480px]" />
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section id="services" className="bg-[#f7f8fa] py-20">
          <div className="mx-auto max-w-[1200px] px-6">
            <div className="mb-12 text-center">
              <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-[#e8a317]">What We Do</p>
              <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-[#1a1f2e] md:text-4xl">Integrated Technology & Energy Solutions</h2>
              <p className="mx-auto max-w-[640px] text-[#5a6478]">From reliable power and energy access to productive-use technologies, Helum develops and delivers practical solutions designed around real customer needs.</p>
            </div>
            <div className="grid gap-8 md:grid-cols-2">
              {[
                { num: "01", title: "Renewable Energy Solutions", desc: "Solar power systems, battery energy storage, backup power, solar-powered productive equipment and energy solutions for businesses and institutions.", img: images.serviceRenewable },
                { num: "02", title: "Energy & Power Technology", desc: "Technologies designed to make electricity more reliable, accessible and productive.", img: images.serviceEnergyTech },
                { num: "03", title: "Productive-Use Technology", desc: "Technology that converts reliable energy into economic productivity — agriculture, water pumping, processing, SMEs and rural enterprises.", img: images.serviceProductive },
                { num: "04", title: "Strategic Technology Partnerships", desc: "Helum works with manufacturers, technology companies, investors and development partners to bring quality technologies into African markets.", img: images.servicePartnerships },
              ].map((s) => (
                <article key={s.num} className="service-card overflow-hidden rounded-lg border border-[#e5e8ef] bg-white transition">
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image src={s.img.src} alt={s.img.alt} fill className="service-img object-cover transition duration-500" sizes="(max-width:768px) 100vw, 50vw" />
                    <span className="absolute left-4 top-4 rounded bg-[#e8a317] px-2.5 py-1 text-sm font-bold text-[#0b1220]">{s.num}</span>
                  </div>
                  <div className="p-6">
                    <h3 className="mb-3 text-xl font-bold text-[#1a1f2e]">{s.title}</h3>
                    <p className="mb-4 text-sm text-[#5a6478]">{s.desc}</p>
                    <a href="#contact" className="inline-flex items-center gap-2 text-sm font-semibold text-[#1a1f2e] transition hover:text-[#e8a317]">Learn more →</a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Solutions */}
        <section id="solutions" className="bg-white py-20">
          <div className="mx-auto max-w-[1200px] px-6">
            <div className="mb-12 text-center">
              <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-[#e8a317]">Solutions</p>
              <h2 className="text-3xl font-extrabold tracking-tight text-[#1a1f2e] md:text-4xl">Technology Designed for Real-World Impact</h2>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {["Solar Power Systems", "Battery Energy Storage", "Backup Power", "Solar-Powered Productive Equipment", "Intelligent Energy Systems", "Off-Grid & Decentralized Energy"].map((title) => (
                <article key={title} className="rounded-lg border border-[#e5e8ef] bg-[#f7f8fa] p-6 transition hover:border-[#e8a317]">
                  <h3 className="mb-3 text-[1.0625rem] font-bold text-[#1a1f2e]">{title}</h3>
                  <p className="text-sm text-[#5a6478]">Reliable solutions designed around customer energy requirements and real operating conditions.</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Why + Values simplified */}
        <section id="why" className="bg-[#f7f8fa] py-20">
          <div className="mx-auto max-w-[1200px] px-6">
            <div className="mb-12 text-center">
              <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-[#e8a317]">Why Helum</p>
              <h2 className="text-3xl font-extrabold tracking-tight text-[#1a1f2e] md:text-4xl">Why Helum</h2>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[
                ["African Market Understanding", "We understand the realities and opportunities of African markets."],
                ["Technology With Commercial Purpose", "We focus on technologies that solve real problems and create measurable value."],
                ["Local Insight + Global Technology", "We combine local knowledge with access to innovative technologies and international partnerships."],
                ["Beyond Selling Products", "We focus on customer challenges and develop solutions around their needs."],
                ["Built for Scale", "We seek solutions that can grow with customers, businesses and markets."],
                ["Long-Term Impact", "We aim to create lasting improvements in energy access, productivity and economic opportunity."],
              ].map(([title, desc]) => (
                <article key={title} className="rounded-lg border border-[#e5e8ef] bg-white p-6 text-center">
                  <h3 className="mb-3 font-bold text-[#1a1f2e]">{title}</h3>
                  <p className="text-sm text-[#5a6478]">{desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section id="process" className="bg-white py-20">
          <div className="mx-auto max-w-[1200px] px-6">
            <div className="mb-12 text-center">
              <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-[#e8a317]">How We Work</p>
              <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-[#1a1f2e] md:text-4xl">From Challenge to Solution</h2>
              <p className="mx-auto max-w-[640px] text-[#5a6478]">We begin with the customer's challenge and work through a structured process to deliver practical, reliable and scalable solutions.</p>
            </div>
            <div className="grid gap-4 md:grid-cols-5">
              {[
                ["01", "Understand", "Understand the customer\u2019s needs, environment and challenges."],
                ["02", "Assess", "Assess energy requirements, operating conditions and opportunities."],
                ["03", "Design", "Develop a technology and energy solution suited to requirements."],
                ["04", "Deliver", "Source, supply, install, commission and implement."],
                ["05", "Support", "Provide maintenance, support and long-term optimization."],
              ].map(([num, title, body]) => (
                <article key={num} className="rounded-lg border border-[#e5e8ef] bg-[#f7f8fa] p-5">
                  <span className="mb-2 block text-xs font-bold text-[#e8a317]">{num}</span>
                  <h3 className="mb-2 font-bold text-[#1a1f2e]">{title}</h3>
                  <p className="text-sm text-[#5a6478]">{body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Partnerships */}
        <section id="partnerships" className="bg-[#f7f8fa] py-20">
          <div className="mx-auto max-w-[900px] px-6 text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-[#e8a317]">Partnerships</p>
            <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-[#1a1f2e] md:text-4xl">Technology. Partnership. Scale.</h2>
            <p className="mb-10 text-[#5a6478]">Helum works with manufacturers, technology companies, investors and development partners locally and internationally to identify, adapt and deploy technologies suited to African markets.</p>
            <a href="#contact" className="inline-flex rounded-full bg-[#e8a317] px-7 py-3.5 text-base font-semibold text-[#0b1220] transition hover:bg-[#d4920f]">Partner With Helum</a>
          </div>
        </section>

        {/* Ambition */}
        <section className="bg-[#0b1220] py-24 text-center text-white">
          <div className="mx-auto max-w-[640px] px-6">
            <h2 className="mb-8 text-3xl font-extrabold leading-tight md:text-5xl">Reliable Energy.<br />Smart Technology.<br />Real Economic Impact.</h2>
            <p className="text-lg text-white/75">Helum aims to become a recognized African brand for practical technology and energy solutions — powering homes, enabling farms, supporting SMEs and helping businesses overcome energy challenges.</p>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="bg-white py-20">
          <div className="mx-auto max-w-[1200px] px-6">
            <div className="grid items-start gap-12 lg:grid-cols-2">
              <div>
                <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-[#e8a317]">Get in Touch</p>
                <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-[#1a1f2e] md:text-4xl">Ready to Build a Smarter Energy Future?</h2>
                <p className="mb-8 text-[#5a6478]">Let's discuss how Helum can help you solve your energy and technology challenges with practical, reliable and scalable solutions.</p>
                <div className="mb-8 space-y-4">
                  <div><span className="block text-xs font-semibold uppercase tracking-wider text-[#8b95a8]">Phone</span><a href="tel:+254710125685" className="font-medium text-[#1a1f2e] hover:text-[#e8a317]">0710125685</a></div>
                  <div><span className="block text-xs font-semibold uppercase tracking-wider text-[#8b95a8]">Email</span><a href="mailto:helumlimited@gmail.com" className="font-medium text-[#1a1f2e] hover:text-[#e8a317]">helumlimited@gmail.com</a></div>
                  <div><span className="block text-xs font-semibold uppercase tracking-wider text-[#8b95a8]">Address</span><address className="not-italic font-medium text-[#1a1f2e]">P.O. Box 1017-00502<br />Darosa Plaza, Karen Road<br />Nairobi, Kenya</address></div>
                </div>
                <div className="flex flex-wrap gap-4">
                  <a href="tel:+254710125685" className="inline-flex rounded-full bg-[#e8a317] px-6 py-3 text-sm font-semibold text-[#0b1220] transition hover:bg-[#d4920f]">Talk to Helum</a>
                  <a href="#services" className="inline-flex rounded-full border-2 border-[#e5e8ef] px-6 py-3 text-sm font-semibold text-[#1a1f2e] transition hover:border-[#1a1f2e]">Explore Our Solutions</a>
                </div>
              </div>
              <div className="rounded-lg border border-[#e5e8ef] bg-[#f7f8fa] p-6 sm:p-8">
                <ContactForm />
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#0b1220] pt-16 text-white/80" role="contentinfo">
        <div className="mx-auto max-w-[1200px] px-6">
          <div className="grid gap-10 border-b border-white/10 pb-12 md:grid-cols-2 lg:grid-cols-4">
            <div>
              <span className="text-lg font-extrabold tracking-wide text-white">HELUM LIMITED</span>
              <p className="mt-4 text-sm font-medium text-[#e8a317]">Technology. Energy. Possibility.</p>
              <p className="mt-3 max-w-[280px] text-sm text-white/65">Connecting innovative technology, reliable energy and productive opportunity to create practical solutions for Africa.</p>
            </div>
            <div>
              <h4 className="mb-5 text-xs font-bold uppercase tracking-wider text-white">Quick Links</h4>
              <ul className="space-y-3 text-sm">
                {["About", "Services", "Solutions", "Process", "Partnerships", "Contact"].map((l) => (
                  <li key={l}><a href={`#${l.toLowerCase()}`} className="text-white/70 hover:text-[#e8a317]">{l}</a></li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="mb-5 text-xs font-bold uppercase tracking-wider text-white">Services</h4>
              <ul className="space-y-3 text-sm text-white/70">
                <li>Renewable Energy</li>
                <li>Energy & Power Technology</li>
                <li>Productive-Use Technology</li>
                <li>Strategic Partnerships</li>
              </ul>
            </div>
            <div>
              <h4 className="mb-5 text-xs font-bold uppercase tracking-wider text-white">Contact</h4>
              <ul className="space-y-3 text-sm">
                <li><a href="tel:+254710125685" className="text-white/70 hover:text-[#e8a317]">0710125685</a></li>
                <li><a href="mailto:helumlimited@gmail.com" className="text-white/70 hover:text-[#e8a317]">helumlimited@gmail.com</a></li>
                <li className="text-white/65">P.O. Box 1017-00502<br />Darosa Plaza, Karen Road<br />Nairobi, Kenya</li>
              </ul>
            </div>
          </div>
          <div className="py-6 text-center text-sm text-white/50">© 2026 HELUM LIMITED. All rights reserved.</div>
        </div>
      </footer>
    </>
  );
}
