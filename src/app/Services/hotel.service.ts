import { environment } from './../../environments/environment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HotelService {

  constructor(private http:HttpClient) { }

  getAllHotels():Observable<any>
  {
    return this.http.get<any>(environment.localAPI+"/hotel");
  }

  getHotelByID(hotelID:string):Observable<any>
  {
    return this.http.get<any>(environment.localAPI+"/hotel/"+hotelID);
  }
  creatHotel(hotel):Observable<any>
  {
    return this.http.post<any>(environment.localAPI+"/hotel/",hotel);
  }





}
