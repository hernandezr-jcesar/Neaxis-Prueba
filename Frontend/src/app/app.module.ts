import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './_components/login/login.component';
import { RegisterComponent } from './_components/register/register.component';
import { HomeComponent } from './_components/home/home.component';
import { NotesComponent } from './_components/notes/notes.component';
import { HttpClientModule } from '@angular/common/http';
import { httpInterceptorProviders } from './_helpers/http.interceptor';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatchPasswordDirective } from './directives/match-password.directive';
import { PasswordModule } from 'primeng/password';
import { ToastrModule } from 'ngx-toastr';
import { AddNotesComponent } from './_components/add-notes/add-notes.component';
import { EditNotesComponent } from './_components/edit-notes/edit-notes.component';
import { DelNotesComponent } from './_components/del-notes/del-notes.component';
@NgModule({
  declarations: [
    AppComponent,
    MatchPasswordDirective,

    LoginComponent,
    RegisterComponent,
    HomeComponent,
    NotesComponent,
    AddNotesComponent,
    EditNotesComponent,
    DelNotesComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PasswordModule,
    ToastrModule.forRoot(), // Add ToastrModule.forRoot() here
  ],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor() {}
}
