import { sProduto } from '@/services/sProduto';
import { Produto } from '@/types/Produto';

export class cCompreJunto {
  produtos: Array<Produto> | [] = [];
  sP: sProduto = new sProduto();

  async init(categoria: string) {
    await this.buscarProduto(categoria);
  }

  async buscarProduto(categoria: string) {
    this.produtos = await this.sP.buscarProdutosPorCategoria(categoria, 4);
  }
}
