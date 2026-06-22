---
title: API Reference
description: Complete API reference for Bannerlord SDK
---

# API Reference

Complete API reference for v1.3.15 — **4819** public types, **4819** documented (100%).

---

## ↑ Parent Navigation

- [🏠 Home](../../../) — Version picker
- [🏗️ Architecture](../architecture/) — SDK big picture, module map, layered architecture
- [⭐ SDK Overview](../architecture/sdk-overview) — Layered map of all 54 modules & mod entry cheatsheet
- [🗂️ Full Catalog](./catalog) — All 4819 types (100% documented)

## 🌳 Tree Navigation

Organized by SDK architectural layers, from foundation library to campaign systems.

```
Bannerlord SDK v1.3.15
├── 📚 Library (201 types, 100%)
│   └── TaleWorlds.Library — Math/Containers/Serialization base
├── ⚙️ System (246 types, 100%)
│   └── TaleWorlds.Core.System — Events/Messages/Task scheduling
├── 📦 Core (321 types, 100%)
│   └── TaleWorlds.Core — ObjectManager/MBObject/Equipment/ItemObject
├── 🔧 Engine (154 types, 100%)
│   └── TaleWorlds.Engine — Scene/NativeObject/Resource management
├── 🖥️ UI / Gauntlet (265 types, 100%)
│   └── TaleWorlds.MountAndBlade.View — GauntletMovie/ScreenManager/ViewModel
├── 💾 Save-System (56 types, 100%)
│   └── TaleWorlds.SaveSystem — SaveManager/SaveContext/LoadContext
├── ⚔️ MountAndBlade (1644 types, 100%)
│   ├── Mission — Agent/Formation/Team/Mission
│   └── Mission-Ext — MissionBehavior/AgentComponent
├── 🏰 Campaign (1829 types, 100%)
│   ├── Campaign — MobileParty/Kingdom/Clan/Hero
│   └── Campaign-Ext — Settlement/PartyTemplate/Workshop
└── 🌐 Platform Services / Other (103 types)
    ├── Localization — MBTextManager
    ├── Input — Input system
    └── Other — Misc
```

## 🔀 Sibling Navigation

| Sibling Page | Purpose |
|-------------|---------|
| [📋 Full Catalog](./catalog) | All 4819 types by area, with documentation status |
| [🏗️ Architecture](../architecture/) | SDK layers, module loading, save internals |
| [🔀 Cross-Version Comparison](../../../versions/) | 1.3.0 → 1.3.15 → 1.4.5 class API deltas |
| [📖 Guides](../guide/) | UI/Mission/Campaign/Save practical tutorials |

## ↓ Child Navigation — API Areas

Sorted by SDK layer. Each row shows type count and documentation coverage.

### Foundation — Library & Systems

| Area | Types | Documented | Coverage | Key Classes | Enter |
|------|-------|-----------|----------|-------------|-------|
| Library | 201 | 201 | 100% | `MBList<T>`, `MathF`, `Common` | [→ catalog](./catalog-library) |
| System | 246 | 246 | 100% | `MessageBroker`, `GameHandler` | [→ catalog](./catalog-system) |
| Core | 321 | 321 | 100% | `MBObjectManager`, `Equipment`, `BasicCultureObject` | [→](./core/) |
| Engine | 154 | 154 | 100% | `Scene`, `NativeObject`, `GameEntity` | [→](./engine/) |

### Middle — UI & Save

| Area | Types | Documented | Coverage | Key Classes | Enter |
|------|-------|-----------|----------|-------------|-------|
| UI / Gauntlet | 265 | 265 | 100% | `GauntletMovie`, `ScreenManager`, `ViewModel` | [→](./gui/) |
| Save-System | 56 | 56 | 100% | `SaveManager`, `SaveAttributes`, `SaveContext` | [→](./save-system/) |

### Upper — Combat & Campaign

| Area | Types | Documented | Coverage | Key Classes | Enter |
|------|-------|-----------|----------|-------------|-------|
| Mission | 1644 | 1644 | 100% | `Agent`, `Formation`, `Team`, `Mission` | [→](./mission/) |
| Mission-Ext | — | — | — | `MissionBehavior`, `AgentComponent` | [→](./mission-ext/) |
| Campaign | 1829 | 1829 | 100% | `MobileParty`, `Kingdom`, `Clan`, `Hero` | [→](./campaign/) |
| Campaign-Ext | — | — | — | `Settlement`, `PartyTemplate`, `Workshop` | [→](./campaign-ext/) |

### Auxiliary — Localization, Items, Input

| Area | Types | Documented | Coverage | Key Classes | Enter |
|------|-------|-----------|----------|-------------|-------|
| Items | — | — | — | `ItemObject`, `EquipmentElement` | [→](./items/) |
| ViewModel | — | — | — | `ViewModel`, `DataSourceProperty` | [→](./viewmodel/) |
| Localization | 21 | 21 | 100% | `MBTextManager` | [→](./localization/) |
| Input | 19 | 19 | 100% | Input system | [→ catalog](./catalog-input) |

> 💡 **Developer tip**: All 4819 types are now documented. Find any type by name in the [Full Catalog](./catalog). Cross-version API differences in [Versions](../../../versions/).

