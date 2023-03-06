import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { combineLatest } from 'rxjs';
import { AuthorizationGuard } from './authorization.guard';
import { AuthenticationGuard } from './guards/authentication.guard';
import { CourseComponent } from './course/course.component';
import { LoginComponent } from './login/login.component';
import { ManageDiplomasComponent } from './manage-diplomas/manage-diplomas.component';
import { ManageCategoriesComponent } from './manage-categories/manage-categories.component';
import { OrderComponent } from './order/order.component';
import { OrdersComponent } from './orders/orders.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';
import { FinishDiplomaComponent } from './finish-diploma/finish-diploma.component';
import { UsersListComponent } from './users-list/users-list.component';

const routes: Routes = [
  {
    path: 'diplomas/course',
    component: CourseComponent,
    canActivate: [AuthenticationGuard],
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'users/order',
    component: OrderComponent,
    canActivate: [AuthenticationGuard],
  },
  {
    path: 'users/all-orders',
    component: OrdersComponent,
    canActivate: [AuthorizationGuard],
  },
  {
    path: 'books/return',
    component: FinishDiplomaComponent,
    canActivate: [AuthenticationGuard],
  },
  {
    path: 'users/list',
    component: UsersListComponent,
    canActivate: [AuthorizationGuard],
  },
  {
    path: 'books/maintenance',
    component: ManageDiplomasComponent,
    canActivate: [AuthorizationGuard],
  },
  {
    path: 'books/categories',
    component: ManageCategoriesComponent,
    canActivate: [AuthorizationGuard],
  },
  {
    path: 'users/profile',
    component: ProfileComponent,
    canActivate: [AuthenticationGuard],
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}


