import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.sass']
})
export class SidebarComponent implements OnInit {

  public register: boolean;

  constructor() {
    this.register = true;
  }

  ngOnInit(): void {
  }

  handleClick(event){
    event.preventDefault();
    this.register = !this.register;
  }
}

