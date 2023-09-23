import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './not-found/not-found.component';
import { HeaderComponent } from './header/header.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  declarations: [NotFoundComponent, HeaderComponent],
  imports: [CommonModule, FontAwesomeModule, RouterModule, AppRoutingModule],
  exports: [HeaderComponent, NotFoundComponent],
})
export class SharedModule {}
