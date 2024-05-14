import { DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule } from '@angular/core';
import localePt from '@angular/common/locales/pt';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './site/home/home.component';
import { CartComponent } from './site/cart/cart.component';
import { RouterModule, RouterOutlet, provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { registerLocaleData } from '@angular/common';

registerLocaleData(localePt);

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CartComponent
  ],
  imports: [
    RouterOutlet,
    HttpClientModule,
    BrowserModule,
    RouterModule
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'pt' },
    { provide: DEFAULT_CURRENCY_CODE, useValue: 'BRL' },
    provideRouter(routes)
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
