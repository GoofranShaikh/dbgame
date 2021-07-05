import { Component, OnInit } from '@angular/core';
import {GameDbService} from '../../services/game-db.service'
import { ActivatedRoute, Params } from '@angular/router';
import { APIResponse, Game } from '../model';

@Component({
  selector: 'app-gamedetails',
  templateUrl: './gamedetails.component.html',
  styleUrls: ['./gamedetails.component.scss']
})
export class GamedetailsComponent implements OnInit {
  gameDescription!: Game;
  rating!:string;
  constructor(private _httpService:GameDbService, private activeRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activeRoute.params.subscribe((params:Params)=>{
      if(params['id']){
      //  console.log("parmsfound")
        this.gameDetails(params['id'])
      }
    })

   


  }

  gameDetails(gameId:string){
    this._httpService.getGameDetails(gameId).subscribe((details:any)=>{
     // console.log("detailCOmponent")
     // console.log(details)
     this.rating=details.rating*40+'px';
      this.gameDescription=details
      
    
     // console.log(this.gameDescription)
   
 

    })
  }

}
