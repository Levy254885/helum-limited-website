"use client";

import Image from "next/image";
import Link from "next/link";
import { images } from "@/lib/images";
import { about, services, values, vision, mission, whyHelum, investment } from "@/lib/content";
import { productCategories } from "@/lib/products";
import { partners } from "@/lib/partners";
import { Reveal, Stagger, StaggerItem } from "@/components/Motion";
import HeroCarousel from "@/components/HeroCarousel";

export default function HomePage() {
  return (
    <main>
      <HeroCarousel />
      <section className="bg-white py-24 sm:py-32">
        <div className="wrap grid items-center gap-16 lg:grid-cols-12">
          <Reveal className="lg:col-span-6">
            <p className="eyebrow mb-5">About Helum</p>
            <h2 className="mb-8 max-w-[14ch] font-display text-4xl font-semibold leading-tight text-[var(--color-ink)] sm:text-5xl">
              Technology. Energy. Possibility.
            </h2>
            <p className="mb-5 text-lg leading-relaxed text-[var(--color-ink)]">{about.lead}</p>
            <p className="mb-5 leading-relaxed text-[var(--color-muted)]">{about.belief}</p>
            <p className="mb-10 leading-relaxed text-[var(--color-muted)]">{about.beyond}</p>
            <Link href="/about" className="link-underline font-display text-sm font-semibold tracking-wide">
              Learn more about Helum →
            </Link>
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-6">
            <div className="img-zoom relative overflow-hidden">
              <Image
                src={images.about.src}
                alt={images.about.alt}
                width={900}
                height={720}
                className="h-[420px] w-full object-cover sm:h-[520px]"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-[var(--color-paper)] py-24 sm:py-32">
        <div className="wrap">
          <Reveal>
            <p className="eyebrow mb-5">Why energy matters</p>
            <h2 className="mb-6 max-w-[18ch] font-display text-4xl font-semibold text-[var(--color-ink)] sm:text-5xl">
              Light to study. Power to work. Water to grow.
            </h2>
            <p className="mb-14 max-w-xl leading-relaxed text-[var(--color-muted)]">
              Helum solutions are meant to be seen in real rooms, classrooms and farms — not only on a
              specification sheet.
            </p>
          </Reveal>
          <Stagger className="grid gap-6 md:grid-cols-3">
            {[
              {
                img: images.poultry,
                title: "Farms that stay productive",
                body: "Reliable power for livestock heat, irrigation and the hours a farm cannot afford to lose.",
              },
              {
                img: images.wallInstall,
                title: "Homes and sites that stay on",
                body: "Wall-mounted batteries and hybrid inverters keep essential circuits running when the grid drops.",
              },
              {
                img: images.farmPlot,
                title: "Land that generates as it grows",
                body: "Solar arrays over crops, homesteads and yards — energy designed around productive use.",
              },
            ].map((card) => (
              <StaggerItem key={card.title}>
                <article>
                  <div className="img-zoom relative mb-5 h-64 overflow-hidden">
                    <Image src={card.img.src} alt={card.img.alt} fill className="object-cover" sizes="33vw" />
                  </div>
                  <h3 className="mb-2 font-display text-xl font-semibold text-[var(--color-ink)]">
                    {card.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-[var(--color-muted)]">{card.body}</p>
                </article>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="bg-[var(--color-ink)] py-20 text-white">
        <div className="wrap grid gap-14 md:grid-cols-2">
          <Reveal>
            <p className="eyebrow mb-4">Vision</p>
            <p className="font-display text-2xl font-medium leading-snug sm:text-3xl">{vision}</p>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="eyebrow mb-4">Mission</p>
            <p className="font-display text-2xl font-medium leading-snug sm:text-3xl">{mission}</p>
          </Reveal>
        </div>
      </section>

      <section className="bg-white py-24 sm:py-32">
        <div className="wrap">
          <div className="mb-16 max-w-2xl">
            <Reveal>
              <p className="eyebrow mb-5">What we do</p>
              <h2 className="mb-5 font-display text-4xl font-semibold text-[var(--color-ink)] sm:text-5xl">
                Integrated technology & energy solutions
              </h2>
              <p className="leading-relaxed text-[var(--color-muted)]">
                Practical solutions designed around real customer needs—from power and energy access
                to productive-use technologies.
              </p>
            </Reveal>
          </div>
          <Stagger className="grid gap-6 md:grid-cols-2">
            {services.map((s) => (
              <StaggerItem key={s.slug}>
                <Link href={`/services/${s.slug}`} className="group block">
                  <div className="img-zoom relative mb-5 aspect-[16/9] overflow-hidden">
                    <Image
                      src={
                        s.slug === "renewable-energy"
                          ? images.renewable.src
                          : s.slug === "energy-power-technology"
                            ? images.energyTech.src
                            : s.slug === "productive-use"
                              ? images.productive.src
                              : images.partnerships.src
                      }
                      alt={s.title}
                      fill
                      className="object-cover"
                      sizes="(max-width:768px) 100vw, 50vw"
                    />
                    <span className="absolute left-0 top-0 bg-[var(--color-gold)] px-3 py-1 font-display text-xs font-bold text-[var(--color-ink)]">
                      {s.num}
                    </span>
                  </div>
                  <h3 className="mb-2 font-display text-2xl font-semibold text-[var(--color-ink)] transition-colors group-hover:text-[var(--color-gold)]">
                    {s.title}
                  </h3>
                  <p className="mb-4 max-w-md text-sm leading-relaxed text-[var(--color-muted)]">
                    {s.short}
                  </p>
                  <span className="font-display text-[0.72rem] font-semibold tracking-[0.12em] uppercase text-[var(--color-ink)]">
                    Explore →
                  </span>
                </Link>
              </StaggerItem>
            ))}
          </Stagger>
          <div className="mt-14">
            <Link href="/services" className="btn btn-line">
              View all services
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-ink)] py-24 sm:py-32 text-white">
        <div className="wrap">
          <div className="mb-14 max-w-2xl">
            <Reveal>
              <p className="eyebrow mb-5">Products</p>
              <h2 className="font-display text-4xl font-semibold sm:text-5xl">What we supply</h2>
              <p className="mt-5 leading-relaxed text-white/60">
                Inverters, lithium batteries, power stations, solar panels, solar water heaters and
                solar water pumps — specified as part of a designed system.
              </p>
            </Reveal>
          </div>
          <Stagger className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {productCategories.map((c) => (
              <StaggerItem key={c.slug}>
                <Link href={`/products/${c.slug}`} className="img-zoom group relative block min-h-[280px] overflow-hidden">
                  <Image
                    src={images[c.image].src}
                    alt={images[c.image].alt}
                    fill
                    className="object-cover"
                    sizes="(max-width:768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-ink)]/90 via-[var(--color-ink)]/20 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-6">
                    <h3 className="font-display text-2xl font-semibold">{c.title}</h3>
                    <p className="mt-2 text-sm text-white/65">{c.short}</p>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </Stagger>
          <div className="mt-12">
            <Link href="/products" className="btn btn-ghost">
              View all products
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-white py-24 sm:py-32">
        <div className="wrap">
          <div className="mb-14 flex flex-wrap items-end justify-between gap-6">
            <Reveal>
              <p className="eyebrow mb-5">Agriculture</p>
              <h2 className="max-w-[16ch] font-display text-4xl font-semibold text-[var(--color-ink)] sm:text-5xl">
                Power that grows food, livestock and income
              </h2>
            </Reveal>
            <Link href="/solutions/agriculture" className="link-underline font-display text-sm font-semibold">
              Agriculture solutions →
            </Link>
          </div>
          <Stagger className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { img: images.farmPlot, title: "Solar over crops" },
              { img: images.farmCanopy, title: "Homestead generation" },
              { img: images.poultry, title: "Poultry heat and light" },
              { img: images.piglets, title: "Livestock warmth" },
              { img: images.solarParking, title: "Yard and carport arrays" },
              { img: images.lodgeArray, title: "Commercial farm sites" },
            ].map((card) => (
              <StaggerItem key={card.title}>
                <Link href="/solutions/agriculture" className="img-zoom group relative block min-h-[240px] overflow-hidden">
                  <Image src={card.img.src} alt={card.img.alt} fill className="object-cover" sizes="(max-width:768px) 100vw, 33vw" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-ink)]/80 to-transparent" />
                  <p className="absolute inset-x-0 bottom-0 p-5 font-display text-lg font-semibold text-white">
                    {card.title}
                  </p>
                </Link>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="wrap">
          <p className="eyebrow mb-10">Technology partners</p>
          <div className="grid grid-cols-2 gap-px bg-[var(--color-line)] sm:grid-cols-3 lg:grid-cols-5">
            {partners.map((p) => (
              <Link
                key={p.slug}
                href="/partnerships"
                className="bg-white px-4 py-8 text-center transition-colors hover:bg-[var(--color-paper)]"
              >
                <span className="block font-display text-sm font-semibold text-[var(--color-ink)]">
                  {p.name}
                </span>
                <span className="mt-2 block text-[0.7rem] text-[var(--color-muted)]">{p.role}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-paper)] py-24 sm:py-32">
        <div className="wrap">
          <div className="mb-14 max-w-2xl">
            <Reveal>
              <p className="eyebrow mb-5">Why Helum</p>
              <h2 className="font-display text-4xl font-semibold text-[var(--color-ink)] sm:text-5xl">
                Built around real problems
              </h2>
            </Reveal>
          </div>
          <Stagger className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {whyHelum.map((item, i) => (
              <StaggerItem key={item.title}>
                <p className="mb-4 font-display text-sm text-[var(--color-gold)]">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="mb-3 font-display text-xl font-semibold text-[var(--color-ink)]">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-[var(--color-muted)]">{item.body}</p>
              </StaggerItem>
            ))}
          </Stagger>
          <div className="mt-12">
            <Link href="/why-helum" className="link-underline font-display text-sm font-semibold">
              Why choose Helum →
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-white py-24 sm:py-32">
        <div className="wrap">
          <Reveal>
            <p className="eyebrow mb-5">Our values</p>
            <h2 className="mb-14 font-display text-4xl font-semibold text-[var(--color-ink)]">
              What drives us
            </h2>
          </Reveal>
          <Stagger className="grid gap-px bg-[var(--color-line)] sm:grid-cols-2 lg:grid-cols-3">
            {values.map((v) => (
              <StaggerItem key={v.num} className="bg-white">
                <article className="h-full p-8">
                  <span className="mb-4 block font-display text-xs tracking-[0.16em] text-[var(--color-gold)]">
                    {v.num}
                  </span>
                  <h3 className="mb-2 font-display text-xl font-semibold text-[var(--color-ink)]">
                    {v.title}
                  </h3>
                  <p className="text-sm text-[var(--color-muted)]">{v.body}</p>
                </article>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="relative overflow-hidden py-28 text-white">
        <div className="absolute inset-0">
          <Image src={images.opportunity.src} alt="" fill className="object-cover" sizes="100vw" />
          <div className="absolute inset-0 bg-[var(--color-ink)]/82" />
        </div>
        <div className="wrap relative z-10 max-w-3xl">
          <Reveal>
            <h2 className="mb-6 font-display text-4xl font-semibold leading-tight sm:text-5xl">
              {investment.ambitionTitle}
            </h2>
            <p className="mb-10 text-lg leading-relaxed text-white/70">{investment.ambition}</p>
            <div className="flex flex-wrap gap-4">
              <Link href="/opportunity" className="btn btn-gold">
                Explore the opportunity
              </Link>
              <Link href="/contact" className="btn btn-ghost">
                Talk to Helum
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
