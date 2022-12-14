import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map} from 'rxjs/operators'
@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) { }

  getQuery(query: string){
    
    const url = `https://api.spotify.com/v1/${query}`;
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQAjyf5aE2QXwGf9-OghvuiCdm15r1CV8lc_FmuC2mitAJNT-yLUt9EDRDJkiaRikpqlFUOu8JQy_RCnk9ujarF9Ni5pPTi88UbbRwMFI6JriTexFMc'
    })
    return this.http.get(url, {headers});
  }

  getNewRealeases(){
    return this.getQuery('browse/new-releases?limit=20')
    .pipe(map((data:any) => data['albums'].items));   
  }

  getArtistas(termino:string){
    return this.getQuery(`search?query=${termino}&type=artist&locale=es-419%2Ces%3Bq%3D0.9&offset=0&limit=20`)
    .pipe(map((data:any)=> data['artists'].items));
  }

  getArtista(id:string){
    return this.getQuery(`artists/${id}`);
    //.pipe(map((data:any)=> data['artists'].items));
  }

  getTopTracks(id:string){
    return this.getQuery(`artists/${id}/top-tracks?country=us`)
    .pipe(map((data:any)=> data['tracks']));
  }
}
