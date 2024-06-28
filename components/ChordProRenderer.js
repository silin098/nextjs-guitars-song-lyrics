// components/ChordProRenderer.js

const ChordProRenderer = ({ parsedData }) => {
    return (
      <div className="song">
        {parsedData.map((line, lineIndex) => (
          <div key={lineIndex} className="line">
            <div className="chords">
              {line.map((part, partIndex) => (
                <span key={partIndex} className="part chord">
                  {part.chord}
                </span>
              ))}
            </div>
            <div className="lyrics">
              {line.map((part, partIndex) => (
                <span key={partIndex} className="part lyric">
                  {part.lyric}
                </span>
              ))}
            </div>
          </div>
        ))}
        <style jsx>{`
          .song {
            font-family: Arial, sans-serif;
          }
          .line {
            margin-bottom: 10px;
          }
          .chords, .lyrics {
            display: flex;
            flex-wrap: wrap;
          }
          .part {
            margin-right: 5px;
            white-space: pre;
          }
          .chord {
            color: blue;
            font-weight: bold;
            height: 20px;
          }
        `}</style>
      </div>
    );
  };
  
  export default ChordProRenderer;
  