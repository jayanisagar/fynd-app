import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-drop-down',
  templateUrl: './drop-down.component.html',
  styleUrls: ['./drop-down.component.scss']
})
export class DropDownComponent implements OnInit {

  colors: any = ['red', 'yellow', 'green', 'blue'];
  selectedMultiple: any[] = [];

  @Input()
  title: string = '';

  @Input()
  multipleSelect: boolean = false;

  @Input()
  set listData(data: any[]) {
    console.log("listData", data);
    this._listData = data;
  }
  _listData: any = [];

  @Output()
  onResult = new EventEmitter<any[]>();

  constructor() { }

  ngOnInit(): void {
  }

  selectAll(checkAll, select: NgModel, values) {
    //this.toCheck = !this.toCheck;

    console.log("checkAll, select,  values", checkAll, select, values);
    if (checkAll) {
      select.update.emit(values);
    }
    else {
      select.update.emit([]);
    }
  }

  equals(objOne, objTwo) {
    if (typeof objOne !== 'undefined' && typeof objTwo !== 'undefined') {
      return objOne.title === objTwo.title;
    }
  }

  clearButton() {
    console.log("clearButton");
    this.selectedMultiple = [];
    this.onResult.emit(this.selectedMultiple);
  }

  submitButton() {
    console.log("submitButton", this.selectedMultiple);
    this.onResult.emit(this.selectedMultiple);
  }

  selectOut(event) {
    console.log("selectOut", event);
    this.onResult.emit(this.selectedMultiple);
  }
}
