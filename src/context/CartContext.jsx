//context/CartContext.jsx

import React, { createContext, useContext, useState, useEffect, useCallback } from "react";

// Create context
const CartContext = createContext();

// Custom hook to use the cart context
export function useCart() {
    return useContext(CartContext);
}

// Provider component
export function CartProvider({ children }) {
    const [cart, setCart] = useState(() => {
        // Get cart data from local storage if available, otherwise use an empty array
        const savedCart = localStorage.getItem("cart");
        return savedCart ? JSON.parse(savedCart) : [];
    });

    // Add product to cart
    function addToCart(product) {
        setCart((prevCart) => {
            const existingProduct = prevCart.find((item) => item.id === product.id);
            if (existingProduct) {
                return prevCart.map((item) =>
                    item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
                );
            } else {
                return [...prevCart, { ...product, quantity: 1 }];
            }
        });
    }

    // Remove product from cart
    function removeFromCart(productId) {
        setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
    }

    // Memoize clearCart to prevent unnecessary re-renders
    const clearCart = useCallback(() => {
        setCart([]);
    }, []); // Empty dependency array means this function will only be created once

    // Save the cart to local storage whenever it changes
    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);

    const value = {
        cart,
        addToCart,
        removeFromCart,
        clearCart, // Provide the memoized clearCart function
    };

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
