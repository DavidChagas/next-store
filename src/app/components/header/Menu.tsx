import Link from 'next/link';

export async function Menu() {
  let categorias: string[] = [];

  const response = await fetch('https://fakestoreapi.com/products/categories');
  categorias = await response.json();

  return (
    <div className="">
      <div className=" flex justify-center gap-10">
        <Link href={'/'}>Home</Link>
        <Link href={'/lista/todos'}>Todos os Produtos</Link>
        {categorias.map((item) => (
          <Link href={`/lista/${item}`} key={item}>
            {item}
          </Link>
        ))}
      </div>
    </div>
  );
}
