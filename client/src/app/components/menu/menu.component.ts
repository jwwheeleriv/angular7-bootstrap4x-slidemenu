import { Component, OnInit, Input, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { NavItem } from '../../services/nav-item.model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit, AfterViewInit {

  

  @Input() menuItems: NavItem[];
  @ViewChild('menu', {static: false}) menuElementRef: ElementRef;

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  ngAfterViewInit(){
    //Referrences become available after the ngAfterViewInit hook, not on the ngOnInit.
    console.log(this.menuElementRef)
  }

}
