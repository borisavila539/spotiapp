import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'
import { SpotifyService } from '../../services/spotify.service';
@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html'
})
export class ArtistaComponent {
  artista:any= {};
  topTracks : any[] = []; 
  constructor(private route: ActivatedRoute, private spotify: SpotifyService) {
    this.route.params.subscribe(params =>{
      console.log(params['id'])
       this.getArtista(params['id']);
       this.getTopTracks(params['id'])
    })
   }

   getArtista(id:string){
    this.spotify.getArtista(id).subscribe(artista =>{
      console.log(artista)
      this.artista = artista;
    })
   }

   getTopTracks(id:string){
    this.spotify.getTopTracks(id).subscribe( topTracks =>{
      this.topTracks = topTracks;
      console.log(topTracks);
    })
   }



}
