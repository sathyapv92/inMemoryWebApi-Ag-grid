import { Http } from "@angular/http";
import { Injectable } from "@angular/core";
@Injectable()
export class Service {
    url:string;
    constructor(private http : Http) {
       // this.url ="https://jsonplaceholder.typicode.com/posts";
       this.getAll();
    }
    getAll() {
       this.url = "api/posts";
        return this.http.get(this.url)
        .map(response => response.json());
        
        }
}