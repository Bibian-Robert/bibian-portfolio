import SectionHeader from './SectionHeader.jsx';
import { skillGroups } from '../data/content.js';

const swatchColors = ['bg-accent', 'bg-accentDark', 'bg-secondary', 'bg-ink'];

export default function Skills({ activeSkill, onSelectSkill }) {
  function handleClick(item) {
    if (!onSelectSkill) return;
    onSelectSkill((prev) => (prev?.label === item.label ? null : item));
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  return (
    <section id="skills" className="border-b border-hairline py-16">
      <div className="mx-auto max-w-wrap px-7">
        <SectionHeader title="Skills & Tools" />

        <p className="mb-7 font-mono text-[13px] italic text-secondary">
          Click a highlighted skill to see which projects put it to use.
        </p>

        <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, i) => (
            <div
              key={group.title}
              className="flex flex-col gap-3.5 border border-hairline bg-surface px-6 py-6 transition hover:-translate-y-0.5 hover:shadow-lg"
            >
              <div className="flex items-center gap-2.5">
                <span className={`h-2.5 w-2.5 flex-shrink-0 rounded-sm ${swatchColors[i % swatchColors.length]}`} />
                <h3 className="font-mono text-xs font-medium uppercase tracking-wide text-accentDark">
                  {group.title}
                </h3>
              </div>
              <ul className="flex flex-col gap-1.5 text-[14.5px] text-ink">
                {group.items.map((item) => {
                  const clickable = item.match && item.match.length > 0;
                  const isActive = activeSkill?.label === item.label;
                  return (
                    <li
                      key={item.label}
                      className="border-b border-dotted border-hairline pb-1.5 last:border-none last:pb-0"
                    >
                      {clickable ? (
                        <button
                          type="button"
                          onClick={() => handleClick(item)}
                          className={`text-left transition ${
                            isActive
                              ? 'font-semibold text-accentDark'
                              : 'text-ink hover:text-accentDark'
                          }`}
                        >
                          {item.label}
                          <span className="ml-1.5 text-accent">●</span>
                        </button>
                      ) : (
                        item.label
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
