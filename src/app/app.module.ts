import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { SenatorsListComponent } from './senators-list/senators-list.component';
import { SenatorInformationComponent } from './senator-information/senator-information.component';

@NgModule({
  declarations: [
    AppComponent,
    SenatorsListComponent,
    SenatorInformationComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
