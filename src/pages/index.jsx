import React from 'react';
import NavBar from '../components/NavBar';


function Index() {
  return (
    <>
      <NavBar />
      <main>
        <h1>carine becker</h1>
        <h2>desenvolvedora front-end</h2>
        <section id="contact">
          <a href="https://github.com/carinebecker">
              <img src="images/GitHub-Mark-120px-plus.png" alt="Github"/>
          </a>
          <a href="https://linkedin.com/in/carinebecker">
              <img src="images/linkedin-128px.png" alt="Linkedin"/>
          </a>
          </section>
      </main>
    </>
  );
}

export default Index;
