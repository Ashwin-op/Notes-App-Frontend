import {Injectable} from '@angular/core';
import {Note} from "./note.model";

@Injectable({
  providedIn: 'root'
})
export class NotesService {
  private _notes: Note[] = new Array<Note>();

  constructor() {
  }

  get(id: number): Note {
    return this._notes[id];
  }

  getAll(): Note[] {
    return this._notes;
  }

  add(note: Note): number {
    // This method will add a new note to the notes array and return the id (index) of the added note
    return this._notes.push(note) - 1;
  }

  update(id: number, note: Note) {
    this._notes[id] = note;
  }

  delete(id: number) {
    this._notes.splice(id, 1);
  }
}
