import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { AddcontactComponent } from './components/contacts/addcontact/addcontact.component';
import { LoginComponent } from './components/login/login.component';
import { StatusComponent } from './components/status/status.component';
import { authGuard } from './guard/auth.guard';

const routes: Routes = [
  { path: '', component: HomeComponent, canActivate:[authGuard] },
  { path: 'about', component: AboutComponent },
  {
    path: 'contacts',
    component: ContactsComponent,
    children: [
      { path: 'add', component: AddcontactComponent },
      { path: 'edit/:id', component: AddcontactComponent },
    ],
  },
  {path:'login', component: LoginComponent},
  {path:'**', component: StatusComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
