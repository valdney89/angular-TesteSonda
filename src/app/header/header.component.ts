import { Component, Input } from '@angular/core';

@Component({
  selector: 'my-header',
  templateUrl: './header.component.html',
  styleUrls: [ './header.component.css' ]
})
export class HeaderComponent  {

  logoEmpresa = `https://cdn.jsdelivr.net/gh/valdney89/angular-TesteSonda@master/src/assets/imgs/Ativo%201.png`;
  altLogoEmpresa = `Empresa ABC`;
}
