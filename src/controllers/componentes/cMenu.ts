import { sCategoria } from '@/services/sCategorias';

export class cMenu {
  categorias: string[] = [];
  sC: sCategoria = new sCategoria();

  async init() {
    await this.buscarCategorias();
  }

  async buscarCategorias() {
    this.categorias = await this.sC.buscarTodasCategorias();
  }
}
