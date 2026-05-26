(function () {
  var lineUrl = "https://line.me/R/ti/p/@476rxwmx?oat_content=url&ts=04251138";

  document.querySelectorAll(".image-link").forEach(function (link, index) {
    link.addEventListener("click", function () {
      if (typeof window.gtag === "function") {
        window.gtag("event", "line_click", {
          link_location: "campaign_image_" + String(index + 1).padStart(2, "0"),
          link_url: lineUrl
        });
      }
    });
  });
})();
