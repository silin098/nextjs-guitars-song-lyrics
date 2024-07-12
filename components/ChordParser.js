function ChordParser({ chordproText }) {


 return<div>
        
        <div dangerouslySetInnerHTML={{ __html: chordproText }} />
    </div>
     
}

export default ChordParser;
