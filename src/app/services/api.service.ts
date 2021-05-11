import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class ApiService {
    url = 'https://api.rootnet.in/covid19-in/stats/latest';
    citiesData = 'https://api.covid19india.org/state_district_wise.json';
    constructor(private httpClient: HttpClient) {
    }
    getData(): Observable<any> {
        return this.httpClient.get(this.url);
    }
    getCitiesData() {
        return this.httpClient.get(this.citiesData);
    }
}
