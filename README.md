# MyAngularChallenge

This Angular project demonstrates modular architecture, lazy loading, core Angular concepts, routing, data management, and testing.

## Project Structure

src/ ├── app/ │ ├── core/ # Shared services, pipes, directives │ ├── products/ # Lazy-loaded feature module for products │ ├── users/ # Lazy-loaded feature module for users │ ├── components/ # Reusable components │ ├── app-routing.module.ts │ └── app.module.ts


## Setup Instructions

### Prerequisites:
- Install Node.js (latest version)
- Install Angular CLI globally: npm install -g @angular/cli


### Installation:
1. Clone the repository: git clone <repository-url> cd MyAngularChallenge

2. Install dependencies: npm install


### Running the App:
1. Run the application: ng serve

2. Open `http://localhost:4200` in your browser to view the application.

### Running Tests:
1. Run unit tests: ng test


## Features

- **Lazy Loading:** 
- The application is modularized with lazy-loaded modules for `Products` and `Users`.

- **Routing:**
- Root route `/` for the home page, `/products` for products, and `/users` for users.
- Child routes are implemented under `/products/list` and `/products/:id`.

- **Components:**
- Each feature module has at least two components demonstrating data binding, property/event binding, and custom directives.

- **Forms:**
- A reactive form is implemented with real-time validation and feedback.

- **HTTP:**
- Data fetching with `HttpClient` from a mock API and display in a list format.

- **Shared Service:**
- A shared service is provided in the root to manage shared data across components.

## Testing

Unit tests are provided for:
- **One component** and **one service**, demonstrating Angular testing utilities with `TestBed`.

## Approach and Design Decisions

- **Modular Architecture:** 
- I structured the app into separate lazy-loaded feature modules for better scalability and maintainability.

- **State Sharing:**
- A shared service is used to manage common data (e.g., a favorites list) between different components.

- **Performance Considerations:** 
- OnPush change detection was applied to optimize performance for specific components.
- I used `trackBy` with `ngFor` to optimize rendering when displaying lists.

- **Testing:** 
- I used Angular’s `TestBed` to set up unit tests, ensuring basic test coverage for components and services.
