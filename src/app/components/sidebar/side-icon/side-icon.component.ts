import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-icon',
  templateUrl: './side-icon.component.html',
  styleUrls: ['./side-icon.component.scss']
})
export class SideIconComponent implements OnInit {

  @Input() icons: string[];
  iconPath: string;
  linkPath: string;
  constructor() { }

  ngOnInit(): void {
    this.iconPath =  '../../../assets/sprite.svg#icon-' + this.icons[0];
    this.linkPath = this.icons[1];
  }

}
