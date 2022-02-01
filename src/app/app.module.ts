import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { appRoutingModule } from './app.routing';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { HomeComponent } from './home/home.component';
import { SampleProjectComponent } from './sample-project/sample-project.component';
import {DfmComponent} from './dfm/dfm.component';

@NgModule({
  imports: [BrowserModule, FormsModule, appRoutingModule],
  declarations: [
    AppComponent,
    HelloComponent,
    WelcomeComponent,
    HomeComponent,
    SampleProjectComponent,
    DfmComponent
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
