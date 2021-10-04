import React from 'react';

function ProjectCard({ project }) {
    return (
        <div className="project-card">
            <img src={ project.images[0]} alt={ project.displayName } />
            <div className="project-card--info">
                <h3>{ project.displayName }</h3>
                <p>{ project.summary }</p>
                <p>Techs: { project.languages.map((lang) => <span>{ `${lang} ` }</span>) }</p>
            </div>
            <div className="project-card--links">
                <a href={project.website}>VER PROJETO</a>
                <hr/>
                <a href={ project.repositoryUrl }>REPOSITÓRIO NO GITHUB</a>
            </div>
        </div>
    )
}

export default ProjectCard;
