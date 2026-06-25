import { readdirSync, readFileSync, statSync, writeFileSync } from 'fs';
import { join } from 'path';
import * as docFragments from './doc-fragments.mjs';

const CONTENT_ROOT = join(process.cwd(), 'content');
const PLACEHOLDER_ZH = /^(\*\*用途\s*\/\s*Purpose:\*\*|\*\*用途：?\*\*|\*\*Purpose:\*\*)\s*执行此方法所描述的操作[。；.]\s*$/iu;

function walk(dir, acc = []) {
  for (const entry of readdirSync(dir)) {
    if (entry.startsWith('.') || entry === 'public' || entry === 'node_modules') continue;
    const p = join(dir, entry);
    const s = statSync(p);
    if (s.isDirectory()) walk(p, acc);
    else if (entry.endsWith('.md')) acc.push(p);
  }
  return acc;
}

function detectLang(filePath) {
  if (/[\\/]en[\\/]/.test(filePath)) return 'en';
  if (/[\\/]zh[\\/]/.test(filePath)) return 'zh';
  return 'zh';
}

function splitCamelCase(name) {
  return name
    .replace(/([a-z])([A-Z])/g, '$1 $2')
    .replace(/([A-Z]+)([A-Z][a-z])/g, '$1 $2')
    .trim();
}

function zhPurposeForMethod(methodName) {
  // Try the shared doc-fragments first; use it only if it does not return the
  // generic placeholder.
  const fromShared = docFragments.methodPurpose(methodName, 'zh');
  if (fromShared && !/执行此方法所描述的操作/.test(fromShared)) {
    return fromShared;
  }

  const lower = methodName.toLowerCase();
  const words = splitCamelCase(methodName).toLowerCase();

  // Event / callback patterns
  if (/^(on|after|before)/i.test(methodName)) {
    return `**用途 / Purpose:** 在 「${words.replace(/^on\s+|after\s+|before\s+/, '')}」 事件触发时调用此回调。`;
  }
  if (/(changed|updated|completed|opened|closed|started|stopped|raised|triggered|notified)$/i.test(methodName)) {
    return `**用途 / Purpose:** 响应 「${words}」 事件并执行相关处理。`;
  }
  if (/tick$/i.test(methodName)) {
    return `**用途 / Purpose:** 推进 「${words.replace(/\s*tick$/, '')}」 状态的周期性更新。`;
  }

  // Common nouns-as-verbs or bare states
  if (/(state|status|condition|mode)$/i.test(methodName)) {
    return `**用途 / Purpose:** 获取或更新 「${words}」 的状态。`;
  }
  if (/(data|info|context)$/i.test(methodName)) {
    return `**用途 / Purpose:** 获取或维护 「${words}」 数据。`;
  }

  // Fallback: describe as operating on the method subject
  return `**用途 / Purpose:** 处理与 「${words}」 相关的逻辑。`;
}

function enPurposeForMethod(methodName) {
  const fromShared = docFragments.methodPurpose(methodName, 'en');
  if (fromShared && !/execute this entry point/i.test(fromShared)) {
    return fromShared;
  }

  const words = splitCamelCase(methodName);
  const lower = words.toLowerCase();

  if (/^(on|after|before)/i.test(methodName)) {
    return `**Purpose:** Called when the ${words.replace(/^On\s+|After\s+|Before\s+/, '').toLowerCase()} event occurs.`;
  }
  if (/(changed|updated|completed|opened|closed|started|stopped|raised|triggered|notified)$/i.test(methodName)) {
    return `**Purpose:** Reacts to the ${lower} event.`;
  }
  if (/tick$/i.test(methodName)) {
    return `**Purpose:** Advances the periodic update for ${words.replace(/\s*Tick$/i, '').toLowerCase()}.`;
  }
  if (/(state|status|condition|mode)$/i.test(methodName)) {
    return `**Purpose:** Gets or updates the ${lower}.`;
  }
  if (/(data|info|context)$/i.test(methodName)) {
    return `**Purpose:** Gets or maintains the ${lower}.`;
  }
  return `**Purpose:** Handles logic related to ${lower}.`;
}

function fixFile(filePath) {
  const lang = detectLang(filePath);
  const before = readFileSync(filePath, 'utf8');
  const lines = before.split(/\r?\n/);
  let currentMethod = null;
  let headingLine = -1;
  let changed = false;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const headingMatch = line.match(/^###\s+(\S+)/);
    if (headingMatch) {
      currentMethod = headingMatch[1];
      headingLine = i;
      continue;
    }

    if (currentMethod == null) continue;
    if (i - headingLine > 8) {
      currentMethod = null;
      continue;
    }

    if (PLACEHOLDER_ZH.test(line)) {
      const replacement = lang === 'zh'
        ? zhPurposeForMethod(currentMethod)
        : enPurposeForMethod(currentMethod);
      if (replacement !== line) {
        lines[i] = replacement;
        changed = true;
      }
      currentMethod = null;
    }
  }

  if (!changed) return false;
  writeFileSync(filePath, lines.join('\n'), 'utf8');
  return true;
}

const files = walk(CONTENT_ROOT);
let fixed = 0;
for (const f of files) {
  if (fixFile(f)) fixed++;
}
console.log(`Fixed 'execute this operation' placeholders in ${fixed} files.`);
