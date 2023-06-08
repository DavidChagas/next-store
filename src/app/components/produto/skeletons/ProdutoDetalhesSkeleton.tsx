export default function ProdutoDetalhesSkeleton() {
  return (
    <div className="grid grid-cols-2">
      <div className="h-[500px] w-[500px] rounded bg-slate-200"></div>
      <div className="flex flex-col justify-between rounded-md border p-5">
        <div>
          <div className="mb-5 h-5 w-20 rounded bg-slate-200"></div>
          <div className="h-20 rounded bg-slate-200"></div>
        </div>
        <div>
          <div className="mb-5 ml-auto h-5 w-10 rounded bg-slate-200"></div>
          <div className="mb-5 h-5 rounded bg-slate-200"></div>
        </div>
      </div>
    </div>
  );
}
