
import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  nuevasCanciones: any[] = [];
  loading: boolean;
  constructor( private spotify:SpotifyService) { 
    this.loading = true;
     this.spotify.getNewRealeases()
     .subscribe((data:any)=>{
        this.nuevasCanciones = data;
        this.loading = false;
     });
     
  }

  ngOnInit(): void {
  }

}
