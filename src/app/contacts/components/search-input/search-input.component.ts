import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { startSearch } from '../../store/actions/contacts.actions';
import { State } from 'src/app/reducers';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss']
})
export class SearchInputComponent implements OnInit {
  constructor(private store: Store<State>) { }

  ngOnInit(): void {
  }

  public async inputChanged(input: string): Promise<void> {
    this.store.dispatch(startSearch({input}));
  }

}
