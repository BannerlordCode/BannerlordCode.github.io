// tools/create-catalog-sections.mjs
// Create api/catalog and api/catalog-campaign sections for every version/language.
import { readdirSync, statSync, mkdirSync, writeFileSync, existsSync, readFileSync } from 'fs';
import { join, relative, sep } from 'path';
import { REPO_ROOT } from './lib/paths.mjs';

const CONTENT = join(REPO_ROOT, 'content');

function toPosix(p) { return p.replace(new RegExp(sep === '\\' ? '\\\\' : sep, 'g'), '/'); }

function apiDirs() {
  const out = [];
  for (const ver of readdirSync(CONTENT)) {
    const verPath = join(CONTENT, ver);
    if (!statSync(verPath).isDirectory()) continue;
    for (const lang of readdirSync(verPath)) {
      const langPath = join(verPath, lang);
      if (!statSync(langPath).isDirectory()) continue;
      const apiPath = join(langPath, 'api');
      if (existsSync(apiPath) && statSync(apiPath).isDirectory()) {
        out.push(apiPath);
      }
    }
  }
  return out;
}

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
};

function readTitle(indexPath, fallback) {
  if (!existsSync(indexPath)) return fallback;
  try {
    const text = readFileSync(indexPath, 'utf8');
    const m = text.match(/^---\r?\n([\s\S]*?)\r?\n---/);
    if (!m) return fallback;
    const t = m[1].match(/^title:\s*(.+)$/m);
    if (!t) return fallback;
    return t[1].trim().replace(/^["']|["']$/g, '') || fallback;
  } catch { return fallback; }
}

function areaList(apiDir, lang, exclude = []) {
  const lines = [];
  for (const name of readdirSync(apiDir)) {
    if (name.startsWith('.') || name === 'catalog' || name === 'catalog-campaign') continue;
    if (exclude.length > 0 && !exclude.includes(name)) continue;
    const areaPath = join(apiDir, name);
    if (!statSync(areaPath).isDirectory()) continue;
    const title = readTitle(join(areaPath, '_index.md'), AREA_META[name]?.[lang] || AREA_META[name]?.en || name);
    lines.push(`- [${title}](./${name}/)`);
  }
  return lines.sort().join('\n');
}

function ensureSection(dir, title, lang, bodyMarkdown) {
  mkdirSync(dir, { recursive: true });
  const idx = join(dir, '_index.md');
  if (existsSync(idx)) return false;
  const text = `---\ntitle: "${title.replace(/"/g, '\\"')}"\n---\n\n# ${title}\n\n${bodyMarkdown}\n`;
  writeFileSync(idx, text, 'utf8');
  return true;
}

let created = 0;
for (const apiDir of apiDirs()) {
  const rel = toPosix(relative(CONTENT, apiDir));
  const parts = rel.split('/');
  const lang = parts[1];

  const catBody = lang === 'zh'
    ? `按子系统浏览所有 API 类页面：\n\n${areaList(apiDir, lang)}`
    : `Browse all API class pages by subsystem:\n\n${areaList(apiDir, lang)}`;
  if (ensureSection(join(apiDir, 'catalog'), lang === 'zh' ? '完整类目录' : 'Complete Class Catalog', lang, catBody)) {
    created++;
    console.log('created:', rel + '/catalog');
  }

  const campaignBody = lang === 'zh'
    ? `战役相关类页面入口：\n\n${areaList(apiDir, lang, ['campaign', 'campaign-ext'])}`
    : `Campaign-related class page entrances:\n\n${areaList(apiDir, lang, ['campaign', 'campaign-ext'])}`;
  if (ensureSection(join(apiDir, 'catalog-campaign'), lang === 'zh' ? '战役类目录' : 'Campaign Class Catalog', lang, campaignBody)) {
    created++;
    console.log('created:', rel + '/catalog-campaign');
  }
}
console.log(`Created ${created} catalog sections.`);
