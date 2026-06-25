/* gen-catalog-stubs.mjs - Generate stub pages for undocumented types from catalog metadata.
   No source file lookup needed - uses catalog-*.md for type name, kind, namespace.
   Outputs zh + en stubs with breadcrumb navigation.
   Usage: node tools/gen-catalog-stubs.mjs [--ver 1.3.15] [--out content]
   Run from repo root.
*/
import { readdirSync, readFileSync, writeFileSync, mkdirSync, existsSync } from 'fs';
import { join } from 'path';
import { REPO_ROOT, getArg } from './lib/paths.mjs';

const VER = getArg('--ver', '1.3.15');
const OUT = getArg('--out', 'content');
const DOCS = join(REPO_ROOT, OUT, 'v' + VER);
const API_ZH = join(DOCS, 'zh', 'api');

function parseCatalog(fileName) {
  const src = readFileSync(join(API_ZH, fileName), 'utf8');
  const lines = src.split('\n');
  const entries = [];
  let currentNs = '';
  const dirCounts = {};

  for (const line of lines) {
    const nsM = line.match(/^##\s+(.+?)\s+\(\d+\)/);
    if (nsM) { currentNs = nsM[1]; continue; }

    const m = line.match(/^\|\s+([CSEI])\s+\|\s+(.+?)\s+\|\s+([\u2014\u26d3])\s+\|\s*$/);
    if (m) {
      const kind = m[1];
      const nameRaw = m[2].trim();
      const hasDoc = m[3] === '\u26d3';
      let name = nameRaw;
      let docDir = '';
      const linkM = nameRaw.match(/^\[([^\]]+)\]\(\.\/([^/]+)\//);
      if (linkM) {
        name = linkM[1];
        docDir = linkM[2];
        if (!dirCounts[currentNs]) dirCounts[currentNs] = {};
        dirCounts[currentNs][docDir] = (dirCounts[currentNs][docDir] || 0) + 1;
      }
      entries.push({ name, kind, ns: currentNs, hasDoc, docDir });
    }
  }

  for (const e of entries) {
    if (!e.hasDoc) {
      const dirs = dirCounts[e.ns];
      if (dirs) {
        e.docDir = Object.keys(dirs).sort((a, b) => dirs[b] - dirs[a])[0];
      } else {
        e.docDir = nsToDir(e.ns);
      }
    }
  }
  return entries;
}

function nsToDir(ns) {
  if (ns.startsWith('TaleWorlds.CampaignSystem')) return 'campaign-ext';
  if (ns.startsWith('TaleWorlds.MountAndBlade')) return 'mission-ext';
  if (ns.startsWith('TaleWorlds.Core')) return 'core-extra';
  if (ns.startsWith('TaleWorlds.Engine')) return 'engine';
  if (ns.startsWith('TaleWorlds.Library')) return 'core-extra';
  if (ns.startsWith('TaleWorlds.SaveSystem')) return 'save-system';
  if (ns.startsWith('TaleWorlds.Localization')) return 'localization';
  return 'campaign-ext';
}

function areaToCatalog(dir) {
  const m = {
    'campaign-ext': 'catalog-campaign',
    'mission-ext': 'catalog-mountandblade',
    'core-extra': 'catalog-core',
    'engine': 'catalog-engine',
    'save-system': 'catalog-save',
    'localization': 'catalog-localization',
    'gui': 'catalog-ui',
  };
  return m[dir] || null;
}

function renderStub(name, kind, ns, dir, lang) {
  const L = lang === 'zh';
  const kindMap = { C: L ? '类 class' : 'class', S: L ? '结构体 struct' : 'struct', E: L ? '枚举 enum' : 'enum', I: L ? '接口 interface' : 'interface' };
  const kindName = kindMap[kind] || 'type';
  const areaNames = {
    'campaign-ext': L ? '战役系统 Campaign' : 'Campaign System',
    'mission-ext': L ? '战斗系统 MountAndBlade' : 'Mount & Blade',
    'core-extra': L ? '核心数据 Core' : 'Core',
    'engine': L ? '引擎 Engine' : 'Engine',
    'save-system': L ? '存档系统 SaveSystem' : 'Save System',
    'localization': L ? '本地化 Localization' : 'Localization',
    'gui': L ? '界面 UI' : 'UI',
  };
  const areaName = areaNames[dir] || dir;
  const catFile = areaToCatalog(dir);
  const modName = ns.split('.').slice(0, 2).join('.');

  const lines = [];
  lines.push('# ' + name);
  lines.push('');
  lines.push('**' + (L ? '命名空间' : 'Namespace') + ':** ' + ns);
  lines.push('**' + (L ? '模块' : 'Module') + ':** ' + modName);
  lines.push('**' + (L ? '类型' : 'Type') + ':** ' + kindName);
  lines.push('**' + (L ? '领域' : 'Area') + ':** ' + areaName);
  lines.push('');
  lines.push('## ' + (L ? '概述' : 'Overview'));
  lines.push('');
  if (L) {
    lines.push('> \u672c\u9875\u4e3a\u81ea\u52a8\u751f\u6210\u7684\u5b58\u6839\u3002`' + name + '` \u662f `' + ns + '` \u547d\u540d\u7a7a\u95f4\u4e0b\u7684\u4e00\u4e2a' + kindName + '\u3002');
    lines.push('> \u5982\u9700\u4e86\u89e3\u5176\u5c5e\u6027\u3001\u65b9\u6cd5\u548c\u5f00\u53d1\u8005\u7528\u4f8b\uff0c\u8bf7\u4ece\u76ee\u5f55\u9875\u8ffd\u8e2a\u5230\u5177\u4f53\u7c7b\u9875\u3002');
  } else {
    lines.push('> This is an auto-generated stub. `' + name + '` is a ' + kindName + ' in the `' + ns + '` namespace.');
    lines.push('> Follow the catalog to reach the class page, then use breadcrumbs to return to this area.');
  }
  lines.push('');
  lines.push('## ' + (L ? '\u5fc3\u667a\u6a21\u578b' : 'Mental Model'));
  lines.push('');
  lines.push(L ? '> 这是一页目录存根：先从领域目录确认它属于哪条开发链路，再跳到具体类页补充行为、方法和示例。' : '> This is a directory stub: identify the developer workflow it belongs to from the area catalog, then open the class page for behavior, methods, and examples.');
  lines.push('');
  lines.push('## ' + (L ? '\u53c2\u89c1' : 'See Also'));
  lines.push('');
  lines.push('- [' + (L ? '\u5b8c\u6574\u7c7b\u76ee\u5f55' : 'Complete Class Catalog') + '](../catalog)');
  if (catFile) lines.push('- [' + (L ? '\u672c\u9886\u57df\u76ee\u5f55' : 'Area catalog') + '](../' + catFile + ')');
  return lines.join('\n');
}

const catalogFiles = readdirSync(API_ZH).filter(f => f.startsWith('catalog-') && f.endsWith('.md'));
let generated = 0;
let skipped = 0;
let exists = 0;

for (const cf of catalogFiles) {
  const entries = parseCatalog(cf);
  for (const e of entries) {
    if (e.hasDoc) { skipped++; continue; }
    const dir = e.docDir || 'campaign-ext';
    for (const lang of ['zh', 'en']) {
      const outDir = join(DOCS, lang, 'api', dir);
      if (!existsSync(outDir)) mkdirSync(outDir, { recursive: true });
      const outFile = join(outDir, e.name + '.md');
      if (existsSync(outFile)) { exists++; continue; }
      const body = renderStub(e.name, e.kind, e.ns, dir, lang);
      writeFileSync(outFile, body);
      generated++;
    }
  }
}

console.log('Generated: ' + generated);
console.log('Skipped (already documented): ' + skipped);
console.log('Already existed: ' + exists);
