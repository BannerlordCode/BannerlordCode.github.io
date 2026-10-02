---
title: 1.4.6 Module Map
description: "Verified against the real bannerlord-1.4.6 source tree: what each module directory owns, which namespace a key type lives in, how far the doc buckets are hand-written today, when a mod touches it, and which directories are excluded as noise."
---
# 1.4.6 Module Map

> Every module name, type assignment and file count here was verified against the `bannerlord-1.4.6/` source tree, not carried over from older version docs. **1.4.6 has a batch of types that older docs place in assembly A but that actually live in assembly B; this page gives the real location.**
>
> The "doc bucket" column also reports **current documentation coverage**. The v1.4.6 API section keeps only hand-written class pages — 40 of them across 9 buckets. A clickable bucket name means pages exist there; a bucket name in plain text means **that bucket has no page yet** — do not go looking for the directory, it does not exist. The pending type names are listed per layer below and at the end of the [API reference](../../api).

## What the source tree looks like

```
bannerlord-1.4.6/
├── TaleWorlds.Core/            ← top-level directory name = assembly / namespace root
│   ├── Game.cs                 ← type file shares the type name
│   ├── GameState.cs
│   └── Properties/AssemblyInfo.cs
├── TaleWorlds.CampaignSystem/
├── SandBox/                    ← official gameplay module (not a TaleWorlds.* namespace)
├── StoryMode/
└── ... 90 directories
```

Verified scale: 90 top-level directories, 71 of them gameplay modules (`TaleWorlds.*` / `SandBox` / `StoryMode`), 11385 `.cs` files in the whole tree; across those 71 modules, 6478 distinct type files once each module's `Properties/` directory is excluded. Noise directories (third-party libraries and platform layers) account for the rest — see "Directories that produce no docs" at the end.

Doc sections are **not** named after source directories. Namespaces are folded into a fixed set of 17 buckets (authoritative file `tools/_dir-map-canonical.json`, longest-prefix-wins plus a few exact type-name overrides), so "source directory ↔ doc bucket" is not one-to-one:

| Source directory / namespace | Doc bucket (current hand-written status) | Rule |
| --- | --- | --- |
| `TaleWorlds.Core` / `TaleWorlds.Library` / `TaleWorlds.DotNet` | [core-extra](../../../zh/api/core-extra/Game) · 17 pages | prefix falls straight through; `MBSubModuleBase` / `Module` are overridden by type name into [core](../../../zh/api/core/MBSubModuleBase) |
| `TaleWorlds.CampaignSystem` | [campaign](../../../zh/api/campaign/Campaign) · 7 pages | prefix falls straight through; sub-domains such as `FastMode` inherit the same bucket |
| `TaleWorlds.CampaignSystem.*` (Behaviors / GameComponents / ComponentInterfaces / Conversation / Issues / SandBox / PartyBasedVisitables) | [campaign-ext](../../../zh/api/campaign-ext/MBObjectManager) · 2 pages | each sub-domain carries its own longer prefix rule |
| `TaleWorlds.ObjectSystem` | [campaign-ext](../../../zh/api/campaign-ext/MBObjectBase) | the source directory name differs from the doc bucket name: it lands in campaign-ext, there is no separate "object system" bucket |
| `TaleWorlds.MountAndBlade*` | `mission-ext` · **0 pages**; `Mission` / `Agent` / `MissionBehavior` / `Formation` are overridden by type name into [mission](../../../zh/api/mission/Mission) · 4 pages; `CustomBattle` → `custombattle` · **0 pages** | prefix falls through, then type-name overrides |
| `*.ViewModelCollection` (Core / CampaignSystem / MountAndBlade) | `viewmodel` · **0 pages** | the longer prefix beats the parent prefix |
| `TaleWorlds.ScreenSystem` / `TaleWorlds.GauntletUI*` / `TaleWorlds.TwoDimension*` | [gui](../../../zh/api/gui/ScreenManager) · 2 pages | screens, Gauntlet and 2D drawing share one bucket |
| `TaleWorlds.Engine` / `TaleWorlds.Engine.GauntletUI` | [engine](../../../zh/api/engine/GauntletLayer) · 1 page | `GauntletLayer` belongs to engine (precedent measured on 1.4.5) |
| `TaleWorlds.InputSystem` | `system` · **0 pages** | prefix falls through to system — neither engine nor campaign-ext |
| `TaleWorlds.SaveSystem` / `TaleWorlds.Localization` / `TaleWorlds.ModuleManager` | [save-system](../../../zh/api/save-system/SaveManager) · 4 pages · [localization](../../../zh/api/localization/TextObject) · 1 page · `modulemanager` · **0 pages** | each gets its own bucket |
| `SandBox*` / `StoryMode*` | `sandbox` · **0 pages** · `storymode` · **0 pages** | prefix falls through |
| `TaleWorlds.ActivitySystem` / `TaleWorlds.AchievementSystem` / `TaleWorlds.Network` | `activitysystem` · **0 pages** · `achievementsystem` · **0 pages** · `network` · **0 pages** | prefix falls through |

