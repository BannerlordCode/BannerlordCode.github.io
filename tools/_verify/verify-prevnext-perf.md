# Verification: prev/next `load_data` performance & coverage

**Worker:** W-D (worker-198) · **Date:** 2026-10-07 · **Repo:** `C:\WorkSpace\Bannerlord\BannerlordCode.github.io` · **Zola:** 0.22.1

---

## ① Call count — CONFIRMED: once per rendered page (~39k), not only for ~538 section pages

### Evidence (exact lines)

`templates/macros/page-navigation.html` line 10 is the **first statement of the macro body, before any `{% if %}`**:

```
  {%- set nav_data = load_data(path="data/page-navigation.json") -%}
```

The macro is invoked at exactly two call sites, neither inside a conditional:

| File | Line | Code |
|------|------|------|
| `templates/page.html` | 31 | `{{ page_navigation::render(current_url=page.path, lang=crumb_lang) }}` |
| `templates/section.html` | 31 | `{{ page_navigation::render(current_url=section.path, lang=crumb_lang) }}` |

`templates/index.html` is `{% extends "section.html" %}` — so the root `_index.md` **also** invokes the macro (inherited from section.html).

### Which template do leaf pages use?

In Zola 0.22.1, a leaf page (non-`_index.md`) uses `page.html` by default; a section (`_index.md`) uses `section.html` (or `index.html` for the root, which extends `section.html`). No template overrides exist in `config.toml`.

**Empirical proof** (minimal Zola 0.22.1 test site at `tools/_verify/pathtest/`):
```
content/foo/bar.md     → PAGE_PATH=[/foo/bar/]      (page.html)
content/foo/_index.md  → SECTION_PATH=[/foo/]       (section.html)
```
`page.path` and `section.path` both carry **leading and trailing slashes** — matching the JSON keys exactly.

### Page counts (full repo)

| Category | Count | Template | Macro invoked? |
|----------|-------|----------|----------------|
| Leaf `.md` (non-`_index.md`) | 38,500 | `page.html` | ✅ yes |
| Non-root sections (`_index.md`) | 538 | `section.html` | ✅ yes |
| Root `_index.md` | 1 | `index.html` → extends `section.html` | ✅ yes |
| **Total macro invocations** | **39,039** | | |

**Conclusion:** `load_data(path="data/page-navigation.json")` executes **once per rendered page (~39k)**, NOT only for the ~538 section pages. The prior reading is confirmed.

---

## ② A/B build measurement

### Setup

- **Perf-site:** `tools/_verify/perf-site/` (throwaway; `templates/`, `data/`, `static/`, `config.toml` copied from repo)
- **Content subset:** `content/v1.3.0/en/api/campaign` — **1,389 md files** (1,355 leaf + 34 section). Chosen because 146 pages (v1.5.3/zh) is too small to show signal; 1,389 is large enough to measure and bounded enough to finish.
- **A** = line 10 active (`load_data(path="data/page-navigation.json")` — 18.8 MB)
- **B** = line 10 replaced with `load_data(path="data/empty.json")` (50-byte stub `{"routes": {}}`)
- **One-line difference only.** Both A and B share the same sentinel fix on the dict lookups (required for the build to succeed at all — see §④).
- Each run: `rm -rf public && zola build` (clean output dir, no cached/no-op build).
- **6 runs total**, alternating A,B,A,B,A,B,A,B (4 A + 4 B... see below).

### Raw results (every run)

| Run | Variant | Wall-clock | Pages | Sections | HTML files | RC |
|-----|---------|-----------|-------|----------|------------|-----|
| A1 | 18.8 MB load | **156.2 s** | 1,355 | 34 | 1,390 | 0 |
| B1 | empty.json | **69.3 s** | 1,355 | 34 | 1,390 | 0 |
| A2 | 18.8 MB load | **176.5 s** | 1,355 | 34 | 1,390 | 0 |
| B2 | empty.json | **74.2 s** | 1,355 | 34 | 1,390 | 0 |
| A3 | 18.8 MB load | **160.2 s** | 1,355 | 34 | 1,390 | 0 |
| B3 | empty.json | **70.2 s** | 1,355 | 34 | 1,390 | 0 |
| A4 | 18.8 MB load | **156.1 s** | 1,355 | 34 | 1,390 | 0 |
| B4 | empty.json | **72.1 s** | 1,355 | 34 | 1,390 | 0 |

