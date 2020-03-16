import { createReducer, on, Action } from '@ngrx/store';
import { setContacts, startSearch, showLoader, hideLoader } from '../actions/contacts.actions';
import { ContactRecord } from '../../models/contact-record';

export interface ContactsState {
    contacts: Array<ContactRecord>;
    filtredContacts: Array<ContactRecord>;
    isLoaderShowing: boolean;
  }

export const initialState: ContactsState = {
    contacts: null,
    filtredContacts: null,
    isLoaderShowing: false
};

const contactsReducer = createReducer(
    initialState,
    on(setContacts, (state, { contacts }) => ({ ...state, contacts, filtredContacts: contacts})),
    on(startSearch, (state, { input }) => ({ ...state, filtredContacts: state.contacts.filter(contact => {
        if (input && input.length > 0) {
            return contact.name.toLowerCase().includes(input.toLowerCase()) === true;
        } else {
            return state.contacts;
        }
    })})),
    on(showLoader, (state) => ({ ...state, isLoaderShowing: true})),
    on(hideLoader, (state) => ({ ...state, isLoaderShowing: false})),

);

export function ContactsReducer(state: ContactsState | undefined, action: Action) {
    return contactsReducer(state, action);
}
