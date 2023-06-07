import { ProdutoListaSkeleton } from '@/app/components/produto/skeletons/ProdutoListaSkeleton';

export default function Loading() {
  return (
    <div className="animate-pulse px-10 duration-75 md:container md:mx-auto">
      <div className="mb-20 mt-10 h-5 w-80 bg-slate-200 text-2xl"></div>

      <ProdutoListaSkeleton />
    </div>
  );
}
