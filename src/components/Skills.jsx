import SectionHeader from './SectionHeader.jsx';
import { skillGroups } from '../data/content.js';

const swatchColors = ['bg-accent', 'bg-accentDark', 'bg-secondary', 'bg-ink'];

export default function Skills() {
  return (
    <section id="skills" className="border-b border-hairline py-16">
      <div className="mx-auto max-w-wrap px-7">
        <SectionHeader tag="04" title="Skills & Tools" />

        <div className="grid grid-cols-1 border border-hairline sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, i) => (
            <div key={group.title} className="border-b border-r border-hairline px-6 py-5">
              <div className="mb-2.5 flex items-center gap-2.5">
                <span className={`h-2.5 w-2.5 flex-shrink-0 rounded-sm ${swatchColors[i % swatchColors.length]}`} />
                <h3 className="font-mono text-xs font-medium uppercase tracking-wide">{group.title}</h3>
              </div>
              <ul className="text-[14.5px] text-secondary">
                {group.items.map((item) => (
                  <li key={item} className="py-0.5">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
