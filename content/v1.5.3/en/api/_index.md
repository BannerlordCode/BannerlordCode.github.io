---
title: "API Class Reference"
description: "The v1.5.3 class-reference layer: where it sits between the architecture overview and the individual type pages, which eight buckets currently have written pages (all 27 in Chinese), and how far the 6 824 public types still are from being covered."
---

# API Class Reference

## Where this layer sits

The documentation tree is three layers deep, and the API reference is the bottom one:

1. **Above it is [Architecture](../architecture/)** — assembly boundaries, object lifetimes
   (`Game` / `Campaign` / `Mission`), and which assembly to reference. Read
   [SDK Layering Overview](../architecture/sdk-overview) and
   [Module Map](../architecture/module-map) first. Jumping straight to a type page without
   knowing those two things is the usual reason a behaviour "never gets called".
2. **Alongside it is the [version landing page](../)** — the full state of this tree.
3. **Below it are the individual type pages.** Each one is hand-written and follows the same
   four-part shape: what the class is responsible for → what every member actually does → the
   mental model for using it → a runnable example.

> **No bucket index pages exist.** There is no `api/<bucket>/_index.md` anywhere in this tree, so
> a bucket name is never a link here. To find which bucket a type belongs to, use
> [Module Map](../architecture/module-map). This page is the only index the layer has.

## The state of this layer, stated plainly

**The English tree has zero class pages.** Every English API page that once existed here was
script-generated and has been withdrawn; only script-free, hand-written pages are being restored.

**The 27 written pages are all in Chinese**, under [`zh/api/`](../../zh/api/). They are the only
class pages in the v1.5.3 tree, in either language. Every one of them is linked from this page so
that an English reader is never more than one click from real documentation.

**The eight buckets below have no English pages.** Their type pages are not written, not
placeholder, and not scheduled — simply absent. Read them as a map of where the written Chinese
pages sit and how much of each area remains, not as a table of things you can click through to in
English.

## The eight buckets that have written pages

Type counts are measured from the decompiled `bannerlord-1.5.3/` tree (11 487 `.cs` files,
6 824 public types after noise namespaces are excluded) and bucketed by the canonical namespace
rules. Page counts are the `.md` files that actually exist under `zh/api/`. Bucket names are not
links — there are no bucket index pages.

| Bucket | Pages written (Chinese) | 1.5.3 types | What this bucket is |
| --- | ---: | ---: | --- |
| `campaign` | 12 | 706 | The campaign world state itself, under `TaleWorlds.CampaignSystem` and its sub-namespaces: `Actions` (77), `LogEntries` (57), `CharacterDevelopment` (33), `MapNotificationTypes` (33), `GameState` (32), `Election` (29), `Party` (29), `MapEvents` (20), `Settlements` (20, plus `Locations` / `Buildings`), `Siege` (14), `GameMenus` (16), `Inventory` (13), `Incidents` (9), `Roster` (6), `TournamentGames` (11). Heroes, clans, parties, settlements, map events, sieges, log entries, menu rules. |
| `campaign-ext` | 2 | 771 | The replaceable contracts and extension points, kept separate from the world state above: `CampaignBehaviors` (169, plus `AiBehaviors` and `CommentBehaviors`), `Issues` (158, plus `IssueQuestTasks`), `ComponentInterfaces` (144), `GameComponents` (128), `Conversation.Persuasion`, `Conversation.Tags` (97), and `TaleWorlds.ObjectSystem` (16). This is where a mod inserts a behaviour, implements a component interface, swaps a default model, builds an Issue, and manages `MBObjectManager` object identity. |
| `core-extra` | 3 | 516 | The cross-system foundation, depended on by every layer above it and belonging to none of them: `TaleWorlds.Core` (281 — the `GameModel` abstraction and model registry), `TaleWorlds.Library` (202 — with `CodeGeneration`, `EventSystem`, `Graph`, `Http`, `Information`, `NewsManager`), `TaleWorlds.DotNet` (29), `TaleWorlds.LinQuick` (2), `TaleWorlds.Starter.Library` (1). |
| `gui` | 2 | 273 | The screen stack and its widget tree: `TaleWorlds.ScreenSystem` (8 — `ScreenManager` and `ScreenBase`), `TaleWorlds.GauntletUI` (104, plus `Data`, `ExtraWidgets`, `Layout`, `GauntletInput`), `TaleWorlds.TwoDimension` (51, plus `Standalone.Native.Windows`). |
| `engine` | 1 | 216 | Platform and rendering: `TaleWorlds.Engine` (159, plus `InputSystem`, `Options`, `Screens`) and `TaleWorlds.Diamond` (57, plus `ClientApplication`, `Rest`). `GauntletLayer`, the render-target a custom UI draws into, lives here in `TaleWorlds.Engine.GauntletUI` rather than in the `gui` bucket. |
| `save-system` | 4 | 56 | One vertical slice, from type definition to disk: `TaleWorlds.SaveSystem` (56) with `Definition`, `Save` (holds `SaveContext`), `Load`, and `Resolvers`. |
| `mission` | 2 | 5 | A **deliberate entry-class carve-out**: five battle facade classes in `TaleWorlds.MountAndBlade` — `Mission`, `MissionState`, `MissionBehavior`, `Agent`, `Formation`. Only the layer that calls you is written. The fuller counterpart bucket `mission-ext` (2 065 types: `MissionLogic`, `Behavior*`, combat components, multiplayer) has **no pages at all** in this tree. |
| `core` | 1 | 2 | Also a **deliberate entry-class carve-out**, and nothing like the bucket of the same name in other versions: just `MBSubModuleBase` and `Module` in `TaleWorlds.MountAndBlade` — the mod assembly entry point. The foundation layer it resembles by name is `core-extra` (516 types), which is a separate bucket. |

