import React from 'react';
import NavBar from '../components/NavBar';
import GithubLogo from '../GitHub-Mark-120px-plus.png'
import LinkedinLogo from '../linkedin-128px.png'

function Index() {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main className="index-container">
        <div>
          <h1>carine becker</h1>
          <h2>desenvolvedora front-end</h2>
        </div>
        <section className="contact">
          <a href="https://github.com/carinebecker">
              <img src={ GithubLogo } alt="Github"/>
          </a>
          <a href="https://linkedin.com/in/carinebecker">
              <img src={ LinkedinLogo } alt="Linkedin"/>
          </a>
          </section>
      </main>
    </>
  );
}

export default Index;
