import SectionHeader from './SectionHeader.jsx';
import { projects } from '../data/content.js';

function ProjectCard({ project }) {
  return (
    <div className="flex flex-col overflow-hidden border border-hairline bg-surface">
      <div className="relative flex aspect-[16/10] items-center justify-center border-b border-hairline bg-[repeating-linear-gradient(45deg,#F9F8F5,#F9F8F5_10px,#EFE8DF_10px,#EFE8DF_20px)] p-4 text-center font-mono text-xs text-secondary">
        {project.image ? (
          <img src={project.image} alt={project.title} className="h-full w-full object-cover" />
        ) : (
          <span>Add image: {`/images/${project.title.toLowerCase().replace(/\s+/g, '-')}.jpg`}</span>
        )}
      </div>

      <div className="flex flex-1 flex-col gap-2.5 px-5 py-5">
        <p className="font-display text-lg font-semibold">{project.title}</p>
        <p className="flex-1 text-sm text-secondary">{project.description}</p>

        <div className="mb-1 mt-0.5 flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-sm border border-hairline bg-paper px-1.5 py-0.5 font-mono text-[10.5px] uppercase tracking-wide text-accentDark"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-1 flex gap-4">
          <a
            href={project.repoUrl}
            className="border-b border-hairline pb-0.5 font-mono text-xs text-ink hover:border-accent hover:text-accent"
          >
            Repository →
          </a>
          {project.liveUrl && project.liveUrl !== '#' && (
            <a
              href={project.liveUrl}
              className="border-b border-hairline pb-0.5 font-mono text-xs text-ink hover:border-accent hover:text-accent"
            >
              Live demo →
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="border-b border-hairline py-16">
      <div className="mx-auto max-w-wrap px-7">
        <SectionHeader tag="02" title="Projects" />

        <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>

        <p className="mt-5 font-mono text-[13px] italic text-accent">
          To add a project: open <code>src/data/content.js</code> and add a new object to the{' '}
          <code>projects</code> array — image, description, tags, and links all live there.
        </p>
      </div>
    </section>
  );
}
