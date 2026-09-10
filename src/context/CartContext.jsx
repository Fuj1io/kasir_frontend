import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (produk) => {
        setCartItems((prev) => {
            const existingIndex = prev.findIndex((item) => item.id_produk === produk.id_produk);
            if (existingIndex > -1) {
                return prev.map((item, index) =>
                    index === existingIndex ? { ...item, qty: item.qty + 1 } : item
                );
            }
            return [...prev, { ...produk, qty: 1 }];
        });
    };

    const updateQty = (id_produk, delta) => {
        setCartItems((prev) =>
            prev
                .map((item) => {
                    if (item.id_produk === id_produk) {
                        const newQty = item.qty + delta;
                        return newQty > 0 ? { ...item, qty: newQty } : null;
                    }
                    return item;
                })
                .filter(Boolean)
        );
    };

    const removeFromCart = (id_produk) => {
        setCartItems((prev) => prev.filter((item) => item.id_produk !== id_produk));
    };

    const clearCart = () => {
        setCartItems([]);
    };

    return (
        <CartContext.Provider value={{ cartItems, addToCart, updateQty, removeFromCart, clearCart }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => useContext(CartContext);
