import { Component, OnInit } from '@angular/core';
import {ServiceService} from '../service.service';
import { NavController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.page.html',
  styleUrls: ['./product-details.page.scss'],
})
export class ProductDetailsPage implements OnInit {
  products:any;
  product:any;
  compId:any;
  companyd:any;
  duty:any;
  vehicleId:any;

  constructor(public navCtrl: NavController,public route:Router, public restProvider: ServiceService,public router:ActivatedRoute) {
 
   }

  ngOnInit() {
    this.router.paramMap.subscribe(paramMap => {
      if(!paramMap.has('productId')){
        return;
      }
      const productId = paramMap.get('productId');
      this.vehicleId = paramMap.get('vehicleId');
      this.companyd = paramMap.get('companyId');
      this.duty = paramMap.get('duty');
      this.product = paramMap.get('product');
      this.compId = paramMap.get('company');

      console.log(productId);
      this.restProvider. getProductDetails(Number(productId))
      .then(data=>{
        this.products=data;
        console.log(this.products);
      });
     
    });
  }

  goback()
  {
    if(this.product==1)
    {
      this.route.navigate(['/all-products']);
    }
    else if(this.product==2)
    {
      this.route.navigate(['/productByVehicle',this.vehicleId,this.companyd,this.duty,this.compId,this.product]);
    }
    else if(this.product==3)
    {
      this.route.navigate(['/dashboard','']);
    }
  }
}
//:vehicleId/:companyId/:duty/:company/:product