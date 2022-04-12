import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import { VickySignupComponent } from './vicky-signup/vicky-signup.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import { VickyLoginComponent } from './vicky-login/vicky-login.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import { VVigneshComponent } from './v-vignesh/v-vignesh.component';
import { VickyStateComponent } from './vicky-state/vicky-state.component';
import {MatDialogModule} from '@angular/material/dialog';
import { DialogExampleComponent } from './dialog-example/dialog-example.component';
import {MatCardModule} from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { HeroService } from './hero.service';
import { MaterialFileInputModule } from 'ngx-material-file-input';
import { ReactiveFormsModule } from '@angular/forms';
import { SimpleNotificationsModule } from 'angular2-notifications'


const routes: Routes = [
  {path:'vignesh',component:VVigneshComponent},
  {path:'VickySignup',component:VickySignupComponent},
  {path:'VickyLogin',component:VickyLoginComponent},
  {path:'19MIS0072',component:VickyStateComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    VickySignupComponent,
    VickyLoginComponent,
    VVigneshComponent,
    VickyStateComponent,
    DialogExampleComponent,
    
  ],
  entryComponents:[DialogExampleComponent],
  imports: [
    BrowserModule,MatSelectModule,MatToolbarModule,MatIconModule,MatCheckboxModule,
    MatListModule,MaterialFileInputModule,MatDialogModule,MatCardModule,
    AppRoutingModule,RouterModule.forRoot(routes),MatSidenavModule,FormsModule,
    BrowserAnimationsModule,MatButtonModule,MatInputModule,MatFormFieldModule,
    ReactiveFormsModule,HttpClientModule,SimpleNotificationsModule.forRoot()
  ],
  providers: [HeroService],
  bootstrap: [AppComponent]
})
export class AppModule { }
