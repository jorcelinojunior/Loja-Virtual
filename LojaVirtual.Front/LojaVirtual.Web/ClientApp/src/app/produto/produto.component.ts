import { Component, OnInit } from '@angular/core';
import { ProdutoServico } from '../servicos/produto/produto.servico';
import { Produto } from '../Model/produto';
import { Router } from '@angular/router';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent implements OnInit {
  // Padrão adotado por convenção de PascalCase
  public ativar_spinner: boolean;
  public produto: Produto;
  public arquivoSelecionado: File;
  public mensagem: string;
  public cadastrarAtualizar: string ;

  constructor(private produtoServico: ProdutoServico, private router: Router) {}

  ngOnInit() {
    const produtoSession = sessionStorage.getItem('produtoSession');
    if (produtoSession) {
      this.produto = JSON.parse(produtoSession);
      this.cadastrarAtualizar = 'Salvar alterações';
    } else {
      this.produto = new Produto();
      this.cadastrarAtualizar = 'Cadastrar';
    }
  }

  public inputChange(files: FileList): void {
    this.ativar_spinner = true;
    this.arquivoSelecionado = files.item(0);
    this.produtoServico.enviarArquivo(this.arquivoSelecionado).subscribe(
      nomeArquivo => {
        this.mensagem = '';
        this.produto.nomeArquivo = nomeArquivo;
        this.ativar_spinner = false;
      },
      err => {
        this.mensagem = err.error;
        console.log(err.error);
        this.ativar_spinner = false;
      }
    );
  }

  public cadastrar(): void {
    this.ativarEspera();
    this.produtoServico.cadastrar(this.produto).subscribe(
      produtoJson => {
        this.desativarEspera();
        this.router.navigate(['/pesquisar-produto']);
      },
      err => {
        console.log(err.error);
        this.mensagem = err.error;
        this.desativarEspera();
      }
    );
  }

  public formIsValid(): boolean {
    // tslint:disable-next-line: triple-equals
    // tslint:disable-next-line: max-line-length
    if (this.produto.nome == null || this.produto.nome === ''
     || this.produto.descricao == null || this.produto.descricao === ''
     || this.produto.preco == null || this.produto.preco < 0) {
      return false;
    }
    return true;
  }

  public ativarEspera(): void {
    this.ativar_spinner = true;
  }
  public desativarEspera(): void {
    this.ativar_spinner = false;
  }
}
