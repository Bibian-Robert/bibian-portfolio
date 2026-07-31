import { useState } from 'react';
import { social } from '../data/content.js';

// Replace this with your own Formspree endpoint (see README for setup steps).
const FORM_ENDPOINT = 'https://formspree.io/f/xvzenbrn';

export default function Contact() {
  const [status, setStatus] = useState('idle'); // idle | sending | success | error

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus('sending');

    const form = e.target;
    const data = new FormData(form);

    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      });

      if (res.ok) {
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  }

  return (
    <section id="contact" className="bg-accentDark py-16 text-paper">
      <div className="mx-auto max-w-wrap px-7">
        <div className="mb-9 flex items-baseline gap-3.5">
          <span className="whitespace-nowrap rounded-sm bg-ink px-2 py-0.5 font-mono text-xs tracking-wide text-paper">
            08
          </span>
          <h2 className="font-display text-2xl font-semibold text-paper sm:text-3xl">Contact</h2>
        </div>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
          {/* Left column — intro + direct links */}
          <div>
            <p className="mb-8 max-w-[46ch] text-base text-surface">
              Open to geospatial advisory, decision-support analytics, and government-facing
              roles across Sub-Saharan Africa and beyond. Reach out directly, or send a
              message using the form.
            </p>

            <ul className="grid gap-4">
              {/* <li>
                <span className="mb-1 block font-mono text-[11px] uppercase tracking-wide text-paper/55">
                  Email
                </span>
                <a
                  href={`mailto:${social.email}`}
                  className="inline-block border-b border-paper/30 pb-1 font-mono text-[14.5px] text-accent hover:border-accent"
                >
                  {social.email}
                </a>
              </li> */}
              <li>
                <span className="mb-1 block font-mono text-[11px] uppercase tracking-wide text-paper/55">
                  LinkedIn
                </span>
                <a
                  href={social.linkedin}
                  aria-label="LinkedIn"
                  className="inline-flex items-center justify-center rounded-sm border border-paper/30 p-2 text-paper transition hover:border-accent hover:text-accent"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden="true">
                    <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.03-1.85-3.03-1.85 0-2.14 1.45-2.14 2.94v5.66H9.34V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13ZM7.12 20.45H3.56V9h3.56v11.45Z" />
                  </svg>
                </a>
              </li>
              {/* <li>
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
                  href={`${import.meta.env.BASE_URL}cv.pdf`}
                  className="inline-block border-b border-paper/30 pb-1 font-mono text-[14.5px] text-accent hover:border-accent"
                >
                  Download full CV (PDF)
                </a>
              </li> */}
            </ul>
          </div>

          {/* Right column — message form */}
          <form onSubmit={handleSubmit} className="grid gap-4 rounded-sm bg-paper p-7 text-ink shadow-xl">
            <div>
              <label htmlFor="name" className="mb-1 block font-mono text-[11px] uppercase tracking-wide text-secondary">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="w-full border border-hairline bg-transparent px-3 py-2.5 text-[14.5px] text-ink placeholder-secondary/60 focus:border-accentDark focus:outline-none"
                placeholder="Your name"
              />
            </div>

            <div>
              <label htmlFor="email" className="mb-1 block font-mono text-[11px] uppercase tracking-wide text-secondary">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="w-full border border-hairline bg-transparent px-3 py-2.5 text-[14.5px] text-ink placeholder-secondary/60 focus:border-accentDark focus:outline-none"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label htmlFor="message" className="mb-1 block font-mono text-[11px] uppercase tracking-wide text-secondary">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                className="w-full resize-none border border-hairline bg-transparent px-3 py-2.5 text-[14.5px] text-ink placeholder-secondary/60 focus:border-accentDark focus:outline-none"
                placeholder="What would you like to reach out about?"
              />
            </div>

            <button
              type="submit"
              disabled={status === 'sending'}
              className="mt-1 inline-flex items-center justify-center gap-2 bg-ink px-5 py-3 font-mono text-[13px] text-paper transition hover:bg-accentDark disabled:cursor-not-allowed disabled:opacity-60"
            >
              {status === 'sending' ? 'Sending…' : 'Send message'}
            </button>

            {status === 'success' && (
              <p className="font-mono text-[13px] text-accentDark">
                Thanks — your message has been sent. I'll get back to you soon.
              </p>
            )}
            {status === 'error' && (
              <p className="font-mono text-[13px] text-red-600">
                Something went wrong. Please try again, or email me directly.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
