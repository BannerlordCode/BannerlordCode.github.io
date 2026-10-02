
import { readdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';
import { classifyPage } from './lib/handwritten-policy.mjs';
const rows = [];
for (const v of ['v1.3.0','v1.3.15','v1.4.5']) {
  for (const l of ['en','zh']) {
    const root = 'content/'+v+'/'+l+'/api';
    let ns; try { ns = readdirSync(root,{withFileTypes:true}).filter(d=>d.isDirectory()).map(d=>d.name); } catch { continue; }
    for (const n of ns) {
      const dir = join(root,n);
      const files = readdirSync(dir).filter(f=>f.endsWith('.md'));
      let stub=0, deep=0, noise=0, other=0;
      for (const f of files){ const t=readFileSync(join(dir,f),'utf8'); const r=classifyPage(join(dir,f),t);
        if(r.status==='stub')stub++; else if(r.status==='deep_pass')deep++; else if(r.status==='noise')noise++; else other++; }
      rows.push([v,l,n,files.length,deep,stub,noise,other]);
    }
  }
}
const tot = rows.reduce((a,r)=>[a[0]+r[3],a[1]+r[4],a[2]+r[5],a[3]+r[6],a[4]+r[7]],[0,0,0,0,0]);
console.log('ver	lang	ns	total	deep	stub	noise	other');
rows.sort((a,b)=>b[5]-a[5]).forEach(r=>console.log(r.join('	')));
console.log('TOTAL			'+tot.join('	'));
