# Daisy UI, change themes, tailwindCSS, astro, and vercel using bun

```sh
👉bun i
bun install v1.2.20 (6ad208bc)

+ @astrojs/react@4.2.5
+ @tailwindcss/vite@4.1.4
+ @types/react@19.1.2
+ @types/react-dom@19.1.2
+ astro@5.7.5
+ daisyui@5.0.28
+ react@19.1.0
+ react-dom@19.1.0
+ swr@2.3.3
+ tailwindcss@4.1.4

345 packages installed [51.82s]
```
```sh
👉bun dev
$ astro dev
14:12:38 [types] Generated 1ms
14:12:38 [content] Syncing content
14:12:38 [content] Synced content

 astro  v5.7.5 ready in 729 ms

┃ Local    http://localhost:4321/
┃ Network  use --host to expose

14:12:38 watching for file changes...
```

## key files

```sh
👉cat src/pages/assets/app.css
@import "tailwindcss";
@plugin "daisyui"{
  themes: light --default, dark --prefersdark, abyss;
}


/**
  A custom theme I made with
  https://daisyui.com/theme-generator/
*/

@plugin "daisyui/theme" {
  name: "purplewind";
  default: true;
  prefersdark: false;
  color-scheme: "light";
  --color-base-100: oklch(96% 0.016 293.756);
  --color-base-200: oklch(94% 0.029 294.588);
  --color-base-300: oklch(89% 0.057 293.283);
  --color-base-content: oklch(38% 0.189 293.745);
  --color-primary: oklch(82% 0.12 346.018);
  --color-primary-content: oklch(28% 0.109 3.907);
  --color-secondary: oklch(82% 0.119 306.383);
  --color-secondary-content: oklch(29% 0.149 302.717);
  --color-accent: oklch(80% 0.105 251.813);
  --color-accent-content: oklch(28% 0.091 267.935);
  --color-neutral: oklch(38% 0.189 293.745);
  --color-neutral-content: oklch(96% 0.016 293.756);
  --color-info: oklch(54% 0.245 262.881);
  --color-info-content: oklch(97% 0.014 254.604);
  --color-success: oklch(60% 0.118 184.704);
  --color-success-content: oklch(98% 0.014 180.72);
  --color-warning: oklch(68% 0.162 75.834);
  --color-warning-content: oklch(98% 0.026 102.212);
  --color-error: oklch(58% 0.253 17.585);
  --color-error-content: oklch(96% 0.015 12.422);
  --radius-selector: 0.25rem;
  --radius-field: 0.25rem;
  --radius-box: 0.5rem;
  --size-selector: 0.25rem;
  --size-field: 0.25rem;
  --border: 2px;
  --depth: 1;
  --noise: 1;
}

```

```sh
👉cat src/pages/layouts/Layout.astro
---
import "../assets/app.css";
const { content } = Astro.props;
console.log(content);
---

<html lang="en">
  <head>
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Sample Ui</title>
  </head>
  <body>
    <div class="hidden lg:block bg-red-500 p-4">Desktop only</div>
    <div class="block lg:hidden bg-blue-500 p-4">Mobile only</div>
    <div class="drawer lg:drawer-open">
      <input id="my-drawer-4" type="checkbox" class="drawer-toggle" />

      <!-- Page Content -->
      <div class="drawer-content flex flex-col">
        <!-- OPEN BUTTON (hidden on desktop) -->
        <div class="block lg:hidden">
          <label for="my-drawer-4" class="btn btn-ghost hidden lg:hidden">
            <!-- Menu icon -->
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </label>
        </div>
        <slot />
        <!-- Page content here -->
      </div>

      <div class="drawer-side overflow-visible">
        <label
          for="my-drawer-4"
          aria-label="close sidebar"
          class="drawer-overlay"></label>
        <div
          class="flex min-h-full w-14 flex-col items-start bg-base-200 lg:w-64"
        >
          <!-- Sidebar content here -->
          <ul class="menu w-full grow">
            <!-- list item -->
            <li>
              <button
                class="max-lg:tooltip max-lg:tooltip-right"
                data-tip="Homepage"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  stroke-linejoin="round"
                  stroke-linecap="round"
                  stroke-width="2"
                  fill="none"
                  stroke="currentColor"
                  class="my-1.5 inline-block size-4"
                >
                  <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path>
                  <path
                    d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"
                  ></path>
                </svg>
                <span class="max-lg:hidden">Homepage</span>
              </button>
            </li>

            <!-- list item -->
            <li>
              <button
                class="max-lg:tooltip max-lg:tooltip-right"
                data-tip="Settings"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  stroke-linejoin="round"
                  stroke-linecap="round"
                  stroke-width="2"
                  fill="none"
                  stroke="currentColor"
                  class="my-1.5 inline-block size-4"
                >
                  <path d="M20 7h-9"></path>
                  <path d="M14 17H5"></path>
                  <circle cx="17" cy="17" r="3"></circle>
                  <circle cx="7" cy="7" r="3"></circle>
                </svg>
                <span class="max-lg:hidden">Settings</span>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </body>
</html>

```

