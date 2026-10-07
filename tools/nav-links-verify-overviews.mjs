#!/usr/bin/env node
/**
 * nav-links-verify-overviews.mjs — per-link route + IDENTITY tracer for the OVERVIEW line.
 *
 * Read-only. One line per link in the overview line's owned files:
 *   <source> | <href> | <resolved route> | <hit file> | STATUS
 *
 * WHY IDENTITY MATTERS (lead correction 2026-10-03):
 *   A first version of this tool only asked "does the href land on a real page?".
 *   That is one order of magnitude too weak: the project shipped a wrong rule
 *   ("../../ from a bucket _index.md = version home"; it is actually the LANGUAGE
 *   home) which would have produced links that resolve perfectly and point at the
 *   wrong page. So every link here is checked on TWO axes:
 *     1. EXISTENCE — does it land on a real file?
 *     2. IDENTITY  — is that file the page the author meant?
 *   Identity is checked by comparing the link LABEL against the target page's
 *   frontmatter title / first H1. Mismatch => IDENTITY-SUSPECT, not OK.
 *
 * Env:
 *   OUT=<path>    also write the table (default tools/_nav-overviews-linkcheck.txt)
 *   SELFTEST=1    run positive + negative controls for BOTH axes, then exit
 *   INTEGRITY=1   character/structure gate on the owned files, then exit
 *                 (mojibake, heredoc residue, comma-joined lines, BOM, bad fences)
 *                 A file with mojibake passes every link check; for a reader it is
 *                 as broken as a 404, so it exits non-zero like a broken link does.
 *
 * Exit: 0 = every link exists AND identity checked out
 *       1 = broken links or identity mismatches (listed)
 *       2 = fail closed (bad root, unreadable input, missing link file)
 */

import { readFileSync, existsSync, readdirSync, writeFileSync } from 'fs';
import { join, normalize, posix, sep, resolve } from 'path';

const ROOT = resolve(process.env.AUDIT_CONTENT_ROOT || join(process.cwd(), 'content'));
const OUT = process.env.OUT || 'tools/_nav-overviews-linkcheck.txt';

/**
 * DECLARED INTENT for navigational (non-class) links.
 *
 * A class link's identity is machine-checkable: the href's last path segment IS
 * the class name, so it must appear in the target's title. A navigational link
 * ("中文文档", "站点首页", "../") has no such token — the only thing that can say
 * whether it points at the page the author meant is the author saying so.
 *
 * So every navigational link must be declared here as
 *   "srcRel \t href"  ->  substring that MUST appear in the target's title/H1.
 *
 * An undeclared navigational link is reported NO-INTENT and makes the run exit
 * non-zero. That is deliberate fail-closed behaviour: the count can never be
 * silently zero, and a link added without declaring its target is caught here
 * rather than discovered months later by a reader landing on the wrong page.
 */
