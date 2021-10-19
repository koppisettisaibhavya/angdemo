import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  @Input() myData?:string;
  @Output() selectEvent =new EventEmitter();
  obj=Object();
  removed:Array<any>=[];
  constructor() { 
  }

  ngOnInit(): void {
  }
  // add(item:any)
  // {
  //   this.obj[item]=false;
  //   console.log(this.obj);
  // }
  selected(item:any)
  {this.obj[item]=true;
    this.removed.push(item);
    this.selectEvent.emit(item);
  }

}