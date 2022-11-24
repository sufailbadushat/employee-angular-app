import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AddEmpComponent } from './add-emp/add-emp.component';

import { AdminLoginComponent } from './admin-login/admin-login.component';
import { SearchEmpComponent } from './search-emp/search-emp.component';
import { EditEmpComponent } from './edit-emp/edit-emp.component';
import { ViewEmpComponent } from './view-emp/view-emp.component';
import { DeleteEmpComponent } from './delete-emp/delete-emp.component';
import { RouterModule, Routes } from '@angular/router';


const myRoute:Routes=
[
  {
    path:"",
    component:AdminLoginComponent
  },
  {
    path:"add",
    component:AddEmpComponent
  },
  {
    path:"search",
    component:SearchEmpComponent
  },
  {
    path:"delete",
    component:DeleteEmpComponent
  },
  {
    path:"view",
    component:ViewEmpComponent
  },
  {
    path:"edit",
    component:EditEmpComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    AddEmpComponent,

    AdminLoginComponent,
      SearchEmpComponent,
      EditEmpComponent,
      ViewEmpComponent,
      DeleteEmpComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
