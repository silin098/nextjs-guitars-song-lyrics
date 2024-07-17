import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";
import { slugToTitle } from "@/utils/slugToTitle";
export async function getStaticProps() {
  const songsDirectory = path.join(process.cwd(), "content");

  const filenames = fs.readdirSync(songsDirectory);

  return {
    props: {
      songs: filenames.map((filename) => ({
        slug: filename.replace(/\.md$/, ""),
      })),
    },
  };
}
export default function Contact({ songs }) {
  return (
    <div>
      <h1>Blog Posts</h1>
      <ul>
        {songs.map((song) => (
          <li key={song.slug}>
            <Link href={`/songs/${song.slug}`}>{slugToTitle(song.slug)}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
