import { Metadata } from 'next';
import { Produto } from '../../../../types/Produto';
import ProdutoDetalhes from '@/app/components/produto/ProdutoDetalhes';
import CompreJunto from '@/app/components/produto/CompreJunto';
import { Suspense } from 'react';
import ProdutoDetalhesSkeleton from '@/app/components/produto/skeletons/ProdutoDetalhesSkeleton';

type Props = {
  params: { id: string };
};

let produto: Produto = {
  id: 0,
  title: '',
  description: '',
  category: '',
  image: '',
  price: 0,
  rating: []
};

async function buscarProduto(id: string) {
  // teoricamente não existe a possibilidade dessa função ser chamada mais que uma vez, por ser chamada em diferentes escopos
  try {
    const response = await fetch('https://fakestoreapi.com/products/' + id);
    produto = await response.json();
  } catch (error) {
    console.error('Erro ao buscar produto:', error);
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  // read route params
  const id = params.id;

  await buscarProduto(id);

  return {
    title: produto.title,
    description: produto.description,
    openGraph: {
      images: [produto.image]
    }
  };
}

export default async function ProdutoPage({ params }: Props) {
  const id = params.id;

  await buscarProduto(id);

  return (
    <div className="container mx-auto my-20 px-10">
      <Suspense fallback={<ProdutoDetalhesSkeleton />}>
        {/* @ts-expect-error Async Server Component */}
        <ProdutoDetalhes produto={produto}></ProdutoDetalhes>
      </Suspense>
      <Suspense>
        {/* @ts-expect-error Async Server Component */}
        <CompreJunto categoria={produto.category}></CompreJunto>
      </Suspense>
    </div>
  );
}
