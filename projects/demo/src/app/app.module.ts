import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LightboxModule } from 'projects/ngx-lightbox/src/public-api';

import { AppComponent } from './app.component';

@NgModule({
  imports: [BrowserModule, LightboxModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
