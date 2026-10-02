---
title: "1.4.6 Module Map"
description: "Verified against bannerlord-1.4.6 source: what each module directory owns, which namespace its key types really live in, when a mod touches it, and which directories are excluded as noise."
---
# 1.4.6 Module Map

> Every module name, type location and file count on this page was checked against the `bannerlord-1.4.6/` source tree, not carried over from older docs. **1.4.6 has several types that older pages place in the wrong assembly**; this page gives the real location.

## What the source tree looks like

```
bannerlord-1.4.6/
├── TaleWorlds.Core/            ← top-level dir name == assembly / namespace root
│   ├── Game.cs                 ← type file is named after the type
│   ├── GameState.cs
│   └── Properties/AssemblyInfo.cs
├── TaleWorlds.CampaignSystem/
├── SandBox/                    ← official gameplay module (not a TaleWorlds.* namespace)
├── StoryMode/
└── ... 90 directories
```

Verified scale: 90 top-level directories, 71 of them gameplay modules (`TaleWorlds.*`, `SandBox`, `StoryMode`), 11385 `.cs` files in the whole tree, and 6478 distinct type files across those 71 modules once each module's `Properties/` directory is excluded. Noise directories (third-party libraries and platform layers) account for the rest — see "Directories without docs" at the end.

Doc sections are **not** named after source directories. Namespaces are folded into a fixed set of 17 subsystem buckets by the authoritative map `tools/_dir-map-canonical.json` (longest-prefix-wins plus a few exact type-name overrides), so a source directory and a docs section do **not** map one to one:

| Source directory / namespace | Docs bucket | Rule in one line |
| --- | --- | --- |
| `TaleWorlds.Core` / `TaleWorlds.Library` / `TaleWorlds.DotNet` | [core-extra](../../api/core-extra/) | Direct prefix hit; `MBSubModuleBase` / `Module` are overridden by type name into [core](../../api/core/) |
| `TaleWorlds.CampaignSystem` | [campaign](../../api/campaign/) | Direct prefix hit; subdomains such as `FastMode` inherit the same bucket |
| `TaleWorlds.CampaignSystem.*` (Behaviors / GameComponents / ComponentInterfaces / Conversation / Issues / SandBox / PartyBasedVisitables) | [campaign-ext](../../api/campaign-ext/) | Each subdomain carries its own longer prefix rule |
| `TaleWorlds.ObjectSystem` | [campaign-ext](../../api/campaign-ext/) | **It lives in campaign-ext, there is no objectsystem bucket** |
| `TaleWorlds.MountAndBlade*` | [mission-ext](../../api/mission-ext/) | Direct prefix hit; `CustomBattle` → [custombattle](../../api/custombattle/); `Mission` / `Agent` / `MissionBehavior` / `Formation` / `MissionState` are overridden by type name into [mission](../../api/mission/) |
| `*.ViewModelCollection` (Core / CampaignSystem / MountAndBlade) | [viewmodel](../../api/viewmodel/) | Longer prefix wins over the parent prefix |
| `TaleWorlds.ScreenSystem` / `TaleWorlds.GauntletUI*` / `TaleWorlds.TwoDimension*` | [gui](../../api/gui/) | Screens, Gauntlet and 2D drawing share one bucket |
| `TaleWorlds.Engine` / `TaleWorlds.Engine.GauntletUI` | [engine](../../api/engine/) | `GauntletLayer` lands in engine (1.4.5 on-disk precedent) |
| `TaleWorlds.InputSystem` | [system](../../api/system/) | Neither engine nor campaign-ext |
| `TaleWorlds.SaveSystem` / `TaleWorlds.Localization` / `TaleWorlds.ModuleManager` | [save-system](../../api/save-system/) · [localization](../../api/localization/) · [modulemanager](../../api/modulemanager/) | One bucket each |
| `SandBox*` / `StoryMode*` | [sandbox](../../api/sandbox/) · [storymode](../../api/storymode/) | Direct prefix hit |
| `TaleWorlds.ActivitySystem` / `TaleWorlds.AchievementSystem` / `TaleWorlds.Network` | [activitysystem](../../api/activitysystem/) · [achievementsystem](../../api/achievementsystem/) · [network](../../api/network/) | Direct prefix hit |

