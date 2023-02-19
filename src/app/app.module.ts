import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BaseAllConersRadius4Borde2Component } from './components/frame-1/base-all-coners-radius-4-borde2/base-all-coners-radius-4-borde2.component';
import { BaseAllConersRadius4BordeComponent } from './components/frame-1/base-all-coners-radius-4-borde/base-all-coners-radius-4-borde.component';
import { BaseAllConersRadius8BordeComponent } from './components/frame-1/base-all-coners-radius-8-borde/base-all-coners-radius-8-borde.component';
import { BaseAllConersRadius128BorComponent } from './components/frame-1/base-all-coners-radius-128-bor/base-all-coners-radius-128-bor.component';
import { Frame1Component } from './components/frame-1/frame-1.component';
import { IconButtonSizeSmallStyleLComponent } from './components/frame-1/icon-button-size-small-style-l/icon-button-size-small-style-l.component';
import { RoundStyleOutlinedComponent } from './components/frame-1/round-style-outlined/round-style-outlined.component';

@NgModule({
  declarations: [
    AppComponent,
    BaseAllConersRadius8BordeComponent,
    RoundStyleOutlinedComponent,
    IconButtonSizeSmallStyleLComponent,
    BaseAllConersRadius4BordeComponent,
    BaseAllConersRadius4Borde2Component,
    BaseAllConersRadius128BorComponent,
    Frame1Component,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
