import { Component } from '@angular/core';
import { NOTES } from 'src/notes';
import { NgFor } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-notes-list',
  standalone: true,
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.css'],
  imports: [
    NgFor,
    RouterModule],
})

export class NotesListComponent {
  notes = NOTES;
  show(title: string) {
    alert(title);
  }
}
