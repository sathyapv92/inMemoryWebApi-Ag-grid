import {Component} from "@angular/core";
import {RedComponentComponent} from "../red-component/red-component.component";

import {GridOptions} from "ag-grid/main";
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Service } from "./service";

@Component({
    selector: 'app-my-grid-application',
    templateUrl: './my-grid-application.component.html'
})
export class MyGridApplicationComponent {
    gridOptions: GridOptions;
    columnDefs: any[]
    rowData: any[];
    gridOptions1: GridOptions;
    columnDefs1: any[]
    rowData1: any[];
   
    constructor(private Service : Service) {
      
      this.Service.getAll()
      .subscribe(posts => {this.rowData1 = posts;
        
  
        });

        this.gridOptions = <GridOptions>{};

        this.columnDefs = [
            {headerName: "Make", field: "make"},
            {headerName: "Model", field: "model", cellRendererFramework: RedComponentComponent},
            {headerName: "Price", field: "price"}
        ];

        this.rowData = [
            {make: "Toyota", model: "Celica", price: 35000},
            {make: "Ford", model: "Mondeo", price: 32000},
            {make: "Porsche", model: "Boxter", price: 72000}
        ]


        //sathya changes
        this.gridOptions1 = <GridOptions>{};
     
        this.columnDefs1 = [
            {headerName: "userId", field: "userId"},
            {headerName: "id", field: "id", cellRendererFramework: RedComponentComponent},
            {headerName: "body", field: "body"},
            {headerName: "title", field: "title"}
        ];

        
    }

    onGridReady(params) {
        params.api.sizeColumnsToFit();
    }

    selectAllRows() {
        this.gridOptions.api.selectAll();
    }
}

