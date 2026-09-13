# Dev Stack Builder

A React web app where you can browse popular web development technologies and build your own personal "tech stack" by adding the tools you want to learn or use in your next project.

## Description

Dev Stack Builder shows a collection of frontend, backend, database, and DevOps technologies — each with a rating, difficulty level, and short description. You can pick the ones you like and add them to your own stack list, remove them one by one, or clear everything at once. Built as a practice project to get comfortable with React components, state management, and working with JSON data.

## Tech Stack

React.js – component-based UI
Vite – build tool / dev server
Tailwind CSS + DaisyUI – styling and components
JavaScript (ES6+)
React-Toastify – toast notifications
JSON – local technology data

## Features

1.  Browse technologies – all tech data is loaded from a local JSON file and displayed as cards with icon, badge, category, difficulty, and rating.
2.  Build your own stack – click "Add to Stack" to save a technology to your personal list. Duplicate adds are blocked with a warning toast, and removing items (single or all at once) updates instantly.
3.  Responsive gradient UI – one shared orange -pink - violet gradient theme runs across the brand name, hero heading, and buttons, with a sticky navbar and mobile hamburger menu.

## Getting Started

bash
npm install
npm run dev

## React Concepts — Q&A

1.  What is JSX, and why is it used in React?
    JSX lets me write HTML-looking code directly inside my JavaScript files. Instead of calling `React.createElement()` over and over, I just write tags like `<div>` or `<h1>` normally. It makes it way easier to picture what the UI will actually look like while I'm writing the component.

2.  What is the difference between props and state?
    Props are data passed into a component from its parent — the component just receives them and can't change them itself. State is data that lives inside the component and can change over time. In this project, I passed technology info down to the card components as props, and used state to keep track of things like which items are in the stack.

3.  What does the useState hook do, and where did you use it in this project?
    `useState` lets a component hold a value that can change, and re-renders the UI automatically whenever that value updates. I used it to store the array of technologies in "Your Stack," and also to track the loading state while the JSON data is being fetched.

4.  What does the useEffect hook do, and why did you need it to load the JSON data?
    `useEffect` runs some code after the component renders, which is perfect for things like fetching data. I used it to load the `technologies.json` file once when the component first mounts, then saved that data into state so it could be displayed.

5.  Why does every item in a .map() list need a unique key prop?
    React uses the `key` to keep track of which item is which between re-renders. Without a unique key, React can get confused about what was added, removed, or changed, which can lead to bugs or extra re-rendering.

6.  What is conditional rendering? Show one place you used it.
    Conditional rendering means showing different UI depending on a condition. I used it in the "Your Stack" panel — if the stack array is empty, it shows an empty-state message, otherwise it renders the list of added technologies.

7.  How do you pass data from a parent to a child, and how does a child send something back to the parent?
    A parent passes data down to a child through props, similar to passing arguments into a function. For the child to send something back up, the parent passes down a function as a prop, and the child calls that function when needed — like when clicking "Add to Stack" triggers a function (passed down from the parent) that updates the stack state.
