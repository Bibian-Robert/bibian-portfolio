export default function SectionHeader({ tag, title }) {
  return (
    <div className="mb-9 flex items-baseline gap-3.5">
      <span className="whitespace-nowrap rounded-sm bg-accent px-2 py-0.5 font-mono text-xs tracking-wide text-paper">
        {tag}
      </span>
      <h2 className="font-display text-2xl font-semibold sm:text-3xl">{title}</h2>
    </div>
  );
}
