import { hero, social } from '../data/content.js';
 
export default function Hero() {
  return (
    <section id="top" className="border-b border-hairline py-24">
      <div className="mx-auto grid max-w-wrap grid-cols-1 items-center gap-14 px-7 text-center md:grid-cols-[1.5fr_1fr] md:text-left">
        <div className="order-2 md:order-1">
          <p className="mb-5 font-mono text-[13px] uppercase tracking-wider text-accent">
            {hero.eyebrow} <span className="text-accentDark">{hero.coords}</span>
          </p>
 
          <h1 className="mb-4 font-display text-4xl font-bold leading-[1.02] tracking-tight sm:text-5xl lg:text-6xl">
            {hero.name}
          </h1>
 
          <p className="mb-8 max-w-xl text-lg text-secondary sm:text-xl">
            {hero.tagline.map((part, i) =>
              typeof part === 'string' ? (
                <span key={i}>{part}</span>
              ) : (
                <strong key={i} className="font-semibold text-accentDark">
                  {part.emphasis}
                </strong>
              )
            )}
          </p>
 
          <div className="mb-6 flex flex-wrap justify-center gap-4 md:justify-start">
            <a
              href="#about"
              className="inline-flex items-center gap-2 rounded-sm bg-ink px-5 py-3 font-mono text-[13px] text-paper transition hover:bg-accent hover:-translate-y-px"
            >
              About Me →
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-sm border border-ink px-5 py-3 font-mono text-[13px] text-ink transition hover:bg-ink hover:text-paper"
            >
              Get in touch
            </a>
          </div>
 
          <nav aria-label="Social links" className="flex flex-wrap justify-center gap-3.5 md:justify-start">
            <a
              href={social.linkedin}
              className="rounded-sm border border-hairline px-3.5 py-1.5 font-mono text-xs text-ink transition hover:border-accent hover:text-accent"
            >
              LinkedIn
            </a>
            <a
              href={social.github}
              className="rounded-sm border border-hairline px-3.5 py-1.5 font-mono text-xs text-ink transition hover:border-accent hover:text-accent"
            >
              GitHub
            </a>
            <a
              href={`mailto:${social.email}`}
              className="rounded-sm border border-hairline px-3.5 py-1.5 font-mono text-xs text-ink transition hover:border-accent hover:text-accent"
            >
              Email
            </a>
          </nav>
        </div>
 
        <div className="order-1 mx-auto flex aspect-square w-full max-w-[280px] items-center justify-center overflow-hidden border border-hairline bg-surface md:order-2">
          <img src="/images/profile.jpg" alt="Bibian Nyaeru Robert" className="h-full w-full object-cover" />
        </div>
      </div>
    </section>
  );
}