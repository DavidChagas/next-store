import { cAdminBlogLista } from '@/controllers/paginas/cAdminBlogLista';
import PostLista from '../components/blog/PostLista';
import { Post } from '@/types/Post';

export default async function DashboardBlogPage() {
  const ctrl = new cAdminBlogLista();
  await ctrl.init();
  return (
    <div className="rounded border">
      {ctrl.posts?.map((post: Post) => (
        <PostLista key={post.id} post={post} />
      ))}
    </div>
  );
}
