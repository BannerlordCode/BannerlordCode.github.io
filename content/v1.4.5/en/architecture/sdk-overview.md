---
title: SDK Overview — Module Map & Developer Roadmap (v1.4.5)
description: Bannerlord v1.4.5 SDK full module map, layered architecture, and mod developer roadmap
---
# SDK Overview — Module Map & Developer Roadmap (v1.4.5)

> This is a **developer roadmap**, not a module list. It answers three questions: why each layer exists, when you need it, and how to jump to the API docs.

## In one sentence

Bannerlord's managed code is a **strictly layered** set of `TaleWorlds.*` assemblies:

```
Foundation → Systems → Core → Engine → UI → Save → MountAndBlade → Campaign → Platform
```

Dependencies flow **bottom-up**. Mod code sits at the top and may touch any layer. **Start from the top four layers** (Campaign, Mission, UI, Save).

---

## ↑ Parent Navigation

- [🏠 Home](../../)
- [🏗️ Architecture](./)
- [📚 API Reference](../../api/)
- [📖 Guides](../../guide/)

## 🔀 Sibling Navigation

| Page | Solves |
|------|--------|
| [Roadmap](../roadmap/) | Overall progress and phases |
| [Developer Roadmap](../developer-roadmap/) | Phased delivery plan |
| [Doc Contract](../doc-contract/) | Handwritten-page spec |
| [Noise Policy](../noise-policy/) | Non-business type handling |
| [Sandbox-Native Policy](../sandbox-native-policy/) | Native-code boundary |
| [Crash Boundary](../crash-boundary/) | Crash-safety constraints |
| [Milestone Report](../milestone-report/) | Coverage milestones |

---

## Layered diagram

```
┌─────────────────────────────────────────────────────────────┐
│ Layer 8  Platform & Services                                 │
│   ModuleManager · PlatformService · Diamond · PlayerServices │
├─────────────────────────────────────────────────────────────┤
│ Layer 7  Campaign  ← 90% of campaign mods live here          │
│   CampaignSystem · CampaignSystem.ViewModelCollection         │
│   Hero · MobileParty · Kingdom · Clan · Settlement · Town     │
├─────────────────────────────────────────────────────────────┤
│ Layer 6  MountAndBlade  ← 90% of combat mods live here       │
│   Mission · Agent · Formation · Team · MissionBehavior        │
├─────────────────────────────────────────────────────────────┤
│ Layer 5  SaveSystem                                          │
│   SaveManager · SaveContext · LoadContext                     │
├─────────────────────────────────────────────────────────────┤
│ Layer 4  Gauntlet UI                                         │
│   GauntletUI · ViewModel · GauntletMovie · Widget             │
├─────────────────────────────────────────────────────────────┤
│ Layer 3  Engine bridge                                       │
│   Scene · GameEntity · MatrixFrame · NavigationSystem         │
├─────────────────────────────────────────────────────────────┤
│ Layer 2  Core data                                           │
│   ItemObject · CharacterObject · Equipment · MBObjectManager  │
├─────────────────────────────────────────────────────────────┤
│ Layer 1  Systems base                                        │
│   ObjectSystem · ScreenSystem · InputSystem · Network         │
├─────────────────────────────────────────────────────────────┤
│ Layer 0  Foundation                                          │
│   Library · Localization (TextObject)                         │
└─────────────────────────────────────────────────────────────┘
        ↕ depends on Native engine throughout
```

---

## Decision table: I want to...

