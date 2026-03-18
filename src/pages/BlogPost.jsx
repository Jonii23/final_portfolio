import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export default function BlogPost() {
  const { slug } = useParams();
  const [content, setContent] = useState("");

  useEffect(() => {
    import(`../posts/${slug}.md?raw`).then((file) => {
      setContent(file.default);
    });
  }, [slug]);

  return (
    <section className="max-w-3xl mx-auto px-6 py-20">
      <ReactMarkdown remarkPlugins={[remarkGfm]} className="prose dark:prose-invert">
        {content}
      </ReactMarkdown>
    </section>
  );
}
