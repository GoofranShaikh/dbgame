import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GamedetailsComponent } from './components/gamedetails/gamedetails.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
{path:'',
component:HomeComponent
},
{path:'search/:game-search',
component:HomeComponent
},
{
  path:'gameDetails/:id',
  component:GamedetailsComponent
}

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
