# Bright Future International Primary School — Website

A multi-page React + Tailwind CSS school portal with routed pages for Home,
Programs, Gallery, Admission, Contact and FAQ.

## Setup

```bash
npm install
npm start
```

The app runs at http://localhost:3000

## Structure

```
src/
  App.js                 # Routes
  index.js               # Entry point
  index.css              # Tailwind + fonts
  components/
    Navbar.jsx
    Footer.jsx
    Hero.jsx
    Button.jsx
    ProgramCard.jsx
    GalleryCard.jsx
    TestimonialCard.jsx
    FAQAccordion.jsx
    ContactForm.jsx
    AdmissionForm.jsx
  pages/
    Home.jsx
    Programs.jsx
    Gallery.jsx
    Admission.jsx
    Contact.jsx
    FAQ.jsx
    NotFound.jsx
```

## Notes

- The Contact form and Admission form use mock submission (a timed delay and
  a success state) — no backend is called. Replace the `setTimeout` blocks in
  `ContactForm.jsx` and `AdmissionForm.jsx` with real API calls once a
  Laravel/API backend is ready.
- The map section on the Contact page is a placeholder — swap it for a real
  Google Maps or Mapbox embed when you have an API key.
- Images are placeholder stock photography from Unsplash — replace with the
  school's real photography before launch.
- Update the phone number placeholder (`+234 XXX XXX XXXX`) throughout once
  the real number is available.
