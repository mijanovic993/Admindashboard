import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-users-area-filter',
  templateUrl: './users-area-filter.component.html',
  styleUrls: ['./users-area-filter.component.scss']
})
export class UsersAreaFilterComponent implements OnInit {

  @Input() filterType: string;
  constructor() { }

  ngOnInit(): void {
  }

}
