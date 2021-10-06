import React from "react";

function ProjectCard({ project }) {
  return (
      <div className="project-card">
        { project.images.length === 0
          ? ''
          : <img src={project.images[0].resolutions.desktop.url} alt={project.displayName} />
        }
      <div className="project-card--info">
        <h3>{project.displayName}</h3>
        <p>{project.summary}</p>
        <p>
        Techs:{" "}
        { project.languages.join(' | ') }
        </p>
      </div>
      <div className="project-card--links">
        <a href={project.website}>ver projeto</a>
        <hr />
        <a href={project.repositoryUrl}>ver repositório</a>
      </div>
      </div>
  );
}

export default ProjectCard;
