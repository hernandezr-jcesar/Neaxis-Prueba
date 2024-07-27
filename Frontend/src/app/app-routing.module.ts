import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './_components/register/register.component';
import { LoginComponent } from './_components/login/login.component';
import { HomeComponent } from './_components/home/home.component';
import { NotesComponent } from './_components/notes/notes.component';
import { AddNotesComponent } from './_components/add-notes/add-notes.component';
import { EditNotesComponent } from './_components/edit-notes/edit-notes.component';
import { DelNotesComponent } from './_components/del-notes/del-notes.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },

  { path: 'notes', component: NotesComponent },
  { path: 'add-notes', component: AddNotesComponent },
  { path: 'edit-notes', component: EditNotesComponent },
  { path: 'del-notes', component: DelNotesComponent },

  { path: '', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
