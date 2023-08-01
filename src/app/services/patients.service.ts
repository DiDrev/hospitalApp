import { Injectable } from '@angular/core';
import { Ipatient } from '../interfaces/ipatient';

@Injectable({
  providedIn: 'root'
})
export class PatientsService {
	private patients: Ipatient[] = [
		{name: "Ben Ken", illness: "Malaria"},
		{name: "Jen Smith", illness: "Headache"},
		{name: "Charles Darwin", illness: "Stomach Ache"},
	];
  constructor() { }

  getPatients(){
	return this.patients;
  }
}
