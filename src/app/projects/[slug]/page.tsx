import { notFound } from "next/navigation";
import Image from "next/image";
import { getProject, allSlugs } from "@/lib/projects";

export async function generateStaticParams() {
  return allSlugs().map((slug) => ({ slug }));
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = getProject(params.slug);
  if (!project) return notFound();

  return (
    <main className="px-4 py-16 md:px-8">
      <div className="mx-auto max-w-4xl">
        <h1 className="text-4xl font-extrabold">{project.title}</h1>
        <p className="mt-3 text-white/70">{project.summary}</p>

        <div className="mt-8 overflow-hidden rounded-2xl border border-white/10">
          <Image
            src={project.image}
            alt={project.title}
            width={1600}
            height={900}
            className="h-auto w-full object-cover"
            priority
          />
        </div>

        {!!project.tech?.length && (
          <div className="mt-6 flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <span
                key={t}
                className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-sm text-white/80"
              >
                {t}
              </span>
            ))}
          </div>
        )}

        {project.body && (
          <div className="prose prose-invert mt-8 max-w-none">
            <p>{project.body}</p>
          </div>
        )}

        <div className="mt-8 flex gap-3">
          {project.repo && (
            <a className="btn-ghost" href={project.repo} target="_blank" rel="noreferrer">
              View Repo
            </a>
          )}
          {project.live && (
            <a className="btn-primary" href={project.live} target="_blank" rel="noreferrer">
              Live Demo
            </a>
          )}
        </div>
      </div>
    </main>
  );
}