**Namespaces that match no prefix rule (unmapped, falling back to the default bucket `core-extra`)**: `TaleWorlds.NavigationSystem`, `TaleWorlds.PlatformService.Epic`, `TaleWorlds.PlatformService.GOG`, `TaleWorlds.PlatformService.Steam`, `TaleWorlds.ServiceDiscovery.Client`. The first is an empty shell assembly and the rest are platform layers; they are listed here so a rule can be added later instead of them silently polluting `core-extra`.

## Foundation: nobody depends on it, and it depends on no gameplay layer

| Module directory | Docs section | Key types (namespace verified) | When a mod touches it |
| --- | --- | --- | --- |
| `TaleWorlds.Core` | [core-extra](../../api/core-extra/) | `Game`, `GameState`, `GameType`, `IGameStarter`, `ItemObject` (`TaleWorlds.Core`) | Getting the root of one game session from an `MBSubModuleBase` subclass; defining your own items |
| `TaleWorlds.Library` | [core-extra](../../api/core-extra/) | `ViewModel`, `Vec3`, `InformationManager` (all `TaleWorlds.Library`) | ViewModel binding, vector maths, showing messages to the player |
| `TaleWorlds.Localization` | [localization](../../api/localization/) | `TextObject`, `MBTextManager`, `LanguageData`, `LocalizedTextManager` | Any player-facing string |
| `TaleWorlds.ObjectSystem` | [campaign-ext](../../api/campaign-ext/) | `MBObjectManager`, `MBObjectBase`, `MBGUID`, `AutoGeneratedSaveManager`, `MBTypeNotRegisteredException` | Resolving objects across saves by `MBGUID`, registering types at runtime, loading XML definitions |
| `TaleWorlds.ModuleManager` | [modulemanager](../../api/modulemanager/) | `ModuleInfo`, `ModuleHelper`, `SubModuleInfo`, `ModuleCategory`, `ModuleType`, `DependedModule` | Working out load order, module dependencies, and the meaning of `SubModule.xml` |
| `TaleWorlds.ActivitySystem` | [activitysystem](../../api/activitysystem/) | `Activity`, `ActivityManager`, `ActivityOutcome`, `ActivityTransition`, `IActivityService` | A cross-system "what the player is currently doing" state machine (schedule and activity style mods) |
| `TaleWorlds.AchievementSystem` | [achievementsystem](../../api/achievementsystem/) | `Achievement`, `AchievementManager`, `IAchievementService` | Hooking achievements. `AchievementManager.SetStat` / `GetStat` are asynchronous (`GetStat` returns `Task<int>`) |
| `TaleWorlds.InputSystem` | [system](../../api/system/) | `IInputManager`, `Input`, `InputContext`, `InputKey`, `InputState`, `GameKey`, `HotKey` | Reading keys and axes. **Note: 1.4.6 has no class named `InputManager`** — only the interface `IInputManager`; older snippets calling `InputManager.X` will not compile |

## Mission: the lifetime of one battle

| Module directory | Docs section | Key types (namespace verified) | When a mod touches it |
| --- | --- | --- | --- |
| `TaleWorlds.MountAndBlade` | [mission-ext](../../api/mission-ext/); `Mission` / `Agent` / `MissionBehavior` in [mission](../../api/mission/); `MBSubModuleBase` / `Module` in [core](../../api/core/) | `MBSubModuleBase`, `Module` (both `TaleWorlds.MountAndBlade`), `Mission`, `Agent`, `MissionBehavior`, `MissionLogic`, `MBGameManager` | **The module entry point lives here**, together with battle behaviour, agent handling, spawn handlers and siege machinery |

> **Correction**: `MBSubModuleBase` and `Module` belong to `TaleWorlds.MountAndBlade`, not `TaleWorlds.Core`. Older pages filed `MBSubModuleBase` under Core; follow the source directory, not the older page.

## Campaign: long-lived world state

