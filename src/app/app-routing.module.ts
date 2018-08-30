import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { SkillsComponent } from './skills/skills.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';

// import { HomeComponent } from '../app/home/home.component'; 
// import { AboutComponent} from '../app/about/about.component';
// import { ContactComponent} from '../app/contact/contact.component';
// import { ProjectsComponent} from '../app/projects/projects.component';
// import { SkillsComponent} from '../app/skills/skills.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'skills', component: SkillsComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [HomeComponent, AboutComponent, ContactComponent, ProjectsComponent, SkillsComponent]