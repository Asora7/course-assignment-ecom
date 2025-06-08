# Course Assignment - Javascript framewrok

### Live Site URL

[Live site](https://urbannestecom.netlify.app)

## Description

This project is a simple eCommerce store built with React. The store fetches product data from an external API and displays it in a structured layout. It includes features like a search bar, product details page, cart management, checkout page, and a contact form.

## Goal

To apply knowledge of React to build an eCommerce store, allowing users to browse products, add them to the cart, and proceed through checkout.

## Brief

The API used for this project is the [Noroff API](https://v2.api.noroff.dev/online-shop).

### Pages:

- **Homepage**: Displays a list of all products with a look-ahead search bar to filter products by name.
- **Product Page**: Displays details of a single product, including title, description, image, price (with discount if applicable), and reviews.
- **Cart Page**: Displays items in the cart and the total price, able to remove item or change quantity
- **Checkout Page**: Display items in cart, total and checkout button with confirmation.
- **Checkout Success Page**: Notifies users of successful checkout and provides an option to return to the homepage.
- **Contact Page**: Contains a contact form with validation.

### Features:

- **Search Bar**: Filters products by title.
- **Add to Cart**: Adds items to the cart and displays the total on the Cart Page.
- **Checkout**: Clears the cart after a successful checkout and shows a success message.
- **Form Validation**: Ensures the contact form is properly filled out before submission.
- **Change Quantity in Cart**: Functionality to change the quantity of items in the cart.
- **Checkout Confirmation**: After a successful checkout, a confirmation message is shown and provide an option to return to the homepage.
- **Remove Items from Cart**: Users can remove item from cart.
- **Product Price with Discount**: Product pages show discounts if there are any.
- **Clear Contact Form After Submission**: Resets the contact form after a successful submission, allowing users to easily submit another inquiry.

## Installation

To run this project locally, follow the steps below.

### Prerequisites

Ensure you have the following installed on your machine:

- [Node.js](https://nodejs.org/en/) (including npm)

### Getting Started

Follow these steps to clone and run the project locally:

1. **Clone the Repository**  
   Clone this repository to your local machine using the following command:
   ```bash
   git clone https://github.com/Asora7/course-assignment-ecom.git
   ```
2. **Navigate to the Project Directory**
   After cloning the repository, navigate to the project folder:
   ```bash
   cd course-assignment-ecom
   ```
3. **Install Dependencies**
   This will install all the necessary libraries and packages listed in package.json. Install the required dependencies by running the following command:
   ```bash
   npm install
   ```
4. **Run the Project Locally**
   Once the dependencies are installed, you can start the development server:
   ```bash
   npm start
   This will run the app locally and you can view it in your browser by navigating to http://localhost:3000.
   ```

### Dependencies

This project uses the following dependencies:

- **react**: The core library for building the user interface.
- **react-router-dom**: For routing between pages.
- **styled-components**: For styled components (CSS-in-JS).
- **react-icons**: For using icons throughout the app.
- **react-scripts**: For running and building the React app.
- **web-vitals**: For measuring web performance.

### Run script

- **npm start**: Runs the app in development mode. Open http://localhost:3000 to view it in the browser.

### Github Repository URL

[Github Repository](https://github.com/Asora7/course-assignment-ecom)

