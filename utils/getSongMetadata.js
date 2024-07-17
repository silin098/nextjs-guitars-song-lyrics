import fs from "fs";
import matter from "gray-matter";

export default function getSongMetadata(basePath) {
  const folder = basePath + "/";
  const files = fs.readdirSync(folder);
  const markdownSongs = files.filter((file) => file.endsWith(".md"));

  //get the file data

  const songs = markdownSongs.map((filename) => {
    const fileContents = fs.readFileSync(`${basePath}/${filename}`, "utf-8");
    const matterResult = matter(fileContents);
    return {
      title: matterResult.data.title,
      artist: matterResult.data.artist,
      slug: filename.replace(".md", ""),
    };
  });

  return songs;
}
