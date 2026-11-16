// Prueba: cada generador produce problemas cuya respuesta correcta es aceptada
// y cuyas trampas (errores típicos) son rechazadas.
import { TOPICS_A } from '../js/topics_a.js';
import { TOPICS_B } from '../js/topics_b.js';
import { REASONING } from '../js/reasoning.js';
import { check } from '../js/check.js';
import { parse, Q } from '../js/expr.js';

const numAst = (q) => { q = Q.of(q); return q.n < 0 ? { t: 'neg', a: frac(q.neg()) } : frac(q); };
const frac = (q) => (q.d === 1 ? { t: 'num', v: q } : { t: 'frac', a: { t: 'num', v: new Q(q.n) }, b: { t: 'num', v: new Q(q.d) } });
function correctAst(p) {
  const A = p.ans;
  switch (A.type) {
    case 'num': case 'sol': return numAst(A.v);
    case 'expr': return parse(A.v);
    case 'set': return { t: 'list', items: A.v.map(numAst) };
    case 'sys': return { t: 'list', items: [{ t: 'rel', op: '=', a: { t: 'var', n: 'x' }, b: numAst(A.v.x) }, { t: 'rel', op: '=', a: { t: 'var', n: 'y' }, b: numAst(A.v.y) }] };
  }
}
let fails = 0, total = 0; const seen = new Set();
const report = (where, msg) => { fails++; if (!seen.has(where + msg.slice(0, 40)) && seen.add(where + msg.slice(0, 40))) console.log('FALLA', where, msg); };
for (const t of [...TOPICS_A, ...TOPICS_B]) {
  if (typeof t.lesson === 'function') { try { t.lesson(); } catch (e) { report(t.id + ' lección', e.message); } }
  for (const v of t.variants) {
    for (let i = 0; i < 300; i++) {
      total++;
      let p;
      try { p = v.gen(); } catch (e) { report(`${t.id}/${v.id}`, 'gen: ' + e.stack.split('\n').slice(0,2).join(' ')); break; }
      if (!p.q || !p.ans) { report(`${t.id}/${v.id}`, 'sin q/ans'); continue; }
      if (p.ans.type === 'choice') continue;
      const r = check(p, correctAst(p));
      if (r.status !== 'ok') { report(`${t.id}/${v.id}`, `correcta no aceptada: ${r.status} ${r.msg} | ${JSON.stringify(p.ans.v)}`); continue; }
      for (const tr of p.traps || []) {
        if (tr.v == null) continue;
        let ast;
        try { ast = typeof tr.v === 'string' ? parse(tr.v) : Array.isArray(tr.v) ? { t: 'list', items: tr.v.map(numAst) } : numAst(tr.v); } catch (e) { report(`${t.id}/${v.id}`, 'trampa no parsea ' + tr.v); continue; }
        const rr = check(p, ast);
        if (rr.status === 'ok') continue; // trampa coincide con la correcta (se filtra sola)
        if (rr.status === 'almost') report(`${t.id}/${v.id}`, `trampa da "casi": ${tr.v} -> ${rr.msg}`);
      }
    }
  }
}
for (const r of REASONING) {
  for (let L = 1; L <= 6; L++) for (let i = 0; i < 80; i++) {
    total++;
    let p; try { p = r.gen(L); } catch (e) { report(`razon/${r.id}`, e.stack.split('\n').slice(0,2).join(' ')); break; }
    if (p.ans.type === 'choice') continue;
    const res = check(p, correctAst(p));
    if (res.status !== 'ok') report(`razon/${r.id} L${L}`, `${res.status} ${res.msg} ${JSON.stringify(p.ans.v)}`);
  }
}
console.log(`\n${total} problemas generados, ${fails} fallas`);
process.exit(fails ? 1 : 0);
