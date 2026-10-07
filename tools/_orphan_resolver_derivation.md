# Orphan-gate resolver — derivation from source

Replaces the behavioural fit. Everything below is read out of the code or measured by running the
gate's own functions; the two are labelled separately.

**Pinned `HEAD` = `29a6946d35deb82d082d40b1263c58a8f50fa529`** (unchanged for the whole of this
session). **The worktree did move underneath me and that is separate from HEAD:**

| observation | gate `orphans=` | note |
|---|---:|---|
| first run | 4313 | |
| all later runs | 4312 | one page deleted/added by another line, HEAD unmoved |

`node tools/_v146_orphan_check.mjs` at the end of this session, verbatim output:

```
total_pages=39015  orphans=4312
by_tree={"v1.3.0":2,"v1.3.15":27,"v1.4.5":4269,"v1.4.7":1,"v1.5.3":12,"":1}
v1.4.6_orphans=0
```

> **The "906-page gate-defect set" is not reproducible at this HEAD.** `v1.4.6_orphans=0` — v1.4.6 has
> **zero** orphans. `tools/_review_orphan419.txt` (the 91-path list) **does not exist** in the tree any
> more. The 5,281-path `tools/_review_graph_orphans.txt` still exists and all 5,281 paths still
> resolve on disk, but **I could not reproduce its number from the link graph** (see §6).

---

## 1. How link targets are extracted

`tools/_v146_orphan_check.mjs:19`

```js
const linkRe=/\[[^\]]*\]\(([^)\s]+)\)/g;
```

used at `:21-22`:

```js
let m; const re=new RegExp(linkRe.source,'g');
while((m=re.exec(t))){const tg=res(from,m[1]); if(tg&&routes.has(tg))inbound.set(tg,inbound.get(tg)+1);}
```

**Recognised:** inline markdown links `[label](href)` only, where `href` contains **no whitespace and
no `)`**. The label may not contain `]`. The scan is over the raw file text, frontmatter included, and
it is global — no line anchoring.

**Ignored, by construction:**

| form | why | site-wide count (measured) |
|---|---|---:|
| `[t](u "title")` | `[^)\s]+` stops at the space, then `\)` is required → no match | **0** |
| reference links `[t][ref]`, `[ref]: url` | different shape | 0 found |
| autolinks `<url>` | different shape | — |
| HTML `<a href=…>` | different shape | — |
| bare URLs, wikilinks `[[x]]` | different shape | — |

The "titled links cannot match" claim is a property of the regex, and it costs nothing today because
there are **0** titled links site-wide (measured). The `href` may still contain a fragment: `res`
strips it.

## 2. How a relative href becomes a route

Two functions, and **both sides of the comparison are normalised to the same shape**.

Page → route, `:15`:

```js
const routeOf=(rel)=>{const q=rel.split(path.sep).join('/').replace(/\.md$/,'');return q.endsWith('_index')?q.replace(/_index$/,''):q+'/';};
```

href → route, `:16`:

```js
function res(from,href){
  if(/^(https?:|#|mailto:)/.test(href))return null;
  const h=href.split('#')[0];
  if(!h)return null;
  const s=from.split('/').filter(Boolean);
  for(const x of h.split('/')){if(x==='.'||x==='')continue;if(x==='..')s.pop();else s.push(x);}
  const r=s.join('/');
  return r.endsWith('/')?r:r+'/';
}
```

So the rule in code is: **a route is always a slash-terminated directory path; `.md` is stripped and a
trailing `_index` is collapsed into its directory on the page side; on the href side every resolved
path gets a `/` appended.** Consequences, each of which is a direct corollary of those two lines:

| href form | gate result | why |
|---|---|---|
| `../campaign/Hero` | **matches** `campaign/Hero.md` | `res` appends `/`; `routeOf` appends `/` |
| `../campaign/Hero/` | **matches** | both already slash-terminated |
| `../campaign/Hero.md` | **DROPPED** | `res` yields `…/Hero.md/`; no page produces that route |
| `../campaign/_index` | **DROPPED** | `res` yields `…/campaign/_index/`; `routeOf` emits `…/campaign/` |
| `../campaign/` | **matches** | directory route |
| `../../../` (to root) | **DROPPED** | resolves to the empty root, which is not a page route |

