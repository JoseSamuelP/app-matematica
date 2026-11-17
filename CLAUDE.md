# Proyecto: App de práctica de Matemática (Nivelación PRE-ESAN)

Este archivo es el contexto permanente del proyecto. Léelo completo antes de trabajar.
Idioma de trabajo: **español** (la app, el código comentado y las respuestas al usuario).

## 1. Quién es el usuario

- Estudiante de los cursos de nivelación **PRE-Universidad ESAN** (ciclo PNU 2026-3, noviembre–diciembre 2026), grupo G1: **Matemática** y **Comunicación**.
- Tiene una base débil en matemática ("me quedé en ecuaciones básicas") y en comunicación.
- Dispositivos: celular **Pixel 7 Pro** (Android) y laptop **Acer Predator Helios 16**. Quiere estudiar **también desde el celular**.
- Aprende mejor con **ejemplos concretos de la vida real** (dinero, precios, deudas) que con reglas sueltas. Es honesto sobre lo que no sabe: aprovecharlo.

## 2. Objetivo de la app

Una app (prioridad: **web app / PWA** usable en el celular, instalable en la pantalla de inicio, que también funcione en la laptop) para **practicar ejercicios de matemática según SUS errores concretos**, no un banco genérico. Debe enseñar el *porqué*, detectar el tipo de error y avanzar por niveles.

El proyecto recibirá **actualizaciones y soporte** continuos: nuevos temas a medida que avanza el curso, y posiblemente Comunicación más adelante.

## 3. Calendario del curso de Matemática (sílabo PNU 2026-3)

Evaluación: PF = 0,20·EP + 0,60·PEP + 0,20·EF. PEP = promedio de 3 prácticas (la 3.ª = suma de Control 1 + Control 2). Escala 0–20.

| Semana | Fechas | Contenidos | Evaluación |
|---|---|---|---|
| Unidad I | (inicio) | Magnitudes directa/inversamente proporcionales, regla de tres simple, porcentajes (tanto por ciento, descuentos y aumentos sucesivos, aplicaciones comerciales, variación porcentual) | — |
| 1 | 16–20 nov | Teoría de exponentes; adición/sustracción/multiplicación/división de polinomios; productos notables; factorización (factor común, agrupación, aspa simple); fracciones algebraicas | **Control 1** (sobre 10) |
| 2 | 23–27 nov | Ecuaciones lineales con una variable, reducibles a lineales, modelamiento (costo, ingreso, utilidad); sistemas 2×2 (sustitución) | **Práctica Calificada 1 (24 nov)** |
| 3 | 30 nov–4 dic | Sistemas (igualación, eliminación) y modelamiento; ecuaciones cuadráticas (factorización, fórmula general), reducibles a cuadráticas, modelamiento | **Examen Parcial** (hasta 3.1.2) + **Control 2** |
| 4 | 7–11 dic | Números reales, orden, intervalos y operaciones; inecuaciones lineales y cuadráticas; coordenadas rectangulares, distancia, punto medio | **Práctica Calificada 2 (11 dic)** |
| 5 | 14–16 dic | La recta: pendiente, ecuación y gráfica | **Examen Final** |

Bibliografía del sílabo: Stewart, *Precálculo* 5.ª ed. (cap. 1 y 10); Arya, *Matemáticas aplicadas a la Administración y Economía* 5.ª ed. (cap. 2 y 3).

## 4. Diagnóstico inicial (16 nov 2026) — 17/37 correctas

Autoevaluación previa del usuario: signos "sí lo sé"; fracciones "50%"; potencias "repasemos"; álgebra básica "hay que subir el nivel"; despejar ecuaciones "no sé"; regla de tres/porcentajes "algo, pero no todo el proceso".

| Bloque | Correctas | Estado |
|---|---|---|
| A. Números con signo | 3/6 | Corregir reglas |
| B. Fracciones | 1/6 (+1 correcta por casualidad) | **Lo más débil** |
| C. Potencias | 2/7 | **Urgente (Control 1)** |
| D. Expresiones algebraicas | 3/6 | Base ok, productos mal |
| E. Ecuaciones de 1.er grado | 4/6 | Bien, un detalle |
| F. Regla de tres y porcentajes | 4/6 | **Su fortaleza** |

### Patrones de error (lo más importante para la app)

