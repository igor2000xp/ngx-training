import { Component } from '@angular/core';
import {CALIFORNIA_PLATE, LICENSE_PLATES} from "./mock-data";
import {LicensePlate} from "./license-plate";
import { HelloComponent } from "./hello/hello.component";
import { NavigationComponent } from './navigation/navigation.component';
import { JumbotronComponent } from './jumbotron/jumbotron.component';
import { BindingsComponent } from './bindings/bindings.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavigationComponent, JumbotronComponent, BindingsComponent],
  // imports: [HelloComponent],
  templateUrl: './app.component.html',
  // styleUrls: ['./app.component.scss']
  // template: `
  //     <app-hello></app-hello>
  // `
})
export class AppComponent {
  licensePlates: LicensePlate[] = LICENSE_PLATES;
  licensePlate: LicensePlate = CALIFORNIA_PLATE;
}
