---
title: SDK Overview — Module Map & Developer Roadmap
description: Bannerlord SDK full module map, layered architecture, and mod developer roadmap (v1.3.15)
---
# SDK Overview — Module Map & Developer Roadmap

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
| [Module System](../module-system/) | Loading, lifecycle, SubModule.xml |
| [Save System](../save-system/) | `[SaveableField]` and SaveManager |
| [Version Delta](../version-delta/) | Cross-version migration |
| [Guides](../../guide/) | Practical tutorials |

---

## Layered diagram

```
┌─────────────────────────────────────────────────────────────┐
│ Layer 8  Platform & Services                                 │
│   ModuleManager · PlatformService · Diamond · PlayerServices │
├─────────────────────────────────────────────────────────────┤
│ Layer 7  Campaign  ← 90% of campaign mods live here          │
│   CampaignSystem                                             │
│   Hero · MobileParty · Kingdom · Clan · Settlement · Town    │
├─────────────────────────────────────────────────────────────┤
│ Layer 6  MountAndBlade  ← 90% of combat mods live here       │
│   Mission · Agent · Formation · Team · MissionBehavior       │
├─────────────────────────────────────────────────────────────┤
│ Layer 5  SaveSystem                                          │
│   SaveManager · SaveContext · LoadContext                    │
├─────────────────────────────────────────────────────────────┤
│ Layer 4  Gauntlet UI                                         │
│   GauntletUI · ViewModel · GauntletMovie · Widget            │
├─────────────────────────────────────────────────────────────┤
│ Layer 3  Engine bridge                                       │
│   Scene · GameEntity · MatrixFrame · NavigationSystem        │
├─────────────────────────────────────────────────────────────┤
│ Layer 2  Core data                                           │
│   ItemObject · CharacterObject · Equipment · MBObjectManager │
├─────────────────────────────────────────────────────────────┤
│ Layer 1  Systems base                                        │
│   ObjectSystem · ScreenSystem · InputSystem · Network        │
├─────────────────────────────────────────────────────────────┤
│ Layer 0  Foundation                                          │
│   Library · Localization (TextObject)                        │
└─────────────────────────────────────────────────────────────┘
        ↕ depends on Native engine throughout
```

---

## Decision table: I want to...

| I want to... | Layers | Entry class | Start here |
|--------------|--------|-------------|------------|
| Register a mod | L8 + L6 | `MBSubModuleBase` · `ModuleInfo` | [Module System](../module-system/) |
| Add troops/items | L2 + XML | `ItemObject` · `CharacterObject` · `MBObjectManager` | [Core API](../../api/core/) · [Core-Extra](../../api/core-extra/) |
| Make a campaign mod | L7 | `CampaignBehaviorBase` · `CampaignEvents` | [Campaign API](../../api/campaign/) · [Campaign Guide](../../guide/campaign-system/) |
| Make a combat/mission mod | L6 | `MissionBehavior` · `Agent` · `Formation` | [Mission API](../../api/mission/) · [Mission Guide](../../guide/mission-system/) |
| Add a custom UI | L4 + L6 | `ViewModel` · `GauntletMovie` | [GUI API](../../api/gui/) · [Gauntlet Guide](../../guide/gauntlet-ui/) |
| Persist custom data | L5 | `[SaveableField]` · `SaveManager` | [Save API](../../api/save-system/) · [Save architecture](../save-system/) |
| Localize strings | L0 | `TextObject` · `MBTextManager` | [Localization API](../../api/localization/) · [Localization Guide](../../guide/localization/) |
| Manipulate scene entities | L3 | `Scene` · `GameEntity` · `MatrixFrame` | [Engine API](../../api/engine/) |
| Read player input | L1 | `InputContext` · `InputKey` | [API index](../../api/) |
| Add ViewModel binding | L4 + L1 | `ViewModel` · `DataSourceProperty` | [ViewModel API](../../api/viewmodel/) |

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

If any step fails, check [Module System](../module-system/) and [Core API](../../api/core/) first.

---

## Key class links

- Campaign: [`Campaign`](../../api/campaign/Campaign/) · [`CampaignBehaviorBase`](../../../../versions/CampaignBehaviorBase/) · [`Hero`](../../../../versions/Hero/) · [`MobileParty`](../../../../versions/MobileParty/) · [`Kingdom`](../../../../versions/Kingdom/) · [`Clan`](../../../../versions/Clan/) · [`Settlement`](../../../../versions/Settlement/) · [`Town`](../../../../versions/Town/) · [`Village`](../../../../versions/Village/)
- Combat: [`Mission`](../../../../versions/Mission/) · [`MissionBehavior`](../../../../versions/MissionBehavior/) · [`Agent`](../../api/mission/Agent/) · [`Formation`](../../../../versions/Formation/) · [`Team`](../../api/mission/Team/)
- Core: [`ItemObject`](../../../../versions/ItemObject/) · [`MBObjectManager`](../../api/campaign-ext/MBObjectManager/) · [`TextObject`](../../api/localization/TextObject/)
- Quest/Events: [`QuestBase`](../../../../versions/QuestBase/) · [`IssueBase`](../../../../versions/IssueBase/)
- UI: [`ViewModel`](../../api/core-extra/ViewModel/) · [`GauntletMovie`](../../api/gui/GauntletMovie/)
- Save: [`SaveManager`](../../api/save-system/SaveManager/) · `AutoGeneratedSaveManager`

> Links point to intended API or cross-version pages. Pages that do not yet exist will be filled by the class-page subagent.

---

## Version delta quick reference

| Version | Modules | Key change |
|---------|---------|------------|
| v1.3.0 | 31 | SandBox/StoryMode source available |
| v1.3.15 | 54 | SaveSystem standalone; platform split |
| v1.4.5 | 65 DLLs | Multiplayer/View/Gauntlet split out |

Full comparison: [Version Delta](../version-delta/).
