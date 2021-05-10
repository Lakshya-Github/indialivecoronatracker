import { Component, OnInit } from '@angular/core';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-root',
  template: `
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-wEmeIV1mKuiNpC+IOBjI7aAzPcEZeedi5yW5f2yOq55WWLwNGmvvx4Um1vskeMj0"
      crossorigin="anonymous"
    />
    <div class="images">
      <!-- <div>
        <img src="../assets/image.png" class="my-img" />
        <img class="coronaimg" src="../assets/thumbnail.gif" />
      </div> -->
      <div class="under-images">
        <span>
          C<img class="coronaimg" src="../assets/thumbnail.gif" />VID-19
        </span>
        <h1>India</h1>
      </div>
    </div>

    <div class="lastUpdate">
      <h2>Last Updated At: {{ lastUpdated | date: 'medium' }}</h2>
    </div>

    <div class="my-cards">
      <div class="main-div">
        <div class="card" style="width: 15rem;">
          <div class="card-body">
            <h4 class="card-subtitle mb-2 text-muted">Infected</h4>
            <h4 class="card-title">{{ global.confirmedCasesIndian }}</h4>
            <p class="card-text">
              {{ date }}
            </p>
            <p>Number of Active cases of COVID-19</p>
          </div>
          <div class="back-blue-color"></div>
        </div>
        <div class="card" style="width: 15rem;">
          <div class="card-body">
            <h4 class="card-subtitle mb-2 text-muted">Recovered</h4>
            <h4 class="card-title">{{ global.discharged }}</h4>
            <p class="card-text">
              {{ date }}
            </p>
            <p>Number of Active cases of COVID-19</p>
          </div>
          <div class="back-green-color"></div>
        </div>
        <div class="card" style="width: 15rem;">
          <div class="card-body">
            <h4 class="card-subtitle mb-2 text-muted">Deaths</h4>
            <h4 class="card-title">{{ global.deaths }}</h4>
            <p class="card-text">
              {{ date }}
            </p>
            <p>Number of Active cases of COVID-19</p>
          </div>
          <div class="back-red-color"></div>
        </div>
      </div>
    </div>
    <div style="width: 80%;" class="main-table">
      <div style="width: 100%;" class="table-div">
        <table class="table table-bordered table-striped" style="width: 100%;">
          <thead>
            <tr>
              <th>Countries</th>
              <th>Confirmed</th>
              <th>Recovered</th>
              <th>Deaths</th>
            </tr>
          </thead>
          <tr *ngFor="let item of array">
            <td>{{ item.loc | truncate }}</td>
            <td>{{ item.confirmedCasesIndian | truncate }}</td>
            <td>{{ item.discharged | truncate }}</td>
            <td>{{ item.deaths | truncate }}</td>
          </tr>
        </table>
      </div>
    </div>
    <footer>Developer: Lakshya Parashar</footer>
    <script
      src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js"
      integrity="sha384-p34f1UUtsS3wqzfto5wAAmdvj+osOnFyQFpp4Ua3gs/ZVWx6oOypYoCJhGGScy+8"
      crossorigin="anonymous"
    ></script>
  `,
  styles: [
    `
      @import url('https://fonts.googleapis.com/css2?family=Roboto+Mono&display=swap');
      .main {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: row;
        /* margin-top: 3rem; */
        /* box-shadow: 25px 20px 30px 6px #b5b5b5; */
        width: 100%;
      }
      .under-main {
        width: 70%;
        box-shadow: 25px 20px 30px 6px #b5b5b5;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: row;
        margin-bottom: 3rem;
        overflow: auto;
        white-space: nowrap;
      }
      ul {
        display: flex;
        /* align-items: center; */
        /* justify-content: center; */
        flex-direction: column;
        max-width: 100%;
        margin-top: 2rem;
        margin-bottom: 2rem;
      }
      li {
        font-size: 1rem;
      }
      .my-table-heading {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: row;
      }
      .my-img {
        width: 10rem;
      }

      .images {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 30vh;
        flex-direction: column;
      }
      .under-images {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
      }
      .images span {
        font-family: 'Roboto Mono', monospace;
        font-size: 4rem;
        display: flex;
        align-items: center;
      }
      .images div {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
      }
      .images div h1 {
        font-size: 2rem;
        margin-top: 1rem;
        font-family: 'Roboto Mono', monospace;
      }
      .coronaimg {
        width: 70px;
      }
      .my-cards {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-around;
        margin-top: 3rem;
        margin-bottom: 5rem;
        height: 10rem;
      }
      .my-cards .main-div {
        width: 70%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: space-around;
      }
      .card {
        transition: 0.5s all;
      }
      .card:hover {
        box-shadow: 15px 10px 14px 1px #b5b5b5;
        transition: 0.5s all;
        margin-bottom: 1rem;
      }
      .back-red-color {
        background: #f35353c2;
        width: 100%;
        height: 10px;
        border-radius: 10px;
      }
      .back-green-color {
        background: #50d650;
        width: 100%;
        height: 10px;
        border-radius: 10px;
      }
      .back-blue-color {
        background: #7171dc;
        width: 100%;
        height: 10px;
        border-radius: 10px;
      }
      /* table {
        border-collapse: collapse;
        border-spacing: 0;
        width: 100%;
        border: 1px solid #ddd;
      } */
      table {
        border-collapse: collapse;
        border-spacing: 0;
        width: 100%;
        border: 1px solid #ddd;
        /* box-shadow: 25px 20px 30px 6px #b5b5b5; */
        /* box-shadow: 6px 6px 30px 6px #b5b5b5; */
        margin: auto;
        /* margin-bottom: 2rem; */
      }
      .table-div {
        margin: auto;
        overflow: auto;
        white-space: nowrap;
        box-shadow: 6px 6px 30px 6px #b5b5b5;
        margin-bottom: 3rem;
      }
      tr,
      th,
      td {
        padding: 8px;
        text-align: left;
      }
      .main-table {
        margin: auto;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      footer {
        height: 10vh;
        align-items: center;
        display: flex;
        justify-content: center;
        background: #a9a7a7b5;
        color: white;
      }
      .lastUpdate {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 85%;
        margin: auto;
      }
      .lastUpdate h2 {
        text-align: center;
        padding-bottom: 2rem;
        color: #6c757d;
        /* font-family: 'Roboto'; */
      }
      @media screen and (max-width: 599px) {
        .images {
          height: 25vh;
          margin-bottom: 3rem;
        }
        .my-cards {
          height: 100vh;
          flex-direction: column;
          margin-top: 1rem;
        }
        .main-div {
          height: 100vh;
          flex-direction: column;
          margin-top: 1rem;
        }
        .card {
          margin-bottom: 1rem;
        }
        .images span {
          font-size: 3rem;
        }
      }
    `,
  ],
})
export class AppComponent implements OnInit {
  data: any;
  id: any;
  // value = 0;
  // loc: any;
  array: any;
  global: any;
  lastUpdated: any;
  date: any;
  lastUpdateMainValue: any;
  myDate = new Date();

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.loadData();
  }
  loadData() {
    return this.apiService.getData().subscribe((response) => {
      this.data = [response];
      const arr = this.data[0].data.regional;
      this.array = arr;
      const global = this.data[0].data.summary;
      this.global = global;
      // console.log(global.confirmedCasesIndian);
      const mydate = new Date().toDateString();
      this.date = mydate;

      const lastUpdate = this.data[0].lastRefreshed;
      this.lastUpdated = lastUpdate;
    });
  }

  formatDate(timestamp) {
    return new Intl.DateTimeFormat('india').format(timestamp);
  }
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
