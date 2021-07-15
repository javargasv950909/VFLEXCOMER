import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//Modulos
import { RouterModule } from '@angular/router';
import {AppRoutingModule} from './app-routing.module'; 
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatBadgeModule} from '@angular/material/badge';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatButtonModule} from '@angular/material/button';

//Componentes
import { SidenavComponent } from './components/shared/sidenav/sidenav.component';
import { DashboardComponent } from './components/pages/dashboard/dashboard.component';
import { PerfilComponent } from './components/pages/perfil/perfil.component';
import { InventarioComponent } from './components/pages/inventario/inventario.component';
import { EstadisticasComponent } from './components/pages/estadisticas/estadisticas.component';
import { TopbarComponent } from './components/shared/topbar/topbar.component';
import { VentaComponent } from './components/pages/venta/venta.component';
import { CompraComponent } from './components/pages/compra/compra.component';
import { SoporteComponent } from './components/pages/soporte/soporte.component';
import { FooterComponent } from './components/shared/footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    DashboardComponent,
    PerfilComponent,
    InventarioComponent,
    EstadisticasComponent,
    TopbarComponent,
    VentaComponent,
    CompraComponent,
    SoporteComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    AppRoutingModule,
    RouterModule,
    MatToolbarModule,
    MatBadgeModule,
    MatTableModule,
    MatPaginatorModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class AppModule { }
