function handleImgError(imgEl, sourceSite) {
  const figure = imgEl.closest('figure');
  if (!figure) return;
  figure.classList.add('img-error');
  imgEl.src =
    'data:image/svg+xml;charset=UTF-8,' +
    encodeURIComponent(
      `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="675">
        <rect width="100%" height="100%" fill="#061125"/>
        <text x="50%" y="50%" fill="#94a3b8" font-size="22"
        font-family="Arial, Helvetica, sans-serif" text-anchor="middle"
        dominant-baseline="middle">
        Imagen no disponible — abrir fuente
        </text>
      </svg>`
    );
}
