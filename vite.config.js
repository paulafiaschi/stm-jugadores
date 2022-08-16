import { defineConfig } from "vite";

import react from "@vitejs/plugin-react";
import { version } from "os";

// https://vitejs.dev/config/
export default defineConfig({
  root,
  plugins: [react()],
});
