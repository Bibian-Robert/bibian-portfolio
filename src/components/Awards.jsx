import SectionHeader from './SectionHeader.jsx';
import { awards } from '../data/content.js';

export default function Awards() {
  const featured = awards.find((a) => a.image);
  const cardAwards = awards.filter((a) => a.images);
  const rest = awards.filter((a) => a !== featured && !a.images);

  return (
    <section id="awards" className="border-b border-hairline py-16">
      <div className="mx-auto max-w-wrap px-7">
        <SectionHeader title="Awards & Recognition" />

        {featured && (
          <div className="mb-9 grid grid-cols-1 overflow-hidden border border-hairline bg-surface md:grid-cols-[1.1fr_1fr]">
            <div className="relative h-64 md:h-full">
              <img
                src={`${import.meta.env.BASE_URL}${featured.image}`}
                alt={featured.text}
                className="h-full w-full object-cover"
              />
              {featured.imageCredit && (
                <span className="absolute bottom-1.5 right-2 rounded-sm bg-ink/60 px-1.5 py-0.5 font-mono text-[9.5px] text-paper">
                  Photo: {featured.imageCredit}
                </span>
              )}
            </div>
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

        {cardAwards.length > 0 && (
          <div className="mb-9 grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {cardAwards.map((award, i) => (
              <div key={i} className="flex flex-col overflow-hidden border border-hairline bg-surface">
                <div className="grid grid-cols-2 gap-px bg-hairline">
                  {award.images.map((img, imgIndex) => (
                    <div key={img} className="relative">
                      <img
                        src={`${import.meta.env.BASE_URL}${img}`}
                        alt={award.text}
                        className="aspect-square w-full object-cover"
                      />
                      {award.imageCredits?.[imgIndex] && (
                        <span className="absolute bottom-1 right-1 rounded-sm bg-ink/60 px-1 py-0.5 font-mono text-[8.5px] text-paper">
                          Photo: {award.imageCredits[imgIndex]}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
                <div className="flex flex-1 flex-col gap-2 px-5 py-5">
                  <span className="font-mono text-xs uppercase tracking-wide text-accentDark">{award.year}</span>
                  <p className="text-[14.5px] leading-relaxed">{award.text}</p>
                </div>
              </div>
            ))}
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
