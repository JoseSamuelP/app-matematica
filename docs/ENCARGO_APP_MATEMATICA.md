# Encargo: App de Matemática (Evaluación Diagnóstica ESAN)

Este documento es el encargo completo para quien construya la app. Contiene **qué debe integrar la app**, **qué debe enseñar** y **el banco completo de preguntas** del examen "Evaluación Diagnóstica de Matemática" (ESAN, Google Forms, 60 preguntas de opción múltiple, 1 punto cada una).

---

## 1. Para quién es

- El usuario **dice que no sabe matemáticas**. Hay que explicarlo todo desde cero: símbolos, vocabulario y el porqué de cada paso.
- Español, lenguaje sencillo, sin dar nada por sabido.
- El objetivo es **aprender**, no solo saber la respuesta.

## 2. Qué debe integrar la app

1. **Banco de preguntas** con las 60 preguntas de la sección 5 (enunciado, 4 opciones a–d, respuesta correcta, solución, trampas). Formato de datos sugerido por pregunta:
   `id, seccion, tema, enunciado, opciones[a,b,c,d], correcta, explicacion_concepto, pasos[], comprobacion, trampas{opcion: motivo}`
2. **Modo Aprender (por tema):** primero la lección del tema (sección 3), luego las preguntas de ese tema con la explicación al responder.
3. **Modo Práctica:** pregunta a pregunta. Al responder se muestra si acertó y la explicación completa en este orden:
   1. Respuesta correcta
   2. Qué significa el concepto (desde cero)
   3. Pasos numerados con las operaciones visibles
   4. Comprobación (sustituir y verificar)
   5. **Trampas:** por qué cada opción incorrecta está mal y qué error lleva a ella. Si el usuario marcó una incorrecta, destacar *su* error concreto.
4. **Modo Simulacro:** las 60 preguntas en orden por secciones (Álgebra 1–20, Aritmética 21–40, Geometría 41–60), con temporizador opcional y nota final sobre 60.
5. **Repaso de errores:** lista de las preguntas falladas para volver a intentarlas.
6. **Progreso por tema:** porcentaje de aciertos por tema, para saber qué estudiar.
7. **Glosario de símbolos:** ^, √, ∩, ∪, |A|, !, π, log, f⁻¹, ≥, ≤, Δ, { }, ; en sistemas.
8. **Fórmulas clave** en tarjetas (sección 4).
9. **Generador de ejercicios parecidos (opcional, recomendado):** misma estructura con otros números, para practicar más allá del banco.

## 3. Qué debe enseñar: temario

### Sección 1: Álgebra
| Tema | Qué enseñar |
|---|---|
| Evaluar funciones | Sustituir x por un número; usar paréntesis con negativos; (−1)² = 1; menos por menos = más |
| Ecuaciones lineales | Propiedad distributiva (el número multiplica a todo el paréntesis); pasar términos de un lado a otro |
| Sistemas 2×2 | El ";" separa ecuaciones que se cumplen a la vez; método de suma/eliminación; hallar la otra variable |
| Ecuación de 2.º grado por factorización | Dos números que multiplicados dan c y sumados dan b; las raíces cambian de signo |
| Qué es factorizar | Convertir una suma/resta en multiplicación; diferencia de cuadrados a² − b² = (a − b)(a + b); la suma de cuadrados no se factoriza |
| Discriminante | Identificar a, b, c; Δ = b² − 4ac; Δ > 0 dos soluciones, = 0 una, < 0 ninguna real |
| Suma y producto de raíces | Suma = −b/a; producto = c/a, sin resolver la ecuación |
| Leyes de exponentes | Producto: se suman; cociente: se restan; potencia de potencia: se multiplican; x⁰ = 1 |
| Binomio al cuadrado | (a + b)² = a² + 2ab + b²; error clásico: olvidar 2ab |
| Binomio de Newton | Triángulo de Pascal; exponente de x baja y el de y sube (suman n); término independiente = bⁿ |
| Inecuaciones lineales | Signos >, <, ≥, ≤; la solución es un conjunto; voltear el signo al multiplicar/dividir por un negativo |
| Ecuaciones exponenciales | ^ significa "elevado a"; igualar bases y luego exponentes |
| Logaritmos | log_b(x) = n ⟺ bⁿ = x; "¿a qué exponente elevo la base?" |
| Función inversa | f⁻¹ deshace f (el −1 no es exponente); cambiar f(x) por y, despejar x, intercambiar letras |
| Conjuntos | { }, elementos, subconjuntos (incluye vacío y el propio conjunto); P(A) tiene 2ⁿ elementos |
| Operaciones con conjuntos | ∩ = lo común, ∪ = todo sin repetir, |A| = cuántos elementos |
| Dominio | Qué valores acepta la función; dentro de una raíz cuadrada debe haber ≥ 0 |