| I want to... | Layers | Entry class | Start here |
|--------------|--------|-------------|------------|
| Register a mod | L8 + L6 | `MBSubModuleBase` · `ModuleInfo` | [Doc Contract](../doc-contract/) |
| Add troops/items | L2 + XML | `ItemObject` · `CharacterObject` · `MBObjectManager` | [Core API](../../api/core/) · [Core-Extra API](../../api/core-extra/) |
| Make a campaign mod | L7 | `CampaignBehaviorBase` · `CampaignEvents` | [Campaign API](../../api/campaign/) |
| Make a combat/mission mod | L6 | `MissionBehavior` · `MissionLogic` · `Agent` · `Formation` | [Mission API](../../api/mission/) |
| Add a custom UI | L4 + L6 | `ViewModel` · `GauntletMovie` · `ScreenBase` | [GUI API](../../api/gui/) |
| Persist custom data | L5 | `[SaveableField]` · `[SaveableProperty]` · `SaveManager` | [Save API](../../api/save-system/) |
| Localize strings | L0 | `TextObject` · `MBTextManager` | [Localization API](../../api/localization/) |
| Manipulate scene entities | L3 | `Scene` · `GameEntity` · `MatrixFrame` | [Engine API](../../api/engine/) |
| Read player input | L1 | `InputContext` · `InputKey` | [API index](../../api/) |
| Add ViewModel binding | L4 + L1 | `ViewModel` · `DataSourceProperty` | [ViewModel API](../../api/viewmodel/) |
| Custom campaign-ext types | L7 + L2 | `Settlement` · `PartyTemplateObject` · `CultureObject` | [Campaign-Ext API](../../api/campaign-ext/) |
| Custom combat components | L6 | `AgentComponent` · `MissionLogic` subclass | [Mission-Ext API](../../api/mission-ext/) |
| Extend core models | L2 | `SkillObject` · `CraftingTemplate` · `BasicCharacterObject` | [Core-Extra API](../../api/core-extra/) |

---

## Data flow: from XML to the screen

```
SubModule.xml declares XML assets
        │
        ▼
ModuleManager loads module
        │
        ▼
MBObjectManager deserializes XML → ItemObject / CharacterObject
        │
        ▼
Campaign instantiates MobileParty / Hero with equipment
        │
        ▼
Mission spawns Agents
        │
        ▼
Gauntlet ViewModel binds data to HUD / Encyclopedia
```

If any step fails, check [Core API](../../api/core/) first.

---

## Module list (v1.4.5, grouped by layer)

> Scale: **65 TaleWorlds assemblies / DLLs**. v1.4.5 splits Multiplayer, View, and Gauntlet into separate assemblies; per-module responsibilities are largely unchanged from v1.3.15.

### Layer 0 — Foundation

| Module | Responsibility | mod relevance |
|--------|----------------|---------------|
| `TaleWorlds.Library` | `Vec3`/`Mat3`/`Vec2` math, `MBList`, `InformationManager` messaging, debugging | Nearly every file `using`s it |
| `TaleWorlds.Localization` | `TextObject`, `MBTextManager`, language data | Every player-facing string passes through |

### Layer 1 — Systems base

| Module | Responsibility | mod relevance |
|--------|----------------|---------------|
| `TaleWorlds.ObjectSystem` | `MBObjectManager`, `MBObjectBase`, XML deserialization | Load custom items/characters from XML |
| `TaleWorlds.ScreenSystem` | `ScreenBase`/`ScreenManager` screen stack | Custom full-screen UI |
| `TaleWorlds.InputSystem` | `InputContext`, keys/gamepad | Custom hotkeys |

### Layer 2 — Core data

| Module | Responsibility | mod relevance |
|--------|----------------|---------------|
| `TaleWorlds.Core` | `ItemObject`, `Equipment`, `CharacterObject`, crafting/skills/concepts | Define new troops, items, gear |
| `TaleWorlds.Core.ViewModelCollection` | Core ViewModels | Pair with L4 for data binding |

### Layer 3 — Engine bridge

| Module | Responsibility | mod relevance |
|--------|----------------|---------------|
| `TaleWorlds.Engine` | `Scene`, `GameEntity`, `MatrixFrame`, `Skeleton` | Manipulate combat-scene entities, VFX, positions |
| `TaleWorlds.NavigationSystem` | Navmesh/pathfinding | Custom AI pathing |

### Layer 4 — Gauntlet UI

