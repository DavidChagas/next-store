import { Metadata } from 'next';
import { Produto } from '../../../../types/Produto';
import Image from 'next/image';
import BotaoComprar from '@/app/components/produto/BotaoComprar';

type Props = {
  params: { id: string };
};

let produto: Produto = {
  id: 0,
  title: '',
  description: '',
  category: '',
  image: '',
  price: 0,
  rating: []
};

async function buscarProduto(id: string) {
  // teoricamente não existe a possibilidade dessa função ser chamada mais que uma vez, por ser chamada em diferentes escopos
  try {
    const response = await fetch('https://fakestoreapi.com/products/' + id);
    produto = await response.json();
  } catch (error) {
    console.error('Erro ao buscar produto:', error);
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  // read route params
  const id = params.id;

  await buscarProduto(id);

  return {
    title: produto.title,
    description: produto.description,
    openGraph: {
      images: [produto.image]
    }
  };
}

export default async function ProdutoPage({ params }: Props) {
  const id = params.id;

  await buscarProduto(id);

  return (
    <div className="container my-20 px-10">
      <div className="grid grid-cols-2">
        <Image
          src={produto.image}
          alt={produto.title}
          width={500}
          height={500}
          className="h-[500px] object-contain"
        />
        <div className="flex flex-col justify-between rounded-md border p-5">
          <div>
            <div className="mb-5 text-xl">{produto.title}</div>
            <div className="text-sm">{produto.description}</div>
          </div>
          <div>
            <div className="mb-5 text-right text-lg">
              Price ${produto.price}
            </div>
            <BotaoComprar></BotaoComprar>
          </div>
        </div>
      </div>
    </div>
  );
}
