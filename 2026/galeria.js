/**
 * Galería del congreso: abre la foto a tamaño grande y permite recorrerlas.
 *
 * La página se monta con JavaScript después de cargar, así que los botones de la galería no
 * existen todavía cuando se ejecuta este archivo: se espera a que aparezcan y se enganchan
 * entonces, una sola vez.
 */
(function () {
  "use strict";

  var TOTAL = 19;
  var actual = 0;
  var caja, img, cuenta, enganchado = false;

  var ruta = function (n) { return "galeria/g" + (n < 10 ? "0" + n : n) + ".webp"; };

  function mostrar(n) {
    actual = ((n - 1 + TOTAL) % TOTAL) + 1;
    img.src = ruta(actual);
    img.alt = "GENDERCOM 2026 · imagen " + actual + " de " + TOTAL;
    cuenta.textContent = actual + " / " + TOTAL;
    // Se adelanta la siguiente para que el paso sea instantáneo
    var siguiente = new Image();
    siguiente.src = ruta((actual % TOTAL) + 1);
  }

  function abrir(n) {
    mostrar(n);
    caja.classList.add("open");
    caja.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  }

  function cerrar() {
    caja.classList.remove("open");
    caja.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  }

  function enganchar() {
    if (enganchado) return;
    caja = document.getElementById("galLightbox");
    img = document.getElementById("galLightboxImg");
    cuenta = document.getElementById("galCount");
    var botones = document.querySelectorAll("[data-gal]");
    if (!caja || !img || !botones.length) return;
    enganchado = true;

    Array.prototype.forEach.call(botones, function (b) {
      b.addEventListener("click", function () { abrir(parseInt(b.getAttribute("data-gal"), 10)); });
    });
    caja.querySelector("[data-gal-close]").addEventListener("click", cerrar);
    caja.querySelector("[data-gal-prev]").addEventListener("click", function () { mostrar(actual - 1); });
    caja.querySelector("[data-gal-next]").addEventListener("click", function () { mostrar(actual + 1); });
    // Pulsar fuera de la foto cierra
    caja.addEventListener("click", function (e) { if (e.target === caja) cerrar(); });
    document.addEventListener("keydown", function (e) {
      if (!caja.classList.contains("open")) return;
      if (e.key === "Escape") cerrar();
      if (e.key === "ArrowLeft") mostrar(actual - 1);
      if (e.key === "ArrowRight") mostrar(actual + 1);
    });
  }

  enganchar();
  document.addEventListener("DOMContentLoaded", enganchar);
  new MutationObserver(enganchar).observe(document.documentElement, { childList: true, subtree: true });
})();
