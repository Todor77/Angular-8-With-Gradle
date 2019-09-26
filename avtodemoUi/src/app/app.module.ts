import { BrowserModule} from "@angular/platform-browser";
import { NgModule} from "@angular/core";

import { AppComponent} from "./app.component";
import {FooterComponent} from "./components/footer/footer.component";
import {HeaderComponent} from "./header/header.component";
import {RouterModule} from "@angular/router";
import { AppRoutingModule } from './app-routing.module';
import { MainComponent } from './components/main/main.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
