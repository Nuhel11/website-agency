import Image from "next/image";
import Link from "next/link"; // 1. Added Link import
import { projects } from "@/lib/projects";
import { Button } from "@/components/ui/button";

export default function Portfolio() {
  return (
    <section id="portfolio" className="scroll-mt-20 bg-slate-50/50 px-6 py-24">
      <div className="container mx-auto">
        <div className="mb-12 flex flex-col items-end justify-between gap-4 md:flex-row">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">Recent Work</h2>
            <p className="mt-2 text-slate-600">Selected projects that showcase our expertise.</p>
          </div>
          <Button variant="outline">View All Projects</Button>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div key={index} className="group relative overflow-hidden rounded-xl border bg-background shadow-sm transition-all hover:shadow-md">
              <div className="relative aspect-video overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              
              <div className="p-6">
                <div className="mb-3 flex gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="rounded bg-slate-100 px-2 py-1 text-[10px] font-semibold tracking-wider uppercase">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="mb-2 text-xl font-semibold">{project.title}</h3>
                <p className="mb-4 text-sm text-slate-600">{project.description}</p>
                
                {/* 2. REPLACED BUTTON WITH THIS LINK */}
                <Link 
                  href={`/portfolio/${project.slug}`} 
                  className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 transition-colors hover:text-blue-800"
                >
                  View Case Study <span className="text-lg">→</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}