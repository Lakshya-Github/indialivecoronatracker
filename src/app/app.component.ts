import { Component, OnInit } from '@angular/core';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-root',
  template: `
    <router-outlet></router-outlet>
  `,
  styles: [
    `
      
    `,
  ],
})
export class AppComponent {
  // data: any;
  // id: any;
  // // value = 0;
  // // loc: any;
  // array: any;
  // global: any;
  // lastUpdated: any;
  // date: any;
  // lastUpdateMainValue: any;
  // myDate = new Date();

  // constructor(private apiService: ApiService) {}

  // ngOnInit() {
  //   this.loadData();
  // }
  // loadData() {
  //   return this.apiService.getData().subscribe((response) => {
  //     this.data = [response];
  //     const arr = this.data[0].data.regional;
  //     this.array = arr;
  //     const global = this.data[0].data.summary;
  //     this.global = global;
  //     // console.log(global.confirmedCasesIndian);
  //     const mydate = new Date().toDateString();
  //     this.date = mydate;

  //     const lastUpdate = this.data[0].lastRefreshed;
  //     this.lastUpdated = lastUpdate;
  //   });
  // }

  // formatDate(timestamp) {
  //   return new Intl.DateTimeFormat('india').format(timestamp);
  // }
}

// <!-- <div class="main">
// <div class="under-main">
//     <ul class="list-group list-group-horizontal my-main">
//       <li class="list-group-item">Countries</li>
//       <li class="list-group-item" *ngFor="let item of array">
//         {{ item.loc | truncate}}
//       </li>
//     </ul>
//     <ul class="list-group list-group-horizontal">
//       <li class="list-group-item">Confirmed</li>
//       <li class="list-group-item" *ngFor="let item of array">
//         {{ item.confirmedCasesIndian | truncate}}
//       </li>
//     </ul>
//     <ul class="list-group list-group-horizontal">
//       <li class="list-group-item">Recovered</li>
//       <li class="list-group-item" *ngFor="let item of array">
//         {{ item.discharged | truncate}}
//       </li>
//     </ul>
//     <ul class="list-group list-group-horizontal">
//       <li class="list-group-item">Deaths</li>
//       <li class="list-group-item" *ngFor="let item of array">
//         {{ item.deaths | truncate}}
//       </li>
//     </ul>
// </div>
// </div> -->
// <!-- class="table-responsive"
// fxLayout="coulumn"
// fxLayoutAlign="center center"
// style="width: 100%" -->
