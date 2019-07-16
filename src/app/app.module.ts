import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CollaboratorListComponent } from './collaborator-list/collaborator-list.component';
import { CollaboratorService } from './collaborator.service';
import { HttpClientModule } from '@angular/common/http';
import { SectorListComponent } from './sector-list/sector-list.component';
import { FormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    CollaboratorListComponent,
    SectorListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [ CollaboratorService, DatePipe ],
  bootstrap: [AppComponent]
})
export class AppModule { }
