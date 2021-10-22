import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HuntListComponent } from './components/hunt-list/hunt-list.component';
import { HuntService } from './services/hunt.service';

@NgModule({
  declarations: [
    AppComponent,
    HuntListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [
    HuntService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
