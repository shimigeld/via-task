import { Component } from '@angular/core';

import { Store } from '@ngrx/store';
import { startSearch } from '../../store/actions/contacts.actions';
import { State } from 'src/app/reducers';

@Component({
  selector: 'search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss']
})
export class SearchInputComponent {
  constructor(private store: Store<State>) { }

  public async inputChanged(input: string): Promise<void> {
    this.store.dispatch(startSearch({input}));
  }

}
