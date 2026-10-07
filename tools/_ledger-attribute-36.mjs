// 逐页核对 worker-36 声明的 save-system 页：哪些真写了（diff 非空），哪些没写。
import { execSync } from 'node:child_process';
import { existsSync } from 'node:fs';

const R = 'C:/WorkSpace/Bannerlord/BannerlordCode.github.io';
const sh = c => { try { return execSync(c, { cwd: R, encoding: 'utf8', maxBuffer: 1 << 26 }).trim(); } catch { return ''; } };

const claimed = ['SaveContext','DefinitionContext','TypeDefinition','TypeDefinitionBase','LoadContext',
  'ObjectSaveData','VariableSaveData','VariableLoadData','ObjectLoadData','ContainerSaveData',
  'PropertySaveData','FieldSaveData','ElementSaveData','ContainerSaveId','SaveId','TypeSaveId','MemberTypeId',
  'CustomField','GenericSaveId','MemberSaveData','SavedMemberType','InterfaceDefinition','StructDefinition',
  'EnumDefinition','StringSerializer','BoolBasicTypeSerializer','IntBasicTypeSerializer',
  'Vec3BasicTypeSerializer','ColorBasicTypeSerializer','MatrixFrameBasicTypeSerializer',
  'ArchiveSerializer','ArchiveDeserializer','ArrayBasicTypeSerializer','MetaData','ElementLoadData'];

const dirty = new Set(sh('git status --porcelain -- content/v1.4.5/zh/api/save-system')
  .split(/\r?\n/).filter(Boolean).map(l => l.slice(3).trim().replace(/\\/g, '/').replace('content/v1.4.5/zh/api/save-system/', '')));

const written = [], notWritten = [], missing = [];
for (const n of claimed) {
  const p = `content/v1.4.5/zh/api/save-system/${n}.md`;
  if (!existsSync(`${R}/${p}`)) { missing.push(n); continue; }
  const d = sh(`git diff --numstat -- "${p}"`);
  if (d && d.trim()) written.push(`${n}  (${d.trim().split('\t').map(x => x.trim()).join('/')})`);
  else notWritten.push(n);
}
console.log(`worker-36 声明 save-system ${claimed.length} 页`);
console.log(`  磁盘上不存在        = ${missing.length}  ${missing.join(', ')}`);
console.log(`  存在但 diff 为空    = ${notWritten.length}  ${notWritten.join(', ')}`);
console.log(`  真写了              = ${written.length}`);
console.log('\n=== 声明了但没写的页（这些就是它「不记得写过」的）===');
notWritten.forEach(n => console.log('  ' + n));