1. **Signos**
   - (-6)(-4) → respondió -24 (no aplica "menos por menos = más" en general).
   - 3 - (-5) + (-2) → lo leyó como 3·5 - 2 = 13 (cree que paréntesis después de un número = multiplicar). Correcto: 6.
   - -2·3 - 4·(-5) → operó de izquierda a derecha y con signo mal: -66. Correcto: 14 (**jerarquía de operaciones**).
   - Paradoja: en -2(x - 5) sí obtuvo +10 → la regla está "pegada" al patrón de la distributiva, no entendida.
2. **Fracciones: aplica "recetas" a medias en la operación equivocada**
   - 2/3 + 1/4 → sumó numeradores y multiplicó denominadores: 3/12. Correcto: 11/12.
   - 5/6 - 3/4 → mismo método erróneo, salió 1/12 por casualidad.
   - (3/5)·(10/9) → usó la "multiplicación en cruz" de la suma: 77/45. Correcto: 2/3.
   - (4/7) ÷ (2/21) → método mezclado y error de signo en la resta: 70/147. Correcto: 6.
   - 1/2 + (2/3)(3/4) → 17/12. Correcto: 1.
3. **Potencias**
   - **Potencia de potencia: eleva el exponente en vez de multiplicar**: (a²)³ → a⁸ (hizo 2³); (2x³y)² → 4x⁹y² (hizo 3²). Correcto: a⁶ y 4x⁶y².
   - No sabe: (-3)² vs -3², exponente 0, exponentes negativos, división de potencias de igual base.
   - Sí sabe: 2⁵ = 32, x³·x⁴ = x⁷ (con duda).
4. **Álgebra**
   - (x+3)(x+2) → 2x+5 (sumó en lugar de multiplicar). Correcto: x²+5x+6.
   - (x+5)² → x²+5² (error clásico). Correcto: x²+10x+25.
   - Valor numérico de 3x² - x + 1 con x = -2 → multiplicó 3·(-2) antes de elevar, perdió el signo de -x y el de -37. Correcto: 15.
   - Sí sabe: términos semejantes, distributiva simple.
5. **Ecuaciones**
   - **Transposición sin cambiar signo**: 2x - 6 = x + 4 → x = -2 (marcó "seguro"). Correcto: 10. ⚠ Error con falsa seguridad.
   - x/3 + 2 = 5: llegó bien a (x+6)/3 = 5, luego no supo pasar el 3 multiplicando. Correcto: 9.
   - Sí sabe: ecuaciones simples y plantear "un número y su doble = 36".
6. **Regla de tres / porcentajes**
   - Proporción inversa tratada como directa (obreros/días): 12,8 en vez de 7,5.
   - "¿Qué % de 48 es 12?" → multiplicó (576). Correcto: 25%.
   - Sí sabe: regla de tres directa, % de un número, descuentos, **aumentos sucesivos (razonó 121 perfecto)**.

### Cómo razona (guía pedagógica)
- Fuerte en problemas con contexto real; débil cuando solo hay reglas abstractas.
- Memoriza fragmentos de procedimientos y los aplica por parecido visual → la app debe **explicar de dónde sale cada regla** (p. ej., x³ = x·x·x ⇒ (x²)³ = x²·x²·x² = x⁶).
- Hay que vigilar la **falsa seguridad** (ej. transposición).

## 5. Plan de estudio (orden de prioridad)

1. Signos + jerarquía de operaciones.
2. Potencias desde el significado (incluye exponente 0, negativos, (-3)² vs -3², potencia de potencia) → **Control 1**.
3. Multiplicación de polinomios y productos notables.
4. Fracciones: un método por operación.
5. Ecuaciones: transposición con signo, ecuaciones con fracciones → **PC1 (24 nov)**.
6. Regla de tres inversa y "¿qué % es?".
Luego seguir el sílabo: factorización, sistemas, cuadráticas, intervalos, inecuaciones, recta.

## 6. Requisitos de la app (versión 1)

