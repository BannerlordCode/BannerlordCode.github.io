// 只读：现有类页正文里以裸名提到、但尚无页面的类型 —— 排下一批批次的实测依据
import fs from 'node:fs';
import path from 'node:path';
const ROOT='content/v1.4.6';
const SRC=path.resolve('../bannerlord-1.4.6');
function walk(d,a=[]){for(const e of fs.readdirSync(d,{withFileTypes:true})){const p=path.join(d,e.name);e.isDirectory()?walk(p,a):e.name.endsWith('.md')&&a.push(p);}return a;}
const files=walk(ROOT);
const zh=/：(?:TaleWorlds|SandBox|StoryMode)\.\S+ 的 public (?:类|结构体|接口|枚举)/;
function isGen(t){if(t.includes('<!-- generated-by:')||t.includes('Batch first draft'))return true;const m=t.match(/^---\r?\n([\s\S]*?)^---/m);return m?zh.test(m[1]):false;}
const cs=[];(function w(d){for(const e of fs.readdirSync(d,{withFileTypes:true})){const p=path.join(d,e.name);e.isDirectory()?w(p):e.name.endsWith('.cs')&&cs.push(p);}})(SRC);
const blob=cs.map(f=>fs.readFileSync(f,'utf8')).join('\n');
function hasWord(hay,w){let i=hay.indexOf(w);while(i!==-1){const b=i===0?'':hay[i-1],a=i+w.length>=hay.length?'':hay[i+w.length];if(!/[A-Za-z0-9_]/.test(b)&&!/[A-Za-z0-9_]/.test(a))return true;i=hay.indexOf(w,i+1);}return false;}
// 已有页的类型名
const have=new Set();
for(const f of files){const b=path.basename(f,'.md');if(b!=='_index'&&!b.includes('__'))have.add(b);}
// 从 60 张类页正文抽取 PascalCase 标识符（去代码块与反引号内的族名简写）
const cnt=new Map();
for(const f of files.filter(f=>!path.basename(f).startsWith('_index')&&path.basename(f)!=='_index.md')){
  const t=fs.readFileSync(f,'utf8').replace(/```[\s\S]*?```/g,' ');
  for(const m of t.matchAll(/`([A-Z][A-Za-z0-9]{2,})`/g)){const id=m[1];if(have.has(id))continue;if(/Xxx|XXX|My[A-Z]/.test(id))continue;
    cnt.set(id,(cnt.get(id)||0)+1);}}
const rows=[...cnt].filter(([id])=>hasWord(blob,id)).sort((a,b)=>b[1]-a[1]).slice(0,40);
for(const [id,n] of rows)console.log(String(n).padStart(3),id);
