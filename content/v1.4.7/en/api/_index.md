---
title: "API Reference — start from the task"
description: "The v1.4.7 API is split into 17 namespace-derived buckets: one type belongs to exactly one bucket, and same-bucket collisions use Namespace__Type. The English tree currently carries 8 class pages."
---
# API Reference — start from the task

This is not a wall of signatures. Decide what you are doing, enter the matching bucket below, then
open a type page. **A type lives in exactly one bucket** — the 1.4.5 tree had the same type name in
two directories 2,199 times, which is why clicking through it felt random and one-way. v1.4.7 fixes
that.

Every page count below is a **current count**. Roughly 3,598 class pages were once generated into
these directories and have since been withdrawn from the documentation tree. Each bucket index page
now states which namespace it covers, roughly how many types that namespace has, and how many pages
the bucket holds today. To check whether a specific type has a page, see [GAPS](../../GAPS).

## Buckets that have pages (3, eight pages total)

| Bucket | Pages | Namespace | Pages |
| --- | ---: | --- | --- |
| [campaign](campaign/) | 5 | `TaleWorlds.CampaignSystem` proper | [Campaign](campaign/Campaign) · [CampaignBehaviorBase](campaign/CampaignBehaviorBase) · [CampaignEvents](campaign/CampaignEvents) · [CampaignGameStarter](campaign/CampaignGameStarter) · [IFaction](campaign/IFaction) |
| [campaign-ext](campaign-ext/) | 2 | `CampaignSystem` sub-namespaces + `ObjectSystem` | [MBObjectBase](campaign-ext/MBObjectBase) · [MBObjectManager](campaign-ext/MBObjectManager) |
| [core](core/) | 1 | module-loading entry types | [MBSubModuleBase](core/MBSubModuleBase) |

Four of the empty buckets below do have pages in the Chinese tree: [mission](../../../v1.4.7/zh/api/mission/)
(4 pages), [gui](../../../v1.4.7/zh/api/gui/) (3), [core-extra](../../../v1.4.7/zh/api/core-extra/) (2) and
[engine](../../../v1.4.7/zh/api/engine/) (2), and the Chinese [core](../../../v1.4.7/zh/api/core/) bucket also has
`Module` next to `MBSubModuleBase`. The Chinese `save-system` bucket has no English counterpart at
all — that directory does not exist here, so `SaveManager` / `SaveContext` / `LoadContext` can only
be reached at `content/v1.4.7/zh/api/save-system/`.

## Buckets that currently hold 0 pages (13)

Each of these has an index page naming its namespace and type count:

| Bucket | Namespace | Types |
| --- | --- | ---: |
| [mission-ext](mission-ext/) | all of `TaleWorlds.MountAndBlade` + `TaleWorlds.Mission` | ~669 |
| [viewmodel](viewmodel/) | the three `*.ViewModelCollection` namespaces | ~357 |
| [sandbox](sandbox/) | `SandBox` and its `GauntletUI` / `View` / `ViewModelCollection` sub-namespaces | ~321 |
| [custombattle](custombattle/) | `TaleWorlds.MountAndBlade.CustomBattle` and sub-namespaces | ~41 |
| [network](network/) | `TaleWorlds.Network` | ~38 |
| [system](system/) | `TaleWorlds.InputSystem` plus admitted runtime namespaces | ~20 |
| [modulemanager](modulemanager/) | `TaleWorlds.ModuleManager` | 8 |
| [activitysystem](activitysystem/) | `TaleWorlds.ActivitySystem` | 6 |
| [achievementsystem](achievementsystem/) | `TaleWorlds.AchievementSystem` | 4 |
| [mission](mission/) | battle entry classes cut out of mission-ext by name | — |
| [core-extra](core-extra/) | the `TaleWorlds.Core` long tail, the taxonomy's catch-all | — |
| [gui](gui/) | `ScreenSystem` / `GauntletUI` / `TwoDimension` | — |
| [engine](engine/) | `TaleWorlds.Engine` + the `Diamond` access layer | — |

"Types" is the count of types in the 1.4.7 source tree for that namespace, not a page count. Every
bucket in this table holds 0 pages today.

> **There is no `gameplay/` and no `navigationsystem/` directory.** The first was folded into
> `sandbox` (the 1.4.5 directory was semantically mixed and cannot be reproduced by a namespace
> rule); the second has no public types in 1.4.7 and resolves into `core-extra`. See
> [Version Delta](../architecture/version-delta).

> `mission/` and `core/` are deliberately small and hold only mod entry classes; the full
> `TaleWorlds.MountAndBlade` and foundation surfaces are in `mission-ext/` and `core-extra/`.

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

## Reading order

1. [Architecture hub](../architecture/) — establish which layer you are in.
2. The two tables above — enter the matching subsystem.
3. The bucket index page — it lists every page that area has now, plus its siblings and its gap.
4. The type page — mental model, when to use it, when not to, and the risks.

## See also

- ↑ [Language home](../)
- ↔ [Architecture overview](../architecture/)
- ↘ [GAPS](../../GAPS)
- ↘ [Cross-version class comparison](../../../versions/)