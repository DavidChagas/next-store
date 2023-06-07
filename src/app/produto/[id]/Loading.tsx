export default function Loading() {
  return (
    <div className="container my-20 animate-pulse px-10">
      <div className="grid grid-cols-2">
        <div className="h-[500px] w-[500px] rounded bg-slate-200"></div>
        <div className="flex flex-col justify-between rounded-md border p-5">
          <div>
            <div className="mb-5 h-10 rounded bg-slate-200"></div>
            <div className="h-20 rounded bg-slate-200"></div>
          </div>
          <div>
            <div className="mb-5 ml-auto h-5 w-[100px] rounded bg-slate-200"></div>
            <div className="mb-5 h-10 rounded bg-slate-200"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
