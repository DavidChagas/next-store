import { sProduto } from '@/services/sProduto';
import { Produto } from '@/types/Produto';

export class cProdutoListar {
  produtos: Array<Produto> = [];
  sP: sProduto = new sProduto();

  async init(categoria: string) {
    await this.buscarProdutos(categoria);
  }

  async buscarProdutos(categoria: string) {
    this.produtos = await this.sP.buscarProdutosPorCategoria(categoria, null);
  }
}
