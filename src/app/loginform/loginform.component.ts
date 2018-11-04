import { Component, OnInit } from '@angular/core';
import { DashboardComponent } from '../dashboard/dashboard.component';
import {Router} from '@angular/router';
import {UserService} from '../user.service';

@Component({
  selector: 'app-loginform',
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.css']
})
export class LoginformComponent implements OnInit {

  constructor(private routerr:Router,private user:UserService) { }
  
  ngOnInit() {
    
  }
  
  loginUser(eventclick){
    eventclick.preventDefault();
  
    var username=eventclick.target.elements[0].value;
    var password=eventclick.target.elements[1].value;
    console.log(username,password);
    
    var incorrect:boolean; // to pop up an incorrect password message
    if(username=="admin" && password=="admin"){
      this.user.setuserloggedin();
      
        this.routerr.navigate(['dashboard']);
       
    }
    else{
      incorrect=true;
    }

  }
}
