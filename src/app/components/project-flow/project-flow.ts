import { Component, input } from '@angular/core';
import { Project } from '../../data/projects';

// Small diagram of how a project works, step by step.
@Component({
  selector: 'app-project-flow',
  templateUrl: './project-flow.html',
  styleUrl: './project-flow.css',
  host: { '[class.row]': "direction() === 'row'" },
})
export class ProjectFlow {
  readonly flow = input.required<Project['flow']>();
  readonly direction = input<'row' | 'column'>('column');
}
