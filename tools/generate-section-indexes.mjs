/**
 * generate-section-indexes.mjs
 *
 * Walks the full Zola `content/` tree, and for every `_index.md`:
 *   1. Ensures frontmatter has `title` and `description` (generated in the
 *      correct language — zh or en — when missing; existing values preserved).
 *   2. Appends a deterministic, idempotent generated block delimited by
 *      `<!-- BEGIN SECTION INDEX -->` / `<!-- END SECTION INDEX -->` markers.
 *      The block contains parent/up navigation and a child listing appropriate
 *      to the index kind (api-area gets alphabetically grouped class pages;
 *      section-top gets a bullet list of subsections/pages; home pages get a
 *      version/language picker).
 *   3. Preserves all existing prose outside the marker block untouched.
 *
 * Re-running produces identical output (idempotent).
 *
 * Usage:  node tools/generate-section-indexes.mjs
 * (run from the BannerlordCode.github.io project root)
 */

import { readFileSync, writeFileSync, readdirSync, existsSync, statSync } from 'fs';
import { join, basename, dirname, relative, sep } from 'path';

const CONTENT_ROOT = join(process.cwd(), 'content');
const SLASH = '/';
const BEGIN = '<!-- BEGIN SECTION INDEX -->';
const END = '<!-- END SECTION INDEX -->';

// ---------------------------------------------------------------------------
// Metadata lookup tables (titles/descriptions used only when frontmatter is
// missing a field; existing frontmatter is always preserved).
// ---------------------------------------------------------------------------

const AREA_META = {
  'campaign':       { zh: 'Campaign 战役系统',           en: 'Campaign',         descZh: 'TaleWorlds.CampaignSystem 战役模块类参考目录',           descEn: 'Campaign system module class reference index' },
  'campaign-ext':   { zh: 'Campaign-Ext 战役扩展',       en: 'Campaign-Ext',     descZh: '战役扩展类（Settlement/Workshop/PartyTemplate 等）参考目录', descEn: 'Campaign extension class reference index' },
  'core':           { zh: 'Core 核心数据',               en: 'Core',             descZh: 'TaleWorlds.Core 核心数据类型类参考目录',                 descEn: 'Core data types class reference index' },
  'core-extra':     { zh: 'Core-Extra 核心扩展',         en: 'Core-Extra',       descZh: 'Core / Library 相关扩展类参考目录',                     descEn: 'Core / Library extension class reference index' },
  'engine':         { zh: 'Engine 引擎',                 en: 'Engine',           descZh: 'TaleWorlds.Engine 引擎类参考目录',                       descEn: 'Engine class reference index' },
  'gui':            { zh: 'GUI / Gauntlet 界面',         en: 'GUI / Gauntlet',   descZh: 'Gauntlet UI 系统类参考目录',                             descEn: 'Gauntlet UI system class reference index' },
  'items':          { zh: 'Items 物品',                  en: 'Items',            descZh: '物品系统类参考目录',                                     descEn: 'Items system class reference index' },
  'localization':   { zh: 'Localization 本地化',         en: 'Localization',     descZh: '本地化系统类参考目录',                                   descEn: 'Localization system class reference index' },
  'mission':        { zh: 'Mission 战斗',                en: 'Mission',          descZh: 'TaleWorlds.MountAndBlade 战斗系统类参考目录',            descEn: 'Mission / combat system class reference index' },
  'mission-ext':    { zh: 'Mission-Ext 战斗扩展',        en: 'Mission-Ext',      descZh: '战斗扩展类（MissionBehavior/AgentComponent 等）参考目录', descEn: 'Mission extension class reference index' },
  'save-system':    { zh: 'Save-System 存档',            en: 'Save-System',      descZh: 'TaleWorlds.SaveSystem 存档系统类参考目录',               descEn: 'Save system class reference index' },
  'viewmodel':      { zh: 'ViewModel 视图模型',          en: 'ViewModel',        descZh: 'ViewModel 视图模型类参考目录',                           descEn: 'ViewModel class reference index' },
  'system':         { zh: 'System 系统层',               en: 'System',           descZh: '系统层类参考目录',                                       descEn: 'System layer class reference index' },
  'gameplay':       { zh: 'Gameplay 玩法',               en: 'Gameplay',         descZh: '玩法系统类参考目录',                                     descEn: 'Gameplay system class reference index' },
  'TaleWorlds.MountAndBlade': { zh: 'TaleWorlds.MountAndBlade', en: 'TaleWorlds.MountAndBlade', descZh: 'TaleWorlds.MountAndBlade 模块类参考目录', descEn: 'TaleWorlds.MountAndBlade module class reference index' },
};

