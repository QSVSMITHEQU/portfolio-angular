import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router"; 
import { AboutComponent } from "./pages/about/about.component";
import { ItemComponent } from "./pages/item/item.component";
import { PortfolioComponent } from "./pages/portfolio/portfolio.component";
import { TerminosComponent } from "./pages/terminos/terminos.component";


const app_routes: Routes = [
{ path: 'home', component: PortfolioComponent},
{ path: 'about', component: AboutComponent}, //control space to put the import directly.
{ path: 'item', component: ItemComponent},
{ path: 'terminos', component: TerminosComponent},
{ path: '**', pathMatch: 'full', redirectTo: 'home'} //redirect to the main page, component portfolio
];

@NgModule ({
    imports: [
        RouterModule.forRoot(app_routes, {useHash:true})],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {

}

