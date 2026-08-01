import SectionHeader from './SectionHeader.jsx';
import { about } from '../data/content.js';

export default function About() {
  return (
    <section id="about" className="border-b border-hairline py-16">
      <div className="mx-auto max-w-wrap px-7">
        <SectionHeader tag="01" title="About" />

        <div className="grid grid-cols-1 items-start gap-12 md:grid-cols-[1.4fr_1fr]">
          <div>
            {about.paragraphs.map((p, i) => (
              <p key={i} className="mb-4 max-w-[60ch] text-justify last:mb-0">
                {p}
              </p>
            ))}
          </div>

          <dl className="border border-hairline bg-surface px-6 py-5 font-mono text-[13px]">
            {about.facts.map((fact, i) => (
              <div key={fact.label} className={i > 0 ? 'mt-3.5' : ''}>
                <dt className="text-[11px] uppercase tracking-wide text-accentDark">{fact.label}</dt>
                <dd className="mt-0.5 text-ink">{fact.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
