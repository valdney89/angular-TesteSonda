import { Component, Input } from '@angular/core';

@Component({
  selector: 'my-header',
  templateUrl: './header.component.html',
  styleUrls: [ './header.component.css' ]
})
export class HeaderComponent  {

  logoEmpresa = `https://i.ibb.co/r4NNfmh/Ativo-1.png`;
  altLogoEmpresa = `Empresa ABC`;
}
