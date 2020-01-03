import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  {
    path: 'dashboard/:name',
    loadChildren: () => import('./dashboard/dashboard.module').then( m => m.DashboardPageModule)
  },
  {
    path: 'products',
    loadChildren: () => import('./products/products.module').then( m => m.ProductsPageModule),
  },
  {
    path: 'price-list',
    loadChildren: () => import('./price-list/price-list.module').then( m => m.PriceListPageModule)
  },
 /* {
    path: 'all-products',
    children:[
      {
        path:'',
        loadChildren: () => import('./all-products/all-products.module').then( m => m.AllProductsPageModule)
      },
      {
        path:'productDetail/:productId',
        loadChildren: () => import('./product-details/product-details.module').then( m => m.ProductDetailsPageModule)

      }
    ]
    
  },*/
  {
    path: 'all-products',
    loadChildren: () => import('./all-products/all-products.module').then( m => m.AllProductsPageModule)
  },
  {
    path:'productDetail/:productId/:product',
    loadChildren: () => import('./product-details/product-details.module').then( m => m.ProductDetailsPageModule)

  },
  {
    path:'productDetail1/:productId/:vehicleId/:companyId/:duty/:company/:product',
    loadChildren: () => import('./product-details/product-details.module').then( m => m.ProductDetailsPageModule)

  },
  /*{
    path: 'company',
    children:[
      {
        path:'',
        loadChildren: () => import('./company/company.module').then( m => m.CompanyPageModule)
      },
      {
        path: ':companyId',
        children:[
                  {
                    path:'',
                    loadChildren: () => import('./vehicle/vehicle.module').then( m => m.VehiclePageModule)
                  },
                  {
                    path:':vehicleId',
                    children:[
                      {
                        path:'',
                        loadChildren: () => import('./product-by-vehicle/product-by-vehicle.module').then( m => m.ProductByVehiclePageModule)
                      },
                      {
                        path:':productId',
                        loadChildren: () => import('./product-details/product-details.module').then( m => m.ProductDetailsPageModule)

                      }
                    ]
                   
                  }
        ]
        
      }
    ]
    
  },*/
  {
    path: 'company/:company',
    loadChildren: () => import('./company/company.module').then( m => m.CompanyPageModule)
  },
 
  {
    path: 'vehicle/:companyId/:company',
    loadChildren: () => import('./vehicle/vehicle.module').then( m => m.VehiclePageModule)
  },
  {
    path:'productByVehicle/:vehicleId/:companyId/:duty/:company/:product',
    loadChildren: () => import('./product-by-vehicle/product-by-vehicle.module').then( m => m.ProductByVehiclePageModule)

  },
  // {
  //   path: 'company1/:company',
  //   children:[
  //     {
  //       path:'',
  //       loadChildren: () => import('./company/company.module').then( m => m.CompanyPageModule)
  //     },
  //     {
  //       path: ':companyId/:company',
  //       children:[
  //                 {
  //                   path:'',
  //                   loadChildren: () => import('./vehicle/vehicle.module').then( m => m.VehiclePageModule)
  //                 },
  //                 {
  //                   path:':vehicleId',
                    
  //                       loadChildren: () => import('./pricelist-by-vehicle/pricelist-by-vehicle.module').then( m => m.PricelistByVehiclePageModule)

  //                 }
  //       ]
        
  //     }
  //   ]
    
  // },
  {
    path: 'company1/:company',
    loadChildren: () => import('./company/company.module').then( m => m.CompanyPageModule)

  },
  {
    path:'pricelistByVehicle/:vehicleId/:companyId/:company',
    loadChildren: () => import('./pricelist-by-vehicle/pricelist-by-vehicle.module').then( m => m.PricelistByVehiclePageModule)

  },
  {
    path: 'pricelist-all-product',
    loadChildren: () => import('./pricelist-all-product/pricelist-all-product.module').then( m => m.PricelistAllProductPageModule)
  },
  {
    path: 'searchVehicle/:vehicleId/:companyId/:type',
    loadChildren: () => import('./search-vehicle/search-vehicle.module').then( m => m.SearchVehiclePageModule)
  },
  {
    path: 'searchCompany/:companyId',
    loadChildren: () => import('./search-company/search-company.module').then( m => m.SearchCompanyPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
