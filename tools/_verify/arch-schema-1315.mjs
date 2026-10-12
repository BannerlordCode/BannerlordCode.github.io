#!/usr/bin/env node
// ============================================================================
// tools/_verify/arch-schema-1315.mjs
// ----------------------------------------------------------------------------
// 用途：v1.3.15 架构桶 28 页「节 schema 声明」补写 + 复验（worker-226 派单）。
//   boss #16768/#16773 裁定：① 声明必须【页内】；② 判据 = 「声明内容 == 实际 H2 集合」；
//   ③ 判据必须【两种声明形式都接受】（块引用式 + H2 节式），否则会出现
//      「修完 28 页，判据仍报 28 页」。
//
// 用法:
//   node tools/_verify/arch-schema-1315.mjs --apply     # 补写 28 页（幂等），并写记录 TSV
//   node tools/_verify/arch-schema-1315.mjs --check     # 复验 28 页（只读）
//   node tools/_verify/arch-schema-1315.mjs --check --all   # 复验整个 architecture 桶（含已声明 8 页）
//   node tools/_verify/arch-schema-1315.mjs --check --all --json <out>
//
// ★ 只动这 28 个文件；脚本对路径做硬断言，越界即退出。
// ★ 只【插入一行】+ 一个空行，不改正文任何其它字节。
//
// ----------------------------------------------------------------------------
// 声明格式（本批统一形式，zh/en 各一条，单行块引用）
//
//   zh: > 节 schema：本页采用 N 节（按出现顺序）：t1 ｜ t2 ｜ … ｜ tN
//   en: > Section schema: this page uses N sections (in document order): t1 | t2 | ... | tN
//
// 为什么不用 boss 示例里的 `（概述 / 心智模型 / …）` 包法：
//   架构页 H2 标题【本身含 `/`】（如 `↑ 上级导航 / Parent Navigation`、`1. 存档：SyncData vs SaveableField、加载顺序…`），
//   也含全角括号 `（）`（如 `依赖图（可点击）`）。用 ` / ` 当分隔符 + `（）` 当包裹 = 歧义。
//   ⇒ 分隔符改用 ` ｜ `（全角）/ ` | `（ASCII），包裹改用 `（按出现顺序）：`。
//   已实测：本批 28 页共 260 个 H2 标题里，`｜` / ` | ` / `节 schema` / `Section schema` 出现次数 = 0。
//
// ----------------------------------------------------------------------------
// 判据实现（checkDeclaration）
//   形式 A `h2-section`        : `## 节 schema 声明` / `## Section schema declaration` + 映射表
//                                （表里 ``| `## X` | …|`` 的 X 就是【实际节清单】；表本身是声明）
//   形式 B `blockquote-enum`   : 本批写的枚举式块引用
//   形式 C `blockquote-canonical`: 已声明 6 页的短式块引用（括号内 ` / ` 分隔）
//   ⇒ 三种都接受。比较时对【规范七节】的 zh/en 名做双向归一（因为 action-family en 的
//     声明用的是 zh 名），其余标题要求逐字相等、顺序一致。
// ============================================================================

import { readFileSync, writeFileSync, existsSync, readdirSync } from "node:fs";
import { createHash } from "node:crypto";
import { dirname, resolve, relative } from "node:path";
import { fileURLToPath } from "node:url";

const HERE = dirname(fileURLToPath(import.meta.url));
const REPO = resolve(HERE, "..", "..");

// ---- 硬范围：14 个页名 × 2 语 = 28 页 -------------------------------------
const PAGES = [
  "_index",
  "campaign-event-system",
  "campaign-events",
  "crash-boundaries",
  "developer-roadmap",
  "doc-contract",
  "gamemodel-decorator",
  "module-system",
  "native-interop",
  "noise-policy",
  "sandbox-native-policy",
  "save-system",
  "sdk-overview",
  "version-delta",
];
const LANGS = ["zh", "en"];
const SCOPE = PAGES.flatMap((n) => LANGS.map((l) => `content/v1.3.15/${l}/architecture/${n}.md`));
const ARCH_DIRS = LANGS.map((l) => `content/v1.3.15/${l}/architecture`);
const RECORD = "tools/_verify/arch-schema-1315-record.tsv";

