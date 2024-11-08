import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-bindings',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './bindings.component.html',
  styleUrl: './bindings.component.css'
})
export class BindingsComponent {
  name = 'A test';

  alertName(): void {
    alert(`${this.name} was clicked`);
  }
}
