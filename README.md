# Heroes SPA - Single Page Application

This application is a **SPA (Single Page Application)** designed to explore and practice various concepts and functionalities commonly used in modern applications developed with React and React Router. The app allows navigation through a catalog of heroes, applying filters using Query Strings, and managing public and private routes with login/logout (no backend) functionality.

## Implemented Features

### 1. **SPA (Single Page Application)**
- Deep dive into the development of a single-page application where content is dynamically loaded without the need to refresh the entire page.

### 2. **Routing and Navigation**
- Different routes within the same application to display specific views.
- Implementation of multiple Routers to manage different navigation contexts.

### 3. **Push and Replace in the History**
- Controlled navigation using the `push` and `replace` functions of the history object to optimize the user experience and properly manage visited routes.

### 4. **Reading Arguments from URL**
- Handling arguments directly from the URL using route parameters and Query Strings.

### 5. **QueryParams and Filters**
- Use of Query Strings to filter results displayed in the application.
- Dynamic filters applied based on URL parameters.

### 6. **Public and Private Routes**
- Configuration of public and private routes within the application.
- Implementation of a basic authentication system without a backend (login and logout).

### 7. **Login and Logout**
- Simulation of login/logout to protect private routes.
- Remembering the last visited route to enhance user experience when returning after logging in.

### 8. **Context and Reducer**
- Use of **React Context** to share the global state of the application (such as authentication state).
- Implementation of a **Reducer** to manage authentication state actions predictably.

## Technologies Used

- **React with TS**: Library for building user interfaces.
- **React Router**: Route management within the application.
- **Query String**: Handling URL parameters for filtering and managing QueryParams.
- **Bootstrap**: Application styling.