## The 27 pages that exist

All links below are to the Chinese pages, which are the real written documentation in this tree.

**`campaign` — campaign world state and behaviour lifecycle**

[Campaign](../../zh/api/campaign/Campaign) ·
[CampaignData](../../zh/api/campaign/CampaignData) ·
[CampaignGameStarter](../../zh/api/campaign/CampaignGameStarter) ·
[CampaignGameMode](../../zh/api/campaign/CampaignGameMode) ·
[CampaignBehaviorBase](../../zh/api/campaign/CampaignBehaviorBase) ·
[CampaignEventDispatcher](../../zh/api/campaign/CampaignEventDispatcher) ·
[CampaignEventReceiver](../../zh/api/campaign/CampaignEventReceiver) ·
[CampaignEvents](../../zh/api/campaign/CampaignEvents) ·
[MBCampaignEvent](../../zh/api/campaign/MBCampaignEvent) ·
[CampaignPeriodicEventManager](../../zh/api/campaign/CampaignPeriodicEventManager) ·
[GameModels](../../zh/api/campaign/GameModels) ·
[ICampaignBehavior](../../zh/api/campaign/ICampaignBehavior)

**`campaign-ext` — the replaceable extension contracts**

[CampaignBehaviorManager](../../zh/api/campaign-ext/CampaignBehaviorManager) ·
[DefaultSettlementProsperityModel](../../zh/api/campaign-ext/DefaultSettlementProsperityModel)

**`core-extra` — the model foundation**

[GameModel](../../zh/api/core-extra/GameModel) ·
[MBGameModel](../../zh/api/core-extra/MBGameModel) ·
[GameModelsManager](../../zh/api/core-extra/GameModelsManager)

**`core` — the mod entry point**

[MBSubModuleBase](../../zh/api/core/MBSubModuleBase)

**`gui` — screen stack**

[ScreenManager](../../zh/api/gui/ScreenManager) ·
[ScreenBase](../../zh/api/gui/ScreenBase)

**`engine` — rendering**

[GauntletLayer](../../zh/api/engine/GauntletLayer)

**`mission` — battle facades**

[Mission](../../zh/api/mission/Mission) ·
[MissionState](../../zh/api/mission/MissionState)

**`save-system` — save and load**

[SaveManager](../../zh/api/save-system/SaveManager) ·
[ISaveDriver](../../zh/api/save-system/ISaveDriver) ·
[SaveableTypeDefiner](../../zh/api/save-system/SaveableTypeDefiner) ·
[SaveContext](../../zh/api/save-system/SaveContext)

## The gap, honestly

**27 of 6 824 public types have a page — about 0.4% — and all 27 are in Chinese. The English side
has none.**

That 0.4% figure assumes one page per type, and the real page gap is **smaller, not larger**:
several of these pages are aggregate facade pages that cover more than the one type they are named
after. `GameModels` documents the whole `GameModels` aggregate rather than a single class;
`MBSubModuleBase` covers the mod entry-point pair; `Mission` covers the battle facade surface. So
the count of *undocumented types* is a little under 6 797, not exactly 6 797. Either way the
conclusion does not change.

**Eleven buckets have no pages in this tree at all.** By type count, they are larger than the eight
that do:

| Bucket | 1.5.3 types | Pages |
| --- | ---: | ---: |
| `mission-ext` | 2 065 | 0 |
| `sandbox` | 1 247 | 0 |
| `viewmodel` | 653 | 0 |
| `storymode` | 183 | 0 |
| `custombattle` | 40 | 0 |
| `network` | 32 | 0 |
| `localization` | 21 | 0 |
| `system` | 19 | 0 |
| `modulemanager` | 9 | 0 |
| `activitysystem` | 6 | 0 |
| `achievementsystem` | 4 | 0 |

The eight buckets with pages hold 2 545 types; the eleven without hold 4 279. The written coverage
is concentrated on the campaign layer and on a handful of entry points — which is where most mods
actually start, and why the 27 pages are worth reading, but it is not broad coverage and should not
be described as such.
