export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-ink py-5 text-center font-mono text-[11.5px] tracking-wide text-paper/55">
      © {year} Bibian Robert.
    </footer>
  );
}
