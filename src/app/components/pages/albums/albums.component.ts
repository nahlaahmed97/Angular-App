import { Component, OnInit } from '@angular/core';
import { AlbumsService } from '../../../services/albums.service';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {
  albums;
  constructor(private albumservice: AlbumsService) { }

  ngOnInit(): void {
    this.albums = this.albumservice.getAlbums();
  }

}

      
