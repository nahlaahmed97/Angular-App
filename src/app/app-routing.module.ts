import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodosComponent } from './components/todos/todos.component';
import {AlbumsComponent} from './components/pages/albums/albums.component';
import { PhotosComponent } from './components/photos/photos.component';
const routes: Routes = [
  {
    path: '',component: TodosComponent},
   { path: 'Albums', component: AlbumsComponent
  },

  { path: 'photos/:albumId', component: PhotosComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
