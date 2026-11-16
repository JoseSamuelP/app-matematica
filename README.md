# Mate PRE-ESAN

App web (PWA) para practicar matemática de la nivelación PRE-Universidad ESAN según tus errores concretos. Modo oscuro, funciona sin internet y es instalable en el celular.

## Usar

- **En el celular:** abre el enlace de GitHub Pages en Chrome → menú ⋮ → **Instalar app** (o "Agregar a la pantalla de inicio").
- **En la computadora (local):** `python3 -m http.server 8000` en esta carpeta y abre http://localhost:8000

## Estructura

| Archivo | Qué hace |
|---|---|
| `index.html`, `css/app.css` | Interfaz (modo oscuro, mobile-first) |
| `js/app.js` | Pantallas: Hoy, Ruta, Libreta, Yo y la práctica |
| `js/engine.js` | Progreso, aprobación de temas, meta diaria, selección adaptativa, análisis, calendario de evaluaciones |
| `js/expr.js` | Motor matemático: fracciones exactas, analizador, evaluación, equivalencias, pasos de jerarquía |
| `js/mathinput.js` | Editor tipo Photomath y teclado matemático |
| `js/check.js` | Revisión de respuestas (correcta / casi / incorrecta + error típico) |
| `js/topics_a.js`, `js/topics_b.js` | Generadores de ejercicios por tema (con trampas = errores típicos y pasos) |
| `js/reasoning.js` | Retos de razonamiento ilustrados (6 niveles) |
| `js/viz.js` | Dibujos de las correcciones |
| `sw.js`, `manifest.webmanifest` | Funcionamiento sin internet e instalación |

## Pruebas

```bash
node tests/generators.test.mjs
```

Al cambiar archivos, sube la versión de `CACHE` en `sw.js` para que el celular reciba la actualización.
