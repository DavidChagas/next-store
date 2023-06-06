import { Produto } from '../../../../types/Produto';
import ProdutoItem from './ProdutoItem';

export const revalidate = 10;

interface CategoriaProps {
  categoria: string | null;
}

export async function ProdutoLista({ categoria }: CategoriaProps) {
  let produtos: Array<Produto> = [];

  const url = categoria != 'todos' ? '/category/' + categoria : '';

  console.log('url', url);

  await fetch('https://fakestoreapi.com/products' + url, { cache: 'no-store' })
    .then((res) => res.json())
    .then((data) => {
      produtos = data;
    })
    .catch((error) => {
      console.error('Erro ao buscar produtos:', error);
    });

  return (
    <>
      <div className="grid grid-cols-5 gap-10">
        {produtos.map((produto) => (
          <ProdutoItem key={produto.id} produto={produto} />
        ))}
      </div>
    </>
  );
}
