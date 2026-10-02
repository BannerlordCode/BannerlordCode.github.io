import fs from 'fs';
const p = 'content/v1.3.15/zh/api/save-system/SaveableFieldAttribute.md';
const t = fs.readFileSync(p, 'utf8');
function sectionBody(text, re) {
  const m = text.match(re);
  if (!m) return null;
  const s = m.index + m[0].length;
  const r = text.slice(s);
  const n = r.search(/^#{1,2}\s+/m);
  return (n < 0 ? r : r.slice(0, n)).trim();
}
function strip(s) {
  return s
    .replace(/```[\s\S]*?```/g, ' ')
    .replace(/`[^`]+`/g, ' ')
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
    .replace(/[*_>#|-]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}
const mental = sectionBody(t, /^#{2}\s+(?:心智模型|Mental\s*Model)\s*$/imu);
const dep = sectionBody(t, /^#{2}\s+(?:依赖|依赖关系|依赖图|依赖关联|Dependencies|Dependency|参见|See\s*Also|Related)\s*$/imu);
const ov = sectionBody(t, /^#{2}\s+(?:概述|Overview)\s*$/imu);
const mentalPlain = strip(mental), ovPlain = strip(ov);
const depLinks = (dep.match(/\[[^\]]+\]\([^)]+\)/g) || []).length;
console.log('mentalPlain len:', mentalPlain.length);
console.log('overviewPlain len:', ovPlain.length);
console.log('depLinks:', depLinks);
const BOIL = [/阅读时先通过属性了解状态/, /Read properties/, /先从命名空间/, /Start from namespace/, /入口或数据节点/, /entry point or data node/i];
console.log('mental boilerplate?', BOIL.some((r) => r.test(mentalPlain)));
const cbs = t.match(/```csharp\r?\n([\s\S]*?)```/gi) || [];
console.log('csharp blocks:', cbs.length);
const TOK = /\b(?:Campaign|Mission|Game|Hero|SaveManager|MBObjectManager|Agent|MobileParty|ScreenManager|ScreenBase|GauntletLayer|ViewModel|InformationManager)\b/;
cbs.forEach((b, i) => {
  const body = b.replace(/```csharp\r?\n/, '').replace(/```/, '');
  const code = body.split(/\r?\n/).map((l) => l.replace(/\/\/.*$/, '').trim()).filter(Boolean).join('\n');
  const pass1 = TOK.test(code) && /\.\w+/.test(code);
  const pass2 = code.split(/\n/).length >= 3 && /\.\w+\s*\(/.test(code);
  console.log('block', i, 'pass1', pass1, 'pass2', pass2);
});
