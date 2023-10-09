import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from "rxjs/operators";
import {Observable} from 'rxjs';
import { IProperty } from '../property/IProperty.interface';

@Injectable({
  providedIn: 'root'
})
export class HousingService {
  constructor(private http: HttpClient) { }

  getAllProperties(SellRent: number): Observable<IProperty[]> {
    return this.http.get('data/properties.json').pipe(
      map(data => {
        const propertiesArray: Array<IProperty> = [];
        for (let item in data) {
          if (data.hasOwnProperty(item) && data[item].SellRent === SellRent) {
            propertiesArray.push(data[item]);
          }
        }
        return propertiesArray;
      })
    );
  }
  
}
