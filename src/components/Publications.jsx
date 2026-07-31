import SectionHeader from './SectionHeader.jsx';
import { publications } from '../data/content.js';
 
const YOUR_NAME = 'Robert BN';
 
function AuthorList({ authors }) {
  const parts = authors.split(YOUR_NAME);
  return (
    <>
      {parts.map((part, i) => (
        <span key={i}>
          {part}
          {i < parts.length - 1 && <strong className="font-semibold text-accentDark">{YOUR_NAME}</strong>}
        </span>
      ))}
    </>
  );
}
 
export default function Publications() {
  return (
    <section id="publications" className="border-b border-hairline py-16">
      <div className="mx-auto max-w-wrap px-7">
        <SectionHeader tag="06" title="Peer-Reviewed Publications" />
 
        <ol>
          {publications.map((pub, i) => (
            <li
              key={i}
              className="grid grid-cols-[28px_1fr] gap-3 border-b border-hairline py-4 first:pt-0 last:border-none"
            >
              <span className="font-mono text-[13px] text-accentDark">{i + 1}.</span>
              <p className="text-[14.5px] leading-relaxed text-secondary">
                <AuthorList authors={pub.authors} /> ({pub.year}).{' '}
                <span className="font-semibold text-ink">{pub.title}</span>
                . <em>{pub.journal}</em>.
                {pub.url && (
                  <>
                    {' '}
                    <a
                      href={pub.url}
                      className="font-mono text-[12.5px] text-accentDark hover:text-ink hover:underline"
                    >
                      View article →
                    </a>
                  </>
                )}
              </p>
            </li>
          ))}
        </ol>
 
        {/* <p className="mt-4.5 font-mono text-[13px] italic text-accent">
          Add your article links in <code>src/data/content.js</code> — set the <code>url</code> field on
          each publication once you have your DOI links handy.
        </p> */}
      </div>
    </section>
  );
}