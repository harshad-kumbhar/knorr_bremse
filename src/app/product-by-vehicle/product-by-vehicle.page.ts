import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {ServiceService} from '../service.service';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-product-by-vehicle',
  templateUrl: './product-by-vehicle.page.html',
  styleUrls: ['./product-by-vehicle.page.scss'],
})
export class ProductByVehiclePage implements OnInit {
  products:any;
  vehicleId:any;
  companyId:any;
  compId:any;
  duty:any;
  product:any;
  constructor(private route: Router,public navCtrl: NavController, public restProvider: ServiceService,public router:ActivatedRoute) { 
    //this.getProductByVehicle();
  }

  ngOnInit() {
    this.router.paramMap.subscribe(paramMap => {
      if(!paramMap.has('vehicleId')){
        return;
      }
      this.vehicleId = paramMap.get('vehicleId');
      this.companyId = paramMap.get('companyId');
      this.compId = paramMap.get('company');
      this.duty = paramMap.get('duty');
      this.product = paramMap.get('product');
      this.restProvider.getProductByVehicle(Number(this.vehicleId))
      .then(data=>{
        this.products=data;
        console.log(this.products);
      });
     
    });
  }
  gotoNext(i:number)
  {
    const productId=this.products[i].id;
    this.route.navigate(['/productDetail1',productId,this.vehicleId,this.companyId,this.duty,this.compId,this.product]);

  }
  goback()
  {
    if(this.compId==1)
    {
      this.route.navigate(['/vehicle',this.companyId,this.compId]);
    }
    else
    {
      this.route.navigate(['/searchVehicle',this.vehicleId,this.companyId,this.duty]);

    }
  }
}
