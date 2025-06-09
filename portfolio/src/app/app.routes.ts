import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { PortflioDetailsComponent } from './portflio-details/portflio-details.component';
import { ServiceDetailsComponent } from './service-details/service-details.component';
import { StarterPageComponent } from './starter-page/starter-page.component';

export const routes: Routes = [
    { path: "", component: LandingPageComponent},
    { path: "portfolio", component: PortflioDetailsComponent },
    { path: "servics", component: ServiceDetailsComponent },
    { path: "starter", component: StarterPageComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class RoutingModule {}
