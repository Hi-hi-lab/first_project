import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { OutputComponent } from './output/output.component';
import { FlexLayoutModule } from '@angular/flex-layout';




@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    OutputComponent,
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
  ],
  providers: [],
})
export class AppModule { }

