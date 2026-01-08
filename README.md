# User Management Dashboard

A minimal React + Vite dashboard for managing users, with a focus on state management, responsive design, and interactive UI components.

## Project Overview

This project is a small User Management Dashboard that allows you to:

View a list of users fetched from a REST API

Click on a user to view detailed information, including contact info, company, address, and recent posts

Interact with the application using live search and filtering

Experience responsive and clean UI with Tailwind CSS

Explore state management using Zustand for global state

The main goal of this project is to demonstrate a clean structure, reusable components, and optimization decisions in a small React application.

## Why Zustand Was Chosen

Zustand was selected as the state management solution because:

Lightweight and simple: Perfect for small projects without the boilerplate of Redux

Flexible selectors: Allows components to subscribe only to the slices of state they need, preventing unnecessary re-renders

Supports caching easily: Posts for each user are stored by user ID to avoid repeated API calls

React 18 compatible: Works well with hooks and functional components

This choice shows the ability to handle global state efficiently while keeping the code readable and maintainable.

## Component Structure Explanation

The application is structured in a modular and reusable way:

### Pages

DashboardPage: Displays the list of users, search input, and filtered results

UserDetail: Shows full user details and posts with interactive features

### Components

Loader: Displays a loading indicator during API calls

UserDetailPosts: Collapsible post cards for better UX

UserCard (optional): Can be reused in list or other views

### Store

useUserStore: Zustand store managing users, posts, loading state, error state, and search query

State flows are unidirectional, and derived state (like filtered users) is computed from the store to avoid redundant API calls.

## Optimization / Refactor Decisions

Cached posts by user ID: Avoids repeated API calls when revisiting the same user

Selective Zustand selectors: Subscribing only to required slices of state to prevent infinite render loops

Live search using Zustand: Demonstrates dynamic state updates and reduces unnecessary filtering on unrelated renders

These decisions improve performance, maintainability, and UX without overcomplicating the small application.
## Run Locally

Clone the project

```bash
  git clone https://github.com/PjptRojan/User-Management-App.git
```

Go to the project directory

```bash
  cd my-project
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  yarn dev
```


## Frameworks

React Js, Typescript, Tailwind CSS

## License

[MIT](https://choosealicense.com/licenses/mit/)

