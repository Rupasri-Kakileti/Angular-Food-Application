import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FoodstuffsComponent } from './Foodstuffs/foodstuffs.component';
import { GroceriesComponent } from './groceries/groceries.component';
import { FoodstuffsDetailComponent } from './Foodstuffs/foodstuffs-detail/foodstuffs-detail.component';
import { FoodstuffsListComponent } from './Foodstuffs/foodstuffs-list/foodstuffs-list.component';
import { FoodstuffsItemComponent } from './Foodstuffs/foodstuffs-list/foodstuffs-item/foodstuffs-item.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
   /**{ path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },**/
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    {path: 'foodstuffs',component:FoodstuffsComponent,canActivate: [AuthGuard]},
    {path: 'foodstuffs/:type', component: FoodstuffsItemComponent,canActivate: [AuthGuard] },
    {path:'groceries',component:GroceriesComponent, canActivate: [AuthGuard]},
    {path: 'cart',component:FoodstuffsDetailComponent,canActivate: [AuthGuard]},

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [FoodstuffsComponent,
                                  GroceriesComponent,
                                  FoodstuffsDetailComponent,
                                  FoodstuffsListComponent,
                                  FoodstuffsItemComponent,
                                  HeaderComponent,
                                  LoginComponent
]