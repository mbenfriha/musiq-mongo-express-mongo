import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CommonService {
  apiURL = 'http://localhost:9999/api/';

  constructor(private httpClient: HttpClient) { }




  public getAlbumById(id: number) {
    return this.httpClient.get(`${this.apiURL}album/${id}`);
  }

  public getAlbums() {
    return this.httpClient.get(`${this.apiURL}albums`);
  }
  public getArtists() {
    return this.httpClient.get(`${this.apiURL}artists`);
  }
}