### Sección 2: Aritmética
| Tema | Qué enseñar |
|---|---|
| MCD y MCM | Descomposición en factores primos; MCD = comunes con menor exponente; MCM = todos con mayor exponente |
| Fracciones | Simplificar dividiendo por el MCD; sumar/restar con denominador común; decimal a fracción |
| Porcentajes | x% de N = N·x/100; descuentos; hallar el total a partir de un porcentaje; % de ganancia sobre el costo |
| Potencias y raíces | Orden de operaciones |
| Interés simple | I = C · r · t |
| Regla de tres inversa | Más personas → menos días; personas × días = constante |
| Progresiones | Aritmética: aₙ = a₁ + (n−1)d, Sₙ = n(a₁ + aₙ)/2; geométrica: aₙ = a₁ · rⁿ⁻¹ |
| Números primos | Definición (el 1 no es primo); listarlos |
| Factorial y conteo | n! ; permutaciones (ordenar n cosas = n!); combinaciones C(n,k) = n!/(k!(n−k)!) cuando el orden no importa |
| Probabilidad | Casos favorables / casos posibles; listar resultados |
| Media aritmética | Suma de datos / cantidad de datos |

### Sección 3: Geometría
| Tema | Qué enseñar |
|---|---|
| Ángulos de polígonos | Suma interior = (n − 2)·180°; cada ángulo en un polígono regular = suma / n |
| Ángulos | Suplementarios suman 180°, complementarios 90°; triángulo suma 180° |
| Áreas | Triángulo b·h/2; rombo D·d/2; trapecio (B+b)·h/2; círculo πr² |
| Pitágoras | c² = a² + b²; hipotenusa; diagonal de rectángulo; diagonal de cuadrado = l√2 |
| Volúmenes y superficies | Cubo a³; esfera (4/3)πr³; área lateral del cilindro 2πrh |
| Apotema del cuadrado | Mitad del lado |
| Trigonometría básica | sen 30° = 1/2; tan 45° = 1; tabla de ángulos notables (30°, 45°, 60°) |
| Geometría analítica | Distancia √((x₂−x₁)² + (y₂−y₁)²); pendiente (y₂−y₁)/(x₂−x₁); circunferencia x² + y² = r² |

## 4. Fórmulas clave (tarjetas)

- Δ = b² − 4ac · suma de raíces −b/a · producto c/a
- (a + b)² = a² + 2ab + b² · a² − b² = (a − b)(a + b)
- aᵐ·aⁿ = aᵐ⁺ⁿ · aᵐ/aⁿ = aᵐ⁻ⁿ · (aᵐ)ⁿ = aᵐⁿ · a⁰ = 1
- log_b(x) = n ⟺ bⁿ = x · |P(A)| = 2ⁿ
- I = C·r·t · aₙ = a₁ + (n−1)d · Sₙ = n(a₁+aₙ)/2 · aₙ = a₁·rⁿ⁻¹
- n! · C(n,k) = n!/(k!(n−k)!)
- (n−2)·180° · c² = a² + b² · V esfera = (4/3)πr³ · A lateral cilindro = 2πrh
- d = √((x₂−x₁)² + (y₂−y₁)²) · m = (y₂−y₁)/(x₂−x₁) · x² + y² = r²

## 5. Banco de preguntas

### Sección 1: Álgebra (1–20)

