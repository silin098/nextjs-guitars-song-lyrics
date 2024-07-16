import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { useEffect, useState } from "react";
import { ChordProParser, HtmlTableFormatter } from "chordsheetjs";

const parser = new ChordProParser();
const formatter = new HtmlTableFormatter();

export async function getStaticPaths() {
  const postsDirectory = path.join(process.cwd(), "content");
  const filenames = fs.readdirSync(postsDirectory);

  return {
    paths: filenames.map((filename) => ({
      params: { slug: filename.replace(/\.md$/, "") }, // Extract slug from filename (e.g., 'my-post')
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postFilePath = path.join(process.cwd(), "content", `${params.slug}.md`);
  const fileContents = fs.readFileSync(postFilePath, "utf8");
  const { data, content } = matter(fileContents);

  // const processedContent = await remark().use(html).process(content);
  // const contentHtml = processedContent.toString();

  return {
    props: {
      frontmatter: data,
      content: content,
    },
  };
}

export default function Post({ frontmatter, content }) {
  const [chordKey, setChordKey] = useState(0);
  const [formattedSong, setFormattedSong] = useState(null);
  const song = parser.parse(content);
  useEffect(() => {
    const transposeSong = song.transpose(chordKey);
    const formattedLyrics = formatter.format(transposeSong);
    setFormattedSong(formattedLyrics);
  }, [chordKey]);

  function transposeUp() {
    setChordKey(chordKey + 1);
  }

  function transposeDown() {
    setChordKey(chordKey - 1);
  }

  // const formattedSong = formatter.format(song);
  return (
    <article>
      <h1>{frontmatter.title}</h1>
      <div className="flex gap-2 p-4">
        <button
          onClick={transposeUp}
          className="bg-gray-300 p-2 rounded hover:bg-gray-400"
        >
          Transpose Up
        </button>
        <button
          onClick={transposeDown}
          className="bg-gray-300 p-2 rounded  hover:bg-gray-400"
        >
          Transpose Down
        </button>
      </div>
      <div dangerouslySetInnerHTML={{ __html: formattedSong }} />
    </article>
  );
}
