// 核 worker-36 的三条纠正（全部从磁盘核，不采信任何转述）：
//   ① save-system 里 diff 非空的页数、及其新增行数分布
//   ② 全树 +1 -1 的页数，以及按桶分布（验证「+1-1 是形状不是归属」）
//   ③ 它 A 清单里 45 页是否真的都 >60 行新增、且都在 save-system（除 1 页 mission-ext）
import { execSync } from 'node:child_process';

const R = 'C:/WorkSpace/Bannerlord/BannerlordCode.github.io';
const API = 'content/v1.4.5/zh/api';
const exec = c => { try { return execSync(c, { cwd: R, encoding: 'utf8', maxBuffer: 1 << 28 }); } catch { return ''; } };

console.log('=== ① save-system：diff 非空的页 + 新增行数分布 ===');
const ss = exec(`git diff --numstat -- ${API}/save-system`).split('\n').filter(Boolean)
  .map(l => { const [a, d, p] = l.split('\t'); return { add: +a || 0, del: +d || 0, name: (p || '').split('/').pop() }; });
const buckets = { '>60': 0, '1-60': 0, '0': 0 };
for (const s of ss) buckets[s.add > 60 ? '>60' : (s.add > 0 ? '1-60' : '0')]++;
console.log(`  有 diff 的页 = ${ss.length}`);
console.log(`  新增 >60 行  = ${buckets['>60']}`);
console.log(`  新增 1–60 行 = ${buckets['1-60']}`);
console.log(`  新增 0 行    = ${buckets['0']}`);

console.log('\n=== ② 全树 +1 -1 的页：数与按桶分布 ===');
const one = exec(`git diff --numstat -- ${API}`).split('\n').filter(Boolean)
  .map(l => { const [a, d, p] = l.split('\t'); return { add: +a || 0, del: +d || 0, path: (p || '').replace(/\\/g, '/') }; })
  .filter(x => x.add === 1 && x.del === 1);
const byB = {};
for (const x of one) { const b = x.path.replace(API + '/', '').split('/')[0]; byB[b] = (byB[b] || 0) + 1; }
console.log(`  全树 +1 -1 的页 = ${one.length}`);
for (const [b, n] of Object.entries(byB).sort((a, b) => b[1] - a[1])) console.log(`    ${b.padEnd(14)} ${n}`);

console.log('\n=== ③ 它 A 清单 45 页：逐页核「>60 新增」+ 桶归属 ===');
const A = `ArchiveDeserializer ArchiveSerializer BoolBasicTypeSerializer ColorBasicTypeSerializer
ContainerLoadData ContainerSaveData ContainerSaveId ContainerType CustomField DefinitionContext
ElementLoadData ElementSaveData EnumDefinition FieldLoadData FieldSaveData GameData GenericSaveId
ISaveDriver IntBasicTypeSerializer InterfaceDefinition LoadCallbackInitializator LoadContext LoadData
MatrixFrameBasicTypeSerializer MemberLoadData MemberSaveData MemberTypeId MetaData ObjectHeaderLoadData
ObjectLoadData ObjectSaveData PropertyLoadData PropertySaveData SaveContext SaveId SavedMemberType
StringSerializer StructDefinition TypeDefinition TypeDefinitionBase TypeSaveId VariableLoadData
VariableSaveData Vec3BasicTypeSerializer`.trim().split(/\s+/);
const ssMap = new Map(ss.map(s => [s.name.replace(/\.md$/, ''), s]));
let ok = 0, bad = [];
for (const n of A) {
  const s = ssMap.get(n);
  if (!s) bad.push(`${n}  ← save-system 里没有 diff`); else if (s.add <= 60) bad.push(`${n}  ← 新增仅 ${s.add} 行`);
  else ok++;
}
console.log(`  A 清单 45 页中核过 = ${ok} · 不符 = ${bad.length}`);
bad.slice(0, 8).forEach(x => console.log('    ' + x));
const extra = A.filter(n => !ssMap.has(n));
console.log(`  不在 save-system 的（应只有 MissionAgentSpawnLogic）= ${extra.join(', ')}`);
