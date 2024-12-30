// import { create } from "zustand";

// export const useStore = create((set) => ({
//   bears: 0,
//   cart: [{ title: "", price: 0, amout: 0, Id: "" }],
//   AddBooks: (Book) => set((state) => ({ cart: [...state.cart, Book] })),
//   MoresBook: (Book) =>
//     set((state) => ({
//       cart: state.cart.map((item) =>
//         item.Id === Book.Id ? { ...item, amout: item.amout + 1 } : item
//       ),
//     })),
//   LessBook: (Book) =>
//     set((state) => ({
//       cart: state.cart.map((item) =>
//         item.Id === Book.Id ? { ...item, amout: item.amout - 1 } : item
//       ),
//     })),
//   removeBooks: () => set({ Book: [] }),
//   //   updateBears: (newBears) => set({ bears: newBears }),
// }));

import { create } from "zustand";

export const useStore = create((set) => ({
  cart: [],
  addBook: (book) =>
    set((state) => ({
      cart: [...state.cart, { ...book, quantity: 1 }],
    })),
  MoresBook: (id) =>
    set((state) => ({
      cart: state.cart.map((book) =>
        book.id === id ? { ...book, quantity: book.quantity + 1 } : book
      ),
    })),
  LessBook: (id) =>
    set((state) => ({
      cart: state.cart.map((book) =>
        book.id === id && book.quantity > 1
          ? { ...book, quantity: book.quantity - 1 }
          : book
      ),
    })),
  removeBooks: (id) =>
    set((state) => ({
      cart: state.cart.filter((book) => book.id !== id),
    })),
}));
