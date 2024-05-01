import { Component, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { ServiceService } from '../service/service.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent implements OnInit,OnChanges  {

  @Input() dataTest!: any;
  pageSize = 6;

  displayedColumns: string[] = ['image', 'id', 'name', 'last_name', 'email'];
  dataSource:any=[];
  currentPage = 1;
  totalItems = 0; 

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private service: ServiceService) {}

  ngOnInit() {
    this.dataSource = [];
    if (this.dataTest && Array.isArray(this.dataTest)) {
      this.dataSource = this.dataTest;
    }
  }
  
  ngOnChanges(changes: SimpleChanges) {
    if (changes['dataTest'] && Array.isArray(changes['dataTest'].currentValue)) {
      this.dataSource = changes['dataTest'].currentValue;
      this.totalItems = this.dataSource.length;
      this.currentPage = 0;
    }
  }
    onPageChange(event: any): void {
    this.currentPage = event.pageIndex;
    this.service.setCurrentPage(event.pageIndex + 1);
  }
  
  getPaginatedData(): any[] {
    const startIndex = this.currentPage * this.pageSize;
    return this.dataSource.slice(startIndex, startIndex + this.pageSize);
  }
  
}

