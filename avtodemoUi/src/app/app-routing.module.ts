import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from "@angular/router";
import { AboutComponent} from "./about/about.component";
import { ContactComponent} from "./contact/contact.component";
import { HomeComponent} from "./home/home.component";
import { LoginModalComponent} from "./login-modal/login-modal.component";
import { LoginComponent} from "./login/login.component";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'login', component: LoginModalComponent},
  {path: 'loginpage', component: LoginComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
