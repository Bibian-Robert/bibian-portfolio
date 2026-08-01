import { useState } from 'react';

const links = [
  { href: '#top', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#awards', label: 'Awards' },
  // { href: '#skills', label: 'Skills' },
  { href: '#publications', label: 'Publications' },
  // { href: '#community', label: 'Community' },
  { href: '#contact', label: 'Contact' },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-hairline bg-paper/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-wrap items-center justify-between px-7 py-3.5">
        {/* <a href="#top" className="font-mono text-[13px] font-medium tracking-wide text-ink">
          BNR // GEOSPATIAL
        </a> */}

        {/* Desktop nav — always horizontal at md and above */}
        <ul className="hidden gap-6 font-mono text-xs uppercase tracking-wider md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="text-ink/75 hover:text-accentDark hover:opacity-100">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile menu button — hidden at md and above */}
        <button
          className="rounded-sm border border-ink px-2.5 py-1 font-mono text-xs text-ink md:hidden"
          aria-expanded={open}
          aria-controls="mobile-navlinks"
          onClick={() => setOpen((o) => !o)}
        >
          MENU
        </button>
      </div>

      {/* Mobile dropdown — only rendered below md, and only shown when open */}
      {open && (
        <ul
          id="mobile-navlinks"
          className="flex flex-col border-t border-hairline bg-paper md:hidden"
        >
          {links.map((link) => (
            <li key={link.href} className="border-b border-hairline">
              <a
                href={link.href}
                className="block px-7 py-3.5 font-mono text-xs uppercase tracking-wider text-ink/75 hover:text-accentDark"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
