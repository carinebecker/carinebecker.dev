import React from "react";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import aboutSticker from "../sticker.webp";

function About() {
  return (
    <>
      <div>
      <NavBar />
      </div>
      <main className="about-container">
        <h2 className="page-heading">sobre mim</h2>
        <img
          className="about-sticker"
          src={aboutSticker}
          alt="thinking sticker"
        />
        <p>
          Olá, sou a Carine! 👋🏻 <br/>
          Atualmente moro em Cascavel/PR com meu esposo <a href="https://carlosbecker.com">Carlos</a>, Zakk (chinchilla) e Bash (golden retriever, o mais novo membro da família). <br/>
          Estou na reta final final do curso da Trybe e adoro front-end.
        </p>
      </main>
      <Footer />
    </>
  );
}

export default About;
