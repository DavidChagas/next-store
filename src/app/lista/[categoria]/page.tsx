import { ProdutoLista } from '@/app/components/produto/ProdutoLista';
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

export default function ProdutosCategoriaPage({ params }: Props) {
  return (
    <div className="px-10 md:container md:mx-auto">
      <h1 className="mb-20 mt-10 text-2xl">
        Produtos da Categoria {params.categoria}
      </h1>
      <div className="grid grid-cols-5 gap-10">
        {/* @ts-expect-error Async Server Component */}
        <ProdutoLista categoria={params.categoria} />
      </div>
    </div>
  );
}
