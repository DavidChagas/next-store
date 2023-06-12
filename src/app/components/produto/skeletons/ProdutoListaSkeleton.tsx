import ProdutoItemSkeleton from './ProdutoItemSkeleton';
interface ProdutoListaProps {
  quantidade: number | null;
}

export function ProdutoListaSkeleton({ quantidade }: ProdutoListaProps) {
  const skeletons = Array.from({ length: quantidade || 0 }, (_, index) => (
    <ProdutoItemSkeleton key={index} />
  ));

  return <>{skeletons}</>;
}
