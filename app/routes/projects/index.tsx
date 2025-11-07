import { useState } from "react";
import type { Route } from "./+types/index";
import type { Project } from "~/types";
import ProjectCard from "../components/ProjectCard";

// Server-side data fetching
export async function loader({ request }: Route.LoaderArgs): Promise<{ projects: Project[] }> {
    const res = await fetch('http://localhost:8000/projects');
    const data = await res.json();

    return { projects: data };
}

// Component to be rendered on the page
const ProjectsPage = ({ loaderData }: Route.ComponentProps) => {
    const { projects } = loaderData as { projects: Project[] };

    const [currentPage, setCurrentPage] = useState(1);
    const projectsPerPage = 2;

    // Calculate total pages (round up)
    const totalPages = Math.ceil(projects.length / projectsPerPage);

    // Get current pages projects
    

    return (
        <>
            <h2 className="text-3xl text-black font-bold mb-8">
                🚀 Projects
            </h2>

            <div className="grid gap-6 sm:grid-cols-2">
                {projects.map((project) => (
                    <ProjectCard key={project.id} project={project}/>
                ))}
            </div>
        </>
    );
}

export default ProjectsPage;