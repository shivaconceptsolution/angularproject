import { Component } from '@angular/core';

@Component({
  selector: 'app-myform',
  templateUrl: './myform.component.html',
  styleUrl: './myform.component.css'
})
export class MyformComponent {

  basic1=null;
  courses = ['C', 'C++','DS', 'JAVA'];
  basiccourse=['C','C++','PYTHON','R','Basic Computer']
  selectedCourse=''
  advancecourse=['Java','PYTHON','PHP','iOS','Android','Flutter']
  course1='';
  course='';
  result = '';
  selectedOptions: string[] = [];

  advance='';
  onCheckboxChange(option: string) {
   
    this.advancecourse.forEach((item) => {
      if (item !== option) {
        this.basic1 = null; // Uncheck the other checkboxes
      }
    
    });
    if (this.selectedOptions.includes(option)) {
      // Remove the option if already selected
      this.selectedOptions = this.selectedOptions.filter(item => item !== option);
    } else {
      // Add the option if not selected
      this.selectedOptions.push(option);
    }
  }
  displayData():void
  {
    var arr= this.course1;
    var data='';
   
    for(var i=0;i<arr.length;i++)
    {
        data = data + arr[i] + " ";
    } 
    
    this.result = "Selected Course is "+this.course1 + " Other courses "+data + " Radio Course is "+ this.selectedCourse + "Advance course is "+this.selectedOptions; 
    // alert("Selected Course is "+this.course + " Other courses "+data);
  }
}
