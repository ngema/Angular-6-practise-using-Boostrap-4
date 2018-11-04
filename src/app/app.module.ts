import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
//import { HeaderComponent } from './header/header.component';
import { LoginformComponent } from './loginform/loginform.component';
//import { FooterComponent } from './footer/footer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule,Routes} from '@angular/router';
import {UserService} from './user.service';
 import{AuthguardGuard} from './authguard.guard';
const dashboardRoutes:Routes= [
  {path:'',component:LoginformComponent},
  { path:'dashboard',
    canActivate:[AuthguardGuard]
  ,component:DashboardComponent}]; 
@NgModule({
  declarations: [
    AppComponent,
   
    LoginformComponent,
    
    DashboardComponent
  ],
  imports: [
    RouterModule.forRoot(dashboardRoutes),
    BrowserModule,
    NgbModule.forRoot()
  ],
  providers: [UserService,AuthguardGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
