---
title: Developer Task Roadmap
description: I want to do X → dependency chain → entry classes and docs. Task-first navigation for Bannerlord mods (v1.3.15)
---
# Developer Task Roadmap

> Pick a task, then follow the dependency chain. This page is a **task hub**, not a class inventory. Many class pages are still stubs (coverage RED). Prefer architecture pages, guides, and existing deep_pass gold pages for real mental models.

## How to use this page

1. Find your row in the task table  
2. Walk the **dependency chain** left to right (skipping a step usually fails at boot, load, or mission start)  
3. Jump to entry classes when they help; treat stubs as signature indexes and return to architecture / guides for intent

```
Task intent → SubModule lifecycle → Behavior / Model / UI registration
                    ↓
             Action / Mission / Save boundaries
                    ↓
             Architecture + guides + deep class pages
```

---

## ↑ Parent Navigation

- [🏠 Version home](../../)
- [🏗️ Architecture](./)
- [⭐ SDK Overview](../sdk-overview)
- [📚 API Reference](../../api/)
- [📖 Guides](../../guide/)

## 🔀 Sibling Navigation

| Page | What it solves |
|------|----------------|
| [SDK Overview](../sdk-overview) | Layer map: which layers you touch |
| [Module System](../module-system) | `MBSubModuleBase` lifecycle and registration timing |
| [Save System](../save-system) | SaveIds, `[SaveableField]`, load order |
| [Crash & Save Boundaries](../crash-boundaries) | When you corrupt saves, NRE, or break lifecycles |
| [Doc Contract](../doc-contract) | Handwritten-only policy before writing class docs |
| [Guides](../../guide/) | Campaign / Mission / UI / save tutorials |

---

## Task table: I want to...

