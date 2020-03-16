import { NgModule } from '@angular/core';

import { HeaderComponent } from './pages/header/header.component';
import { ContentComponent } from './pages/content/content.component';
import { SearchInputComponent } from './components/search-input/search-input.component';
import { ContactCardComponent } from './components/contact-card/contact-card.component';
import { EffectsModule } from '@ngrx/effects';
import { ContactsEffects } from './store/effects/contacts.effects';
import { MaterialModule } from '../material/material.module';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    HeaderComponent,
    ContentComponent,
    SearchInputComponent,
    ContactCardComponent
  ],
  imports: [
    MaterialModule,
    HttpClientModule,
    FlexLayoutModule,

    AngularSvgIconModule.forRoot(),
    EffectsModule.forRoot([ContactsEffects]),
  ],
  exports: [
    HeaderComponent,
    ContentComponent,
  ]
})
export class ContactsModule { }
