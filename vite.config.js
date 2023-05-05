import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  root: "src/",

  // our index.html file that we need to let our bundler know about
  build: {
    outDir: "../dist",
    rollupOptions: {
      input: {
        main: resolve(__dirname, "src/index.html"),
        cart: resolve(__dirname, "src/cart/index.html"),
        product: resolve(__dirname, "src/product_pages/index.html"
        ),
        
      },
    },
  },
});
