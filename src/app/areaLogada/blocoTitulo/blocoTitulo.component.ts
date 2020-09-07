import { Component, Input } from '@angular/core';

@Component({
  selector: 'bloco-titulo',
  templateUrl: './blocoTitulo.component.html',
  styleUrls: [ './blocoTitulo.component.css' ]
})
export class BlocoTituloComponent  {

  titulo = 'Home';
  descricao = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';
}
