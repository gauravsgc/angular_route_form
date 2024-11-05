import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { PageNotFoundComponentComponent } from './page-not-found-component/page-not-found-component.component';
import { CompanyComponent } from './company/company.component';
import { EmployeeComponent } from './employee/employee.component';

export const routes: Routes = [
    {path:'',title:'Home',component:HomeComponent},
    {path:'About',title:'About',component:AboutComponent,
        children: [
            { path: 'company', component: CompanyComponent },
            { path: 'employee', component: EmployeeComponent},
          ],
    },
    {path:'Contact',title:'Contact',component:ContactComponent},
    { path: '**', component: PageNotFoundComponentComponent}, 
];