| # | Enunciado | Opciones | Correcta | Solución | Trampas |
|---|---|---|---|---|---|
| 1 | Si f(x) = 3x² − 5x + 2, ¿cuánto vale f(−1)? | a) 10 · b) 0 · c) −6 · d) 4 | **a** | 3(1) + 5 + 2 = 10 | b: poner −5 en vez de +5; d: (−1)² como −1 |
| 2 | Raíces de x² − 7x + 12 = 0 | a) 6 y 2 · b) −3 y −4 · c) 3 y 4 · d) −6 y −2 | **c** | (x−3)(x−4) = 0 | b: son los números de la factorización, no las raíces |
| 3 | Simplifica (x³·x⁴)/x² | a) x⁹ · b) x⁵ · c) x⁷ · d) x³ | **b** | x⁷/x² = x⁵ | c: olvidar dividir; a: sumar en vez de restar |
| 4 | Resuelve 2(3x − 4) = 5x + 1 | a) −9 · b) 9 · c) 3 · d) −3 | **b** | 6x − 8 = 5x + 1 → x = 9 (46 = 46) | distribuir solo al primer término |
| 5 | Valor de x en x + y = 7; 2x − y = 2 | a) 2 · b) 5 · c) 4 · d) 3 | **d** | Sumar: 3x = 9 → x = 3, y = 4 | c: es el valor de y |
| 6 | Factoriza x² − 9 | a) (x−3)(x+3) · b) (x−9)(x+1) · c) (x+3)² · d) No factorizable | **a** | Diferencia de cuadrados | b da x²−8x−9; c da x²+6x+9; d: sí se factoriza |
| 7 | Discriminante de 2x² − 4x + 1 = 0 | a) 4 · b) 16 · c) 8 · d) −8 | **c** | 16 − 8 = 8 | b: solo b²; d: resta al revés o (−4)² negativo; a: es el número de b |
| 8 | Si log₂(x) = 5, ¿x? | a) 25 · b) 10 · c) 32 · d) 64 | **c** | x = 2⁵ = 32 | a: 5² (base y exponente al revés; el usuario cayó aquí); b: 2·5; d: 2⁶ |
| 9 | ¿Cuánto es (2x + 3)²? | a) 4x²+12x+9 · b) 4x²+9 · c) 4x²+6x+9 · d) 2x²+6x+9 | **a** | a² + 2ab + b² | b: olvidar 2ab; c: un solo 6x; d: no elevar el 2 |
| 10 | Resuelve 3x − 2 > 7 | a) x > 3 · b) x < 3 · c) x > −3 · d) x ≥ 3 | **a** | 3x > 9 → x > 3 | d: el 3 no cumple (7 > 7 es falso) |
| 11 | Término independiente de (x + 2)⁴ | a) 1 · b) 8 · c) 4 · d) 16 | **d** | 2⁴ = 16 | b: 2·4; c: el exponente; a: coeficiente de x⁴ |
| 12 | Si 3^(x+1) = 27, ¿x? | a) 4 · b) 3 · c) 1 · d) 2 | **d** | 27 = 3³ → x + 1 = 3 → x = 2 | b: es el exponente, falta restar 1 |
| 13 | Suma de raíces de 5x² − 10x + 3 = 0 | a) 3/5 · b) −2 · c) 2 · d) −3/5 | **c** | −b/a = 10/5 = 2 | a: es el producto; b: olvidar el signo menos |
| 14 | Simplifica (a²b³)³/(a³b²)² | a) a³b⁹ · b) a³b⁵ · c) a⁶b⁵ · d) a⁰b⁵ = b⁵ | **d** | a⁶b⁹/a⁶b⁴ = b⁵ | c: no restar los exponentes de a |
| 15 | Inversa de f(x) = 2x + 6 | a) (x+6)/2 · b) (x−6)/2 · c) 2x−6 · d) x/2+6 | **b** | y = 2x + 6 → x = (y−6)/2; prueba 5 → 16 → 5 | a: no cambiar el signo del 6 |
| 16 | ¿Cuántos elementos tiene P(A) si A = {1,2,3}? | a) 6 · b) 8 · c) 3 · d) 9 | **b** | 2³ = 8 | a: olvidar vacío y A; c: elementos de A; d: 3² |
| 17 | A = {1,2,3,4,5}, B = {3,4,5,6,7}, ¿|A ∩ B|? | a) 7 · b) 5 · c) 3 · d) 2 | **c** | A ∩ B = {3,4,5} | a: es la unión; b: tamaño de A |
| 18 | **PENDIENTE: el usuario no la envió** | — | — | — | — |
| 19 | 4.º término de (x + y)⁶ | a) 6x⁵y · b) 15x²y⁴ · c) 20x³y³ · d) 15x⁴y² | **c** | Fila 6 de Pascal: 1, 6, 15, 20… | a = 2.º, d = 3.º, b = 5.º término |
| 20 | Dominio de f(x) = √(x − 4) | a) x ≤ 4 · b) x > 4 · c) x ≥ 4 · d) Todos los reales | **c** | x − 4 ≥ 0 | b: excluye el 4 (√0 = 0 sí existe) |

