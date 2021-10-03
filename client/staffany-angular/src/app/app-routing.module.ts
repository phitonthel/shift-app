import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ShiftComponent } from './shift/shift.component';

// Misc
import { AboutComponent } from './about/about.component'
import { PageNotFoundComponent } from './page-not-found/page-not-found.component'

const routes: Routes = [
  { path: '', redirectTo: '/shift', pathMatch: 'full' },
  { path: 'shift', component: ShiftComponent },
  { path: 'about', component: AboutComponent },
  { path: '**', component: PageNotFoundComponent },  // Wildcard route for a 404
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}