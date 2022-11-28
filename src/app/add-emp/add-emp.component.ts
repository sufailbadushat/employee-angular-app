import { Component } from '@angular/core';

@Component({
  selector: 'app-add-emp',
  templateUrl: './add-emp.component.html',
  styleUrls: ['./add-emp.component.css']
})
export class AddEmpComponent {
  name = ""
  designation = ""
  salary = ""
  company = ""

  readValues = () => {
    let data: any =
    {
      "name": this.name,
      "designation": this.designation,
      "salary": this.salary,
      "company": this.company
    }
    console.log(data)
  }
}
