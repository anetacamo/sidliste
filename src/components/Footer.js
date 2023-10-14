import React from 'react';
import { Image } from '../components';

export default function Footer() {
  return (
    <>
      <Image nameClass={`panorama inverted bg-black`} path={'/bg3.png'} />
      <section className='bg-black'>
        <div className='kapitola flex'>
          <div style={{ paddingRight: 32 }}>
            <h4>o projektu</h4>
            <p>
              Tento web vznikl s podporou Strategie AV21 -<br /> program č. 23:{' '}
              <a href='http://strategieav21-mesto-stavby.cz/'>
                "Město jako laboratoř změny; Stavby, kulturní dědictví a
                prostředí pro bezpečný a hodnotný život."
              </a>
              <br />
              <br />
              podpořené dotací Akademie věd České republiky v rámci aktivity
              Politická ekonomie/ekologie měst realizované Sociologickým ústavem
              AV ČR, v. v. i. v tématu "Město jako mocenský prostor". <br />
              <br />{' '}
              <i>
                Obsah webu a dokumentů vyjadřuje názor jejich autorek a autorů a
                nemusí vyjadřovat oficiální stanovisko Akademie věd ČR.
              </i>
            </p>
          </div>
          <div>
            <h4>Kontakt</h4>
            <p>
              <b>Tomáš Hoření Samec</b>
              <br />
              tomas.horeni-samec@soc.cas.cz
            </p>
            <div className='divider'></div>
            <p>
              <b>
                © Pražská panelová sídliště
                <br /> jako místa protikladů
              </b>
              , 2022 | kód a ilustrace{' '}
              <a href='https://anetacamo.github.io'>Aneta Camo</a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
