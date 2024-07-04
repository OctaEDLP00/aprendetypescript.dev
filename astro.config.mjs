import { defineConfig } from "astro/config"
import preact from "@astrojs/preact"
import svelte from "@astrojs/svelte"
import { VitePWA } from "vite-plugin-pwa";
import tailwind from "@astrojs/tailwind"
import auth from "auth-astro"
import vercel from "@astrojs/vercel"

// https://astro.build/config
export default defineConfig({
  // Enable many frameworks to support all different kinds of components.
  integrations: [
    auth(),
    preact(),
    svelte(),
    tailwind(),
  ],
  adapter: vercel(),
  output: 'server',
  markdown: {
    gfm: true
  },
  build: {
    inlineStylesheets: "always"
  },
  compressHTML: true,
  prefetch: true,
  devToolbar: {
    enabled: false
  },
  vite: {
    build: {
      cssMinify: "lightningcss"
    },
    ssr: {
      noExternal: ["path-to-regexp"]
    },
    plugins: [VitePWA({
      registerType: "autoUpdate",
      workbox: {
        globDirectory: ".vercel/output/static",
        globPatterns: ["**/*.{html,js,css,woff,woff2,ttf,eot,ico}"],
        runtimeCaching: [{
          urlPattern: /\.(?:png|jpg|jpeg|svg|gif|webp|avif)$/,
          handler: "CacheFirst",
          options: {
            cacheName: "images",
            expiration: {
              maxEntries: 100,
              maxAgeSeconds: 30 * 24 * 60 * 60
            }
          }
        }, {
          urlPattern: /\.(?:woff|woff2|ttf|eot|ico)$/,
          handler: "CacheFirst",
          options: {
            cacheName: "fonts",
            expiration: {
              maxEntries: 10,
              maxAgeSeconds: 30 * 24 * 60 * 60
            }
          }
        }],
        navigateFallback: null
      }
    })]
  }
})
