import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{

  products!:any;
  constructor(private api: ApiService, private route:ActivatedRoute){}

  ngOnInit(): void {
    this.route.params.subscribe(params =>{
      if(params.searchTerm)
      this.api.getProduct().subscribe(res => {
          this.products = res.filter((product: any) => product.name.toLowerCase().includes(params.searchTerm.toLowerCase()));
    })
    else
    this.products = this.getAllProducts();
  })

  }

  getAllProducts(){
    this.api.getProduct().subscribe(res=>{
      this.products = res;
    })
  }
}
