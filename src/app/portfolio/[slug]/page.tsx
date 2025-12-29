import { projects } from "@/lib/projects";
import { notFound } from "next/navigation";
import Image from "next/image";

// Added 'async' to the function
export default async function CaseStudyPage({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}) {
  // 1. Await the params promise (This fixes the Next.js 15 error)
  const resolvedParams = await params;
  const slug = resolvedParams.slug;

  // 2. Find the project using the unwrapped slug
  const project = projects.find((p) => p.slug === slug);

  if (!project) notFound();

  return (
    <article className="mx-auto min-h-screen max-w-4xl px-6 py-24">
      <h1 className="mb-6 text-4xl font-bold text-slate-900">{project.title}</h1>
      
      <div className="relative mb-12 h-[400px] w-full overflow-hidden rounded-3xl border shadow-xl">
        <Image 
          src={project.image} 
          alt={project.title} 
          fill 
          className="object-cover"
          priority // Added priority since this is the main image
        />
      </div>

      <div className="mb-8 flex flex-wrap gap-2">
        {project.tags.map(tag => (
          <span key={tag} className="rounded-full bg-blue-50 px-3 py-1 text-xs font-bold tracking-wider text-blue-700 uppercase">
            {tag}
          </span>
        ))}
      </div>

      <div className="prose prose-lg prose-slate max-w-none">
        <p className="text-xl leading-relaxed whitespace-pre-wrap text-slate-700">
          {project.content}
        </p>
      </div>
    </article>
  );
}