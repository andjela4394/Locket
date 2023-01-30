import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Product } from '../shared/models/Product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { 
  }

  private dbUrl = "http://localhost:3000/products";

  postProduct(data : any){
    return this.http.post<any>("http://localhost:3000/products", data).pipe(map((res:any)=>{
      return res;
    }))
  }

  getProduct(): Observable<Product[]>{
    return this.http.get<Product[]>(this.dbUrl);
  }

  getProductById(id: number): Observable<Product> {
    const url = `${this.dbUrl}/${id}`
    return this.http.get<Product>(url)
    }
    

  getSearchProduct(): Promise<Product[]> {
    return new Promise((resolve, reject) => {
      this.http.get<Product[]>("http://localhost:3000/products").pipe(map((res: Product[]) => {
        resolve(res);
      })).subscribe(
        error => {
          reject(error);
        }
      );
    });
  }

  updateProduct(data : any, id: number){
    return this.http.put<any>("http://localhost:3000/products"+"/"+id,data).pipe(map((res:any)=>{
      return res;
    }))
  }
  deleteProduct(id : number){
    return this.http.delete<any>("http://localhost:3000/products"+"/"+id).pipe(map((res:any)=>{
      return res;
    }))
  }

}
