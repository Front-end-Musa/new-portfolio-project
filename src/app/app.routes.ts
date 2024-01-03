import { Routes } from '@angular/router';
import { MainPageComponent } from './components/main-page/main-page.component';
import { AboutComponent } from './components/about/about.component';
import { BlogComponent } from './components/blog/blog.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ServicesComponent } from './components/services/services.component';

export const routes: Routes = [
    { path: '', component: MainPageComponent },
    { path: 'about-me', component: AboutComponent },
    { path: 'projects', component: ProjectsComponent },
    { path: 'services', component: ServicesComponent },
    { path: 'blog', component: BlogComponent },
  ];
