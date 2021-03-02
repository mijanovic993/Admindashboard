import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { UsersAreaComponent } from './components/users-area/users-area.component';


const routes: Routes = [
  { path: '', component: MainComponent,
   children: [
    { path: 'users', component: UsersAreaComponent }]
  }
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
