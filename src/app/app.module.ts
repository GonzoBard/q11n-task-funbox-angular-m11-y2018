import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppService} from './services/app.service';
import {AppComponent} from './app.component';

import {CatalogComponent} from './components/catalog/catalog.component';
import {CatalogItemComponent} from './components/catalog-item/catalog-item.component';

@NgModule({
  declarations: [
    AppComponent,
    CatalogComponent,
    CatalogItemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
