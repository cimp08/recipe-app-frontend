import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { ViewComponent } from './view/view.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { AuthGuard } from 'src/app/shared/auth.guard';

const routes: Routes = [
  { path: 'list', redirectTo: 'list/index', pathMatch: 'full' },
  {
    path: 'list/index',
    component: IndexComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'list/:listId/view',
    component: ViewComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'list/create',
    component: CreateComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'list/:listId/edit',
    component: EditComponent,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListRoutingModule {}
