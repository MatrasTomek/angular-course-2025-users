import { Component, OnInit, ViewChild } from '@angular/core';
import { RoleEnum } from '../enum/role.enum';
import { UserInterface } from '../interface/user.interface';
import { CommonModule } from '@angular/common';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { InfoUserComponent } from './info-user/info-user.component';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    InfoUserComponent,
  ],
  templateUrl: './users.component.html',
  styleUrl: './users.component.less',
})
export class UsersComponent implements OnInit {
  @ViewChild('avgSalaryRef') avgSalaryRef!: InfoUserComponent;

  users: UserInterface[] = [
    {
      name: 'Jan',
      surname: 'Kowalski',
      role: RoleEnum.admin,
      email: 'test@test.pl',
      startDate: '2022-01-15',
      salary: 5000,
    },
    {
      name: 'Karol',
      surname: 'Kowalski',
      role: RoleEnum.user,
      email: 'test2@test.pl',
      startDate: '2023-03-22',
      salary: 4000,
    },
    {
      name: 'Monika',
      surname: 'Nowak',
      role: RoleEnum.user,
      email: 'test@test.pl',
      startDate: '2021-11-05',
      salary: 4500,
    },
  ];

  userLength: number = 0;
  totalSalary: number = 0;
  avgSalary: number | null = null;

  displayedColumns: string[] = [
    'name',
    'surname',
    'role',
    'email',
    'startDate',
    'salary',
  ];
  dataSource = new MatTableDataSource(this.users);

  roleEnum = RoleEnum;

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  constructor() {}

  ngOnInit(): void {
    this.userLength = this.users.length;
    this.totalSalary = this.allSalary();
  }

  ngAfterViewInit(): void {
    this.avgSalaryRef.showSalary();
  }

  allSalary(): number {
    return this.users.map((user) => user.salary).reduce((a, b) => a + b, 0);
  }

  onShowSalary(avgSalary: number): void {
    this.avgSalary = avgSalary;
  }

  showSalary(): void {
    this.avgSalaryRef.showSalary();
  }
}
