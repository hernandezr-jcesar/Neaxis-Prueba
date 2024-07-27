import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Note } from '../../models/note.model';
import { NoteService } from '../../_services/note.service';
import { StorageService } from '../../_services/storage.service';
import { Router } from '@angular/router';
import { ToastMessageService } from '../../_services/toast-message.service';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css'],
})
export class NotesComponent {
  notes: Note[] = [];
  toSendNote: Note = {} as Note;

  selectedNote: Note | null = null; // Variable para almacenar la nota seleccionada
  showButtons: boolean = false;
  currentUser: any;
  isLoggedIn = false;
  isSingleSelected = false;

  constructor(
    private router: Router,
    private noteService: NoteService,
    private storageService: StorageService,
    private toastMessageService: ToastMessageService,
    private changeDetector: ChangeDetectorRef
  ) {}

  async ngOnInit() {
    this.isLoggedIn = this.storageService.isLoggedIn();
    if (!this.isLoggedIn) {
      this.storageService.clean();
      window.location.replace('/home');
    }
    if (this.isLoggedIn) {
      this.currentUser = this.storageService.getUser();

      this.noteService
        .getNotes(this.currentUser.idUser)
        .subscribe((data: Note[]) => {
          this.notes = data;
          this.selectedNote = null; // Reset for clarity
          this.showButtons = false; // Reset for clarity
          // console.log('Notas:');
          // console.log(this.notes);
        });
    }
  }

  onNoteClick(note: Note) {
    this.selectedNote = note;
    this.toSendNote = note;
    this.showButtons = true;
    // console.log(note);
    setTimeout(() => {
      this.onNoteDeselect();
    }, 10000); // Deseleccionar después de 10 segundos
  }

  onNoteDeselect() {
    this.selectedNote = null;
    this.showButtons = false;
  }

  onAddNoteClick() {
    this.router.navigate(['add-notes']);
  }
  onSeeNoteClick() {
    this.router.navigate(['see-notes'], {
      queryParams: { selectedNoteId: this.toSendNote?.idNote },
    });
  }
  onEditNoteClick() {
    this.router.navigate(['edit-notes'], {
      queryParams: { selectedNoteId: this.toSendNote?.idNote },
    });
  }
  onDeleteNoteClick() {
    this.router.navigate(['del-notes'], {
      queryParams: { selectedNoteId: this.toSendNote?.idNote },
    });
  }

  showToaster(mensaje: string, tipo: string) {
    this.toastMessageService.showtoast(mensaje, tipo);
  }
}
