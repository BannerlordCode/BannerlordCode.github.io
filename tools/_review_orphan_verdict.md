# Verdict on the "419 orphan" figure — CORRECTED RECORD (revision 3)

**Author:** worker-63 · **Scope:** `content/v1.4.5/**` · **Mode:** read-only throughout.
**Artifacts:** `tools/_review_v145_orphan419.txt` (91 paths) · this file.
**Helpers:** `%TEMP%/f8b/*.mjs` — written **outside** the repository. No existing tool modified.
**History:** rev 1 stated a claim that was challenged; rev 2 retracted it **wrongly**; rev 3 restores
it on re-measurement. Both errors are recorded below rather than edited away.

---

## 0. RETRACTION 1 IS WITHDRAWN — the claim was TRUE

I retracted this in rev 2. **That retraction was wrong, and I am reinstating the claim:**

> "All 34 appear in `data/navigation.json` + `section-tree.json` + `relkey_map.json`"

**Re-measured against the current 91-page candidate list. It is exactly correct:**

| file / field | of 91 | of the 34 `_index.md` | of the 57 leaves |
|---|---|---|---|
| `navigation.json` → `routes` (structured) | **34** | **34 / 34** | 0 / 57 |
| `navigation.json` raw text | 34 | 34 / 34 | 0 / 57 |
| `section-tree.json` raw text | 34 | **34 / 34** | 0 / 57 |
| `relkey_map.json` raw text | **91** | 34 / 34 | **57 / 57** |
| in **no** field of `navigation.json` | **57** | 0 | 57 / 57 |

So: **every one of the 34 index pages appears in all three files**, matching the lead's independent
count of "34 / 92 in routes" exactly. My original claim stands.

### Why it was nearly lost — a worked example worth keeping

The challenge that sent me into a false retraction spot-checked five names —
`ArmyCreationLogEntry`, `DefaultSkills`, `MissionGameStarter`, `GameModel`, `Equipment` — against
`navigation.json`, found none, and concluded my claim was refuted. **None of those five is in my
34.** The test was run against pages *outside* the set under discussion.

**A spot-check of the wrong sample is indistinguishable from a refutation.** Both errors this
session had the same shape:

- rev 2: I generalised "nav covers 0.9% of v1.4.5" into "my 34 are not in nav" — a **coverage
  statistic was used to refute a set-membership claim about 34 specific pages**.
- the challenge: five negative spot-checks outside the set were used to refute membership of the set.

The 0.9% coverage observation is **also true and not in conflict**: `navigation.json` has 464
routes covering 158 of 16,671 v1.4.5 pages. Both facts hold at once.

---

## 1. The sidebar question, stated precisely — it is POLICY, and it affects exactly ONE page

Rev 2 claimed sidebar-listing *rescued* pages and therefore built "Reading B". That conflated a
**fact** with a **policy**. Separated:

**FACT (measured).** Of the 34 candidates present in `navigation.json` `routes`, exactly **one** is
sidebar-visible:

```
sidebar-VISIBLE (group != null) : 1   ->  v1.4.5/en/xml-reference/_index.md   group="xml"
in file but group:null          : 33  ->  not rendered
```

`templates/macros/sidebar.html` matches `node.group == group_key`, and a `group: null` node under
`/<version>/<lang>/` is not rendered. So **presence in `navigation.json` is not sidebar
visibility** — 33 of the 34 are invisible exactly like the other 57. That distinction is what my
rev-1 analysis got wrong when it treated all 34 as sidebar-listed.

**POLICY (the boss owns this, and I am not deciding it):** does group-set nav membership in
`navigation.json` constitute reachability?

| ruling | repair-list size |
|---|---|
| **sidebar/nav does not count — current ruling** (孤儿就是孤儿：没有任何页面链到它) | **91** |
| nav membership counts as reachability | **90** (only `en/xml-reference/_index.md` leaves) |

So the live policy question is worth **exactly one page**, not 34. I report **91** as operative
because that is the current ruling, and flag the 1-page variant rather than presenting two equal
readings.

---

## 2. FROZEN BASIS + DRIFT — required on every figure

The tree moved repeatedly this session. Every number carries basis and drift.

