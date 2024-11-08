import { Component } from '@angular/core';

@Component({
  selector: 'app-bindings',
  standalone: true,
  imports: [],
  templateUrl: './bindings.component.html',
  styleUrl: './bindings.component.css'
})
export class BindingsComponent {
  name = 'A test';

  alertName(): void {
    alert(`${this.name} was clicked`);
  }
}