### Sección 2: Aritmética (21–40)

| # | Enunciado | Opciones | Correcta | Solución | Trampas |
|---|---|---|---|---|---|
| 21 | M.C.D. de 48 y 72 | a) 12 · b) 24 · c) 6 · d) 144 | **b** | 48 = 2⁴·3, 72 = 2³·3² → 2³·3 = 24 | a, c: divisores comunes pero no el mayor; d: múltiplo, no divisor |
| 22 | M.C.M. de 12, 18 y 24 | a) 48 · b) 36 · c) 144 · d) 72 | **d** | 2³·3² = 72 | c: múltiplo común pero no el menor; a, b: no son múltiplos de los tres |
| 23 | Simplifica 252/336 | a) 2/3 · b) 7/8 · c) 5/7 · d) 3/4 | **d** | MCD = 84 → 3/4 | — |
| 24 | 2/3 + 3/4 − 1/6 | a) 5/4 · b) 3/4 · c) 7/12 · d) 11/12 | **a** | 8/12 + 9/12 − 2/12 = 15/12 = 5/4 | sumar numeradores y denominadores directamente |
| 25 | S/ 120 con 15% de descuento, ¿cuánto se paga? | a) 108 · b) 105 · c) 102 · d) 98 | **c** | 15% de 120 = 18 → 102 | a: 10%; b: restar 15 soles |
| 26 | El 35% de un número es 63, ¿el número? | a) 200 · b) 160 · c) 180 · d) 220 | **c** | 63 ÷ 0,35 = 180 | — |
| 27 | 3² + 4² − √25 | a) 20 · b) 18 · c) 21 · d) 15 | **a** | 9 + 16 − 5 = 20 | — |
| 28 | S/ 5000 al 8% simple 3 años, ¿interés? | a) 800 · b) 1000 · c) 1200 · d) 600 | **c** | 5000·0,08·3 = 1200 | 400 por año; a: dos años |
| 29 | Siguiente en 5, 11, 17, 23, … | a) 28 · b) 29 · c) 30 · d) 27 | **b** | Diferencia 6 → 29 | — |
| 30 | 6.º término de 2, 6, 18, … | a) 162 · b) 486 · c) 1458 · d) 54 | **b** | 2·3⁵ = 486 | a: 5.º; c: 7.º; d: 4.º |
| 31 | 3 personas en 12 días; ¿4 personas? | a) 9 · b) 16 · c) 8 · d) 6 | **a** | 3·12 = 36 → 36/4 = 9 | b: regla de tres directa (es inversa) |
| 32 | 0,125 como fracción irreducible | a) 1/8 · b) 1/4 · c) 3/8 · d) 5/40 | **a** | 125/1000 = 1/8 | d: equivale, pero no es irreducible |
| 33 | Compra a S/ 80 y vende a S/ 100, ¿% de ganancia sobre el costo? | a) 25% · b) 20% · c) 15% · d) 30% | **a** | 20/80 = 25% | b: dividir entre la venta. *Enunciado leído de una captura borrosa: verificar el orden de las opciones* |
| 34 | ¿Cuántos primos hay entre 1 y 30? | a) 11 · b) 9 · c) 10 · d) 8 | **c** | 2, 3, 5, 7, 11, 13, 17, 19, 23, 29 | a: contar el 1 (no es primo) |
| 35 | 5! | a) 60 · b) 120 · c) 100 · d) 24 | **b** | 5·4·3·2·1 = 120 | d: 4! |
| 36 | Ordenar 4 personas en 4 asientos | a) 16 · b) 12 · c) 24 · d) 48 | **c** | 4! = 24 | a: 4² |
| 37 | Combinaciones de 2 con 6 elementos | a) 12 · b) 30 · c) 15 · d) 20 | **c** | 6·5/2 = 15 | b: contar el orden (permutación) |
| 38 | Moneda 3 veces, P(exactamente 2 caras) | a) 3/8 · b) 1/4 · c) 1/2 · d) 1/8 | **a** | CCS, CSC, SCC de 8 casos | d: un solo caso |
| 39 | Media de 8, 12, 15, 9, 16 | a) 11 · b) 12 · c) 13 · d) 10 | **b** | 60/5 = 12 | — |
| 40 | Suma de los 10 primeros términos de 2, 5, 8, 11, … | a) 145 · b) 110 · c) 130 · d) 155 | **d** | a₁₀ = 29; S = 10·(2+29)/2 = 155 | — |

