import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  colors: any = ['red', 'yellow', 'green', 'blue'];

  dropdownList: any = [
    { "title": "colors", "path": ['red', 'yellow', 'green', 'blue'] },
    { "title": "colors2", "path": ['red', 'yellow', 'green', 'blue'] },
    { "title": "colors3", "path": ['red', 'yellow', 'green', 'blue'] },
    { "title": "colors4", "path": ['red', 'yellow', 'green', 'blue'] },
  ];

  listData: any = [
    { "title": "Button", "path": "demo-button" },
    { "title": "Selection Control", "path": "demo-selection-control" },
    { "title": "Input", "path": "demo-input" },
    { "title": "Snackbar", "path": "demo-snack-bar" },
    { "title": "Chips", "path": "demo-chips" },
    { "title": "Progress Tabs", "path": "demo-vertical-tabs" },
    { "title": "Typography", "path": "demo-wip" },
    { "title": "Card", "path": "demo-wip" },
    { "title": "Pagination", "path": "demo-wip" },
    { "title": "Progress Tabs", "path": "demo-wip" }];

  resultValue: string = null;
  selectSingleValue: string = null;
  selectMultipleValue: string = null;

  constructor() { }

  ngOnInit(): void {
  }

  onResultSingle(event: any) {
    console.log("onResultSingle", event);

    if (event)
      this.selectSingleValue = event;
    else
      this.selectSingleValue = null;

    if (this.selectSingleValue) {
      this.resultValue = this.selectSingleValue;

      if (this.selectMultipleValue) {
        if( this.resultValue)
          this.resultValue += " : " +this.selectMultipleValue;
        else
          this.resultValue = this.selectMultipleValue;
      }
    } else if (this.selectMultipleValue) {
      this.resultValue = this.selectMultipleValue;
    } else {
      this.resultValue = null;
    }
  }

  onResultMultiple(event: any[]) {
    console.log("onResultMultiple", event);

    this.selectMultipleValue = null;
    if (event && event.length) {
      event.forEach(element => {
        if (this.selectMultipleValue)
          this.selectMultipleValue += ", " + element.title;
        else {
          this.selectMultipleValue = element.title;
        }
      });
    }

    if (this.selectSingleValue) {
      this.resultValue = this.selectSingleValue;

      if (this.selectMultipleValue) {
        if( this.resultValue)
          this.resultValue += " : " +this.selectMultipleValue;
        else
          this.resultValue = this.selectMultipleValue;
      }
    } else if (this.selectMultipleValue) {
      this.resultValue = this.selectMultipleValue;
    } else {
      this.resultValue = null;
    }
  }

}
