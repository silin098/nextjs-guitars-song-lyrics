import Head from "next/head";
import {
  ChordProParser,
  HtmlTableFormatter,
  HtmlDivFormatter,
} from "chordsheetjs";

import styles from "@/styles/Home.module.css";

export default function Home() {
  const chordSheet = `
  {title: Let it be}
  {subtitle: Song by The Beatles}
  {key: C}
 
  {composer: John Lennon}
  {composer: Paul McCartney}
  
  {chordsize: 14px}
  
  {textcolour: maroon}
  
  Written by: %{composer}
  {textcolour}
  Lyrics by: %{lyricist|%{}|(unknown)}
  
  {chordcolour: red}
 
  {chordsize: 150%}
  {textcolour: black}

  {textsize: 120%}
  
  {start_of_chorus}
  Let it [Am]be, let it [C/G]be, let it [F]be, let it [C]be
  [C]Whisper words of [G]wisdom, let it [F]be [C/E] [Dm] [C]
  {end_of_chorus}
  
`;
  const parser = new ChordProParser();
  const song = parser.parse(chordSheet);
  const formatter = new HtmlTableFormatter();
  console.log(formatter.cssString());

  const html = formatter.format(song);

  return (
    <>
      <Head>
        <title>Myanmar Song Lyric </title>
        <meta
          name="description"
          content="A place where you can find chord and lyrics sheet for Myanmar songs."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.gridContainer}>
        <div className={styles.chordSheet}>
          <div dangerouslySetInnerHTML={{ __html: html }} />
        </div>
      </main>
    </>
  );
}
