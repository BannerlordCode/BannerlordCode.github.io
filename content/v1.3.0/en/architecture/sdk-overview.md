---
title: SDK Overview — Module Map and Developer Roadmap
description: Bannerlord SDK module map, layered architecture, and mod developer roadmap (v1.3.0)
---
# SDK Overview — Module Map and Developer Roadmap

> This article is not just a module list; it is a **developer roadmap**. It answers three questions: why each layer exists, when you will touch it, and how to jump to the corresponding API docs.

## One-sentence orientation

Bannerlord's managed code is a **strictly layered** set of `TaleWorlds.*` assemblies:

```
Foundation → Systems → Core → Engine → UI → MountAndBlade → Campaign → Platform
```

**Dependencies run bottom-up**: upper layers reference lower layers, never the reverse. Mod code lives at the very top and can reach any layer. **Beginners only need the top four layers (Campaign, Mission, UI, Save) to get started.**

---

## Before You Start

Make sure you have Mount & Blade II: Bannerlord v1.3.0, Visual Studio 2022 with the .NET Desktop Development workload, and basic C# / XML reading skills. If you have not created a SubModule yet, start with the [Developer Guide](../../guide/).

---

## Documentation Structure and Navigation

The site now uses a section-tree based sidebar (`section-tree.json`): version → language → category → chapter, with a way back up at every level. The top nav remembers your current page, so switching language/version does not lose your place; breadcrumbs let you return to the parent directory. All internal links are checked by `tools/audit-links.mjs`.

Content is organized into four entry points:

- **Architecture:** module maps and roadmaps like this one.
- **Developer Guide:** hands-on workflows for specific systems.
- **API Reference:** descriptions, mental models, signatures, and examples for every class.
- **Cross-version Comparison (versions/):** auto-generated API diff pages.

## How to Find a Class Quickly

API directories (e.g. [Campaign API](../../api/campaign/)) are no longer alphabetical dumps; they are grouped by namespace/functional area:

- Kingdom and faction logic → `Campaign` module → kingdom/politics groups
- Party movement and AI → `Campaign` module → party/movement groups
- Mission/combat extensions → `Mission` or `Mission-Ext` module → relevant subsystem groups
- Every class page has breadcrumbs, so you can return to the API directory or SDK overview at any time

> High-impact core classes (Tier-S) are documented by hand where possible; all remaining classes are generated to ensure complete coverage and improved descriptions over time.

---

## Parent Navigation

- [Home](../../)
- [Architecture](./)
- [API Index](../../api/)
- [Developer Guide](../../guide/)

## Sibling Navigation

| Page | What it covers |
|------|----------------|
| [Module System](../module-system/) | `MBSubModuleBase` lifecycle and behavior registration |
| [Save System](../save-system/) | `[SaveableField]` and `SaveManager` |
| [Version Delta](../version-delta/) | Differences between v1.3.0, v1.3.15, and v1.4.5 |
| [Native Interop](../native-interop/) | How C# calls into `TaleWorlds.Native.dll` |
| [Developer Guide](../../guide/) | Entry points from idea to a working mod |
| [Campaign Basics](../../guide/campaign-basics/) | Campaign system, behaviors, and events |
| [Mission Basics](../../guide/mission-basics/) | Mission, Agent, and combat logic |
| [UI Basics](../../guide/ui-basics/) | Gauntlet / ViewModel primer |

---

## Layer Dependency Diagram

```
┌─────────────────────────────────────────────────────────────┐
│ Layer 7  Platform & Services                                  │
│   ModuleManager · PlatformService · PlayerServices            │
├─────────────────────────────────────────────────────────────┤
│ Layer 6  Campaign  ← 90% of campaign mods live here           │
│   CampaignSystem · CampaignSystem.ViewModelCollection         │
│   Hero · MobileParty · Kingdom · Clan · Settlement · Town     │
├─────────────────────────────────────────────────────────────┤
│ Layer 5  MountAndBlade  ← 90% of combat mods live here        │
│   Mission · Agent · Formation · Team · MissionBehavior        │
├─────────────────────────────────────────────────────────────┤
│ Layer 4  Gauntlet UI                                         │
│   GauntletUI · ViewModel · GauntletMovie · Widget             │
├─────────────────────────────────────────────────────────────┤
│ Layer 3  Engine Bridge                                       │
│   Scene · GameEntity · MatrixFrame · NavigationSystem         │
├─────────────────────────────────────────────────────────────┤
│ Layer 2  Core Data                                           │
│   ItemObject · CharacterObject · Equipment · MBObjectManager  │
├─────────────────────────────────────────────────────────────┤
│ Layer 1  Systems Base                                        │
│   ObjectSystem · ScreenSystem · InputSystem · Network         │
├─────────────────────────────────────────────────────────────┤
│ Layer 0  Foundation                                          │
│   Library · Localization (TextObject)                         │
└─────────────────────────────────────────────────────────────┘
        ↕ Native engine (TaleWorlds.Native.dll) throughout
```

