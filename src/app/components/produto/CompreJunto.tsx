import { ProdutoLista } from './ProdutoLista';

interface CompreJuntoProps {
  categoria: string;
}

export default async function CompreJunto({ categoria }: CompreJuntoProps) {
  await new Promise((resolve) => {
    setTimeout(resolve, 5000);
  });

  return (
    <div className="mt-10 overflow-hidden rounded-md border">
      <div className="bg-slate-100 p-5">Compre Junto</div>
      <div className="grid grid-cols-4 gap-10 p-5">
        {/* @ts-expect-error Async Server Component */}
        <ProdutoLista categoria={categoria} quantidade={4}></ProdutoLista>
      </div>
    </div>
  );
}
