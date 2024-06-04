import { Routes } from '@angular/router';
import { HelloComponent } from './comp/hello/hello.component';

export const routes: Routes = [{
    path: 'hello', component: HelloComponent,
    runGuardsAndResolvers: 'always'
}];
