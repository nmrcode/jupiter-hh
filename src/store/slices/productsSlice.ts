import { createSlice } from "@reduxjs/toolkit";
import p1 from "../../static/img/1.png";
import p2 from "../../static/img/2.png";
import p3 from "../../static/img/3.png";
import p4 from "../../static/img/4.png";
import p5 from "../../static/img/5.png";
import p6 from "../../static/img/6.png";
import p7 from "../../static/img/7.png";
import p8 from "../../static/img/8.png";
import p9 from "../../static/img/9.png";

const initialState = [
  { category: "Design", title: "Sofa", imageUrl: p1 },
  { category: "Branding", title: "KeyBoard", imageUrl: p2 },
  { category: "Illustration", title: "Work Media", imageUrl: p3 },
  { category: "Motion", title: "DDDone", imageUrl: p4 },
  { category: "Design", title: "Abstract", imageUrl: p5 },
  { category: "Branding", title: "HandP", imageUrl: p6 },
  { category: "Motion", title: "Architect", imageUrl: p7 },
  { category: "Design", title: "CalC", imageUrl: p8 },
  { category: "Branding", title: "Sport", imageUrl: p9 },
];

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
});

export const {} = productsSlice.actions;

export default productsSlice;