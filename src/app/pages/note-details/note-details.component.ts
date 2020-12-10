import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from "@angular/router";
import {NgForm} from "@angular/forms";
import {Note} from "../../shared/note.model";
import {NotesService} from "../../shared/notes.service";

@Component({
  selector: 'app-note-details',
  templateUrl: './note-details.component.html',
  styleUrls: ['./note-details.component.scss']
})
export class NoteDetailsComponent implements OnInit {

  note!: Note;
  noteId!: number;
  newNote!: boolean;

  constructor(private notesService: NotesService, private router: Router, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    // Check if it's an already existing note (editing) or a new note (creating)
    this.activatedRoute.params.subscribe((params: Params) => {
      this.note = new Note();
      if (params.id) {
        this.note = this.notesService.get(params.id);
        this.noteId = params.id;
        this.newNote = false;
      } else {
        this.newNote = true;
      }
    })
  }

  onSubmit(form: NgForm) {
    if (this.newNote) {
      // Save the note
      this.notesService.add(form.value);
    } else {
      this.notesService.update(this.noteId, form.value);
    }
    // Redirect to homepage
    this.router.navigateByUrl('/');
  }

  onCancel() {
    // Redirect to homepage
    this.router.navigateByUrl('/');
  }

}
