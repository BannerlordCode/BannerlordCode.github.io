# RELEASE-CONTENT-CLASSIFY-v130en

Read-only classification of the tracked-modified files under `content/v1.3.0/en/` listed in the frozen snapshot `tools/_verify/RELEASE-SNAPSHOT-20261007T043351Z.txt` (taken 2026-10-07T04:33:51Z).

**Scope:** 2389 files, all under `content/v1.3.0/en/api/` (no non-api paths present).
**Constraints honored:** no `git add/commit/checkout/stash/reset`; nothing under `content/` modified; this is the only file written.

## Raw commands run

```bash
# 0. Repo state / snapshot size
git status --short | head -5 && git branch --show-current && wc -l tools/_verify/RELEASE-SNAPSHOT-20261007T043351Z.txt
#   -> branch main; snapshot 3515 lines

# 1. Extract modified paths from the frozen snapshot
grep -c '^ M content/v1.3.0/en/' tools/_verify/RELEASE-SNAPSHOT-20261007T043351Z.txt
#   -> 2389
grep '^ M content/v1.3.0/en/' tools/_verify/RELEASE-SNAPSHOT-20261007T043351Z.txt | sed 's/^ M //' > /tmp/v130en_paths.txt && wc -l /tmp/v130en_paths.txt
#   -> 2389

# 2. Top-level dir check (all under api/)
awk -F/ '{print $4}' /tmp/v130en_paths.txt | sort | uniq -c | sort -rn
#   -> 2389 api

# 3. Bucket breakdown
awk -F/ '{print $5}' /tmp/v130en_paths.txt | sort | uniq -c | sort -rn
#   -> mission-ext 1103, campaign-ext 630, viewmodel 433, campaign 74, mission 52, localization 51, system 45, core-extra 1

# 4. Per-file numstat (two failed attempts recorded, then success)
git diff --numstat -- $(cat /tmp/v130en_paths.txt | tr '\n' ' ')
#   -> FAILED exit 126: "Argument list too long"
git diff --numstat --pathspec-from-file=/tmp/v130en_paths.txt
#   -> FAILED exit 129: "error: invalid option: --pathspec-from-file=C:/Users/.../v130en_paths.txt" (git 2.52.0.windows.1)
cat /tmp/v130en_paths.txt | xargs -n 200 git diff --numstat -- > /tmp/v130en_numstat.txt
#   -> SUCCESS, 2389 lines

# 5. Per-bucket aggregation
awk -F'\t' '{split($3,p,"/"); b=p[5]; f[b]++; a[b]+=$1; d[b]+=$2} END {for (b in f) printf "%s|%d|%d|%d\n", b, f[b], a[b], d[b]}' /tmp/v130en_numstat.txt | sort -t'|' -k2 -rn

# 6. Size summary (numstat-derived; see --stat note below)
#    TOTAL: 2389 files, +17641, -1240
cat /tmp/v130en_paths.txt | xargs -n 200 git diff --shortstat --   # per-batch; awk parse of output failed, numstat totals used instead

# 7. Top-10 largest diffs
sort -t$'\t' -k1,1nr /tmp/v130en_numstat.txt | head -10

# 8. Representative diff samples (git diff -- <path> | head -N)
git diff -- content/v1.3.0/en/api/mission-ext/BattleMoraleModel.md | head -60        (+125/-3, largest)
git diff -- content/v1.3.0/en/api/mission-ext/IUdpNetworkHandler.md | head -60         (+120/-6)
git diff -- content/v1.3.0/en/api/mission-ext/CustomBattleAgentLogic.md | head -30    (+99/-3)
git diff -- content/v1.3.0/en/api/core-extra/ICommunicator.md | head -55              (+94/-4)
git diff -- content/v1.3.0/en/api/campaign-ext/AdoptHeroAction.md | head -50          (campaign-ext rewrite)
git diff -- content/v1.3.0/en/api/campaign/AcceptCallToWarAgreementDecision.md | head -45  (campaign rewrite)
git diff -- content/v1.3.0/en/api/viewmodel/WorkshopPercentageSelectorItemVM.md | head -40  (banner-only)
git diff -- content/v1.3.0/en/api/mission/Target.md content/v1.3.0/en/api/localization/VoiceObject.md | head -60  (banner-only)
git diff -- content/v1.3.0/en/api/campaign-ext/AccessObject.md | head -35             (banner-only)
git diff -- content/v1.3.0/en/api/mission-ext/MissionMultiplayerGameModeDuelClient.md | head -40  (mission-ext median, banner-only)

# 9. Banner-vs-rewrite mix per bucket
for b in mission-ext campaign-ext campaign; do
  awk -F'\t' -v b="$b" '$3 ~ "^content/v1.3.0/en/api/"b"/" {if ($1==2 && $2==0) banner++; else {big++; if($1>max)max=$1}} END {print b": banner="banner" rewrite="big" max+="max}' /tmp/v130en_numstat.txt
done
# Uniformity check of the four small buckets:
awk -F'\t' '$3 ~ /\/(viewmodel|mission|localization|system)\// && ($1 != 2 || $2 != 0)' /tmp/v130en_numstat.txt | wc -l
#   -> 0 (every file in those buckets is exactly +2/-0)

# 10. Banner presence check in rewrite vs banner files
git diff -- <rewrite file> | grep -c '⚠'    # -> 0 for BattleMoraleModel, IUdpNetworkHandler, AdoptHeroAction, CustomBattleAgentLogic
git diff -- <banner file>  | grep -c '⚠'    # -> 1 for WorkshopPercentageSelectorItemVM

# 11. Section-header check in rewrites
git diff -- <rewrite file> | grep -E '^\+## '  # -> "+## How to use" (Overview/Mental Model rewritten in place, no new headers there)
```

