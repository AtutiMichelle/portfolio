import { Component } from '@angular/core';
import { SiteHeader } from './components/site-header/site-header';
import { Hero } from './components/hero/hero';
import { Work } from './components/work/work';
import { About } from './components/about/about';
import { Contact } from './components/contact/contact';

@Component({
  selector: 'app-root',
  imports: [SiteHeader, Hero, Work, About, Contact],
  templateUrl: './app.html',
})
export class App {}
