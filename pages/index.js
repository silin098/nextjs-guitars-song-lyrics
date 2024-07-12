import { useEffect, useState } from "react";

import Main from "@/components/Main";
import ChordParser from "@/components/ChordParser";

import { ChordProParser, HtmlTableFormatter } from "chordsheetjs";
import NavBar from "@/components/NavBar";
import ChordDiagram from "@/components/ChordDiagram";

const chordSheet = `
{title: Let it be}

[Intro|]  [C][.......|] [G][.......|] [Am][.......|]  [F][......|]
{key: C}

{composer: John Lennon}
{composer: Paul McCartney}
{chordsize: 12px}

{chordsize: 120%}
{textsize: 120%}

{start_of_chorus}
Let it [Am]be, let it [C/G]be, let it [F]be, let it [C]be
[C]Whisper words of [G]wisdom, let it [F]be [C/E] [Dm] [C]
{end_of_chorus}
`.substring(1);

const song = new ChordProParser().parse(chordSheet);
const formatter = new HtmlTableFormatter();

const HomePage = () => {
  const [chordKey, setChordKey] = useState(0);
  const [formattedSong, setFormattedSong] = useState(null);

  useEffect(() => {
    const transposeSong = song.transpose(chordKey);
    const formattedSong = formatter.format(transposeSong);
    setFormattedSong(formattedSong);
  }, [chordKey]);

  function transposeUp() {
    setChordKey(chordKey + 1);
  }

  function transposeDown() {
    setChordKey(chordKey - 1);
  }

  return (
    <div className="">
      <NavBar />

      {/* <button onClick={transposeUp}>Transpose Up</button>
      <button onClick={transposeDown}>Transpose Down</button>

      <ChordParser chordproText={formattedSong} /> */}
    </div>
  );
};

export default HomePage;
