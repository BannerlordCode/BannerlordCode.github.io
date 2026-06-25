// tools/generate-class-docs.mjs
// Bulk-generate or refresh class reference pages using the type inventory.
// Usage:
//   node tools/generate-class-docs.mjs
//   node tools/generate-class-docs.mjs --ver 1.3.15 --lang zh
//
// It writes pages for entries where hasDoc=false or where the existing page
// looks auto-generated (stub). Hand-written pages are never overwritten.
import { readFileSync, existsSync, writeFileSync, mkdirSync } from 'fs';
import { dirname, join, resolve } from 'path';
import { STUB_RE, extract, renderAction, renderGeneral } from './lib/class-ref.mjs';
import { REPO_ROOT, getArg } from './lib/paths.mjs';

const verArg = getArg('--ver');
const langArg = getArg('--lang');
const force = process.argv.slice(2).includes('--force');
const regenerateAll = process.argv.slice(2).includes('--regenerate-all');

const inventory = JSON.parse(readFileSync(join(REPO_ROOT, 'tools', 'data', 'type-inventory.json'), 'utf8'));
const versions = verArg ? [verArg.replace(/^v/, '')] : Object.keys(inventory);
const langs = langArg ? [langArg] : ['zh', 'en'];

function sourceRootFor(ver) {
  if (ver === '1.4.5') return resolve(REPO_ROOT, '..', 'bannerlord-1.4.5', 'Bannerlord.Source');
  return resolve(REPO_ROOT, '..', 'bannerlord-' + ver);
}

// Patterns that identify legacy generated stubs we'd like to overwrite with
// the current, richer template.
const LEGACY_STUB_RE = /\*\*(?:用途\s*\/\s*)?Purpose:\*\*\s*(?:Gets the current value of|Sets the value or state of|Handles logic related to|Carries out the business logic associated with|处理\s*['"`][^'"`]+['"`]\s*相关逻辑)|var\s+(?:value|example)\s*=\s*new\s+\w+\s*\(\s*\)/;

function isApiLeafStub(absPagePath, text) {
  if (!absPagePath.includes('/api/')) return false;
  // If the page has method sections but no fenced code blocks inside them, treat
  // it as an old stub when --force is on.
  const methodSectionCount = (text.match(/^###\s+/gm) || []).length;
  const fencedBlockCount = (text.match(/^```[\w]*$/gm) || []).length;
  return methodSectionCount > 0 && fencedBlockCount < methodSectionCount;
}

function escapeRegExp(s) {
  return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function hasPlaceholderConstructor(text, typeName) {
  const re = new RegExp(`new\\s+${escapeRegExp(typeName)}\\s*\\(`, 'iu');
  return re.test(text);
}

function hasPlaceholderFactory(text) {
  return /Get\w*Implementation\s*\(\s*\)/iu.test(text) || /\bnew\s+Custom\w*\s*\(/iu.test(text);
}

function shouldGenerate(absPagePath, typeName) {
  if (!existsSync(absPagePath)) return true;
  const existing = readFileSync(absPagePath, 'utf8');
  if (STUB_RE.test(existing)) return true;
  if (regenerateAll) return true;
  if (force) {
    return (
      LEGACY_STUB_RE.test(existing) ||
      isApiLeafStub(absPagePath, existing) ||
      hasPlaceholderConstructor(existing, typeName) ||
      hasPlaceholderFactory(existing)
    );
  }
  return false;
}

const totals = { generated: 0, skipped: 0, missingSource: 0, errors: 0 };

for (const ver of versions) {
  const root = sourceRootFor(ver);
  const perLang = inventory[ver];
  if (!perLang) {
    console.warn(`No inventory data for ${ver}; skipping.`);
    continue;
  }
  for (const lang of langs) {
    const groups = perLang[lang];
    if (!groups) continue;
    let generated = 0;
    let skipped = 0;
    let missing = 0;
    let errors = 0;
    let count = 0;
    console.log(`\n[${ver}/${lang}] scanning groups...`);
    for (const [group, types] of Object.entries(groups)) {
      for (const [typeName, meta] of Object.entries(types)) {
        count++;
        const pageAbs = resolve(REPO_ROOT, meta.pagePath);
        if (!shouldGenerate(pageAbs, typeName)) {
          skipped++;
          continue;
        }
        const sourceAbs = resolve(REPO_ROOT, meta.sourceFile);
        if (!existsSync(sourceAbs)) {
          missing++;
          continue;
        }
        try {
          const ex = extract(sourceAbs, typeName, root);
          if (!ex || (!ex.methods.length && !ex.props.length && !meta.kind)) {
            // Nothing extractable; create a tiny placeholder so the route exists.
            const body = `---\ntitle: "${typeName}"\n---\n# ${typeName}\n\n**Namespace:** ${ex?.ns ?? group}\n\n>${lang === 'zh' ? '该类在当前源码树中未解析出公开成员；目录占位以便导航。' : 'No public members were extracted from the current source tree; placeholder for navigation.'}\n`;
            mkdirSync(dirname(pageAbs), { recursive: true });
            writeFileSync(pageAbs, body);
            generated++;
            continue;
          }
          const body = ex.isActions ? renderAction(typeName, ex, lang) : renderGeneral(typeName, ex, lang);
          mkdirSync(dirname(pageAbs), { recursive: true });
          writeFileSync(pageAbs, body);
          generated++;
        } catch (err) {
          errors++;
          console.error(`ERROR ${ver}/${lang} ${typeName}: ${err.message}`);
        }
        if (count % 100 === 0) {
          process.stdout.write(`  processed ${count}, generated ${generated}, skipped ${skipped}, missing ${missing}, errors ${errors}\r`);
        }
      }
    }
    totals.generated += generated;
    totals.skipped += skipped;
    totals.missingSource += missing;
    totals.errors += errors;
    console.log(`  done: generated ${generated}, skipped ${skipped}, missing source ${missing}, errors ${errors}`);
  }
}

console.log(`\nGrand totals: generated ${totals.generated}, skipped ${totals.skipped}, missing source ${totals.missingSource}, errors ${totals.errors}`);
