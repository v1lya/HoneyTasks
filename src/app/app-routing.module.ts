import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/main', pathMatch: 'full' },
  {
    path: 'main',
    loadChildren: () =>
      import('./honey-subjects/honey-subjects.module').then(
        (m) => m.HoneySubjectsModule
      ),
  },
  {
    path: 'events',
    loadChildren: () =>
      import('./honey-subjects/honey-subjects.module').then(
        (m) => m.HoneySubjectsModule
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
