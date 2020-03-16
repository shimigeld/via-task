import { Component, OnInit } from '@angular/core';

import { ContactRecord } from '../../models/contact-record';

import { Observable } from 'rxjs';

import { Store } from '@ngrx/store';
import { State } from '../../../reducers';
import { selectContacts, SelectIsLoaderShowing } from '../../store/selectors/contacts.selectors';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
  public contactsList$: Observable<Array<ContactRecord>>;
  public showLoader$: Observable<boolean>;

  constructor(private store: Store<State>) { }

  ngOnInit() {
    this.contactsList$ = this.store.select(selectContacts);
    this.showLoader$ = this.store.select(SelectIsLoaderShowing);
  }

}