Measured site-wide: the gate resolved **139,332** hrefs to a live route (76,027 extensionless,
63,305 directory-style); it **dropped 214** `_index`-form hrefs and **564** hrefs that resolve to no
route; **0** `.md`-form hrefs exist, so that hole is currently empty.

## 3. Is `group: null` in `data/navigation.json` consulted?

**No — the file is never opened.** The gate imports only `node:fs` and `node:path` (`:3-4`), walks
`SITE='content'` (`:5-7`) and reads only files it walked. Measured: the strings `navigation` and
`group` occur **0 times** in the gate source. Nav reachability is simply outside its model: a page that
is only reachable through `navigation.json` and has zero markdown inbound links counts as an orphan.

For reference, `data/navigation.json` parses and carries 464 `routes` entries — consistent with the
already-ruled-out finding that it covers a small fraction of the tree.

## 4. Does a self-link count as a referrer?

**Yes.** Line 22 increments `inbound` for *every* href that resolves to an existing route, and the
loop at `:20` iterates over all pages including the target's own file. There is no
`if (tg !== from)` guard anywhere in the file.

Measured: **184 pages link to themselves** and the gate reports **0** of them as orphans. So a page
whose only inbound link is its own self-link is **counted as linked, not as an orphan**. That
contradicts the "4 self-link-only = genuine tool defect" item: those pages cannot be orphans by the
gate's own rule. (It is still worth noting that a self-link is not evidence of real navigation — the
gate cannot distinguish the two — but it is not an orphan-counting defect.)

## 5. Does the 906 / 868 delta survive? — Yes, as ONE rule, and it is path normalisation

worker-63's fitted account says the delta is path normalisation. **That is supported**, and it can be
stated exactly rather than fitted, because the delta partitions into exactly two buckets that are the
same rule seen from two sides, with **zero unexplained cases**.

I implemented the gate's `routeOf`/`res`/`linkRe` **verbatim** (character-for-character, in
`tools/_orphan_resolver_probe.mjs`) and, as a control, a naive resolver that differs in exactly one
way: it resolves to a **file path** (`X` → `X.md`) instead of a directory route.

| | orphans |
|---|---:|
| the gate | **4312** |
| naive file-path resolver (control) | **4812** |
| naive says ORPHAN but gate says LINKED | **500** |
| gate says ORPHAN but naive says LINKED | **0** |

**The gate's link set is a strict superset of the naive resolver's.** It never loses a link the
control caught. Every one of the 500 is explained:

| bucket | pages | rule (file:line) |
|---|---:|---|
| **A** href ends with `/`, target is a directory | **483** | `res` `:16` keeps the trailing slash; `routeOf` `:15` maps `X/_index.md` → `X/`. The naive control turned `../foo/` into `foo.md`, which does not exist. |
| **B** href is extensionless and the target page is an `_index.md` | **17** | `routeOf` `:15` collapses `_index` into the directory, so `../foo` *is* the route of `foo/_index.md`. The control looked for `foo.md`. |
| **C** unexplained | **0** | — |

Worked examples, both measured:

- A: `v1.3.0/en/api/campaign/agentorigins/_index.md` ← linked from
  `v1.3.0/en/api/campaign/bartersystem/_index.md` with `"./../agentorigins/"`
- B: `v1.3.15/en/api/campaign-ext/dialogs/_index.md` ← linked from
  `v1.3.15/en/api/campaign-ext/encounters/_index.md` with `"../dialogs"`

**So: the mechanism is that the gate's universe is a set of *directory routes*, and `_index.md` is
indistinguishable from its directory.** Any graph that resolves to file paths disagrees with it on
exactly the directory-style links, and on nothing else. That is the whole delta, and it is 500/500
accounted for.

**I found no fourth explanation.** Everything that is not a live route is either one of the 214
dropped `_index` hrefs or one of the 564 root/dangling hrefs, and neither contributes an orphan:
of the gate's 4312 orphans, **0** have an `_index`-style referrer, so fixing the `_index` parsing bug
would change the orphan count by **zero**.

### The real (but zero-impact) parser defect

Line 16's unconditional `+ '/'` means `_index`-form hrefs can never resolve, and line 15's collapse
means a `_index.md` page cannot be linked by name. Measured: **10 distinct href strings, 214
occurrences, 0 resolved**, dominated by `../../_index` (136) and `../_index` (32) — i.e. ordinary
"up to the parent index" breadcrumbs that are silently discarded. It is a genuine defect in the
extractor, and it is worth fixing, but it is **not** the gate-defect story and it changes no orphan
count today.

