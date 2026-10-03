# Repair of the 15 remaining set-(b) pages — evidence report

**Author:** worker-63 · **Authorisation:** boss, explicit.
**Mode of edits: hand-editing only.** 3 files, edited with the file-edit tool, after reading each
host file and every target page. **No script wrote, generated or bulk-inserted anything under
`content/**`.** Read-only scripts were used for validation, counting and link checking only.

---

## 0. RESULT — acceptance criterion MET

| metric | value |
|---|---|
| set (b) at authorisation | **15** |
| **pages that gained a non-orphan referrer** | **15 / 15** |
| **still lacking a non-orphan referrer** | **0** |
| set (b) site-wide, before → after | **78 → 0** |
| set (b) v1.4.5, before → after | **76 → 0** |
| parent files edited | **3** |
| links inserted | **14** |
| href **form-fixes** (counted separately) | **0** — see §4 |
| **EOL changes introduced** | **NONE** — see §3, called out loudly |
| broken links in my 3 files | **0** (whole file, pre-existing included) |

### Basis, and how far the tree moved during this round

```
HEAD  : 29a6946d35deb82d082d40b1263c58a8f50fa529   (unchanged this round — no new commits)
dirty : 114 files under content/ at final measurement   2026-10-03T08:18:46Z
```

| figure | round-1 baseline | round-2 start | final |
|---|---|---|---|
| total orphans | 4,416 | 4,313 | **4,312** |
| v1.4.5 orphans | 4,373 | 4,270 | **4,269** |
| set (b) | 78 | 15 | **0** |

**Tree movement during this round: −1 total orphan, −1 v1.4.5 orphan** — from the other line's
concurrent work, not mine (my 15 targets were never orphans, so my edits cannot lower the orphan
count at all; they can only clear set (b)). `HEAD` did not move this round.

**Final orphan count, repo counting authority** `node tools/_v146_orphan_check.mjs`:

```
total_pages=39015  orphans=4312
by_tree={"v1.3.0":2,"v1.3.15":27,"v1.4.5":4269,"v1.4.7":1,"v1.5.3":12,"":1}
```

---

## 1. Per-file evidence — BOTH numstat numbers, every file

Both numbers identical on all three files → **no line-ending damage anywhere**.

| file | `git diff --numstat --ignore-cr-at-eol` | `git diff --numstat` | raw vs ignore-cr | worktree EOL before → after | HEAD EOL |
|---|---|---|---|---|---|
| `content/v1.4.5/en/api/campaign/_index.md` | `+7  −0` | `+7  −0` | **identical** | 94/94 CRLF → 101/101 CRLF | 94/94 CRLF |
| `content/v1.4.5/zh/api/campaign/_index.md` | `+6  −0` | `+6  −0` | **identical** | 156/156 CRLF → 162/162 CRLF | 156/156 CRLF |
| `content/v1.5.3/zh/api/_index.md` | `+1  −0` | `+1  −0` | **identical** | 116 CRLF → 117 CRLF | 116 CRLF |

**Zero deletions in all three files.** Every change is a pure insertion.

---

## 2. 🔴 EOL STATUS — CALLED OUT EXPLICITLY

**All three files are CRLF in the worktree AND CRLF at `HEAD`. I did not normalise them, and I did
not introduce LF anywhere.**

I recorded the CRLF state of each file **before** editing, precisely so I could detect a conversion
I might have caused. Post-edit, all three remain fully CRLF, and the two numstat readings agree on
every file — which is the direct evidence that no line was re-terminated.

Git emits an informational warning on two of these files:

```
warning: in the working copy of 'content/v1.4.5/en/api/campaign/_index.md',
         CRLF will be replaced by LF the next time Git touches it
```

**This warning is pre-existing repo behaviour, not something I introduced.** `HEAD` stores these
files with CRLF; with `core.autocrlf = false` and no `.gitattributes`, git warns that a future
checkout would normalise them. I am flagging it rather than silently acting on it — **normalising
these files is a decision for the lead, and it would produce a large spurious diff.**

