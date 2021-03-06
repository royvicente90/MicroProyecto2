import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/register/register.component';
import { ListpelisComponent } from './components/listpelis/listpelis.component'
import { SelectedpostComponent } from './components/selectedpost/selectedpost.component'

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  //{ path: '**', pathMatch: 'full', redirectTo: 'home' },
  { path: 'register', component: RegisterComponent },
  { path: 'listpelis', component: ListpelisComponent},
  { path: 'listpelis/:postId', component: SelectedpostComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
