import { Component, Inject } from "@angular/core";
import { NOTES } from "src/notes";
import { Router, RouterModule } from "@angular/router";

@Component({
    selector: 'app-note-detail',
    standalone: true,
    templateUrl: './note-detail.component.html',
    styleUrls: ['./note-detail.component.css'],
    imports: [RouterModule]
})

export class NoteDetailComponent { }