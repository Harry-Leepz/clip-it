import { Component, OnInit } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-authentication-modal',
  templateUrl: './authentication-modal.component.html',
  styleUrls: ['./authentication-modal.component.css'],
})
export class AuthenticationModalComponent implements OnInit {
  constructor(public modal: ModalService) {}

  ngOnInit(): void {
    this.modal.register('auth');
    this.modal.register('test');
  }
}
