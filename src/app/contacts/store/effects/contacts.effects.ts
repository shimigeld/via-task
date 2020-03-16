import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType, rootEffectsInit } from '@ngrx/effects';

import { exhaustMap, tap } from 'rxjs/operators';
import { setContacts, showLoader, hideLoader } from '../actions/contacts.actions';
import { Store } from '@ngrx/store';
import { State } from 'src/app/reducers';
import { ContactService } from '../../services/contact.service';
import { ContactRecord } from '../../models/contact-record';


@Injectable()
export class ContactsEffects {
    constructor(
        private store: Store<State>,
        private actions$: Actions,
        private contactService: ContactService
      ) {}


    init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(rootEffectsInit),
      exhaustMap(async (action) => {
        this.store.dispatch(showLoader());
        return await this.contactService.getContactList();
        }),
        tap((contacts: Array<ContactRecord>) => {
            this.store.dispatch(setContacts({contacts}));
            this.store.dispatch(hideLoader());
        })), { dispatch: false });
}
