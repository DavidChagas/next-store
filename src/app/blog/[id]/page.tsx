async function getPost(id: any) {
  const res = await fetch(`http://localhost:3001/posts/${id}`, {
    cache: 'no-store'
  });
  return res.json();
}

export default async function Page({ params }: any) {
  const { id } = params;
  const post = await getPost(id);
  return (
    <div>
      <hr></hr>
      <h1>{post?.title}</h1>
      <div>{post?.description}</div>
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
