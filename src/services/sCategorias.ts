export class sCategoria {
  async buscarTodasCategorias(): Promise<Array<string> | []> {
    try {
      const response = await fetch(
        'https://fakestoreapi.com/products/categories',
        {
          next: { revalidate: 60 }
        }
      ).then((s) => {
        return s.json();
      });
      return response;
    } catch (error) {
      console.error('Erro ao buscar categorias:', error);
      return [];
    }
  }
}
