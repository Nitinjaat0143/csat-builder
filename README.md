## Overview

This project is a ReactJS-based Customer Feedback Builder developed as part of the React Developer Internship assignment.

The application allows users to customize and preview a complete feedback campaign in real-time, including:

* Initial Page
* Feedback Page
* Thank You Page
* Styling Controls
* Dynamic Feedback Options
* Live Mobile Preview

---

## Technologies Used

* ReactJS
* JavaScript (ES6+)
* HTML5
* CSS3
* Vite

---

## Features Implemented

### Content Management

* Edit Initial Page Title
* Edit Initial Page Subtitle
* Dynamic Feedback Options
* Add New Options
* Delete Existing Options
* Additional Comment Toggle
* Submit Button Text Customization

### Rating System

* Interactive 1–5 Star Rating
* Selected Rating Color Customization
* Unselected Rating Color Customization

### Thank You Page

* Editable Title
* Editable Subtitle
* Editable Button Text
* Image Upload Support

### Styling Controls

* Background Color
* Title Color
* Subtitle Color
* Button Color
* Button Text Color
* Font Size
* Border Radius
* Button Width
* Button Height

### Live Preview

* Real-time Updates
* Initial Page Preview
* Feedback Page Preview
* Thank You Page Preview

---

## Challenges Faced and Solutions

### 1. Dynamic Feedback Option Management

**Challenge:**
Creating feedback options that could be added, edited, and removed dynamically.

**Solution:**
Used React state management with array operations such as:

* map()
* filter()
* spread operator (...)

to update options without mutating state.

---

### 2. Real-Time Mobile Preview

**Challenge:**
Keeping the preview synchronized with every content and styling change.

**Solution:**
Implemented a centralized state object in App.jsx and passed data through props to child components.

---

### 3. Page Navigation Flow

**Challenge:**
Creating a realistic feedback flow:

Initial → Feedback → Thank You

**Solution:**
Introduced previewPage state and conditional rendering to simulate page transitions.

---

### 4. Rating System

**Challenge:**
Building an interactive rating component without external libraries.

**Solution:**
Used React state and conditional styling to visually update selected and unselected stars.

---

### 5. Styling Controls Not Updating Preview

**Challenge:**
Some styling properties such as font size were not reflecting correctly.

**Solution:**
Ensured state values were properly passed into inline styles and converted where required.

---

### 6. Image Upload Handling

**Challenge:**
Displaying uploaded images instantly without backend storage.

**Solution:**
Used URL.createObjectURL() to generate temporary image URLs for preview.

---

## Project Structure


src/

├── components/

│ ├── ContentPanel.jsx

│ ├── StylingPanel.jsx

│ └── MobilePreview.jsx

│

├── App.jsx

├── App.css

└── main.jsx

---
## How to Run

Install dependencies:

npm install

Start development server:

npm run dev

Open browser:

http://localhost:5173

---

## Future Improvements

* Save campaign configurations
* Backend integration
* Responsive mobile layouts
* Dark mode support
* Export/import campaign settings
* User authentication

---

## Conclusion

This project demonstrates React fundamentals including state management, component communication, conditional rendering, dynamic forms, and real-time UI updates while providing a complete customer feedback campaign builder experience.



# Developer Documentation
## Application Architecture

The application follows a centralized state management approach using React's `useState` hook.

The root component (`App.jsx`) acts as the single source of truth and manages all application data including:

* Content configuration
* Styling configuration
* Rating state
* Preview page navigation

Data is passed down to child components through props, while updates are sent back to `App.jsx` using callback functions.

---

## Component Responsibilities

### App.jsx

Responsibilities:

* Stores all application state
* Controls tab switching
* Controls page preview switching
* Passes data to child components
* Receives updates from child components

App.jsx acts as the controller for the entire application.

---

### ContentPanel.jsx

Responsibilities:

* Content editing
* Feedback option management
* Thank You page configuration
* Image upload

### StylingPanel.jsx

Responsibilities:

* Color controls
* Typography controls
* Button customization
* Rating color customization

### MobilePreview.jsx

Responsibilities:

* Render Initial Page
* Render Feedback Page
* Render Thank You Page
* Render Rating Component
* Display uploaded images
* Apply styling dynamically

## Design Decisions

### Centralized State

A centralized state structure was chosen to:

* Simplify data management
* Avoid duplicate state
* Ensure real-time synchronization
* Improve maintainability

### Prop-Based Communication

Props were used instead of external state libraries because:

* Project scale is small
* Simpler implementation
* Easier debugging
* Reduced complexity

### Conditional Rendering

Conditional rendering was used to switch between:

* Initial Page
* Feedback Page
* Thank You Page

This approach avoids unnecessary component creation and keeps rendering efficient.

---

### Summary

The application follows a clean React component architecture where App.jsx serves as the central state manager and all child components communicate through props and callback functions. This ensures predictable state updates, real-time preview functionality, and maintainable code structure.
----
