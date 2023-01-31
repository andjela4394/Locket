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
  private dbUsers = "http://localhost:3000/users";

  postProduct(data : any){
    return this.http.post<any>(this.dbUrl, data).pipe(map((res:any)=>{
      return res;
    }))
  }

  postUser(data : any){
    return this.http.post<any>(this.dbUsers, data).pipe(map((res:any)=>{
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
      this.http.get<Product[]>(this.dbUrl).pipe(map((res: Product[]) => {
        resolve(res);
      })).subscribe(
        error => {
          reject(error);
        }
      );
    });
  }

  updateProduct(data : any, id: number){
    return this.http.put<any>(this.dbUrl+"/"+id,data).pipe(map((res:any)=>{
      return res;
    }))
  }
  deleteProduct(id : number){
    return this.http.delete<any>(this.dbUrl+"/"+id).pipe(map((res:any)=>{
      return res;
    }))
  }

}
