import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ResdataService } from 'src/app/services/resdata.service';
import {DisplayFlights} from './DisplayFlights';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'display-flights',
  templateUrl: './display-flights.component.html',
  styleUrls: ['./display-flights.component.css']
})
export class DisplayFlightsComponent implements OnInit {
data:any;
displayResponse:DisplayFlights;
  constructor(private router:Router,private service:ResdataService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    var id = Number.parseInt(this.route.snapshot.paramMap.get("id"));
    this.service.displayFlights(id).subscribe(res=>{
      console.log("successdata"+res);
      this.data = res;
      console.log(this.data.flight.operatingAirlines);
      this.displayResponse=res;
    });
  }
  displayFlights(){
   var fdet:any=new Object();
  }
}
