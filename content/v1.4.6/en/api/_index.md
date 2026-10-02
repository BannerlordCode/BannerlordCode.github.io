---
title: "API Reference — what is hand-written today"
description: "The v1.4.6 API section currently holds only hand-written pages: 40 class pages across 9 buckets, all in the Chinese tree. This page explains the coverage, where an English reader should start, and which buckets are still pending."
---
# API Reference: what is hand-written today

> **Read this before you click around.** This API section currently contains **only hand-written class pages** — there is no generated A–Z catalog under it. All 40 class pages live in the **Chinese** tree, and none of them has an English counterpart yet. The English tree does have the full architecture prose, so start there.
>
> Ten buckets have no page at all yet: `mission-ext/`, `viewmodel/`, `system/`, `modulemanager/`, `sandbox/`, `storymode/`, `custombattle/`, `network/`, `achievementsystem/`, `activitysystem/`.

## Where an English reader should start

| Instead of… | Read |
| --- | --- |
| An API section index | [architecture overview](../architecture/) — the whole layering argument is in English |
| Guessing a type's namespace | [module map](../architecture/module-map) — authoritative namespace-to-bucket mapping, in English |
| A class reference | [the Chinese API section](../../zh/api/) — the only place class pages exist right now |

The three architecture pages are written for exactly this situation: **module map** tells you which source directory owns a responsibility, **SDK layering overview** tells you which layer an object belongs to and how long it lives, **version delta** tells you what changed against 1.4.5 and 1.3.15. None of them needs a class page to be useful.

## What the 40 class pages cover

The Chinese tree hand-writes nine buckets, chosen as the ones a mod actually touches first:

| Bucket | Covered area |
| --- | --- |
| `core/` | module entry points (`MBSubModuleBase`, `Module`) |
| `core-extra/` | `Game` and the game root, items / equipment / weapons / body / crafting / skills, game models, view-model base, binding paths, the event base, parameter containers, the information manager |
| `campaign/` | `Campaign`, campaign behaviours, campaign events, the campaign game starter, `Hero`, `Settlement`, `IDataStore` |
| `campaign-ext/` | object identity and type registration (`MBObjectManager`, `MBObjectBase`) |
| `mission/` | `Mission`, `Agent`, `MissionBehavior`, `Formation` |
| `gui/` | `ScreenManager`, `ScreenBase` |
| `engine/` | `GauntletLayer` |
| `localization/` | `TextObject` |
| `save-system/` | `SaveManager`, the savable-type definer and the saveable field/property attributes |

## Still pending (type names only, no pages yet)

- `mission-ext/`: `MissionLogic`, `MBGameManager`, and the rest of `TaleWorlds.MountAndBlade`
- `viewmodel/`: `BattleResultVM`, `CharacterViewModel`, `ControlCharacterCreationStage`
- `system/`: `IInputManager`, `InputContext`, `GameKey`, `HotKey`, `HotKeyManager`
- `modulemanager/`: `ModuleInfo`, `ModuleHelper`, `SubModuleInfo`, `DependedModule`
- `sandbox/`: `SandBoxSubModule`, `SandBoxMissions`, `SandBoxSaveManager`
- `storymode/`: `StoryModeSubModule`, `CampaignStoryMode`, `StoryModeManager`, `StoryModeEvents`
- `custombattle/`: `CustomBattleScreen`, `CustomBattleSceneData`, `CPUBenchmarkMissionLogic`
- `network/`: `CoroutineManager`, `ClientsideSession`, `ConnectionState`
- `achievementsystem/`: `Achievement`, `AchievementManager`, `IAchievementService`
- `activitysystem/`: `Activity`, `ActivityManager`, `IActivityService`

Before writing a page for any of these, check the module map's bucket assignment (longest namespace prefix wins, with a few exact type-name overrides), then verify signatures against the `bannerlord-1.4.6/` source.

## See also

- ↑ [Version home](../)
- ↔ [Architecture](../architecture/)
- ↔ [Module map](../architecture/module-map)