No command exceeded 90 s. All 2389 files were covered by the numstat aggregation; no partial coverage.

## Bucket classification

| bucket | files | +lines | -lines | apparent change type | page-by-page explainable? (yes/no/unknown) | evidence |
|---|---|---|---|---|---|---|
| mission-ext | 1103 | +11867 | −532 | **MIXED**: 941 files banner-only (+2/−0); 162 files full section rewrite (up to +125/−3) | banner part: **yes**; rewrite part: **no** (template-uniform but bespoke content) | numstat mix count (cmd 9); samples BattleMoraleModel.md, IUdpNetworkHandler.md, CustomBattleAgentLogic.md (rewrites) vs MissionMultiplayerGameModeDuelClient.md (banner) |
| campaign-ext | 630 | +1608 | −374 | **MIXED**: 600 banner-only; 30 rewrites (up to +59) | banner part: **yes**; rewrite part: **no** | cmd 9; samples AdoptHeroAction.md (rewrite) vs AccessObject.md, AccessObjectResult.md (banner) |
| viewmodel | 433 | +866 | −0 | banner-only (100%, zero exceptions) | **yes** | cmd 9 uniformity check (0 non-+2/−0 files); WorkshopPercentageSelectorItemVM.md sample |
| campaign | 74 | +2910 | −330 | mostly full section rewrite (72/74; median +51); 2 banner-only | **no** (template-uniform, bespoke content) | cmd 9; AcceptCallToWarAgreementDecision.md sample |
| mission | 52 | +104 | −0 | banner-only (100%) | **yes** | cmd 9; Target.md sample |
| localization | 51 | +102 | −0 | banner-only (100%) | **yes** | cmd 9; VoiceObject.md sample |
| system | 45 | +90 | −0 | banner-only (100%) | **yes** | cmd 9 (TownHelpers.md identified as +2/−0 via numstat) |
| core-extra | 1 | +94 | −4 | full section rewrite (single file, ICommunicator.md) | **no** (one file, bespoke) | ICommunicator.md sample |

## Totals

- **Files:** 2389 (all under `content/v1.3.0/en/api/`)
- **Insertions:** +17641
- **Deletions:** −1240
- **Buckets:** 8
- **Change-type split:** 2124 files banner-only insertion (581 in the four small buckets + 941 mission-ext + 600 campaign-ext + 2 campaign); 265 files section rewrite (162 mission-ext + 30 campaign-ext + 72 campaign + 1 core-extra)

