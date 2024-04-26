import { Component } from '@angular/core';
import { Passenger } from '../../Models/Passenger';
import { PassengerServicesService } from '../../Services/Passenger-services.service';

@Component({
  selector: 'app-passenger',
  templateUrl: './passenger.component.html',
  styleUrl: './passenger.component.css'
})
export class PassengerComponent {
  passengers:Passenger[]=[];
  constructor(private employerService:PassengerServicesService){}
  ngOnInit():void
  {
    this.employerService
    .GetAllPassengers()
    .subscribe(
      (result:Passenger[])=>(this.passengers=result)
    );   
  }
}
