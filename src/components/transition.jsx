import { useEffect } from "react";

export default function Transition(router, route) {
  const contentElement = document.querySelector(".homeContent, iframe");

  if (contentElement) {
    // Fade out the current content
    contentElement.style.transition = "opacity 0.1s ease-in-out";
    contentElement.style.opacity = "0";

    // Wait for the fade-out animation to complete
    setTimeout(() => {
      // Navigate to the new route
      router.push(route);

      // Listen for the route change completion event
      const handleRouteChangeComplete = () => {
        // Fade in the new content
        const newContentElement = document.querySelector(
          ".homeContent, iframe"
        );
        if (newContentElement) {
          newContentElement.style.transition = "opacity 0.1s ease-in-out";
          newContentElement.style.opacity = "1";
        }

        // Clean up the event listener
        router.events.off("routeChangeComplete", handleRouteChangeComplete);
      };

      // Attach the event listener
      router.events.on("routeChangeComplete", handleRouteChangeComplete);
    }, 100); // Wait for the fade-out animation to complete
  }
}
