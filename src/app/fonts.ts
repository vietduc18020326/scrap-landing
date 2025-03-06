import { Inter, Lato } from "next/font/google";

const LATO = Lato({
  subsets: ["latin"],
  weight: ["400", "700"], // Choose font weights
  variable: "--font-lato", // Custom CSS variable
});

export const FONTS = {
  LATO,
};