const INTENT = {
  // --- site home (/), reached as ../ from any version root, ../../ from a task page
  '_index.md\t../': 'Bannerlord Modding Wiki',
  'v1.3.0/_index.md\t../': 'Bannerlord Modding Wiki',
  'v1.3.15/_index.md\t../': 'Bannerlord Modding Wiki',
  'v1.4.5/_index.md\t../': 'Bannerlord Modding Wiki',
  'v1.4.6/_index.md\t../': 'Bannerlord Modding Wiki',
  'v1.4.7/_index.md\t../': 'Bannerlord Modding Wiki',
  'v1.5.3/_index.md\t../': 'Bannerlord Modding Wiki',
  // --- versions hub /versions/
  '_index.md\t./versions/': '跨版本类对比',
  'v1.3.0/_index.md\t../versions/': '跨版本类对比',
  'v1.3.15/_index.md\t../versions/': '跨版本类对比',
  'v1.4.5/_index.md\t../versions/': '跨版本类对比',
  'v1.4.6/_index.md\t../versions/': '跨版本类对比',
  'v1.4.7/_index.md\t../versions/': '跨版本类对比',
  'v1.5.3/_index.md\t../versions/': '跨版本类对比',
  // --- language homes
  'v1.3.0/_index.md\t./zh/': 'v1.3.0',
  'v1.3.0/_index.md\t./en/': 'v1.3.0',
  'v1.3.15/_index.md\t./zh/': 'v1.3.15',
  'v1.3.15/_index.md\t./en/': 'v1.3.15',
  'v1.4.5/_index.md\t./zh/': 'v1.4.5',
  'v1.4.5/_index.md\t./en/': 'v1.4.5',
  'v1.4.6/_index.md\tzh/': 'v1.4.6',
  'v1.4.6/_index.md\ten/': 'v1.4.6',
  'v1.4.6/_index.md\t./zh/': 'v1.4.6',
  'v1.4.6/_index.md\t./en/': 'v1.4.6',
  'v1.4.7/_index.md\t./zh/': 'v1.4.7',
  'v1.4.7/_index.md\t./en/': 'v1.4.7',
  'v1.5.3/_index.md\t./zh/': 'v1.5.3',
  'v1.5.3/_index.md\t./en/': 'v1.5.3',
  // --- sibling version roots
  '_index.md\t./v1.3.0/': 'v1.3.0',
  '_index.md\t./v1.3.15/': 'v1.3.15',
  '_index.md\t./v1.4.5/': 'v1.4.5',
  '_index.md\t./v1.4.6/': 'v1.4.6',
  '_index.md\t./v1.4.7/': 'v1.4.7',
  '_index.md\t./v1.5.3/': 'v1.5.3',
  'v1.3.0/_index.md\t../v1.3.15/': 'v1.3.15',
  'v1.4.5/_index.md\t../v1.3.15/': 'v1.3.15',
  'v1.4.7/_index.md\t../v1.4.5/': 'v1.4.5',
  'v1.4.7/_index.md\t../v1.4.6/': 'v1.4.6',
  'v1.4.7/_index.md\t../v1.3.15/': 'v1.3.15',
  'v1.4.7/_index.md\t../v1.3.0/': 'v1.3.0',
  'v1.5.3/_index.md\t../v1.4.5/': 'v1.4.5',
  'v1.5.3/_index.md\t../v1.4.7/': 'v1.4.7',
  'v1.5.3/_index.md\t../v1.4.6/': 'v1.4.6',
  'v1.5.3/_index.md\t../v1.3.15/': 'v1.3.15',
  'v1.5.3/_index.md\t../v1.3.0/': 'v1.3.0',
  // --- pre-existing navigational links in files I own but do not rewrite
  'v1.3.15/_index.md\t./v1.3.15/': 'v1.3.15',
  'v1.3.0/_index.md\t./guide/': 'guide',
  'v1.3.0/_index.md\t./api/': 'api',
  'v1.3.0/_index.md\t./xml-reference/': 'xml-reference',
  'v1.3.0/_index.md\t./native/': 'native',
  'v1.3.0/_index.md\t./architecture/': 'architecture',
  'v1.4.5/_index.md\t../v1.3.15/zh/architecture/sdk-overview': 'SDK',
  'v1.4.5/_index.md\t../v1.3.15/zh/architecture/version-delta': '版本差异',
  'v1.4.6/_index.md\t../v1.4.5/': 'v1.4.5',
  'v1.4.6/_index.md\t../v1.3.15/': 'v1.3.15',
  'v1.4.6/_index.md\ten/api/': 'API',
  'v1.4.6/_index.md\tzh/architecture/module-map/': '模块地图',
  'v1.4.6/_index.md\tzh/architecture/sdk-overview/': 'SDK',
  'v1.4.6/_index.md\tzh/api/': 'API',
  'v1.4.6/_index.md\tzh/architecture/version-delta/': '版本差异',
  'v1.4.7/_index.md\t./GAPS': 'Gap list',
  'v1.4.7/_index.md\t./zh/api/campaign/': 'Campaign',
  'v1.4.7/_index.md\t./zh/api/mission/': 'Mission',
  'v1.4.7/_index.md\t./zh/api/gui/': 'GUI',
  'v1.4.7/_index.md\t./zh/api/save-system/': 'Save',
  'v1.4.7/_index.md\t./zh/api/core/': 'Core',
  'v1.4.7/_index.md\t./zh/api/core-extra/': 'Core extra',
  'v1.4.7/_index.md\t./zh/api/campaign-ext/': 'Campaign ext',
  'v1.4.7/_index.md\t./zh/api/engine/': 'Engine',
  'v1.4.7/_index.md\t./zh/api/mission-ext/': 'Mission ext',
  'v1.4.7/_index.md\t./zh/api/viewmodel/': 'ViewModel',
  'v1.4.7/_index.md\t./zh/api/sandbox/': 'Sandbox',
  'v1.4.7/_index.md\t./zh/api/custombattle/': 'CustomBattle',
  'v1.4.7/_index.md\t./zh/api/network/': 'Network',
  'v1.4.7/_index.md\t./zh/api/system/': 'System',
  'v1.4.7/_index.md\t./zh/api/modulemanager/': 'ModuleManager',
  'v1.4.7/_index.md\t./zh/api/activitysystem/': 'Activity',
  'v1.4.7/_index.md\t./zh/api/achievementsystem/': 'Achievement',
  'v1.4.7/_index.md\t./zh/architecture/version-delta': '版本差异',
  'v1.4.7/_index.md\t./en/architecture/version-delta': 'Version Delta',
  'v1.4.7/_index.md\t./zh/architecture/module-system': '模块',
  'v1.4.7/_index.md\t./zh/architecture/ui-stack': '界面栈',
  // --- v1.3.15 zh guide/architecture prose I link from overview pages
  'v1.3.15/_index.md\t./zh/guide/mod-workflow': '开发工作流',
  'v1.3.15/_index.md\t./zh/guide/save-system-guide': '存档',
  'v1.3.15/_index.md\t./zh/architecture/module-system': '模块',
  'v1.3.15/_index.md\t./zh/architecture/save-system': '存档',
  'v1.3.15/_index.md\t./zh/architecture/version-delta': '版本差异',
  'v1.4.5/_index.md\t./zh/guide/mod-workflow': '开发工作流',
  'v1.4.5/_index.md\t./zh/architecture/module-system': '模块',
  'v1.4.7/_index.md\t./zh/architecture/save-system': '存档',
  'v1.4.5/zh/_index.md\t../': 'v1.4.5',
  'v1.4.5/zh/_index.md\t../../': 'Bannerlord Modding Wiki',
  'v1.4.5/zh/_index.md\t../../versions/': '跨版本类对比',
  'v1.4.5/zh/_index.md\t./guide/mod-workflow': '工作流',
  'v1.4.5/zh/_index.md\t./architecture/module-system': '模块',
  'v1.4.5/zh/_index.md\t./architecture/sdk-overview': 'SDK',
  'v1.4.5/zh/_index.md\t./architecture/version-delta': '版本差异',
  'v1.4.5/zh/_index.md\t./api/core/': 'core 目录',
  'v1.4.5/zh/_index.md\t./api/campaign/': 'campaign 目录',
  'v1.4.5/zh/_index.md\t./api/campaign-ext/': 'campaign-ext 目录',
  'v1.4.5/zh/_index.md\t./api/mission/': 'mission 目录',
  'v1.4.5/zh/_index.md\t./api/save-system/': 'save-system 目录',
  'v1.4.5/zh/_index.md\t./api/gui/': 'gui 目录',
  'versions/task-network.md\t../../v1.4.7/zh/api/network/': 'Network',
  'versions/task-network.md\t../../v1.4.7/zh/api/mission-ext/': 'Mission ext',
  'v1.5.3/_index.md\t./zh/architecture/migration-from-1.4.5': '1.4.5',
  'v1.5.3/_index.md\t./zh/architecture/module-map': '模块地图',
  'v1.5.3/_index.md\t./zh/architecture/sdk-overview': 'SDK',
  // --- site home: version / domain / task entries I authored in content/_index.md
  '_index.md\t./v1.3.15/zh/guide/mod-workflow': '开发工作流',
  '_index.md\t./versions/task-mod-bootstrap': '让 mod 被加载',
  '_index.md\t./v1.5.3/zh/': 'v1.5.3',
  '_index.md\t./v1.4.7/zh/architecture/version-delta': '版本差异',
  '_index.md\t./v1.4.6/zh/architecture/version-delta/': '版本差异',
  '_index.md\t./v1.5.3/zh/architecture/module-map': '模块地图',
  '_index.md\t./v1.4.7/GAPS': 'Gap list',
  '_index.md\t./v1.3.15/zh/native/': '原生接口',
  '_index.md\t./v1.3.15/zh/xml-reference/': 'XML 参考',
  'v1.4.6/_index.md\ten/architecture/sdk-overview/': 'SDK',
  'v1.4.6/_index.md\ten/architecture/module-map/': 'Module Map',
  'versions/_index.md\t../v1.4.6/zh/architecture/version-delta/': '版本差异',
  'versions/_index.md\t../v1.4.7/zh/architecture/version-delta': '版本差异',
  'versions/_index.md\t../v1.5.3/zh/architecture/migration-from-1.4.5': '1.4.5',
  'versions/task-mod-bootstrap.md\t../../v1.3.15/zh/guide/mod-workflow': '开发工作流',
  'versions/task-mod-bootstrap.md\t../../v1.3.15/zh/architecture/module-system': '模块',
  'versions/task-mod-bootstrap.md\t../../v1.5.3/zh/architecture/migration-from-1.4.5': '1.4.5',
  'versions/task-mod-bootstrap.md\t../../v1.5.3/zh/architecture/module-map': '模块地图',
  'versions/task-mod-bootstrap.md\t../task-campaign-behavior': 'CampaignBehavior',
  'versions/task-mod-bootstrap.md\t../task-gamemodel': 'GameModel',
  'versions/task-mod-bootstrap.md\t../task-mission-action': 'Mission',
  'versions/task-mod-bootstrap.md\t../task-save': '存档',
  'versions/task-mod-bootstrap.md\t../task-ui-screen': 'UI',
  'versions/task-campaign-action.md\t../../v1.3.15/zh/guide/campaign-system': '战役',
  'versions/task-campaign-action.md\t../task-campaign-behavior': 'CampaignBehavior',
  'versions/task-campaign-action.md\t../task-gamemodel': 'GameModel',
  'versions/task-campaign-action.md\t../task-mission-action': 'Mission',
  'versions/task-campaign-action.md\t../task-save': '存档',
  'versions/task-campaign-behavior.md\t../task-campaign-action': '战役动作',
  'versions/task-campaign-behavior.md\t../task-gamemodel': 'GameModel',
  'versions/task-campaign-behavior.md\t../task-mission-action': 'Mission',
  'versions/task-campaign-behavior.md\t../task-save': '存档',
  'versions/task-gamemodel.md\t../../v1.3.15/zh/architecture/module-system': '模块',
  'versions/task-mission-action.md\t../../v1.3.15/zh/guide/mission-system': '任务',
  'versions/task-mission-action.md\t../task-ai': 'AI',
  'versions/task-mission-action.md\t../task-campaign-action': '战役动作',
  'versions/task-ai.md\t../../v1.3.15/zh/guide/campaign-system': '战役',
  'versions/task-ai.md\t../../v1.3.15/zh/guide/mission-system': '任务',
  'versions/task-ai.md\t../task-campaign-action': '战役动作',
  'versions/task-ai.md\t../task-gamemodel': 'GameModel',
  'versions/task-ai.md\t../task-mission-action': 'Mission',
  'versions/task-network.md\t../../v1.3.15/zh/architecture/module-system': '模块',
  'versions/task-network.md\t../../v1.4.7/zh/api/network': 'Network',
  'versions/task-network.md\t../../v1.4.7/zh/api/mission-ext': 'Mission ext',
  'versions/task-network.md\t../../v1.5.3/zh/architecture/migration-from-1.4.5': '1.4.5',
  'versions/task-network.md\t../../v1.5.3/zh/architecture/module-map': '模块地图',
  'versions/task-network.md\t../task-mission-action': 'Mission',
  'versions/task-save.md\t../../v1.3.15/zh/architecture/save-system': '存档',
  'versions/task-save.md\t../../v1.3.15/zh/guide/save-system-guide': '存档',
  'versions/task-save.md\t../../v1.3.15/zh/architecture/version-delta': '版本差异',
  'versions/task-save.md\t../../v1.5.3/zh/architecture/migration-from-1.4.5': '1.4.5',
  'versions/task-save.md\t../task-campaign-behavior': 'CampaignBehavior',
  'versions/task-ui-screen.md\t../../v1.3.15/zh/guide/gauntlet-ui': 'Gauntlet',
  'versions/task-ui-screen.md\t../task-campaign-action': '战役动作',
  'versions/task-ui-screen.md\t../task-save': '存档',
  'v1.4.7/_index.md\t./zh/api/': 'API',
  'v1.4.7/_index.md\t./zh/architecture/sdk-overview': 'SDK',
  'v1.4.7/_index.md\t./zh/api/engine/MBDebug': 'MBDebug',
  // --- task pages: parent hub + site home
  'versions/task-mod-bootstrap.md\t../': '跨版本类对比',
  'versions/task-mod-bootstrap.md\t../../': 'Bannerlord Modding Wiki',
  'versions/task-campaign-action.md\t../': '跨版本类对比',
  'versions/task-campaign-action.md\t../../': 'Bannerlord Modding Wiki',
  'versions/task-mission-action.md\t../': '跨版本类对比',
  'versions/task-mission-action.md\t../../': 'Bannerlord Modding Wiki',
  'versions/task-gamemodel.md\t../': '跨版本类对比',
  'versions/task-gamemodel.md\t../../': 'Bannerlord Modding Wiki',
  'versions/task-campaign-behavior.md\t../': '跨版本类对比',
  'versions/task-campaign-behavior.md\t../../': 'Bannerlord Modding Wiki',
  'versions/task-save.md\t../': '跨版本类对比',
  'versions/task-save.md\t../../': 'Bannerlord Modding Wiki',
  'versions/task-ui-screen.md\t../': '跨版本类对比',
  'versions/task-ui-screen.md\t../../': 'Bannerlord Modding Wiki',
  'versions/task-ai.md\t../': '跨版本类对比',
  'versions/task-ai.md\t../../': 'Bannerlord Modding Wiki',
  'versions/task-network.md\t../': '跨版本类对比',
  'versions/task-network.md\t../../': 'Bannerlord Modding Wiki',
  // --- v1.3.15 zh version-delta, linked from the site home
  '_index.md\t./v1.3.15/zh/architecture/version-delta': '版本差异',
  'v1.3.0/_index.md\t./zh/guide/common-issues': '常见问题',
  'v1.3.15/_index.md\t../versions/task-mod-bootstrap': '让 mod 被加载',
  // --- task page -> sibling task page is a class-style token, no intent needed
  'versions/_index.md\t../': 'Bannerlord Modding Wiki',
};

