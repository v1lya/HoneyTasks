import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/main', pathMatch: 'full' },
  {
    path: 'main',
    loadChildren: () =>
      import('./honey-events/honey-events.module').then(
        (m) => m.HoneyEventsModule
      ),
  },
  {
    path: 'events',
    loadChildren: () =>
      import('./honey-events/honey-events.module').then(
        (m) => m.HoneyEventsModule
      ),
  },
  {
    path: 'forms',
    loadChildren: () =>
      import('./honey-forms/honey-forms.module').then(
        (m) => m.HoneyFormsModule
      ),
  },
  { path: '**', redirectTo: '/main' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
