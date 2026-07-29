import SectionHeader from './SectionHeader.jsx';
import { publications } from '../data/content.js';

export default function Publications() {
  return (
    <section id="publications" className="border-b border-hairline py-16">
      <div className="mx-auto max-w-wrap px-7">
        <SectionHeader tag="06" title="Publications" />

        <ul>
          {publications.map((pub, i) => (
            <li
              key={i}
              className="grid grid-cols-[60px_1fr] gap-4 border-b border-hairline py-4 first:pt-0 last:border-none"
            >
              <span className="font-mono text-[13px] font-medium text-accentDark">{pub.year}</span>
              <div>
                {pub.url ? (
                  <a href={pub.url} className="mb-1 block text-[15px] font-semibold leading-snug hover:text-accent">
                    {pub.title}
                  </a>
                ) : (
                  <p className="mb-1 text-[15px] font-semibold leading-snug">{pub.title}</p>
                )}
                <p className="text-[13.5px] text-secondary">{pub.venue}</p>
              </div>
            </li>
          ))}
        </ul>

        <p className="mt-4.5 font-mono text-[13px] italic text-accent">
          Add your article links in <code>src/data/content.js</code> — set the <code>url</code> field on
          each publication once you have your DOI links handy.
        </p>
      </div>
    </section>
  );
}
