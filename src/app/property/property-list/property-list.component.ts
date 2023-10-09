import { Component } from '@angular/core';
import { HousingService } from '../../service/housing.service';
import { IProperty } from '../IProperty.interface';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent {
  SellRent = 1;
  properties: Array<IProperty>;

  constructor(private route: ActivatedRoute, private housingService: HousingService) { };

  ngOnInit(): void {
    if(this.route.snapshot.url.toString()){
      this.SellRent = 2; //rent page
    }
    this.housingService.getAllProperties(this.SellRent).subscribe(
      data => {
        this.properties = data;
      }
    )
  }
}
