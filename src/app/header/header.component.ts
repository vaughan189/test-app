import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  userFilter: any = [];
  constructor(private router: Router) { }

  ngOnInit() {
  }

  addNewProject() {
    this.router.navigate(['create-project']);
  }
}
