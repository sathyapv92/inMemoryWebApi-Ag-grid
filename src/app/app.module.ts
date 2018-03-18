import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {AgGridModule} from "ag-grid-angular/main";
import {AppComponent} from "./app.component";
import {MyGridApplicationComponent} from "./my-grid-application/my-grid-application.component";
import {RedComponentComponent} from "./red-component/red-component.component";
//import { AgGridModule } from "ag-grid-angular/dist/aggrid.module";
//import { AgGridModule } from "ag-grid-angular";
import "ag-grid-enterprise";
import { HttpModule } from "@angular/http";
import { Service } from "./my-grid-application/service";
import { InMemoryWebApiModule } from "angular-in-memory-web-api";
import { BookData } from "./data";
@NgModule({
    declarations: [
        AppComponent,
        MyGridApplicationComponent,
        RedComponentComponent
    ],
    imports: [
        BrowserModule,
        HttpModule,
        AgGridModule.withComponents(
            [
                RedComponentComponent
                ]
             
         
        ),
        InMemoryWebApiModule.forRoot(BookData)
    ],
    providers: [Service],
    bootstrap: [AppComponent]
})
export class AppModule {
}