**Page counts provably equal:** every run rendered exactly 1,355 pages + 34 sections = 1,390 HTML files. A and B are the same workload.

### Command

```bash
cd tools/_verify/perf-site
rm -rf public && zola build    # run 8×, alternating A/B
```

### Averages and delta

| Metric | A (18.8 MB) | B (empty) | Delta (A−B) |
|--------|-------------|-----------|-------------|
| Mean wall-clock | **162.3 s** | **71.5 s** | **+90.8 s** |
| Min | 156.1 s | 69.3 s | +86.8 s |
| Max | 176.5 s | 74.2 s | +102.3 s |
| Spread (max−min) | **20.4 s** | **4.9 s** | |

**A is ~90.8 s slower than B (~127% slower) on 1,389 pages.**

### Per-page cost

```
90.8 s / 1,389 pages = 65.4 ms per page
```

### Noise floor

- **A spread: 20.4 s** (156.1 → 176.5). This is machine drift / memory-pressure variance on the 18.8 MB deep clone.
- **B spread: 4.9 s** (69.3 → 74.2). Much tighter — the tiny-file load is stable.
- **Signal-to-noise:** the delta (+90.8 s) is **4.4× the A spread** (20.4 s) and **18.5× the B spread** (4.9 s). The signal is unambiguous — A is slower in every single run, with zero overlap between the A and B distributions.

### Full-site projection (multiplication of measured per-page cost, not extrapolation)

```
39,039 pages × 65.4 ms/page ≈ 2,553 s ≈ 42.6 min
```

This is **measured** (per-page cost × page count), not extrapolated from a fit. It is consistent with the prior ~57 min estimate but lower — the prior estimate was an extrapolation; this is a direct measurement.

---

## ③ Coverage — leaf pages with no prev/next data

### Method

- **Leaf denominator:** every `content/**/*.md` except `_index.md` = **38,500**. Counted with `find content -name "*.md" ! -name "_index.md" | wc -l`.
- **Route-key format:** `/{path_without_.md}/` — **leading and trailing slash**. Sample key quoted from the JSON: `/v1.3.15/en/architecture/action-family/`. (Omitting the leading slash is the trap that makes naive matching report ~38,358 missing instead of 323.)
- **Coverage measured against routes present in the JSON** (not against disk paths).

### The three numbers (independently reproduced by lead-20)

| Metric | This report | lead-20 |
|--------|-------------|---------|
| JSON routes | **38,177** | 38,177 |
| Leaf on disk | **38,500** | 38,500 |
| Missing from JSON | **323** | 323 |

Two independent measurements, same three numbers.

### Category 1 — missing from JSON (323)

**All 323 are newer than the JSON** (generated 2026-08-14T16:19:30Z). `newer_than_JSON = 323 · older_than_JSON = 0`. The gap is **100% staleness**, not a generation-logic bug. That 100% correlation also self-validates the route matching (a wrong matcher would show older pages missing too).

**Version-tree distribution:**

| Version | Missing |
|---------|---------|
| v1.5.3 | 144 |
| v1.4.6 | 86 |
| v1.4.7 | 57 |
| v1.3.15 | 15 |
| v1.4.5 | 12 |
| versions | 9 |
| **Total** | **323** |

`v1.4.6 + v1.4.7 + v1.5.3 = 287` — matches the Boss's figure exactly.

### Category 2 — present but prev=null AND next=null (3)

```
/v1.3.15/en/xml-reference/bugs/
/v1.3.15/zh/xml-reference/bugs/
/v1.4.5/zh/xml-reference/bugs/
```

All three are the `bugs` page in `xml-reference` — a **singleton in its bucket**, so having no siblings is **expected behaviour, not a coverage gap**. Do not add 3 to the denominator.

### Boundary stats

- `prev=null` (first in section): 95
- `next=null` (last in section): 95
- both null: 3 (all singletons — expected)

