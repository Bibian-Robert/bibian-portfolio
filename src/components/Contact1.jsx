import { social } from '../data/content.js';

export default function Contact() {
  return (
    <section id="contact" className="bg-ink py-16 text-paper">
      <div className="mx-auto max-w-wrap px-7">
        <div className="mb-9 flex items-baseline gap-3.5">
          <span className="whitespace-nowrap rounded-sm bg-accentDark px-2 py-0.5 font-mono text-xs tracking-wide text-paper">
            08
          </span>
          <h2 className="font-display text-2xl font-semibold text-paper sm:text-3xl">Contact</h2>
        </div>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
          <p className="max-w-[46ch] text-base text-surface">
            Open to geospatial advisory, decision-support analytics, and government-facing consulting
            roles across Sub-Saharan Africa and beyond.
          </p>

          <ul className="grid gap-4">
            <li>
              <span className="mb-1 block font-mono text-[11px] uppercase tracking-wide text-paper/55">
                Email
              </span>
              <a
                href={`mailto:${social.email}`}
                className="inline-block border-b border-paper/30 pb-1 font-mono text-[14.5px] text-accent hover:border-accent"
              >
                {social.email}
              </a>
            </li>
            <li>
              <span className="mb-1 block font-mono text-[11px] uppercase tracking-wide text-paper/55">
                LinkedIn
              </span>
              <a
                href={social.linkedin}
                className="inline-block border-b border-paper/30 pb-1 font-mono text-[14.5px] text-accent hover:border-accent"
              >
                {social.linkedin.replace('https://', '')}
              </a>
            </li>
            <li>
              <span className="mb-1 block font-mono text-[11px] uppercase tracking-wide text-paper/55">
                GitHub
              </span>
              <a
                href={social.github}
                className="inline-block border-b border-paper/30 pb-1 font-mono text-[14.5px] text-accent hover:border-accent"
              >
                {social.github.replace('https://', '')}
              </a>
            </li>
            <li>
              <span className="mb-1 block font-mono text-[11px] uppercase tracking-wide text-paper/55">
                CV
              </span>
              <a
                href="/cv.pdf"
                className="inline-block border-b border-paper/30 pb-1 font-mono text-[14.5px] text-accent hover:border-accent"
              >
                Download full CV (PDF)
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
