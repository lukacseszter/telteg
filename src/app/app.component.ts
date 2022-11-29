// File: app.components.ts
// Author: Lukács Eszter
// Copyright: 2022, Lukács Eszter
// Group: Szoft II/N
// Date: 2022-11-29
// Github: https://github.com/lukacseszter/
// Licenc: GNU GPL

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'telteg';
  aSide !: number;
  bSide !: number;
  result !: number;

  calcArea():void {
    this.result = this.aSide * this.bSide;
    console.log('működik')
  }
}