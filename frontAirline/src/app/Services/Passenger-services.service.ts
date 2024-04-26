import { Injectable } from '@angular/core';
import { Passenger } from '../Models/Passenger';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environements/environement';

@Injectable({
  providedIn: 'root'
})
export class PassengerServicesService {

  private url="Passenger";
  constructor(private http:HttpClient) { }

  public GetAllPassengers():Observable<Passenger[]>{
    
    return this.http.get<Passenger[]>(`${environment.apiUrl}/${this.url}`);
  }
}