---

## Decision Table: I Want to Do X, Which Layers Do I Touch?

| I want to... | Layer | Entry class / mechanism | Starting docs |
|--------------|-------|------------------------|---------------|
| Register a mod (game-start hooks) | L7 + L5 | [`MBSubModuleBase`](../../api/core/MBSubModuleBase/) · `ModuleInfo` | [Developer Guide](../../guide/) |
| Add troops / items / equipment | L2 + XML | [`ItemObject`](../../../../versions/ItemObject/) · `CharacterObject` · `MBObjectManager` | [Core API](../../api/core/) · [Core-Extra API](../../api/core-extra/) |
| Build a campaign mod | L6 | [`CampaignBehaviorBase`](../../api/campaign/CampaignBehaviorBase/) · `CampaignEvents` | [Campaign API](../../api/campaign/) · [Campaign Basics](../../guide/campaign-basics/) |
| Build a mission / combat mod | L5 | [`MissionBehavior`](../../api/mission/MissionBehavior/) · `MissionLogic` · `Agent` · `Formation` | [Mission API](../../api/mission/) · [Mission Basics](../../guide/mission-basics/) |
| Add a custom UI screen | L4 + L5 | [`ViewModel`](../../api/core-extra/ViewModel/) · `GauntletMovie` · `ScreenBase` | [GUI API](../../api/gui/) · [UI Basics](../../guide/ui-basics/) |
| Persist custom save data | L5 + L2 | `[SaveableField]` · `[SaveableProperty]` · `SaveManager` | [Save Architecture](../save-system/) · [Save Guide](../../guide/save-system/) |
| Add localized text | L0 | `TextObject` · `MBTextManager` | [Localization API](../../api/localization/) · [UI Basics](../../guide/ui-basics/) |
| Manipulate scene entities | L3 | `Scene` · `GameEntity` · `MatrixFrame` | [Engine API](../../api/engine/) |
| Read player input | L1 | `InputContext` · `InputKey` | [API Index](../../api/) |
| Add a new ViewModel / binding | L4 + L1 | [`ViewModel`](../../api/core-extra/ViewModel/) · `DataSourceProperty` | [ViewModel API](../../api/viewmodel/) |
| Add campaign extension types | L6 + L2 | [`Settlement`](../../../../versions/Settlement/) · `PartyTemplateObject` · `CultureObject` | [Campaign-Ext API](../../api/campaign-ext/) |
| Add combat components / Agent behavior | L5 | `AgentComponent` · `MissionLogic` subclass | [Mission-Ext API](../../api/mission-ext/) |
| Extend core models | L2 | `SkillObject` · `CraftingTemplate` · `BasicCharacterObject` | [Core-Extra API](../../api/core-extra/) |

> **How to use**: pick the row, read the entry class signature, then return here to check whether you need a lower layer (campaign mods almost always need saves, for example).

---

## Data Flow: From XML to Screen

A typical mod that adds a new troop follows this chain:

```
SubModule.xml declares XML assets
        │
        ▼
ModuleManager loads the module
        │
        ▼
MBObjectManager deserializes XML → ItemObject / CharacterObject
        │
        ▼
Campaign startup turns those into equipment for MobileParty / Hero
        │
        ▼
Mission spawns Agents wearing the equipment
        │
        ▼
Gauntlet ViewModels bind the data to HUD / Encyclopedia
```

If anything breaks, start with the [Developer Guide](../../guide/) and [Core API](../../api/core/).

---

## Module List (v1.3.0, Grouped by Layer)

> Scale: **31 TaleWorlds modules / 4596 .cs files / 5306 types**. This is the early baseline of the 1.3 series.

### Layer 0 — Foundation

| Module | Responsibility | Mod relevance |
|--------|---------------|---------------|
| `TaleWorlds.Library` | `Vec3`/`Mat3`/`Vec2` math, `MBList`, `InformationManager` messages, debug | Almost every file `using` this; show messages, vector math, logs |
| `TaleWorlds.Localization` | `TextObject`, `MBTextManager`, language data | Required for any player-facing text |

### Layer 1 — Systems base

| Module | Responsibility | Mod relevance |
|--------|---------------|---------------|
| `TaleWorlds.ObjectSystem` | `MBObjectManager`, `MBObjectBase`, XML deserialization | Load custom items/characters from XML |
| `TaleWorlds.ScreenSystem` | `ScreenBase`/`ScreenManager` screen stack | Custom full-screen UI |
| `TaleWorlds.InputSystem` | `InputContext`, keys/gamepad | Custom hotkeys |

### Layer 2 — Core data

| Module | Responsibility | Mod relevance |
|--------|---------------|---------------|
| `TaleWorlds.Core` | `ItemObject`, `Equipment`, `CharacterObject`, crafting/skills/concepts | Define new troops, items, equipment |
| `TaleWorlds.Core.ViewModelCollection` | Core ViewModels | Data binding for L4 |

