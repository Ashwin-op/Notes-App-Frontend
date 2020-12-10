import {Component, OnInit} from '@angular/core';
import {Note} from "../../shared/note.model";
import {NotesService} from "../../shared/notes.service";

@Component({
  selector: 'app-notes-list',
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.scss']
})
export class NotesListComponent implements OnInit {

  notes: Note[] = new Array<Note>();

  constructor(private notesService: NotesService) {
  }

  ngOnInit(): void {
    // Retrieve all notes from NotesService
    this.notes = this.notesService.getAll();
  }

  onDelete(id: number) {
    this.notesService.delete(id);
  }

}
