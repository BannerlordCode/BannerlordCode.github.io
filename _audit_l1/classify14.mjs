import { classifyPage } from '../tools/lib/handwritten-policy.mjs';
import fs from 'fs';
const files = [
 ['campaign-ext','ConversationManager'],['campaign-ext','GameMenuManager'],
 ['campaign-ext','GameMenuOption'],['campaign-ext','KingdomDecision'],
 ['campaign-ext','MapEvent'],['gui','Brush'],['gui','GamepadNavigationHelper'],
 ['gui','LayoutBox'],['gui','Material'],['gui','SpriteFromTexture'],
 ['gui','TextHelper'],['gui','Widget'],['viewmodel','CharacterViewModel'],
 ['viewmodel','HintViewModel'],
];
for (const [b,t] of files){
  const p=`content/v1.3.15/en/api/${b}/${t}.md`;
  if(!fs.existsSync(p)){ console.log(`CREATE  ${t}  (file missing)`); continue; }
  const txt=fs.readFileSync(p,'utf8');
  const r=classifyPage(p,txt);
  const pad=(s,n)=>String(s).padEnd(n);
  console.log(`${pad(r.status,8)} ${pad(t,22)} [${r.reasons.join(', ')}]`);
}
