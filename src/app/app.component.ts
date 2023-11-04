import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { NotesListComponent } from './notes-list/notes-list.component';
import { NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
	selector: 'app-root',
	standalone: true,
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css'],
	imports: [
		HeaderComponent,
		NgFor,
		NotesListComponent,
		FormsModule,
		ReactiveFormsModule,
	],
})

export class AppComponent {
	loginForm = new FormGroup({
		username: new FormControl('', Validators.required),
		password: new FormControl('', Validators.required),
	});
	name = new FormControl('');
	login() {
		alert(this.loginForm.value.username + ' | ' + this.loginForm.value.password);
	}
}
