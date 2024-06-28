// utils/chordproParser.js

export function parseChordPro(text) {
    const lines = text.split('\n');
    const parsedLines = lines.map(line => {
      const parts = [];
      let buffer = '';
      let chordMode = false;
  
      for (const char of line) {
        if (char === '[') {
          if (buffer) {
            parts.push({ chord: '', lyric: buffer });
            buffer = '';
          }
          chordMode = true;
        } else if (char === ']') {
          parts.push({ chord: buffer, lyric: '' });
          buffer = '';
          chordMode = false;
        } else {
          buffer += char;
        }
      }
  
      if (buffer) {
        parts.push({ chord: chordMode ? buffer : '', lyric: !chordMode ? buffer : '' });
      }
  
      return parts;
    });
  
    return parsedLines;
  }
  