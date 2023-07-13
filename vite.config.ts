import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
// eslint-disable-next-line import/no-anonymous-default-export,import/no-unused-modules
export default defineConfig({
  build: {
    cssMinify: "lightningcss",
  },

  css: {
    transformer: "lightningcss",
  },

  plugins: [react()],
});
