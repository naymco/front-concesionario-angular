import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute} from "@angular/router";
import {CarService} from "../../services/car.service";
import {CarModel} from "../../models/Car.model";

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.sass'],
  providers: [CarService]
})
export class CarDetailComponent implements OnInit {
  public title_detail: string;
  public car: CarModel;

  constructor(private _carService: CarService, private _route: ActivatedRoute, private _router: Router) {
    this.title_detail = "Detalle del vehículo";
  }

  ngOnInit(): void {
    this.getCar();
  }

  getCar() {
    this._route.params.subscribe(
      params => {
        this._carService.carDetails(params.id).subscribe(
          response => {
            console.log(response)
            if (response.car) {
              this.car = response.car;
            }
          },
          error => {
            console.log(error);
            if (error.error.code === 'error') {
              localStorage.clear();
              this._router.navigate(['/login']);
            }
          }
        );
      },
      error => {
        console.log(error);
      });
  }
}
