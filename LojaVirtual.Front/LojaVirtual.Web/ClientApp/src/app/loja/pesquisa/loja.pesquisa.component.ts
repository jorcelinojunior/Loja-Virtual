import { Component, OnInit } from "@angular/core";
import { Produto } from "src/app/Model/produto";
import { ProdutoServico } from "src/app/servicos/produto/produto.servico";

@Component({
  selector: "app-loja",
  templateUrl: "./loja.pesquisa.component.html",
  styleUrls: ["./loja.pesquisa.component.css"]
})
export class LojaPesquisaComponent implements OnInit {
  public produtos : Produto[];
  ngOnInit(): void {}
  constructor(private produtoServico: ProdutoServico) {
    this.produtoServico.obterTodosProdutos()
      .subscribe(
        prodReturned => {
          this.produtos = prodReturned;
          console.log(prodReturned);
        },
        err => {
          console.log(err.error);
        }
      )
  }
}
