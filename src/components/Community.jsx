import SectionHeader from './SectionHeader.jsx';
import { community } from '../data/content.js';

export default function Community() {
  return (
    <section id="community" className="border-b border-hairline py-16">
      <div className="mx-auto max-w-wrap px-7">
        <SectionHeader tag="07" title="Community & Capacity Building" />

        <ul className="grid gap-3.5">
          {community.map((item, i) => (
            <li
              key={i}
              className="flex gap-3.5 border-b border-dotted border-hairline pb-3.5 text-[14.5px] last:border-none last:pb-0"
            >
              {item.year && <span className="flex-shrink-0 font-mono text-xs text-secondary">{item.year}</span>}
              <span>{item.text}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
