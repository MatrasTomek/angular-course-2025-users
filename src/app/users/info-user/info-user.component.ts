import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-info-user',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './info-user.component.html',
  styleUrl: './info-user.component.less',
})
export class InfoUserComponent {
  @Input() userLength: number = 0;
  @Input() totalSalary: number = 0;
}
