// 核验 worker-34 交叉复查报出的 3 条错 + 1 条跨页矛盾。只读。
import { execSync } from 'node:child_process';
const S = 'C:/WorkSpace/Bannerlord/bannerlord-1.4.5/Bannerlord.Source';
const sh = c => { try { return execSync(c, { encoding: 'utf8', maxBuffer: 1 << 28 }).trim(); } catch { return ''; } };
const line = (f, n) => sh(`findstr /n "^" "${f}" | findstr /b ${n}:`).replace(/^\d+:/, '');

const find = name => sh(`dir /s /b "${S}\\${name}" | head -1`);

console.log('=== 错① TypeDefinition「唯一子类」—— worker-34 报 grep 得 2 命中 ===');
console.log('  grep ": TypeDefinition\\b" 全树:');
console.log(sh(`grep -rn ": TypeDefinition\\b" --include=*.cs "${S}" | sed 's|.*Bannerlord.Source/||'`));

console.log('\n=== 错② FieldLoadData「三层判空」—— 报 :17 实为 2 个条件 ===');
const fl = find('FieldLoadData.cs'), pl = find('PropertyLoadData.cs');
console.log('  FieldLoadData.cs:17   = ' + line(fl, 17));
console.log('  PropertyLoadData.cs:17 = ' + line(pl, 17));
console.log('  → 两处若都是 2 个条件，则 FieldLoadData 页的「三层」是错的');
console.log('  FieldLoadData.cs:22   = ' + line(fl, 22));

console.log('\n=== 错③ DefinitionContext「注册号唯一性没有任何检查」—— 报 :97 有 Dictionary.Add ===');
const dc = find('DefinitionContext.cs');
console.log('  :15  ' + line(dc, 15));
console.log('  :66  ' + line(dc, 66));
console.log('  :97  ' + line(dc, 97));