Class-page links in this table point at the Chinese tree, because that is currently the only tree with class pages — see [API reference](../../api) for why.

**Namespaces that match no prefix rule (unmapped, they fall to the default bucket `core-extra`)**: `TaleWorlds.NavigationSystem`, `TaleWorlds.PlatformService.Epic`, `TaleWorlds.PlatformService.GOG`, `TaleWorlds.PlatformService.Steam`, `TaleWorlds.ServiceDiscovery.Client`. The first is an empty shell assembly, the last four are platform layers. They are recorded here so the rules can be completed later instead of silently mixing into `core-extra`.

## Foundation layer: nothing depends on it, it depends on no gameplay layer

| Module directory | Doc bucket status | Key types (namespace verified) | When a mod touches it |
| --- | --- | --- | --- |
| `TaleWorlds.Core` | core-extra hand-written ([Game](../../../zh/api/core-extra/Game) · [ItemObject](../../../zh/api/core-extra/ItemObject) · [GameStateManager](../../../zh/api/core-extra/GameStateManager) and more); core hand-written ([MBSubModuleBase](../../../zh/api/core/MBSubModuleBase) · [Module](../../../zh/api/core/Module)); pending `IGameStarter`, `GameState`, `GameType` | `Game`, `GameState`, `GameType`, `IGameStarter`, `ItemObject` (all `TaleWorlds.Core`) | Getting the root of a running game inside an `MBSubModuleBase` subclass; defining your own items or equipment |
| `TaleWorlds.Library` | core-extra hand-written ([ViewModel](../../../zh/api/core-extra/ViewModel) · [InformationManager](../../../zh/api/core-extra/InformationManager)); pending `Vec3` and the maths/collection helpers | `ViewModel`, `Vec3`, `InformationManager` (all `TaleWorlds.Library`) | ViewModel binding, vector maths, showing the player a message |
| `TaleWorlds.Localization` | localization hand-written ([TextObject](../../../zh/api/localization/TextObject)); pending `MBTextManager`, `LanguageData`, `LocalizedTextManager` | `TextObject`, `MBTextManager`, `LanguageData`, `LocalizedTextManager` | Any player-facing text |
| `TaleWorlds.ObjectSystem` | campaign-ext hand-written ([MBObjectManager](../../../zh/api/campaign-ext/MBObjectManager) · [MBObjectBase](../../../zh/api/campaign-ext/MBObjectBase)); pending `MBGUID`, `AutoGeneratedSaveManager`, `MBTypeNotRegisteredException` | `MBObjectManager`, `MBObjectBase`, `MBGUID`, `AutoGeneratedSaveManager`, `MBTypeNotRegisteredException` | Referencing objects across saves by `MBGUID`, registering types dynamically, loading XML definitions |
| `TaleWorlds.ModuleManager` | `modulemanager` · **0 pages pending** | `ModuleInfo`, `ModuleHelper`, `SubModuleInfo`, `ModuleCategory`, `ModuleType`, `DependedModule` | Wanting to know module load order, module dependencies, the semantics of `SubModule.xml` |
| `TaleWorlds.ActivitySystem` | `activitysystem` · **0 pages pending** | `Activity`, `ActivityManager`, `ActivityOutcome`, `ActivityTransition`, `IActivityService` | Needing a cross-system state machine for "what the player is doing" (activity/schedule mods) |
| `TaleWorlds.AchievementSystem` | `achievementsystem` · **0 pages pending** | `Achievement`, `AchievementManager`, `IAchievementService` | Hooking achievements; note `AchievementManager.SetStat` / `GetStat` are asynchronous (they return `Task<int>`) |
| `TaleWorlds.InputSystem` | `system` · **0 pages pending** | `IInputManager`, `InputContext`, `GameKey`, `HotKey`, `HotKeyManager` | Testing key/axis input. **Note: 1.4.6 has no `InputManager` class** — only the interface `IInputManager` — so code copied from older docs that calls `InputManager` will not compile |

