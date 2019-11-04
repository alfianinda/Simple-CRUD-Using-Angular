import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { FormsModule } from "@angular/forms";

import { NavbarComponent } from "./navbar/navbar.component";
import { HomeComponent } from "./home/home.component";
import { RegistrationComponent } from "./registration/registration.component";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    RegistrationComponent
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, NgbModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
