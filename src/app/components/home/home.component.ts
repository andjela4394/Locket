import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{

  products!:any;
  constructor(private api: ApiService){}

  ngOnInit(): void {
    this.getAllProducts();
  }

  getAllProducts(){
    this.api.getProduct().subscribe(res=>{
      this.products = res;
    })
  }
}