| Module | Responsibility | mod relevance |
|--------|----------------|---------------|
| `TaleWorlds.GauntletUI` | `Widget`, `ViewModel` two-way binding, `GauntletMovie`, animation | Basis of any custom UI |
| `TaleWorlds.GauntletUI.PrefabSystem` | Prefab UI | Load `.prefab`, reuse official templates |

### Layer 5 — SaveSystem

| Module | Responsibility | mod relevance |
|--------|----------------|---------------|
| `TaleWorlds.SaveSystem` | `SaveManager`, `SaveContext`, `LoadContext`, `[SaveableField/Property]` | Any mod persisting data across saves |

### Layer 6 — MountAndBlade

| Module | Responsibility | mod relevance |
|--------|----------------|---------------|
| `TaleWorlds.MountAndBlade` | `Mission`, `Agent`, `Formation`, `Team`, `MissionBehavior` | Core of all combat mods |
| `TaleWorlds.MountAndBlade.ViewModelCollection` | M&B ViewModels | Combat UI data binding |
| `TaleWorlds.MountAndBlade.Helpers` | Helper methods | Look up official algorithm implementations |

### Layer 7 — Campaign

| Module | Responsibility | mod relevance |
|--------|----------------|---------------|
| `TaleWorlds.CampaignSystem` | `MobileParty`, `Hero`, `Kingdom`, `Clan`, `Settlement`, `Town`, `Village`, `Campaign` | Core of campaign mods |
| `TaleWorlds.CampaignSystem.ViewModelCollection` | Campaign ViewModels | Campaign map UI |

### Layer 8 — Platform & services

| Module | Responsibility | mod relevance |
|--------|----------------|---------------|
| `TaleWorlds.ModuleManager` | Module load/dependency resolution `ModuleInfo`/`ModuleHelper` | Write `SubModule.xml`, declare dependencies |
| `TaleWorlds.PlatformService.*` | Steam / Epic / GOG platform abstraction | Cross-platform compatibility |
| `TaleWorlds.MountAndBlade.SteamWorkshop` | Workshop | Publish mods |

---

## Key class links

- Campaign: [`Campaign`](../../api/campaign/Campaign/) · [`CampaignBehaviorBase*`](../../../../versions/CampaignBehaviorBase/) · [`Hero*`](../../../../versions/Hero/) · [`MobileParty*`](../../../../versions/MobileParty/) · [`Kingdom*`](../../../../versions/Kingdom/) · [`Clan*`](../../../../versions/Clan/) · [`Settlement*`](../../../../versions/Settlement/) · [`Town*`](../../../../versions/Town/) · [`Village*`](../../../../versions/Village/)
- Combat: [`Mission*`](../../../../versions/Mission/) · [`MissionBehavior*`](../../../../versions/MissionBehavior/) · [`Agent`](../../api/mission/Agent/) · [`Formation*`](../../../../versions/Formation/) · `Team`
- Core: [`ItemObject*`](../../../../versions/ItemObject/) · [`MBObjectManager`](../../api/campaign-ext/MBObjectManager/) · [`TextObject`](../../api/localization/TextObject/)
- Quest/Events: [`QuestBase*`](../../../../versions/QuestBase/) · [`IssueBase*`](../../../../versions/IssueBase/)
- UI: [`ViewModel`](../../api/core-extra/ViewModel/) · [`GauntletMovie`](../../api/gui/GauntletMovie/)
- Save: [`SaveManager`](../../api/save-system/SaveManager/) · `AutoGeneratedSaveManager`

> Links point to intended API or cross-version pages. Pages that do not yet exist will be filled by the class-page subagent.

---

## Version delta quick reference

| Version | Modules | Key change |
|---------|---------|------------|
| v1.3.0 | 31 | SandBox/StoryMode source available |
| v1.3.15 | 54 | SaveSystem standalone; platform split |
| v1.4.5 (this doc) | 65 DLLs | Multiplayer/View/Gauntlet split out |

Full comparison: [Developer Roadmap](../developer-roadmap/).
