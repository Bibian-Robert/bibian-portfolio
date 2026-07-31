import SectionHeader from './SectionHeader.jsx';
import { awards } from '../data/content.js';

export default function Awards() {
  const featured = awards.find((a) => a.image);
  const rest = awards.filter((a) => a !== featured);

  return (
    <section id="awards" className="border-b border-hairline py-16">
      <div className="mx-auto max-w-wrap px-7">
        <SectionHeader tag="03" title="Awards & Recognition" />

        {featured && (
          <div className="mb-9 grid grid-cols-1 overflow-hidden border border-hairline bg-surface md:grid-cols-[1.1fr_1fr]">
            <img
              src={`${import.meta.env.BASE_URL}${featured.image}`}
              alt={featured.text}
              className="h-64 w-full object-cover md:h-full"
            />
            <div className="flex flex-col justify-center gap-2.5 px-7 py-7">
              <span className="font-mono text-xs uppercase tracking-wide text-accentDark">{featured.year}</span>
              <p className="font-display text-xl font-semibold leading-snug">{featured.text}</p>
              {featured.tagline && (
                <p className="text-[14.5px] italic text-secondary">{featured.tagline}</p>
              )}
              {featured.url && (
                <a
                  href={featured.url}
                  className="mt-1 inline-block w-fit border-b border-hairline pb-0.5 font-mono text-xs text-accentDark hover:border-ink hover:text-ink"
                >
                  Read more →
                </a>
              )}
            </div>
          </div>
        )}

        <ul className="grid gap-3.5">
          {rest.map((award, i) => (
            <li
              key={i}
              className="flex gap-3.5 border-b border-dotted border-hairline pb-3.5 text-[14.5px] last:border-none last:pb-0"
            >
              <span className="flex-shrink-0 font-mono text-xs text-secondary">{award.year}</span>
              <span>{award.text}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
