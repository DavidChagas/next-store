import { cBlogId } from '@/controllers/paginas/cBlogId';

type Props = {
  params: { id: string };
};

export default async function Page({ params }: Props) {
  const ctrl = new cBlogId();
  await ctrl.init(params.id);

  if (ctrl.post != null) {
    return (
      <div>
        <h1 className="mb-10 text-lg">{ctrl.post.title}</h1>
        <div className="mb-5 text-sm">{ctrl.post.description}</div>
        <div dangerouslySetInnerHTML={{ __html: ctrl.post.text }} />
      </div>
    );
  }
}

// export async function generateStaticParams() {
//   const res = await fetch('http://localhost:3001/posts');
//   const posts = await res.json();

//   return posts?.map((product: any) => ({
//     id: product.id
//   }));
// }
