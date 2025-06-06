import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
} from 'react';

const CartContext = createContext();

/**
 * Custom hook to gain access to cart context data and methods.
 *
 * @returns {{
 *   cart: Array<{ id: string; title: string; price: number; discountedPrice: number; quantity: number; image?: { url: string; alt?: string } }>,
 *   addToCart: (product: { id: string; title: string; price: number; discountedPrice: number; image?: { url: string; alt?: string } }) => void,
 *   removeFromCart: (productId: string) => void,
 *   updateQuantity: (productId: string, newQuantity: number) => void,
 *   clearCart: () => void,
 *   recentlyAdded: boolean
 * }} The cart state and all cart‐manipulation functions.
 */
export function useCart() {
  return useContext(CartContext);
}

/**
 * CartProvider component wraps the entire app, providing
 * cart state (saved to localStorage) and methods to manipulate it.
 *
 * @param {{ children: React.ReactNode }} props
 *   - `children`: All child components that need access to cart context.
 * @returns {JSX.Element} The CartContext Provider wrapping children.
 */
export function CartProvider({ children }) {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  const [recentlyAdded, setRecentlyAdded] = useState(false);

  /**
   * Adds a product to the cart. If it already exists, increments its quantity.
   *
   * @param {{ id: string; title: string; price: number; discountedPrice: number; image?: { url: string; alt?: string } }} product
   *   - The product to add or update in the cart.
   */
  function addToCart(product) {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === product.id);
      if (existingProduct) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });

    setRecentlyAdded(true);
    setTimeout(() => setRecentlyAdded(false), 500);
  }

  /**
   * Removes a product entirely from the cart by its ID.
   *
   * @param {string} productId – The ID of the product to remove.
   */
  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  /**
   * Updates the quantity of a given product in the cart.
   * Does nothing if `newQuantity < 1`.
   *
   * @param {string} productId – The ID of the product to update.
   * @param {number} newQuantity – The new desired quantity (≥ 1).
   */
  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity < 1) return;
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === productId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  /**
   * Clears all items from the cart.
   */
  const clearCart = useCallback(() => setCart([]), []);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const value = {
    cart,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    recentlyAdded,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
