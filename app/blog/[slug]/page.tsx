
import BlogPostContent from "../../components/utils/BlogPostContent";
import { blogPosts } from "../../data/blog-posts";
import type { BlogPostPageProps } from "../../types/blog";
import { notFound } from "next/navigation";

export default async function BlogPage({
  params,
}: BlogPostPageProps) {
  const { slug } = await params;

  const post = blogPosts[slug];

  if (!post) {
    notFound();
  }

  return <BlogPostContent post={post} />;
}