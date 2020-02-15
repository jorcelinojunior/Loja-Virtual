import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/Model/usuario';
import { Router, ActivatedRoute } from '@angular/router';
import { UsuarioServico } from '../../servicos/usuario/usuario.servico';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
    public usuario;
    public returnUrl: string;
    public mensagem: string;

    constructor(
        private router: Router,
        private activedRouter: ActivatedRoute,
        private usuarioServico: UsuarioServico) {

    }

    ngOnInit(): void {
        this.usuario = new Usuario();
        this.returnUrl = this.activedRouter.snapshot.queryParams['returnUrl'];
    }

    entrar(): void {
        this.usuarioServico.verificarUsuario(this.usuario)
            .subscribe(
                usuario_json => {
                    //executado caso não aconteça erro, usuário válido
                    
                    this.usuarioServico.usuario = usuario_json;

                    if(this.returnUrl == null)
                        this.router.navigate(['/']);
                    else
                        this.router.navigate([this.returnUrl]);
                },
                err => {
                    // executado caso ocorra erro, usuário/senha
                    console.log(err.error);

                    this.mensagem = err.error;

                }
            );


        //if (this.usuario.email === 'jorcelino@live.com' && this.usuario.senha === '123') {
        //  sessionStorage.setItem('usuario-autenticado', '1');
        //  this.router.navigate([this.returnUrl]);
        //}
    }

    on_keypress(event: any): void {
        console.log('email: ' + this.usuario.email + ' - senha:' + this.usuario.senha);
    }



}
