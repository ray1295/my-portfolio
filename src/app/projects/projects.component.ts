import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  constructor() { }

  scrollWin() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }

  ngOnInit() { }

}
