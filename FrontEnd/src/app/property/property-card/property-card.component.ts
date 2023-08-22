import { style } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-property-card',
    //template: '<h1>this is suraj</h1>'
    templateUrl:'property-card.component.html',
    styleUrls:['property-card.component.css']
})

export class PropertCardComponent {
    
    property : any={
        "ID":1,
        "Type" : "House",
        "Price" : 12000
    }
}