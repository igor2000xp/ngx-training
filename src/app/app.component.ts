import { Component, OnInit } from '@angular/core';
import {CALIFORNIA_PLATE, LICENSE_PLATES} from "./mock-data";
import {LicensePlate} from "./license-plate";
// import { HelloComponent } from "./hello/hello.component";
import { NavigationComponent } from './navigation/navigation.component';
// import { JumbotronComponent } from './jumbotron/jumbotron.component';
import { BindingsComponent } from './bindings/bindings.component';
import { LicensePlateComponent } from './license-plate/license-plate.component';
import { JumbotronComponent } from './jumbotron/jumbotron.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavigationComponent, JumbotronComponent, LicensePlateComponent, BindingsComponent, CommonModule],
  // imports: [HelloComponent],
  templateUrl: './app.component.html',
  // styleUrls: ['./app.component.scss']
  // template: `
  //     <app-hello></app-hello>
  // `
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
    console.log(this.licensePlates);
  }
  licensePlates: LicensePlate[] = LICENSE_PLATES;
  licensePlate: LicensePlate = CALIFORNIA_PLATE;
}
