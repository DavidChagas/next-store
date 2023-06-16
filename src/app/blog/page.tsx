import { cBlogLista } from '@/controllers/paginas/cBlogLista';
import Link from 'next/link';

export default async function Blog() {
  const ctrl = new cBlogLista();
  await ctrl.init();

  return (
    <div>
      <ul>
        {ctrl.posts?.map((product: any) => (
          <li key={product.id}>
            <Link href={`/blog/${product.id}`}>{product.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
