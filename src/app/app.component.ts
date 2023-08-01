import { Component } from '@angular/core';
import { DoctorsService } from './services/doctors.service';
import { PatientsService } from './services/patients.service';
import { Idoctor } from './interfaces/idoctor';
import { Ipatient } from './interfaces/ipatient';
import { Iproduct } from './interfaces/iproducts';
import { ProductsService } from './services/products.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hospitalApp';
	doctors: Idoctor[];
	patients: Ipatient[];
	products: Iproduct[];

  constructor(private doctorService: DoctorsService, private patientService: PatientsService, private productsService: ProductsService){
	this.doctors = doctorService.getDoctors();
	this.patients = patientService.getPatients();
	this.products = productsService.getProducts();
  }
}
