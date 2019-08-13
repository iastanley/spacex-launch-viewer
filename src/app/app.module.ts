import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { PaginationComponent } from './pagination/pagination.component';
import { LaunchTableComponent } from './launch-table/launch-table.component';
import { LaunchControllerComponent } from './launch-controller/launch-controller.component';

import { LaunchesService } from './launches.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PaginationComponent,
    LaunchTableComponent,
    LaunchControllerComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [ LaunchesService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
