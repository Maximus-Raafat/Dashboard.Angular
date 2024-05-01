import { Component, OnInit, inject } from '@angular/core';
import { ServiceService } from '../service/service.service';
import { Observable, from } from 'rxjs';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit{
  ELEMENT_DATA: any[] = [ ];
  housingLocationList: any[] = [];
  filteredLocationList: any[] = [];
  showPortfolio : boolean = false;
  
  constructor(private service:ServiceService,private spinner: NgxSpinnerService) {
  }
ngOnInit(): void {
  this.getUsers(this.service.currentPage);
  this.service.currentPageChanged.subscribe(curratePage => {
    this.getUsers(curratePage);
  });

}


  getUsers(page:number){
    this.spinner.show();
    this.service.getUsers(page).subscribe(
      (data:any)=>{
        this.ELEMENT_DATA = [...data];
      setTimeout(() => {
        this.showPortfolio=true;
        this.spinner.hide();
      }, 1000);
      }
    )
  }
  filterResults(event: any) {
    this.spinner.show();
    let id:number = +event
    if (!event) {
      this.getUsers(1);
    }
    this.service.getUserById(id).subscribe(res=>{
      this.ELEMENT_DATA = [res];
      setTimeout(() => {
        this.showPortfolio=true;
        this.spinner.hide();
      }, 1000);
    })
  }


}
