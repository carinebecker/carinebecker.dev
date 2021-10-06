import React, { useEffect, useState } from "react";
import ProjectCard from "./ProjectCard";

function ProjectsCards() {
  const [projects, setProjects] = useState([]);
  const [isFetching, setIsFetching] = useState(true);

  useEffect(() => {
    const endpoint = "https://gitconnected.com/v1/portfolio/carinebecker";
    const getData = async () => {
      const results = await fetch(endpoint)
        .then((response) => response.json())
        .catch((err) => console.log(err));
      const data = results.projects;
      setProjects(data);
      setIsFetching(false);
    };
    getData();
  }, []);

  return (
    <>
      { isFetching
        ? <p>LOADING...</p>
        : <div className="project-cards-container">
            { projects.map((project) => <ProjectCard project={project} />) }
          </div>
        }
    </>
  );
}

export default ProjectsCards;
