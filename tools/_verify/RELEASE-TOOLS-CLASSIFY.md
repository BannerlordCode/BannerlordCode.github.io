# RELEASE-TOOLS-CLASSIFY — tools/ artifact classification for checkpoint

**Repo:** `C:\WorkSpace\Bannerlord\BannerlordCode.github.io` · **HEAD:** `55658f4d9d0450335f2b12e160bfb8c9b37fbc57`
**Source list (read-only):** `tools/_verify/RELEASE-SNAPSHOT-20261007T043351Z.txt`, lines 7+
**Prepared by:** worker-91 · **Date:** 2026-10-07

## 1. Commands run and their output

### Command 1 — extract non-content paths

```sh
SNAP=tools/_verify/RELEASE-SNAPSHOT-20261007T043351Z.txt
tail -n +7 "$SNAP" | grep -v ' content/' > tools/_verify/.tg-paths.txt
wc -l tools/_verify/.tg-paths.txt
```

Output:

```
112 tools/_verify/.tg-paths.txt
```

Cross-check: `tail -n +7` yields 3509 lines; 3397 contain ` content/`; 0 blank lines; 112 remain = **10 ` M` + 102 `??`**.

> **Count note:** the brief said "114". The brief's own itemization (10 tracked-modified + 94 untracked under tools/ + 9 root items) sums to 113, and the actual root-level `??` entries are **8** (`CONTRACT.md`, `.rev145tmp/`, `_probe_af.mjs`, `_tmp_ab.mjs`, `_zola_after_commit.log`, `_zola_check_orphan.log`, `_zola_full_build.log`, `nul`), giving 10 + 94 + 8 = **112**. The "114" figure is off by 2; the extraction itself is consistent.

### Command 2 — measure each path (size, mtime, first line)

```sh
while read -r xy p; do
  sz=$(stat -c '%s' "$p" 2>/dev/null || echo NA)
  mt=$(stat -c '%Y' "$p" 2>/dev/null || echo NA)
  fl=$(head -c 120 "$p" 2>/dev/null | tr '\n' ' ' | head -c 120)
  echo "$xy|$p|$sz|$mt|$fl"
done < tools/_verify/.tg-paths.txt > tools/_verify/.tg-data.txt
wc -l tools/_verify/.tg-data.txt
```