const OWNED_FIXED = [
  '_index.md',
  'versions/_index.md',
  'v1.3.0/_index.md',
  'v1.3.15/_index.md',
  'v1.4.5/_index.md',
  'v1.4.6/_index.md',
  'v1.4.7/_index.md',
  'v1.5.3/_index.md',
  'v1.4.5/zh/_index.md',
];

function ownedFiles() {
  const out = new Set(OWNED_FIXED);
  const vdir = join(ROOT, 'versions');
  if (existsSync(vdir)) {
    for (const e of readdirSync(vdir)) if (e.endsWith('.md')) out.add('versions/' + e);
  }
  // dedupe + drop anything absent: versions/_index.md is both in OWNED_FIXED and
  // discovered by the versions/ scan, and a double-count inflates every finding count.
  return [...out].filter((f) => existsSync(join(ROOT, f))).sort();
}

const toPosix = (p) => p.split(sep).join('/');

/** content/<rel>.md -> Zola output route. `_index.md` folds into its directory. */
function fileToRoute(rel) {
  const dir = posix.dirname(rel);
  return posix.basename(rel) === '_index.md' ? dir + '/' : rel.replace(/\.md$/, '/');
}

/** Resolve href from a page ROUTE using URL (directory) semantics. */
function resolveHref(fromRoute, href) {
  let h = href.split('#')[0];
  if (!h) return null;
  const base = fromRoute.endsWith('/') ? fromRoute : fromRoute + '/';
  const rel = h.startsWith('/')
    ? h.replace(/^\//, '')
    : posix.normalize(posix.join(base, h)).replace(/^\//, '');
  return toPosix(normalize(join(ROOT, rel)).replace(/[\\/]+$/, ''));
}

const candidates = (t) => [t + '.md', join(t, '_index.md')];

/** Identity of a page: frontmatter title, else first H1. Normalised (strip md/punct). */
function pageIdentity(absFile) {
  let txt;
  try {
    txt = readFileSync(absFile, 'utf8');
  } catch {
    return null;
  }
  const fm = txt.replace(/^﻿/, '');
  let title = null;
  const m = /^---\r?\n([\s\S]*?)\r?\n---/.exec(fm);
  if (m) {
    const t = /^title:\s*["']?(.*?)["']?\s*$/m.exec(m[1]);
    if (t) title = t[1];
  }
  if (!title) {
    const h = /^#\s+(.+)$/m.exec(fm);
    if (h) title = h[1];
  }
  if (!title) return null;
  return title.replace(/[`*_]/g, '').trim();
}

/** Strip the bilingual decoration so a zh label can match a bilingual title. */
const norm = (s) =>
  s
    .replace(/[`*_]/g, '')
    .replace(/\s*\/\s*.*$/, '')      // drop "中文 / English" tail
    .replace(/[：:，,。、·…（）()\[\]]/g, '')
    .replace(/\s+/g, '')
    .toLowerCase();

function classify(href) {
  if (/^https?:/i.test(href) || href.startsWith('mailto:')) return 'SKIP-external';
  if (href.startsWith('#')) return 'SKIP-fragment';
  if (href === '' || href === '.' || href === './') return 'SKIP-self';
  return 'CHECK';
}

function fmt(a, b, c, d, s) {
  return [a.padEnd(32), b.padEnd(56), c.padEnd(46), d.padEnd(48), s].join(' | ');
}

// ------------------------------------------------------------------ controls
function selftest() {
  const probe = 'v1.3.15/zh/api/core/MBSubModuleBase.md';
  if (!existsSync(join(ROOT, probe))) {
    console.error('SELFTEST FAIL: control page missing: ' + probe);
    return 2;
  }
  const txt = readFileSync(join(ROOT, probe), 'utf8');
  const m = /\[([^\]]*)\]\((\.[^)\s]+)\)/.exec(txt);
  if (!m) {
    console.error('SELFTEST FAIL: no relative inline link in control page');
    return 2;
  }
  // AXIS 1 — existence, known-true
  const t = resolveHref(fileToRoute(probe), m[2]);
  const hit = candidates(t).find((c) => existsSync(c));
  console.log(fmt(probe, m[2], toPosix(t), hit ? toPosix(hit) : '-', hit ? 'OK' : 'BROKEN'));
  if (!hit) {
    console.error('SELFTEST FAIL(existence): known-true link did not resolve');
    return 2;
  }
  // AXIS 1 — existence, known-false
  const bogus = resolveHref(fileToRoute(probe), './__no_such_page_zzz__');
  if (candidates(bogus).some((c) => existsSync(c))) {
    console.error('SELFTEST FAIL(existence): matched a page that does not exist');
    return 2;
  }
  console.log(fmt(probe, './__no_such_page_zzz__', toPosix(bogus), '-', 'OK (correctly rejected)'));
  // AXIS 2 — identity, known-true: label of a link that IS the page's own subject
  const idSelf = pageIdentity(hit);
  if (!idSelf || norm(idSelf).indexOf(norm(m[1])) === -1) {
    console.error(
      'SELFTEST FAIL(identity): label "' + m[1] + '" not found in target identity "' + idSelf + '"'
    );
    return 2;
  }
  console.log(
    fmt(probe, 'label="' + m[1] + '"', toPosix(t), 'identity="' + idSelf + '"', 'OK identity')
  );
  // AXIS 2 — identity, known-false: a label that is definitely NOT this page
  const lyingLabel = 'ZZZ_NOT_THIS_PAGE_TITLE';
  if (norm(idSelf).indexOf(norm(lyingLabel)) !== -1) {
    console.error('SELFTEST FAIL(identity): a bogus label matched a page title');
    return 2;
  }
  console.log(fmt(probe, 'label="' + lyingLabel + '"', toPosix(t), 'identity="' + idSelf + '"', 'OK (mismatch detected)'));

  console.log('\nSELFTEST PASS: existence 2/2, identity 2/2');
  return 0;
}
/**
 * Structural identity: two shapes whose target is fully determined by the href
 * itself, so no title comparison is needed and none is faked.
 *
 *   RULE-SIBLING   source and target both in /versions/ (a task page or the hub)
 *                  and the href's last segment equals the target file's basename.
 *                  This is what proves `../task-ai` from `/versions/task-mission-action/`
 *                  points at the sibling rather than into the page's own directory.
 *   RULE-DOMAIN    the href's last segment is one of the REAL domain names
 *                  (guide/api/architecture/native/xml-reference/native-1.3.15-src —
 *                  note `guide` is singular; `guides` does not exist)
 *                  and the target is that domain's `_index.md` under a real version.
 *   RULE-LABEL     the link's own text, normalised, is a substring of the target's
 *                  title. The author's words name the page it landed on. Slug hrefs
 *                  like ./zh/architecture/sdk-overview carry no class token, so this
 *                  is the check that applies to them — and it still fires whenever
 *                  the label does not describe the destination.
 *
 * Anything not covered by a rule and not in INTENT stays NO-INTENT.
 */
const REAL_DOMAINS = new Set([
  'guide', 'api', 'architecture', 'native', 'xml-reference', 'native-1.3.15-src',
]);

function verifyStructurally(srcRel, srcRoute, href, hitAbs, id, label) {
  const targetRel = toPosix(hitAbs).slice(toPosix(ROOT).length + 1);
  const seg = hrefToken(href);
  const srcInVersions = srcRel.startsWith('versions/');
  const tgtInVersions = targetRel.startsWith('versions/');

  if (srcInVersions && tgtInVersions) {
    const base = toPosix(hitAbs).split(/[\\/]/).pop().replace(/\.md$/, '');
    if (seg && seg === base) return 'OK-identity(structural-sibling)';
    return 'NO-INTENT';
  }
  if (REAL_DOMAINS.has(seg)) {
    const dir = posix.dirname(targetRel);
    if (posix.basename(targetRel) === '_index.md' && /^v[0-9]+\.[0-9]+/.test(dir.split('/')[0]))
      return 'OK-identity(structural-domain)';
    return 'WRONG-PAGE';
  }
  if (label && id && norm(label).length > 1 && norm(id).indexOf(norm(label)) !== -1)
    return 'OK-identity(structural-label)';
  return 'NO-INTENT';
}

if (process.env.SELFTEST === '1') process.exit(selftest());

// ------------------------------------------------------------------ integrity
// Added after two real corruptions slipped through a link-only check:
//   (a) a heredoc mangled one CJK char into U+FFFD replacement chars ("不只???类对比")
//   (b) an Array.join bug collapsed several lines into one comma-joined line
// A file with mojibake passes every link check. For a reader it is exactly as
// broken as a 404, so it gets the same gate: non-zero exit, not a warning.
// Run:  INTEGRITY=1 node tools/nav-links-verify-overviews.mjs
function integrity() {
  const NL = String.fromCharCode(10);
  const targets = ownedFiles();
  if (!targets.length) {
    console.error('INTEGRITY FAIL CLOSED: no owned files found under ' + ROOT);
    return 2;
  }
  let bad = 0;
  const report = (rel, kind, detail) => {
    bad++;
    console.log('INTEGRITY-FAIL ' + rel + ' :: ' + kind + ' :: ' + detail);
  };
  for (const rel of targets) {
    const abs = join(ROOT, rel);
    const buf = readFileSync(abs);
    const t = buf.toString('utf8');

    // 1. encoding / BOM
    if (buf.length >= 3 && buf[0] === 0xef && buf[1] === 0xbb && buf[2] === 0xbf)
      report(rel, 'BOM', 'file starts with a UTF-8 BOM');
    if (buf.includes(0xef) && buf.includes(0xbf) && t.includes('�'))
      report(rel, 'ENCODING', 'replacement characters present');

    // 2. U+FFFD replacement char
    const lines = t.split(NL);
    lines.forEach((l, i) => {
      if (l.indexOf('�') !== -1)
        report(rel, 'U+FFFD', 'line ' + (i + 1) + ': ' + JSON.stringify(l.slice(0, 120)));
    });

    // 3. runs of 2+ '?'  (a real question mark is never doubled in prose)
    lines.forEach((l, i) => {
      if (/\?{2,}/.test(l))
        report(rel, 'QUESTION-MARK-RUN', 'line ' + (i + 1) + ': ' + JSON.stringify(l.slice(0, 120)));
    });

    // 4. heredoc escape residue: a backslash that is not markdown line-break,
    //    not inside a fenced code block, and not a valid escape.
    let inFence = false;
    lines.forEach((l, i) => {
      if (/^\s*```/.test(l)) {
        inFence = !inFence;
        return;
      }
      if (inFence) return;
      const m = /\\([^\\`*{}\[\]()#+\-.!_>|"'<nrtu])/g;
      let mm;
      while ((mm = m.exec(l)))
        report(rel, 'ESCAPE-RESIDUE', 'line ' + (i + 1) + ': \\' + mm[1]);
    });
    if (inFence) report(rel, 'UNCLOSED-FENCE', 'a ``` fence was never closed');

    // 5. real TAB characters. A heredoc that interprets `\t` writes a literal tab
    //    into the file; markdown never needs one and it renders as a stray space.
    lines.forEach((l, i) => {
      if (l.indexOf(String.fromCharCode(9)) !== -1)
        report(rel, 'TAB-CHAR', 'line ' + (i + 1) + ': ' + JSON.stringify(l.slice(0, 100)));
    });

    // 6. comma-joined lines: two list items / a heading + text on one line.
    //    Shape: "## X,,1. " or "- a,,- b"  -> 2+ occurrences of the joiner.
    lines.forEach((l, i) => {
      if (/^#{1,6} [^,]*,,/.test(l) || /(?:^|\s)- [^,]*,,\s*- /.test(l))
        report(rel, 'COMMA-JOINED-LINE', 'line ' + (i + 1) + ': ' + JSON.stringify(l.slice(0, 120)));
    });

    // 7. structural: frontmatter must be closed
    if (t.startsWith('---')) {
      const close = t.indexOf(NL + '---', 3);
      if (close === -1) report(rel, 'FRONTMATTER', 'opening --- with no closing ---');
    }
  }
  console.log(bad === 0 ? 'INTEGRITY PASS: 0 findings' : 'INTEGRITY FAIL: ' + bad + ' findings');
  return bad === 0 ? 0 : 1;
}
if (process.env.INTEGRITY === '1') process.exit(integrity());

// ------------------------------------------------------------------ main
if (!existsSync(ROOT)) {
  console.error('FAIL CLOSED: content root not found: ' + ROOT);
  process.exit(2);
}
const files = ownedFiles();
if (!files.length) {
  console.error('FAIL CLOSED: no owned files under ' + ROOT);
  process.exit(2);
}

const linkRe = /\[([^\]]*)\]\(([^)\s]+)\)/g;
const rows = [];
let ok = 0,
  broken = 0,
  noIntent = 0,
  skipped = 0,
  inFenceLinks = 0;

/**
 * Strip fenced code blocks before scanning for links.
 *
 * BLIND SPOT (lead 2026-10-03): `[x](y)` written inside a ``` fence is sample
 * code, not a hyperlink. Two independent probes both counted them as real links.
 * Skipping the fence is the correct call — and it matters that we SKIP rather than
 * delete the examples to dodge the count.
 *
 * Returns { text, fenceHits } where fenceHits is how many link-shaped strings were
 * suppressed, so the suppression is visible in the output rather than silent.
 */
function stripFences(txt) {
  const NL = String.fromCharCode(10);
  const lines = txt.split(NL);
  const kept = [];
  let inFence = false;
  let hits = 0;
  for (const l of lines) {
    if (/^\s*```/.test(l)) {
      inFence = !inFence;
      kept.push(l);
      continue;
    }
    if (inFence) {
      linkRe.lastIndex = 0;
      if (linkRe.test(l)) hits++;
      continue;
    }
    kept.push(l);
  }
  return { text: kept.join(NL), fenceHits: hits };
}

/** Last path segment of an href = the thing the author is naming. */
function hrefToken(href) {
  const h = href.split('#')[0].replace(/\/+$/, '');
  const seg = h.split('/').filter(Boolean).pop() || '';
  return seg.replace(/\.md$/, '');
}

/** All files named <token>.md anywhere under content/ — for the AMBIGUOUS check.
 *  A class name can legitimately live in more than one bucket (P7: e.g. ScreenBase
 *  is in campaign-ext for v1.3.15/v1.4.5 and in gui for v1.4.6+). Returning every
 *  candidate is the point: silently picking the first one is how a link ends up
 *  pointing at the wrong version's page while still "resolving fine". */
function classCandidates(tok) {
  const out = [];
  const stack = [ROOT];
  while (stack.length) {
    const dir = stack.pop();
    let ents;
    try {
      ents = readdirSync(dir, { withFileTypes: true });
    } catch {
      continue;
    }
    for (const e of ents) {
      if (e.isDirectory()) {
        if (!e.name.startsWith('.')) stack.push(join(dir, e.name));
      } else if (e.name === tok + '.md') {
        out.push(toPosix(join(dir, e.name)).slice(toPosix(ROOT).length + 1));
      }
    }
  }
  return out.sort();
}

for (const rel of files) {
  let txt;
  try {
    txt = readFileSync(join(ROOT, rel), 'utf8');
  } catch (e) {
    console.error('FAIL CLOSED: unreadable owned file ' + rel + ': ' + e.message);
    process.exit(2);
  }
  const route = fileToRoute(rel);
  const stripped = stripFences(txt);
  inFenceLinks += stripped.fenceHits;
  let m;
  linkRe.lastIndex = 0;
  while ((m = linkRe.exec(stripped.text))) {
    const label = m[1];
    const href = m[2].split(/\s/)[0];
    const kind = classify(href);
    if (kind !== 'CHECK') {
      skipped++;
      rows.push(fmt(rel, href, '-', '-', kind));
      continue;
    }
    const t = resolveHref(route, href);
    const hit = t ? candidates(t).find((c) => existsSync(c)) : null;
    if (!hit) {
      broken++;
      rows.push(fmt(rel, href, t ? toPosix(t) : '?', '-', 'BROKEN'));
      continue;
    }
    // Existence passed. Now IDENTITY: is this the page the author meant?
    //   leaf class link -> the href's own last segment must name the target page.
    //   navigational     -> must be declared in INTENT, and the declaration must match.
    const id = pageIdentity(hit);
    const isLeaf = hit.endsWith('.md') && !hit.endsWith('_index.md');
    const tok = hrefToken(href);
    const key = rel + '\t' + href;
    let status;
    let ambigNote = '';
    const hasIntent = Object.prototype.hasOwnProperty.call(INTENT, key);
    // A /versions/-internal link is settled by RULE-SIBLING before the class branch
    // runs: `./Hero` from /versions/ means versions/Hero.md, full stop. Running the
    // AMBIGUOUS check first would flag every class-index row, because the same class
    // name legitimately exists in five other version trees — noise that would train
    // a reader to ignore the signal that matters (ScreenBase).
    const bothVersions =
      rel.startsWith('versions/') && toPosix(hit).indexOf('/content/versions/') !== -1;
    if (!hasIntent && bothVersions) {
      status = verifyStructurally(rel, route, href, hit, id, label);
      if (status.indexOf('OK-identity') === 0) ok++;
      else noIntent++;
    } else if (hasIntent) {
      // Declared navigational link wins over the generic class heuristic.
      const want = norm(INTENT[key]);
      const good = id && norm(id).indexOf(want) !== -1;
      status = good ? 'OK-identity(declared)' : 'WRONG-PAGE';
      if (good) ok++;
      else noIntent++;
    } else if (isLeaf && /^[A-Za-z_][A-Za-z0-9_]*$/.test(tok) && norm(tok).length > 2) {
      // Token is a plain identifier (a class / type name): strict auto check.
      if (!(id && norm(id).indexOf(norm(tok)) !== -1)) {
        status = 'WRONG-PAGE';
        noIntent++;
      } else {
        // AMBIGUOUS check (P7): same class name in >1 bucket/version on disk.
        // Only fires when the href does NOT already pin a version. A link whose
        // path contains /v1.x.y/ is version-qualified by construction — e.g. every
        // row of content/versions/<Class>.md — so flagging those would be noise
        // that trains the reader to ignore AMBIGUOUS. The dangerous case is a
        // version-agnostic link to a name that exists in several buckets
        // (ScreenBase: campaign-ext in 1.3.15/1.4.5, gui in 1.4.6+).
        const cands = classCandidates(tok);
        const versionPinned = /\/(v[0-9]+\.[0-9]+(?:\.[0-9]+)?)\//.test(t);
        if (cands.length > 1 && !versionPinned) {
          ambigNote = ' AMBIGUOUS(' + cands.length + '): ' + cands.join(' , ');
          noIntent++;
          status = 'AMBIGUOUS';
        } else {
          status = 'OK-identity(class)';
          ok++;
        }
      }
    } else if (Object.prototype.hasOwnProperty.call(INTENT, key)) {
      const want = norm(INTENT[key]);
      const good = id && norm(id).indexOf(want) !== -1;
      status = good ? 'OK-identity(declared)' : 'WRONG-PAGE';
      if (good) ok++;
      else noIntent++;
    } else {
      status = verifyStructurally(rel, route, href, hit, id, label);
      if (status.indexOf('OK-identity') === 0) ok++;
      else noIntent++;
    }
    if (status === 'OK-identity(class)') {
      rows.push(fmt(rel, href, toPosix(t), toPosix(hit), status + ' "' + (id || '?') + '"'));
    } else {
      rows.push(
        fmt(
          rel,
          href,
          toPosix(t),
          toPosix(hit),
          status + ' label="' + label + '" identity="' + (id || '?') + '"' + ambigNote
        )
      );
    }
  }
}

const header = [
  '# nav-links-verify-overviews — per-link Zola output-route TRACE + IDENTITY check',
  '# tools/nav-links-verify-overviews.mjs (read-only; writes nothing under content/)',
  '# route  = resolved from the SOURCE PAGE ROUTE, not the file directory (gate #7)',
  '# ident  = frontmatter title / first H1 of the page actually landed on',
  '# STATUS  OK-identity(class)    = leaf link, href token names the page it landed on',
  '#         OK-identity(declared) = navigational link, INTENT[key] matched the target title',
  '#         NO-INTENT              = navigational link with no INTENT entry     <-- must be 0',
  '#         AMBIGUOUS               = class name exists in >1 bucket/version      <-- declare the version',
  '#         WRONG-PAGE             = landed on a real page that is NOT the one meant  <-- must be 0',
  '#         BROKEN                 = no such page',
  '# files_in_scope=' + files.length,
  '# LINKS_CHECKED=' + (ok + broken + noIntent) + ' IDENTITY_OK=' + ok + ' WRONG_OR_NO_INTENT=' + noIntent +
    ' BROKEN=' + broken + ' SKIPPED=' + skipped,
  '# FENCED_CODE_LINKS_SKIPPED=' + inFenceLinks + '  (link-shaped text inside ``` fences, not hyperlinks)',
  '# ----',
  '',
].join('\n');

const body = header + rows.join('\n') + '\n';
process.stdout.write(body);
try {
  writeFileSync(OUT, body);
  console.error('wrote ' + OUT);
} catch (e) {
  console.error('FAIL CLOSED: cannot write ' + OUT + ': ' + e.message);
  process.exit(2);
}
process.exit(broken > 0 || noIntent > 0 ? 1 : 0);
