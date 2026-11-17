// Prueba: el banco del examen diagnóstico está bien formado.
import { BANK } from '../js/bank_diag.js';
let fails = 0;
const ids = new Set();
for (const b of BANK) {
  const bad = (m) => { fails++; console.log('FALLA #' + b.id, m); };
  if (ids.has(b.id)) bad('id repetido'); ids.add(b.id);
  if (!b.q || b.o.length !== 4) bad('enunciado u opciones');
  if (!(b.c >= 0 && b.c < 4)) bad('correcta fuera de rango');
  if (!b.concepto || !b.pasos.length || !b.comp) bad('falta explicación');
  for (const k of Object.keys(b.t || {})) { if (+k === b.c) bad('trampa sobre la correcta'); if (!(+k >= 0 && +k < 4)) bad('trampa fuera de rango'); }
}
if (BANK.length !== 60) { fails++; console.log('Deben ser 60, hay', BANK.length); }
console.log(`${BANK.length} preguntas, ${fails} fallas`);
process.exit(fails ? 1 : 0);
