import SectionHeader from './SectionHeader.jsx';
import { projects } from '../data/content.js';

function ProjectCard({ project, activeSkill }) {
  const isMatch = activeSkill ? project.tags.some((t) => activeSkill.match.includes(t)) : true;

  return (
    <div
      className={`flex flex-col overflow-hidden border bg-surface transition ${
        activeSkill
          ? isMatch
            ? 'border-accentDark shadow-lg'
            : 'border-hairline opacity-35'
          : 'border-hairline'
      }`}
    >
      <div className="relative flex aspect-[16/10] items-center justify-center overflow-hidden border-b border-hairline bg-[repeating-linear-gradient(45deg,#F9F8F5,#F9F8F5_10px,#EFE8DF_10px,#EFE8DF_20px)] text-center font-mono text-xs text-secondary">
        {project.image ? (
          project.imageUrl || project.articleUrl ? (
            <a href={project.imageUrl || project.articleUrl} className="block h-full w-full">
              <img
                src={`${import.meta.env.BASE_URL}${project.image}`}
                alt={project.title}
                className="h-full w-full object-cover object-top"
              />
            </a>
          ) : (
            <img
              src={`${import.meta.env.BASE_URL}${project.image}`}
              alt={project.title}
              className="h-full w-full object-cover"
            />
          )
        ) : (
          <span className="p-4">Add image: {`images/${project.title.toLowerCase().replace(/\s+/g, '-')}.jpg`}</span>
        )}
        {project.image && project.imageCredit && (
          <span className="absolute bottom-1.5 right-2 rounded-sm bg-ink/60 px-1.5 py-0.5 font-mono text-[9.5px] text-paper">
            Photo: {project.imageCredit}
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col gap-2.5 px-5 py-5">
        {project.theme && (
          <span className="font-mono text-[11px] uppercase tracking-wide text-accentDark">{project.theme}</span>
        )}
        <p className="font-display text-lg font-semibold">{project.title}</p>
        <p className="flex-1 text-sm text-secondary">{project.description}</p>

        <div className="mb-1 mt-0.5 flex flex-wrap gap-1.5">
          {project.tags.map((tag) => {
            const tagIsMatch = activeSkill?.match.includes(tag);
            return (
              <span
                key={tag}
                className={`rounded-sm border px-1.5 py-0.5 font-mono text-[10.5px] uppercase tracking-wide ${
                  tagIsMatch
                    ? 'border-accentDark bg-accentDark text-paper'
                    : 'border-hairline bg-paper text-accentDark'
                }`}
              >
                {tag}
              </span>
            );
          })}
        </div>

        <div className="mt-1 flex gap-4">
          {project.repoUrl && (
            <a
              href={project.repoUrl}
              className="border-b border-hairline pb-0.5 font-mono text-xs text-ink hover:border-accentDark hover:text-accentDark"
            >
              Repository →
            </a>
          )}
          {project.liveUrl && project.liveUrl !== '#' && (
            <a
              href={project.liveUrl}
              className="border-b border-hairline pb-0.5 font-mono text-xs text-ink hover:border-accentDark hover:text-accentDark"
            >
              {project.liveLabel || 'Live demo'} →
            </a>
          )}
          {project.articleUrl && (
            <a
              href={project.articleUrl}
              className="border-b border-hairline pb-0.5 font-mono text-xs text-ink hover:border-accentDark hover:text-accentDark"
            >
              View publication →
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default function Projects({ activeSkill, onClearSkill }) {
  return (
    <section id="projects" className="border-b border-hairline py-16">
      <div className="mx-auto max-w-wrap px-7">
        <SectionHeader title="Selected Projects" />

        {activeSkill && (
          <div className="mb-6 flex items-center gap-2.5 border border-accentDark bg-surface px-4 py-2.5 font-mono text-xs">
            <span className="text-ink">
              Showing projects using <strong className="text-accentDark">{activeSkill.label}</strong>
            </span>
            <button
              type="button"
              onClick={onClearSkill}
              className="ml-auto rounded-sm border border-hairline px-2 py-0.5 text-ink transition hover:border-accentDark hover:text-accentDark"
            >
              Clear ✕
            </button>
          </div>
        )}

        <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-4">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} activeSkill={activeSkill} />
          ))}
        </div>

        {/* <p className="mt-5 font-mono text-[13px] italic text-accent">
          To add a project: open <code>src/data/content.js</code> and add a new object to the{' '}
          <code>projects</code> array — image, description, tags, and links all live there.
        </p> */}
      </div>
    </section>
  );
}
