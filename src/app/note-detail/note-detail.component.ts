import { Component, inject } from "@angular/core";
import { NOTES } from "src/notes";
import { Router, RouterModule, ActivatedRoute } from "@angular/router";
import { NgIf } from "@angular/common";

@Component({
    selector: 'app-note-detail',
    standalone: true,
    templateUrl: './note-detail.component.html',
    styleUrls: ['./note-detail.component.css'],
    imports: [
        RouterModule,
        NgIf]
})

export class NoteDetailComponent {
    activeRoute = inject(ActivatedRoute);
    id = Number(this.activeRoute.snapshot.paramMap.get('id'));
    note = NOTES.find((i) => i.id === this.id);
}