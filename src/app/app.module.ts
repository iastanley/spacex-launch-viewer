import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { PaginationComponent } from './pagination/pagination.component';
import { LaunchTableComponent } from './launch-table/launch-table.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PaginationComponent,
    LaunchTableComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
