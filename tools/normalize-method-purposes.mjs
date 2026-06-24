// Bulk-normalize method-purpose lines that were emitted by an older version of
// doc-fragments.mjs. Replaces the placeholder verb+subject pattern with the
// current, context-aware sentence from docFragments.methodPurpose().
//
// Usage: node tools/normalize-method-purposes.mjs
// Run from repo root.

import { readdirSync, readFileSync, statSync, writeFileSync } from 'fs';
import { join } from 'path';
import * as docFragments from './doc-fragments.mjs';

const docsRoot = join(import.meta.dirname, '..', 'docs');

function walk(dir, acc = []) {
  let entries;
  try { entries = readdirSync(dir); } catch { return acc; }
  for (const e of entries) {
    if (e.startsWith('.') || e === 'public' || e === 'node_modules') continue;
    const p = join(dir, e);
    let s;
    try { s = statSync(p); } catch { continue; }
    if (s.isDirectory()) walk(p, acc);
    else if (e.endsWith('.md')) acc.push(p);
  }
  return acc;
}

const ZH_OLD = /^\*\*用途\s*\/\s*Purpose:\*\*\s*(读取\/获取|设置|尝试获取|判断是否可|判断是否存在|创建|添加|移除|更新|刷新|重置|加载|保存|执行|应用|初始化|响应|处理)\s+`([^`]+)`\s*。\s*$/;
const EN_OLD = /^\*\*Purpose:\*\*\s*(read or fetch|set|try to get|check whether it can|check whether it has|create|add|remove|update|refresh|reset|load|save|execute|apply|initialize|react to|handle)\s+`([^`]+)`\s*\.\s*$/;

function detectLang(filePath) {
  if (/[\\/]en[\\/]/.test(filePath)) return 'en';
  if (/[\\/]zh[\\/]/.test(filePath)) return 'zh';
  return 'zh';
}

function normalizeFile(filePath) {
  const lang = detectLang(filePath);
  const before = readFileSync(filePath, 'utf8');
  const lines = before.split(/\r?\n/);
  let changed = false;
  let currentMethod = null;
  let headingLine = -1;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const headingMatch = line.match(/^###\s+(\S+)/);
    if (headingMatch) {
      currentMethod = headingMatch[1];
      headingLine = i;
      continue;
    }
    if (currentMethod == null) continue;
    if (i - headingLine > 6) {
      currentMethod = null;
      continue;
    }
    const isOld = lang === 'zh' ? ZH_OLD.test(line) : EN_OLD.test(line);
    if (!isOld) continue;
    const replacement = docFragments.methodPurpose(currentMethod, lang);
    if (replacement !== line) {
      lines[i] = replacement;
      changed = true;
    }
    currentMethod = null;
  }

  if (!changed) return false;
  writeFileSync(filePath, lines.join('\n'), 'utf8');
  return true;
}

const files = walk(docsRoot);
let normalized = 0;
for (const f of files) {
  if (normalizeFile(f)) normalized++;
}
console.log(`Normalized method-purpose lines in ${normalized} files.`);
