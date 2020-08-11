import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
  import {ResdataService} from '../../services/resdata.service';
  import {Router} from '@angular/router';
@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
   
  data:any;
  userName:any;
    password:any;

    static ngInjectableDef = undefined;

  constructor(private route:ActivatedRoute,private service:ResdataService, private router:Router) { }


  ngOnInit(): void {
  }
  
  login(userName,password){
    console.log("--------"+userName,password);
     var registerRequest: any=new Object();
    registerRequest.userName=userName;
    registerRequest.password=password;
    console.log("login object ---"+registerRequest);
    this.service.login(registerRequest).subscribe(res=>{
      //console.log(res);
      console.log("login succcesfully"); 
    })

  this.router.navigate(['/find-flights']);
  }

}
