import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioServico } from '../servicos/usuario/usuario.servico';
import { Usuario } from '../Model/usuario';

@Component({
    selector: 'app-nav-menu',
    templateUrl: './nav-menu.component.html',
    styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent {
    public isExpanded = false;
    //public usuario: string = "junior";

    constructor(private router: Router, private usuarioServico: UsuarioServico) {

    }

    collapse() {
        this.isExpanded = false;
    }

    toggle() {
        this.isExpanded = !this.isExpanded;
    }

    public usuarioLogado(): boolean {
        return this.usuarioServico.usuario_autenticado();
    }

    sair() {
        this.usuarioServico.limpar_sessao();
        this.router.navigate(['/entrar']);
    }

    get usuario()  {
        return this.usuarioServico.usuario;
    }
}
