import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './container/main.component';
import { MPComponent } from './container/MadhyaPradesh.component';
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

const routes: Routes = [
  {path: '', component: MainComponent}, 
  {path: 'Madhya Pradesh', component: MPComponent},
  {path: 'Andaman and Nicobar Islands', component: AndamanComponent},
  {path: 'Andhra Pradesh', component: AndhraComponent},
  {path: 'Arunachal Pradesh', component: ArunachalComponent},
  {path: 'Assam', component: AssamComponent},
  {path: 'Bihar', component: BiharComponent},
  {path: 'Chandigarh', component: ChandiGarhComponent},
  {path: 'Chhattisgarh', component: ChhattisgarhComponent},
  {path: 'Dadra and Nagar Haveli and Daman and Diu', component: DadraComponent},
  {path: 'Delhi', component: DelhiComponent},
  {path: 'Goa', component: GoaComponent},
  {path: 'Gujarat', component: GujaratComponent},
  {path: 'Haryana', component: HaryanaComponent},
  {path: 'Himachal Pradesh', component: HimachalComponent},
  {path: 'Jammu and Kashmir', component: JammuComponent},
  {path: 'Jharkhand', component: JharComponent},
  {path: 'Karnataka', component: KarnatakaComponent},
  {path: 'Kerala', component: KeralaComponent},
  {path: 'Ladakh', component: LadakhComponent},
  {path: 'Lakshadweep', component: LakshaComponent},
  {path: 'Maharashtra', component: MahastraComponent},
  {path: 'Manipur', component: ManipurComponent},
  {path: 'Meghalaya', component: MeghalayaComponent},
  {path: 'Mizoram', component: MizoramComponent},
  {path: 'Nagaland', component: NagalandComponent},
  {path: 'Odisha', component: OdishaComponent},
  {path: 'Puducherry', component: PuduComponent},
  {path: 'Punjab', component: PunjabComponent},
  {path: 'Rajasthan', component: RajasthanComponent},
  {path: 'Sikkim', component: SikkimComponent},
  {path: 'Tamil Nadu', component: TamilComponent},
  {path: 'Telangana', component: TelanganaComponent},
  {path: 'Tripura', component: TripuraComponent},
  {path: 'Uttarakhand', component: UttrakhandComponent},
  {path: 'Uttar Pradesh', component: UttarPradeshComponent},
  {path: 'West Bengal', component: WestComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
