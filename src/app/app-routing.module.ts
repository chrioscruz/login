import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes} from '@angular/router';
import { AccessComponent } from './access/access.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';

const appRoutes: Routes = [
    {
      path: '',
      redirectTo: '/home',
      pathMatch: 'full'
    },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'access',
    component: AccessComponent
  },
  {
    path: 'user',
    component: UserComponent
  }
];
@NgModule({
  exports: [
    RouterModule
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: []
})
export class AppRoutingModule { }
