import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  resolve: {
    extensions: [".js", ".ts", ".jsx", ".tsx"],
  },
  base: "./", // Убедитесь, что базовый путь корректен для GitHub Pages
  build: {
    outDir: "docs", // Явно указываем выходную директорию
  },
});