```
commit sha : bb41caf9eeb2177ac61c874f15da6a5427050ba9
dirty      : 293 files under content/ at measure time
measured   : 2026-10-03T07:37:49.487Z
universe   : 39,015 files walked (.md 39,013 + 2 .txt); 2 .md have no frontmatter
```

| figure | value here | drift vs previous basis (07:33) | drift across session |
|---|---|---|---|
| v1.4.5 orphans | **4,386** | −11 | 4,506 → 4,386 (−120) |
| …marked | **4,295** | −10 | — |
| …**unmarked** | **91** | −1 | 34 → 91 (grew as markers were stripped) |
| …unmarked `_index.md` | **34** | 0 | **stable all session** |
| …unmarked leaf pages | **57** | −1 | 44 → 57 |
| gate-defect set (A), v1.4.5 | **906** | +11 | 829 (lead) → 906 |
| actionable set (B), v1.4.5 | **67** | −4 | 57 → 67 |

**The repair list grows as markers are stripped.** Marked 36,439 → 36,322 and unmarked 2,572 → 2,689
across ~17 minutes: the content lines are rewriting generated pages into hand-written ones, and a
just-de-marked page has no inbound link yet. **Unmarked ≠ suspicious; unmarked is mostly
"recently rewritten".**

---

## 3. VERDICT: **419 does not survive. The figure is 91.**

```
v1.4.5 orphans        4,386
  of which MARKED     4,295
  of which UNMARKED      91   <-- repair list
```

| Boss's chain | Measured | error |
|---|---|---|
| `orphans(4506)` | reproduces at measure time (now 4,386) | −120 drift |
| `overlap(4087)` | **4,295** | off by 208 |
| ⇒ 419 | ⇒ **91** | |

419 has been refuted at **every** scan this session (34 / 78 / 79 / 81 / 92 / 91) under **every**
marker definition. It was never near 419.

---

## 4. THE TWO-LAYER RULING — as implemented

### Layer 1 — REPAIR LIST, authority = the TOOL's definition
`tools/_review_v145_orphan419.txt` — **91 pages**: 34 `_index.md`, 57 leaf.
By area: `zh/api` ~82 · `en/api` ~7 · `en/xml-reference` 1 · `zh/architecture` 1.

### Layer 2 — GATE-DEFECT LIST: a defect to fix, NOT pages to repair
Set **(a)** — the inbound-link graph calls orphans what the tool calls linked: **906 in v1.4.5**.
Mechanism, from 868 classified instances at the previous basis (not from reading the resolver):

| mechanism | count | example |
|---|---|---|
| extension-less relative href `../../x/Y` | 682 | `campaign/AcceptCallToWarAgreementDecision.md` ← `../../campaign/AcceptCallToWarAgreementDecision` |
| directory-style href ending `/` | 119 | `campaign/GarrisonRecruitmentCampaignBehavior.md` ← `../GarrisonRecruitmentCampaignBehavior/` |
| mixed / other forms | 63 | — |
| **self-link only** — tool counts page→itself as inbound; a genuine tool defect | 4 | `en/api/final/_index.md` ← href `/` **from itself** |
| could not determine | **0** | — |

801/868 is pure path normalisation: the tool maps extension-less and `/`-suffixed hrefs onto the
sibling `.md` route; the graph does not. **Which resolution is correct is a lead decision, not mine.**

### Layer 3 — ACTIONABLE SET, outranks the repair list
Set **(b)** — **67 pages in v1.4.5** (69 site-wide): pass the orphan gate while **every** referrer is
itself an orphan, so nothing reaches them. Computed under the tool's own definition; the
union-with-graph variant (6,287) mixes two definitions and I do not treat it as meaningful.

**Caveat, stated:** this is a **1-hop** test. In `A → B → C` where `A` is an orphan but `B` is not,
`C` is reachable in two hops. **67 is an upper bound on true unreachability, not a proof.**
Transitive closure is the correct next step and I did not run it.

---

## 5. Repair order for the 91

**Referrers before referees.** Orphanhood is a property of *inbound* reachability; a link added to a
page nothing can reach satisfies the counter and changes nothing for a reader.