| I want to... | Dependency chain | Entry classes | Docs |
|--------------|------------------|---------------|------|
| **1. Register SubModule + CampaignBehavior** | `SubModule.xml` → DLL entry → `OnGameStart` / `InitializeGameStarter` → `CampaignGameStarter.AddBehavior` → `RegisterEvents` / `SyncData` | [`MBSubModuleBase`](../../api/core/MBSubModuleBase) · [`CampaignBehaviorBase`](../../api/campaign-ext/CampaignBehaviorBase) · [`CampaignGameStarter`](../../api/campaign-ext/CampaignGameStarter) · [`Campaign`](../../api/campaign/Campaign) | [Module System](../module-system) · [Campaign Guide](../../guide/campaign-system) · [Mod Workflow](../../guide/mod-workflow) |
| **2. Give gold / kill a hero / change kingdom safely** | Campaign context ready → pick the matching `*Action` → **`Action.Apply(...)`** (do not poke fields) → let vanilla events and UI follow | [`GiveGoldAction`](../../api/campaign-ext/GiveGoldAction) · [`KillCharacterAction`](../../api/campaign-ext/KillCharacterAction) · [`ChangeKingdomAction`](../../api/campaign-ext/ChangeKingdomAction) · [`Hero`](../../api/campaign/Hero) · [Actions index](../../api/campaign-ext/actions/) | [Crash boundaries § world changes](../crash-boundaries#2-world-changes-must-go-through-actionapply) · [Campaign Guide](../../guide/campaign-system) · [Common Patterns](../../guide/common-patterns) |
| **3. Custom save fields without corrupting saves** | Stable **SaveId** policy → `[SaveableClass]` / `[SaveableField]` **or** behavior `SyncData` → align with load order → verify round-trip with the save guide | [`SaveManager`](../../api/save-system/SaveManager) · [`CampaignBehaviorBase`](../../api/campaign-ext/CampaignBehaviorBase) (`SyncData`) · `DefinitionContext` | [Save System](../save-system) · [Save Guide](../../guide/save-system-guide) · [Crash boundaries § saves](../crash-boundaries#1-saves-saveid-sync-vs-saveablefield-load-order) |
| **4. MissionBehavior + agent death** | Register mission behavior at game start (or mission factory hooks) → `OnAgentRemoved` / damage callbacks → keep **mission** state separate from **campaign map** state | [`MissionBehavior`](../../api/mission/MissionBehavior) · [`Mission`](../../api/mission/Mission) · [`Agent`](../../api/mission/Agent) | [Module System](../module-system) · [Mission Guide](../../guide/mission-system) · [Crash boundaries § Agent lifecycle](../crash-boundaries#4-agentmission-lifecycle) |
| **5. Replace a GameModel (diplomacy / war score, etc.)** | `InitializeGameStarter` → `AddModel` / replacement chain → override only the methods you change → callers must read `Campaign.Current.Models` | [`GameModels`](../../api/campaign-ext/GameModels) · [`GameModelsManager`](../../api/core-extra/GameModelsManager) · [`Campaign`](../../api/campaign/Campaign) | [Module System](../module-system) · [Crash boundaries § Model replace](../crash-boundaries#7-model-replacement) · [Game Systems Overview](../../guide/game-systems-overview) |
| **6. Custom ViewModel / Gauntlet UI** | Prefab / movie → bind `ViewModel` → mount on the right Screen / Mission layer → **release on close**; do not keep dead VMs on behaviors | [`ViewModel`](../../api/core-extra/ViewModel) · ViewModel API · [GUI](../../api/gui/) | [Gauntlet Guide](../../guide/gauntlet-ui) · [Crash boundaries § UI lifetime](../crash-boundaries#8-uiviewmodel-lifetime) · [SDK Overview L4](../sdk-overview) |
| **7. Register new item / character objects** | XML (or code) definition → visible to `MBObjectManager` at the right stage → referenced as `ItemObject` / `CharacterObject` → consumed by campaign and mission | [`MBObjectManager`](../../api/campaign-ext/MBObjectManager) · [`ItemObject`](../../api/core/ItemObject) · [`CharacterObject`](../../api/campaign/CharacterObject) | [SDK Overview L2](../sdk-overview) · [Asset Pipeline](../../guide/asset-pipeline) · [Crash boundaries § MBObjectManager](../crash-boundaries#5-mbobjectmanager-registration) |

> **Coverage note**: many linked `api/**` pages are still stubs. Prefer **architecture + guides + gold deep pages** ([`SaveManager`](../../api/save-system/SaveManager), [`Hero`](../../api/campaign/Hero), [`Mission`](../../api/mission/Mission)). Class links are real anchors for future deep_pass work, not proof that the handbook is finished.

---

## Dependency chains (read order)

### 1. SubModule + CampaignBehavior

```
SubModule.xml declares the DLL
    → MBSubModuleBase.OnSubModuleLoad (config / Harmony, optional)
    → OnGameStart / InitializeGameStarter
    → CampaignGameStarter.AddBehavior(new MyBehavior())
    → MyBehavior.RegisterEvents()
    → Cross-save data: SyncData or the saveable graph
```

**Common mistakes**: touching `Campaign.Current` in `OnSubModuleLoad` (no campaign yet); constructing a behavior without `AddBehavior`; never calling `RegisterEvents` and assuming the hook is live.

### 2. World changes via Action

```
Intent (pay gold / kill / change affiliation)
    → TaleWorlds.CampaignSystem.Actions.*
    → XxxAction.Apply(...)
    → Vanilla keeps relations, messages, and related state consistent
```

Writing `hero.Gold += n` or `hero.Clan = ...` may "work" once, then desync UI, events, or saves. See [crash boundaries §2](../crash-boundaries#2-world-changes-must-go-through-actionapply).

### 3. Save fields

Two valid paths. **Do not keep two sources of truth for the same data.**

| Path | Best for | Rules |
|------|----------|-------|
| `CampaignBehaviorBase.SyncData` | Private behavior state, maps, counters | Lives with the behavior; watch load timing |
| `[SaveableField]` / `[SaveableClass]` | Types that join the object graph | **Never reuse a SaveId for a new meaning**; keep per-class field ids stable |

Deep reads: [Save System](../save-system), [SaveManager](../../api/save-system/SaveManager), [Save Guide](../../guide/save-system-guide).

### 4. Mission and Agent

```
Register MissionBehavior
    → Mission create / start
    → Agent spawn and tick
    → OnAgentRemoved / kill logic
    → Mission end: every Agent and behavior reference is dead
```

Campaign death (`KillCharacterAction`) and battlefield death (`Agent` state) are different worlds. When a mission callback mutates campaign data, confirm you are still in a safe Campaign phase.

### 5. GameModel replacement

```
InitializeGameStarter
    → starter.AddModel(new MyDiplomacyModel())  // follow the real API
    → runtime reads Campaign.Current.Models.*
```

Override only what you change. Caching an old model instance at construction time makes "replacement" a no-op. When several mods stack models, last registration wins; plan for that.

### 6. ViewModel / Gauntlet

```
Prefab + ViewModel property binding
    → Screen / GauntletLayer / MissionView mount
    → refresh on open / OnFinalize on close
    → do not pin a finalized VM on a CampaignBehavior field forever
```

### 7. New Item / Character

```
XML or code creates the object
    → MBObjectManager register / load
    → stable string ids referenced by equipment and troop tables
    → CharacterObject → Agent build chain works before combat
```

---

## Suggested first hour

| Step | Page | Why |
|------|------|-----|
| 1 | [Architecture hub](./) | Map |
| 2 | [SDK Overview](../sdk-overview) | Layers and modules |
| 3 | [Module System](../module-system) | When your code runs |
| 4 | [Crash & Save Boundaries](../crash-boundaries) | What not to touch |
| 5 | Matching guide (campaign / mission / save / Gauntlet) | Hands-on |
| 6 | Deep pages: [`Hero`](../../api/campaign/Hero) · [`Mission`](../../api/mission/Mission) · [`SaveManager`](../../api/save-system/SaveManager) | Mental models |

---

## Coverage / deep_pass relationship

- **Architecture + guides**: treat as the readable source of truth today.  
- **Gold class pages**: `SaveManager`, `Hero`, `Mission` (see Doc Contract).  
- **Mass `api/**` stubs**: a file is not a finished handbook. This roadmap links real paths so deep_pass can fill them later; while coverage is RED, trust architecture and guides first.  
- Read [Doc Contract](../doc-contract) before writing class docs.

---

## Quick entry links

- Boot: [`MBSubModuleBase`](../../api/core/MBSubModuleBase)  
- Campaign: [`Campaign`](../../api/campaign/Campaign) · [`Hero`](../../api/campaign/Hero) · [`CampaignBehaviorBase`](../../api/campaign-ext/CampaignBehaviorBase)  
- Mission: [`Mission`](../../api/mission/Mission) · [`Agent`](../../api/mission/Agent) · [`MissionBehavior`](../../api/mission/MissionBehavior)  
- Save: [`SaveManager`](../../api/save-system/SaveManager)  
- Mutations: [Actions](../../api/campaign-ext/actions/) · [`GiveGoldAction`](../../api/campaign-ext/GiveGoldAction) · [`KillCharacterAction`](../../api/campaign-ext/KillCharacterAction) · [`ChangeKingdomAction`](../../api/campaign-ext/ChangeKingdomAction)
