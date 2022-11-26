import React from "react";
import dictionary from "../dictionary.json";
import { Link } from "react-router-dom";
import { Heading, Image } from "../components";
import { slugify } from "../utils/slugify";

export default function Home() {
  return (
    <>
      <section className="bg-white center">
        <div style={{ padding: "80px 160px" }}>
          <Heading text={"slovnik pojmu"} color="black" background="white" />
        </div>
      </section>
      <Image nameClass={`panorama inverted bg-black`} path={"/bg3.png"} />
      <section className="bg-black">
        <div className="kapitola">
          <Heading text={"obsah publikace"} color="white" background="black" />
          <div className="divider center"></div>
        </div>

        <div className="divider center"></div>
        <div className="kapitola center">
          <h2>Slovník pojmů</h2>

          {dictionary.map((word) => (
            <Link to={`/pojem/${slugify(word)}`}>
              <button>{word}</button>
            </Link>
          ))}
          <p>
            <i>autoři slovníčku</i> Tomáš Hoření Samec, Michal Lehečka, Jan Malý
            Blažek, Agata Guńka
          </p>
        </div>
      </section>

      <Image nameClass={`panorama bg-black`} path={"/bg3.png"} />
      <section className="bg-white" id="kapitoly">
        <div className="kapitola center">
          <Heading text={"videogalerie"} color="black" background="white" />
        </div>
        <div className="divider center"></div>
        <div className="flex-center" style={{ flexWrap: "wrap" }}>
          <div style={{ padding: 10 }}>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/vxQu5vWlmHE"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
          <div style={{ padding: 10 }}>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/8xktVUGZzWs"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
          <div style={{ padding: 10 }}>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/Rjg--Vx3sZg"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </section>
      <Image nameClass={`panorama inverted bg-black`} path={"/bg3.png"} />
      <section className="bg-black">
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
      </section>
    </>
  );
}
