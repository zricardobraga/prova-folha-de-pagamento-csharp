import { Funcionario } from './../models/funcionario';
import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class FuncionarioService {

private baseURL = "http://localhost:5000/api/funcionario";

constructor(private http: HttpClient) { }

listar(): Observable<Funcionario[]> {
    return this.http.get<Funcionario[]>(`${this.baseURL}/listar`);
    }

cadastrar(funcionario: Funcionario): Observable<Funcionario> {
    return this.http.post<Funcionario>(`${this.baseURL}/cadastrar`, funcionario);
    }
}
