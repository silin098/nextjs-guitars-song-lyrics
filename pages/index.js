
import { useEffect, useState } from 'react';
import ChordParser from '@/components/ChordParser';
import {ChordProParser,HtmlTableFormatter,Chord} from 'chordsheetjs';
const chordSheet = `
{title: 10,000 Reasons (Bless the Lord)}
{artist: Jonas Myrin & Matt Redman}

{key: G}


{soc:Chorus}

Bless [C]the Lord, O my[G] soul,[D/F#] O my [Em]soul,
[C]Worship His ho[G]ly n[Dsus4]ame.    [D]
Sing like [C]never be[Em]fore, [C]   [D]O m[Em]y soul.
I'll[C] worship Your ho[D]ly na[C/G]me.   [G]

{end_of_chorus}

[Verse 1]
The[C] sun comes[G] up, it's a n[D]ew day da[Em]wning;
[C]It's time to[G] sing Your son[D]g ag[Em]ain.
[C]Whatever may [G]pass, and what[D]ever lies be[Em]fore me,
[C2]Let me be s[G]inging when the [Dsus4]even--in[D]g co[G]mes.[Gsus4]    [G]
{end_of_verse}


{start_of_verse:Verse 2}
You're [C]rich in[G] love, and You're[D] slow to [Em]anger.
Your[C] name is g[G]reat, and Your h[D]eart is ki[Em]nd.
For[C] all Your [G]goodness, I will[D] keep on[Em] singing;
[C2]Ten thousand[G] reasons for my[Dsus4] heart t[D]o fi[G]nd. [Gsus4]    [G]

Verse 3:
And[C] on that[G] day when my[D] strength is f[Em]ailing,
The[C] end draws[G] near, and my[D] time has [Em]come;
[C]Still my[G] soul will sing Your [D]praise un[Em]ending:
[C2]Ten thousand[G] years and then fo[Dsus4]re----ve[D]rmo[G]re! [Gsus4]    [G]

Tag:
[Em]I'll wor[C]ship Your [D]holy n[Em]ame.
Yes, I'll [C]worship Your [D]holy na[G]me.`.substring(1);


const song = new ChordProParser().parse(chordSheet);

const formatter = new HtmlTableFormatter();




const HomePage = () => {
  const [chordKey,setChordKey] =  useState(0)
  const [formattedSong,setFormattedSong] = useState(null);

  useEffect(()=>{
    const transposeSong = song.transpose(chordKey);
    const formattedSong = formatter.format(transposeSong);
    setFormattedSong(formattedSong);
    const key = song.metadata.metadata.key;

  },[chordKey])

  function transposeUp(){
    setChordKey(chordKey+1);
  }

  function transposeDown(){
    setChordKey(chordKey-1);
  }
  


  
  return (
    <div>
      <button onClick={transposeUp}>Transpose Up</button>
      <button onClick={transposeDown}>Transpose Down</button>
     
      <ChordParser chordproText={formattedSong}  />
    </div>
  );
};

export default HomePage;
