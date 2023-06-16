import { Post } from '@/types/Post';
import { sBlog } from '@/services/sBlog';

export class cBlogLista {
  posts: Array<Post> | [] = [];
  sB: sBlog = new sBlog();

  async init() {
    await this.buscarPosts();
  }

  async buscarPosts() {
    this.posts = await this.sB.buscarTodosPosts();
  }
}
