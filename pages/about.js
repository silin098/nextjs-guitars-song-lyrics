import Link from "next/link";
import fs from "fs";
import path from "path";
import { slugToTitle } from "@/utils/slugToTitle";
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

export default function About({ songs }) {
  return (
    <div>
      <h1>Blog Posts</h1>
    </div>
  );
}
