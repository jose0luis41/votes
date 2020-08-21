import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CandidateComponent } from './candidates/candidate/candidate.component';
import { PercentageComponent } from './candidates/candidate/percentage/percentage.component';
import { CandidatesComponent } from './candidates/candidates.component';
import {MatGridListModule} from '@angular/material/grid-list';
import { CandidateDetailsComponent } from './candidates/candidate/candidate-details/candidate-details.component';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { BannerComponent } from './banner/banner.component';
import { HeaderComponent } from './banner/header/header.component';
import { FooterComponent } from './banner/footer/footer.component';
import { AdvertasingComponent } from './candidates/advertasing/advertasing.component';

@NgModule({
  declarations: [
    AppComponent,
    CandidateComponent,
    PercentageComponent,
    CandidatesComponent,
    CandidateDetailsComponent,
    BannerComponent,
    HeaderComponent,
    FooterComponent,
    AdvertasingComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatIconModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