- **Plataforma**: web app responsive, mobile-first (Pixel 7 Pro), instalable como PWA, funciona offline si es posible. Sin servidor obligatorio al inicio; progreso guardado en el dispositivo (localStorage/IndexedDB, con manejo de errores).
- **Temas por niveles** en el orden del plan; no se avanza sin dominar (p. ej., 8 de 10 recientes correctas).
- **Generador de ejercicios** con números aleatorios (infinitos, no repetidos).
- **Detección de errores típicos**: comparar la respuesta con las respuestas que producen los errores conocidos (sección 4) y dar retroalimentación específica (ej.: "elevaste el exponente; en potencia de potencia se multiplican").
- **Pista paso a paso** opcional (siguiente paso, no la solución entera).
- **Explicaciones con ejemplos reales** (deudas/ganancias para signos, precios para porcentajes).
- **Marcador de seguridad** (seguro / dudé / no sé) en cada ejercicio, igual que en el diagnóstico, para detectar falsa seguridad.
- **Modo repaso por evaluación** (Control 1, PC1, Parcial, Control 2, PC2, Final) según el calendario.
- **Panel de progreso** por tema.
- Entrada de respuestas: **decidido (16 nov)**: escritura con teclado matemático propio tipo Photomath (fracciones apiladas, exponentes, raíces) + opción múltiple solo en preguntas rápidas de razonamiento.

## 7. Decisiones tomadas (16 nov 2026)

- **Solo Matemática** por ahora ("que todo sea de matemática"). Comunicación queda para el futuro.
- **Respuesta escrita** con teclado matemático propio; quiere poder escribir el problema completo (como Photomath), no solo el resultado.
- **Alojamiento: GitHub Pages**, fácil de instalar (sin descargar ni extraer nada). Uso principal: **celular**.
- **Ritmo: 1 mes intensivo** para cubrir el curso; luego profundizar.
- **Metas**: barra diaria + aprobar 1 tema al día; si no aprueba, sigue hasta aprobarlo. Metas cortas pero exigentes.
- Quiere **muchos ejercicios de razonamiento sin lápiz** (para el tren/bus), otros con lápiz, problemas ilustrados (geometría, álgebra, aritmética), correcciones **gráficas** (no solo texto), **modo oscuro**, **sin internet**, y retroalimentación sobre cómo aprende.

## 8. Contexto de Comunicación (para una futura versión)

No hay sílabo publicado aún. La evaluación diagnóstica (50 preguntas) cubre: comprensión lectora (tema principal, vocabulario en contexto), acentuación (reglas generales, hiato, tilde diacrítica), la oración (sujeto, verbo "haber" impersonal), puntuación (coma vocativa, explicativa, elíptica, enumerativa; punto y coma; dos puntos) y conectores lógicos.

## 9. Forma de trabajar

- Mensajes al usuario en español, claros y sin jerga técnica innecesaria.
- Cada actualización: registrar en `CHANGELOG.md` qué cambió y por qué.
- Cuando el usuario reporte nuevos resultados (controles, prácticas), actualizar la sección 4 y ajustar los niveles de la app.

## 10. Estado de la app (v1.0, 16 nov 2026)

Ver `README.md` (estructura) y `CHANGELOG.md` (historial). Puntos clave para seguir trabajando:
- Ruta de temas y fechas de evaluaciones: `js/engine.js` (`PATH`, `EXAMS`; Control 1 asumido el 20 nov, ajustar si el usuario da la fecha real).
- Cada tema = `{id, name, mode, unit, lesson(), variants:[{id, w, errs, gen()}]}` en `js/topics_*.js`. `gen()` devuelve `{q, ans, traps, steps, viz}`; las `traps` son los errores típicos de la sección 4.
- Al agregar un tema: añadirlo a `PATH`, a `sw.js` si es un archivo nuevo, y correr `node tests/generators.test.mjs`.
- Subir `CACHE` en `sw.js` en cada actualización.

## 11. Banco del examen diagnóstico (v1.1, 17 nov 2026)

- El usuario rindió la **Evaluación Diagnóstica de Matemática de ESAN** (Google Forms, 60 preguntas: Álgebra 1–20, Aritmética 21–40, Geometría 41–60). El encargo completo está en `docs/ENCARGO_APP_MATEMATICA.md`.
- Banco en `js/bank_diag.js`; pestaña **📝 Examen** en la app. Incluye temas fuera del sílabo PNU (logaritmos, binomio de Newton, conjuntos, conteo, probabilidad, trigonometría, geometría): el usuario quiere aprenderlos también.
- También compartió la **Guía de ejercicios Semana 1** (magnitudes proporcionales, regla de tres, tanto por ciento, sucesivos, comerciales, variación porcentual, exponentes, polinomios, productos notables). Se resolvió en una página aparte. Errores de la clave encontrados: regla de tres 3 (39,9 L, no 3,9), sucesivos 6 (S/ 20, no 12), productos notables 7 (m², no m).
- Pendiente sugerido: generadores para magnitudes DP/IP con potencias, descuentos sucesivos y variación de áreas/volúmenes (temas de la guía que la app aún no genera).