## Mission layer: the lifecycle of one battle

| Module directory | Doc bucket status | Key types (namespace verified) | When a mod touches it |
| --- | --- | --- | --- |
| `TaleWorlds.MountAndBlade` | mission hand-written ([Mission](../../../zh/api/mission/Mission) · [Agent](../../../zh/api/mission/Agent) · [MissionBehavior](../../../zh/api/mission/MissionBehavior) · [Formation](../../../zh/api/mission/Formation)); `mission-ext` · **0 pages pending** (`MissionLogic`, `MBGameManager`, …); the two module-entry pages sit in [core](../../../zh/api/core/MBSubModuleBase) | `MBSubModuleBase`, `Module` (both in `TaleWorlds.MountAndBlade`), `Mission`, `Agent`, `MissionBehavior`, `MissionLogic`, `MBGameManager` | **The module entry point lives here**, along with battle behaviour, agent handling, spawn points and siege equipment |

> **Correction**: `MBSubModuleBase` and `Module` belong to `TaleWorlds.MountAndBlade`, not `TaleWorlds.Core`. Older docs that put `MBSubModuleBase` under the Core directory are wrong; the doc bucket has to follow the source directory.

## Campaign layer: long-lived world state

| Module directory | Doc bucket status | Key types (namespace verified) | When a mod touches it |
| --- | --- | --- | --- |
| `TaleWorlds.CampaignSystem` | campaign hand-written ([Campaign](../../../zh/api/campaign/Campaign) · [CampaignBehaviorBase](../../../zh/api/campaign/CampaignBehaviorBase) · [CampaignEvents](../../../zh/api/campaign/CampaignEvents) · [CampaignGameStarter](../../../zh/api/campaign/CampaignGameStarter) · [Hero](../../../zh/api/campaign/Hero) · [Settlement](../../../zh/api/campaign/Settlement) · [IDataStore](../../../zh/api/campaign/IDataStore)); pending `GameModels`, `CharacterObject` | `Campaign`, `CampaignBehaviorBase`, `CampaignEvents`, `CampaignGameStarter`, `GameModels`, `CharacterObject` (`TaleWorlds.CampaignSystem`) | Everything about the campaign world: heroes, families, settlements, parties, behaviours, the event bus, calculation models |
| `TaleWorlds.CampaignSystem.*` (Behaviors / GameComponents / ComponentInterfaces / Conversation / Issues / SandBox / PartyBasedVisitables) | campaign-ext hand-written ([MBObjectManager](../../../zh/api/campaign-ext/MBObjectManager) · [MBObjectBase](../../../zh/api/campaign-ext/MBObjectBase)); behaviour, component-interface, conversation and transaction sub-domains **pending** | behaviour, component interface, conversation, transaction and issue types | Writing behaviour implementations, component interfaces, conversation flows |
| `*.ViewModelCollection` (`TaleWorlds.CampaignSystem` / `.Core` / `.MountAndBlade`) | `viewmodel` · **0 pages pending** (`BattleResultVM`, `CharacterViewModel`, `ControlCharacterCreationStage`) | UI data classes (352 under CampaignSystem) | Map screens, diplomacy, party-management UIs |
| `TaleWorlds.CampaignSystem.FastMode` | campaign bucket; `FastModeSubModule`, `FastModeOptionsProvider` **pending** (only 3 files in 1.4.6) | `FastModeSubModule`, `FastModeOptionsProvider` | Only if you explicitly support fast mode |
| `TaleWorlds.CampaignSystem.ViewModelCollection.BirthAndDeath` | `viewmodel` · **0 pages pending** | birth/inheritance UI data types | Rarely; usually leave it alone |

## UI layer: projecting state onto the screen

