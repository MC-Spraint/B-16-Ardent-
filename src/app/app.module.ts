import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SortingComponent } from './components/sorting/sorting.component';

import { SortingService } from './services/sorting.service';

@NgModule({
  declarations: [
    AppComponent,
    SortingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [SortingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
