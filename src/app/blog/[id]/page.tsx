import { cBlogId } from '@/controllers/paginas/cBlogId';

type Props = {
  params: { id: string };
};

export default async function Page({ params }: Props) {
  const ctrl = new cBlogId();
  await ctrl.init(params.id);

  return (
    <div>
      <hr></hr>
      <h1>{ctrl.post?.title}</h1>
      <div>{ctrl.post?.description}</div>
    </div>
  );
}

// export async function generateStaticParams() {
//   const res = await fetch('http://localhost:3001/posts');
//   const posts = await res.json();

//   return posts?.map((product: any) => ({
//     id: product.id
//   }));
// }
