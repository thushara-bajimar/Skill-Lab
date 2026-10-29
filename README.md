# Skill Lab

A collection of coursework, exercises, and small projects created while learning web development and software development. The repository is organized by topic and bootcamp day; most folders are independent practice projects rather than one application.

## Repository map

```text
Sahyadri 3/
├── BootCamp/
│   ├── Day 1/       HTML and CSS fundamentals, pages, and an assignment
│   ├── Day 2/       CSS layouts and components (Grid, profile card, movie cards)
│   ├── Day 3/       JavaScript practice, a calculator, and a to-do assignment
│   ├── Day 4/       Advanced JavaScript and introductory Node.js/Express
│   └── Day 5/       Node.js and SQL practice
├── ReactJS/
│   └── my-app/      Next.js and React learning exercises
├── TailwindCSS/
│   ├── my-tailwind-app/  React, Vite, and Tailwind CSS practice
│   └── portfolio/        Next.js and Tailwind CSS portfolio project
└── Revise/          JavaScript revision exercises
```

## Getting started

### HTML, CSS, and browser-based exercises

Open an exercise's `.html` file directly in a browser. For example, start with `Sahyadri 3/BootCamp/Day 1/index.html`. Some exercises use linked CSS, JavaScript, or local assets, so keep each page in its original folder structure.

### React and Next.js projects

Install dependencies and run the development server from the relevant project directory:

```bash
cd "Sahyadri 3/ReactJS/my-app"
npm install
npm run dev
```

Or choose the Tailwind portfolio:

```bash
cd "Sahyadri 3/TailwindCSS/portfolio"
npm install
npm run dev
```

Open the local URL printed by the development server (usually [http://localhost:3000](http://localhost:3000) for Next.js).

### Vite project

```bash
cd "Sahyadri 3/TailwindCSS/my-tailwind-app"
npm install
npm run dev
```

Use the local URL printed by Vite (usually [http://localhost:5173](http://localhost:5173)). Each JavaScript project has its own `package.json`; install dependencies from that project's directory when needed.

## Requirements

- A modern web browser for the HTML/CSS exercises
- Node.js and npm for the React, Next.js, Vite, and Express projects

## Notes

- This repository does not have a single root-level build or start command. Run each app from its own directory.
- The folders are learning projects and may be in progress; their setup commands and features can vary by project.
