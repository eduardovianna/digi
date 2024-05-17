import { HttpClient } from '@angular/common/http';
import { Injectable, isDevMode } from '@angular/core';
import { Observable, catchError, map, throwError } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  apiPath: string = environment.apiPath;
  //Set port depending of 
  port: number = environment.port;

  fullPath = `${this.apiPath}${isDevMode() ? this.port : ''}`;

  constructor(private http: HttpClient) {}

  //Leitura de endpoint para obtenção da lista de produtos
  getAll() : Observable<any[]> {
    return this.http.get<any[]>(`${this.fullPath}/api/product/getAll`)
    .pipe(
      map(x => x),
      catchError((err: any) => {
        console.error(err.message);
        return throwError(() => 'Ocorreu um erro ao processar sua solicitação!');
      })
    );
  }
}
