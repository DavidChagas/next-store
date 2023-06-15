import { cMenu } from '@/controllers/componentes/cMenu';
import Link from 'next/link';

export async function Menu() {
  const ctrl = new cMenu();
  await ctrl.init();

  return (
    <div className="">
      <div className=" flex justify-center gap-10">
        <Link href={'/'}>Home</Link>
        <Link href={'/lista/todos'}>Todos os Produtos</Link>
        {ctrl.categorias.map((item) => (
          <Link href={`/lista/${item}`} key={item}>
            {item}
          </Link>
        ))}
      </div>
    </div>
  );
}
