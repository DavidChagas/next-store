import { Post } from '@/types/Post';

export class sBlog {
  async buscarPostPorId(idPost: string): Promise<Post | null> {
    try {
      const res = await fetch('http://localhost:3001/posts/' + idPost, {
        cache: 'no-store'
      });
      return res.json();
    } catch (error) {
      console.error('Erro ao buscar Posts:', error);
      return null;
    }
  }

  async buscarTodosPosts(): Promise<Array<Post> | []> {
    try {
      // por não ser uma pagina dinamica ([id] por exemplo) por padrão o fetch é 'force-cache', fazendo assim a chamada a api apenas no momento do build
      const res = await fetch('http://localhost:3001/posts', {
        next: { revalidate: 60 }
      });
      return res.json();
    } catch (error) {
      console.error('Erro ao buscar Posts:', error);
      return [];
    }
  }
}
