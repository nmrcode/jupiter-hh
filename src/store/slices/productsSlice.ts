import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import p1 from "../../static/img/1.png";
import p2 from "../../static/img/2.png";
import p3 from "../../static/img/3.png";
import p4 from "../../static/img/4.png";
import p5 from "../../static/img/5.png";
import p6 from "../../static/img/6.png";
import p7 from "../../static/img/7.png";
import p8 from "../../static/img/8.png";
import p9 from "../../static/img/9.png";
import { IProduct } from "../../types/product";
import { v4 as uuidv4 } from "uuid";

type InitialType = {
  products: IProduct[];
  filteredProducts: IProduct[];
  currentFilter: string;
};

const initialState: InitialType = {
  products: [
    {
      id: uuidv4(),
      category: "Design",
      title: "Sofa",
      imageUrl: p1,
      active: false,
    },
    {
      id: uuidv4(),
      category: "Branding",
      title: "KeyBoard",
      imageUrl: p2,
      active: false,
    },
    {
      id: uuidv4(),
      category: "Illustration",
      title: "Work Media",
      imageUrl: p3,
      active: false,
    },
    {
      id: uuidv4(),
      category: "Motion",
      title: "DDDone",
      imageUrl: p4,
      active: false,
    },
    {
      id: uuidv4(),
      category: "Design",
      title: "Abstract",
      imageUrl: p5,
      active: false,
    },
    {
      id: uuidv4(),
      category: "Branding",
      title: "HandP",
      imageUrl: p6,
      active: false,
    },
    {
      id: uuidv4(),
      category: "Motion",
      title: "Architect",
      imageUrl: p7,
      active: false,
    },
    {
      id: uuidv4(),
      category: "Design",
      title: "CalC",
      imageUrl: p8,
      active: false,
    },
    {
      id: uuidv4(),
      category: "Branding",
      title: "Sport",
      imageUrl: p9,
      active: false,
    },
  ],
  filteredProducts: [],
  currentFilter: "Show All",
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    filterProducts(state, action: PayloadAction<string>) {
      state.currentFilter = action.payload;
      if (state.currentFilter === "Show All") {
        state.filteredProducts = [...state.products];
      } else {
        state.filteredProducts = state.products.filter(
          (product) => product.category === action.payload
        );
      }
    },

    toggleActive(state, action: PayloadAction<string>) {
      const currentFile = state.filteredProducts.filter(
        (product) => product.id === action.payload
      );

      if (currentFile) {
        currentFile[0].active = !currentFile[0].active;
      }
    },
  },
});

export const { filterProducts, toggleActive } = productsSlice.actions;

export default productsSlice;
