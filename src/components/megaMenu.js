import React from "react";
import Image from "./image";
import { Link } from "react-router-dom";
import { slugify } from "../utils/slugify";

const menuItems = [
  { title: "Slovník pojmů", link: "/#slovnik" },
  { title: "Videogalerie", link: "/#videogalerie" },
  { title: "Obsah:", link: "/#kapitoly" },
];

export default function MegaMenu({
  chapters,
  open,
  handleOpen,
  handleChapter,
}) {
  return (
    <div onClick={() => handleOpen(false)}>
      <div className={`${open && "open"} mobile-menu`}>
        {menuItems.map((item, index) => (
          <div>
            <Link to="/#videogalerie">
              <h3>{item.title}</h3>
            </Link>
          </div>
        ))}
        {chapters.map((text, index) => (
          <Link
            to={`/chapter/${slugify(text.type)}`}
            onClick={() => handleChapter(index)}
          >
            <Image nameClass="icon inverted" path={`/kapitoly/${text.image}`} />
            <h4>{text.type}</h4>
          </Link>
        ))}
      </div>
    </div>
  );
}
