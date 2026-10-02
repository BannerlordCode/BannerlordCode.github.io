// 只读：按桶统计「现存手写页出链中指向尚未撰写页面」的入链数 —— 排批次的实测依据
import fs from 'node:fs';
import path from 'node:path';
const ROOT = 'content/v1.4.6';
const ZH = /：(?:TaleWorlds|SandBox|StoryMode)\.\S+ 的 public (?:类|结构体|接口|枚举)/, EN = /: a public (?:class|struct|interface|enum) in (?:TaleWorlds|SandBox|StoryMode)\.\S+/;
function isGen(t){ if(t.includes('<!-- generated-by:')||t.includes('Batch first draft'))return true; const m=t.match(/^---\r?\n([\s\S]*?)^---/m); const d=m?m[1]:''; if(ZH.test(d)||EN.test(d))return true; return false; }
function walk(d,a=[]){for(const e of fs.readdirSync(d,{withFileTypes:true})){const p=path.join(d,e.name);e.isDirectory()?walk(p,a):e.name.endsWith('.md')&&a.push(p);}return a;}
const routeOf=(rel)=>{const q=rel.split(path.sep).join('/').replace(/\.md$/,'');return q.endsWith('_index')?q.replace(/_index$/,''):q+'/';};
function res(from,href){if(/^(https?:|#|mailto:)/.test(href))return null;const h=href.split('#')[0];if(!h)return null;const s=from.split('/').filter(Boolean);for(const x of h.split('/')){if(x==='.'||x==='')continue;if(x==='..')s.pop();else s.push(x);}const r=s.join('/');return r.endsWith('/')?r:r+'/';}
const exists=(r)=>{const x=r.replace(/\/+$/,'');return fs.existsSync(path.join(ROOT,x+'.md'))||fs.existsSync(path.join(ROOT,x,'_index.md'));};
const byBucket=new Map();
for(const f of walk(ROOT)){const t=fs.readFileSync(f,'utf8');if(isGen(t))continue;const rel=path.relative(ROOT,f);const route=routeOf(rel);
  const re=/\[[^\]]*\]\(([^)\s]+)\)/g;let m;
  while((m=re.exec(t))){const tg=res(route,m[1]);if(!tg||exists(tg))continue;const seg=tg.split('/').filter(Boolean);const bucket=seg.length>2?seg[2]:'(root)';const name=seg[seg.length-1];
    if(!byBucket.has(bucket))byBucket.set(bucket,new Map());const bm=byBucket.get(bucket);bm.set(name,(bm.get(name)||0)+1);}}
const rows=[];
for(const [b,m] of byBucket){let tot=0;const list=[...m].sort((a,c)=>c[1]-a[1]);for(const [,n] of list)tot+=n;rows.push([b,tot,list.length,list.map(([n,c])=>`${n}(${c})`).join(' ')]);}
rows.sort((a,c)=>c[1]-a[1]);
for(const r of rows)console.log(`${r[0]}  edges=${r[1]}  targets=${r[2]}\n    ${r[3]}`);
