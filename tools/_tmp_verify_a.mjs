import { classifyPage } from './lib/handwritten-policy.mjs';
import { readFileSync } from 'fs';
const pages = [
 'content/v1.4.5/zh/api/core-extra/Vec2.md',
 'content/v1.4.5/zh/api/core-extra/Vec3.md',
 'content/v1.4.5/zh/api/core-extra/MatrixFrame.md',
 'content/v1.4.5/zh/api/core-extra/MathF.md',
 'content/v1.4.5/zh/api/core-extra/MBList.md',
 'content/v1.4.5/zh/api/core-extra/MBReadOnlyList.md',
 'content/v1.4.5/zh/api/core-extra/BinaryReader.md',
 'content/v1.4.5/zh/api/core-extra/BinaryWriter.md',
 'content/v1.4.5/zh/api/core-extra/GameState.md',
 'content/v1.4.5/zh/api/core-extra/GameStateManager.md',
 'content/v1.4.5/zh/api/save-system/SaveableFieldAttribute.md',
 'content/v1.4.5/zh/api/save-system/SaveablePropertyAttribute.md',
];
let pass=0;
for(const p of pages){
  const t=readFileSync(p,'utf8');
  const r=classifyPage(p,t);
  if(r.status==='deep_pass')pass++;
  console.log((r.status==='deep_pass'?'PASS':'FAIL').padEnd(5), p, '|', r.status, r.reasons?('| '+r.reasons.slice(0,2).join('; ')):'');
}
console.log('DEEP_PASS', pass+'/'+pages.length);
