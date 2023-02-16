import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddTestComponent } from './add-test/add-test.component';
import { BrowseTestsComponent } from './browse-tests/browse-tests.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';

const routes: Routes = [
  {
    path: 'register',
    component: UserRegistrationComponent
  },
  {
    path: 'login',
    component: UserLoginComponent
  },
  {
    path: 'add-test',
    component: AddTestComponent
  },
  {
    path: 'browse-tests',
    component: BrowseTestsComponent
  },
  {
    path: '', redirectTo: '/register', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
