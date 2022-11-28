import React from "react";
import chapters from "../chapters.json";
import dictionary from "../dictionary.json";
import { Link } from "react-router-dom";
import { Heading, Image, Video } from "../components";
import { slugify } from "../utils/slugify";
import Footer from "../components/Footer";

export default function Home({ handleChapter }) {
  return (
    <>
      <section className="bg-white center">
        <div style={{ padding: "80px 160px" }}>
          <Heading
            text={"pražská panelová sídliště jako místa protikladů"}
            color="black"
            background="white"
          />
        </div>
      </section>
      <Image nameClass={`panorama inverted bg-black`} path={"/bg3.png"} />
      <section className="bg-black">
        <div className="kapitola">
          <Heading text={"obsah publikace"} color="white" background="black" />
          <div className="divider center"></div>
        </div>
        <div className={`menu-full flex-center-hor static`} id="kapitoly">
          {chapters.map((text, index) => (
            <Link to={`/chapter/${slugify(text.type)}`} key={index}>
              <h6>
                {text.author.map((aut, index) =>
                  index === text.author.length - 1 ? (
                    <span key={index}>{aut}</span>
                  ) : (
                    <span key={index}>{aut}, </span>
                  )
                )}
              </h6>
              <Image path={`/kapitoly/${text.image}`} />
              <h5>{text.title}</h5>
            </Link>
          ))}
        </div>
        <div className="divider center"></div>
        <div className="kapitola center" id="slovnik">
          <h2>Slovník pojmů</h2>

          {dictionary.map((word, index) => (
            <Link to={`/pojem/${slugify(word)}`} key={index}>
              <button onClick={() => handleChapter(index)}>{word}</button>
            </Link>
          ))}
          <p>
            <i>autoři slovníčku</i> Tomáš Hoření Samec, Michal Lehečka, Jan Malý
            Blažek, Agata Guńka
          </p>
        </div>
      </section>

      <Image nameClass={`panorama bg-black`} path={"/bg3.png"} />
      <section className="bg-white" id="videogalerie">
        <div className="kapitola center">
          <Heading text={"videogalerie"} color="black" background="white" />
        </div>
        <div className="divider center"></div>
        <div className="kapitola center">
          <Video source="https://www.youtube.com/embed/vxQu5vWlmHE" />
          <Video source="https://www.youtube.com/embed/8xktVUGZzWs" />
          <Video source="https://www.youtube.com/embed/Rjg--Vx3sZg" />
        </div>
      </section>
      {/* <Image nameClass={`panorama inverted bg-black`} path={"/bg3.png"} /> */}
      {/* <section className="bg-black">
        <div className="kapitola center">
          <Heading text={"o projektu"} color="white" background="black" />
          <p>
            Tento web vznikl s podporou Strategie AV21 – program č. 23{" "}
            <a href="http://strategieav21-mesto-stavby.cz/">
              „Město jako laboratoř změny; Stavby, kulturní dědictví a prostředí
              pro bezpečný a hodnotný život."
            </a>
            <br />
            <br />
            podpořené dotací Akademie věd České republiky v rámci aktivity
            Politická ekonomie/ekologie měst realizované Sociologickým ústavem
            AV ČR, v. v. i. v tématu “Město jako mocenský prostor”. <br />
            <br />{" "}
            <i>
              Obsah webu a dokumentů vyjadřuje názor jejich autorek a autorů a
              nemusí vyjadřovat oficiální stanovisko Akademie věd ČR.
            </i>
          </p>
        </div>
      </section> */}
      <Footer />
    </>
  );
}
