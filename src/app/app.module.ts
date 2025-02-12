import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { HttpClientModule } from "@angular/common/http";
import { LoginComponent } from "./login/login.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { MatButtonModule } from "@angular/material/button";
import { MatInputModule } from "@angular/material/input";
import { MatFormFieldModule } from "@angular/material/form-field";
import { HomeComponent } from './home/home.component';
import { LayoutToDoListComponent } from './layout-to-do-list/layout-to-do-list.component';
import { FormsModule } from '@angular/forms'; 


@NgModule({
  declarations: [AppComponent, LoginComponent, HomeComponent, LayoutToDoListComponent],
  imports: [
    FormsModule,
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    BrowserModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
