import { createSelector } from '@ngrx/store';
import { State } from 'src/app/reducers';
import { ContactsState } from '../reducer/contacts.reducer';

export const selectContactsState = (state: State) => state.contactsState;

export const selectContacts = createSelector(
    selectContactsState,
    (state: ContactsState) => {
        return state.filtredContacts;
    }
  );

export const SelectIsLoaderShowing = createSelector(
    selectContactsState,
    (state: ContactsState) => {
        return state.isLoaderShowing;
    }
  );
