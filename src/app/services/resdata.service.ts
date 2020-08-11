import { Injectable } from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ResdataService {

  static ngInjectableDef = undefined;

  url:string ="http://localhost:8080/flightreservation/showReg";

  constructor( private _http:HttpClient) { }

public register(registerRequest):any{
return this._http.post(this.url,registerRequest);/* .pipe(
map((res: Response) => res)); */
}

public login(registerRequest):any{
  console.log("service");
  return this._http.post("http://localhost:8080/flightreservation/showLogin",registerRequest);
  /* .pipe(
  map((res: Response) => res)); */
  }

  public find(registerRequest):any{
    return this._http.post("http://localhost:8080/flightreservation/admin/showAddFlight",registerRequest);

  }


  public displayFlights(id:number):any{
    return this._http.get("http://localhost:8080/flightreservation/admin/showAddFlight/"+id);
    //.pipe(map((res: Response) => res)
    //);
  }




}

