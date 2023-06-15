import { Produto } from '../types/Produto';

export class sProduto {
  async buscarProdutoPorId(id: string): Promise<Produto | null> {
    try {
      let produto: Produto = {} as Produto;

      const response = await fetch('https://fakestoreapi.com/products/' + id);

      produto = await response.json();

      return produto;
    } catch (error) {
      console.error('Erro ao buscar produto:', error);
      return null;
    }
  }

  async buscarProdutosPorCategoria(
    categoria: string | null,
    quantidade: number | null
  ): Promise<Array<Produto> | []> {
    try {
      let produtos: Array<Produto> = [];

      const url = categoria !== 'todos' ? '/category/' + categoria : '';

      const response = await fetch('https://fakestoreapi.com/products' + url);
      produtos = await response.json();

      if (typeof quantidade === 'number') {
        produtos = produtos.slice(0, quantidade);
      }

      return produtos;
    } catch (error) {
      console.error('Erro ao buscar produtos:', error);
      return [];
    }
  }
}
