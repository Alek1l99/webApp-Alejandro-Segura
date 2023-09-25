import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from 'src/app/pages/home/home.component'
import { ProfileComponent } from './pages/profile/profile.component';
import { SkillsComponent } from './pages/skills/skills.component'
import {ContactComponent} from './pages/contact/contact.component'
import {PortfolioComponent} from './pages/portfolio/portfolio.component'

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'profile', component: ProfileComponent},
  { path: 'portfolio', component: PortfolioComponent},
  { path: 'skills', component: SkillsComponent},
  { path: 'contact', component: ContactComponent},
  {path:'**', redirectTo:'/'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
