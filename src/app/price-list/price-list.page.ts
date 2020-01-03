import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-price-list',
  templateUrl: './price-list.page.html',
  styleUrls: ['./price-list.page.scss'],
})
export class PriceListPage implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }
  gotoProductPriceList()
  {
    this.route.navigate(['/pricelist-all-product']);
  }
  gotoCompany()
  {
    this.route.navigate(['/company1',2]);
  }
  goback()
  {
    this.route.navigate(['/dashboard',''])
  }
}
