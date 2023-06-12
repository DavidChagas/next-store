import moment from 'moment';
import Link from 'next/link';

export async function Menu() {
  let categorias: string[] = [];

  let horaAtual: any = '';

  try {
    const response = await fetch(
      'https://fakestoreapi.com/products/categories',
      {
        next: { revalidate: 60 }
      }
    ).then((s) => {
      horaAtual = moment(new Date()).format('hh:mm:ss a');
      return s.json();
    });
    categorias = response;
  } catch (error) {
    console.error('Erro ao buscar categorias:', error);
  }

  return (
    <div className="">
      <div className=" flex justify-center gap-10">
        <small>
          <i>{horaAtual}</i>
        </small>
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
