import Image from 'next/image';
import { Produto } from '../../../../types/Produto';
import BotaoComprar from './BotaoComprar';

interface ProdutoDetalhesProps {
  produto: Produto;
}

export default async function ProdutoDetalhes({
  produto
}: ProdutoDetalhesProps) {
  return (
    <div className="grid grid-cols-2">
      <Image
        src={produto.image}
        alt={produto.title}
        width={500}
        height={500}
        placeholder="blur"
        blurDataURL={produto.image}
        className="h-[500px] object-contain"
      />
      <div className="flex flex-col justify-between rounded-md border p-5">
        <div>
          <div className="mb-5 text-xl">{produto.title}</div>
          <div className="text-sm">{produto.description}</div>
        </div>
        <div>
          <div className="mb-5 text-right text-lg">Price ${produto.price}</div>
          <BotaoComprar></BotaoComprar>
        </div>
      </div>
    </div>
  );
}
