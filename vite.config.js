import { defineConfig } from "vite";
import ssr from "vite-plugin-ssr/plugin";
import react from "@vitejs/plugin-react";
import { version } from "os";

// https://vitejs.dev/config/
export default defineConfig({
  root,
  plugins: [react()],
});
