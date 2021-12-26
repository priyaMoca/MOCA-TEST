import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { HeaderComponent } from './views/header/header.component';
import { ShortNumberPipe } from './pipes/short-number.pipe';
import { LoaderComponent } from './views/loader/loader.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HeaderComponent,
    ShortNumberPipe,
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
