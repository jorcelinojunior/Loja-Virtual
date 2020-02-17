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

    constructor(private produtoServico: ProdutoServico) {

    }

    ngOnInit() {
        this.produto = new Produto();
    }

    public cadastrar() {
        this.produtoServico.cadastrar(this.produto)
            .subscribe(
                produtoJson => {
                    console.log(produtoJson);

                },
                err => {
                    console.log(err.error);
                }
            );
    }
}
