import { sBlog } from '@/services/sBlog';
import { Post } from '@/types/Post';

export class cBlogId {
  post: Post | null = null;
  sB: sBlog = new sBlog();

  async init(idPost: string) {
    await this.buscarPost(idPost);
  }

  async buscarPost(idPost: string) {
    this.post = await this.sB.buscarPostPorId(idPost);
  }
}