---

## 3. Which pages gained a non-orphan referrer, and from whom

All 15 verified individually: each now has ≥1 inbound link **from a page that is not an orphan**.

| page | non-orphan referrer |
|---|---|
| `v1.4.5/en/api/campaign/ArtisanOverpricedGoodsIssueBehavior.md` | `v1.4.5/en/api/campaign/_index.md` |
| `v1.4.5/en/api/campaign/CampaignOptions.md` | `v1.4.5/en/api/campaign/_index.md` |
| `v1.4.5/en/api/campaign/CampaignSceneNotificationHelper.md` | `v1.4.5/en/api/campaign/_index.md` |
| `v1.4.5/en/api/campaign/DefaultAgeModel.md` | `v1.4.5/en/api/campaign/_index.md` |
| `v1.4.5/en/api/campaign/EmpireConspiracySupportsSceneNotificationItemBase.md` | `v1.4.5/en/api/campaign/_index.md` |
| `v1.4.5/en/api/campaign/ProEmpireConspiracyBeginsSceneNotificationItem.md` | `v1.4.5/en/api/campaign/_index.md` |
| `v1.4.5/en/api/campaign/VisualTrackerManager.md` | `v1.4.5/en/api/campaign/_index.md` |
| `v1.4.5/zh/api/campaign/ArtisanOverpricedGoodsIssueBehavior.md` | `v1.4.5/zh/api/campaign/_index.md` |
| `v1.4.5/zh/api/campaign/CampaignSceneNotificationHelper.md` | `v1.4.5/zh/api/campaign/_index.md` |
| `v1.4.5/zh/api/campaign/EmpireConspiracySupportsSceneNotificationItemBase.md` | `v1.4.5/zh/api/campaign/_index.md` |
| `v1.4.5/zh/api/campaign/IAgentBehaviorManager.md` | `v1.4.5/zh/api/campaign/_index.md` |
| `v1.4.5/zh/api/campaign/ProEmpireConspiracyBeginsSceneNotificationItem.md` | `v1.4.5/zh/api/campaign/_index.md` |
| `v1.4.5/zh/api/campaign/VisualTrackerManager.md` | `v1.4.5/zh/api/campaign/_index.md` |
| `v1.5.3/zh/api/storymode/StoryModeNotableSpawnModel.md` | `v1.5.3/zh/api/_index.md` |
| `v1.5.3/zh/api/storymode/StoryModePartySizeLimitModel.md` | `v1.5.3/zh/api/_index.md` |

All three host pages were confirmed **non-orphans before I edited them**, so referrer-first
ordering is satisfied: every link I added points from an already-reachable page.

### Referrers used, and why these pages

The 15 were each reachable only from another orphan (1-hop dead-end chains), e.g.
`IAgentBehaviorManager.md ← campaign-ext/AgentBehaviorManager.md`. I linked each from the **area
index of the directory it lives in**, which is the non-orphan hub for that area:

- `v1.4.5/{en,zh}/api/campaign/_index.md` → the 13 campaign pages
- `v1.5.3/zh/api/_index.md` → the 2 StoryMode pages. **`v1.5.3/zh/api/storymode/_index.md` does not
  exist** (v1.5.3 has only `zh/`, `zh/api/`, `zh/architecture/` index pages), so the API root index
  was the correct non-orphan host. I verified that before choosing it.

---

## 4. Form-fixes — **0 this round**

I ran a diagnostic first, per the `storymode` precedent, to check whether any of the 15 already had
a present-but-non-resolving href in its area index. **Result: all 15 were `NEEDS-INSERT`; none had
a `_index`-suffixed or otherwise malformed href.** So there was nothing to correct and **no
duplicates were created**. Form-fixes are therefore **0**, counted separately from the 14 insertions.

