import { Component } from '@angular/core';

@Component({
  selector: 'app-view-emp',
  templateUrl: './view-emp.component.html',
  styleUrls: ['./view-emp.component.css']
})
export class ViewEmpComponent {
   data:any = [
    {
      "name":"Ronaldo",
    "designation":"Software engineer trainee",
    "salary":50000,
    "company":"Portugal"
    },
    {
      "name":"Messi",
    "designation":"Cloud architect",
    "salary":75000,
    "company":"Argentina"
    },
    {
      "name":"Neymar",
    "designation":"Devops",
    "salary":45000,
    "company":"Brazil"
    },
    {
      "name":"Xavi",
    "designation":"App developer",
    "salary":39000,
    "company":"Spain"
    },
    {
      "name":"Emiliano",
    "designation":"Full stack developer",
    "salary":48000,
    "company":"Argentina"
    },
    {
      "name":"Emiliano",
    "designation":"Full stack developer",
    "salary":48000,
    "company":"Argentina"
    },
    {
      "name":"Messi",
    "designation":"Cloud architect",
    "salary":75000,
    "company":"Argentina"
    },
    {
      "name":"Messi",
    "designation":"Cloud architect",
    "salary":75000,
    "company":"Argentina"
    }

   ]
}
