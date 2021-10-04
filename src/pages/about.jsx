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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil quos
          delectus perspiciatis eaque iure accusantium porro animi ipsam
          architecto cum? Consequuntur amet placeat quos provident officia
          perspiciatis quas mollitia odit.
        </p>
      </main>
      <Footer />
    </>
  );
}

export default About;
