import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';
import { LanguageService } from 'src/app/services/language.service';
import { Contact } from '../models/Contact';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss'],
})
export class ContactFormComponent implements OnInit {
  result: Observable<any>;

  contact: Contact;
  contactForm: FormGroup = new FormGroup({
    name: new FormControl(null),
    email: new FormControl(null, [
      Validators.required,
      Validators.pattern('[A-Za-z0-9._%-]+@[A-Za-z0-9._%-]+\\.[A-Za-z]{2,9}'),
    ]),

    subject: new FormControl(null, Validators.required),
    message: new FormControl(null, Validators.required),
  });

  constructor(
    public language: LanguageService,
    private modal: NgbModal // private fireFunctions: AngularFireFunctions,
  ) {}

  ngOnInit(): void {}

  onSubmit() {
    this.contact = this.contactForm.value;

    // const callable = this.fireFunctions.httpsCallable('emailContactForm');
    // this.result = callable({
    //   email: this.contact.email,
    //   province: this.contact.province,
    //   firstName: this.contact.firstName,
    //   lastName: this.contact.lastName,
    //   language: this.contact.language,
    //   phone: this.contact.phone,
    //   message: this.contact.message,
    // });
    // this.result.subscribe();

    this.contactForm.reset();
  }

  close() {
    this.modal.dismissAll();
  }

  openModal(content) {
    this.modal.open(content, { size: 'md', centered: true });
  }
}
