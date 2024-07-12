import React, { useState, useEffect } from "react";
import Chord from "@tombatossals/react-chords/lib/Chord";

function ChordDiagram({ chordName }) {
  const [chordData, setChordData] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const chord = {
    frets: [1, 3, 3, 2, 1, 1],
    fingers: [1, 3, 4, 2, 1, 1],
    barres: [1],
    capo: false,
  };
  const instrument = {
    strings: 6,
    fretsOnChord: 4,
    name: "Guitar",
    keys: [],
    tunings: {
      standard: ["E", "A", "D", "G", "B", "E"],
    },
  };
  const lite = false;
  useEffect(() => {
    const fetchChordData = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `https://api.uberchord.com/v1/chords/${chordName}`
        );
        const data = await response.json();

        setChordData(data[0]); // Assuming the first result is the desired chord

        setLoading(false);
      } catch (error) {
        console.error("Error fetching chord data:", error);
        // Handle the error appropriately (e.g., display an error message)
      }
    };

    fetchChordData();
  }, [chordName]); // Fetch data whenever chordName changes

  return (
    <div style={{ width: "100px" }}>
      <Chord
        // name={chordData.name}
        // suffix={chordData.suffix}
        // positions={chordData.fingers}
        instrument={instrument}
      />
    </div>
  );
}

export default ChordDiagram;