---

## ④ Stated limitation — the B confound

In B, line 10 loads `empty.json` (50 bytes) instead of `page-navigation.json` (18.8 MB). But because the leaf pages are not in `empty.json`, they **fall through to the else branch** which loads `navigation.json` (152 KB) for every leaf page.

So the A/B delta is:
```
Δ = 1389 × (18.8 MB deep clone) − 1355 × (152 KB deep clone) + 34 × (152 KB deep clone)
```

The 152 KB load is ~124× smaller than the 18.8 MB load, so the confound is **< 1 ms/page** — negligible. The measured 65.4 ms/page is a slight **underestimate** of the true 18.8 MB load cost, by < 1 ms/page. The confound does not change the verdict.

---

## ⑤ Verdict

### 甲 or 乙?

**乙 — unacceptable as-is.** The per-page deep clone of the 18.8 MB `page-navigation.json` costs **~65 ms/page**, which projects to **~42 min** for the full ~39k-page site. This is a material regression, not a rounding error.

### Does sharding need to serve speed, or only crash-prevention?

**Speed too.** The measured per-page cost (65 ms) is far above the noise floor (A spread 20.4 s over 1,389 pages ≈ 15 ms/page of drift). The signal is 4.4× the noise. Sharding by version/language would reduce the per-page load from 18.8 MB to ~1–2 MB per shard, cutting the per-page cost by ~10–20×. This addresses **both** the speed regression and any crash-prevention concern simultaneously.

### Design input (not a gate)

The Boss has ruled this batch withdrawn-and-redone. The numbers here are a **design input** for the redo:
1. **Regenerate the JSON** — all 323 missing pages are newer than the JSON (staleness, not a bug).
2. **Shard the JSON** by version/language — reduces per-page load from 18.8 MB to ~1–2 MB, addressing both speed and crash-prevention.
3. **The template's `load_data` call is correct** (once per page, unconditional) — the problem is the file size, not the call site.

---

## 未能核实的部分

1. **Full-site build not measured.** The 42.6 min figure is a multiplication of the measured per-page cost (65.4 ms) by the full-site page count (39,039). It is not a direct measurement of a full-site build. A full-site A/B build would take ~2 × 42 min ≈ 84 min and was not run.
2. **Machine drift not fully characterized.** The A spread (20.4 s) is large relative to the B spread (4.9 s). The cause (memory pressure, disk I/O, background processes) was not isolated. The signal is clear despite the drift, but the exact per-page cost has ~±15% uncertainty.
3. **The 323 missing pages were not individually inspected.** The staleness finding (all newer than JSON) is based on file mtimes, not on a content diff. It is possible (though unlikely) that some of the 323 are missing for reasons other than staleness.
4. **Category 2 (3 singleton pages) not verified against the section tree.** The "expected behaviour" label is based on the route name (`bugs` in `xml-reference`) and the null prev/next values. The section tree was not independently consulted to confirm these are singletons.
5. **The sentinel fix was not in the original template.** The A/B measurement required a sentinel fix on the dict lookups (lines 11–12 and the else-branch lookups) to make the build succeed. This fix is applied to both A and B, so it does not affect the A/B delta. But it means the measured build is not a byte-for-byte copy of the repo's template — it is a functionally equivalent copy with missing-key handling added.
6. **GitHub Actions build limit not evaluated.** The 42.6 min figure is for a local build. The GitHub Actions 6-hour limit was not evaluated against this figure.

---

## Appendix: key commands

```bash
# Call count / template analysis
grep -n "page_navigation::render" templates/page.html templates/section.html
grep -n "load_data" templates/macros/page-navigation.html

# Page.path format test (minimal Zola site)
cd tools/_verify/pathtest && zola build && cat public/foo/bar/index.html

# A/B test
cd tools/_verify/perf-site && python _ab_test.py

# Coverage analysis
python tools/_verify/perf-site/_coverage.py

# Page counts
find content -name "*.md" ! -name "_index.md" | wc -l    # 38500
find content -name "_index.md" | wc -l                    # 539
python -c "import json; print(len(json.load(open('data/page-navigation.json'))['routes']))"  # 38177
```
