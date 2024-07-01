
import fs from 'fs';
import path from 'path';
import ChordSheetJS, { ChordSheetSerializer } from 'chordsheetjs';
import styles from '@/styles/Home.module.css'

const songsDirectory = path.join(process.cwd(), 'songs');

export async function getStaticPaths() {
  const fileNames = fs.readdirSync(songsDirectory);
  const paths = fileNames.map((fileName) => ({
    params: { song: fileName.replace(/\.cho$/, '') }, // Remove .cho extension
  }));

  return {
    paths,
    fallback: false,
  };
}


export async function getStaticProps({ params }) {
  const { song } = params;
  const choFilePath = path.join(songsDirectory, `${song}.cho`);
  const choFileContent = fs.readFileSync(choFilePath, 'utf-8');

 
  const parser = new ChordSheetJS.ChordProParser();
  const songData = parser.parse(choFileContent)
  const formatter = new ChordSheetJS.HtmlTableFormatter();
  const disp = formatter.format(songData);
 
  const serializedSong = new ChordSheetSerializer().serialize(songData)
 
 
   return {
    props: {
     
     disp,
     serializedSong
      
    
    },
  };
}


const SongPage = ({disp}) => {
  

   
   
    
    return (
    <main className={styles.container}>
        <div dangerouslySetInnerHTML={{__html:disp}}/>
      </main>
  );
};

export default SongPage;
