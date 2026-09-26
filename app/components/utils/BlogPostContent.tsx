
import type { BlogPost } from "../../types/blog";

type Props = {
  post: BlogPost;
};

function BlogPostContent({ post }: Props) {
  return (
    <article className="mx-auto max-w-3xl px-6 py-12">
      <h1 className="mb-8 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
        {post.title}
      </h1>

      <div>
        {post.paragraphs.map((paragraph, index) => (
          <p
            key={index}
            className={`text-lg leading-8 text-gray-600 ${
              index === 0 ? "mb-4" : ""
            }`}
          >
            {paragraph}
          </p>
        ))}
      </div>
    </article>
  );
}

export default BlogPostContent;