The `storymode` precedent stands unchanged and remains the only instance found: `./Quests/_index`
→ `./Quests/` and `./GameComponents/_index` → `./GameComponents/`, 4 hrefs, fixed in round 1.

---

## 5. Target verification before linking (labels match content)

I read each target's own frontmatter before writing its link label. **11 of the 15 are
auto-generated stubs** whose `description` is only a self-declaration
(`Auto-generated class reference for X.` / `X 的自动生成类参考。`); **4 carry real content**:

| target | real content? |
|---|---|
| `en|campaign/ArtisanOverpricedGoodsIssueBehavior.md` | **yes** — the `OnCheckForIssueEvent` registrar for the merchant price-fixing issue |
| `zh|campaign/ArtisanOverpricedGoodsIssueBehavior.md` | **yes** — same, ZH |
| `v1.5.3 StoryModeNotableSpawnModel.md` | **yes** — village/village-notability spawn model |
| `v1.5.3 StoryModePartySizeLimitModel.md` | **yes** — party-size caps for story caravans |
| the other 11 | no — inventory stubs |

**This shaped the labels, deliberately.** In `en/api/campaign/_index.md` I separated the one deep
page from the six stubs and wrote:

> `ArtisanOverpricedGoodsIssueBehavior` — … this one is a full deep page.
> `Inventory stubs:` CampaignOptions · CampaignSceneNotificationHelper · …

because that page states its own curation standard ("an existing file is not evidence of handwritten
coverage") and linking stubs unqualified would have contradicted it. The other 15 links are bare
type names, which is the existing house style in those alphabetical lists.

---

## 6. Minimality

Link lines only. No prose rewritten, no reformatting, no frontmatter touched, no existing link
altered. The 6 zh-campaign links went into their existing alphabetical groups (`### A`, `C`, `E`,
`I`, `P`, `V`) in alphabetical position; the v1.5.3 link is one new row in the existing 3-column
task table; the en links are one new subsection.

---

## 7. My own errors, by name

1. **My link checker reported 149 broken links, all three files "100% broken".** That was my bug:
   I passed the file path **including** the leading `content/` segment into the route resolver, so
   every relative link resolved one directory too high — including pre-existing links like
   `./Hero`. I caught it because a 100% failure rate on files already verified healthy is not a
   plausible result, rewrote the checker with content-relative keys, and the true answer came back
   **0 broken**. This is the same failure family as the route→`.md` inverse bug that turned 91 into
   34 in an earlier task: **path handling, producing a confident wrong number.**
2. **My first `sed` attempt to fix that checker silently did nothing** (the pattern did not match),
   and the broken checker ran a second time before I noticed the file was unchanged. I then rewrote
   the file outright instead of trying another pattern substitution.
3. **Not an error, recorded because it nearly became one:** I began to write the v1.5.3 links into
   a `storymode/_index.md`, then checked existence first and found that file does not exist. Had I
   not checked, I would have created a file to make a link resolve — inventing content structure.
4. **Process note:** I record the "whose change was the `zh/api/_index.md` +93 −68" question as
   **closed and not mine**, exactly as instructed. I did not spend effort on it and it did not
   inform anything in this round.

Carried forward for honesty: the false retraction of the navigation.json claim, and the
route→`.md` inverse bug — both from earlier tasks in this line, both documented in
`_review_orphan_verdict.md` rather than edited away.

---

## 8. Discipline

- **`content/**` edits: hand-authored only.** 3 files, file-edit tool, each host file and every
  target read first. **No script wrote or inserted anything under `content/**`.**
- No `git add` / `commit` / `checkout` / `restore`. No `zola build`.
- `data/`, `templates/`, `config.toml` untouched.
- Read-only scripts wrote only to `%TEMP%/f8b/`.
- Writes outside `content/**`: this file only.
- **No EOL normalisation, in either direction.** Recorded before, verified after.