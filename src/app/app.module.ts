import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactComponent } from './modules/components/contact/contact.component';
import { ServiceComponent } from './modules/components/service/service.component';
import { NavbarComponent } from './modules/components/navbar/navbar.component';
import { FooterComponent } from './modules/components/footer/footer.component';
import { HomeComponent } from './modules/components/home/home.component';
import { FormsModule } from '@angular/forms';
import { ProjectComponent } from './modules/components/project/project.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    ServiceComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    ProjectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
