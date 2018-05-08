import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-terminal-login',
  templateUrl: './terminal-login.component.html',
  styleUrls: ['./terminal-login.component.scss']
})
export class TerminalLoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onSigninTerminal() {
    console.log('Clicou em entrar no terminal');
  }

}
