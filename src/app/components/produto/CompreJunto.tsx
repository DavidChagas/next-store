import ProdutoItem from './ProdutoItem';
import { cCompreJunto } from '@/controllers/componentes/cCompreJunto';

interface CompreJuntoProps {
  categoria: string;
}

export default async function CompreJunto({ categoria }: CompreJuntoProps) {
  const ctrl = new cCompreJunto();
  await ctrl.init(categoria);

  await new Promise((resolve) => {
    setTimeout(resolve, 5000);
  });

  if (ctrl.produtos.length > 0) {
    return (
      <div className="mt-10 overflow-hidden rounded-md border">
        <div className="bg-slate-100 p-5">Compre Junto</div>
        <div className="grid grid-cols-4 gap-10 p-5">
          {ctrl.produtos.map((produto) => (
            <ProdutoItem key={produto.id} produto={produto} />
          ))}
        </div>
      </div>
    );
  } else {
    return (
      <div className="mt-10 overflow-hidden rounded-md border">
        <div className="bg-slate-100 p-5">Compre Junto</div>
        <div className="grid grid-cols-4 gap-10 p-5">Nenhum produto</div>
      </div>
    );
  }
}
