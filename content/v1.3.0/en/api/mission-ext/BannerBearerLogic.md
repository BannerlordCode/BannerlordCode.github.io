---
title: "BannerBearerLogic"
description: "Auto-generated class reference for BannerBearerLogic."
---
# BannerBearerLogic

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class BannerBearerLogic : MissionLogic`
**Base:** `MissionLogic`
**File:** `TaleWorlds.MountAndBlade/BannerBearerLogic.cs`

## Overview

`BannerBearerLogic` is the mission behaviour that owns all runtime banner state in a battle: which formation has which banner, which agent is carrying it, who is walking over to pick it up, and where the bearers stand in the formation's arrangement. It is a `MissionLogic` with one instance per mission (`BannerBearerLogic.cs:13`).

All the interesting state lives in a private nested `FormationBannerController`, one per formation, held in `_formationBannerData`. That controller subscribes to four formation events in its constructor — `OnUnitAdded`, `OnUnitRemoved`, `OnBeforeMovementOrderApplied` and `OnAfterArrangementOrderApplied` — and maintains its own `_bannerInstances` dictionary keyed by **native entity pointer** (`UIntPtr`). A second map, `_bannerToFormationMap`, inverts that: pointer to controller. Every banner question the class answers is a lookup in one of those two maps.

The logic binds itself into the game model at `OnBehaviorInitialize` with `MissionGameModels.Current.BattleBannerBearersModel.InitializeModel(this)` (`BannerBearerLogic.cs:162`) and unbinds in `OnEndMission` with `FinalizeModel()` (`BannerBearerLogic.cs:173`), also clearing `AgentSpawnLogic` and setting `_isMissionEnded` (`BannerBearerLogic.cs:177`). It subscribes to `Mission.OnItemPickUp` and `Mission.OnItemDrop` in the same pair, so banner pickups that happen outside the banner AI still update state.

Banner identity is an `ItemObject`, and `IsBannerItem` is the gate: the item must be non-null, have `IsBannerItem` true, and have a non-null `BannerComponent` (`BannerBearerLogic.cs:304`).

## Mental Model

Four behaviours here are worth internalising before you subclass anything, because each of them fails quietly.

**The deployment threshold is an exact equality, not a comparison.** `OnAgentAdded` queues the controller for a bearer update only when `formation.CountOfUnits == GetMinimumFormationTroopCountToBearBanners()`, and `OnAgentRemoved` only when the count is exactly one below that (`BannerBearerLogic.cs:892`, `BannerBearerLogic.cs:913`). With the shipped minimum of 2, a formation that goes from 0 to 5 units in one spawn never equals 2 at the moment the event fires, so it is never queued and never gets bearers. Banners appear only when the count *lands on* the threshold. Outside the deployment branch both handlers instead call `UpdateBannerSearchers()` synchronously on every unit add and removal.

**The bearer-selection filter is a tautology.** `FindBannerBearableAgents` requires `agent2.Banner == null || agent2.Banner != this.BannerItem` (`BannerBearerLogic.cs:818`). That is true whenever `Banner` is null, and also true whenever `Banner` is non-null *and different* — so it excludes nothing. The condition you would expect is `Banner == null || Banner == this.BannerItem`. As written, an agent already carrying a *different* formation's banner is eligible. What actually keeps that in check is the sort immediately after: the list is ordered by `GetAgentBannerBearingPriority` descending (`BannerBearerLogic.cs:825`), and the shipped model returns `int.MaxValue` for any agent that already has a banner — so banner-carriers sort to the top and are chosen first, and the redundant condition never gets the chance to hurt. Swap or replace that model override and the tautology becomes live.

**The `IsBannerItem` calls in the setters are discarded.** `SetFormationBanner` calls `BannerBearerLogic.IsBannerItem(newBanner)` and throws the result away (`BannerBearerLogic.cs:140`); `SetBannerItem` does the same (`BannerBearerLogic.cs:499`). Nothing validates. You can assign a non-banner `ItemObject` as a formation's banner and no error is raised here — the failure appears much later, when the item fails to produce a banner entity.

**Two constants are dead code.** `DefaultBannerBearerAgentDefensiveness = 1f` (`BannerBearerLogic.cs:377`) and `BannerSearcherUpdatePeriod = 3f` (`BannerBearerLogic.cs:380`) are declared and never referenced anywhere in the file. The live values are the inline literals `1f` at `BannerBearerLogic.cs:751` and `3f` at `BannerBearerLogic.cs:190`.

Also note the properties are computed, not stored. `BannerBearers`, `BannersOnGround`, `NumberOfBannerBearers` and `NumberOfBanners` each run LINQ over `_bannerInstances.Values` on every access, so `GetFormationBannerBearers` allocates a fresh `List<Agent>` per call (`BannerBearerLogic.cs:70`). That is fine for UI and expensive inside a per-frame loop.

Finally, `OnAgentRemoved` removes a fallen agent's banner **only** for `AgentState.Routed` (`BannerBearerLogic.cs:242`), while `OnAgentPanicked` schedules a drop of equipment slot 4 — the `ExtraWeaponSlot` where the banner lives (`BannerBearerLogic.cs:253`). Killing or incapacitating a bearer does not take its banner; routing and panicking do.

## How to use

**Getting it.** It is a mission behaviour, so reach it through the mission:

```csharp
BannerBearerLogic banners = Mission.Current.GetMissionBehavior<BannerBearerLogic>();
```

Subclass it and register your subclass in the behaviour array if you need to change selection; most of the decision logic is in `BattleBannerBearersModel`, not here.

**Typical use** — asking formation-level questions the safe way (the model forwards null-guard for you, this class does not):

```csharp
BannerBearerLogic banners = Mission.Current.GetMissionBehavior<BannerBearerLogic>();
if (banners != null)
{
    Formation f = agent.Formation;
    ItemObject bannerItem = banners.GetFormationBanner(f);           // null if none
    List<Agent> bearers = banners.GetFormationBannerBearers(f);     // fresh list, may be empty
    int missing = banners.GetMissingBannerCount(f);                 // desired - present, floored at 0

    // GetActiveBanner is stricter than GetFormationBanner: it needs a *carrying* bearer.
    BannerComponent active = banners.GetActiveBanner(f);
}
```

**Typical use** — assigning a banner to a formation, then forcing bearer selection:

```csharp
BannerBearerLogic banners = Mission.Current.GetMissionBehavior<BannerBearerLogic>();
banners.SetFormationBanner(formation, clan.Banner);   // no validation of banner-ness

