
  import { Component, OnInit } from '@angular/core';
  import {ActivatedRoute} from '@angular/router';
  import {DataService} from '../../services/data.service';
  import {Reservation} from '././reservation';
  import {Router} from '@angular/router';
@Component({
  selector: 'app-checkin',
  templateUrl: './checkin.component.html',
  styleUrls: ['./checkin.component.css']
})
export class CheckinComponent implements OnInit {

  data:any;
  noOfBags:number;
  checkInResponse:Reservation;
  constructor(private route:ActivatedRoute,private service:DataService, private router:Router) { }

  ngOnInit(): void {
    var id = Number.parseInt(this.route.snapshot.paramMap.get("id"));
    this.service.getReservation(id).subscribe(res=>{
      console.log("successdata"+res);
      this.data = res;
      console.log(this.data.flight.operatingAirlines);
      this.checkInResponse=res;
      console.log("id---"+this.checkInResponse.id);
      console.log("checkedin---"+this.checkInResponse.checkedIn);
    });
  }



  checkin(noOfBags){
    var checkInRequest: any=new Object();
    checkInRequest.id=this.data.id;
    checkInRequest.checkedIn = true;
    checkInRequest.numberOfBags= noOfBags;
    this.service.checkin(checkInRequest).subscribe(res=>{
      this.data=res;
    })
  
  this.router.navigate(['/confirm']);
  }

}
