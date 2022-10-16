import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './components/not-found/not-found.component';

const routes :Routes=[

    {
      path:'**',
      redirectTo:'not-found',
      pathMatch:'full'
    },
    {
      path:'not-found',
      component:NotFoundComponent
    }

]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    [ RouterModule.forRoot(routes)],
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
