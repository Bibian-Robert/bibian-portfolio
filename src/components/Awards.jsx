import SectionHeader from './SectionHeader.jsx';
import { awards } from '../data/content.js';

export default function Awards() {
  return (
    <section id="awards" className="border-b border-hairline py-16">
      <div className="mx-auto max-w-wrap px-7">
        <SectionHeader tag="03" title="Awards & Recognition" />

        <ul className="grid gap-3.5">
          {awards.map((award, i) => (
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
