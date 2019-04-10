import {Component, OnInit} from '@angular/core';
import {CommonService} from './common.service';

import { Album } from './album';
import { Artist } from './artist';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  albums: Album[];
  artists: Artist[];
  catalogue:  Album[];
  sort = 'croissant';
  currentList = 'albums';

  constructor(private commonService: CommonService) {
  }

  ngOnInit() {
    this.commonService.getAlbums().subscribe((res: Album[]) => {
      this.albums = res;

    });
    this.commonService.getArtists().subscribe((res: Artist[]) => {
      this.artists = res;

      this.artists.sort(function(a: any, b: any) {
        return a.name - b.name;
      });
    console.log(this.artists);
    });


    this.commonService.getAlbums().subscribe((res: Album[]) => {
      this.catalogue = res;


      this.catalogue =  this.catalogue.sort(function(a: any, b: any) {
        return a.price - b.price;
      });

    });
  }
}
/*

db.albums.update(
  { _id: ObjectId("5cadf88b04c2cd4e74800b61") },
  {         $set: {
    year: '1930'
  }
  } )

*/

// db.albums.find( { "artist.name" : "Rolling Stones" })

