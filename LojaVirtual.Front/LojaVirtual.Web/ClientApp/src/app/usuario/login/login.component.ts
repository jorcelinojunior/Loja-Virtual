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
    public ativar_spinner: boolean;

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
        this.ativar_spinner = true;

        this.usuarioServico.verificarUsuario(this.usuario)
            .subscribe(
                usuario_json => {
                    //executado caso não aconteça erro, usuário válido
                    this.ativar_spinner = false;
                    this.usuarioServico.usuario = usuario_json;

                    if(this.returnUrl == null)
                        this.router.navigate(['/']);
                    else
                        this.router.navigate([this.returnUrl]);

                },
                err => {
                    // executado caso ocorra erro, usuário/senha
                    this.ativar_spinner = false;
                    this.mensagem = err.error;
                }
            );
    }

    on_keypress(event: any): void {
        console.log('email: ' + this.usuario.email + ' - senha:' + this.usuario.senha);
    }



}