| Module directory | Doc bucket status | Key types (namespace verified) | When a mod touches it |
| --- | --- | --- | --- |
| `TaleWorlds.ScreenSystem` | gui hand-written ([ScreenManager](../../../zh/api/gui/ScreenManager) · [ScreenBase](../../../zh/api/gui/ScreenBase)); pending `ScreenLayer`, `ScreenComponent`, `GlobalLayer`, `InputRestrictions` | `ScreenManager`, `ScreenBase`, `ScreenLayer`, `ScreenComponent`, `GlobalLayer`, `InputRestrictions` (`TaleWorlds.ScreenSystem`) | Pushing and popping screens, adding a global layer, blocking input by restriction. **In 1.4.6 the whole screen stack lives in ScreenSystem**, not MountAndBlade |
| `TaleWorlds.GauntletUI` + `.Data` + `.ExtraWidgets` | gui bucket; layout, widget base classes and `GauntletMovie` (`TaleWorlds.GauntletUI.Data`) **pending** | layout, widget base classes, `GauntletMovie` (`TaleWorlds.GauntletUI.Data`) | Building a custom Gauntlet UI, loading a `.prefab` by movie id |
| `TaleWorlds.Engine.GauntletUI` | engine hand-written ([GauntletLayer](../../../zh/api/engine/GauntletLayer)); pending `UIResourceManager`, `EngineTexture`, `UIConfig` | `GauntletLayer`, `UIResourceManager`, `EngineTexture`, `UIConfig` | Getting the rendering layer; `GauntletLayer` is in `TaleWorlds.Engine.GauntletUI` and lands in the engine bucket, not gui |
| `TaleWorlds.MountAndBlade.View` / `.ViewModelCollection` / `TaleWorlds.Core.ViewModelCollection` | `mission-ext` / `viewmodel` · **0 pages pending** | the official ViewModels and screens | Copying how the official UI is written |
| `TaleWorlds.TwoDimension` | gui bucket; `Font`, `EditableText`, `ITexture`, `IDrawObject` **pending** | `Font`, `EditableText`, `ITexture`, `IDrawObject` | Rolling your own 2D drawing (board, icons, codex) |

## Save layer: persistence that can stand on its own

| Module directory | Doc bucket status | Key types (namespace verified) | When a mod touches it |
| --- | --- | --- | --- |
| `TaleWorlds.SaveSystem` | save-system hand-written ([SaveManager](../../../zh/api/save-system/SaveManager) · [SaveableTypeDefiner](../../../zh/api/save-system/SaveableTypeDefiner) · [SaveableFieldAttribute](../../../zh/api/save-system/SaveableFieldAttribute) · [SaveablePropertyAttribute](../../../zh/api/save-system/SaveablePropertyAttribute)); pending `ISaveDriver`, `AsyncFileSaveDriver`, `InMemDriver`, the `SaveContext`/`LoadContext` types | `SaveManager`, `ISaveDriver`, `AsyncFileSaveDriver`, `InMemDriver`, `SaveContext`/`LoadContext` types; sub-directories `Definition/`, `Load/`, `Resolvers/`, `Save/` | Adding save fields to a custom behaviour, registering savable types |

## Official gameplay modules (SandBox / StoryMode)

| Module directory | Doc bucket status | Key types (namespace verified) | When a mod touches it |
| --- | --- | --- | --- |
| `SandBox` | `sandbox` · **0 pages pending** (`SandBoxSubModule`, `SandBoxMissions`, `SandBoxSaveManager`) | `SandBoxSubModule`, `SandBoxMissions`, `SandBoxSaveManager`, `AutoGeneratedSaveManager` | Reading the official campaign behaviour for reference; your custom behaviour usually has to join the same set |
| `StoryMode` | `storymode` · **0 pages pending** (`StoryModeSubModule`, `CampaignStoryMode`, `StoryModeManager`, `StoryModeEvents`) | `StoryModeSubModule`, `CampaignStoryMode`, `StoryModeManager`, `StoryModeEvents` | Same, for the campaign story mode |
| `SandBox.GauntletUI` / `SandBox.View` / `SandBox.ViewModelCollection` | `sandbox` bucket (prefix falls through, no separate bucket) · **0 pages** | the official UI and ViewModels | Copying UI code |
| `TaleWorlds.MountAndBlade.CustomBattle` | `custombattle` · **0 pages pending** (`CustomBattleScreen`, `CustomBattleSceneData`, `CPUBenchmarkMissionLogic`) | custom-battle scenes and benchmark mission logic | Very rarely; usually leave it alone |