const SECTION_META = {
  'guide':             { zh: '入门指南',         en: 'Getting Started Guide',  descZh: 'Bannerlord 模块开发入门指南',           descEn: 'Quick start guide for Bannerlord modding' },
  'architecture':      { zh: '架构总览',         en: 'Architecture',           descZh: 'Bannerlord SDK 架构入口 — 模块地图与分层架构', descEn: 'Bannerlord SDK architecture hub — module map and layering' },
  'api':               { zh: 'API 参考',         en: 'API Reference',          descZh: 'Bannerlord SDK API 完整参考目录',       descEn: 'Complete API reference catalog for Bannerlord SDK' },
  'native':            { zh: '原生接口',         en: 'Native Reference',       descZh: 'P/Invoke 原生接口类型参考',             descEn: 'P/Invoke native interface type reference' },
  'xml-reference':     { zh: 'XML 参考',         en: 'XML Reference',          descZh: 'XML 配置参考与已知问题分析',           descEn: 'XML configuration reference and known-issue analysis' },
  'native-1.3.15-src': { zh: 'Native 1.3.15 源码参考', en: 'Native 1.3.15 Source Reference', descZh: 'TaleWorlds.Native.dll 导出函数、类型与反编译源码索引', descEn: 'TaleWorlds.Native.dll exports, types, and decompiled source index' },
};

const VERSION_META = {
  'v1.3.15': { zh: 'Bannerlord v1.3.15 文档', en: 'Bannerlord v1.3.15 Documentation', descZh: 'Bannerlord 模块编辑器 v1.3.15 完整中文文档', descEn: 'Complete documentation for Bannerlord modding SDK v1.3.15' },
  'v1.4.5':  { zh: 'Bannerlord v1.4.5 文档', en: 'Bannerlord v1.4.5 Documentation', descZh: 'Bannerlord 模块编辑器 v1.4.5 文档',       descEn: 'Documentation for Bannerlord modding SDK v1.4.5' },
  'v1.3.0':  { zh: 'Bannerlord v1.3.0 文档', en: 'Bannerlord v1.3.0 Documentation', descZh: 'Bannerlord 模块编辑器 v1.3.0 完整文档',   descEn: 'Complete documentation for Bannerlord modding SDK v1.3.0' },
};

// ---------------------------------------------------------------------------
// File-system walk
// ---------------------------------------------------------------------------

function walkIndexFiles(dir, acc = []) {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    if (entry.name.startsWith('.')) continue;
    const full = join(dir, entry.name);
    if (entry.isDirectory()) {
      walkIndexFiles(full, acc);
    } else if (entry.isFile() && entry.name === '_index.md') {
      acc.push(full);
    }
  }
  return acc;
}

// ---------------------------------------------------------------------------
// Frontmatter parsing / ensuring
// ---------------------------------------------------------------------------

function parseFile(text) {
  const m = text.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/);
  if (!m) return { hasFm: false, fmRaw: '', body: text };
  return { hasFm: true, fmRaw: m[1], body: m[2] };
}

