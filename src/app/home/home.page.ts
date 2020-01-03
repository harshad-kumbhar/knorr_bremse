import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router, NavigationExtras } from '@angular/router';
import {ServiceService } from '../service.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  splash = true;
  dataFromService:any;  
  name:any;
  email:any;
  type:any;
  //tabBarElement : any;
  constructor(private route: Router,public service:ServiceService,public navcntrl:NavController) { }

  ionViewDidLoad() {
    setTimeout(() => this.splash = false, 3000);
  }
  ngOnInit()
  {
    this.ionViewDidLoad();
    
  }
  saveData()
  {
    var dataToSend={name:this.name,email:this.email,type:this.type};
    this.service.saveData1(dataToSend).subscribe((dataReturnFromService)=>{
      this.dataFromService=this.dataFromService;
      this.service.successToast("Success");
    },
    err=>{
      this.service.failureToast("User already exist");
    })
  }
 
 
}
