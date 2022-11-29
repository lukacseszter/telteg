// File: app.module.ts
// Author: Lukács Eszter
// Copyright: 2022, Lukács Eszter
// Group: Szoft II/N
// Date: 2022-11-29
// Github: https://github.com/lukacseszter/
// Licenc: GNU GPL


import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
