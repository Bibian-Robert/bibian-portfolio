import SectionHeader from './SectionHeader.jsx';
import { experience } from '../data/content.js';

export default function Experience() {
  return (
    <section id="experience" className="border-b border-hairline py-16">
      <div className="mx-auto max-w-wrap px-7">
        <SectionHeader tag="05" title="Experience" />

        <div className="relative pl-7">
          <div
            className="absolute bottom-1.5 left-[5px] top-1.5 w-px"
            style={{
              background:
                'repeating-linear-gradient(to bottom, rgba(46,46,46,0.12) 0 6px, transparent 6px 11px)',
            }}
          />

          {experience.map((role, i) => (
            <div key={i} className="relative mb-11 last:mb-0">
              <span className="absolute -left-7 top-1.5 h-2.5 w-2.5 rounded-full border-2 border-paper bg-accentDark shadow-[0_0_0_1px_theme(colors.accentDark)]" />
              <p className="mb-0.5 font-display text-lg font-semibold">{role.role}</p>
              <p className="mb-1 text-sm font-medium text-accent">{role.org}</p>
              <p className="mb-3.5 font-mono text-xs text-secondary">{role.meta}</p>
              <ul className="list-disc space-y-1.5 pl-[18px] text-[14.5px]">
                {role.highlights.map((h, j) => (
                  <li key={j}>{h}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
