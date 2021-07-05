import { SecurityContext } from '@angular/core';
import { Component, OnInit,Input,Pipe,PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Game } from '../model';

@Component({
  selector: 'app-game-tabs',
  templateUrl: './game-tabs.component.html',
  styleUrls: ['./game-tabs.component.scss']
})
export class GameTabsComponent implements OnInit {
  @Input()
  game!: Game;
  aboutVisible:boolean=false;
  screenshotsVisible:boolean=false;
  trailerVisible:boolean=false;
  constructor() { }

  ngOnInit(): void {
    //console.log(this.game);
 
   
  }
  switchSection(e:any){
//  console.log(e.target.className)
  let element=e.target.className
  if (element=="game-about"){
    
    this.aboutVisible=true
    this.screenshotsVisible=false;
    this.trailerVisible=false;

    }
    else if(element=="game-screenshots"){
      this.aboutVisible=false
      this.screenshotsVisible=true;
      this.trailerVisible=false;
    }
    
    else if(element="game-trailer"){
      this.aboutVisible=false
      this.screenshotsVisible=false;
      this.trailerVisible=true;
    }
 
  }

  }

  @Pipe({ name: 'safe' })
 
export class SafePipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {}
  transform(URL:any) {
   return this.sanitizer.bypassSecurityTrustResourceUrl(URL);
   //return this.sanitizer.sanitize(SecurityContext.URL, URL)
  }
} 


