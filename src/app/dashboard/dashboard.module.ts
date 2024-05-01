import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { UserListComponent } from './user-list/user-list.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DetailedUserComponent } from './detailed-user/detailed-user.component';
import { MaterialModule } from '../material/material.module';



@NgModule({
  declarations: [
    HeaderComponent,
    UserListComponent,
    DetailedUserComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MaterialModule,

  ]
})
export class DashboardModule { }
