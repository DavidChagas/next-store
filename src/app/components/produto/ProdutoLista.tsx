import { Produto } from '../../../../types/Produto';
import ProdutoItem from './ProdutoItem';
import moment from 'moment';

export const revalidate = 10;

interface CategoriaProps {
  categoria: string | null;
}

export async function ProdutoLista({ categoria }: CategoriaProps) {
  let produtos: Array<Produto> = [];
  let horaAtual: any = '';

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
      horaAtual = moment(new Date()).format('hh:mm:ss a');
    })
    .catch((error) => {
      console.error('Erro ao buscar produtos:', error);
    });

  return (
    <>
      <div className="grid grid-cols-5 gap-10">
        <small>
          <i>{horaAtual}</i>
        </small>
        {produtos.map((produto) => (
          <ProdutoItem key={produto.id} produto={produto} />
        ))}
      </div>
    </>
  );
}
