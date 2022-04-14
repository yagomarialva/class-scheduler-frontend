import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateComponent } from './components/classes/create/create.component';
import { ReadComponent } from './components/classes/read/read.component';
import { HomeComponent } from './components/view/home/home.component';


const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "classes",
    component: ReadComponent
  },
  {
    path: "classes/create",
    component: CreateComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
