export interface FlowStep {
  label: string;
  note: string;
}

export interface Project {
  slug: string;
  name: string;
  tagline: string;
  summary: string;
  highlights: string[];
  stack: string[];
  repo: string;
  live?: string;
  // Optional screenshot in public/images/projects/
  image?: { src: string; alt: string };
  flow: { title: string; steps: FlowStep[] };
}

export const projects: Project[] = [
  {
    slug: 'bus-ease',
    name: 'BusEase',
    tagline: 'Intercity bus tickets in Kenya, booked by tap or by voice.',
    summary:
      'A booking app that takes a traveller from search to a printable ticket, with an admin area for staff to run trips, routes and bookings.',
    highlights: [
      'Seat map drawn from each operator’s own bus layout',
      'M-Pesa STK push payments with a timed seat hold',
      'Voice assistant that can search, pick seats and start payment',
      'Role-based admin area, with secrets kept in edge functions',
    ],
    stack: ['Angular', 'TypeScript', 'Supabase', 'PostgreSQL', 'M-Pesa', 'Vitest'],
    repo: 'https://github.com/AtutiMichelle/Bus-Ease',
    image: {
      src: 'images/projects/busease-home.webp',
      alt: 'BusEase home page with a search form for origin, destination and travel date',
    },
    flow: {
      title: 'Booking flow',
      steps: [
        { label: 'Search', note: 'Route and date' },
        { label: 'Pick seats', note: 'Live seat map' },
        { label: 'Hold', note: 'Countdown timer' },
        { label: 'Pay', note: 'M-Pesa STK push' },
        { label: 'Ticket', note: 'Printable' },
      ],
    },
  },
  {
    slug: 'flameguard',
    name: 'FlameGuard',
    tagline: 'Fire detection that pairs ESP32 sensors with a trained model.',
    summary:
      'Sensors stream readings to a Python ML service that scores fire risk, then a Laravel dashboard raises and tracks alerts.',
    highlights: [
      'End-to-end pipeline from device to dashboard',
      'Predictions with confidence scores from a TensorFlow Lite model',
      'Active alerts and alert history with filters and search',
      'Admin and user roles, with Google sign-in',
    ],
    stack: ['ESP32', 'C++', 'Python', 'Flask', 'TensorFlow Lite', 'Laravel', 'Filament', 'MySQL'],
    repo: 'https://github.com/AtutiMichelle/FlameGuard-Fire-Detection-System',
    flow: {
      title: 'How a reading becomes an alert',
      steps: [
        { label: 'ESP32 sensors', note: 'Read the room' },
        { label: 'Flask ML API', note: 'Scores fire risk' },
        { label: 'Laravel API', note: 'Stores and decides' },
        { label: 'Dashboard', note: 'Alerts the right people' },
      ],
    },
  },
  {
    slug: 'school-share',
    name: 'SchoolShare',
    tagline: 'An iOS app for lending equipment between schools.',
    summary:
      'Teachers browse equipment across a district and request what they need. Two schools approve, then the loan is tracked to its due date.',
    highlights: [
      'Two-step approval across both schools',
      'Equipment catalogue with live availability',
      'Active loans and history with due dates',
      'School directory with contact people',
    ],
    stack: ['Swift', 'SwiftUI', 'Firebase', 'Firestore'],
    repo: 'https://github.com/AtutiMichelle/School-Share',
    flow: {
      title: 'Approval chain',
      steps: [
        { label: 'Teacher requests', note: 'From the catalogue' },
        { label: 'Own school approves', note: 'First sign-off' },
        { label: 'Owner school approves', note: 'Second sign-off' },
        { label: 'Loan starts', note: 'Due date tracked' },
      ],
    },
  },
];
