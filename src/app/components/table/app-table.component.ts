import { Component } from "@angular/core";

import myData from "../../../db/json-tccfile.json";

interface Collaborators {
    index: any;
    name: String;
    age: Number;
    phone: String;
    balance: String;
}

@Component({
    selector: 'app-table',
    templateUrl: 'app-table.component.html'


})

export class TableComponent {
    collaborators:Collaborators[]=myData;
    
}