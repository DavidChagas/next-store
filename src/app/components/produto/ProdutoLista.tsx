import { Produto } from '../../../../types/Produto';
import ProdutoItem from './ProdutoItem';

export const revalidate = 10;

interface ProdutoListaProps {
  categoria: string | null;
  quantidade: number | null;
}

export async function ProdutoLista({
  categoria,
  quantidade
}: ProdutoListaProps) {
  let produtos: Array<Produto> = [];

  const url = categoria != 'todos' ? '/category/' + categoria : '';

  console.log('url', url);

  await fetch('https://fakestoreapi.com/products' + url, {
    next: {
      revalidate: 10
    }
  })
    .then((res) => res.json())
    .then((data) => {
      produtos = data;
      if (typeof quantidade === 'number') {
        produtos.length = quantidade;
      }
    })
    .catch((error) => {
      console.error('Erro ao buscar produtos:', error);
    });

  return (
    <>
      {produtos.map((produto) => (
        <ProdutoItem key={produto.id} produto={produto} />
      ))}
    </>
  );
}
