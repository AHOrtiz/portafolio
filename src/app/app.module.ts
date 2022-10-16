import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { ProyectsComponent } from './components/proyects/proyects.component';
import { HabilidadesComponent } from './components/habilidades/habilidades.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { MenuComponent } from './components/menu/menu.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { LayoutComponent } from './components/layout/layout.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutMeComponent,
    ProyectsComponent,
    HabilidadesComponent,
    ContactoComponent,
    MenuComponent,
    NotFoundComponent,
    HomeComponent,
    LayoutComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
