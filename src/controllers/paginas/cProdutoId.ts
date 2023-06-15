import { sProduto } from '@/services/sProduto';
import { Produto } from '@/types/Produto';

export class cProdutoId {
  produto: Produto | null = null;
  sP: sProduto = new sProduto();

  async init(idProduto: string) {
    await this.buscarProduto(idProduto);
  }

  async buscarProduto(idProduto: string) {
    this.produto = await this.sP.buscarProdutoPorId(idProduto);
  }
}
