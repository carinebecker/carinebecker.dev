import React from 'react';
import NavBar from '../components/NavBar';
import ProjectsCards from '../components/ProjectsCards';
import Footer from '../components/Footer';

function Projects() {
  return (
    <>
      <NavBar />
      <h2 className="page-heading">projetos</h2>
      <ProjectsCards />
      <Footer />
    </>
  )
}

export default Projects;