import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-percentage',
  templateUrl: './percentage.component.html',
  styleUrls: ['./percentage.component.scss']
})
export class PercentageComponent implements OnInit {

  @Input() percentageUp: number;
  @Input() percentageDown: number;

  constructor() { }

  ngOnInit() {
  }

}
