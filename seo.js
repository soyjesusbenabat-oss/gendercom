/**
 * Identidad de la página para buscadores y redes sociales.
 *
 * El diseño reconstruye la cabecera al cargar y se lleva por delante el título, la descripción,
 * la URL canónica, las tarjetas sociales y los iconos del sitio. Aquí se vuelven a poner y se
 * vigila que sigan estando: lo que ve Google tras ejecutar la página es lo mismo que sirve el
 * servidor.
 */
(function () {
  "use strict";

  var DATOS = {
      "lang": "es",
      "locale": "es_ES",
      "nombre": "GENDERCOM 2026",
      "title": "GENDERCOM 2026 · Congreso de Comunicación y Género · Granada",
      "desc": "XII Congreso Internacional de Comunicación y Género. Comunicación sostenible y liderazgo con mirada de género. Universidad de Granada, 7–9 de octubre de 2026.",
      "url": "https://gendercom.org/",
      "imagen": "https://gendercom.org/og.png"
  };

  function meta(sel, crear) {
    var el = document.head.querySelector(sel);
    if (!el) { el = crear(); document.head.appendChild(el); }
    return el;
  }
  function porNombre(nombre, valor) {
    meta('meta[name="' + nombre + '"]', function () {
      var m = document.createElement("meta"); m.setAttribute("name", nombre); return m;
    }).setAttribute("content", valor);
  }
  function porPropiedad(prop, valor) {
    meta('meta[property="' + prop + '"]', function () {
      var m = document.createElement("meta"); m.setAttribute("property", prop); return m;
    }).setAttribute("content", valor);
  }

  function poner() {
    if (!document.head) return;
    if (!document.documentElement.getAttribute("lang")) document.documentElement.setAttribute("lang", DATOS.lang);
    if (!document.title) document.title = DATOS.title;
    porNombre("description", DATOS.desc);
    porNombre("robots", "index, follow, max-image-preview:large, max-snippet:-1");
    porNombre("twitter:card", "summary_large_image");
    porPropiedad("og:type", "website");
    porPropiedad("og:site_name", DATOS.nombre);
    porPropiedad("og:locale", DATOS.locale);
    porPropiedad("og:title", DATOS.title);
    porPropiedad("og:description", DATOS.desc);
    porPropiedad("og:url", DATOS.url);
    porPropiedad("og:image", DATOS.imagen);

    var can = meta('link[rel="canonical"]', function () {
      var l = document.createElement("link"); l.rel = "canonical"; return l;
    });
    if (can.getAttribute("href") !== DATOS.url) can.setAttribute("href", DATOS.url);

    // El icono del diseño llega como blob: efímero; se sustituye por los archivos del sitio
    var iconos = document.querySelectorAll('link[rel="icon"], link[rel="apple-touch-icon"]');
    var bueno = false;
    Array.prototype.forEach.call(iconos, function (l) {
      if ((l.getAttribute("href") || "").indexOf("blob:") === 0) l.remove();
      else bueno = true;
    });
    if (!bueno) {
      [["icon", "favicon-32.png", "32x32"], ["icon", "favicon-512.png", "512x512"], ["apple-touch-icon", "favicon-180.png", "180x180"]]
        .forEach(function (i) {
          var l = document.createElement("link");
          l.rel = i[0]; l.type = "image/png"; l.href = i[1]; l.sizes = i[2];
          document.head.appendChild(l);
        });
    }
  }

  poner();
  document.addEventListener("DOMContentLoaded", poner);
  new MutationObserver(poner).observe(document.documentElement, { childList: true, subtree: true });
  [300, 1000, 2500].forEach(function (ms) { setTimeout(poner, ms); });
})();
