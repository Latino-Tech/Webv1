import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent},
  // { path: 'home', title: "Latino tech - Home", component: HomeComponent },
  // { path: 'signup', title: "Sign up", component: SignUpComponent },
  // { path: 'signin', title: "Sign in", component: SignInComponent },
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
