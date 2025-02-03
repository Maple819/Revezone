// electron.vite.config.ts
import { resolve } from "path";
import {
  defineConfig,
  externalizeDepsPlugin,
  bytecodePlugin,
  splitVendorChunkPlugin
} from "electron-vite";
import react from "@vitejs/plugin-react";
import { visualizer } from "rollup-plugin-visualizer";
var electron_vite_config_default = defineConfig({
  main: {
    plugins: [externalizeDepsPlugin(), bytecodePlugin()],
    build: {
      minify: true
    }
  },
  preload: {
    plugins: [externalizeDepsPlugin(), bytecodePlugin()],
    build: {
      minify: true
    }
  },
  renderer: {
    resolve: {
      alias: {
        "@renderer": resolve("src/renderer/src")
      }
    },
    plugins: [
      splitVendorChunkPlugin(),
      react(),
      visualizer({
        emitFile: true,
        filename: "stats.html"
      })
    ],
    build: {
      minify: "esbuild",
      rollupOptions: {
        treeshake: true,
        output: {
          manualChunks: {
            antd: ["antd"],
            revesuite: [
              "@revesuite/blocks",
              "@revesuite/editor",
              "@revesuite/lit",
              "@revesuite/store"
            ],
            revemate: ["revemate"],
            tldraw: ["@tldraw/tldraw"]
          }
        }
      }
    },
    server: {
      host: true
    }
  }
});
export {
  electron_vite_config_default as default
};
