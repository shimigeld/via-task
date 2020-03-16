import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from '../../../reducers';
import { Observable } from 'rxjs';
import { ContactRecord } from '../../models/contact-record';
import { selectContacts, SelectIsLoaderShowing } from '../../store/selectors/contacts.selectors';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
  public contactList$: Observable<Array<ContactRecord>> = null;
  public showLoader$: Observable<boolean>;
  constructor(private store: Store<State>) { }

  ngOnInit() {
    this.contactList$ = this.store.select(selectContacts);
    this.showLoader$ = this.store.select(SelectIsLoaderShowing);
  }

}
