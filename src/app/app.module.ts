import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {ReactiveFormsModule} from "@angular/forms";
import {DecimalCurrencyPipeModule} from "./decimal-currency.pipe";
import {InputRestrictionDirective} from "./input-restriction.directive";

@NgModule({
  declarations: [
    AppComponent,
    InputRestrictionDirective
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    DecimalCurrencyPipeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
