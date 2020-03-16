import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ContactRecord } from '../models/contact-record';

import { every, tap, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {
  private url = 'http://private-05627-frontendnewhire.apiary-mock.com/contact_list';

  constructor(private httpClient: HttpClient) { }

  public getContactList(): Promise<Array<ContactRecord>> {
    return this.httpClient.get<Array<ContactRecord>>(this.url)
    .pipe(map((contacts: Array<ContactRecord>) => {
        const newContacts = contacts.map(item => {
          item.driverType = this.trimAndLowerCase(item.driverType);
          item.phone = this.trimAndLowerCase(item.phone);
          item.email = this.trimAndLowerCase(item.email);
          if (!item.profile_image) {
            item.profile_image = 'assets/images/unknown.png';
          }
          return item;
        });
        return newContacts;
      })
      ).toPromise();
  }

  private trimAndLowerCase(input: string): string {
    if (input) {
      return input.trim().toLowerCase();
    }
  }
}
