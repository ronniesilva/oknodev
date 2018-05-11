import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

// firebase
import { environment } from '../environments/environment';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AppRoutingModule } from './app-routing.module';

import { ServiceWorkerModule } from '@angular/service-worker';

import { AppComponent } from './app.component';

import { PagesModule } from './pages/pages.module';
import { AuthService } from './providers/auth.service';
import { RatingService } from './providers/rating.service';
import { CompaniesService } from './providers/companies.service';
import { UsersService } from './providers/users.service';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,

    // Routing
    AppRoutingModule,

    // Firebase
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule.enablePersistence(),
    AngularFireAuthModule,
    AngularFireDatabaseModule,

    // Meus modulos
    PagesModule,

    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production }),
  ],
  providers: [
    AuthService,
    CompaniesService,
    RatingService,
    UsersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
