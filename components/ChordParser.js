import { useEffect,useState } from 'react';

import {ChordProParser,HtmlTableFormatter,Chord} from 'chordsheetjs';

function ChordParser({ chordproText }) {

// const[chordKey,setChordKey] = useState(keyChord);
 
 function transposeUp(key){
    const chord = Chord.parse(key)
    const chord2 = chord.transposeUp();
    const transposeKey = chord2.toString();
    setChordKey(transposeKey);

 
   
 }

 function transposeDown(key){
   const chord = Chord.parse(key)
    const chord2 = chord.transposeDown();
    const transposeKey = chord2.toString();
    setChordKey(transposeKey);
   
 }


  

    return<div>
        
        <div dangerouslySetInnerHTML={{ __html: chordproText }} />
    </div>
     
}

export default ChordParser;
