// Prueba: cada nivel de cada curso genera ejercicios válidos.
import { CURSO } from '../js/curso.js';
import { makeProblem } from '../js/engine.js';
import { check } from '../js/check.js';
import { parse, Q } from '../js/expr.js';
const numAst = (q) => { q = Q.of(q); const f = (x) => (x.d === 1 ? { t: 'num', v: x } : { t: 'frac', a: { t: 'num', v: new Q(x.n) }, b: { t: 'num', v: new Q(x.d) } }); return q.n < 0 ? { t: 'neg', a: f(q.neg()) } : f(q); };
function correctAst(p) {
  const A = p.ans;
  if (A.type === 'num' || A.type === 'sol') return numAst(A.v);
  if (A.type === 'expr') return parse(A.v);
  if (A.type === 'set') return { t: 'list', items: A.v.map(numAst) };
  if (A.type === 'sys') return { t: 'list', items: [{ t: 'rel', op: '=', a: { t: 'var', n: 'x' }, b: numAst(A.v.x) }, { t: 'rel', op: '=', a: { t: 'var', n: 'y' }, b: numAst(A.v.y) }] };
}
let fails = 0, total = 0; const seen = new Set();
const bad = (w, m) => { fails++; if (!seen.has(w + m.slice(0, 50))) { seen.add(w + m.slice(0, 50)); console.log('FALLA', w, m); } };
for (const t of CURSO) {
  try { t.lesson(); } catch (e) { bad(t.tema, 'lección: ' + e.message); }
  t.levels.forEach((g, L) => {
    for (let i = 0; i < 250; i++) {
      total++;
      let p;
      try { p = typeof g === 'function' ? g() : g; if (p && p.topic && !p.q) p = makeProblem(p.topic, { variant: p.variant }); } catch (e) { bad(`${t.tema}/N${L + 1}`, e.stack.split('\n').slice(0, 2).join(' ')); break; }
      if (!p || !p.q || !p.ans) { bad(`${t.tema}/N${L + 1}`, 'sin q/ans'); continue; }
      if (p.ans.type === 'choice') {
        const o = p.ans.opts; if (o.length < 2 || !(p.ans.correct >= 0 && p.ans.correct < o.length)) bad(`${t.tema}/N${L + 1}`, 'choice mal formado');
        if (new Set(o.map((x) => x.slice(3))).size !== o.length) bad(`${t.tema}/N${L + 1}`, 'opciones repetidas ' + o.join(' | '));
        if (p.trapFor && p.trapFor(p.ans.correct)) bad(`${t.tema}/N${L + 1}`, 'la correcta tiene trampa');
        if (/NaN|undefined|Infinity/.test(o.join('') + p.q)) bad(`${t.tema}/N${L + 1}`, 'texto raro: ' + o.join(' | '));
        continue;
      }
      if (/NaN|undefined|Infinity/.test(p.q)) bad(`${t.tema}/N${L + 1}`, 'texto raro: ' + p.q);
      const r = check(p, correctAst(p));
      if (r.status !== 'ok') bad(`${t.tema}/N${L + 1}`, `correcta no aceptada: ${r.msg} ${JSON.stringify(p.ans.v)} | ${p.q}`);
    }
  });
}
console.log(`${CURSO.length} temas, ${total} ejercicios, ${fails} fallas`);
process.exit(fails ? 1 : 0);
