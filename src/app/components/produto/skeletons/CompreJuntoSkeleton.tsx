import { ProdutoListaSkeleton } from './ProdutoListaSkeleton';

export default function CompreJunto() {
  return (
    <div className="mt-10 overflow-hidden rounded-md border">
      <div className="h-16 bg-slate-200"></div>
      <div className="grid grid-cols-4 gap-10 p-5">
        <ProdutoListaSkeleton quantidade={4}></ProdutoListaSkeleton>
      </div>
    </div>
  );
}
