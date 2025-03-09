# Course Assignment - eCommerce Store

## Goal
To apply knowledge of React to build an eCommerce store using the provided API, with functionalities like product display, cart management, checkout, and contact form.

## Brief
The API being used for this project is [Noroff API](https://v2.api.noroff.dev/online-shop).

### Key Features:
- **Homepage**: List all products with a look-ahead search bar to filter products by name. 
- **Product Page**: Displays product details including title, description, image, and price (including any discounts).
- **Cart Page**: Displays the current items in the cart and a total price.
- **Checkout Success Page**: Notifies the user of successful checkout and provides an option to go back to the homepage.
- **Contact Page**: Contains a contact form with form validation.

## Pages:
- **Homepage**: Displays all products and includes a look-ahead search bar. You can click on a product and get navigated to product page.
- **Product Page**: Displays individual product details, including a description, price, discount, reviews, Add to Cart button and Continue shopping button.
- **Cart Page**: Displays products added to the cart and the total price. Option to remove or change quantity. Proceed to checkout button.
- **Checkout Page**: Displays products added to cart, total price and a checkout button with confirmation.
- **Checkout Success Page**: Displays a success message after the checkout and a "go back to store" button.
- **Contact Page**: Contains a contact form with validation.

## Process
1. **Create React App (CRA)**: Set up the project using `create-react-app`.
2. **Create Components**:
    - Header with navigation and cart icon
    - Footer
    - Layout component to hold header and footer
    - Cart Icon component to show the number of items in the cart
    - Individual page components: Homepage, ProductPage, CartPage, CheckoutPage, CheckoutSuccessPage, and ContactPage.
3. **Routing**: Use React Router to handle navigation between pages.
4. **Fetch Data**: Fetch products from the provided API and display them on the homepage.
5. **Search Bar**: Implement a search bar that filters products based on title.
6. **Cart Management**: Add functionality to add products to the cart and show the total on the CartPage.
7. **Checkout Success Page**: Clear the cart after checkout and display a success message.
8. **Form Validation**: Ensure the contact form meets all validation requirements.

## Requirements:
- Use React Router for page navigation.
- Make the design responsive.
- Optionally use styled-components or CSS Modules for styling.
- No need for TypeScript.
- Clean, well-formatted code.

## Deployment
- Deploy the project to Netlify.
- Share the live site URL and the GitHub repository URL with your instructor.

## GitHub Repository URL
- [GitHub Repository](https://github.com/Asora7/course-assignment-ecom)

## Live Site URL
- [Live Site](https://urbannestecom.netlify.app)

## License
You can choose to add a license to your repository if you want, but since your code is for a class project and will be reviewed by your instructor, it’s not strictly necessary unless you plan to share it publicly in the future. If you want to add a license, you can use a permissive one like MIT, or you can choose "No License" if you prefer not to make it open-source.

## How to Add Screenshots:
To add screenshots to your GitHub README, follow these steps:
1. Take a screenshot.
2. Upload it to your repository (you can create a folder like `assets/screenshots/`).
3. Add the image to the README using Markdown syntax:
    ```markdown
    ![Screenshot description](./assets/screenshots/screenshot1.png)
    ```

## Necessary Installations:
Your `package.json` file should already include the necessary dependencies as shown in the provided section, including:
- `react`
- `react-router-dom`
- `styled-components`
- `react-icons`
- `react-scripts`
- `@testing-library/react`

You can verify the installations using:
```bash
npm install