## 6. Where I disagree with worker-63, and what I could not establish

- **The 906/868 pair does not reproduce.** At this HEAD the gate reports `v1.4.6_orphans=0`, the
  91-path `tools/_review_orphan419.txt` is **absent from the tree**, and my verbatim re-implementation
  of the gate's own resolver agrees with the gate to the page (4312 = 4312).
- **The 5,281-path candidate list is not reproducible from the link graph.** I built three naive
  conventions to try to reproduce it and got **4812 / 4839 / 4811** orphans, overlapping the shipped
  list by 4411 / 4434 / 4411, leaving **847–870 entries in the list that no link-graph convention I
  tried produces**. So the delta between "that list" and the gate cannot be derived from the list
  alone; **the list's own construction is unresolved.** That is the honest limit of this derivation.
- **My own errors during this work, recorded because they nearly produced a false mechanism:** I first
  copied `walk` as `walk(d,a)` instead of `walk(p,a)` (infinite recursion), then wrote a `resRaw` that
  omitted `.filter(Boolean)` on `from` — which double-slashed every href from an `_index` page and
  produced a nonsense 34,203-page delta, and then inverted a set condition. Each was caught only
  because the numbers contradicted the gate's own output.

## 7. Secondary: CRLF (independent gate problem, still live)

- `core.autocrlf` = **false**, `core.eol` and `core.safecrlf` unset.
- `.gitattributes` **exists** and sets `* text=auto eol=lf` plus binary and `*.patch` rules. Its own
  comment block documents the exact incident the lead measured
  (`content/v1.4.5/zh/api/_index.md` LF→CRLF, diffstat `+93 −68` for a real change of +13/−0).
- **That specific file is fixed:** `content/v1.4.6/zh/api/_index.md` is LF-only in the worktree,
  byte-identical to HEAD, and `git diff --numstat` for it is empty.
- **But the class of problem is not fixed.** `git ls-files --eol` over `content/`:

| index / worktree | files |
|---|---:|
| `lf/lf` | 37,948 |
| **`lf/crlf`** | **996** |
| `crlf/crlf` | 64 |
| `lf/mixed` | 5 |
| `mixed/mixed` | 2 |

**996 tracked files are LF in the index and CRLF in the worktree**, under an attribute that says
`eol=lf`. Each will present as a whole-file rewrite on the next commit, exactly the failure mode that
made a verifier read a diffstat as a rewrite. `tools/` has a further **68** files in the same state.
(CRLF stored *in* the repository: 64 content files + 16 tools files — those survive normalisation and
will keep diffing badly until re-normalised.)

So: the `.gitattributes` rule is right, but the worktree has not been re-normalised, and the
diffstat noise is still there.

## 8. MEASURED vs INFERRED

**MEASURED** (each number produced by running code, at the pinned HEAD): gate output 4312 orphans
and `v1.4.6_orphans=0`; the 500/0 set relation; the 483/17/0 partition; 139,332 resolved hrefs
(76,027 + 63,305); 214 `_index` hrefs dropped, 0 resolved; 564 hrefs resolving to no route; 0 `.md`
hrefs and 0 titled links site-wide; 184 self-linked pages, 0 of them orphans; 0 occurrences of
`navigation`/`group` in the gate; `navigation.json` has 464 routes; naive-variant orphan counts
4812/4839/4811 and their 4411/4434/4411 overlaps; the CRLF/EOL table; `core.autocrlf=false` and the
`.gitattributes` contents.

**INFERRED**: that `_review_graph_orphans.txt` was produced by some naive convention I did not
reproduce (its construction is unresolved); that the 906/868 figures were measured against an earlier
worktree state (they are not reproducible now); the A/B bucket boundary being "one rule seen from two
sides" is my reading of the code, though the two buckets are individually measured.

**Not attempted** (out of scope by instruction, and I did not spend time on them): sidebar/navigation
reachability, Zola shortcodes, and re-deriving the DIR/`_index` href form — though the last of those
is now measured from the other side: 10 distinct strings / 214 occurrences, all dropped by the gate,
zero orphan impact.