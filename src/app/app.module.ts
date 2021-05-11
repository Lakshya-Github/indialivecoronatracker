import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import { ApiService } from './services/api.service';
import {MatTableModule} from '@angular/material/table';
import { FlexLayoutModule } from '@angular/flex-layout';
import { Truncate } from './pipes/truncate';
import { MPComponent } from './container/MadhyaPradesh.component';
import { MainComponent } from './container/main.component';
import { AndamanComponent } from './container/Andaman.component';
import { AndhraComponent } from './container/Andhra.component';
import { ArunachalComponent } from './container/Arunachal.component';
import { AssamComponent } from './container/Assam.component';
import { BiharComponent } from './container/Bihar.component';
import { ChandiGarhComponent } from './container/Chandigarh.component';
import { ChhattisgarhComponent } from './container/Chhattisgarh.component';
import { DadraComponent } from './container/Dadra.component';
import { DelhiComponent } from './container/Delhi.component';
import { GoaComponent } from './container/Goa.component';
import { GujaratComponent } from './container/Gujarat.component';
import { HaryanaComponent } from './container/Haryana.component';
import { HimachalComponent } from './container/Himachal.component';
import { JammuComponent } from './container/Jammu.component';
import { JharComponent } from './container/Jharkhand.component';
import { KarnatakaComponent } from './container/Karnataka.component';
import { KeralaComponent } from './container/Kerala.component';
import { LadakhComponent } from './container/Ladakh.component';
import { LakshaComponent } from './container/LakshaDweep.component';
import { MahastraComponent } from './container/Maharastra.component';
import { ManipurComponent } from './container/Manipur.component';
import { MeghalayaComponent } from './container/Meghalaya.component';
import { MizoramComponent } from './container/Mizoram.component';
import { NagalandComponent } from './container/Nagaland.component';
import { OdishaComponent } from './container/Odisha.component';
import { PuduComponent } from './container/Pudu.component';
import { PunjabComponent } from './container/Punjab.component';
import { RajasthanComponent } from './container/Rajasthan.component';
import { SikkimComponent } from './container/Sikkim.component';
import { TamilComponent } from './container/Tamil.component';
import { TelanganaComponent } from './container/Telangana.component';
import { TripuraComponent } from './container/Tripura.component';
import { UttrakhandComponent } from './container/Uttrakhand.component';
import { UttarPradeshComponent } from './container/UttarPradesh.component';
import { WestComponent } from './container/West.component';

@NgModule({
  declarations: [
    AppComponent,
    Truncate,
    MPComponent,
    MainComponent,
    AndamanComponent,
    AndhraComponent,
    ArunachalComponent,
    AssamComponent,
    BiharComponent,
    ChandiGarhComponent,
    ChhattisgarhComponent,
    DadraComponent,
    DelhiComponent,
    GoaComponent,
    GujaratComponent,
    HaryanaComponent,
    HimachalComponent,
    JammuComponent,
    JharComponent,
    KarnatakaComponent,
    KeralaComponent,
    LadakhComponent,
    LakshaComponent,
    MahastraComponent,
    ManipurComponent,
    MeghalayaComponent,
    MizoramComponent,
    NagalandComponent,
    OdishaComponent,
    PuduComponent,
    PunjabComponent,
    RajasthanComponent,
    SikkimComponent,
    TamilComponent,
    TelanganaComponent,
    TripuraComponent,
    UttrakhandComponent,
    UttarPradeshComponent,
    WestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatTableModule,
    FlexLayoutModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
