import { Injectable, Inject, OnInit } from "@angular/core";
import { HttpHeaders, HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Produto } from "./../../Model/produto";

@Injectable({
    providedIn: 'root',
})
export class ProdutoServico implements OnInit {

    private baseUrl: string;
    private _produto: Produto;

    public produtos: Produto[];

    constructor(private http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
        this.baseUrl = "https://localhost:44321/";
    }

    ngOnInit(): void {
        this.produtos = [];
    }

    get headers(): HttpHeaders {
        return new HttpHeaders().set("content-type", "application/json");
    }

    public cadastrar(produto: Produto): Observable<Produto> {
        return this.http.post<Produto>(this.baseUrl + "api/produto/cadastrar", JSON.stringify(produto), { headers: this.headers });
    }

    public salvar(produto: Produto) {
        return this.http.post<Produto>(this.baseUrl + "api/produto/salvar", JSON.stringify(produto), { headers: this.headers });
    }

    public deletar(produto: Produto) {
        return this.http.post<Produto>(this.baseUrl + "api/produto/deletar", JSON.stringify(produto), { headers: this.headers });
    }


    public obterTodosProdutos(): Observable<Produto[]> {
        return this.http.get<Produto[]>(this.baseUrl + "api/produto");
    }

    public obterProduto(produtoId: number): Observable<Produto> {
        return this.http.get<Produto>(this.baseUrl + "api/produto/" + produtoId);
    }
    
    public enviarArquivo(arquivoSelecionado: File) : Observable<boolean>{
        const formData: FormData = new FormData();
        formData.append("arquivoEnviado", arquivoSelecionado, arquivoSelecionado.name);
        return this.http.post<boolean>(this.baseUrl + "api/produto/enviarArquivo", formData);
    }

}