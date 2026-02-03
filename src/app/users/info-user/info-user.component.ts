import { Component, EventEmitter, Input, Output } from '@angular/core';
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

  @Output()
  avgSalary: EventEmitter<number> = new EventEmitter<number>();

  showSalary(): void {
    this.avgSalary.emit(this.totalSalary / this.userLength);
  }
}
