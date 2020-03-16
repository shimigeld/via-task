import { Component, OnInit, Input } from '@angular/core';
import { ContactRecord } from '../../models/contact-record';

@Component({
  selector: 'contact-card',
  templateUrl: './contact-card.component.html',
  styleUrls: ['./contact-card.component.scss']
})
export class ContactCardComponent implements OnInit {
  @Input() public contact: ContactRecord;

  public isMouseHover = false;
  public iconSrc: string;
  
  constructor() { }

  ngOnInit(): void {
    if (this.contact.driverType === 'professional') {
      this.iconSrc = 'http://private-05627-frontendnewhire.apiary-mock.com/professional';
    } else {
      this.iconSrc = 'http://private-05627-frontendnewhire.apiary-mock.com/citizen';
    }
  }

  public propertyDisplay(input: string): string {
    return input.length > 22 ? input.substring(0, 18) + '...' : input;
  }
}
