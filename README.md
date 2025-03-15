# ShoppyGlobe E-commerce Application

ShoppyGlobe is a basic e-commerce application developed using React. It showcases an interactive shopping experience, including product browsing, cart management, and checkout features. The project emphasizes modern React best practices such as component-based architecture, state management with Redux, and routing with React Router.

---

## Features

- **Home Page**: Browse products fetched from an external API.
- **Product Details**: View detailed information about a selected product.
- **Shopping Cart**: Add, remove, or update quantities of items in the cart.
- **Search Functionality**: Filter products using a search bar.
- **Responsive Design**: Optimized for different screen sizes.
- **Error Handling**: Graceful handling of API errors.

---

## Components

### Main Components

- **App**: The root component.
- **Header**: Contains navigation and a shopping cart icon.
- **ProductList**: Displays a list of products.
- **ProductItem**: Represents a single product with an "Add to Cart" button.
- **ProductDetail**: Displays detailed information about a specific product.
- **Cart**: Shows items in the shopping cart, allowing modifications.
- **CartItem**: Represents a single cart item with quantity management.
- **NotFound**: Displays a 404 page for unknown routes.

---

## Technical Specifications

### 1. **Props**

- Used to pass data from parent to child components.
- Ensures components are reusable and modular.

### 2. **Data Fetching**

- **ProductList**: Fetches products from the API (https://dummyjson.com/products) using useEffect and a custom hook.
- **ProductDetail**: Fetches product details based on route parameters.
- Includes error handling for API failures.

### 3. **State Management**

- Implements Redux for cart state management with actions, reducers, and selectors.
- Search feature filters products dynamically.

### 4. **Routing**

- Configured with React Router.
- Includes routes for Home, Product Details, Cart, and Checkout.

### 5. **Event Handling**

- Buttons for adding/removing products interact with Redux actions.

### 6. **Performance Optimization**

- Code splitting and lazy loading using React.lazy and Suspense.

### 7. **Styling**

- Fully responsive design using Tailwind CSS.
- Ensures a seamless user experience across devices.

---

## Setup and Installation

### 1. install npm

### 2. install tailwind css using

## npm install -D tailwindcss postcss autoprefixer

## npx tailwindcss init -p

### 3. install react router dom using

## npm i react-router-dom

### 4. install react redux toolkit using

## npm i react-router-dom

## npm install react-redux
<<<<<<< HEAD
=======

# Github Link : https://github.com/ankit536/ShoppyGlobe-ECart
>>>>>>> fd73eb8 (Initial commit - Added project files)
