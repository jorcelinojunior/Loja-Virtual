import { Component, OnInit } from "@angular/core";
import { ProdutoServico } from "../servicos/produto/produto.servico";
import { Produto } from "../Model/produto";

@Component({
    selector: 'app-produto',
    templateUrl: './produto.component.html',
    styleUrls: ['./produto.component.css']
})

export class ProdutoComponent implements OnInit { // Padrão adotado por convenção de PascalCase
    public produto: Produto;
    private ativar_spinner: boolean;
    public arquivoSelecionado: File;

    constructor(private produtoServico: ProdutoServico) {

    }

    ngOnInit() {
        this.produto = new Produto();
    }

    public inputChange(files: FileList) {
        this.ativar_spinner     = true;
        this.arquivoSelecionado = files.item(0);
        this.produtoServico.enviarArquivo(this.arquivoSelecionado)
            .subscribe(
                nomeArquivo => {
                    this.produto.nomeArquivo = nomeArquivo;
                    console.log(nomeArquivo);
                    this.ativar_spinner = false;
                },
                err => {
                    console.log(err.error);
                    this.ativar_spinner = false;
                }
            );
    }

    public cadastrar() {
        this.ativar_spinner = true;
        this.produtoServico.cadastrar(this.produto)
            .subscribe(
                produtoJson => {
                    this.ativar_spinner = false;
                },
                err => {
                    this.ativar_spinner = false;
                }
            );
    }

    public formIsValid() {
        if (this.produto.nome == null || this.produto.nome == "")
            return false;

        if (this.produto.descricao == null || this.produto.descricao == "")
            return false;

        if (this.produto.preco == null || this.produto.preco < 0)
            return false;

        return true;
    }
}
