const path = require("path");
import handlebars from "vite-plugin-handlebars";

export default {
  root: path.resolve(__dirname, "src"),
  plugins: [
    handlebars({
      partialDirectory: "./src/partials",
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
