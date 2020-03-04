import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from '../../Model/usuario';
import { BaseUrlServico } from '../base-url/base-url.servico';

@Injectable({
    providedIn: 'root'
})
export class UsuarioServico {
    private _baseUrl: string;
    private _usuario: Usuario;

    constructor(private http: HttpClient, private baseUrl: BaseUrlServico) {
        this._baseUrl = baseUrl.hostName;
    }

    set usuario(usuario: Usuario) {
        sessionStorage.setItem('usuario-autenticado', JSON.stringify(usuario));
        this._usuario = usuario;
    }

    get usuario(): Usuario {
        const usuario_json = sessionStorage.getItem('usuario-autenticado');
        this._usuario = JSON.parse(usuario_json);
        return this._usuario;
    }

    get headers(): HttpHeaders {
        return new HttpHeaders().set('content-type', 'application/json');
    }

    public usuario_autenticado(): boolean {
        return this._usuario != null && this._usuario.email != '' && this._usuario.senha != '';
    }

    public usuario_administrador(): boolean {
        return this.usuario_autenticado() && this._usuario.ehAdministrador;
    }

    public limpar_sessao() {
        sessionStorage.setItem('usuario-autenticado', '');
        this._usuario = null;
    }

    public verificarUsuario(usuario: Usuario): Observable<Usuario> {
        return this.http.post<Usuario>(this._baseUrl + 'api/usuario/verificarUsuario', JSON.stringify(usuario), { headers: this.headers });
    }

    public cadastrarUsuario(usuario: Usuario): Observable<Usuario> {
        return this.http.post<Usuario>(this._baseUrl + 'api/usuario', JSON.stringify(usuario), { headers: this.headers });
    }

}
