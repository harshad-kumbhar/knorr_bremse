 import { Component, OnInit, ViewChild, Renderer, ElementRef,Input } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss'],
})
export class AccordionComponent implements OnInit {
  accordionExapanded = true;
  products:any;
    product_types:any;
  @ViewChild('cc', {static: true}) cardContent: any;
  @Input ('title') title:string;
  
  constructor(public renderer: Renderer, public restProvider: ServiceService) {
    
   }

  ngOnInit() {
    this.renderer.setElementStyle(this.cardContent.el, "max-height", "0px");
     this.renderer.setElementStyle(this.cardContent.el, "padding", "0px 16px");
     this.getProductsByTypes();
     this.getProductTypes();

  }
  
  toggleAccordion() {
    if (this.accordionExapanded) {
     this.renderer.setElementStyle(this.cardContent.el, "max-height", "500px");
     this.renderer.setElementStyle(this.cardContent.el, "padding", "13px 16px");
​
    } else {
     this.renderer.setElementStyle(this.cardContent.el, "max-height", "0px");
     this.renderer.setElementStyle(this.cardContent.el, "padding", "0px 16px");
      
​
    }
    this.accordionExapanded = !this.accordionExapanded;
 
 }

 getProductTypes()
 {
   this.restProvider.getProductType()
     .then(data=>{
       this.product_types=data; 
       console.log("types",this.product_types);
     });    

 }

 getProductsByTypes()
 {
   this.restProvider.getProductsByType(this.title)
     .then(data=>{
       this.products=data; 
       console.log("hhhh",this.products);
     });      
 }
}
