import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceService } from '../service/service.service';

@Component({
  selector: 'app-detailed-user',
  templateUrl: './detailed-user.component.html',
  styleUrl: './detailed-user.component.css'
})
export class DetailedUserComponent {
  detailsItem:any=[]

  constructor(private route :ActivatedRoute,private service:ServiceService){
    const itemId = parseInt(this.route.snapshot.params['id'], 10);
    this.service.getUserById(itemId).subscribe(res=>{
      this.detailsItem = res;
    });

  }
}
