import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { ResdataService } from 'src/app/services/resdata.service';
@Component({
  selector: 'find-flights',
  templateUrl: './find-flights.component.html',
  styleUrls: ['./find-flights.component.css']
})
export class FindFlightsComponent implements OnInit {

  from:any;
  departureDate:any;
  to:any;
  constructor(private router:Router, private service:ResdataService) { }

  ngOnInit(): void {
  }

 find(from,to,departureDate){
   var registerRequest:any=new Object;
   registerRequest.from=from;
   registerRequest.to=to;
   registerRequest.departureDate=departureDate;
   this.service.find(registerRequest).subscribe(res=>{
         console.log("done founddd");

        } )
        this.router.navigate(['/display-flights',id]);


 }

}
