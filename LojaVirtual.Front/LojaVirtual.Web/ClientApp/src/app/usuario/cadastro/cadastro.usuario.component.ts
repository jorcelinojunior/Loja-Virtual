import { Component, OnInit } from "@angular/core";
import { Usuario } from "../../Model/usuario";
import { UsuarioServico } from "../../servicos/usuario/usuario.servico";

@Component({
    selector: "cadastro-usuario",
    templateUrl: "./cadastro.usuario.component.html",
    styleUrls: ["./cadastro.usuario.component.css"]
})

export class CadastroUsuarioComponent implements OnInit {
    public usuario: Usuario;

    constructor(private usuarioServico: UsuarioServico) {

    }

    ngOnInit(): void {
        this.usuario = new Usuario();
    }

    public cadastrar() {
        alert("Nome: " + this.usuario.nome + "\nSobrenome: " + this.usuario.sobreNome + "\nEmail: " + this.usuario.email + "\nSenha: " + this.usuario.senha);
        //this.usuarioServico.cadastrarUSuario(this.usuario)
        //    .subscribe(
        //        usuarioJson => {
                    
        //        },
        //        err => {

        //        }
        //    );
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
