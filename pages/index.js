import ChordProRenderer from '../components/ChordProRenderer';
import { parseChordPro } from '../utils/chordproParser';

const chordProText = `
[G]Hello, [D]world
[A]This is [Bm]ChordPro format
`;

export default function Home() {
  const parsedData = parseChordPro(chordProText);

  return (
    <div>
      <h1>ChordPro Parser</h1>
      <ChordProRenderer parsedData={parsedData} />
    </div>
  );
}