### Layer 3 — Engine bridge

| Module | Responsibility | Mod relevance |
|--------|---------------|---------------|
| `TaleWorlds.Engine` | `Scene`, `GameEntity`, `MatrixFrame`, `Skeleton` | Manipulate combat scene entities, effects, positions |
| `TaleWorlds.NavigationSystem` | Navmesh/pathfinding | Custom AI pathfinding |

### Layer 4 — Gauntlet UI

| Module | Responsibility | Mod relevance |
|--------|---------------|---------------|
| `TaleWorlds.GauntletUI` | `Widget`, `ViewModel` binding, `GauntletMovie`, animations | Foundation for any custom UI |

### Layer 5 — MountAndBlade

| Module | Responsibility | Mod relevance |
|--------|---------------|---------------|
| `TaleWorlds.MountAndBlade` | `Mission`, `Agent`, `Formation`, `Team`, `MissionBehavior` | Core of all combat mods |
| `TaleWorlds.MountAndBlade.ViewModelCollection` | M&B ViewModels | Combat UI data binding |

### Layer 6 — Campaign

| Module | Responsibility | Mod relevance |
|--------|---------------|---------------|
| `TaleWorlds.CampaignSystem` | `MobileParty`, `Hero`, `Kingdom`, `Clan`, `Settlement`, `Town`, `Village`, `Campaign` | Core of campaign mods |
| `TaleWorlds.CampaignSystem.ViewModelCollection` | Campaign ViewModels | Campaign map UI |

### Layer 7 — Platform & services

| Module | Responsibility | Mod relevance |
|--------|---------------|---------------|
| `TaleWorlds.ModuleManager` | Module load/dependency resolution `ModuleInfo`/`ModuleHelper` | Writing `SubModule.xml`, declaring dependencies |
| `TaleWorlds.PlatformService.*` | Steam / Epic / GOG abstraction | Cross-platform compatibility |

---

## Links to Key Classes

These are the high-traffic entry points for modders (`*` marks auto-generated cross-version diff pages):

- Campaign: [`Campaign`](../../api/campaign/Campaign/) · [`CampaignBehaviorBase`](../../api/campaign/CampaignBehaviorBase/) · [`Hero*`](../../../../versions/Hero/) · [`MobileParty*`](../../../../versions/MobileParty/) · [`Kingdom*`](../../../../versions/Kingdom/) · [`Clan*`](../../../../versions/Clan/) · [`Settlement*`](../../../../versions/Settlement/) · [`Town*`](../../../../versions/Town/) · [`Village*`](../../../../versions/Village/)
- Combat: [`Mission*`](../../../../versions/Mission/) · [`MissionBehavior`](../../api/mission/MissionBehavior/) · [`Agent`](../../api/mission/Agent/) · [`Formation*`](../../../../versions/Formation/) · [`Team`](../../api/mission-ext/Team/)
- Core: [`ItemObject*`](../../../../versions/ItemObject/) · `CampaignObjectManager` · [`TextObject`](../../api/localization/TextObject/)
- UI: [`ViewModel`](../../api/core-extra/ViewModel/) · [`GauntletMovie`](../../api/gui/GauntletMovie/)
- Save: `[SaveableField]` · `[SaveableProperty]` · `SaveManager` (see [Save Architecture](../save-system/))
- Module entry point: [`MBSubModuleBase`](../../api/core/MBSubModuleBase/)

> Note: links target the closest available page. If a cross-version or API page does not yet exist, the link points where it will appear once generated.

---

## Version Snapshot

| Aspect | v1.3.0 (this doc) | v1.3.15 | v1.4.5 |
|--------|-------------------|---------|--------|
| Modules | 31 | 54 | 65 (DLL) |
| Types | 5306 | 5811 | 2523* |
| Key changes | Includes SandBox/StoryMode gameplay modules | `SaveSystem` becomes independent; platform services split | Multiplayer/View/Gauntlet split into separate assemblies |

See the [cross-version index](../../../../versions/) for full per-class diffs.

---

## Where to Go Next

- [Module System](../module-system/) — when your code runs and how to register behaviors
- [Save System](../save-system/) — persisting custom data
- [Version Delta](../version-delta/) — migrating to v1.3.15 or v1.4.5
- [Native Interop](../native-interop/) — calling into the native engine
- [Campaign Basics](../../guide/campaign-basics/) — campaign system, behaviors, events
- [Mission Basics](../../guide/mission-basics/) — Mission, Agent, and combat logic
- [UI Basics](../../guide/ui-basics/) — Gauntlet / ViewModel primer
- [Developer Guide](../../guide/) — environment, project structure, testing, publishing
- [Common Issues](../../guide/common-issues/) — typical adaptation problems and troubleshooting
- [Cross-version comparison](../../../../versions/) — check API changes before migrating
