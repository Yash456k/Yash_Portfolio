import React from "react";

interface Project {
  id: string;
  title: string;
  image: string;
  alt: string;
}

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => (
  <div
    className="h-full w-full flex items-center justify-center text-white cursor-pointer relative text-center rounded-lg shadow-lg overflow-hidden"
    data-swapy-item={project.id}
  >
    <img
      src={project.image}
      alt={project.alt}
      className="absolute inset-0 w-full h-full object-cover"
    />
    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <span className="font-bold text-xs sm:text-base">{project.title}</span>
    </div>
  </div>
);

export default ProjectCard;
