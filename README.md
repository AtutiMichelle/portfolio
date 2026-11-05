# Portfolio

Personal portfolio for Atuti Michelle, built with Angular.

## Editing content

- Personal details, intro, about text and skills: `src/app/data/profile.ts`
- Projects (text, stack, flow steps, screenshots): `src/app/data/projects.ts`
- Portrait: add `public/images/me.jpg` (4:5 ratio). Until then the hero shows initials.
- Project screenshots: put them in `public/images/projects/` and set `image` on the project.

## Running it

```bash
npm install
npm start          # http://localhost:4200
npm test -- --watch=false
npm run build      # output in dist/portfolio/browser
```

The production build downloads Google Fonts to inline them, so it needs internet access.
