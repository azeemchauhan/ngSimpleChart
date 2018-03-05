import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NgChartModule } from './ngChart/app.ngChart.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgChartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
