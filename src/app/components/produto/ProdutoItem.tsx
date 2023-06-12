import Image from 'next/image';
import Link from 'next/link';
import BotaoComprar from './BotaoComprar';
import { Produto } from '../../../../types/Produto';

interface ProdutoItemProps {
  produto: Produto;
}

export default function ProdutoItem({ produto }: ProdutoItemProps) {
  return (
    <div>
      <div className="overflow-auto rounded-md border border-gray-200 bg-white">
        <Link href={`/produto/${produto.id}`} key={produto.id}>
          <div className="relative h-[150px] w-[150px] md:h-[200px] md:w-[200px]">
            <Image
              src={produto.image}
              alt={produto.title}
              fill
              sizes="(max-width: 768px) 150px,
              (max-width: 1200px) 200px,
              200px"
              placeholder="blur"
              blurDataURL={produto.image}
              className="object-contain"
            />
          </div>
        </Link>
        <div className="p-3">
          <h4 className="mt-2 h-[60px] text-[13px]">
            <b>{produto.title.substring(0, 50)}</b>
          </h4>
          <div className="h-[60px]">
            <small className="text-[12px] leading-none">
              {produto.description.substring(0, 50)}
            </small>
          </div>
          <p>
            Price: <b>${produto.price}</b>
          </p>
          <BotaoComprar />
        </div>
      </div>
    </div>
  );
}
