import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { IUser } from './model/user.model';
import users from './mock-data/users.json';

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.scss'],
})
export class UserTableComponent implements OnInit {
  public readonly displayedColumns = [
    'id',
    'name',
    'streetName',
    'streetNumber',
    'postalCode',
    'town',
  ];

  public dataSource = new MatTableDataSource<IUser>();
  constructor() {}

  @ViewChild(MatSort) set matSort(sort: MatSort) {
    // this needs to be a setter to ensure sort is added AFTER it is defined in the template, otherwise it won't work
    this.dataSource.sort = sort;
  }

  ngOnInit(): void {
    this.dataSource.data = users;
  }
}
