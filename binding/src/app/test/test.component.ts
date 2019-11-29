import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: 
  // <h2> String Interpolation
  // Welcome {{name}}
  // </h2>
  // <h2>
  // {{2+2}}
  // </h2>
  // <h2>
  // {{"Welcome "+name}}
  // </h2>
  // <h2>{{name.length}}</h2>
  // <h2>{{name.toUpperCase()}}</h2>
  // <h2>{{greetUser()}}</h2>
  //<h2>{{a=2+2}}</h2> //eror
  // <h2>{{window.location.href}}<h2>//eror
  // //<h2>{{site}}</h2>
  // <h2>
  // Welcome{{name}} Property Binding
  // </h2>
  // <input [id]="myId" type="text"  value="Avinash">
  // <input  [disabled]="isDisabled" type="text"  value="Avinash">
  
  // <h2>
  // Welcome {{"To Class Binding"}}
  // </h2>
  // <h2 class="text-success">Class Binding</h2>
  // <h2 [class]="successClass"> 1 Method</h2>
  // <h2 [class.text-danger]="hasErr"> 2 Method</h2>
  // <h2 [ngClass]="messageClasses"> 3 Method</h2>
// <h2>
// Welcome {{"Style Binding"}}
// </h2>
// <h2 [style.color]="hasErr ?'red' : 'green'">Style Binding 1</h2>
// <h2 [style.color]="highlightcolor">Style Binding 2
// </h2>
// <h2 [ngStyle]="titleStyles">Style Binding 3
// </h2>

// <h2>
// welocome{{"Event Binding"}}
// </h2>
// <button (click)="onClick($event )">Greet</button>
// <button (click)="greeting='Welcome u r performing event binding'">Greet</button>
// {{greeting}}
// ``<h2> Template Reference 
//   {{"Variable"}}
//  </h2>
//  <input #myInput type ="text">
//  <button(click)="logMessage(myInput.value)">Log</button>
`
<input [(ngModel)]="name" type = "text">{{name}}
`
  ,
   styles: [
  //    .text-success{
  // //   color:green;
  // // }
  // // .text-danger{
  // //   color:red;
  // // }
  // // .text-special{
  // //   font-style: italic;
  // // }
]
})
export class TestComponent implements OnInit {
public name ="";
public greeting = "";
public site =window.location.href;
public myId="tesId"; 
public isDisabled = false;
public successClass ="text-success" ; 
public hasErr = false;
public isSpecial = true;
public highlightcolor = "orange";
public messageClasses = {
  "text-success": !this.hasErr,
  "text-danger": this.hasErr,
  "text-special": this.isSpecial,
}
public titleStyles = {
  color:"blue",
  fontStyle:"italic"

}


constructor() { }

  ngOnInit() {
  }
  greetUser(){
    return "Hello"+ this.name;
  }
  onClick(event){
    console.log(event);
    this.greeting =event.type;
  }
  logMessage(value){
    console.log(value);
  }

}
