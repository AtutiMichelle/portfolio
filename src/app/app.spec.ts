import { TestBed } from '@angular/core/testing';
import { App } from './app';
import { projects } from './data/projects';
import { profile } from './data/profile';

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({ imports: [App] }).compileComponents();
  });

  it('renders the headline', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const el = fixture.nativeElement as HTMLElement;
    expect(el.querySelector('h1')?.textContent).toContain(profile.headline);
  });

  it('renders every project with a repo link', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const el = fixture.nativeElement as HTMLElement;
    for (const project of projects) {
      expect(el.textContent).toContain(project.name);
      expect(el.querySelector(`a[href="${project.repo}"]`)).not.toBeNull();
    }
  });

  it('links the contact button to email', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const el = fixture.nativeElement as HTMLElement;
    expect(el.querySelector(`a[href="mailto:${profile.email}"]`)).not.toBeNull();
  });
});
