import { Injectable } from '@angular/core';
import { Post } from './models/post';
import { promise } from 'protractor';



@Injectable({
  providedIn: 'root'
})
export class BlogService {

  arrPost: Post[];
  id: number;


  constructor() {
    this.id = 7;
    this.arrPost = [
      new Post('Elvis Canario', 'Y la casualidad...que soy el Elvis Canario', 'Juan Ignacio Delgado Alemany', 'https://pbs.twimg.com/media/DQoddU1XUAAcEDl.jpg', 'personaje', 6),
      new Post('Mr Chaman', 'Comedy is like a big black d*ck', 'Juan Ignacio Delgado Alemany', 'https://pbs.twimg.com/media/Ddz6EG-VMAA2mVk.jpg', 'personaje', 5),
      new Post('El pensativo', 'El Ignatius más sensible', 'Juan Ignacio Delgado Alemany', 'https://s3-eu-west-1.amazonaws.com/beta.lagenda/styles/image1000x1000/s3/programacion/ignatius_0.jpg?itok=aaPN90EI', 'persona', 4),
      new Post('El grito sordo', 'AAAAAAAAAAAAH', 'Juan Ignacio Delgado Alemany', 'https://www.eldiario.es/cultura/Ignatius-Farray_EDIIMA20150323_0661_5.jpg', 'personaje', 3),
      new Post('El loco de las coles', 'Otro chanante más', 'Juan Ignacio Delgado Alemany', 'https://1.bp.blogspot.com/_KVRsdIdNWvY/RzWmFjhbI9I/AAAAAAAAA8c/k_QKK0_dF3M/s400/normal_01.jpg', 'personaje', 2),
      new Post('El graduado', 'Recién salido de estudiar', 'Juan Ignacio Delgado Alemany', 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTDwxuGeEyUuPB3m3zjkQrKCeyTcoc0RFPhsDb0OQTl5dlT2V_A', 'persona', 1),
    ];
  }

  agregarPost(post) {
    this.arrPost.unshift(post);
    this.id++;
  }

  getAllPosts(): Post[] {
    return this.arrPost;
  }


  getPostsbyCategoria(pCategoria: string): Promise<Post[]> {
    const prom = new Promise<Post[]>((resolve, reject) => {
      if (pCategoria === '') {
        resolve(this.arrPost);
      } else {
        const arrFiltrado = this.arrPost.filter(item => item.categoria === pCategoria);
        resolve(arrFiltrado);
      }

    });
    return prom;
  }

  deletePost(pPost: Post) {
    for (let i = 0; i < this.arrPost.length; i++) {
      if (this.arrPost[i].id === pPost.id) {
        this.arrPost.splice(i, 1);
      }
    }
  }



}






