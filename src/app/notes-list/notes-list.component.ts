import { Component } from "@angular/core";
import { NOTES } from "src/notes";
import { NgFor } from "@angular/common";

@Component({
    selector: 'app-notes-list',
    standalone: true,
    templateUrl: './notes-list.component.html',
    styleUrls : ['./notes-list.component.css'],
    imports : [
        NgFor
    ]
})

export class NotesListComponent{
    notes = NOTES;
    show(title: string){
        alert(title);
    }
}