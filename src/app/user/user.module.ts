import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { HomepageComponent } from './homepage/homepage.component';
import { HeaderUserComponent } from './header-user/header-user.component';
import { FooterUserComponent } from './footer-user/footer-user.component';
import { AboutpageComponent } from './aboutpage/aboutpage.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    HomepageComponent,
    HeaderUserComponent,
    FooterUserComponent,
    AboutpageComponent,

  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule,


  ]
})
export class UserModule { }
