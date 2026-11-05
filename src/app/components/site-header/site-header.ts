import { Component } from '@angular/core';
import { profile } from '../../data/profile';

@Component({
  selector: 'app-site-header',
  templateUrl: './site-header.html',
  styleUrl: './site-header.css',
})
export class SiteHeader {
  protected readonly profile = profile;
}
