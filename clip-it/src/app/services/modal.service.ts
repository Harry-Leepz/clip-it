import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  private visible = false;

  constructor() {}

  isModalOpen() {
    return this.visible;
  }

  toggleModal() {
    this.visible = !this.visible; // toggle the value from true to false, and vice versa
  }
}
