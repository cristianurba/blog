import { Component, OnInit } from '@angular/core';
import { BlogService } from '../blog.service';
import { ActivatedRoute } from '@angular/router';
import { Post } from '../models/post';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  listaPost: Post[];

  constructor(private activatedroute: ActivatedRoute, private blogService: BlogService) { }

  ngOnInit() {
    this.listaPost = this.blogService.getAllPosts();
  }

  manejarFiltro($event) {
    this.blogService.getPostsbyCategoria($event.target.value)
      .then(arrPost => {
        this.listaPost = arrPost;
      });
  }

  manejarBorrar(post) {
    this.blogService.deletePost(post) /* .then(arrPost => {
      this.listaPost = arrPost; */
  };
}


