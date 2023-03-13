window.onload = function () {
  document.querySelectorAll(".image").forEach(function (object) {
    const svg = object.contentDocument;

    svg.querySelectorAll("polyline").forEach(function (poly) {
      poly.onmouseover = function () {
        poly.style.fill = "black";
        poly.style.cursor = "pointer";
      };
      poly.onmouseout = function () {
        poly.style.fill = "blue";
        poly.style.cursor = "auto";
      };
      poly.onclick = function () {
        document.getElementById("header").innerText =
          poly.getAttribute("points");
      };
    });
  });
};