function readFmField(fmRaw, field) {
  const re = new RegExp(`^${field}:\\s*(.*)$`, 'm');
  const m = fmRaw.match(re);
  if (!m) return null;
  return m[1].trim().replace(/^["']|["']$/g, '');
}

function hasFmField(fmRaw, field) {
  return new RegExp(`^${field}:\\s*\\S`, 'm').test(fmRaw);
}

function yamlVal(s) {
  if (s === undefined || s === null) return '""';
  if (/[:#&*!|>'"%@`{}\[\]]/.test(s) || /^\s|\s$/.test(s) || s === '') {
    return '"' + String(s).replace(/\\/g, '\\\\').replace(/"/g, '\\"') + '"';
  }
  return s;
}

/**
 * Ensure frontmatter has title + description. Returns { fmRaw, changed }.
 * Existing values are never modified; only missing fields are inserted.
 */
function ensureFrontmatter(fmRaw, title, description) {
  const hasTitle = hasFmField(fmRaw, 'title');
  const hasDesc = hasFmField(fmRaw, 'description');
  if (hasTitle && hasDesc) return { fmRaw, changed: false };
  const lines = fmRaw.split(/\r?\n/);
  if (!hasTitle) {
    lines.unshift(`title: ${yamlVal(title)}`);
  }
  const titleIdx = lines.findIndex((l) => /^title:/.test(l));
  if (!hasDesc) {
    lines.splice(titleIdx + 1, 0, `description: ${yamlVal(description)}`);
  }
  return { fmRaw: lines.join('\n'), changed: true };
}

// ---------------------------------------------------------------------------
// Path classification
// ---------------------------------------------------------------------------

function toRel(absPath) {
  return relative(CONTENT_ROOT, absPath).split(sep).join(SLASH);
}

/**
 * Classify an _index.md by its relative path.
 * Returns { kind, lang, version, area, section }.
 */
function classify(relPath) {
  const parts = relPath.split(SLASH);

  // content/_index.md  -> site-home
  if (parts.length === 1) return { kind: 'site-home', lang: 'bi' };

  // content/versions/_index.md -> versions-home
  if (parts[0] === 'versions' && parts.length === 2) return { kind: 'versions-home', lang: 'bi' };

  // content/<version>/_index.md -> version-root
  if (parts.length === 2) return { kind: 'version-root', lang: 'bi', version: parts[0] };

  // content/<version>/<lang>/_index.md -> lang-home
  if (parts.length === 3) return { kind: 'lang-home', lang: parts[1], version: parts[0] };

  // content/<version>/<lang>/<section>/_index.md -> section-top
  if (parts.length === 4) return { kind: 'section-top', lang: parts[1], version: parts[0], section: parts[2] };

  // content/<version>/<lang>/api/<area>/_index.md -> api-area
  if (parts.length === 5 && parts[2] === 'api') {
    return { kind: 'api-area', lang: parts[1], version: parts[0], area: parts[3] };
  }

  // fallback: treat deeper indexes as generic section-top
  return { kind: 'section-top', lang: parts[1] || 'bi', version: parts[0], section: parts[parts.length - 2] };
}

// ---------------------------------------------------------------------------
// Read children of a directory
// ---------------------------------------------------------------------------

function readChildTitle(filePath) {
  try {
    const text = readFileSync(filePath, 'utf8');
    const m = text.match(/^---\r?\n([\s\S]*?)\r?\n---/);
    if (!m) return null;
    const t = readFmField(m[1], 'title');
    return t;
  } catch {
    return null;
  }
}

function readChildFm(filePath) {
  try {
    const text = readFileSync(filePath, 'utf8');
    const m = text.match(/^---\r?\n([\s\S]*?)\r?\n---/);
    if (!m) return { title: null, description: null };
    return {
      title: readFmField(m[1], 'title'),
      description: readFmField(m[1], 'description'),
    };
  } catch {
    return { title: null, description: null };
  }
}

function readChildren(dirAbs) {
  const pages = [];
  const subsections = [];
  let entries;
  try {
    entries = readdirSync(dirAbs, { withFileTypes: true });
  } catch {
    return { pages, subsections };
  }
  for (const e of entries) {
    if (e.name.startsWith('.')) continue;
    const full = join(dirAbs, e.name);
    if (e.isFile() && e.name.endsWith('.md') && e.name !== '_index.md') {
      const slug = e.name.replace(/\.md$/, '');
      const title = readChildTitle(full) || slug;
      pages.push({ slug, title });
    } else if (e.isDirectory()) {
      const subIndex = join(full, '_index.md');
      if (existsSync(subIndex)) {
        const fm = readChildFm(subIndex);
        subsections.push({
          name: e.name,
          title: fm.title || e.name,
          description: fm.description || '',
        });
      }
    }
  }
  pages.sort((a, b) => a.title.localeCompare(b.title, 'en', { sensitivity: 'base' }));
  subsections.sort((a, b) => a.name.localeCompare(b.name, 'en', { sensitivity: 'base' }));
  return { pages, subsections };
}

// ---------------------------------------------------------------------------
// Generated block builders (one per kind)
// ---------------------------------------------------------------------------

function alphaGrouped(pages, isZh) {
  if (pages.length === 0) {
    return isZh ? '_暂无子类页。_\n' : '_No class pages yet._\n';
  }
  const groups = {};
  for (const p of pages) {
    const ch = (p.title || p.slug || '#')[0].toUpperCase();
    const key = /^[A-Z]$/.test(ch) ? ch : '#';
    (groups[key] = groups[key] || []).push(p);
  }
  let out = '';
  for (const letter of Object.keys(groups).sort()) {
    out += `### ${letter}\n\n`;
    for (const p of groups[letter]) {
      out += `- [${p.title}](./${p.slug})\n`;
    }
    out += '\n';
  }
  return out;
}

function buildApiAreaBlock(ctx, children) {
  const isZh = ctx.lang === 'zh';
  const navH = isZh ? '## ↑ 上级导航' : '## Parent Navigation';
  const childH = isZh ? '## ↓ 子类列表 — 按字母分组' : '## Child Classes — Alphabetical';
  const apiLabel = isZh ? 'API 参考' : 'API Reference';
  const homeLabel = isZh ? '版本首页' : 'Version Home';

  let b = `${BEGIN}\n\n`;
  b += `${navH}\n\n`;
  b += `- [${apiLabel}](../)\n`;
  b += `- [${homeLabel}](../../)\n\n`;
  b += `${childH}\n\n`;
  b += alphaGrouped(children.pages, isZh);
  b += `\n${END}`;
  return b;
}

function buildSectionTopBlock(ctx, children) {
  const isZh = ctx.lang === 'zh';
  const navH = isZh ? '## ↑ 上级导航' : '## Parent Navigation';
  const childH = isZh ? '## ↓ 子页面目录' : '## Child Pages';
  const homeLabel = isZh ? '版本首页' : 'Version Home';

  let b = `${BEGIN}\n\n`;
  b += `${navH}\n\n`;
  b += `- [${homeLabel}](../)\n\n`;
  b += `${childH}\n\n`;

  if (children.subsections.length === 0 && children.pages.length === 0) {
    b += isZh ? '_暂无子页面。_\n' : '_No child pages yet._\n';
  } else {
    for (const s of children.subsections) {
      const desc = s.description ? ` — ${s.description}` : '';
      b += `- [${s.title}](./${s.name}/)${desc}\n`;
    }
    if (children.pages.length > 0) {
      if (children.subsections.length > 0) b += '\n';
      for (const p of children.pages) {
        b += `- [${p.title}](./${p.slug})\n`;
      }
    }
  }
  b += `\n${END}`;
  return b;
}

function buildLangHomeBlock(ctx, children) {
  const isZh = ctx.lang === 'zh';
  const navH = isZh ? '## ↑ 上级导航' : '## Parent Navigation';
  const childH = isZh ? '## ↓ 内容导航' : '## Content Navigation';
  const verLabel = isZh ? '版本首页' : 'Version Home';

  let b = `${BEGIN}\n\n`;
  b += `${navH}\n\n`;
  b += `- [${verLabel}](../)\n\n`;
  b += `${childH}\n\n`;
  if (children.subsections.length === 0) {
    b += isZh ? '_暂无子栏目。_\n' : '_No sections yet._\n';
  } else {
    for (const s of children.subsections) {
      const desc = s.description ? ` — ${s.description}` : '';
      b += `- [${s.title}](./${s.name}/)${desc}\n`;
    }
  }
  b += `\n${END}`;
  return b;
}

function buildVersionRootBlock(ctx, children) {
  let b = `${BEGIN}\n\n`;
  b += '## 语言选择 / Select Language\n\n';
  if (children.subsections.length === 0) {
    b += '_No language directories._\n';
  } else {
    for (const s of children.subsections) {
      const label = s.name === 'zh' ? '中文文档 / Chinese Documentation' : 'English Documentation';
      b += `- [${label}](./${s.name}/)\n`;
    }
  }
  b += `\n${END}`;
  return b;
}

function buildSiteHomeBlock(ctx, children) {
  let b = `${BEGIN}\n\n`;
  b += '## 站点栏目 / Site Sections\n\n';
  if (children.subsections.length === 0) {
    b += '_No sections._\n';
  } else {
    for (const s of children.subsections) {
      const label = s.title || s.name;
      b += `- [${label}](./${s.name}/)\n`;
    }
  }
  b += `\n${END}`;
  return b;
}

function buildVersionsHomeBlock(ctx, children) {
  let b = `${BEGIN}\n\n`;
  b += '## 类对比页面索引 / Class Comparison Index — Alphabetical\n\n';
  b += alphaGrouped(children.pages, false);
  b += `\n${END}`;
  return b;
}

function buildBlock(ctx, children) {
  switch (ctx.kind) {
    case 'api-area':      return buildApiAreaBlock(ctx, children);
    case 'section-top':   return buildSectionTopBlock(ctx, children);
    case 'lang-home':     return buildLangHomeBlock(ctx, children);
    case 'version-root':  return buildVersionRootBlock(ctx, children);
    case 'site-home':     return buildSiteHomeBlock(ctx, children);
    case 'versions-home': return buildVersionsHomeBlock(ctx, children);
    default:              return buildSectionTopBlock(ctx, children);
  }
}

// ---------------------------------------------------------------------------
// Title / description generators (used only when frontmatter is missing)
// ---------------------------------------------------------------------------

function genTitleDesc(ctx) {
  const { kind, lang } = ctx;
  const isZh = lang === 'zh';

  if (kind === 'api-area') {
    const meta = AREA_META[ctx.area];
    if (meta) {
      return { title: isZh ? meta.zh : meta.en, description: isZh ? meta.descZh : meta.descEn };
    }
    const nice = ctx.area.replace(/-/g, ' ');
    return {
      title: isZh ? nice : nice,
      description: isZh ? `${nice} 类参考目录` : `${nice} class reference index`,
    };
  }

  if (kind === 'section-top') {
    const meta = SECTION_META[ctx.section];
    if (meta) {
      return { title: isZh ? meta.zh : meta.en, description: isZh ? meta.descZh : meta.descEn };
    }
    const nice = ctx.section.replace(/-/g, ' ');
    return { title: nice, description: isZh ? `${nice} 文档目录` : `${nice} documentation index` };
  }

  if (kind === 'lang-home') {
    const vmeta = VERSION_META[ctx.version];
    if (vmeta) {
      return { title: isZh ? vmeta.zh : vmeta.en, description: isZh ? vmeta.descZh : vmeta.descEn };
    }
    return { title: ctx.version, description: `${ctx.version} documentation` };
  }

  if (kind === 'version-root') {
    const vmeta = VERSION_META[ctx.version];
    if (vmeta) {
      return {
        title: `${vmeta.zh} / ${vmeta.en}`,
        description: `${vmeta.descZh} / ${vmeta.descEn}`,
      };
    }
    return { title: ctx.version, description: `${ctx.version} documentation home` };
  }

  if (kind === 'site-home') {
    return {
      title: 'Bannerlord Modding Wiki',
      description: 'Bannerlord Modding SDK Documentation — bilingual module architecture guide and API reference',
    };
  }

  if (kind === 'versions-home') {
    return {
      title: '跨版本类对比 / Cross-Version Class Comparison',
      description: 'Per-class API deltas across Bannerlord 1.3.0, 1.3.15, and 1.4.5',
    };
  }

  return { title: 'Section', description: 'Section index' };
}

// ---------------------------------------------------------------------------
// Body composition (preserve prose, replace generated block)
// ---------------------------------------------------------------------------

const BLOCK_RE = /\r?\n*<!-- BEGIN SECTION INDEX -->[\s\S]*?<!-- END SECTION INDEX -->\r?\n*/g;

function composeBody(body, generatedBlock) {
  // Remove any old generated block(s) -> preamble
  const preamble = body.replace(BLOCK_RE, '').replace(/\r?\n+$/, '');

  // Ensure there is an H1 at the top; if not, the existing prose is preserved
  // as-is and we simply append the block.
  let out = preamble;
  if (out.length > 0) {
    out += '\n\n';
  }
  out += generatedBlock + '\n';
  return out;
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

function detectEol(text) {
  const crlf = (text.match(/\r\n/g) || []).length;
  const lf = (text.match(/(?<!\r)\n/g) || []).length;
  return crlf >= lf ? '\r\n' : '\n';
}

function processIndex(absPath, stats) {
  const relPath = toRel(absPath);
  const orig = readFileSync(absPath, 'utf8');
  const eol = detectEol(orig);
  const { hasFm, fmRaw, body } = parseFile(orig);
  const ctx = classify(relPath);

  // 1. Ensure frontmatter title + description
  const { title, description } = genTitleDesc(ctx);
  let newFmRaw = fmRaw;
  let fmChanged = false;
  if (hasFm) {
    const r = ensureFrontmatter(fmRaw, title, description);
    newFmRaw = r.fmRaw;
    fmChanged = r.changed;
  } else {
    // No frontmatter at all — synthesize one
    newFmRaw = `title: ${yamlVal(title)}\ndescription: ${yamlVal(description)}`;
    fmChanged = true;
  }

  // 2. Read children
  const children = readChildren(dirname(absPath));

  // 3. Build generated block (always \n internally; convert to file EOL later)
  const generatedBlock = buildBlock(ctx, children);

  // 4. Compose body
  const newBody = composeBody(body, generatedBlock);

  // 5. Assemble final text
  let finalText = `---\n${newFmRaw}\n---\n${newBody}`;

  // Normalise EOL: convert all \r\n to \n first, then to the detected EOL
  finalText = finalText.replace(/\r\n/g, '\n');
  if (eol === '\r\n') {
    finalText = finalText.replace(/\n/g, '\r\n');
  }

  // Ensure file ends with a single newline
  finalText = finalText.replace(/[\r\n]+$/, '') + eol;

  if (finalText !== orig) {
    writeFileSync(absPath, finalText, 'utf8');
    stats.updated++;
    stats.changes.push({ rel: relPath, kind: ctx.kind, lang: ctx.lang, fmFilled: fmChanged });
    return true;
  }
  stats.unchanged++;
  return false;
}

function main() {
  const indexFiles = walkIndexFiles(CONTENT_ROOT);
  const stats = {
    total: indexFiles.length,
    updated: 0,
    unchanged: 0,
    changes: [],
  };

  for (const f of indexFiles) {
    processIndex(f, stats);
  }

  // Per-version breakdown
  const perVersion = {};
  for (const c of stats.changes) {
    const top = c.rel.split(SLASH)[0];
    if (top === '_index.md') perVersion['(site)'] = (perVersion['(site)'] || 0) + 1;
    else perVersion[top] = (perVersion[top] || 0) + 1;
  }

  const out = [];
  out.push(`SECTION_INDEX_TOTAL=${stats.total}`);
  out.push(`SECTION_INDEX_UPDATED=${stats.updated}`);
  out.push(`SECTION_INDEX_UNCHANGED=${stats.unchanged}`);
  out.push(`SECTION_INDEX_CREATED=0`);
  out.push('');
  out.push('PER_VERSION:');
  for (const k of Object.keys(perVersion).sort()) {
    out.push(`  ${k}: ${perVersion[k]}`);
  }
  console.log(out.join('\n'));
}

main();
