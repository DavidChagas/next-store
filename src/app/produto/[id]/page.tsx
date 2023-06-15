import { Metadata } from 'next';
import { Produto } from '../../../types/Produto';
import ProdutoDetalhes from '@/app/components/produto/ProdutoDetalhes';
import CompreJunto from '@/app/components/produto/CompreJunto';
import { Suspense } from 'react';
import ProdutoDetalhesSkeleton from '@/app/components/produto/skeletons/ProdutoDetalhesSkeleton';
import CompreJuntoSkeleton from '@/app/components/produto/skeletons/CompreJuntoSkeleton';
import { cProdutoId } from '@/controllers/paginas/cProdutoId';

type Props = {
  params: { id: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const ctrl = new cProdutoId();
  await ctrl.init(params.id);

  if (ctrl.produto != null) {
    return {
      title: ctrl.produto.title,
      description: ctrl.produto.description,
      openGraph: {
        images: [ctrl.produto.image]
      }
    };
  } else {
    return {
      title: 'Produto não encontrado',
      description: 'Produto não encontrado'
    };
  }
}

export default async function ProdutoPage({ params }: Props) {
  const ctrl = new cProdutoId();
  await ctrl.init(params.id);

  if (ctrl.produto != null) {
    return (
      <div className="container mx-auto my-20 px-10">
        <Suspense fallback={<ProdutoDetalhesSkeleton />}>
          <ProdutoDetalhes produto={ctrl.produto}></ProdutoDetalhes>
        </Suspense>
        <Suspense fallback={<CompreJuntoSkeleton />}>
          <CompreJunto categoria={ctrl.produto.category}></CompreJunto>
        </Suspense>
      </div>
    );
  } else {
    return <div>Nenhum produto</div>;
  }
}
