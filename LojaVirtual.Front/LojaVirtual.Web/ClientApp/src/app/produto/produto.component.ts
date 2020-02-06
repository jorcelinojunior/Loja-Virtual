import { Component } from "@angular/core";

@Component({
  selector: 'app-produto',
  template: '<html><body> {{ obterNome() }} </body></html>'
})

export class ProdutoComponent { // Padrão adotado por convenção de PascalCase
  public nome: string;
  public liberadoParaVenda: boolean; // Padrão adotado por convenção de camelCase

  public obterNome(): string {
    // return this.nome;
    return 'Samsung';
  }
}
