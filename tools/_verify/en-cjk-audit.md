# en-tree CJK Residue Audit

> **Line**: en-tree CJK residue fix (lead-31 / en-integrity)
> **Date**: 2026-10-08
> **Scope**: `content/**/en/**/*.md` (tracked files)
> **Verification source**: `C:/WorkSpace/Bannerlord/native-1.4.5/` (TaleWorlds.Native.c + TaleWorlds.Native.h)

---

## 0. Executive Summary

| Metric | Before fix | After fix |
|--------|-----------|-----------|
| Tracked en .md files | 18,236 | 18,236 |
| Pages with CJK | 2,368 | **2,359** |
| Class 1 (banner-only, auto-generated) | 2,122 | 2,122 |
| Class 2 (Chinese body — **FIXED**) | 9 | **0** |
| Class 3 (<20 CJK chars, judgment) | 237 | 237 |

**Result**: All 9 Class-2 pages rewritten to English (CJK=0). 2,359 CJK pages remain: 2,122 Class-1 (auto-generated banner, belongs to full-rewrite scope — this line does not fix) + 237 Class-3 (legitimate retention or minor residue, registered below).

---

## 1. Source-Tree Version Dimension

The 9 fixed pages live under `content/v1.3.15/en/native-1.3.15-src/`. The repo has **no 1.3.15 native tree**:

| Tree | TaleWorlds.Native.c lines | TaleWorlds.Native.h lines | Contains `rglString_base`? |
|------|---------------------------|---------------------------|---------------------------|
| native-1.2.9 | 2,322,575 | 38,649 | No (0 hits) |
| native-1.4.5 | 1,982,852 | 32,044 | **Yes (6,070 hits)** |

- The pages were generated 2026-04-09 from `tmp/native-1.3.15/` (per `COMPLETE-TYPES.md` header), which no longer exists.
- **native-1.4.5 is the closest available tree and contains these symbols**, but it is **not 1.3.15**.
- All symbol verification in this audit uses native-1.4.5. Assertions verified against 1.4.5 are annotated in the pages as "verified against the 1.4.5 native tree" or "unverified in this environment".
- **No 1.4.5 evidence is presented as 1.3.15 evidence.**

---

## 2. Class 1 — Auto-Generated Banner Pages (2,122 pages)

**Judgment**: These pages contain exactly one CJK line — the auto-generated warning banner:
```
> ⚠ 本页为自动生成的类参考，示例未经源码核对，勿直接引用其中的 API。
```
They are generated pages (match AGENTS.md generation fingerprints). Per the user's 2026-08-24 scope decision, they belong to the **full page-by-page handwritten rewrite** scope. **This line does not fix them** — they are registered here for attribution only.

**Count**: 2,122 pages across v1.3.0, v1.3.15, v1.4.5 en trees.

**Re-runnable command**:
```bash
node tools/_verify/tmp/cjk-scan.mjs
# Output: C1=2122
```

---

## 3. Class 2 — Chinese Body Pages (9 pages) — FIXED

All 9 pages under `content/v1.3.15/en/native-1.3.15-src/` had Chinese body prose in English pages. Each was rewritten to English (H0 handwritten), with facts/signatures/links preserved and verified against native-1.4.5.

| Page | CJK before | CJK after | Types | Unverifiable symbols (annotated) |
|------|-----------|-----------|-------|----------------------------------|
| rendering.md | 1,287 | 0 | 139 | rglSSR_fxnode, rglWater_body |
| scene.md | 922 | 0 | 118 | rglMesh_rec_render_thread_data, rglFace_mesh, rglFace_mesh_commit_task, rglFace_mesh_replay_data, rglMesh_seasonal_material, rglAsset_package_item_anim, Ship_visual_creator, rglGranite_scheduler (variant: rgGranite_scheduler) |
| physics.md | 582 | 0 | 63 | rglNull_physics_engine_world, cloth_instance, cloth_simulation, cloth_collider |
| animation.md | 453 | 0 | 39 | rglAnim_node_movement, Anim_node_capture |
| utilities.md | 322 | 0 | 41 | (FtlObject → ftlObject casing fix) |
| audio.md | 235 | 0 | 14 | none |
| mission.md | 205 | 0 | 13 | Ship_visual_creator |
| network.md | 187 | 0 | 10 | none |
| _index.md | 36 | 0 | 0 | (statistics/line numbers kept from original 1.3.15 decompile; annotated as unverifiable) |

