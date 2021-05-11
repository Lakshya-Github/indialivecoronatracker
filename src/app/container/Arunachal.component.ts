import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-madhya',
  template: `
    <!-- <h1 *ngFor="let item of districts">{{ item.name }}</h1>
    <h1 *ngFor="let item of districts">{{ item.rating.confirmed }}</h1> -->

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

    <div class="scroll">
      <h2>If you are not able to see full Table then <br> Scroll the Table to view more details...</h2>
    </div>

    <div style="width: 80%;" class="main-table">
      <div style="width: 100%;" class="table-div">
        <table class="table table-bordered table-striped" style="width: 100%;">
          <thead>
            <tr>
              <th>Cities</th>
              <th>Confirmed</th>
              <th>Recovered</th>
              <th>Deaths</th>
            </tr>
          </thead>
          <tr *ngFor="let item of districts">
            <td>
              {{ item.name | truncate }}
            </td>
            <td>{{ item.rating.confirmed | truncate }}</td>
            <td>{{ item.rating.recovered | truncate }}</td>
            <td>{{ item.rating.deceased | truncate }}</td>
          </tr>
        </table>
      </div>
    </div>
    <footer>Developer: Lakshya Parashar</footer>
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
      a {
        text-decoration: none;
        color: black;
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
        width: 100%;
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
        background: #53b4b7;
        color: white;
        font-size: 1rem;
        text-align: center;
      }
      .lastUpdate {
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .lastUpdate h2 {
        text-align: center;
        padding-bottom: 2rem;
        color: #6c757d;
        /* font-family: 'Roboto'; */
      }
      .scroll {
        text-align: center;
        margin-bottom: 2rem;
        display: none;
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
        .scroll {
            display: block;
        }
      }
    `,
  ],
})
export class ArunachalComponent implements OnInit {
  data;
  states;
  districts;
  constructor(private api: ApiService) {}
  ngOnInit() {
    this.api.getCitiesData().subscribe((response) => {
      this.data = response;
      console.log(this.data);
      const objArray = [];
      const disArray = [];
      Object.keys(this.data).forEach((key) =>
        objArray.push({
          name: key,
          rating: this.data[key],
        })
      );
      console.log(objArray);
      this.states = objArray;
      const state = objArray[3];
      const details = state.rating.districtData;
      console.log(details);

      Object.keys(details).forEach((key) =>
        disArray.push({
          name: key,
          rating: details[key],
        })
      );

      console.log(disArray);
      this.districts = disArray;
    });
  }
}

// .districts.Gwalior.total.confirmed

// let main = [city[0]];
// this.districts = main;
// //   let hello = main[0].Gwalior;
