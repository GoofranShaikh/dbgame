import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { HomeComponent } from './components/home/home.component';
import { GameDbService } from './services/game-db.service';
import {HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpHeaderInterceptor } from './header/http-header.interceptor';
import { HttpErrorInterceptor } from './header/http-error.interceptor';
import { GamedetailsComponent } from './components/gamedetails/gamedetails.component';
import { GameTabsComponent, SafePipe } from './components/game-tabs/game-tabs.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
  
    SafePipe,
    AppComponent,
    SearchBarComponent,
    HomeComponent,
    GamedetailsComponent,
    GameTabsComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [GameDbService,
    {
      provide:HTTP_INTERCEPTORS,
      useClass:HttpHeaderInterceptor,
      multi:true
    },
  {
    provide:HTTP_INTERCEPTORS,
    useClass:HttpErrorInterceptor,
    multi:true
  }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