| parent status | pages |
|---|---|
| parent exists and is reachable | 84 |
| parent exists but is **itself an orphan** | **7** |
| parent missing | 0 |

**Tier 0 — 9 reachable parent files, 84 pages, no dependencies:**
`en/_index.md` (1) · `en/api/_index.md` (7) · `zh/_index.md` (1) · `zh/api/_index.md` (55) ·
`zh/api/campaign-ext/_index.md` (10) · `zh/api/core-extra/_index.md` (1) · `zh/api/gui/_index.md` (5) ·
`zh/api/mission-ext/_index.md` (4) · `zh/api/system/_index.md` (1)

**Tier 1 — 3 parent files, 7 pages. HARD DEPENDENCY: `zh/api/_index.md` must be edited first:**
`zh/api/boardgames/_index.md` (1) · `zh/api/storymode/_index.md` (2) · `zh/api/view/_index.md` (4)

**12 file edits for 91 pages.** Tier 1 is void until Tier 0 links those three parents.

---

## 6. What I could not determine

1. **Which link resolution is correct** for the 906-page gate defect. Largest number here; a
   policy decision.
2. **Transitive unreachability for set (b).** 1-hop only; 67 is an upper bound.
3. **Whether nav membership counts as reachability.** Boss's call; worth exactly 1 page (§1).
4. **Where `4087` came from.** Not reproducible under any definition tested. Current value 4,295.
5. **Why lead's unmarked list was 992** vs the 4-dialect 996. Does not affect the verdict.
6. **The repair list should be re-derived immediately before repair** — it drifted 34→91 this session.

---

## 7. My error history — five, each caught by distrusting a number

1. **False retraction (rev 2).** I generalised a 0.9% coverage statistic into a refutation of a
   set-membership claim about 34 specific pages, and retracted a **true** claim on a challenge that
   had spot-checked pages *outside* the set. Caught only by re-measuring after the challenge was
   withdrawn. **Cost: one wrong report revision, and a near-miss on discarding real signal.**
2. **`marked orphans: 0`** — impossible with 36k marked pages. My **route→`.md` inverse** assumed
   every `/`-ending route came from `_index.md`, so all leaf orphans mapped to nonexistent files and
   vanished. **This turned 91 into 34** — and 34 looked *good*: tidy, all-index, plausible as a small
   clean set. Fixed with an explicit `route→file` map (39,015 files → 39,015 routes, 0 collisions).
3. **`data/navigation.json` key mismatch** — keys carry a **leading `/`** my route lacked, so both
   nav probes matched nothing. Fixed with `key = '/' + route`.
4. **Mixed measurement bases** — one script read a stale orphan file from a previous run while
   computing markers fresh, producing `parent is an orphan: 0`, contradicting my own earlier 7.
5. **Broken text-membership re-test** — my `seg()` helper returned `""` for every `_index.md`, so a
   re-test reported all 34 absent from the nav text scan, briefly appearing to confirm the retraction.
   Caught because it contradicted the structured result. Fixed to use the directory name for
   `_index.md`.

Plus one earlier separate bug: `re.desc is undefined` when testing a function instead of an object,
making every dialect report 0 hits — which would have marked all 16,671 v1.4.5 pages unmarked.

**The pattern across all six: every one produced a believable wrong number.** That is the failure
mode that costs work, and it is why the re-measurements in this file are documented rather than
quietly replaced.

---

## 8. Discipline

- **Nothing under `content/**` created, edited, moved or deleted.** Read-only throughout. **No link
  edits made — not authorised.**
- No `git add` / `commit` / `checkout` / `restore`. No `zola build`. `git rev-parse HEAD` only.
- **`templates/`, `data/`, `config.toml`, `tools/lib/` and every existing tool untouched.**
  `data/*.json` mtimes verified **identical before and after**: `1786749773 / 1786724370 /
  1786749782 / 1786749751`.
- No existing tool modified; all helpers are new files under `%TEMP%/f8b/`.
- Writes: `tools/_review_v145_orphan419.txt` and `tools/_review_orphan_verdict.md` only.
- All 91 emitted paths verified to exist on disk, no duplicates, 34 `_index.md` + 57 leaf.