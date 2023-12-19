import Head from "next/head";
import {
  ChordProParser,
  HtmlTableFormatter,
  HtmlDivFormatter,
} from "chordsheetjs";

import styles from "@/styles/Home.module.css";

export default function Home() {
  const chordSheet = `
Let it be
{key:A}
{chordfont:1}
---
{artist:John Legend}
Let it [Am]be, let it [C]be, let it [F]be, let it [C]be
[C]Whisper words of [G]wisdom, let it [F]be [C] [Dm] [C]
[C]Whisper words of [G]wisdom, let it [F]be [C] [Dm] [C]
[C] [G] [F] [C] [Dm] [C]
---
When I find myself in times of trouble
Mother Mary comes to me
Speaking words of wisdom, let it be
And in my hour of darkness
She is standing right in front of me
`;
  const parser = new ChordProParser();
  const song = parser.parse(chordSheet);
  const formatter = new HtmlTableFormatter();
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
