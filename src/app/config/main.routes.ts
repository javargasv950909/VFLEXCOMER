import { Routes } from '@angular/router';
import { DashboardComponent } from '../components/pages/dashboard/dashboard.component';
import { CONSTANTS_URIS } from '../shared/constants/constants.uris';
import { PerfilComponent } from '../components/pages/perfil/perfil.component';
import { EstadisticasComponent } from '../components/pages/estadisticas/estadisticas.component';
import { InventarioComponent } from '../components/pages/inventario/inventario.component';
import { CompraComponent } from '../components/pages/compra/compra.component';
import { VentaComponent } from '../components/pages/venta/venta.component';
import { SoporteComponent } from '../components/pages/soporte/soporte.component';


export const APP_ROUTES: Routes = [
    {path: CONSTANTS_URIS.PANTALLADASHBOARD, component: DashboardComponent},
    {path: CONSTANTS_URIS.PANTALLAPERFIL, component: PerfilComponent},
    {path: CONSTANTS_URIS.PANTALLAESTADISTICAS, component: EstadisticasComponent},
    {path: CONSTANTS_URIS.PANTALLAINVENTARIO, component: InventarioComponent},
    {path: CONSTANTS_URIS.PANTALLACOMPRA, component: CompraComponent},
    {path: CONSTANTS_URIS.PANTALLAVENTA, component: VentaComponent},
    {path: CONSTANTS_URIS.PANTALLASOPORTE, component: SoporteComponent},
    {path: '', redirectTo: CONSTANTS_URIS.PANTALLADASHBOARD, pathMatch: 'full'},
] 