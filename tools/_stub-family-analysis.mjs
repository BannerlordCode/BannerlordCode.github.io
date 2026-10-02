import { readdirSync, statSync, readFileSync } from 'node:fs';
import { join, relative, sep } from 'node:path';

const root = process.argv[2];
const AUTOGEN = /description:\s*["'][^"'\n]*自动生成类参考[^"'\n]*["']/u;
const OVERVIEW = /(阅读时(?:先|再)?看?(?:属性|状态))|(是\s*TaleWorlds[^\n。]*公开类型)/u;
const PLACE = /\b[A-Za-z_]\w*\s*=\s*\.\.\.\s*;?/;
const DOUBLEI = /\bII[A-Z]\w+\b/;

function* walk(d){let e;try{e=readdirSync(d);}catch{return;}for(const n of e){if(n.startsWith('.'))continue;const p=join(d,n);const s=statSync(p);if(s.isDirectory())yield* walk(p);else if(n.endsWith('.md'))yield p;}}

function classify(name){
  for(const k of ['Action','Model','Behavior','Quest','Issue','CampaignBehavior','Notification','LogEntry','TypeDefiner','Tag','VM','ViewModel','Menu','Conversation','Encounter','Settlement','Party','MapEvent','Siege','Trait','Perk','Policy','Decision','Option','Gathering','Workshop','Component']) {
    if(name.endsWith(k+'.md')) return k;
  }
  return 'other';
}

const fam = new Map();
let total=0, stub=0;
for(const f of walk(root)){
  total++;
  const t=readFileSync(f,'utf8');
  const fm=(t.match(/^---\r?\n([\s\S]*?)\r?\n---/)||[, ''])[1];
  const isStub=AUTOGEN.test(fm)||OVERVIEW.test(t)||PLACE.test(t)||DOUBLEI.test(t);
  const name=f.split(sep).pop();
  const c=classify(name);
  if(!fam.has(c))fam.set(c,{total:0,stub:0});
  fam.get(c).total++;
  if(isStub){fam.get(c).stub++;stub++;}
}
const rows=[...fam.entries()].sort((a,b)=>b[1].stub-a[1].stub);
console.log(`ROOT ${root}`);
console.log(`TOTAL ${total} STUB ${stub}`);
console.log('family | total | stub');
for(const [k,v] of rows) console.log(`${k} | ${v.total} | ${v.stub}`);
