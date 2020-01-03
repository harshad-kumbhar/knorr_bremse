import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras, ActivatedRoute } from '@angular/router';
import {ServiceService} from '../service.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-company',
  templateUrl: './company.page.html',
  styleUrls: ['./company.page.scss'],
})
export class CompanyPage implements OnInit {
  company:any;
  companyId:any;
  constructor(private route: Router,public router:ActivatedRoute, public navCtrl: NavController, public restProvider: ServiceService) { 
    this.getCompany();
  }

  ngOnInit() {
    this.router.paramMap.subscribe(paramMap => {
      if(!paramMap.has('company')){
        return;
      }
      this.companyId = paramMap.get('company');
      console.log('comp',this.companyId);
    })
}
  getCompany()
  {
     this.restProvider.getCompany()
     .then(data=>{
       this.company=data;
       console.log(this.company);
     });
  }
  goback()
  {
    if(this.companyId==1)
    {
      this.route.navigate(['/products']);
    }
    else{
      this.route.navigate(['/price-list'])
    }
    
  }
}
