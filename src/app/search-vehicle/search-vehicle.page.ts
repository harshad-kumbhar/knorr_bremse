import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {ServiceService} from '../service.service';
import { NavController } from '@ionic/angular';
import { Product,Company,Vehicle } from '../dashboard/dashbord.model';

@Component({
  selector: 'app-search-vehicle',
  templateUrl: './search-vehicle.page.html',
  styleUrls: ['./search-vehicle.page.scss'],
})
export class SearchVehiclePage implements OnInit {

  vehicles:any;
  duty:any;
  type:any;
  company:any;
  vehicleId:any;
  companyId:any;
  constructor(private route: Router,public navCtrl: NavController, public restProvider: ServiceService,public router:ActivatedRoute) {
    this.router.paramMap.subscribe(paramMap => {
      if(!paramMap.has('vehicleId')){
        return;
      }
       this.vehicleId= paramMap.get('vehicleId');
       this.companyId=paramMap.get('companyId');
       this.type=paramMap.get('type');
       console.log("duty",this.type);
       this.getVehicle();
       this.duty = this.type;

    });
   
  }

  ngOnInit() {
   
  }
  getVehicle()
  {
    this.restProvider.getVehicle(Number(this.vehicleId))
      .then(data=>{
        this.vehicles=data;
      });
      this.restProvider. getCompanyById(Number(this.companyId))
      .then(data=>{
        this.company=data;
      });
     
  }
  goback()
  {
    this.route.navigate(['/dashboard',''])
  }
  vehicleDuty(type:string)
  {
    this.restProvider.getVehicleByDuty(type,this.companyId)
      .then(data=>{
        this.vehicles=data;
      });
      
  }
  
}
