import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-pricelist-by-vehicle',
  templateUrl: './pricelist-by-vehicle.page.html',
  styleUrls: ['./pricelist-by-vehicle.page.scss'],
})
export class PricelistByVehiclePage implements OnInit {
  products:any;
  vehicle:any;
  companyId:any;
  vehicleId:any;
  compId:any;
  constructor(private route: Router,public navCtrl: NavController, public restProvider: ServiceService,public router:ActivatedRoute) { 
    
  }

  ngOnInit() {
    this.router.paramMap.subscribe(paramMap => {
      if(!paramMap.has('vehicleId')){
        return;
      }
      this.vehicleId = paramMap.get('vehicleId');
      this.companyId = paramMap.get('companyId');
      this.compId = paramMap.get('company');
      this.restProvider.getProductByVehicle(Number(this.vehicleId))
      .then(data=>{
        this.products=data;
        console.log(this.products);
      });

      this.restProvider.getVehicle(Number(this.vehicleId))
      .then(data=>{
        this.vehicle=data;
        console.log(this.vehicle);
      });
    });
  }
  
  goback()
  {
    this.route.navigate(['/vehicle',this.companyId,this.compId]);

  }

}
