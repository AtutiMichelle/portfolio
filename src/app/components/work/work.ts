import { Component, signal } from '@angular/core';
import { projects } from '../../data/projects';
import { RevealDirective } from '../../directives/reveal.directive';
import { ProjectFlow } from '../project-flow/project-flow';
import { profile } from '../../data/profile';

@Component({
  selector: 'app-work',
  imports: [ProjectFlow, RevealDirective],
  templateUrl: './work.html',
  styleUrl: './work.css',
})
export class Work {
  protected readonly featured = projects[0];
  protected readonly others = projects.slice(1);
  protected readonly github = profile.github;
  // Hides the screenshot frame if the image file is missing
  protected readonly imageMissing = signal(false);
}
