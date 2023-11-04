import { Component } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { NOTES } from "src/notes";

@Component({
    selector: 'app-add-note',
    standalone: true,
    templateUrl: './add-note.component.html',
    styleUrls: ['./add-note.component.css'],
    imports: [ReactiveFormsModule]
})

export class AddNoteComponent {
    addNoteForm = new FormGroup({
        title: new FormControl('', Validators.required),
        text: new FormControl('', Validators.required)
    })
    addNote() {
        let title = this.addNoteForm.value.title ?? '';
        let text = this.addNoteForm.value.text ?? '';

        if (this.addNoteForm.valid) {
            let ids = NOTES.map((a) => a.id);
            let maxId = 0;
            if (ids.length > 0) {
                maxId = Math.max(...ids);
            }
            let newNote = {
                id: maxId + 1,
                title: title,
                text: text,
            };
            NOTES.unshift(newNote);
            this.addNoteForm.reset();
        }
    }
}



