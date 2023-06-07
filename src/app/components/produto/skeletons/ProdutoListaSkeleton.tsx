import ProdutoItemSkeleton from './ProdutoItemSkeleton';

export function ProdutoListaSkeleton() {
  return (
    <div className="grid grid-cols-5 gap-10">
      <ProdutoItemSkeleton />
      <ProdutoItemSkeleton />
      <ProdutoItemSkeleton />
      <ProdutoItemSkeleton />
      <ProdutoItemSkeleton />
      <ProdutoItemSkeleton />
      <ProdutoItemSkeleton />
      <ProdutoItemSkeleton />
      <ProdutoItemSkeleton />
      <ProdutoItemSkeleton />
    </div>
  );
}
