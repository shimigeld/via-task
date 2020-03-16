import {
  ActionReducerMap,
} from '@ngrx/store';
import { ContactsState, ContactsReducer } from '../contacts/store/reducer/contacts.reducer';

export interface State {
  contactsState: ContactsState;
}

export const reducers: ActionReducerMap<State> = {
  contactsState: ContactsReducer
};
