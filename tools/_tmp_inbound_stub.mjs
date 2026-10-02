// Find STUB pages in campaign-ext/mission-ext that are linked by guidance/deep pages.
import { readFileSync, readdirSync, existsSync } from 'node:fs';
import { join } from 'node:path';
import { classifyPage } from './lib/handwritten-policy.mjs';

const ROOT = 'content/v1.3.15/zh';
// Source pages that act as guidance/hubs and link outward
const sources = [
  ...readdirSync('content/v1.3.15/zh/architecture').filter(f=>f.endsWith('.md')).map(f=>`architecture/${f}`),
  'api/campaign-ext/CampaignBehaviorBase.md','api/campaign-ext/CampaignGameStarter.md',
  'api/campaign-ext/CampaignBehaviorManager.md','api/campaign-ext/MBObjectManager.md',
  'api/campaign-ext/MBObjectBase.md','api/campaign-ext/CampaignEvents.md',
  'api/campaign-ext/GiveGoldAction.md','api/campaign-ext/KillCharacterAction.md',
  'api/campaign-ext/ChangeKingdomAction.md','api/campaign-ext/DeclareWarAction.md',
  'api/campaign-ext/MakePeaceAction.md','api/campaign-ext/DiplomacyModel.md',
  'api/core/MBSubModuleBase.md',
];
function resolveLink(srcRel, link){
  // link like ../../api/campaign-ext/Foo/ or ../api/...
  const srcDir = srcRel.split('/').slice(0,-1);
  const parts = link.split('#')[0].split('?')[0].split('/').filter(p=>p&&p!=='.');
  let dir = [...srcDir];
  for(const p of parts){
    if(p==='..') dir.pop();
    else dir.push(p);
  }
  // try .md then dir/index.md
  const cand = join(ROOT, dir.join('/'));
  if(existsSync(cand+'.md')) return cand+'.md';
  if(existsSync(cand) && existsSync(join(cand,'_index.md'))) return join(cand,'_index.md');
  return null;
}
const targetRe = /\]\(\.\.\/(?:\.\.\/)?api\/(campaign-ext|mission-ext|campaign)\/([^)#]+)\)/g;
const stubTargets = new Map();
for(const s of sources){
  const full = join(ROOT,s);
  if(!existsSync(full)) continue;
  const txt = readFileSync(full,'utf8');
  let m;
  while((m=targetRe.exec(txt))){
    const t = resolveLink(s, m[0].slice(2,-1));
    if(!t) continue;
    if(!stubTargets.has(t)) stubTargets.set(t, new Set());
    stubTargets.get(t).add(s);
  }
}
let stubCount=0, deepCount=0;
const rows=[];
for(const [t,from] of stubTargets){
  let st='?';
  try{ st = classifyPage(t, readFileSync(t,'utf8')).status; }catch(e){ st='ERR'; }
  if(st==='stub'){ stubCount++; rows.push([t, from.size, [...from].map(x=>x.split('/').pop()).join(',')]); }
  else if(st==='deep_pass') deepCount++;
}
console.log('Linked targets from guidance/deep hubs:');
console.log('  deep_pass =',deepCount,' stub =',stubCount);
console.log('\n--- STUB targets (high-traffic hollow links) ---');
for(const [t,deg,srcs] of rows.sort((a,b)=>b[1]-a[1])){
  console.log(`${deg}  ${t.replace(ROOT+'/','')}   <- ${srcs}`);
}
