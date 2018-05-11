import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-terminal-login',
  templateUrl: './terminal-login.component.html',
  styleUrls: ['./terminal-login.component.scss']
})
export class TerminalLoginComponent implements OnInit {

  company: string;

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  onSigninTerminal() {
    this.router.navigate(['/rating', this.company]);
  }

}
