import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { DetailedUserComponent } from './detailed-user/detailed-user.component';

const routes: Routes = [ 
    {
        path:"", component:HeaderComponent
    },
    {
        path: 'details/:id',
        component: DetailedUserComponent,
        // title: 'Home details'
      }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class DashboardRoutingModule { }