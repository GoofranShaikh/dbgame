import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { GameDbService } from 'src/app/services/game-db.service';
import { ActivatedRoute, Params,Router } from '@angular/router';
import { APIResponse, Game } from '../model';
import { OnDestroy } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public sort: string="";
  public games:Array<Game>=[];
  public paramsSubs!:Subscription;
  public gameSubs!:Subscription;
  constructor(private _service:GameDbService,private _route:ActivatedRoute, private _router:Router) { }

  ngOnInit(): void {
    this.paramsSubs=this._route.params.subscribe((params:Params)=>{
    if(params['game-search']){
     this.getGames('metacrit',params['game-search'])
    //console.log(params)
    }
    else{
      this.getGames('metacrit')
    }
  });

 

  }


  getGames(sort:string,search?:string): void{
    this.gameSubs=this._service.getGameList(sort,search).subscribe((gameList:APIResponse<Game>)=>{
     
      this.games=gameList.results

     // console.log(gameList)
    })

  }

  viewDescription(gameId:string):void{
    this._router.navigate(['gameDetails',gameId])
  }



  ngOnDestroy():void{
    if(this.gameSubs){
      this.paramsSubs.unsubscribe()
    }

    if (this.paramsSubs) {
      this.paramsSubs.unsubscribe();
    }
  }

}
