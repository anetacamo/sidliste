import React, { useState, useEffect } from 'react';
import { slugify } from '../utils/slugify';
import { Image, Kapitola } from './';

export default function Chapters({ item, next, previous }) {
  const file = slugify(item.type);
  const [chapter, setChapter] = useState('');

  useEffect(() => {
    import(`../chapters/${file}.md`)
      .then((res) => {
        fetch(res.default)
          .then((res) => res.text())
          .then((res) => setChapter(res));
      })
      .catch((err) => console.log(err));
  });

  return (
    <>
      <Image
        nameClass={`panorama ${item.dark ? 'inverted' : ''} ${
          previous.dark ? 'bg-black' : ''
        }`}
        path={'/bg3.png'}
      />
      <section
        id={file}
        className={`flex-center ${item.dark ? 'bg-black' : 'bg-grad-gray'}`}
        style={{ alignItems: 'center' }}
      >
        <Kapitola item={item} chapter={chapter} />
      </section>
    </>
  );
}
