import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: process.env.NODE_ENV === "production"
<<<<<<< HEAD
  ? "/"
=======
  ? "/chhayaitservices/"
>>>>>>> 02fa17f55e5fc18a93b6a0624cbee042c407bacf
  : "/",


  build: {
    rollupOptions: {
      output: {
        entryFileNames: "assets/[name].js",
        chunkFileNames: "assets/[name].js",
        assetFileNames: "assets/[name][extname]",
      },
    },
  },
});
<<<<<<< HEAD



=======
>>>>>>> 02fa17f55e5fc18a93b6a0624cbee042c407bacf
