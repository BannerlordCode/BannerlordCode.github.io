// 只读：孤儿页普查 —— 全站范围内没有任何现存页链到它。
// 口径与 zola build 的 orphan 一致：site-wide 入链计数（不是单版本内）。
import fs from 'node:fs';
import path from 'node:path';
const SITE='content';
function walk(d,a=[]){for(const e of fs.readdirSync(d,{withFileTypes:true})){const p=path.join(d,e.name);e.isDirectory()?walk(p,a):(e.name.endsWith('.md')||e.name.endsWith('.txt'))&&a.push(p);}return a;}
const files=walk(SITE);

// 空 universe 守卫：一个什么都没遍历到的检查器，与「正确地什么都没找到」输出完全一样。
// 因此空集必须报错退出，而不是报出一个漂亮的 0。
if (!files.length) {
  console.error('EMPTY_UNIVERSE: 未遍历到任何文件 —— 检查器无法工作，拒绝出结论（这不等于「一切正常」）');
  process.exit(2);
}
const routeOf=(rel)=>{const q=rel.split(path.sep).join('/').replace(/\.md$/,'');return q.endsWith('_index')?q.replace(/_index$/,''):q+'/';};
function res(from,href){if(/^(https?:|#|mailto:)/.test(href))return null;const h=href.split('#')[0];if(!h)return null;const s=from.split('/').filter(Boolean);for(const x of h.split('/')){if(x==='.'||x==='')continue;if(x==='..')s.pop();else s.push(x);}const r=s.join('/');return r.endsWith('/')?r:r+'/';}
const routes=new Map(); for(const f of files) routes.set(routeOf(path.relative(SITE,f)),f);
const inbound=new Map(); for(const r of routes.keys()) inbound.set(r,0);
const linkRe=/\[[^\]]*\]\(([^)\s]+)\)/g;
for(const f of files){const rel=path.relative(SITE,f);const t=fs.readFileSync(f,'utf8');const from=routeOf(rel);
  let m; const re=new RegExp(linkRe.source,'g');
  while((m=re.exec(t))){const tg=res(from,m[1]); if(tg&&routes.has(tg))inbound.set(tg,inbound.get(tg)+1);}}
const orphans=[...inbound].filter(([,n])=>n===0).map(([r])=>r);
const perTree={};
for(const r of orphans){const seg=r.split('/')[0];perTree[seg]=(perTree[seg]||0)+1;}
console.log('total_pages='+routes.size+'  orphans='+orphans.length);
console.log('by_tree='+JSON.stringify(perTree));
const v146=orphans.filter(r=>r.startsWith('v1.4.6/'));
console.log('v1.4.6_orphans='+v146.length);
for(const r of v146.slice(0,25))console.log('   '+r);