### 3.1 Unverifiable Symbols — Classification

17 unique type names were not found in native-1.4.5's main .c/.h files. Of those:
- 1 (`rglGranite_scheduler`) found in native-1.4.5 `src/` split under variant spelling `rgGranite_scheduler`.
- 16 are absent from **both** native-1.2.9 and native-1.4.5.

**Classification: "unverifiable in this environment"** (not "defect"). Neither available tree is v1.3.15, so absence from both does not prove non-existence in v1.3.15. Symbols are **retained** in the pages with a per-page verification note; they are **not silently retained**.

**Re-runnable command**:
```bash
# Check a symbol against both trees:
grep -c "SYMBOL" C:/WorkSpace/Bannerlord/native-1.2.9/TaleWorlds.Native.dll.c
grep -c "SYMBOL" C:/WorkSpace/Bannerlord/native-1.4.5/TaleWorlds.Native.c
```

### 3.2 Casing Mismatch — Defect Category

A distinct defect category from "symbol missing": case-sensitive search can report an existing symbol as missing.

| Page | Heading (before) | Code block (before) | Real symbol | Fix |
|------|-----------------|--------------------|-------------|-----|
| utilities.md | `FtlObject` | `ftlObject::vftable` | `ftlObject` (280 hits in 1.4.5) | Heading → `ftlObject` |
| animation.md | `Holster_anim_system` | `Holster_script::vftable` | `Holster_anim_system` (1 hit in 1.4.5) | Code block → `Holster_anim_system::vftable` |

---

## 4. Class 3 — Under-20 CJK Chars (237 pages)

Pages with <20 CJK characters. Each was judged as legitimate retention (proper nouns, code strings, metadata annotations) or minor residue. Registered in the TSV with per-page judgment.

**Examples of legitimate retention**:
- `COMPLETE-TYPES.md:1087` — `// （占位示例已移除，见正文说明）` — code comment in a code block (15 CJK chars)
- `action-family.md:14` — `> Section schema: this page mirrors the zh twin's canonical seven sections (概述 / 心智模型 / ...)` — schema annotation (21 CJK chars)

**Re-runnable command**:
```bash
node tools/_verify/tmp/cjk-scan.mjs
# Output: C3=237
```

---

## 5. After Fix — Remaining CJK Pages

After fixing Class 2, the en tree has **2,359 CJK pages**:
- **2,122** Class 1 (auto-generated banner — full-rewrite scope, not this line)
- **0** Class 2 (fixed)
- **237** Class 3 (legitimate retention / minor residue — registered)

**Re-runnable command**:
```bash
node tools/_verify/tmp/cjk-scan.mjs
# Output: TOTAL=18236 CJK=2359 C1=2122 C2=0 C3=237
```

---

## 6. Audit Links Gate

| Reading | BROKEN_LINKS | FILES_WITH_BROKEN |
|---------|-------------|-------------------|
| After fix | 0 | 0 |

**Command**: `node tools/audit-links.mjs`

---

## 7. TSV Data

Per-page data (path, class, CJK count, judgment, note, verify command): `tools/_verify/en-cjk-audit.tsv` (2,359 rows + header).

---

## 8. Verification Commands (Re-runnable)

```bash
# Full CJK scan (all classes):
node tools/_verify/tmp/cjk-scan.mjs

# Per-page CJK count:
node -e "const fs=require('fs');const CJK=/[\u4e00-\u9fff\u3000-\u303f\uff00-\uffef]/;for(const p of ['rendering','scene','physics','animation','utilities','audio','mission','network','_index']){const t=fs.readFileSync('content/v1.3.15/en/native-1.3.15-src/'+p+'.md','utf8');const n=[...t].filter(c=>CJK.test(c)).length;console.log(p,'CJK='+n)}"

# Symbol verification against native-1.4.5:
grep -c "SYMBOL" C:/WorkSpace/Bannerlord/native-1.4.5/TaleWorlds.Native.c
grep -c "SYMBOL" C:/WorkSpace/Bannerlord/native-1.4.5/TaleWorlds.Native.h

# Symbol verification against native-1.2.9:
grep -c "SYMBOL" C:/WorkSpace/Bannerlord/native-1.2.9/TaleWorlds.Native.dll.c
grep -c "SYMBOL" C:/WorkSpace/Bannerlord/native-1.2.9/TaleWorlds.Native.dll.h

# Link gate:
node tools/audit-links.mjs
```
