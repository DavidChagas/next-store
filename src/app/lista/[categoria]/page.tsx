import ProdutoItem from '@/app/components/produto/ProdutoItem';
import { cProdutoLista } from '@/controllers/paginas/cProdutoLista';
import { Metadata } from 'next';

type Props = {
  params: { categoria: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const categoria = params.categoria;
  return {
    title: 'Produtos | ' + categoria
  };
}

export default async function ProdutosCategoriaPage({ params }: Props) {
  const ctrl = new cProdutoLista();
  await ctrl.init(params.categoria);

  return (
    <div className="px-5 md:container md:mx-auto md:px-10">
      <h1 className="mb-10 mt-10 text-2xl md:mb-20">
        Produtos da Categoria {params.categoria}
      </h1>
      <div className="grid grid-cols-2 gap-5 md:grid-cols-5 md:gap-10">
        {ctrl.produtos.map((produto) => (
          <ProdutoItem key={produto.id} produto={produto} />
        ))}
      </div>
    </div>
  );
}
