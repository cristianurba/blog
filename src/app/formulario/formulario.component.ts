import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Post } from '../models/post';
import { BlogService } from '../blog.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  formPost: FormGroup;


  constructor(private blogService: BlogService) {
    this.formPost = new FormGroup({
      titulo: new FormControl('', [
        Validators.required,
        Validators.minLength(3)
      ]),
      texto: new FormControl('', [
        Validators.required,
        Validators.minLength(3)
      ]),
      autor: new FormControl('', [
        Validators.required,
        Validators.minLength(3)
      ]),
      imagen: new FormControl('', [
        Validators.required
      ]),
      categoria: new FormControl('', [
        Validators.required]
      )
    });
  }

  ngOnInit() {
  }

  manejarPost($event) {
    console.log($event);
  }

  onSubmit() {
  }

  enviarPost() {
    const postNuevo: Post = new Post(
      this.formPost.value.titulo,
      this.formPost.value.autor,
      this.formPost.value.texto,
      this.formPost.value.imagen,
      this.formPost.value.categoria,
      this.formPost.value.id
    );
    this.blogService.agregarPost(postNuevo);
  }



}
