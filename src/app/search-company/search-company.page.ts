import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras, ActivatedRoute } from '@angular/router';
import {ServiceService} from '../service.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-search-company',
  templateUrl: './search-company.page.html',
  styleUrls: ['./search-company.page.scss'],
})
export class SearchCompanyPage implements OnInit {

  company:any;
  
  constructor(private route: Router,public navCtrl: NavController, public restProvider: ServiceService,public router:ActivatedRoute) { 
  }

  ngOnInit() {
    this.router.paramMap.subscribe(paramMap => {
      if(!paramMap.has('companyId')){
        return;
      }
      const companyId= paramMap.get('companyId');
      this.restProvider. getCompanyById(Number(companyId))
      .then(data=>{
        this.company=data;
        console.log(this.company);
      });
    });
  }
 
  goback()
  {
    this.route.navigate(['/dashboard',''])
  }

}
