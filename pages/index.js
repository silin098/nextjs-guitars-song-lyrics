import fs from "fs";
import path from "path";
import Main from "@/components/Main";
import NavBar from "@/components/NavBar";
import ChordDiagram from "@/components/ChordDiagram";
import matter from "gray-matter";

export async function getStaticProps() {
  const songsDirectory = path.join(process.cwd(), "content");
  const files = fs.readdirSync(songsDirectory);
  const markDownSongs = files.filter((file) => file.endsWith(".md"));

  const songs = markDownSongs.map((filename) => {
    const fileContents = fs.readFileSync(
      path.join(process.cwd(), "content", filename),
      "utf-8"
    );
    const matterResult = matter(fileContents);
    return {
      title: matterResult.data.title,
      artist: matterResult.data.artist,
      slug: matterResult.data.slug,
    };
  });

  return {
    props: {
      songs: songs,
    },
  };
}

const HomePage = ({ songs }) => {
  return (
    <div className="max-w-screen-xl	mx-auto">
      <NavBar />
      <h1 className="text-center">Song Lists</h1>
      <div className="flex mt-5 gap-4 flex-wrap md:justify-start justify-center p-3">
        {songs.map((song) => {
          return (
            <Main
              key={song.slug}
              title={song.title}
              artist={song.artist}
              slug={song.slug}
            />
          );
        })}
      </div>
    </div>
  );
};

export default HomePage;
