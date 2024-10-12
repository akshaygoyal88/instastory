# Story Viewer Application

A mobile-first application to display and navigate through stories, similar to Instagram. Users can view stories automatically or manually navigate between them with a smooth, user-friendly experience.

## Deployment
[Live Demo](https://instastory1-akshaygoyal88s-projects.vercel.app/)
Kindly check in mobile view.

## Table of Contents
- [Features](#features)
- [Installation & Setup](#installation--setup)
- [Running the Application](#running-the-application)
- [Running Tests](#running-tests)
- [Design Choices](#design-choices)
- [Performance Optimization](#performance-optimization)
- [Scalability](#scalability)

## Features
- **Mobile-first design.**
- Horizontally scrollable list of stories fetched from an external file.
- Stories advance automatically every 5 seconds, with loading indicators.
- Users can navigate through stories manually by tapping on the left (previous) or right (next) side of the story.
- Smooth transitions for a seamless experience.
- E2E testing with Playwright.

## Installation & Setup
Follow these steps to get the app up and running locally:

1. Clone the repository:
    ```bash
    git clone https://github.com/your-repo/story-viewer.git
    cd story-viewer
    ```
2. Install dependencies:
    ```bash
    npm install
    ```
3. Create an `.env.local` file to store environment variables, if required.

4. Start the development server:
    ```bash
    npm run dev
    ```
    Visit [http://localhost:3000](http://localhost:3000) to view the app in your browser.

## Running the Application
To run the application in production mode:

1. Build the app:
    ```bash
    npm run build
    ```
2. Start the app:
    ```bash
    npm start
    ```

## Running Tests

###  End-to-End Tests
## End-to-end tests are powered by Playwright. To run the tests:

##  Install Playwright and its dependencies:
```bash
npm install --save-dev @playwright/test
```
Run Playwright tests:
```bash
npx playwright test
```
## Design Choices
### Mobile-first UI/UX: The UI is designed for a mobile-first experience, providing an intuitive and clean interface.
### Manual and Auto Navigation: Users can manually navigate stories by tapping, but stories also progress automatically.
###  No External Library for Core Functionality: To optimize performance, no external libraries were used for the core story functionality, allowing greater control over transitions, loading states, and rendering.
## Performance Optimization
### Preloading Stories: Images for the next story are preloaded to avoid loading delays when users manually navigate stories.
###  Efficient State Management: State updates are kept minimal to avoid unnecessary re-renders.
###  Debouncing Navigation: Manual navigation is debounced to prevent accidental multi-taps from causing rapid transitions.
## Scalability
### Component Reusability: Components are modular and can easily be extended or reused.
###  Optimized Story Fetching: Stories are fetched from an external file, allowing scalability when handling large sets of stories. API integrations could be added to dynamically fetch more stories as needed.
###  Lazy Loading: Lazy loading is implemented for large story sets, ensuring the app remains performant even with an increasing number of stories.
