import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {ServiceService} from '../service.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.page.html',
  styleUrls: ['./vehicle.page.scss'],
})
export class VehiclePage implements OnInit {
  vehicles:any;
  company:any;
  companyId:any;
  compId:any;
  duty:any;
  constructor(private route: Router,public navCtrl: NavController, public restProvider: ServiceService,public router:ActivatedRoute) {
    //this.getVehicle();
    this.duty = "Light Duty";
   }

  ngOnInit() {
    this.router.paramMap.subscribe(paramMap => {
      if(!paramMap.has('companyId')){
        return;
      }
      this.companyId = paramMap.get('companyId');
      this.compId = paramMap.get('company');
      this.vehicleDuty(this.duty);
      this.restProvider.getCompanyById(Number(this.companyId))
      .then(data=>{
        this.company=data;
        console.log(this.company);
      });
    });
    
   
  }
  goback()
  {
    if(this.compId==1)
    {
      this.route.navigate(['/company',this.compId]);
    }
    else if(this.compId==2)
    {
      this.route.navigate(['/company1',this.compId]);
    }
    else
    {
        this.route.navigate(['/searchCompany',this.companyId]);
    }
    
  }
  vehicleDuty(type:string)
  {
    this.restProvider.getVehicleByDuty(type,this.companyId)
      .then(data=>{
        this.vehicles=data;
        console.log(this.vehicles);
      });
  }

  gotoNext(i:number)
  {
      const id=this.vehicles[i].id;
      const duty=this.vehicles[i].type;
      if(this.compId==2)
      {
        this.route.navigate(['/pricelistByVehicle',id,this.companyId,this.compId]);

      }
      else
      {
        this.route.navigate(['/productByVehicle',id,this.companyId,duty,this.compId,2]);

      }
  }
}
