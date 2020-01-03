import { Component, OnInit, Renderer, ViewChild, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {ServiceService} from '../service.service';
import { Product,Company,Vehicle } from './dashbord.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  CompanyData:any;
  VehicleData:any;
  ProductData:any;
  product:Product[];
  vehicle:Vehicle[];
  company:Company[];
  UserName:any;
  accordionExapanded = false;
  @ViewChild("cc",{static:true}) cardContent: any;
  

  icon: string = "arrow-forward";
  constructor(private route: Router,public restProvider: ServiceService,private router:ActivatedRoute,public renderer: Renderer) {
   
    this.getData();
    console.log("ggg",this.UserName);
   }

  ngOnInit() {
    this.router.paramMap.subscribe(paramMap => {
      if(!paramMap.has('name')){
        return;
      }
       this.UserName = paramMap.get('name');
      
    });
    this.renderer.setElementStyle(this.cardContent.el, "max-height", "0px");
    this.renderer.setElementStyle(this.cardContent.el, "padding", "0px 0px");
    console.log(this.UserName);
  }
  gotoProducts()
  {
    this.route.navigate(['/products']);
  }
  gotoPriccelist()
  {
    this.route.navigate(['/price-list']);
  }
 
  FilterData(ev:any)
  {
    
   //console.log('filter',this.product);
   this.initializaData();
    const val=ev.target.value;
    if(val && val.trim()!= '')
    {
      this.initializaData();
     
      this.product=this.product.filter((item)=>{
        return (item.name.toLowerCase().indexOf(val.toLowerCase())>-1);

      })
      this.company=this.company.filter((item)=>{
        return (item.name.toLowerCase().indexOf(val.toLowerCase())>-1);

      })
      this.vehicle=this.vehicle.filter((item)=>{
        return (item.name.toLowerCase().indexOf(val.toLowerCase())>-1);

      })
      
    }
  }
  getData()
  {
    this.restProvider.getAllProducts()
     .then(data=>{
      this.ProductData= data;
      console.log("productdata",this.ProductData);
     });
     this.restProvider.getAllVehicle()
     .then(data=>{
      this.VehicleData= data;

     });
     
     this.restProvider.getCompany()
     .then(data=>{
      this.CompanyData= data;
     });
    }

  initializaData()
  {
    this.product=this.ProductData; 
    this.company=this.CompanyData; 
    this.vehicle=this.VehicleData; 
  }
  
  toggleAccordion() {
    if (this.accordionExapanded) {
      this.renderer.setElementStyle(this.cardContent.el, "max-height", "0px");
      this.renderer.setElementStyle(this.cardContent.el, "padding", "0px 0px");
      
    } else {
      this.renderer.setElementStyle(this.cardContent.el, "max-height", "500px");
      this.renderer.setElementStyle(this.cardContent.el, "padding", "13px 16px");
    }
    this.accordionExapanded = !this.accordionExapanded;

  }
}
