import { Injectable } from '@angular/core';
import { Iproduct } from '../interfaces/iproducts';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

	private products: Iproduct[] = [
		{id: 1, name: 'Pen', price: 0.99},
		{id: 2, name: 'Pencil', price: 0.79},
		{id: 3, name: 'Notepad', price: 1.99}
	];
  constructor() { }

  getProducts(){
	return this.products;
  }
}
