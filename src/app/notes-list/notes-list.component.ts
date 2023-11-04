import { Component } from "@angular/core";
import { NOTES } from "src/notes";

@Component({
    selector: 'app-notes-list',
    standalone: true,
    templateUrl: './notes-list.component.html',
    styleUrls : ['./notes-list.component.css']
})

export class NotesListComponent{
    notes = NOTES;
}