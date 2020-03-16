import { createAction, props } from '@ngrx/store';
import { ContactRecord } from '../../models/contact-record';

export const setContacts = createAction('[Contacts Effects] Set Contacts', props<{contacts: Array<ContactRecord>}>());
export const startSearch = createAction('[SearchInputComponent] Start Search', props<{input: string}>());

export const showLoader = createAction('[Loader] Show Loader');
export const hideLoader = createAction('[Loader] Hide Loader');

