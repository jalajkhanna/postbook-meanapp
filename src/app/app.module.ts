import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// for ngModel
import { FormsModule} from '@angular/forms';
// for angular material design
import {MatInputModule, MatCardModule, MatButtonModule, MatToolbarModule, MatExpansionModule} from '@angular/material';

import { AppComponent } from './app.component';
import { CreatePostComponent } from './create-post/create-post.component';
import { HeaderComponent} from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ShowPostComponent} from './show-post/show-post.component';

@NgModule({
  declarations: [
    AppComponent,
    CreatePostComponent,
    HeaderComponent,
    ShowPostComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatExpansionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
