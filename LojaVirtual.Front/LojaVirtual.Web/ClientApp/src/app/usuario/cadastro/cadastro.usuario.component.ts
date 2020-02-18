﻿import { Component, OnInit } from "@angular/core";
import { Usuario } from "../../Model/usuario";
import { UsuarioServico } from "../../servicos/usuario/usuario.servico";

@Component({
    selector: "cadastro-usuario",
    templateUrl: "./cadastro.usuario.component.html",
    styleUrls: ["./cadastro.usuario.component.css"]
})

export class CadastroUsuarioComponent implements OnInit {
    public usuario: Usuario;
    public ativar_spinner: boolean;
    public mensagem: string;
    public usuarioCadastrado: boolean;

    constructor(private usuarioServico: UsuarioServico) {

    }

    ngOnInit(): void {
        this.usuario = new Usuario();
    }

    public cadastrar() {
        this.ativar_spinner = true;

        this.usuarioServico.cadastrarUsuario(this.usuario)
            .subscribe(
                usuarioJson => {
                    this.ativar_spinner = false;
                    this.usuarioCadastrado = true;
                    this.mensagem = "";
                },
                err => {
                    this.ativar_spinner = false;
                    this.usuarioCadastrado = false;
                    this.mensagem = err.error;
                }
            );
    }

    public formIsValid() {
        if (this.usuario.nome == null || this.usuario.nome == "")
            return false;

        if (this.usuario.sobreNome == null || this.usuario.sobreNome == "")
            return false;

        if (this.usuario.email == null || this.usuario.email == "")
            return false;

        if (this.usuario.senha == null || this.usuario.senha == "")
            return false;

        return true;
    }
}
