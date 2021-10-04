import React from 'react';

function ProjectCard({ project }) {
    return (
        <div className="project-card">
            <img src={ project.images[0]} alt={ project.displayName } />
            <h3>{ project.displayName }</h3>
            <p>{ project.summary }</p>
            <p>Techs: { project.languages.map((lang) => <span>{ `${lang} ` }</span>) }</p>
            <a href={project.website}>VER PROJETO</a>
            <a href={ project.repositoryUrl }>VER REPOSITÓRIO NO GITHUB</a>
        </div>
    )
}

export default ProjectCard;
