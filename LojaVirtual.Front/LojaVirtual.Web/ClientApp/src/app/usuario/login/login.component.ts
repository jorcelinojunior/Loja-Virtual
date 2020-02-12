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
  public usuarios = ['usuario1', 'usuario2', 'usuario3', 'usuario4', 'usuario5'];

  constructor() {
    this.usuario            = new Usuario();
    this.usuarioAutenticado = false;
  }

  public email       = '';
  public senha       = '';
  public logoEmpresa = './../../../assets/images/logo-empresa.png';
  public title       = 'Logo Padrão da Empresa';


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
