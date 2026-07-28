---
title: Crash & Save Boundaries
description: Common Bannerlord mod crash and save-corruption boundaries — SaveId, Action.Apply, Campaign vs Mission timing, Agent lifetime, MBObjectManager, SubModule, Models, ViewModels
---
# Crash & Save Boundaries

> Most "random crashes" and "load and die" bugs are not random. They sit on fixed boundaries: wrong lifecycle, wrong API shape. This page lists **symptoms / correct practice / docs / anti-patterns** with real type names.

Use with the [Developer Task Roadmap](../developer-roadmap): the roadmap shows the path; this page shows where shortcuts break.

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
| [Developer Task Roadmap](../developer-roadmap) | I want X → dependency chain |
| [Module System](../module-system) | SubModule / behavior registration timing |
| [Save System](../save-system) | SaveManager and marked fields |
| [SDK Overview](../sdk-overview) | Layer and module map |
| [Doc Contract](../doc-contract) | Quality bar for class docs |

---

## Boundary map

```
Wrong SubModule phase     → NRE / boot failure
MBObject not registered   → nulls, missing troops/items
Mutate world by fields    → logic drift, UI desync, hard-to-repro corrupt state
SaveId / Sync mistakes    → load crash, field swap, silent data loss
Agent outside Mission     → use-after-free style failures
Model / UI lifetime wrong → wrong scores, black screens, double subscriptions
```

---

## 1. Saves: SaveId, Sync vs SaveableField, load order

### Symptoms / risk

- Crash on load, or values "swap channels" (field A reads as B)  
- Removing the mod breaks old saves; version bumps fail without a clear message  
- Behavior state exists in memory but not on disk (or garbage fields do)

### Correct practice

1. **SaveIds are a contract.** Once `[SaveableClass(id)]` / `[SaveableField(id)]` ships, **do not change meaning**. Retire ids; never reuse them for a new type layout.  
2. **One source of truth:**  
   - Private behavior state → `CampaignBehaviorBase.SyncData(IDataStore)`  
   - Types in the object graph → `[Saveable*]` and a path from a root  
3. **Load order:** type definitions must be in `DefinitionContext` before fields are read. Do not assume custom collections are full before `OnGameLoaded` / behavior restore finishes.  
4. Split new game vs load: `OnNewGameCreated` vs `OnGameLoaded` (and matching behavior hooks).

### Related docs

- [Save architecture](../save-system)  
- [Save guide](../../guide/save-system-guide)  
- [`SaveManager`](../../api/save-system/SaveManager)  
- [`CampaignBehaviorBase`](../../api/campaign-ext/CampaignBehaviorBase) (`SyncData`)  
- [`SaveableFieldAttribute`](../../api/save-system/SaveableFieldAttribute)

### Anti-patterns

```csharp
// Wrong: ship field 3 as int, later change it to List<Hero> with the same id
[SaveableField(3)]
public List<Hero> Allies; // old saves read int layout → crash or silent corruption

// Wrong: both SyncData and SaveableField own the same logical state
// Wrong: touch Campaign.Current in OnSubModuleLoad and write "save data" there
```

```csharp
// Right: private counters via SyncData; stable keys
public override void SyncData(IDataStore dataStore)
{
    dataStore.SyncData("MyMod_Reputation", ref _reputation);
}
```

---

## 2. World changes: must go through Action.Apply

### Symptoms / risk

- Gold / relations / kingdom membership change, but logs, quests, UI, and AI never hear about it  
- Breaks only after hours (armies, captivity, succession)  
- Save loads, world is inconsistent (dead lords still in lists)

### Correct practice

Ownership and state transitions in the campaign world go through `TaleWorlds.CampaignSystem.Actions`:

- Gold: `GiveGoldAction.ApplyBetweenCharacters(...)` (use the real overloads)  
- Death: `KillCharacterAction.ApplyBy...`  
- Kingdom change: `ChangeKingdomAction.ApplyBy...`  

**Apply owns the side-effect chain** (events, caches, messages). Your mod owns *when / who / why*, not a half-written side-effect fork.

### Related docs

- [Actions index](../../api/campaign-ext/actions/)  
- [`GiveGoldAction`](../../api/campaign-ext/GiveGoldAction) · [`KillCharacterAction`](../../api/campaign-ext/KillCharacterAction) · [`ChangeKingdomAction`](../../api/campaign-ext/ChangeKingdomAction)  
- [`Hero`](../../api/campaign/Hero) · [Campaign guide](../../guide/campaign-system) · [Common patterns](../../guide/common-patterns)  
- [Roadmap §2](../developer-roadmap)

### Anti-patterns

