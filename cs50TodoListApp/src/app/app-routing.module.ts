import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './user/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { LogoutComponent } from './user/logout/logout.component';
import { AuthGuard } from './user/auth.guard';
import { TaskCreateComponent } from './user/task-create/task-create.component';
import { RegisterComponent } from './user/user-create/user-create.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent },
  { path: '', component: HomeComponent, canActivate: [AuthGuard] },
  // { path: '**', redirectTo: '' },
  { path: 'new', component: TaskCreateComponent, canActivate: [AuthGuard] },
  { path: 'register', component: RegisterComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
