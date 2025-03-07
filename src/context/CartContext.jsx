//context/CartContext.jsx

// CartContext.jsx
import React, { createContext, useContext, useState, useEffect, useCallback } from "react";

const CartContext = createContext();

export function useCart() {
    return useContext(CartContext);
}

export function CartProvider({ children }) {
    const [cart, setCart] = useState(() => {
        const savedCart = localStorage.getItem("cart");
        return savedCart ? JSON.parse(savedCart) : [];
    });

    const [recentlyAdded, setRecentlyAdded] = useState(false);

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

        // Trigger recentlyAdded flag
        setRecentlyAdded(true);

        // Clear it after a short delay (this way, the animation only happens briefly)
        setTimeout(() => setRecentlyAdded(false), 500);
    }

    const removeFromCart = (productId) => {
        setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
    };

    const clearCart = useCallback(() => setCart([]), []);

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);

    const value = {
        cart,
        addToCart,
        removeFromCart,
        clearCart,
        recentlyAdded, // Pass down the flag
    };

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