## Tooling modules new in 1.4.6

| Module directory | Files | Notes |
| --- | --- | --- |
| `TaleWorlds.MountAndBlade.SteamWorkshop` | 8 | Steam workshop tooling: `Program`, `ToolTask`, `CreateItemTask`, `GetItemTask`, `UpdateItemTask`, `ItemVisibility`, `ToolDebugManager`. Useless to mod authors, but it is new in 1.4.6 |
| `TaleWorlds.MountAndBlade.Launcher` | 2 | Launcher entry point (`Program`) |
| `TaleWorlds.MountAndBlade.GauntletUI.CodeGenerator` | 2 | Prefab code generator (`Program`) |
| `TaleWorlds.MountAndBlade.SaveSystem.CodeGenerator` | 2 | Save collector code generator (`Program`) |
| `TaleWorlds.MountAndBlade.Multiplayer.GauntletUI.AutoGenerate` | 84 | Generated multiplayer prefabs; 1.4.5 spelled the same directory `AutoGenerated` |

> The 1.4.6 tree also contains `TaleWorlds.MountAndBlade.Multiplayer.2` (121 files), same-named and same-sized as `TaleWorlds.MountAndBlade.Multiplayer` (also 121 files) — judged to be a duplicate directory produced by the decompile/export tool, **not a new feature**. See [version delta](../version-delta).

## Directories that produce no docs (noise exclusion)

These directories produce no class pages under the authoritative noise list (`excludeNamespaces` + `excludeSuffixes` in `tools/_dir-map-canonical.json`), but they really do exist in the 1.4.6 source, so do not assume the site dropped them:

- Third-party libraries: `GalaxyCSharp`, `Newtonsoft.Json`, `StbSharp`, `Steamworks.NET`, `jose-jwt`, `System.Management`, `System.Numerics.Vectors`, `mscorlib`, `netstandard`, `Mono`.
- Platform and distribution: `TaleWorlds.Diamond.AccessProvider`, `TaleWorlds.PlatformService`, `TaleWorlds.ServiceDiscovery`, `TaleWorlds.PlayerServices`, `TaleWorlds.Launcher`, `TaleWorlds.Avatar`.
- Multiplayer and server: `TaleWorlds.Network` (which lands in the network bucket per the canonical map), `TaleWorlds.MountAndBlade.Multiplayer*`, `TaleWorlds.MountAndBlade.DedicatedCustomServer`, `TaleWorlds.PSAI`.
- Code generation: any namespace ending in `AutoGenerated` / `CodeGenerator`, plus `TaleWorlds.GauntletUI.PrefabSystem`.
- `TaleWorlds.TwoDimension.Standalone`, `TaleWorlds.LinQuick` (both fall to the default bucket `core-extra`).
- **Special case**: `TaleWorlds.NavigationSystem` in 1.4.6 contains only a `Properties/AssemblyInfo.cs` and **no game types at all** — it is an empty shell assembly. Older docs calling it a "navigation system" are misleading; if you cannot find navigation APIs in 1.4.6, trust this module map.
- **Excluded**: `ManagedStarter` (only a `Program`) is in the canonical `excludeNamespaces` list and will never become a bucket.

## Mental model: how to use this map

1. **Pick a module by layer**: world-state changes go to `TaleWorlds.CampaignSystem`, single-battle changes to `TaleWorlds.MountAndBlade`, UI work to `TaleWorlds.ScreenSystem` + `TaleWorlds.GauntletUI`. The layering argument is in the [SDK layering overview](../sdk-overview).
2. **Then find the type by directory**: in 1.4.6 the directory name *is* the assembly name, so `grep` the source without guessing DLL ownership.
3. **Only then enter the API section**: that section currently holds only 40 hand-written class pages; the reachable entry points are in the task table of the [API reference](../../api). Buckets marked **0 pages** above have nothing to click yet.

## Navigation

- [↑ Up](../) — architecture overview
- ↔ Siblings: [SDK layering overview](../sdk-overview) · [version delta](../version-delta) · [中文](../../../zh/architecture/module-map)
- ↑↑ Version home: [en](../../) · [zh](../../../zh/)
- ↔ Cross-version: [per-class API comparison](../../../../versions/)