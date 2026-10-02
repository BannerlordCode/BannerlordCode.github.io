---
title: "Bannerlord v1.4.7 Documentation"
description: "English entry point for the v1.4.7 modding docs: 17 API subsystem buckets, five architecture pages and a measured version delta. The English tree currently carries 8 API class pages."
---
# Bannerlord v1.4.7 Documentation

## What this is

v1.4.7 is a small incremental release in the 1.4 line. For mod authors it is **almost entirely
additive** versus 1.4.5: at the API level nothing was deleted (measured — across the 361
namespaces both dumps cover, the removed count is 0), and more than 80% of the added types are
`System.*`-style noise.

What actually changed is **how the directories are organised**. The v1.4.7 tree is rebuilt into 17
subsystem buckets derived from namespace rules, with one type belonging to exactly one bucket. The
1.4.5 tree had 2,199 duplicated type names and 171 of 513 namespaces split across directories —
which is why clicking through it felt like being sent somewhere random with no way back. That was a
structural problem, not a content problem.

## What is actually in this tree right now

The numbers below are current page counts, not projections. v1.4.7 has 11,387 `.cs` files in its
source tree and could support four-digit class page counts; the bulk-generated pages have been
withdrawn from the documentation tree, and what is published here is a small hand-written core that
states its own gaps.

The English tree currently holds:

- **8 API class pages**, in three buckets — `campaign` (5), `campaign-ext` (2), `core` (1);
- **5 architecture pages** (see Architecture below);
- **16 subsystem index pages**, each stating which namespace it covers, roughly how many types that
  namespace has, and how many pages the bucket has *now*. Buckets with no pages say so in as many
  words.

There is **no `save-system` directory on the English side at all** — not an empty one, an absent
one. `SaveManager`, `SaveContext` and `LoadContext` are documented in the Chinese tree only, at
`content/v1.4.7/zh/api/save-system/`. Read [Save System](./architecture/save-system) here for the
model behind them.

To find out whether a given type has a page, see [GAPS](../GAPS).

## How this differs from 1.4.5 and 1.3.15

| | 1.3.15 | 1.4.5 | v1.4.7 |
| --- | --- | --- | --- |
| Source `.cs` files | 5,196 | 8,583 (dump incomplete) | 11,387 |
| Breaking removals for mods | — | — | 1.3.15 → v1.4.7 removes 9 types; `EquipmentFlags` and `MissionAgentSpawnLogic` are the ones to check |
| Doc directories | A–Z type list | 22 hand-written dirs that overlap | 17 buckets derived from namespace rules |
| Same type at two URLs | none | **2,199 duplicated type names** | **0** (hard invariant) |

For the full numbers, the measurement method and the known URL breaks, see
[Version Delta](./architecture/version-delta).

## Where a mod author starts

| I want to | Read first | Then |
| --- | --- | --- |
| get my mod loaded | [Module System](./architecture/module-system) | [Core](./api/core/) |
| hook campaign behaviour | [Module System](./architecture/module-system) | [Campaign-Ext](./api/campaign-ext/) |
| change gold, relations, parties | [Campaign-Ext](./api/campaign-ext/) | [Campaign](./api/campaign/) |
| build a screen | [UI Stack](./architecture/ui-stack) | [GUI](./api/gui/) |
| persist my own data | [Save System](./architecture/save-system) | see the Chinese `zh/api/save-system/` bucket |
| work out which assembly to reference | [SDK Overview](./architecture/sdk-overview) | [API Reference](./api/) |
| debug an upgrade break | [Version Delta](./architecture/version-delta) | [Cross-version compare](../../versions/) |
| check whether a type has a page | [GAPS](../GAPS) | [API Reference](./api/) |

## The navigation here is a real tree

Every page can walk back to the version root and then down to any other page:

```text
class page -> same-directory index -> 17 subsystem buckets -> API reference -> language home -> version root
```

Every hop is a real relative link. Every directory has its own index page, and each index links
back to its parent and sideways to all of its sibling buckets — so you can hop to a neighbour and
hop back without hitting a dead end.

## Architecture

- [Architecture hub](./architecture/) — the entry to five diagrams
- [SDK Overview](./architecture/sdk-overview) — assembly layering and the reference map
- [Module System](./architecture/module-system) — `Module` and `MBSubModuleBase`
- [Save System](./architecture/save-system) — `SaveManager` and type registration
- [UI Stack](./architecture/ui-stack) — ScreenSystem / Gauntlet / ViewModel
- [Version Delta](./architecture/version-delta) — v1.4.7 vs 1.4.5 vs 1.3.15

## API Reference: 17 buckets

[API Reference](./api/) is the hub. **Buckets with pages (8)**:

- [campaign](./api/campaign/) — 5 pages · `Campaign` / `CampaignBehaviorBase` / `CampaignEvents` /
  `CampaignGameStarter` / `IFaction`
- [campaign-ext](./api/campaign-ext/) — 2 pages · `MBObjectBase` / `MBObjectManager`
- [core](./api/core/) — 1 page · `MBSubModuleBase`

**Buckets that exist but currently hold 0 pages** (each has an index page naming its namespace and
type count): [mission](./api/mission/) · [mission-ext](./api/mission-ext/) ·
[core-extra](./api/core-extra/) · [gui](./api/gui/) · [viewmodel](./api/viewmodel/) ·
[engine](./api/engine/) · [sandbox](./api/sandbox/) · [custombattle](./api/custombattle/) ·
[system](./api/system/) · [modulemanager](./api/modulemanager/) · [network](./api/network/) ·
[activitysystem](./api/activitysystem/) · [achievementsystem](./api/achievementsystem/)

The largest gaps are [mission-ext](./api/mission-ext/) (about 669 types — the whole
`TaleWorlds.MountAndBlade` implementation surface) and [viewmodel](./api/viewmodel/) (about 357
types).

## Two domains nothing has been written for

Both of these are real, sizeable parts of the 1.4.7 source tree, and neither has a bucket directory
nor a single class page. They are blind spots in the documentation tree, not a few classes that
were skipped.

- **Localization (`TaleWorlds.Localization`)** — 55 `.cs` files, 21 public types, roughly 518 KB of
  source. `TextObject`, the handle a mod author meets first because every piece of localised text in
  the game is read through it, is declared in this module; the module's `Expressions` and
  `TextProcessor` namespaces (including the per-language `LanguageSpecificTextProcessor`
  implementations) cover text expressions and language-specific grammar handling. **No pages have
  been written for this domain.**
- **Campaign story (`StoryMode`)** — 89 `.cs` files, 101 public types, roughly 978 KB of source,
  spread across sub-namespaces such as `GameComponents`, `Missions` and `Quests`: the layer where
  campaign quests and story scripting live. `CampaignStoryMode` at the module root is one of its
  entry points. **No pages have been written for this domain.**

Neither domain gets a link: the directories do not exist, so a link can only land on a 404, and an
empty index page would tell a reader that pages belong there.

## See also

- ↑ [Version root](../)
- ↔ [中文文档](../zh/)
- ↘ [GAPS](../GAPS)
- ↘ [Cross-Version Class Comparison](../../versions/)
- ↘ [v1.4.5 docs](../../v1.4.5/) · [v1.3.15 docs](../../v1.3.15/) · [v1.3.0 docs](../../v1.3.0/)