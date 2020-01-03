import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { resolve } from 'url';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  apiurl='http://localhost:64660/api';
  //id=6;
  constructor(public http:HttpClient,private toastController: ToastController) {
  
    console.log('Hello Rest Provider');
    
  
   }
   getAllProducts()
   {
    return new Promise(resolve=>{
      this.http.get(this.apiurl+'/products').subscribe(data=>{
        resolve(data);
      },err=>{
        console.log(err);

      });
     });
   }

   getCompany()
   {
    return new Promise(resolve=>{
      this.http.get(this.apiurl+'/companies').subscribe(data=>{
        resolve(data);
      },err=>{
        console.log(err);

      });
     });
   }

   getCompanyById(companyid:number)
   {
    return new Promise(resolve=>{
      this.http.get(this.apiurl+'/companies?id='+companyid+'').subscribe(data=>{
        resolve(data);
      },err=>{
        console.log(err);

      });
     });
   }


   getVehicle(vehicleid:number)
   {
    return new Promise(resolve=>{
      this.http.get(this.apiurl+'/vehicles?id='+vehicleid+'').subscribe(data=>{
        resolve(data);
      },err=>{
        console.log(err);

      });
     });
   }
   getAllVehicle()
   {
    return new Promise(resolve=>{
      this.http.get(this.apiurl+'/vehicles').subscribe(data=>{
        resolve(data);
      },err=>{
        console.log(err);

      });
     });
   }

   getVehicleByCompany(compid:number)
   {
    return new Promise(resolve=>{
      this.http.get(this.apiurl+'/vehiclesByCompany?id='+compid+'').subscribe(data=>{
        resolve(data);
      },err=>{
        console.log(err);

      });
     });
   }

   getProductByVehicle(vehicleid:number)
   {
    return new Promise(resolve=>{
      this.http.get(this.apiurl+'/productsByVehicle?id='+vehicleid+'').subscribe(data=>{
        resolve(data);
      },err=>{
        console.log(err);

      });
     });
   }

   getProductDetails(productId:number)
   {
    return new Promise(resolve=>{
      this.http.get(this.apiurl+'/products?id='+productId+'').subscribe(data=>{
        resolve(data);
      },err=>{
        console.log(err);

      });
     });
   }
   getVehicleByDuty(type:String,compId:Number)
   {
    return new Promise(resolve=>{
      this.http.get(this.apiurl+'/VehiclesByDuty?duty='+type+'&compId='+compId+'').subscribe(data=>{
        resolve(data);
      },err=>{
        console.log(err);

      });
     });
   }
   saveData1(dataToSend)
    {
     
      return this.http.post(this.apiurl+'/users',dataToSend,{headers:new HttpHeaders({"Content-Type":"application/json"})});
    }
    async successToast(message:any) {
      const toast = await this.toastController.create({
        message: message,
        duration: 2000
      });
      toast.present();
    }
    async failureToast(message:any) {
      const toast = await this.toastController.create({
        message: message,
        duration: 2000
      });
      toast.present();
    }

    getProductType()
    {
      return new Promise(resolve=>{
        this.http.get(this.apiurl+'/productprice').subscribe(data=>{
          resolve(data);
        },err=>{
          console.log(err);
  
        });
       });
    }
    getProductsByType(type:string)
    {
      return new Promise(resolve=>{
        this.http.get(this.apiurl+'/productprice?type='+type+'').subscribe(data=>{
          resolve(data);
        },err=>{
          console.log(err);
  
        });
       });
    }
     
  }
