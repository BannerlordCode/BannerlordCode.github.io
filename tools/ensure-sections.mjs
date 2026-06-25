// tools/ensure-sections.mjs
// Create any missing section _index.md files so every directory that contains
// content is a proper Zola section. Existing _index.md files are never touched.
//
// Usage: node tools/ensure-sections.mjs
import { readdirSync, statSync, writeFileSync, existsSync } from 'fs';
import { join, relative, sep, posix } from 'path';
import { REPO_ROOT } from './lib/paths.mjs';

const CONTENT = join(REPO_ROOT, 'content');

const AREA_META = {
  'campaign': { zh: 'Campaign 战役系统', en: 'Campaign' },
  'campaign-ext': { zh: 'Campaign-Ext 战役扩展', en: 'Campaign-Ext' },
  'core': { zh: 'Core 核心数据', en: 'Core' },
  'core-extra': { zh: 'Core-Extra 核心扩展', en: 'Core-Extra' },
  'engine': { zh: 'Engine 引擎', en: 'Engine' },
  'gui': { zh: 'GUI / Gauntlet 界面', en: 'GUI / Gauntlet' },
  'items': { zh: 'Items 物品', en: 'Items' },
  'localization': { zh: 'Localization 本地化', en: 'Localization' },
  'mission': { zh: 'Mission 战斗', en: 'Mission' },
  'mission-ext': { zh: 'Mission-Ext 战斗扩展', en: 'Mission-Ext' },
  'save-system': { zh: 'Save-System 存档', en: 'Save-System' },
  'viewmodel': { zh: 'ViewModel 视图模型', en: 'ViewModel' },
  'system': { zh: 'System 系统层', en: 'System' },
  'gameplay': { zh: 'Gameplay 玩法', en: 'Gameplay' },
  'TaleWorlds.MountAndBlade': { zh: 'TaleWorlds.MountAndBlade', en: 'TaleWorlds.MountAndBlade' },
  'catalog': { zh: '完整类目录', en: 'Complete Class Catalog' },
  'catalog-campaign': { zh: '战役类目录', en: 'Campaign Class Catalog' },
};

const SECTION_META = {
  'guide': { zh: '入门指南', en: 'Getting Started Guide' },
  'architecture': { zh: '架构总览', en: 'Architecture' },
  'api': { zh: 'API 参考', en: 'API Reference' },
  'native': { zh: '原生接口', en: 'Native Reference' },
  'xml-reference': { zh: 'XML 参考', en: 'XML Reference' },
  'native-1.3.15-src': { zh: 'Native 1.3.15 源码参考', en: 'Native 1.3.15 Source Reference' },
  'catalog': { zh: '完整类目录', en: 'Complete Class Catalog' },
  'catalog-campaign': { zh: '战役类目录', en: 'Campaign Class Catalog' },
};

const VERSION_META = {
  'v1.3.15': { zh: 'Bannerlord v1.3.15 文档', en: 'Bannerlord v1.3.15 Documentation' },
  'v1.4.5': { zh: 'Bannerlord v1.4.5 文档', en: 'Bannerlord v1.4.5 Documentation' },
  'v1.3.0': { zh: 'Bannerlord v1.3.0 文档', en: 'Bannerlord v1.3.0 Documentation' },
};

function toPosix(p) {
  return p.replace(new RegExp(sep === '\\' ? '\\\\' : sep, 'g'), '/');
}

function titleFor(relDir) {
  const parts = relDir.split('/');
  // site root
  if (parts.length === 0 || (parts.length === 1 && parts[0] === '')) return 'Bannerlord Modding Wiki';
  const version = parts[0];
  if (version === 'versions') return 'Cross-Version Class Comparison';
  if (parts.length === 1) return VERSION_META[version]?.en || version;
  const lang = parts[1];
  if (parts.length === 2) return VERSION_META[version]?.[lang] || version;
  const section = parts[2];
  if (parts.length === 3) {
    return SECTION_META[section]?.[lang]
      || SECTION_META[section]?.en
      || (lang === 'zh' ? section + ' 文档目录' : section + ' documentation index');
  }
  if (parts.length === 5 && parts[2] === 'api') {
    const area = parts[3];
    return AREA_META[area]?.[lang]
      || AREA_META[area]?.en
      || (lang === 'zh' ? area + ' 类参考目录' : area + ' class reference index');
  }
  // generic deep section: use last dir name
  const last = parts[parts.length - 1];
  return lang === 'zh' ? last + ' 目录' : last + ' index';
}

function shouldHaveIndex(dir) {
  // Root content needs index (already exists likely)
  let entries;
  try { entries = readdirSync(dir, { withFileTypes: true }); } catch { return false; }
  const hasIndex = entries.some(e => e.isFile() && e.name === '_index.md');
  if (hasIndex) return false;
  // Create index if directory has any markdown file or any subdirectory
  return entries.some(e => {
    if (e.name.startsWith('.')) return false;
    if (e.isFile() && e.name.endsWith('.md')) return true;
    if (e.isDirectory()) return true;
    return false;
  });
}

function walkDirs(dir, out = []) {
  const entries = readdirSync(dir, { withFileTypes: true });
  for (const e of entries) {
    if (e.name.startsWith('.') || !e.isDirectory()) continue;
    const full = join(dir, e.name);
    out.push(full);
    walkDirs(full, out);
  }
  return out;
}

const dirs = [CONTENT, ...walkDirs(CONTENT)];
let created = 0;
for (const dir of dirs) {
  if (!shouldHaveIndex(dir)) continue;
  const rel = toPosix(relative(CONTENT, dir)) || '/';
  const title = titleFor(rel);
  const text = `---\ntitle: "${title.replace(/"/g, '\\"')}"\n---\n\n<!-- BEGIN SECTION INDEX -->\n<!-- END SECTION INDEX -->\n`;
  writeFileSync(join(dir, '_index.md'), text, 'utf8');
  created++;
  console.log('created:', rel || '(site root)');
}
console.log(`Created ${created} missing section index files.`);
