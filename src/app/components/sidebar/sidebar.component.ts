import { Component, OnInit } from '@angular/core';
import { iconItems } from 'src/app/utils/icon-data';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  iconItems= iconItems;
  constructor() { }

  ngOnInit(): void {
  }

}
