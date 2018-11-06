import { Component, OnInit, ViewChild } from '@angular/core';
import { ApiService } from '../api.service';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  @ViewChild(HeaderComponent) header;

  // tslint:disable-next-line:no-inferrable-types
  tabs: string = 'forms';
  forms: any = 'active';
  users: any = '';
  projects: any;
  project: any;
  lastupdated: any;
  createdon: any;
  description: any;
  filter: any;
  _forms: any;
  _users: any;
  userFilter: any = [];
  formFilter: any = [];

  constructor(public service: ApiService) { }

  ngOnInit() {
    this.get_projects();
    this.filter = this.header.userFilter;
  }

  setTab(num: any) {
    this.tabs = num;
    if (num !== 'forms') {
      this.users = 'active';
      this.forms = '';
      // this.get_projects();
    } else {
      this.users = '';
      this.forms = 'active';
    }
  }

  get_projects() {
    this.service.getJSON().subscribe(
      res => {
        this.projects = res.data;
        this._forms = res.forms;
        this._users = res.users;
        this.show_project(this.projects[0]);
        this.show_forms();
      });
  }

  show_project(project) {
    this.project = project.project;
    this.lastupdated = project.lastupdated;
    this.createdon = project.createdon;
    this.description = project.description;
  }

  show_forms() {

  }

}
