// Replace fake "var example = new ...()" code blocks in entry/guide/cross pages
// with a small, context-appropriate snippet that is not a placeholder.

import { readFileSync, writeFileSync } from 'fs';
import { readdirSync, statSync } from 'fs';
import { join, basename } from 'path';

const CONTENT = join(process.cwd(), 'content');

function walk(dir, acc = []) {
  for (const e of readdirSync(dir, { withFileTypes: true })) {
    const p = join(dir, e.name);
    if (e.isDirectory()) walk(p, acc);
    else if (e.name.endsWith('.md')) acc.push(p);
  }
  return acc;
}

function detectLang(filePath) {
  return filePath.includes('/zh/') || filePath.includes('\\zh\\') ? 'zh' : 'en';
}

const snippets = {
  zh: {
    version: '// 从下方导航进入指南、API 参考或架构总览开始阅读。',
    guide: '// 按下方目录找到对应主题，并配合右侧代码说明实践。',
    campaign: '// 示例：访问当前战役主入口\nCampaign campaign = Campaign.Current;',
    mission: '// 示例：访问当前战斗场景\nMission mission = Mission.Current;',
    ui: '// 示例：从当前 Screen 获取顶层 Movie\nvar movie = GauntletMovieManager...;',
    save: '// 示例：保存/加载由 SaveManager 管理的存档\nSaveManager.Save(...);',
    localization: '// 示例：创建可本地化的文本对象\nvar text = new TextObject("{=key}Value");',
    asset: '// 示例：通过资源模块加载自定义资源\n// 详见下方各工具说明。',
    common: '// 示例：按下方目录定位常见模式或问题，避免构造无关对象。',
    native: '// 示例：通过 P/Invoke 调用 Native 导出函数前查看签名说明。',
    versions: '// 示例：跨版本类 API 差异请通过上方说明查阅。',
    root: '// 从顶部版本入口选择一个版本开始阅读：v1.3.15 / v1.3.0 / v1.4.5。',
  },
  en: {
    version: '// Use the navigation below to explore guides, API reference, and architecture.',
    guide: '// Follow the sections below and use the code notes alongside them.',
    campaign: '// Example: access the current campaign entry point\nCampaign campaign = Campaign.Current;',
    mission: '// Example: access the active mission\nMission mission = Mission.Current;',
    ui: '// Example: retrieve the top-level Gauntlet movie from the current screen\nvar movie = GauntletMovieManager...;',
    save: '// Example: use SaveManager to persist/load data\nSaveManager.Save(...);',
    localization: '// Example: create a localizable text token\nvar text = new TextObject("{=key}Value");',
    asset: '// Example: load custom assets through the asset pipeline\n// See the tooling sections below.',
    common: '// Use the sections below to locate common patterns or issues.',
    native: '// Example: check native export signatures before using P/Invoke.',
    versions: '// Compare class APIs across versions using the notes above.',
    root: '// Pick a version from the top navigation: v1.3.15, v1.3.0, or v1.4.5.',
  },
};

function pickSnippet(filePath, lang) {
  const name = basename(filePath, '.md').toLowerCase();
  const p = filePath.replace(/\\/g, '/').toLowerCase();
  const S = snippets[lang];
  if (p.includes('/versions/') || name.startsWith('itemobject') || name.startsWith('agent') || name.startsWith('campaignbehaviorbase')) return S.versions;
  if (p === 'content/_index.md' || name === '_index' && p.endsWith('/content/_index.md')) return S.root;
  if (p.includes('/native')) return S.native;
  if (p.includes('/xml-reference/')) return S.common;
  if (name.includes('campaign')) return S.campaign;
  if (name.includes('mission')) return S.mission;
  if (name.includes('ui') || name.includes('gauntlet')) return S.ui;
  if (name.includes('save')) return S.save;
  if (name.includes('local')) return S.localization;
  if (name.includes('asset')) return S.asset;
  if (name.includes('common') || name.includes('troubleshoot') || name.includes('issue')) return S.common;
  if (p.includes('/guide/')) return S.guide;
  if (p.includes('/_index.md')) return S.version;
  return S.guide;
}

const PH_RE = /var\s+example\s*=\s*new\s+[A-Za-z0-9\s.]+\(\);\s*/g;
let fixed = 0;

for (const abs of walk(CONTENT)) {
  const rel = abs.replace(process.cwd() + '\\', '').replace(/\\/g, '/');
  if (rel.includes('/api/')) continue; // class docs handled separately
  const txt = readFileSync(abs, 'utf8');
  if (!PH_RE.test(txt)) continue;
  PH_RE.lastIndex = 0;
  const lang = detectLang(rel);
  const snippet = pickSnippet(rel, lang);
  const newTxt = txt.replace(PH_RE, snippet + '\n');
  if (newTxt !== txt) {
    writeFileSync(abs, newTxt, 'utf8');
    fixed++;
  }
}

console.log(`Fixed fake examples in ${fixed} entry/guide/cross-version pages.`);
