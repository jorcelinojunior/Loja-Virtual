import { Component } from '@angular/core';
import { Usuario } from 'src/app/Model/usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
  public usuario;
  public usuarioAutenticado: boolean;

  constructor() {
    this.usuario            = new Usuario();
    this.usuarioAutenticado = false;
  }

  entrar(): void {
    if (this.usuario.email === 'jorcelino@live.com' && this.usuario.senha === '123'){
      this.usuarioAutenticado = true;
    }
    console.log('email: ' + this.usuario.email + ' - senha:' + this.usuario.senha);
  }

  on_keypress(event: any): void {
    console.log('email: ' + this.usuario.email + ' - senha:' + this.usuario.senha);
  }



}
