# Registro de cambios

## v1.2.0 — 17 nov 2026 · Aprender cada tema paso a paso (35 cursos)

- **Por qué:** el usuario explicó que con solo las 60 preguntas no puede aprender: necesita una explicación y una enseñanza progresiva por tema, con muchas más preguntas.
- **35 cursos** (`js/curso.js`), uno por cada tema del examen diagnóstico. Cada uno tiene:
  1. **Lección desde cero** (qué significa, ejemplo de la vida real y error típico).
  2. **Nivel 1 Fácil → Nivel 2 Medio → Nivel 3 Tipo examen**, con ejercicios infinitos generados al azar, pistas paso a paso y detección del error.
  3. Se sube de nivel con **3 correctas seguidas** (con pista no cuenta para la racha). El tema queda **dominado** con 4 correctas en nivel examen.
  4. En el nivel examen aparecen también las **preguntas reales** de ese tema.
- Temas nuevos con generador propio: discriminante, logaritmos, binomio de Newton, inecuaciones, ecuaciones exponenciales, suma y producto de raíces, función inversa, conjuntos, valor absoluto, dominio, MCD/MCM, interés simple, progresiones, primos, factorial y conteo, probabilidad, media, ángulos de polígonos, ángulos, áreas, Pitágoras, volúmenes, trigonometría y geometría analítica. Los demás reutilizan los generadores de la ruta.
- Orden sugerido: **Aritmética → Álgebra → Geometría**. El entrenamiento diario incluye ≈25% de ejercicios del curso en marcha.
- La pestaña 📝 Examen muestra cada tema con su progreso (●●●) y una ficha con la lección y los niveles.
- Prueba nueva: `node tests/curso.test.mjs` (≈26 000 ejercicios de los 35 cursos).

## v1.1.0 — 17 nov 2026 · Banco del examen diagnóstico (60 preguntas)

- **Por qué:** el usuario compartió el encargo `docs/ENCARGO_APP_MATEMATICA.md` y las capturas de la Evaluación Diagnóstica de ESAN (Álgebra, Aritmética y Geometría) para practicarlas cuanto antes.
- **Nueva pestaña 📝 Examen** con las 60 preguntas (`js/bank_diag.js`). Al responder, cada una muestra en este orden: respuesta correcta → qué significa el concepto (desde cero) → pasos → comprobación → trampas (por qué cada opción incorrecta está mal). Si fallas, se destaca **tu** error.
- **Modos:** seguir con las que faltan, repasar errores, práctica por tema (con % de aciertos) y **simulacro de 60** con cronómetro, sin ayuda y con nota final por sección.
- **Glosario de símbolos** y **fórmulas clave** en tarjetas.
- Las preguntas del banco aparecen también en el **entrenamiento diario** (≈15%), con prioridad para las no respondidas y las falladas.
- Pregunta 18 (|2x − 3| = 5) transcrita de la captura del formulario. La 18 y el orden de opciones de la 33 se leyeron de capturas borrosas; está anotado en el banco.
- Prueba nueva: `node tests/bank.test.mjs` verifica que las 60 estén bien formadas.

## v1.0.2 — 17 nov 2026 · Operación inventada más explicada

- **Por qué:** en 2★4 con a★b = (a + b)², el usuario respondió 20 (2² + 4²) y la app solo decía "No es la respuesta correcta". Es el mismo error del diagnóstico: (x+5)² → x² + 5².
- Ahora la **operación inventada** explica paso a paso: qué significa la regla, el reemplazo con paréntesis, cada operación en orden y el resultado.
- Detecta los errores típicos de cada regla: (a+b)² → a² + b², a² → 2a, (−3)² negativo, signos, orden invertido. Para (a+b)² muestra además el **cuadrado de áreas** con los dos rectángulos que faltaban.

## v1.0.0 — 16 nov 2026 · Primera versión

**Qué se hizo y por qué**

- **App web instalable (PWA), modo oscuro, funciona sin internet.** Se usa desde el celular (Pixel 7 Pro) y también en la laptop. Así se puede practicar en el tren o en el bus.
- **Teclado matemático propio, tipo Photomath.** Tiene fracciones apiladas, exponentes, raíces, signos, letras, `<`, `>`, `≤`, `≥` y `;`, y se puede escribir el problema completo. En la laptop también funciona el teclado físico (`/` crea una fracción y `^` un exponente).
- **22 temas en una ruta ordenada por urgencia** (CLAUDE.md §5 y sílabo): signos, jerarquía, potencias, valor numérico, polinomios, productos notables, factorización, fracciones, ecuaciones, modelamiento, regla de tres, porcentajes, sistemas y cuadráticas. Un tema se aprueba con **8 de las últimas 10** correctas; con pista el ejercicio vale medio punto.
- **Ejercicios infinitos y sin repetir**, generados con números aleatorios. Cada uno se marca como 🧠 *sin lápiz* o ✏️ *con lápiz*. El **modo tren** muestra solo los mentales.
- **14 tipos de retos de razonamiento ilustrados**, con 6 niveles que suben o bajan solos: series, balanza de figuras, pirámides, cuadrado mágico, áreas, ángulos, Pitágoras, fracción sombreada, operación inventada, "pienso un número", cálculo mental, patrones con palitos, "¿cuál es mayor?" y lógica.
- **Detección de los errores del diagnóstico.** La app compara la respuesta con los errores típicos (potencia de potencia, transposición sin cambiar el signo, suma de fracciones con receta equivocada, regla de tres inversa tratada como directa, "¿qué % es?" resuelto multiplicando, etc.) y explica cuál fue el error.
- **Corrección gráfica**: comparación "lo que hiciste ✗ / lo correcto ✓", recta numérica (deudas y ganancias), balanza para ecuaciones, rectángulo de áreas para multiplicar polinomios, barras de fracciones, bloques de potencias, aspa, tabla de regla de tres con flechas y barra de porcentaje.
- **Respuestas "casi"** (sin castigo): cuando la respuesta es equivalente pero falta simplificar, desarrollar, factorizar o terminar el cálculo, se puede corregir sin perder el ejercicio.
- **Pistas paso a paso**: muestran un paso a la vez. **"Mis pasos"** marca cada línea con ✓ o ✗ para encontrar en qué paso apareció el error.
- **Libreta**: se escribe cualquier operación o ecuación y la app da el resultado, los pasos (jerarquía de operaciones) y la solución.
- **Metas**: barra diaria (30 ejercicios, en bloques de 10 con estrella si hay 7 o más correctas) y además aprobar 1 tema al día. Si se hacen los 30 y no se aprueba el tema, la meta se extiende. También hay racha de días, racha de aciertos y una barra de preparación para cada evaluación (Control 1, PC1, Parcial, Control 2, PC2, Final) con su modo repaso.
- **Marcador de seguridad** (😎 seguro / 🤔 dudo / 🙈 no sé) para detectar la falsa seguridad.
- **Análisis "Yo"**: cómo aprendes (contexto real vs. abstracto, mental vs. lápiz, efecto de las pistas, ritmo), en qué eres bueno, qué reforzar, los errores más repetidos y el diagnóstico inicial como punto de partida.
- **Selección adaptativa**: aparecen más ejercicios de los tipos de error que más cometes. El diagnóstico pesa al inicio y se va diluyendo con la práctica.
- **Pruebas**: `node tests/generators.test.mjs` genera unos 29 000 ejercicios y verifica que la respuesta correcta se acepte y que cada error típico se detecte.

**Pendiente para próximas versiones:** fracciones algebraicas, intervalos, inecuaciones, distancia y punto medio, la recta, y posiblemente Comunicación.
