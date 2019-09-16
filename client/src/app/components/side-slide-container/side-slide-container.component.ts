import { Component, OnInit, Input, Output } from '@angular/core';
import { NavItem } from '../../services/nav-item.model';

@Component({
  selector: 'app-side-slide-container',
  templateUrl: './side-slide-container.component.html',
  styleUrls: ['./side-slide-container.component.css'],
})
export class SideSlideContainerComponent implements OnInit {

  @Input() navMenu: NavItem[];
  @Input() position: string;
  @Input() displayType: string

  @Output() menu: NavItem[]; 

  constructor() { }

  ngOnInit() {
  }

}
