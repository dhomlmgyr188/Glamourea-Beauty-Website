const path = require("path");
import handlebars from "vite-plugin-handlebars";

export default {
  root: path.resolve(__dirname, "src"),
  base: "/Glamourea-Beauty-Website/",

  build: {
    outDir: path.resolve(__dirname, "dist"), // 👈 أهم تعديل هنا
    emptyOutDir: true,

    rollupOptions: {
      input: {
        main: path.resolve(__dirname, "src/index.html"),
        login: path.resolve(__dirname, "src/Components/form/auth/login-form.html"),
        register: path.resolve(__dirname, "src/Components/form/auth/register-form.html"),
        booking: path.resolve(__dirname, "src/Components/form/booking/create-booking-form.html"),
      }
    }
  },

  plugins: [
    handlebars({
      partialDirectory: "./src/partials",
      helpers: {
        array: (...args) => args.slice(0, -1),
      },
    }),
  ],

  resolve: {
    alias: {
      "~bootstrap": path.resolve(__dirname, "node_modules/bootstrap"),
    },
  },

  server: {
    port: 8080,
    hot: true,
  },
};