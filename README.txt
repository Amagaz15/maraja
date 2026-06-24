MARAJÁ FEST — LANDING PAGE (ARCHIVOS SEPARADOS)

ESTRUCTURA
- index.html  → estructura, textos, botones y secciones.
- style.css   → colores, tipografías, tamaños, diseño de escritorio y celular.
- script.js   → menú móvil, cuenta regresiva y ampliación de imágenes.
- assets/     → logo, hotel, recuerdos 2022, video y fotos de artistas.

CÓMO PROBARLA
1. Abrí index.html con doble clic o arrastralo al navegador.
2. Para publicarla, subí la carpeta completa a Netlify. No subas solamente index.html:
   necesita style.css, script.js y la carpeta assets para verse bien.

DÓNDE JUGAR CON EL DISEÑO
- Al inicio de style.css está :root. Ahí cambiás los colores principales:
  --black, --gold, --gold-light, --cream.
- Buscá '.hero' para editar el inicio.
- Buscá '.artist-grid' y '.artist-card' para el bloque de artistas.
- Buscá '@media' al final para los cambios en celular.

DÓNDE CAMBIAR TEXTOS O LINKS
- En index.html.
- Buscá 'wa.me' para WhatsApp.
- Buscá 'marajafest' para el alias de transferencia.

DÓNDE CAMBIAR LAS FOTOS DE ARTISTAS
- Subí las fotos a assets/artists/.
- Leé assets/artists/LEER-ANTES-DE-SUBIR-FOTOS.txt.
- Luego reemplazá el bloque placeholder dentro de cada tarjeta de artista por una etiqueta img.

NOTA
No borres ni renombres style.css, script.js o assets salvo que después actualices las rutas en index.html.