foreach (Formation f in Mission.Current.Teams[0].Formations)
    banners.SetFormationBanner(f, clan.Banner);
```

**Most common mistake, and what it costs.** Calling `UpdateAgent(agent, true)` for an agent whose formation has no `FormationBannerController` — for example after `RemoveBannerOfAgent`, or for a formation you never passed to `SetFormationBanner`. The very first thing `UpdateAgent` does is fetch the controller from `agent.Formation` and dereference `.BannerItem` on the result with no null check (`BannerBearerLogic.cs:258`, `BannerBearerLogic.cs:264`), so you get a `NullReferenceException` rather than a skipped update. The fix is not defensive code in your own method: call `SetFormationBanner(formation, banner)` first so the controller exists, and query `HasBannerOnGround`/`GetFormationBanner` before assuming a formation is banner-managed. Remember too that becoming a bearer *replaces* the agent's equipment — the replacement weapon goes into the first weapon slot, equipment slots 1 through 3 are cleared, and the banner goes into the extra weapon slot (`BannerBearerLogic.cs:355`, `BannerBearerLogic.cs:356`, `BannerBearerLogic.cs:360`) — so a bearer silently loses three extra weapon slots, which is usually invisible until they fight.

## Key Properties

| Name | Signature |
|------|-----------|
| `AgentSpawnLogic` | `public IMissionAgentSpawnLogic AgentSpawnLogic { get; }` |
| `Formation` | `public Formation Formation { get; }` |
| `BannerItem` | `public ItemObject BannerItem { get; }` |
| `HasBanner` | `public bool HasBanner { get; }` |
| `BannerBearers` | `public List<Agent> BannerBearers { get; }` |
| `BannersOnGround` | `public List<GameEntity> BannersOnGround { get; }` |
| `NumberOfBannerBearers` | `public int NumberOfBannerBearers { get; }` |
| `NumberOfBanners` | `public int NumberOfBanners { get; }` |
| `BannerSearchDistance` | `public static float BannerSearchDistance { get; }` |
| `IsOnGround` | `public bool IsOnGround { get; }` |
| `IsOnAgent` | `public bool IsOnAgent { get; }` |

## Key Methods

### IsFormationBanner
`public bool IsFormationBanner(Formation formation, SpawnedItemEntity spawnedItem)`

**Purpose:** Determines whether the this instance is in the formation banner state or condition.

```csharp
// Obtain an instance of BannerBearerLogic from the subsystem API first
BannerBearerLogic bannerBearerLogic = ...;
var result = bannerBearerLogic.IsFormationBanner(formation, spawnedItem);
```

### HasBannerOnGround
`public bool HasBannerOnGround(Formation formation)`

**Purpose:** Determines whether the this instance already holds banner on ground.

```csharp
// Obtain an instance of BannerBearerLogic from the subsystem API first
BannerBearerLogic bannerBearerLogic = ...;
var result = bannerBearerLogic.HasBannerOnGround(formation);
```

### GetActiveBanner
`public BannerComponent GetActiveBanner(Formation formation)`

**Purpose:** Reads and returns the active banner value held by the this instance.

```csharp
// Obtain an instance of BannerBearerLogic from the subsystem API first
BannerBearerLogic bannerBearerLogic = ...;
var result = bannerBearerLogic.GetActiveBanner(formation);
```

### GetFormationBannerBearers
`public List<Agent> GetFormationBannerBearers(Formation formation)`

**Purpose:** Reads and returns the formation banner bearers value held by the this instance.

```csharp
// Obtain an instance of BannerBearerLogic from the subsystem API first
BannerBearerLogic bannerBearerLogic = ...;
var result = bannerBearerLogic.GetFormationBannerBearers(formation);
```

### GetFormationBanner
`public ItemObject GetFormationBanner(Formation formation)`

**Purpose:** Reads and returns the formation banner value held by the this instance.

```csharp
// Obtain an instance of BannerBearerLogic from the subsystem API first
BannerBearerLogic bannerBearerLogic = ...;
var result = bannerBearerLogic.GetFormationBanner(formation);
```

### IsBannerSearchingAgent
`public bool IsBannerSearchingAgent(Agent agent)`

**Purpose:** Determines whether the this instance is in the banner searching agent state or condition.

```csharp
// Obtain an instance of BannerBearerLogic from the subsystem API first
BannerBearerLogic bannerBearerLogic = ...;
var result = bannerBearerLogic.IsBannerSearchingAgent(agent);
```

### GetMissingBannerCount
`public int GetMissingBannerCount(Formation formation)`

**Purpose:** Reads and returns the missing banner count value held by the this instance.

```csharp
// Obtain an instance of BannerBearerLogic from the subsystem API first
BannerBearerLogic bannerBearerLogic = ...;
var result = bannerBearerLogic.GetMissingBannerCount(formation);
```

### GetFormationFromBanner
`public Formation GetFormationFromBanner(SpawnedItemEntity spawnedItem)`

**Purpose:** Reads and returns the formation from banner value held by the this instance.

```csharp
// Obtain an instance of BannerBearerLogic from the subsystem API first
BannerBearerLogic bannerBearerLogic = ...;
var result = bannerBearerLogic.GetFormationFromBanner(spawnedItem);
```

### SetFormationBanner
`public void SetFormationBanner(Formation formation, ItemObject newBanner)`

**Purpose:** Assigns a new value to formation banner and updates the object's internal state.

```csharp
// Obtain an instance of BannerBearerLogic from the subsystem API first
BannerBearerLogic bannerBearerLogic = ...;
bannerBearerLogic.SetFormationBanner(formation, newBanner);
```

### OnBehaviorInitialize
`public override void OnBehaviorInitialize()`

**Purpose:** Invoked when the behavior initialize event is raised.

```csharp
// Obtain an instance of BannerBearerLogic from the subsystem API first
BannerBearerLogic bannerBearerLogic = ...;
bannerBearerLogic.OnBehaviorInitialize();
```

### OnDeploymentFinished
`public override void OnDeploymentFinished()`

**Purpose:** Invoked when the deployment finished event is raised.

```csharp
// Obtain an instance of BannerBearerLogic from the subsystem API first
BannerBearerLogic bannerBearerLogic = ...;
bannerBearerLogic.OnDeploymentFinished();
```

### OnMissionTick
`public override void OnMissionTick(float dt)`

**Purpose:** Invoked when the mission tick event is raised.

```csharp
// Obtain an instance of BannerBearerLogic from the subsystem API first
BannerBearerLogic bannerBearerLogic = ...;
bannerBearerLogic.OnMissionTick(0);
```

### OnItemPickup
`public void OnItemPickup(Agent agent, SpawnedItemEntity spawnedItem)`

**Purpose:** Invoked when the item pickup event is raised.

```csharp
// Obtain an instance of BannerBearerLogic from the subsystem API first
BannerBearerLogic bannerBearerLogic = ...;
bannerBearerLogic.OnItemPickup(agent, spawnedItem);
```

### OnItemDrop
`public void OnItemDrop(Agent agent, SpawnedItemEntity spawnedItem)`

**Purpose:** Invoked when the item drop event is raised.

```csharp
// Obtain an instance of BannerBearerLogic from the subsystem API first
BannerBearerLogic bannerBearerLogic = ...;
bannerBearerLogic.OnItemDrop(agent, spawnedItem);
```

### OnAgentRemoved
`public override void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow blow)`

**Purpose:** Invoked when the agent removed event is raised.

```csharp
// Obtain an instance of BannerBearerLogic from the subsystem API first
BannerBearerLogic bannerBearerLogic = ...;
bannerBearerLogic.OnAgentRemoved(affectedAgent, affectorAgent, agentState, blow);
```

### OnAgentPanicked
`public override void OnAgentPanicked(Agent affectedAgent)`

**Purpose:** Invoked when the agent panicked event is raised.

```csharp
// Obtain an instance of BannerBearerLogic from the subsystem API first
BannerBearerLogic bannerBearerLogic = ...;
bannerBearerLogic.OnAgentPanicked(affectedAgent);
```

### UpdateAgent
`public void UpdateAgent(Agent agent, bool willBecomeBannerBearer)`

**Purpose:** Recalculates and stores the latest representation of agent.

```csharp
// Obtain an instance of BannerBearerLogic from the subsystem API first
BannerBearerLogic bannerBearerLogic = ...;
bannerBearerLogic.UpdateAgent(agent, false);
```

### SpawnBannerBearer
`public Agent SpawnBannerBearer(IAgentOriginBase troopOrigin, bool isPlayerSide, Formation formation, bool spawnWithHorse, bool isReinforcement, int formationTroopCount, int formationTroopIndex, bool isAlarmed, bool wieldInitialWeapons, bool forceDismounted, Vec3? initialPosition, Vec2? initialDirection, string specialActionSetSuffix = null, bool useTroopClassForSpawn = false)`

**Purpose:** Executes the SpawnBannerBearer logic.

```csharp
// Obtain an instance of BannerBearerLogic from the subsystem API first
BannerBearerLogic bannerBearerLogic = ...;
var result = bannerBearerLogic.SpawnBannerBearer(troopOrigin, false, formation, false, false, 0, 0, false, false, false, initialPosition, initialDirection, "example", false);
```

### IsBannerItem
`public static bool IsBannerItem(ItemObject item)`

**Purpose:** Determines whether the this instance is in the banner item state or condition.

```csharp
// Static call; no instance required
BannerBearerLogic.IsBannerItem(item);
```

### SetBannerItem
`public void SetBannerItem(ItemObject bannerItem)`

**Purpose:** Assigns a new value to banner item and updates the object's internal state.

```csharp
// Obtain an instance of BannerBearerLogic from the subsystem API first
BannerBearerLogic bannerBearerLogic = ...;
bannerBearerLogic.SetBannerItem(bannerItem);
```

### HasBannerEntity
`public bool HasBannerEntity(GameEntity bannerEntity)`

**Purpose:** Determines whether the this instance already holds banner entity.

```csharp
// Obtain an instance of BannerBearerLogic from the subsystem API first
BannerBearerLogic bannerBearerLogic = ...;
var result = bannerBearerLogic.HasBannerEntity(bannerEntity);
```

### HasBannerOnGround
`public bool HasBannerOnGround()`

**Purpose:** Determines whether the this instance already holds banner on ground.

```csharp
// Obtain an instance of BannerBearerLogic from the subsystem API first
BannerBearerLogic bannerBearerLogic = ...;
var result = bannerBearerLogic.HasBannerOnGround();
```

### HasActiveBannerBearers
`public bool HasActiveBannerBearers()`

**Purpose:** Determines whether the this instance already holds active banner bearers.

```csharp
// Obtain an instance of BannerBearerLogic from the subsystem API first
BannerBearerLogic bannerBearerLogic = ...;
var result = bannerBearerLogic.HasActiveBannerBearers();
```

### IsBannerSearchingAgent
`public bool IsBannerSearchingAgent(Agent agent)`

**Purpose:** Determines whether the this instance is in the banner searching agent state or condition.

```csharp
// Obtain an instance of BannerBearerLogic from the subsystem API first
BannerBearerLogic bannerBearerLogic = ...;
var result = bannerBearerLogic.IsBannerSearchingAgent(agent);
```

### GetNumberOfActiveBannerBearers
`public int GetNumberOfActiveBannerBearers()`

**Purpose:** Reads and returns the number of active banner bearers value held by the this instance.

```csharp
// Obtain an instance of BannerBearerLogic from the subsystem API first
BannerBearerLogic bannerBearerLogic = ...;
var result = bannerBearerLogic.GetNumberOfActiveBannerBearers();
```

### UpdateAgentStats
`public void UpdateAgentStats(bool forceUpdate = false)`

**Purpose:** Recalculates and stores the latest representation of agent stats.

```csharp
// Obtain an instance of BannerBearerLogic from the subsystem API first
BannerBearerLogic bannerBearerLogic = ...;
bannerBearerLogic.UpdateAgentStats(false);
```

### UpdateBannerSearchers
`public void UpdateBannerSearchers()`

**Purpose:** Recalculates and stores the latest representation of banner searchers.

```csharp
// Obtain an instance of BannerBearerLogic from the subsystem API first
BannerBearerLogic bannerBearerLogic = ...;
bannerBearerLogic.UpdateBannerSearchers();
```

### UpdateBannerBearersForDeployment
`public void UpdateBannerBearersForDeployment()`

**Purpose:** Recalculates and stores the latest representation of banner bearers for deployment.

```csharp
// Obtain an instance of BannerBearerLogic from the subsystem API first
BannerBearerLogic bannerBearerLogic = ...;
bannerBearerLogic.UpdateBannerBearersForDeployment();
```

### AddBannerEntity
`public void AddBannerEntity(GameEntity entity)`

**Purpose:** Adds banner entity to the current collection or state.

```csharp
// Obtain an instance of BannerBearerLogic from the subsystem API first
BannerBearerLogic bannerBearerLogic = ...;
bannerBearerLogic.AddBannerEntity(entity);
```

### RemoveBannerEntity
`public void RemoveBannerEntity(WeakGameEntity entity)`

**Purpose:** Removes banner entity from the current collection or state.

```csharp
// Obtain an instance of BannerBearerLogic from the subsystem API first
BannerBearerLogic bannerBearerLogic = ...;
bannerBearerLogic.RemoveBannerEntity(entity);
```

### OnBannerEntityPickedUp
`public void OnBannerEntityPickedUp(GameEntity entity, Agent agent)`

**Purpose:** Invoked when the banner entity picked up event is raised.

```csharp
// Obtain an instance of BannerBearerLogic from the subsystem API first
BannerBearerLogic bannerBearerLogic = ...;
bannerBearerLogic.OnBannerEntityPickedUp(entity, agent);
```

### OnBannerEntityDropped
`public void OnBannerEntityDropped(GameEntity entity)`

**Purpose:** Invoked when the banner entity dropped event is raised.

```csharp
// Obtain an instance of BannerBearerLogic from the subsystem API first
BannerBearerLogic bannerBearerLogic = ...;
bannerBearerLogic.OnBannerEntityDropped(entity);
```

### OnBeforeFormationMovementOrderApplied
`public void OnBeforeFormationMovementOrderApplied(Formation formation, MovementOrder.MovementOrderEnum orderType)`

**Purpose:** Invoked when the before formation movement order applied event is raised.

```csharp
// Obtain an instance of BannerBearerLogic from the subsystem API first
BannerBearerLogic bannerBearerLogic = ...;
bannerBearerLogic.OnBeforeFormationMovementOrderApplied(formation, orderType);
```

### OnAfterArrangementOrderApplied
`public void OnAfterArrangementOrderApplied(Formation formation, ArrangementOrder.ArrangementOrderEnum orderEnum)`

**Purpose:** Invoked when the after arrangement order applied event is raised.

```csharp
// Obtain an instance of BannerBearerLogic from the subsystem API first
BannerBearerLogic bannerBearerLogic = ...;
bannerBearerLogic.OnAfterArrangementOrderApplied(formation, orderEnum);
```

## Usage Example

```csharp
var behavior = Mission.Current.GetMissionBehavior<BannerBearerLogic>();
```

## See Also

- [Area Index](../)
- [MissionLogic](../MissionLogic)
- [BattleBannerBearersModel](../BattleBannerBearersModel)
- [CustomBattleBannerBearersModel](../CustomBattleBannerBearersModel)
- [MissionAgentSpawnLogic](../MissionAgentSpawnLogic)
- [FormationArrangementModel](../FormationArrangementModel)
- [BannerBearerLogic (中文页面)](../../../../zh/api/mission-ext/BannerBearerLogic)