| Module directory | Docs section | Key types (namespace verified) | When a mod touches it |
| --- | --- | --- | --- |
| `TaleWorlds.CampaignSystem` | [campaign](../../api/campaign/) | `Campaign`, `CampaignBehaviorBase`, `CampaignEvents`, `CampaignGameStarter`, `GameModels`, `CharacterObject` (`TaleWorlds.CampaignSystem`) | Everything world-scale: heroes, clans, settlements, parties, behaviours, the event bus, calculation models |
| `TaleWorlds.CampaignSystem.*` (Behaviors / GameComponents / ComponentInterfaces / Conversation / Issues / SandBox / PartyBasedVisitables) | [campaign-ext](../../api/campaign-ext/) | Behaviour, component-interface, conversation, barter, issue types | Writing behaviours, component interfaces or conversation flows |
| `*.ViewModelCollection` (`TaleWorlds.CampaignSystem` / `.Core` / `.MountAndBlade`) | [viewmodel](../../api/viewmodel/) | ViewModel / screen data classes (352 under CampaignSystem) | Map screen, diplomacy, party management screens |
| `TaleWorlds.CampaignSystem.FastMode` | [campaign](../../api/campaign/) | `FastModeSubModule`, `FastModeOptionsProvider` (3 files in 1.4.6) | Only if you explicitly support fast mode |
| `TaleWorlds.CampaignSystem.ViewModelCollection.BirthAndDeath` | [viewmodel](../../api/viewmodel/) | Birth and inheritance screen data | Rarely; usually nothing to do |

## UI: projecting state onto the screen

| Module directory | Docs section | Key types (namespace verified) | When a mod touches it |
| --- | --- | --- | --- |
| `TaleWorlds.ScreenSystem` | [gui](../../api/gui/) | `ScreenManager`, `ScreenBase`, `ScreenLayer`, `ScreenComponent`, `GlobalLayer`, `InputRestrictions` (`TaleWorlds.ScreenSystem`) | Pushing and popping screens, adding global layers, blocking input. **In 1.4.6 the whole screen stack lives in ScreenSystem**, not in MountAndBlade |
| `TaleWorlds.GauntletUI` + `.Data` + `.ExtraWidgets` | [gui](../../api/gui/) | Layout and widget base types, `GauntletMovie` (`TaleWorlds.GauntletUI.Data`) | Building custom Gauntlet screens, loading a `.prefab` by movie identifier |
| `TaleWorlds.Engine.GauntletUI` | [engine](../../api/engine/) | `GauntletLayer`, `UIResourceManager`, `EngineTexture`, `UIConfig` | Obtaining the rendering layer; `GauntletLayer` lives in `TaleWorlds.Engine.GauntletUI` and lands in the `engine/` bucket, not `gui/` |
| `TaleWorlds.MountAndBlade.View` / `.ViewModelCollection` / `TaleWorlds.Core.ViewModelCollection` | [mission-ext](../../api/mission-ext/) and [viewmodel](../../api/viewmodel/) | The official ViewModels and screens | Reading official screens as reference |
| `TaleWorlds.TwoDimension` | [gui](../../api/gui/) | `Font`, `EditableText`, `ITexture`, `IDrawObject` | Drawing your own 2D content (boards, icons, encyclopaedia pages) |

## Save: persistence that stands on its own

| Module directory | Docs section | Key types (namespace verified) | When a mod touches it |
| --- | --- | --- | --- |
| `TaleWorlds.SaveSystem` | [save-system](../../api/save-system/) | `SaveManager`, `ISaveDriver`, `AsyncFileSaveDriver`, `InMemDriver`, the `SaveContext` / `LoadContext` family; subdirectories `Definition/`, `Load/`, `Resolvers/`, `Save/` | Adding saved fields to your own behaviour, registering saveable types |

## Official gameplay modules (SandBox / StoryMode)

| Module directory | Docs section | Key types (namespace verified) | When a mod touches it |
| --- | --- | --- | --- |
| `SandBox` | [sandbox](../../api/sandbox/) | `SandBoxSubModule`, `SandBoxCampaign`, `SandBoxMissions`, `SandBoxSaveManager`, `AutoGeneratedSaveManager` | Reading official campaign behaviours as reference; your behaviour usually interleaves with the same set |
| `StoryMode` | [storymode](../../api/storymode/) | `StoryModeSubModule`, `CampaignStoryMode`, `StoryModeManager`, `StoryModeEvents` | Same, for the story-line campaign |
| `SandBox.GauntletUI` / `SandBox.View` / `SandBox.ViewModelCollection` | [sandbox](../../api/sandbox/) (direct prefix hit, no extra bucket) | Official screens and ViewModels | Copying UI patterns |