```csharp
// Wrong: looks fine once; drops events and related state
hero.Gold += 1000;
hero.Clan = otherClan;
party.MemberRoster.AddToCounts(character, -1); // hard-edit when an Action/API is required

// Right: clear intent, official entry
GiveGoldAction.ApplyBetweenCharacters(null, hero, 1000);
// Same idea for KillCharacterAction / ChangeKingdomAction: call Apply*, do not assign
```

---

## 3. Campaign event timing vs inside / outside Mission

### Symptoms / risk

- `Campaign.Current` is null  
- Map state mutated mid-battle; load or tick order goes weird after the fight  
- `CampaignEvents` handlers re-enter when a mission ends

### Correct practice

| Context | OK to do | Avoid |
|---------|----------|--------|
| Main menu / `OnSubModuleLoad` | Config, Harmony, global services | Touching `Campaign` / live `Hero` world |
| Campaign map tick / behavior events | Actions, model queries, map logic | Holding stale `Mission` / `Agent` |
| Inside Mission | `MissionBehavior`, agents, formations | Rebuilding kingdoms / unguarded hero kills |

Decide on the map; present in the mission. Cross layers with **explicit result write-back** (battle-end callbacks, battle-related campaign events). Do not run a full kingdom transfer inside `OnAgentRemoved`.

### Related docs

- [Module System](../module-system) · [SDK Overview](../sdk-overview)  
- [`Campaign`](../../api/campaign/Campaign) · [`Mission`](../../api/mission/Mission)  
- [Campaign guide](../../guide/campaign-system) · [Mission guide](../../guide/mission-system)

### Anti-patterns

```csharp
// Wrong: during SubModule load
protected override void OnSubModuleLoad()
{
    var gold = Hero.MainHero.Gold; // campaign not ready → NRE
}

// Wrong: unconstrained world edit from a mission callback
public override void OnAgentRemoved(Agent affected, Agent affector, AgentState state, KillingBlow blow)
{
    ChangeKingdomAction.ApplyByJoinToKingdom(...); // timing and re-entrancy risk
}
```

---

## 4. Agent / Mission lifecycle

### Symptoms / risk

- Touching `Agent` after battle → NRE or native-side faults  
- Caching `Mission.Current` and reusing it next fight  
- Editing equipment / AI after the agent is removed

### Correct practice

1. **An Agent is only valid for its Mission lifetime.**  
2. Keep logic in `MissionBehavior` hooks (`OnAgentBuild`, `OnAgentRemoved`, `OnMissionTick`, ...). Do not store agents in long-lived static maps.  
3. Clear caches when the mission ends. For cross-battle memory, store **Hero / character string ids / campaign objects**, never `Agent` references.  
4. Battlefield death ≠ automatic campaign death. Use `KillCharacterAction` at a safe campaign moment if a lord must leave the map.

### Related docs

- [`Mission`](../../api/mission/Mission) · [`Agent`](../../api/mission/Agent) · [`MissionBehavior`](../../api/mission/MissionBehavior)  
- [Mission guide](../../guide/mission-system) · [Module System](../module-system)

### Anti-patterns

```csharp
// Wrong: long-lived field
private Agent _boss;
public override void OnAgentBuild(Agent agent, Banner b) { _boss = agent; }
// After mission end, other code still calls _boss.Health

// Right: query from Mission when needed, or store campaign ids only
private string _bossHeroId;
// In OnAgentRemoved, write back via Hero.FindFirst / string id
```

---

## 5. MBObjectManager registration

### Symptoms / risk

- `GetObject<ItemObject>("MyItem")` returns null  
- Troop tables reference a missing `CharacterObject`  
- "Works sometimes" because of load order / hot load

### Correct practice

1. XML- or code-created `ItemObject` / `CharacterObject` must be in **`MBObjectManager` before consumers run**.  
2. String ids are globally unique and stable; renaming is a hard break.  
3. Register during SubModule / object load phases, not on first combat.  
4. Use official Get APIs and handle null (missing dependency should fail loudly).

### Related docs

- [`MBObjectManager`](../../api/campaign-ext/MBObjectManager)  
- [`ItemObject`](../../api/core/ItemObject) · [`CharacterObject`](../../api/campaign/CharacterObject)  
- [SDK Overview L2](../sdk-overview) · [Asset pipeline](../../guide/asset-pipeline) · [Module System](../module-system)

### Anti-patterns

```csharp
// Wrong: assume the object exists
var item = MBObjectManager.Instance.GetObject<ItemObject>("my_mod_sword");
hero.CivilianEquipment.AddEquipmentToSlotWithoutAgent(EquipmentIndex.Weapon0, new EquipmentElement(item));
// item == null → cascade crash

// Right: validate; ensure XML/registration runs before the use site
if (item == null) { /* log and abort this equip */ return; }
```

