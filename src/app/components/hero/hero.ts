import { Component, signal } from '@angular/core';
import { profile } from '../../data/profile';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class Hero {
  protected readonly profile = profile;
  // Shows the initials card until a real photo is added
  protected readonly photoMissing = signal(false);
}
