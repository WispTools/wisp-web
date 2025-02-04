"use client";

export default function Transition(router, route, currentRoute) {
  if (route == currentRoute) {
    return;
  }
  const contentElements = document.querySelectorAll(".fadeContent");

  if (contentElements.length == 0) {
    router.push(route);
    return;
  }

  if (contentElements.length > 0) {
    contentElements.forEach((element) => {
      element.style.transition = "opacity 0.1s ease-in-out";
      element.style.opacity = "0";
    });

    setTimeout(() => {
      router.push(route);

      const handleRouteChangeComplete = () => {
        const newContentElements = document.querySelectorAll(
          ".homeContent, iframe"
        );
        if (newContentElements.length > 0) {
          newContentElements.forEach((element) => {
            element.style.transition = "opacity 0.1s ease-in-out";
            element.style.opacity = "1";
          });
        }

        router.events.off("routeChangeComplete", handleRouteChangeComplete);
      };

      router.events.on("routeChangeComplete", handleRouteChangeComplete);
    }, 100);
  }
}
