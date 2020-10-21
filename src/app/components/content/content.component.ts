import { Component, OnInit } from '@angular/core';
import { CarService} from "../../services/car.service";
import { CarModel} from "../../models/Car.model";
import { Router} from "@angular/router";

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.sass'],
  providers: [ CarService ]
})
export class ContentComponent implements OnInit {
  public title_list: string;
  public cars: Array<CarModel>;


  constructor(private _carServices: CarService, private _router: Router) {
    this.title_list = "Listado de vehículos";
  }

  ngOnInit(): void {
    this._carServices.carList().subscribe(
      response =>{
        console.log(response);
        if(response.code === 'success'){
        this.cars = response.cars;

        }
      },
        error => {
          console.log(error);
          if( error.error.code === 'error'){
            localStorage.clear();
            this._router.navigate(['/login']);
          }
        });
  }
}
