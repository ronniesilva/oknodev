import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'app-terminal',
  templateUrl: './terminal.component.html',
  styleUrls: ['./terminal.component.scss']
})
export class TerminalComponent implements OnInit {

  constructor(
    private router: Router,
  ) { }

  ngOnInit() {
    // this.router.navigate(['terminal', 'tlogin']);
  }

}