Output (three attempts, per boss #9822 instruction to stop re-measuring):

| Attempt | Result |
|---|---|
| Run 1 (plain loop) | **10 rows**, then timed out at 120 s (hung on `.rev145tmp/` — `head` on a directory blocks) |
| Run 2 (per-file `timeout`, dirs skipped, `nul`/`.rev145tmp/` skipped, >1 MB skipped) | **+19 rows (29 total)**, then timed out at 115 s |
| Run 3 (same guards) | **0 new rows**, timed out at 110 s |
| Run 4 (bulk `stat` of all remaining paths, no content reads) | **0 rows**, timed out at 60 s — at least one unmeasured path makes even `stat` hang |

**Final measured: 29 of 112 rows.** The remaining **83 rows are NOT MEASURED** (size/mtime/first-line) and are classified below by name-based rules of the brief. `nul` and `.rev145tmp/` are classified STRAY by boss #9822 inspection facts, not re-measured.

## 2. Classification table

`status` = snapshot status (` M` tracked-modified, `??` untracked). `mtime` = raw Unix epoch from `stat`. First lines truncated to ~100 chars as measured.

### 2a. Measured rows (29)

| status | path | size | mtime | first line | class |
|---|---|---|---|---|---|
| M | tools/_DEAD-MEMBER-LIST.md | 271159 | 1791041570 | `# 死成员清单 · v1.4.5 · 80 页全量 - 清单来源：tools/_deadmember-scope.txt（80 页，en 40 + zh 40 对` | DECIDE |
| M | tools/_LINK-GATE-20261003.md | 37276 | 1791042427 | `--- title: 链接可解析性门禁 · 全量报告 2026-10-03 created: 2026-10-03 owner: lead-4 ---` | DECIDE |
| M | tools/_NAV-BASELINE.md | 45121 | 1791041716 | `# 导航基线证据（_NAV-BASELINE.md） > 本文件是**基线锚**，不是进度汇报。后续验收判据一律` | DECIDE |
| M | tools/_NAV-SECTION-INDEX-WRITE-DESIGN.md | 14435 | 1791037757 | `<!-- SALVAGE COPY — 2026-10-03。本文件的正文原封不动来自 tools/_NAV-ARCHITECTURE.md， 该文件被另一` | DECIDE |
| M | tools/_nav-auditlinks-raw.txt | 7903 | 1791032041 | `FILES=39025 TOTAL_LINKS=140297 AUDIT_MODE=url BROKEN_LINKS=186 RESOLVE_OK_URL=139925 RESOLVE_OK_FILE=104951` | DECIDE |
| M | tools/lib/content-write-freeze.mjs | 22456 | 1791126072 | `// tools/lib/content-write-freeze.mjs // HARD PREMISE (boss, user-directed): every page under content/ must be writte` | DECIDE |
| M | tools/lib/handwritten-policy.mjs | 22238 | 1791129244 | `// WHAT deep_pass MEANS — READ THIS` | DECIDE |
| M | tools/nav-orphans.mjs | 13578 | 1791039355 | `// nav-orphans.mjs —— 孤儿页普查（只读，与 tools/_v146_orphan_check.mjs 口径逐字相同）。` | DECIDE |
| M | tools/nav-section-index.mjs | 42579 | 1791128102 | `// nav-section-index.mjs —— 把桶目录下所有子页补进该桶 _index.md 的【机械子页清单】。` | DECIDE |
| M | tools/tests/handwritten-policy.test.mjs | 19087 | 1791128767 | `import test from 'node:test'; import assert from 'node:assert/strict';` | DECIDE |
| ?? | .rev145tmp/ | 267 MB (scratch dir — contents NOT measured, per boss #9822; dir inode stat = 0) | 1791120932 (dir inode) | `<DIR>` | STRAY |
| ?? | CONTRACT.md | 121373 | 1791157152 | `⇒ 凡禁止某类工具时，必须附带那类工具曾经产出的【具体错数】。 **★ 补一条（2026-` | EVIDENCE |
| ?? | _probe_af.mjs | 594 | 1791001412 | `import {pathToFileURL} from 'url';import path from 'path'; const af = await import(pathToFileURL(path.resolve('tools/li` | STRAY |
| ?? | _tmp_ab.mjs | 2428 | 1791135683 | `import { readFileSync, readdirSync, statSync } from 'node:fs'; import { execSync } from 'node:child_process';` | STRAY |
| ?? | _zola_after_commit.log | 101 | 1790962560 | `Building site... -> Creating 38477 pages (141 orphan) and 535 sections Done in 1260.8s. ZOLA_EXIT=0` | STRAY |
| ?? | _zola_check_orphan.log | 10586 | 1790962799 | `Checking site... -> Site content: 38477 pages (141 orphan), 535 sections WARN Orphan page found: /v1.5.3/zh/api/storymo` | STRAY |
| ?? | _zola_full_build.log | 96 | 1790948531 | `Building site... -> Creating 38453 pages (136 orphan) and 535 sections Done in 1487.2s. EXIT=0` | STRAY |
| ?? | nul | 6003958 | 1791122349 | `{  "tool": "tools/_src-manifest.mjs",  "note": "Mechanical evidence only: member / signature / file:line / access. No pr` | STRAY |
| ?? | tools/CONTRACT-INDEX.md | 6034 | 1791149211 | `# CONTRACT.md 主题 → 章节 对照表 > **这张表只做两件事：让读者按「这条规则防的是什么失` | EVIDENCE |
| ?? | tools/_BACKLOG-NOT-MINE.md | 2600 | 1791140742 | `# 待审存量登记（B 组）— 产出方不是 lead-5 的页 **登记规则**（boss #6561 裁定，与 §4i 同款` | EVIDENCE |
| ?? | tools/_BC-CITATION-AUDIT-20261004.md | 9226 | 1791134183 | `# B/C citation audit — v1.4.5/en/api, 52-page population **Scan timestamp:** 2026-10-04T16:58Z` | EVIDENCE |
| ?? | tools/_DUPLICATE-PAGE-PAIRWISE.md | 54251 | 1791044114 | `# 45 组同名跨桶页 — 身份二元判定 - **(a)** = 两个不同类型恰好同名（同名合法） - **(b)** =` | EVIDENCE |
| ?? | tools/_NAV-BASELINE.md.bak | 30671 | 1791032539 | `# 导航基线证据（_NAV-BASELINE.md） > 本文件是**基线锚**，不是进度汇报。后续验收判据一律` | STRAY |
| ?? | tools/_RECONSTRUCTION-LEDGER.md | 4353 | 1791128730 | `# 损坏字符重建登记（Reconstruction Ledger） **为什么有这份文件**：页面是给读者看的，不该` | EVIDENCE |
| ?? | tools/_arbitrate-file-field.mjs | 1628 | 1791138867 | `// 分歧裁决：取三页 **File:** 行的【原始字节】，用该页自己声明的路径做 statSync。` | STRAY |
| ?? | tools/_census-145zh.mjs | 2280 | 1791121569 | `// 只读普查尺 —— 量 content/v1.4.5/zh/api/** 的门禁形状。` | STRAY |
| ?? | tools/_census-613-split.mjs | 3955 | 1791136190 | `// 把「613 页 FILE_UNRESOLVED」按成因拆开 —— 实测，不是推算。只读。` | STRAY |
| ?? | tools/_census-claim-evidence-ab.mjs | 3950 | 1791140442 | `// 把无证据断言按【归属】拆开。` | STRAY |
| ?? | tools/_census-claim-evidence.mjs | 4719 | 1791135642 | `// 产出复查清单的那一步：只判「有没有出示证据」，不判对错。` | STRAY |

### 2b. NOT MEASURED rows (83) — classified by name-based rules of the brief

All rows below: size = NOT MEASURED, mtime = NOT MEASURED, first line = NOT MEASURED (the stat/head loop hangs on at least one of these paths; boss #9822 directed stopping and marking gaps).

| status | path | size | mtime | first line | class |
|---|---|---|---|---|---|
| ?? | tools/_census-delivered.mjs | NOT MEASURED | NOT MEASURED | NOT MEASURED | STRAY |
| ?? | tools/_census-file-unresolved.mjs | NOT MEASURED | NOT MEASURED | NOT MEASURED | STRAY |
| ?? | tools/_census-howto-tiers.mjs | NOT MEASURED | NOT MEASURED | NOT MEASURED | STRAY |
| ?? | tools/_census-nav-test.mjs | NOT MEASURED | NOT MEASURED | NOT MEASURED | STRAY |
| ?? | tools/_census-negative-claims.mjs | NOT MEASURED | NOT MEASURED | NOT MEASURED | STRAY |
| ?? | tools/_census-no-behaviour.mjs | NOT MEASURED | NOT MEASURED | NOT MEASURED | STRAY |
| ?? | tools/_census-nodesc-shapes.mjs | NOT MEASURED | NOT MEASURED | NOT MEASURED | STRAY |
| ?? | tools/_census-v2.mjs | NOT MEASURED | NOT MEASURED | NOT MEASURED | STRAY |
| ?? | tools/_census-zh-pool.mjs | NOT MEASURED | NOT MEASURED | NOT MEASURED | STRAY |
| ?? | tools/_check-exact-paths.mjs | NOT MEASURED | NOT MEASURED | NOT MEASURED | STRAY |
| ?? | tools/_check_shell_banner.mjs | NOT MEASURED | NOT MEASURED | NOT MEASURED | STRAY |
| ?? | tools/_cite-audit.mjs | NOT MEASURED | NOT MEASURED | NOT MEASURED | STRAY |
| ?? | tools/_cite-contract.mjs | NOT MEASURED | NOT MEASURED | NOT MEASURED | STRAY |
| ?? | tools/_cite-explore.mjs | NOT MEASURED | NOT MEASURED | NOT MEASURED | STRAY |
| ?? | tools/_contract-dupes.mjs | NOT MEASURED | NOT MEASURED | NOT MEASURED | STRAY |
| ?? | tools/_contract-merge-inventory.mjs | NOT MEASURED | NOT MEASURED | NOT MEASURED | STRAY |
| ?? | tools/_contract-merge-plan.md | NOT MEASURED | NOT MEASURED | NOT MEASURED | EVIDENCE |
| ?? | tools/_contract-pairs.mjs | NOT MEASURED | NOT MEASURED | NOT MEASURED | STRAY |
| ?? | tools/_contract-patch-4v.mjs | NOT MEASURED | NOT MEASURED | NOT MEASURED | STRAY |
| ?? | tools/_contract-patch-4w2.mjs | NOT MEASURED | NOT MEASURED | NOT MEASURED | STRAY |
| ?? | tools/_contract-patch-4w3.mjs | NOT MEASURED | NOT MEASURED | NOT MEASURED | STRAY |
| ?? | tools/_contract-patch-4yz.mjs | NOT MEASURED | NOT MEASURED | NOT MEASURED | STRAY |
| ?? | tools/_contract-patch-w4w5.mjs | NOT MEASURED | NOT MEASURED | NOT MEASURED | STRAY |
| ?? | tools/_contract_section_gate.mjs | NOT MEASURED | NOT MEASURED | NOT MEASURED | DECIDE |
| ?? | tools/_count-exact-open.mjs | NOT MEASURED | NOT MEASURED | NOT MEASURED | STRAY |
| ?? | tools/_crlf-audit.mjs | NOT MEASURED | NOT MEASURED | NOT MEASURED | STRAY |
| ?? | tools/_deadmember-negative-checks.mjs | NOT MEASURED | NOT MEASURED | NOT MEASURED | STRAY |
| ?? | tools/_doc-check.mjs | NOT MEASURED | NOT MEASURED | NOT MEASURED | STRAY |
| ?? | tools/_docs-review-2026-10-04-r2.md | NOT MEASURED | NOT MEASURED | NOT MEASURED | STRAY |
| ?? | tools/_docs-review-2026-10-04-r3.md | NOT MEASURED | NOT MEASURED | NOT MEASURED | STRAY |
| ?? | tools/_docs-review-2026-10-04-r4.md | NOT MEASURED | NOT MEASURED | NOT MEASURED | STRAY |
| ?? | tools/_docs-review-2026-10-04-r5.md | NOT MEASURED | NOT MEASURED | NOT MEASURED | STRAY |
| ?? | tools/_docs-review-2026-10-04-r6.md | NOT MEASURED | NOT MEASURED | NOT MEASURED | STRAY |
| ?? | tools/_docs-review-2026-10-04-r7.md | NOT MEASURED | NOT MEASURED | NOT MEASURED | STRAY |
| ?? | tools/_docs-review-2026-10-04-r8.md | NOT MEASURED | NOT MEASURED | NOT MEASURED | STRAY |
| ?? | tools/_docs-review-2026-10-04.md | NOT MEASURED | NOT MEASURED | NOT MEASURED | STRAY |
| ?? | tools/_docs-review-TEMPLATE.md | NOT MEASURED | NOT MEASURED | NOT MEASURED | EVIDENCE |
| ?? | tools/_engine-batch.mjs | NOT MEASURED | NOT MEASURED | NOT MEASURED | STRAY |
| ?? | tools/_en-pool.mjs | NOT MEASURED | NOT MEASURED | NOT MEASURED | STRAY |
| ?? | tools/_en-pool2.mjs | NOT MEASURED | NOT MEASURED | NOT MEASURED | STRAY |
| ?? | tools/_evidence-lead8-bigtrees-census-20261004.md | NOT MEASURED | NOT MEASURED | NOT MEASURED | EVIDENCE |
| ?? | tools/_evidence-lead8-small-trees-20261004.md | NOT MEASURED | NOT MEASURED | NOT MEASURED | EVIDENCE |
| ?? | tools/_EVIDENCE-selfcheck-20261004/ | NOT MEASURED (dir) | NOT MEASURED | NOT MEASURED | EVIDENCE |
| ?? | tools/_fffd-scan.mjs | NOT MEASURED | NOT MEASURED | NOT MEASURED | STRAY |
| ?? | tools/_group_by_field.mjs | NOT MEASURED | NOT MEASURED | NOT MEASURED | STRAY |
| ?? | tools/_lead7_gate.mjs | NOT MEASURED | NOT MEASURED | NOT MEASURED | DECIDE |
| ?? | tools/_lead7_linkfix2.json | NOT MEASURED | NOT MEASURED | NOT MEASURED | DECIDE |
| ?? | tools/_ledger-attribute-36.mjs | NOT MEASURED | NOT MEASURED | NOT MEASURED | STRAY |
| ?? | tools/_ledger-authoritative.mjs | NOT MEASURED | NOT MEASURED | NOT MEASURED | STRAY |
| ?? | tools/_ledger-delivered.mjs | NOT MEASURED | NOT MEASURED | NOT MEASURED | STRAY |
| ?? | tools/_ledger-reconcile.mjs | NOT MEASURED | NOT MEASURED | NOT MEASURED | STRAY |
| ?? | tools/_ledger-v2.mjs | NOT MEASURED | NOT MEASURED | NOT MEASURED | STRAY |
| ?? | tools/_ledger-v4.mjs | NOT MEASURED | NOT MEASURED | NOT MEASURED | STRAY |
| ?? | tools/_nav-apply-batch4.txt | NOT MEASURED | NOT MEASURED | NOT MEASURED | DECIDE |
| ?? | tools/_nav-batch4-list.txt | NOT MEASURED | NOT MEASURED | NOT MEASURED | DECIDE |
| ?? | tools/_nav-orphans-final.json | NOT MEASURED | NOT MEASURED | NOT MEASURED | DECIDE |
| ?? | tools/_nav-orphans-now.json | NOT MEASURED | NOT MEASURED | NOT MEASURED | DECIDE |
| ?? | tools/_nav-orphans-report.json | NOT MEASURED | NOT MEASURED | NOT MEASURED | DECIDE |
| ?? | tools/_nav-report-cicompat.json | NOT MEASURED | NOT MEASURED | NOT MEASURED | DECIDE |
| ?? | tools/_nav-report-dbg.json | NOT MEASURED | NOT MEASURED | NOT MEASURED | DECIDE |
| ?? | tools/_nav-report-final.json | NOT MEASURED | NOT MEASURED | NOT MEASURED | DECIDE |
| ?? | tools/_nav-report-strict.json | NOT MEASURED | NOT MEASURED | NOT MEASURED | DECIDE |
| ?? | tools/_nav-report.json | NOT MEASURED | NOT MEASURED | NOT MEASURED | DECIDE |
| ?? | tools/_orphan_resolver_derivation.md | NOT MEASURED | NOT MEASURED | NOT MEASURED | EVIDENCE |
| ?? | tools/_orphan_resolver_probe.mjs | NOT MEASURED | NOT MEASURED | NOT MEASURED | STRAY |
| ?? | tools/_review_frozen_A.md | NOT MEASURED | NOT MEASURED | NOT MEASURED | STRAY |
| ?? | tools/_review_frozen_B.jsonl | NOT MEASURED | NOT MEASURED | NOT MEASURED | STRAY |
| ?? | tools/_review_frozen_B.md | NOT MEASURED | NOT MEASURED | NOT MEASURED | STRAY |
| ?? | tools/_scan-multi-cs.mjs | NOT MEASURED | NOT MEASURED | NOT MEASURED | STRAY |
| ?? | tools/_selfcheck-consistency.mjs | NOT MEASURED | NOT MEASURED | NOT MEASURED | STRAY |
| ?? | tools/_spotcheck-64.mjs | NOT MEASURED | NOT MEASURED | NOT MEASURED | STRAY |
| ?? | tools/_src-manifest.mjs | NOT MEASURED | NOT MEASURED | NOT MEASURED | DECIDE |
| ?? | tools/_template-classify.mjs | NOT MEASURED | NOT MEASURED | NOT MEASURED | STRAY |
| ?? | tools/_unit-profile.mjs | NOT MEASURED | NOT MEASURED | NOT MEASURED | STRAY |
| ?? | tools/_verify-alias-table.mjs | NOT MEASURED | NOT MEASURED | NOT MEASURED | DECIDE |
| ?? | tools/_verify-review34.mjs | NOT MEASURED | NOT MEASURED | NOT MEASURED | DECIDE |
| ?? | tools/_verify-w36-claims.mjs | NOT MEASURED | NOT MEASURED | NOT MEASURED | DECIDE |
| ?? | tools/_verify/ | NOT MEASURED (dir) | NOT MEASURED | NOT MEASURED | EVIDENCE |
| ?? | tools/_worker83_linkcheck.mjs | NOT MEASURED | NOT MEASURED | NOT MEASURED | STRAY |
| ?? | tools/_worker86_check.mjs | NOT MEASURED | NOT MEASURED | NOT MEASURED | STRAY |
| ?? | tools/_worker86_links.mjs | NOT MEASURED | NOT MEASURED | NOT MEASURED | STRAY |
| ?? | tools/data/_ledger-bookings.json | NOT MEASURED | NOT MEASURED | NOT MEASURED | EVIDENCE |
| ?? | tools/nav-links-verify-overviews.mjs | NOT MEASURED | NOT MEASURED | NOT MEASURED | DECIDE |

## 3. Counts per class

| class | measured | NOT MEASURED | total |
|---|---|---|---|
| EVIDENCE | 6 | 8 | **14** |
| STRAY | 13 | 57 | **70** |
| DECIDE | 10 | 18 | **28** |
| **total** | **29** | **83** | **112** |

Classification rules applied (from the brief + boss #9822):
- `_zola_*.log` → STRAY (build logs) — 3 files, all measured.
- `nul` → STRAY — measured 6,003,958 bytes, first line confirms it is the JSON manifest dump accidentally produced by `tools/_src-manifest.mjs` redirection (matches boss #9822 exactly).
- `.rev145tmp/` → STRAY — 267 MB scratch index, gitignored (boss #9822); contents not measured.
- 10 tracked-modified `tools/` files → DECIDE — "actively being written by the navigation line".
- Release ledgers / audit reports / durable docs under `tools/_verify/` and named `*-LEDGER*`, `*-AUDIT*`, `*-INDEX*`, `CONTRACT*`, `*_TEMPLATE*`, `tools/data/_ledger-bookings.json` → EVIDENCE.
- One-off `_`-prefixed analysis/census/probe/scratch scripts, `.bak` backups, iterative `_docs-review-*` / `_review_frozen_*` notes, `_worker*` scratch → STRAY.
- In-flight line outputs (nav / lead-7 / verify / contract-gate) → DECIDE.

## 4. Proposed checkpoint grouping

**Proposal: one commit containing exactly the 14 EVIDENCE paths** (safe-to-checkpoint release evidence; everything else left uncommitted):

```
chore(tools): checkpoint release evidence ledgers, audit reports, and contract index
```

Paths:

```
CONTRACT.md
tools/CONTRACT-INDEX.md
tools/_BACKLOG-NOT-MINE.md
tools/_BC-CITATION-AUDIT-20261004.md
tools/_DUPLICATE-PAGE-PAIRWISE.md
tools/_RECONSTRUCTION-LEDGER.md
tools/_EVIDENCE-selfcheck-20261004/        # dir — NOT MEASURED; glance before commit
tools/_contract-merge-plan.md
tools/_docs-review-TEMPLATE.md
tools/_evidence-lead8-bigtrees-census-20261004.md
tools/_evidence-lead8-small-trees-20261004.md
tools/_orphan_resolver_derivation.md
tools/_verify/                            # dir — release ledgers (incl. RELEASE-SNAPSHOT-*.txt)
tools/data/_ledger-bookings.json
```

Caveats for the committer:
- `tools/_verify/` must be committed **excluding** this task's own dotfile scratch: `.tg-paths.txt`, `.tg-data.txt`, `.tg-done.txt`, `.tg-have.txt`, `.tg-have2.txt`, `.tg-bulk.txt` (delete them or add to `.gitignore`).
- `tools/_EVIDENCE-selfcheck-20261004/` is NOT MEASURED — verify contents before committing.
- `CONTRACT.md` / `tools/CONTRACT-INDEX.md` are contract-line docs; classified EVIDENCE as durable governance documents, but the contract line may still be editing them — confirm with that line first.

## 5. DECIDE list (28 — needs a human/line-owner call)

**Tracked-modified, actively written by the navigation line (10):**

| path | reason |
|---|---|
| tools/_DEAD-MEMBER-LIST.md | actively being written by the navigation line |
| tools/_LINK-GATE-20261003.md | actively being written by the navigation line |
| tools/_NAV-BASELINE.md | actively being written by the navigation line |
| tools/_NAV-SECTION-INDEX-WRITE-DESIGN.md | actively being written by the navigation line |
| tools/_nav-auditlinks-raw.txt | actively being written by the navigation line |
| tools/lib/content-write-freeze.mjs | actively being written by the navigation line |
| tools/lib/handwritten-policy.mjs | actively being written by the navigation line |
| tools/nav-orphans.mjs | actively being written by the navigation line |
| tools/nav-section-index.mjs | actively being written by the navigation line |
| tools/tests/handwritten-policy.test.mjs | actively being written by the navigation line |

**Untracked, in-flight line outputs/tooling (18) — all NOT MEASURED:**

| path | reason |
|---|---|
| tools/_nav-apply-batch4.txt | navigation-line output, in-flight |
| tools/_nav-batch4-list.txt | navigation-line output, in-flight |
| tools/_nav-orphans-final.json | navigation-line output, in-flight |
| tools/_nav-orphans-now.json | navigation-line output, in-flight |
| tools/_nav-orphans-report.json | navigation-line output, in-flight |
| tools/_nav-report-cicompat.json | navigation-line output, in-flight |
| tools/_nav-report-dbg.json | navigation-line output, in-flight |
| tools/_nav-report-final.json | navigation-line output, in-flight |
| tools/_nav-report-strict.json | navigation-line output, in-flight |
| tools/_nav-report.json | navigation-line output, in-flight |
| tools/nav-links-verify-overviews.mjs | navigation-line tooling, in-flight |
| tools/_lead7_gate.mjs | lead-7 line in-flight write |
| tools/_lead7_linkfix2.json | lead-7 line in-flight output |
| tools/_verify-alias-table.mjs | verify-line tooling, untracked, not measurable in this pass |
| tools/_verify-review34.mjs | verify-line tooling, untracked, not measurable in this pass |
| tools/_verify-w36-claims.mjs | verify-line tooling, untracked, not measurable in this pass |
| tools/_contract_section_gate.mjs | possible durable gate tooling from the contract line; untracked, not measurable |
| tools/_src-manifest.mjs | durable tooling vs one-off; produced the accidental `nul` artifact; not measurable |

## 6. Gaps and anomalies (explicit)

- **83 of 112 rows NOT MEASURED** (size/mtime/first-line). The measurement loop hangs — `head` on directories blocks, and at least one unmeasured path makes even bulk `stat` hang (run 4 produced 0 rows in 60 s). Per boss #9822, measurement was stopped and gaps are marked instead of retried.
- **Brief count discrepancy:** brief said 114 entries; extraction yields 112 (10 ` M` + 102 `??`). The brief's itemization sums to 113; actual root `??` entries are 8, not 9. See §1.
- **`nul` first line (measured):** `{"tool": "tools/_src-manifest.mjs", "note": "Mechanical evidence only: member / signature / file:line / access...` — matches boss #9822's description of the accidental redirection artifact. Classified STRAY.
- **`.rev145tmp/`:** directory-inode stat only (size 0, mtime 1791120932); the 267 MB contents were not measured, per boss #9822. Classified STRAY (gitignored scratch index).
- **Scratch files created by this task** (all STRAY, not in the snapshot, must not be committed): `tools/_verify/.tg-paths.txt`, `.tg-data.txt`, `.tg-done.txt`, `.tg-have.txt`, `.tg-have2.txt`, `.tg-bulk.txt`.
