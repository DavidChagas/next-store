import Link from 'next/link';

async function getPosts() {
  // por não ser uma pagina dinamica ([id] por exemplo) por padrão o fetch é 'force-cache', fazendo assim a chamada a api apenas no momento do build
  const res = await fetch('http://localhost:3001/posts', {
    cache: 'no-store'
  });
  return res.json();
}

export default async function Blog() {
  const posts = await getPosts();

  return (
    <div>
      <ul>
        {posts?.map((product: any) => (
          <li key={product.id}>
            <Link href={`/blog/${product.id}`}>{product.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
