import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from "@angular/router";
import { CarService} from "../../services/car.service";
import { CarModel} from "../../models/Car.model";

@Component({
  selector: 'app-edit-car',
  templateUrl: './edit-car.component.html',
  styleUrls: ['./edit-car.component.sass'],
  providers: [ CarService ]
})
export class EditCarComponent implements OnInit {
  public title_edit: string;
  public car: CarModel;
  public token: string;

  constructor(private _carService: CarService, private _route: ActivatedRoute, private _router: Router) {
    this.title_edit = 'Editar vehículo';
    this.token = localStorage.getItem('token');
  }

  ngOnInit(): void {
    this.getCar();
  }

  getCar(){
    this._route.params.subscribe(
      params =>{
        this._carService.carDetails(params.id).subscribe(
          response =>{
            console.log(response)
            if(response.car){
              this.car = response.car;
            }
          },
          error => {
            console.log(error);
            if( error.error.code === 'error'){
              if(this.token){
                localStorage.clear();
              }
              this._router.navigate(['/login']);
            }
          }
        )
      },
      error => {
        console.log(error);
        if( error.error.code === 'error'){
          if(this.token){
            localStorage.clear();
          }
          this._router.navigate(['/login']);
        }
      }
    );
  }

  editVehicle(id){
    this._carService.carEdit(id, this.car).subscribe(
      response =>{
        console.log(response);
        if(response.code === 'success'){
          this.car = response.car;
        }
      },
      error => {
        console.log(error);
        if( error.error.message === 'error'){
          if(this.token){
            localStorage.clear();
          }
          this._router.navigate(['/login']);
        }
      }
    );

  }

}
