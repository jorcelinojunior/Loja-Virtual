import { Component, OnInit } from "@angular/core";
import { Produto } from "src/app/Model/produto";
import { ProdutoServico } from "src/app/servicos/produto/produto.servico";

@Component({
  selector: "pesquisa-produto",
  templateUrl: "./pesquisa.produto.component.html"
})
export class PesquisaProdutoComponent implements OnInit {
  public produtos: Produto[];

  ngOnInit(): void {}

  constructor(private produtoServico: ProdutoServico) {
    this.produtoServico.obterTodosProdutos()
      .subscribe(
        produtos => {
          this.produtos = produtos;
        },
        err => {
          console.log(err.error);
        }
      );
  }
}
