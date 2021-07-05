import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { forkJoin, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {environment as env} from 'src/environments/environment'
import { APIResponse, Game } from '../components/model';




@Injectable({
  providedIn: 'root'
})
export class GameDbService {

  constructor(private _http: HttpClient) { }


  getGameList( ordering:string,search?:string):Observable<APIResponse<Game>>{
    let params=new HttpParams().set('ordering',ordering)
    if(search){
     params= new HttpParams().set('ordering',ordering).set('search',search)
    }
    return this._http.get<APIResponse<Game>>(`${env.BaseUrl}/games`,{params:params});
  }


  getGameDetails(id:string):Observable<Game>{
  const gameDetails= this._http.get(`${env.BaseUrl}/games/${id}`);
  const gameScreenshots=this._http.get(`${env.BaseUrl}/games/${id}/screenshots`);
  const videoTrailer=this._http.get(`${env.BaseUrl}/games/${id}/movies`);
  return forkJoin({
    gameDetails,
    gameScreenshots,
    videoTrailer,
  }).pipe(
    map((response:any)=>{
      return{
        ...response['gameDetails'],
        screenshots:response['gameScreenshots']?.results,
        video:response['videoTrailer']?.results
      }
    })
  )

  }
}
