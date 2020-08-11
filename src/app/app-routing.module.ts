import { NgModule } from '@angular/core';
import { Routes,Router, RouterModule } from '@angular/router';
import { StartcheckinComponent } from './components/startcheckin/startcheckin.component';
import { CheckinComponent } from './components/checkin/checkin.component';
import { ConfirmcheckinComponent } from './components/confirmcheckin/confirmcheckin.component';
import { MaincheckinComponent } from './components/maincheckin/maincheckin.component';
import { LoginComponent } from '././reservationcomponents/login/login.component';
import { HomepageComponent } from './common/homepage/homepage.component';
import { RegisterComponent } from './reservationcomponents/register/register.component';
import { FindFlightsComponent } from './reservationcomponents/find-flights/find-flights.component';
import { DisplayFlightsComponent } from './reservationcomponents/display-flights/display-flights.component';
const routes:Routes=[
    {path:'', redirectTo:'',pathMatch:'full'},
    {
        path:'homepage',
        component:HomepageComponent
    },

    {
        path:'register',
        component:RegisterComponent
    },
    
    {
        path:'login',
        component:LoginComponent
    },

   
    {
        path:'find-flights',
        component:FindFlightsComponent
    },
    {
        path:'display-flights',
        component:DisplayFlightsComponent
    },
    
    {
        path:'maincheckin',
        component:MaincheckinComponent
    },

{
    path:'startCheckIn',
    component:StartcheckinComponent
},
{
    path:'checkin/:id',
    component:CheckinComponent
},
{
    path:'confirm',
    component:ConfirmcheckinComponent
}
];

@NgModule({
imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})

export class AppRoutingModule{ }