// ---- 规范七节 zh/en 归一表 ------------------------------------------------
const CANON_ZH = ["概述", "心智模型", "怎么用", "关键成员", "真实示例", "参见", "导航"];
const CANON_EN = ["Overview", "Mental Model", "How To Use", "Key Members", "Real Example", "See Also", "Navigation"];
// 已知等价变体（复数/大小写差异），仅用于【判据归一】，不改文件
const ALIAS = new Map(
  [
    ["real examples", "real example"],
    ["key member", "key members"],
    ["see also", "see also"],
    ["navigation", "navigation"],
  ]
);
function normKey(t) {
  const s = t.trim();
  let i = CANON_ZH.indexOf(s);
  if (i >= 0) return "canon:" + i;
  i = CANON_EN.findIndex((x) => x.toLowerCase() === s.toLowerCase());
  if (i >= 0) return "canon:" + i;
  let low = s.toLowerCase();
  if (ALIAS.has(low)) low = ALIAS.get(low);
  return "raw:" + low;
}

// ---- H2 抽取 --------------------------------------------------------------
function h2Of(text) {
  return [...text.matchAll(/^##\s+(.+?)\s*$/gm)].map((m) => m[1].trim());
}

// ---- 声明解析 -------------------------------------------------------------
function parseDeclaration(text) {
  const lines = text.split(/\r?\n/);

  // 形式 A：H2 节式（mission-lifecycle zh/en）
  const h2Idx = lines.findIndex((l) => /^##\s+(节 schema 声明|Section schema declaration)\s*$/.test(l));
  if (h2Idx >= 0) {
    const declared = [];
    for (let i = h2Idx + 1; i < lines.length; i++) {
      if (/^##\s+/.test(lines[i])) break;
      const m = lines[i].match(/^\|\s*`##\s*(.+?)`\s*\|/);
      if (m) declared.push(m[1].trim());
    }
    if (declared.length) return { form: "h2-section", declared, lineNo: h2Idx + 1, declaredCount: declared.length };
  }

  // 形式 B/C：块引用式
  for (let i = 0; i < lines.length; i++) {
    const l = lines[i];
    if (!/^>\s*/.test(l)) continue;
    if (!/节 schema|Section schema/.test(l)) continue;

    const zhEnum = l.match(/^>\s*节 schema：本页采用\s*(\d+)\s*节（按出现顺序）：\s*(.+?)\s*$/);
    if (zhEnum) {
      return {
        form: "blockquote-enum",
        declared: zhEnum[2].split(" ｜ ").map((s) => s.trim()),
        declaredCount: Number(zhEnum[1]),
        lineNo: i + 1,
      };
    }
    const enEnum = l.match(/^>\s*Section schema:\s*this page uses\s*(\d+)\s*sections\s*\(in document order\):\s*(.+?)\s*$/);
    if (enEnum) {
      return {
        form: "blockquote-enum",
        declared: enEnum[2].split(" | ").map((s) => s.trim()),
        declaredCount: Number(enEnum[1]),
        lineNo: i + 1,
      };
    }
    // 短式：括号内以 ` / ` 分隔
    for (const re of [/（([^）]*)）/, /\(([^)]*)\)/]) {
      const m = l.match(re);
      if (m && m[1].includes(" / ")) {
        return {
          form: "blockquote-canonical",
          declared: m[1].split(" / ").map((s) => s.trim()),
          lineNo: i + 1,
        };
      }
    }
  }
  return null;
}

// ---- 判据：声明 == 实际 H2 集合 -------------------------------------------
function compare(declared, actual) {
  const d = declared.map(normKey);
  const a = actual.map(normKey);
  if (d.length !== a.length) return { ok: false, why: `长度不符 declared=${d.length} actual=${a.length}` };
  for (let i = 0; i < d.length; i++) {
    if (d[i] !== a[i]) {
      const extra = declared.length !== actual.length ? "" : "";
      return { ok: false, why: `第 ${i + 1} 项不符: declared=${JSON.stringify(declared[i])} actual=${JSON.stringify(actual[i])}${extra}` };
    }
  }
  return { ok: true, why: "" };
}

function checkFile(relPath) {
  const abs = resolve(REPO, relPath);
  if (!existsSync(abs)) return { relPath, missing: true };
  const text = readFileSync(abs, "utf8");
  const actual = h2Of(text);
  const decl = parseDeclaration(text);
  if (!decl) {
    return { relPath, actual, declared: null, form: "none", ok: false, why: "页内无任何声明形式" };
  }
  const cmp = compare(decl.declared, actual);
  let countOk = true;
  if (decl.declaredCount !== undefined) countOk = decl.declaredCount === actual.length;
  return {
    relPath,
    actual,
    declared: decl.declared,
    form: decl.form,
    lineNo: decl.lineNo,
    declaredCount: decl.declaredCount,
    ok: cmp.ok && countOk,
    why: cmp.ok ? (countOk ? "" : `声明的节数 ${decl.declaredCount} != 实际 ${actual.length}`) : cmp.why,
  };
}

// ---- 声明文本 -------------------------------------------------------------
function buildDeclaration(lang, h2) {
  if (lang === "zh") {
    return `> 节 schema：本页采用 ${h2.length} 节（按出现顺序）：${h2.join(" ｜ ")}`;
  }
  return `> Section schema: this page uses ${h2.length} sections (in document order): ${h2.join(" | ")}`;
}

function detectEol(text) {
  return text.includes("\r\n") ? "\r\n" : "\n";
}
function sha256(text) {
  return createHash("sha256").update(Buffer.from(text, "utf8")).digest("hex");
}

// ---- apply ----------------------------------------------------------------
function apply() {
  const rows = [];
  let inserted = 0;
  let skipped = 0;
  for (const rel of SCOPE) {
    // 硬断言：只能落在 content/v1.3.15/<zh|en>/architecture/ 下
    if (!/^content\/v1\.3\.15\/(zh|en)\/architecture\/[^/]+\.md$/.test(rel)) {
      throw new Error("OUT-OF-SCOPE PATH: " + rel);
    }
    const abs = resolve(REPO, rel);
    if (!existsSync(abs)) throw new Error("MISSING TARGET: " + rel);
    const before = readFileSync(abs, "utf8");
    const oldSha = sha256(before);
    const eol = detectEol(before);
    const lines = before.split(/\r?\n/);
    const h2 = h2Of(before);

    const existing = parseDeclaration(before);
    if (existing) {
      skipped++;
      rows.push([rel, oldSha, oldSha, h2.join(" | "), existing.form + " (pre-existing)", "PASS", "already declared"]);
      continue;
    }

    const firstH2 = lines.findIndex((l) => /^##\s+/.test(l));
    if (firstH2 < 0) throw new Error("NO H2 IN PAGE: " + rel);
    if (lines[firstH2 - 1].trim() !== "") throw new Error("NO BLANK LINE BEFORE FIRST H2: " + rel);

    const lang = rel.includes("/zh/") ? "zh" : "en";
    const decl = buildDeclaration(lang, h2);
    lines.splice(firstH2, 0, decl, "");
    const after = lines.join(eol);
    writeFileSync(abs, after, "utf8");
    inserted++;

    const chk = checkFile(rel);
    rows.push([rel, oldSha, sha256(after), h2.join(" | "), chk.form, chk.ok ? "PASS" : "FAIL", chk.why]);
  }

  const header = ["page_path", "old_sha256", "new_sha256", "actual_h2_set", "declaration_form", "pass", "note"];
  const tsv = [header.join("\t"), ...rows.map((r) => r.join("\t"))].join("\n") + "\n";
  writeFileSync(resolve(REPO, RECORD), tsv, "utf8");
  console.log(`apply: scope=${SCOPE.length} inserted=${inserted} already-declared=${skipped}`);
  console.log(`record: ${RECORD}`);
  const fails = rows.filter((r) => r[5] !== "PASS");
  console.log(`post-apply self-check: PASS=${rows.length - fails.length} FAIL=${fails.length}`);
  for (const f of fails) console.log("  FAIL " + f[0] + " :: " + f[6]);
}

// ---- check ----------------------------------------------------------------
function check({ all, jsonOut }) {
  let targets;
  if (all) {
    targets = ARCH_DIRS.flatMap((d) =>
      readdirSync(resolve(REPO, d))
        .filter((f) => f.endsWith(".md"))
        .sort()
        .map((f) => `${d}/${f}`)
    );
  } else {
    targets = SCOPE;
  }
  const results = targets.map(checkFile);
  const ok = results.filter((r) => r.ok).length;
  const bad = results.filter((r) => !r.ok);
  console.log(`scope=${all ? "all-architecture-pages" : "28-pages"} files=${results.length} PASS=${ok} FAIL=${bad.length}`);
  for (const r of bad) {
    console.log(`  FAIL ${r.relPath}`);
    console.log(`       form=${r.form} why=${r.why}`);
    if (r.declared) console.log(`       declared=[${r.declared.join(" | ")}]`);
    if (r.actual) console.log(`       actual  =[${r.actual.join(" | ")}]`);
  }
  if (jsonOut) {
    writeFileSync(resolve(REPO, jsonOut), JSON.stringify(results, null, 2), "utf8");
    console.log("json: " + jsonOut);
  }
  process.exitCode = bad.length ? 1 : 0;
}

// ---- main -----------------------------------------------------------------
const argv = process.argv.slice(2);
if (argv.includes("--apply")) {
  apply();
} else if (argv.includes("--check")) {
  const i = argv.indexOf("--json");
  check({ all: argv.includes("--all"), jsonOut: i >= 0 ? argv[i + 1] : null });
} else {
  console.log("usage: node tools/_verify/arch-schema-1315.mjs --apply | --check [--all] [--json <out>]");
  process.exitCode = 2;
}
