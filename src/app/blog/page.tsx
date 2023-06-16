import { cBlogLista } from '@/controllers/paginas/cBlogLista';
import PostCard from '../components/blog/PostCard';
import { Post } from '@/types/Post';

export default async function Blog() {
  const ctrl = new cBlogLista();
  await ctrl.init();

  return (
    <div className=" grid grid-cols-4 gap-20 ">
      {ctrl.posts?.map((post: Post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
}
