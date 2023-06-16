import { Post } from '@/types/Post';
import Link from 'next/link';

interface PostCardProps {
  post: Post;
}

export default function PostCard({ post }: PostCardProps) {
  return (
    <Link
      href={`/blog/${post.id}`}
      className="overflow-auto rounded-md border border-gray-200 bg-white p-5 hover:border-gray-500"
    >
      <div className="mb-5">{post.title}</div>
      <div className="text-xs">{post.description}</div>
    </Link>
  );
}
