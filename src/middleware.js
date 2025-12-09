    // src/middleware.js
    import { defineMiddleware } from "astro:middleware";

    export const onRequest = defineMiddleware(async (context, next) => {
      console.log("middleware");
      // Check if the request path ends with .html
      if (context.url.pathname.endsWith(".html")) {
        // Remove .html from the path
        const newPath = context.url.pathname.replace(/\.html$/, "");

        // Create a new URL with the modified path
        const newUrl = new URL(newPath, context.url.origin);

        // Redirect to the new URL with a 301 (Permanent Redirect) status
        return context.redirect(newUrl.toString(), 301);
      }

      // If not an .html file, proceed to the next middleware or route handler
      return next();
    });
