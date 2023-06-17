import { Post } from '@/types/Post';
import Link from 'next/link';

interface PostListaProps {
  post: Post;
}

export default function PostLista({ post }: PostListaProps) {
  return (
    <div className="grid grid-cols-[auto,100px,100px] gap-5 border-b px-5 py-3">
      <div>{post.title}</div>
      <Link
        href={`/dashboard/blog/${post.id}`}
        className="rounded border border-blue-700 px-5 text-center font-semibold text-blue-700"
      >
        editar
      </Link>
      <div className="rounded border border-red-700 px-5 text-center font-semibold text-red-700">
        excluir
      </div>
    </div>
  );
}