## Top 10 largest-diff files (numstat)

| # | file | +lines | −lines |
|---|---|---|---|
| 1 | content/v1.3.0/en/api/mission-ext/BattleMoraleModel.md | 125 | 3 |
| 2 | content/v1.3.0/en/api/mission-ext/IUdpNetworkHandler.md | 120 | 6 |
| 3 | content/v1.3.0/en/api/mission-ext/CustomBattleAgentLogic.md | 99 | 3 |
| 4 | content/v1.3.0/en/api/core-extra/ICommunicator.md | 94 | 4 |
| 5 | content/v1.3.0/en/api/mission-ext/IBattlePowerCalculationLogic.md | 93 | 6 |
| 6 | content/v1.3.0/en/api/mission-ext/FormationIndicatorMissionView.md | 88 | 3 |
| 7 | content/v1.3.0/en/api/mission-ext/IQueryData.md | 88 | 6 |
| 8 | content/v1.3.0/en/api/mission-ext/ISiegeDeploymentView.md | 87 | 6 |
| 9 | content/v1.3.0/en/api/mission-ext/MissionBattleUIBaseView.md | 86 | 3 |
| 10 | content/v1.3.0/en/api/mission-ext/BaseBattleMissionController.md | 85 | 3 |

## What the two change types look like

**A. Banner-only (2124 files, +2/−0 each):** two lines inserted immediately after the page H1 — a blank line and the Chinese disclaimer blockquote:

```
> ⚠ 本页为自动生成的类参考，示例未经源码核对，勿直接引用其中的 API。
```

(Translation: "This page is an auto-generated class reference; examples are not verified against source — do not cite its APIs directly.") Verified byte-identical in shape across samples; the +2/−0 uniformity across all 2124 files (zero exceptions in the four small buckets) is strong evidence it is one mechanical insertion.

**B. Section rewrite (265 files):** the boilerplate `## Overview` and `## Mental Model` paragraphs (e.g. "`X` lives in `TaleWorlds…` and exposes the state, behavior, or workflow entry points…") are replaced with detailed, source-referenced explanations (file:line citations into the `bannerlord-1.3.0` C# tree), and a new `## How to use` section with a "Getting one" / "Typical use" C# example is appended. This accounts for essentially all −1240 deletions (boilerplate removal) and the bulk of the +17641 insertions. Rewrite files do **not** carry the banner (grep count 0). The section template is uniform, but the prose is bespoke per class — each rewrite required reading the actual C# source, so it is not a single mechanical change.

## What I could NOT determine

1. **Factual accuracy of the rewrites.** I verified structure and section shape, not the truth of individual claims (e.g. "`BattleMoraleModel.cs:16`", "all ten constants are dead"). Verifying 265 rewrites against the C# source is a separate audit.
2. **Selection criteria for rewrite vs banner-only.** No obvious pattern: `campaign` is 72/74 rewrites while `campaign-ext` is 600/630 banner-only, and `mission-ext` is mixed (162/1103). The criterion (class importance? size? manual curation?) is not derivable from the diffs alone.
3. **Single-command `git diff --stat`.** The full path list exceeds the OS argument limit (exit 126) and this git build rejects `--pathspec-from-file` with a translated Windows path (exit 129). The size summary above is derived from the complete numstat aggregation instead — equivalent numbers, but not a literal `--stat` run.
4. **Banner text identity across all 2124 banner files.** Verified in ~6 samples plus the +2/−0 uniformity; I did not byte-compare the banner line in every file.
5. **Rewrite files beyond the ~8 sampled.** The remaining ~257 rewrites were classified by numstat shape (size, deletion pattern) and bucket-level statistics, not by reading each diff. A few could contain additional change types (e.g. frontmatter edits) that the samples did not show — no frontmatter (`@@ -1,6 +1,8 @@` hunks at the top) changes were observed in any sample, but this is sampling, not exhaustive proof.
6. **Native (C++) side.** `Bannerlord.Native.dll` / native-1.2.9 docs are out of scope — no native paths appear in the snapshot.