### Sección 3: Geometría (41–60)

| # | Enunciado | Opciones | Correcta | Solución | Trampas |
|---|---|---|---|---|---|
| 41 | Ángulo interior de un hexágono regular | a) 90° · b) 108° · c) 135° · d) 120° | **d** | 720°/6 = 120° | b: pentágono; c: octógono |
| 42 | Área de triángulo base 10, altura 8 | a) 80 · b) 40 · c) 20 · d) 56 cm² | **b** | 10·8/2 = 40 | a: no dividir entre 2 |
| 43 | Hipotenusa con catetos 6 y 8 | a) 14 · b) 12 · c) 10 · d) 9 | **c** | √(36+64) = 10 | a: sumar catetos |
| 44 | Volumen de esfera de radio 3 (π ≈ 3,14) | a) 113,04 · b) 37,68 · c) 75,36 · d) 150,72 cm³ | **a** | (4/3)·3,14·27 = 113,04 | — |
| 45 | Perímetro de cuadrado con diagonal 8√2 | a) 32 · b) 16 · c) 64 · d) 24 cm | **a** | lado = 8 → 4·8 = 32 | c: es el área |
| 46 | Área lateral de cilindro r = 5, h = 10 | a) 150π · b) 50π · c) 200π · d) 100π | **d** | 2π·5·10 = 100π | a: área total (suma las tapas) |
| 47 | Suma de ángulos interiores del octógono | a) 1080° · b) 720° · c) 900° · d) 1260° | **a** | (8−2)·180 = 1080° | b: hexágono; c: heptágono |
| 48 | Suplementario de 65° | a) 125° · b) 25° · c) 90° · d) 115° | **d** | 180 − 65 = 115° | b: complementario (90°) |
| 49 | Área de rombo con diagonales 12 y 8 | a) 96 · b) 48 · c) 40 · d) 24 cm² | **b** | 12·8/2 = 48 | a: no dividir entre 2 |
| 50 | sen 30° | a) √2/2 · b) 1/2 · c) √3/2 · d) 1 | **b** | Ángulo notable | a: sen 45°; c: sen 60° |
| 51 | Triángulo con A = 50°, B = 70°, ¿C? | a) 40° · b) 60° · c) 80° · d) 30° | **b** | 180 − 120 = 60° | — |
| 52 | Distancia entre A(1,2) y B(4,6) | a) √13 · b) 7 · c) √7 · d) 5 | **d** | √(3² + 4²) = 5 | b: sumar 3 + 4 |
| 53 | Pendiente por (2,3) y (5,9) | a) 2 · b) 3 · c) ½ · d) 6 | **a** | (9−3)/(5−2) = 2 | c: fórmula invertida |
| 54 | Área de trapecio, bases 6 y 10, altura 4 | a) 40 · b) 24 · c) 32 · d) 16 cm² | **c** | (6+10)·4/2 = 32 | — |
| 55 | Radio de un círculo de área 49π | a) 3,5 · b) 14 · c) 7 · d) 49 cm | **c** | r² = 49 → r = 7 | d: olvidar la raíz; b: diámetro |
| 56 | Volumen de cubo de arista 4 | a) 16 · b) 32 · c) 96 · d) 64 cm³ | **d** | 4³ = 64 | a: área de una cara; c: área total |
| 57 | Apotema de un cuadrado de lado 10 | a) 5√2 · b) 10 · c) 5 · d) 10√2 cm | **c** | Mitad del lado = 5 | a: media diagonal; d: diagonal |
| 58 | Si tan θ = 1, ¿θ (1.er cuadrante)? | a) 45° · b) 30° · c) 60° · d) 90° | **a** | tan 45° = 1 | — |
| 59 | Circunferencia centro (0,0), radio 5 | a) x²+y²=5 · b) x²+y²=25 · c) (x+5)²+y²=0 · d) x²−y²=25 | **b** | x² + y² = r² | a: no elevar el radio |
| 60 | Diagonal de rectángulo 5 × 12 | a) 13 · b) 17 · c) 11 · d) 7 | **a** | √(25 + 144) = 13 | b: sumar los lados |

## 6. Pendientes

- Pregunta **18** (Álgebra): el usuario no la envió.
- Pregunta **33**: confirmar el orden de las opciones (se leyó de una captura borrosa).
- Falta decidir **dónde y con qué se hace la app** (Android como la app de escaneo, web, etc.). Consultar con el usuario antes de programar.