---

## 6. SubModule load phases

### Symptoms / risk

- Mod appears in the module list but behaviors never run  
- Black screen / crash before main menu  
- Missing dependency modules → type load failure

### Correct practice

Remember the phases:

```
OnSubModuleLoad
  → main menu
  → OnGameStart / InitializeGameStarter   ← register behaviors / models
  → OnNewGameCreated or OnGameLoaded
  → runtime ticks / missions
```

- **Register** in `OnGameStart` / `InitializeGameStarter`  
- **Harmony / config** may live in `OnSubModuleLoad`  
- Fill `DependedModules` in `SubModule.xml`; DLL name and entry class must match  

### Related docs

- [Module System](../module-system)  
- [`MBSubModuleBase`](../../api/core/MBSubModuleBase)  
- [Mod workflow](../../guide/mod-workflow) · [Troubleshooting](../../guide/troubleshooting)  
- [Roadmap §1](../developer-roadmap)

### Anti-patterns

```csharp
// Wrong: construct only
protected override void OnGameStart(Game game, IGameStarter starter)
{
    new MyCampaignBehavior(); // never enters CampaignBehaviorManager
}

// Right
if (starter is CampaignGameStarter cs)
    cs.AddBehavior(new MyCampaignBehavior());
```

---

## 7. Model replacement

### Symptoms / risk

- Your `GameModel` methods never run  
- Diplomacy / war scores look vanilla (or like another mod)  
- Constructor cached a `base` model; later starter replacement is ignored

### Correct practice

1. `AddModel` / replace in **`InitializeGameStarter`** (or the documented equivalent).  
2. At runtime, read `Campaign.Current.Models` (and specific properties). Do not treat `new DefaultXxxModel()` as authority.  
3. Override only the calculations you change; know whether `base` is still on the vanilla chain.  
4. Multi-mod: later load wins; detect and log when you care.

### Related docs

- [`GameModels`](../../api/campaign-ext/GameModels) · [`GameModelsManager`](../../api/core-extra/GameModelsManager)  
- [Module System](../module-system) · [Game systems overview](../../guide/game-systems-overview)  
- [Roadmap §5](../developer-roadmap)

### Anti-patterns

```csharp
// Wrong: static new that the game never queries
public static readonly DiplomacyModel Mine = new MyDiplomacyModel();

// Wrong: initialize too late (campaign already built caches on default models)
// Right: AddModel in InitializeGameStarter; confirm Campaign resolves your type
```

---

## 8. UI / ViewModel lifetime

### Symptoms / risk

- UI closed but still ticking / still subscribed → leaks or broken reopen  
- Bound properties never refresh, or refresh destroyed widgets  
- Mission HUD still alive on the campaign map

### Correct practice

1. A `ViewModel` lives and dies with its **Screen / GauntletLayer / MissionView**.  
2. On close, call `OnFinalize` (or your project's dispose path) and unsubscribe.  
3. `[DataSourceProperty]` changes go through the official notification path; do not only mutate backing fields.  
4. Do not park a VM on a `CampaignBehavior` as a forever service unless you own a strict open/close session.

### Related docs

- [`ViewModel`](../../api/core-extra/ViewModel) · [GUI API](../../api/gui/)  
- [Gauntlet guide](../../guide/gauntlet-ui) · [SDK Overview L4](../sdk-overview)  
- [Roadmap §6](../developer-roadmap)

### Anti-patterns

```csharp
// Wrong: behavior owns a VM forever
private MyVM _vm = new MyVM();
// UI closed; _vm still listens to CampaignEvents.OnHero...

// Right: create on open, finalize and null on close
public void Open() { _vm = new MyVM(); /* push layer */ }
public void Close() { _vm?.OnFinalize(); _vm = null; }
```

---

## Quick checklist

Before shipping or trusting a save:

- [ ] No SaveId reuse / silent type change  
- [ ] World mutations go through `*Action.Apply*`  
- [ ] No `Campaign.Current` in `OnSubModuleLoad`  
- [ ] No cross-mission `Agent` caches  
- [ ] Objects resolve from `MBObjectManager`  
- [ ] Behaviors / models registered at starter time  
- [ ] ViewModels have a close/dispose path  

---

## See also

- [Developer Task Roadmap](../developer-roadmap)  
- [Save System](../save-system) · [Module System](../module-system) · [SDK Overview](../sdk-overview)  
- [Troubleshooting](../../guide/troubleshooting) · [Common patterns](../../guide/common-patterns)  
- Gold class pages: [`SaveManager`](../../api/save-system/SaveManager) · [`Hero`](../../api/campaign/Hero) · [`Mission`](../../api/mission/Mission)
