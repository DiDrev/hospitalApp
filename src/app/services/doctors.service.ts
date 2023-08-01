import { Injectable } from '@angular/core';
import { Idoctor } from '../interfaces/idoctor';

@Injectable({
  providedIn: 'root'
})
export class DoctorsService {

	private doctors: Idoctor[] = [
		{name: "Peter Pan", specialization: "Dentistry"},
		{name: "Victoria Benneth", specialization: "Oncology"},
	];

  constructor() { }

  getDoctors(){
	return this.doctors;
  }
}
