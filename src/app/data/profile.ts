// Personal details shown across the site. Edit here, not in the templates.
export const profile = {
  name: 'Atuti Michelle',
  firstName: 'Michelle',
  role: 'Full Stack Developer',
  email: 'atutimichelle4@gmail.com',
  github: 'https://github.com/AtutiMichelle',
  // Drop a portrait at public/images/me.jpg (4:5 works best). Falls back to initials.
  photo: 'images/me.jpg',
  headline: 'I build software for everyday problems.',
  intro:
    'Full stack developer working across Angular, Laravel, Python and IoT. From bus tickets to fire alerts.',
  about: [
    'I like owning a feature from end to end, from the database table to the button someone taps. Most of my projects start with a real process that feels slower than it should, like booking a bus seat or tracking who borrowed which projector.',
    'That has taken me through Angular and Supabase, Laravel dashboards, Python models and ESP32 sensors. I care about clear flows, sensible security and code the next person can read.',
  ],
  skills: [
    { group: 'Frontend', items: ['Angular', 'TypeScript', 'SwiftUI', 'HTML & CSS'] },
    { group: 'Backend', items: ['Laravel', 'PHP', 'Node.js', 'Supabase', 'Firebase'] },
    { group: 'Data & ML', items: ['Python', 'Flask', 'TensorFlow Lite', 'PostgreSQL', 'MySQL'] },
    { group: 'Hardware', items: ['ESP32', 'C++', 'Sensors'] },
  ],
};
