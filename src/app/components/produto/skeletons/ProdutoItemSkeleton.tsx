export default function ProdutoItemSkeleton() {
  return (
    <div className="overflow-auto rounded-md border border-gray-200 bg-white">
      <div className="h-[200px]  bg-slate-200"></div>
      <div className="p-3">
        <div className="mt-2 h-[50px] rounded bg-slate-200"></div>
        <div className="mt-2 h-[50px] rounded bg-slate-200"></div>
        <div className="mt-2 h-[20px] w-[50px] rounded bg-slate-200"></div>
        <div className="mt-2 h-[30px] rounded bg-slate-200"></div>
      </div>
    </div>
  );
}
