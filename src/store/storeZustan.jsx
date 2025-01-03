import { create } from "zustand";
import { devtools } from "zustand/middleware";

export const useStore = create(
  devtools((set) => ({
    cart: [],
    addBook: (book) =>
      set((state) => ({
        cart: [...state.cart, { ...book, quantity: 1 }],
      })),
    MoresBook: (id) =>
      set((state) => ({
        cart: state.cart.map((book) =>
          book.id === id ? { ...book, quantity: book.quantity + 1 } : book,
        ),
      })),
    LessBook: (id) =>
      set((state) => ({
        cart: state.cart.map((book) =>
          book.id === id && book.quantity > 1 ? { ...book, quantity: book.quantity - 1 } : book,
        ),
      })),
    removeBooks: (id) =>
      set((state) => ({
        cart: state.cart.filter((book) => book.id !== id),
      })),
  })),
);
