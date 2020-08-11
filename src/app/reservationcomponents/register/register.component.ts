import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
  import {ResdataService} from '../../services/resdata.service';
  import {Router} from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  data:any;
  firstName:any;
  lastName:any;
  email:any;
  password:any;

  constructor(private route:ActivatedRoute,private service:ResdataService, private router:Router) { }


  ngOnInit(): void {
  }
  
  register(firstName,lastName,email,password){
    console.log("--------"+firstName,lastName,email,password);
     var registerRequest: any=new Object();
    registerRequest.firstName=firstName;
    registerRequest.lastName=lastName;
    registerRequest.email=email;
    registerRequest.password=password;
    console.log("register object ---"+registerRequest);
    this.service.register(registerRequest).subscribe(res=>{
      //console.log(res);
      console.log("posted succcesfully"); 
    })

  this.router.navigate(['/login']);
  }

}
