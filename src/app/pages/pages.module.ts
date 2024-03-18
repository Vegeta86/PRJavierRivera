import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { ComponentsModule } from '../components/components.module';
import { ServicesModule } from '../services/services.module';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { IntroPageComponent } from './intro-page/intro-page.component';
import { MatCardModule } from '@angular/material/card';



const routes: Routes = [
  { path: '', component: IntroPageComponent },
  { path: 'main-page', component: MainPageComponent },
];


@NgModule({
  declarations: [MainPageComponent, IntroPageComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ComponentsModule,
    MatSidenavModule,
    MatDividerModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule
  ],
  exports: [RouterModule, MainPageComponent,IntroPageComponent],
  providers: [ServicesModule]
})
export class PagesModule { }
