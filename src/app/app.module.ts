import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { ServiceWorkerModule } from '@angular/service-worker';
import { AppComponent } from './app.component';

import { environment } from '../environments/environment';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './modules/material/material.module';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { HttpModule } from '@angular/http';
import { DetailsPageComponent } from './pages/details-page/details-page/details-page.component';
import { SearchDialogComponent } from './components/search-dialog/search-dialog.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ResultPageComponent } from './pages/result-page/result-page.component';

import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { Jsonp } from '@angular/http/src/http';
import { JsonpModule } from '@angular/http';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    HomePageComponent,
    DetailsPageComponent,
    SearchDialogComponent,
    ResultPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpModule,
    MaterialModule,
    FormsModule,
    InfiniteScrollModule,
    JsonpModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production })
  ],
  entryComponents: [
    SearchDialogComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