## Tooling modules that are new in 1.4.6

| Module directory | Files | What it is |
| --- | --- | --- |
| `TaleWorlds.MountAndBlade.SteamWorkshop` | 8 | Steam Workshop tooling: `Program`, `ToolTask`, `CreateItemTask`, `GetItemTask`, `UpdateItemTask`, `ItemVisibility`, `ToolDebugManager`. Genuinely new in 1.4.6, but useless to mod authors |
| `TaleWorlds.MountAndBlade.Launcher` | 2 | Launcher entry point (`Program`) |
| `TaleWorlds.MountAndBlade.GauntletUI.CodeGenerator` | 2 | Prefab code generator (`Program`) |
| `TaleWorlds.MountAndBlade.SaveSystem.CodeGenerator` | 2 | Save collection code generator (`Program`) |
| `TaleWorlds.MountAndBlade.Multiplayer.GauntletUI.AutoGenerate` | 84 | Generated multiplayer prefabs; the same directory is spelled `AutoGenerated` in 1.4.5 |

> The 1.4.6 tree also contains `TaleWorlds.MountAndBlade.Multiplayer.2` (121 files) with the same file names and count as `TaleWorlds.MountAndBlade.Multiplayer` (also 121 files). That is a duplicate produced by the export/decompile tool, **not a new feature**. See [version delta](../version-delta).

## Directories without docs (noise exclusions)

These directories exist in the 1.4.6 source but deliberately get no class pages. The authoritative noise list is `excludeNamespaces` + `excludeSuffixes` in `tools/_dir-map-canonical.json`:

- Third-party libraries: `GalaxyCSharp`, `Newtonsoft.Json`, `StbSharp`, `Steamworks.NET`, `jose-jwt`, `System.Management`, `System.Numerics.Vectors`, `mscorlib`, `netstandard`, `Mono`.
- Platform and distribution: `TaleWorlds.Diamond.AccessProvider`, `TaleWorlds.PlatformService`, `TaleWorlds.ServiceDiscovery`, `TaleWorlds.PlayerServices`, `TaleWorlds.Launcher`, `TaleWorlds.Avatar`.
- Multiplayer and servers: `TaleWorlds.Network` (which the canonical map does route into the `network` bucket, see the rule row above), `TaleWorlds.MountAndBlade.Multiplayer*`, `TaleWorlds.MountAndBlade.DedicatedCustomServer`, `TaleWorlds.PSAI`.
- Generated code: any namespace ending in `AutoGenerated` or `CodeGenerator`, plus `TaleWorlds.GauntletUI.PrefabSystem`.
- `TaleWorlds.TwoDimension.Standalone`, `TaleWorlds.LinQuick` (falling into the default bucket `core-extra`).
- **Special case**: `TaleWorlds.NavigationSystem` in 1.4.6 contains only `Properties/AssemblyInfo.cs` and **no game types at all** — it is an empty shell assembly. Older pages describing it as "the navigation system" send you looking for types that do not exist; this module map is the authority for 1.4.6.
- **Already excluded**: `ManagedStarter` (a single `Program` file) is listed in `excludeNamespaces` of the canonical map, so it never becomes a bucket.

## Mental model: how to use this map

1. **Pick the module by layer**: world state → `campaignsystem`; one battle → `mountandblade`; interface → `screensystem` + `gauntletui`. The reasoning is in the [SDK layering overview](../sdk-overview).
2. **Find the type by directory**: in 1.4.6 the directory name *is* the assembly name, so grepping the source needs no guesswork.
3. **Only then enter the API section**: the section index gives the module's A–Z catalog; the type page is where you read what each member actually does.

## Navigation

- [↑ Up](../) — architecture hub
- ↔ Siblings: [SDK layering overview](../sdk-overview) · [version delta](../version-delta) · [中文](../../../zh/architecture/module-map/)
- ↑↑ Version landing: [en](../../) · [zh](../../../zh/)
- ↔ Cross-version: [per-class API comparison](../../../../versions/)