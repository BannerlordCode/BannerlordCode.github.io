---
title: "BannerBearerLogic"
description: "Auto-generated class reference for BannerBearerLogic."
---
# BannerBearerLogic

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class BannerBearerLogic : MissionLogic`
**Base:** `MissionLogic`
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/BannerBearerLogic.cs`

## Overview

`BannerBearerLogic` sits closer to the behavior layer: it reacts to events, drives flows, and updates subsystem state every tick or at key transitions.

## Mental Model

Treat `BannerBearerLogic` as a Logic-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `Formation` | `public Formation Formation { get; }` |
| `BannerItem` | `public ItemObject BannerItem { get; }` |
| `AgentSpawnLogic` | `public IMissionAgentSpawnLogic AgentSpawnLogic { get; }` |

## Key Methods

### SetBannerItem
`public void SetBannerItem(ItemObject bannerItem)`

**Purpose:** **Purpose:** Assigns a new value to banner item and updates the object's internal state.

```csharp
// Obtain an instance of BannerBearerLogic from the subsystem API first
BannerBearerLogic bannerBearerLogic = ...;
bannerBearerLogic.SetBannerItem(bannerItem);
```

### HasBannerEntity
`public bool HasBannerEntity(GameEntity bannerEntity)`

**Purpose:** **Purpose:** Determines whether the this instance already holds banner entity.

```csharp
// Obtain an instance of BannerBearerLogic from the subsystem API first
BannerBearerLogic bannerBearerLogic = ...;
var result = bannerBearerLogic.HasBannerEntity(bannerEntity);
```

### HasBannerOnGround
`public bool HasBannerOnGround()`

**Purpose:** **Purpose:** Determines whether the this instance already holds banner on ground.

```csharp
// Obtain an instance of BannerBearerLogic from the subsystem API first
BannerBearerLogic bannerBearerLogic = ...;
var result = bannerBearerLogic.HasBannerOnGround();
```

### HasActiveBannerBearers
`public bool HasActiveBannerBearers()`

**Purpose:** **Purpose:** Determines whether the this instance already holds active banner bearers.

```csharp
// Obtain an instance of BannerBearerLogic from the subsystem API first
BannerBearerLogic bannerBearerLogic = ...;
var result = bannerBearerLogic.HasActiveBannerBearers();
```

### IsBannerSearchingAgent
`public bool IsBannerSearchingAgent(Agent agent)`

**Purpose:** **Purpose:** Determines whether the this instance is in the banner searching agent state or condition.

```csharp
// Obtain an instance of BannerBearerLogic from the subsystem API first
BannerBearerLogic bannerBearerLogic = ...;
var result = bannerBearerLogic.IsBannerSearchingAgent(agent);
```

### GetNumberOfActiveBannerBearers
`public int GetNumberOfActiveBannerBearers()`

**Purpose:** **Purpose:** Reads and returns the number of active banner bearers value held by the this instance.

```csharp
// Obtain an instance of BannerBearerLogic from the subsystem API first
BannerBearerLogic bannerBearerLogic = ...;
var result = bannerBearerLogic.GetNumberOfActiveBannerBearers();
```

### UpdateAgentStats
`public void UpdateAgentStats(bool forceUpdate = false)`

**Purpose:** **Purpose:** Recalculates and stores the latest representation of agent stats.

```csharp
// Obtain an instance of BannerBearerLogic from the subsystem API first
BannerBearerLogic bannerBearerLogic = ...;
bannerBearerLogic.UpdateAgentStats(false);
```

### UpdateBannerSearchers
`public void UpdateBannerSearchers()`

**Purpose:** **Purpose:** Recalculates and stores the latest representation of banner searchers.

```csharp
// Obtain an instance of BannerBearerLogic from the subsystem API first
BannerBearerLogic bannerBearerLogic = ...;
bannerBearerLogic.UpdateBannerSearchers();
```

### UpdateBannerBearersForDeployment
`public void UpdateBannerBearersForDeployment()`

**Purpose:** **Purpose:** Recalculates and stores the latest representation of banner bearers for deployment.

```csharp
// Obtain an instance of BannerBearerLogic from the subsystem API first
BannerBearerLogic bannerBearerLogic = ...;
bannerBearerLogic.UpdateBannerBearersForDeployment();
```

### AddBannerEntity
`public void AddBannerEntity(GameEntity entity)`

**Purpose:** **Purpose:** Adds banner entity to the current collection or state.

```csharp
// Obtain an instance of BannerBearerLogic from the subsystem API first
BannerBearerLogic bannerBearerLogic = ...;
bannerBearerLogic.AddBannerEntity(entity);
```

### RemoveBannerEntity
`public void RemoveBannerEntity(WeakGameEntity entity)`

**Purpose:** **Purpose:** Removes banner entity from the current collection or state.

```csharp
// Obtain an instance of BannerBearerLogic from the subsystem API first
BannerBearerLogic bannerBearerLogic = ...;
bannerBearerLogic.RemoveBannerEntity(entity);
```

### OnBannerEntityPickedUp
`public void OnBannerEntityPickedUp(GameEntity entity, Agent agent)`

**Purpose:** **Purpose:** Invoked when the banner entity picked up event is raised.

```csharp
// Obtain an instance of BannerBearerLogic from the subsystem API first
BannerBearerLogic bannerBearerLogic = ...;
bannerBearerLogic.OnBannerEntityPickedUp(entity, agent);
```

### OnBannerEntityDropped
`public void OnBannerEntityDropped(GameEntity entity)`

**Purpose:** **Purpose:** Invoked when the banner entity dropped event is raised.

```csharp
// Obtain an instance of BannerBearerLogic from the subsystem API first
BannerBearerLogic bannerBearerLogic = ...;
bannerBearerLogic.OnBannerEntityDropped(entity);
```

### OnBeforeFormationMovementOrderApplied
`public void OnBeforeFormationMovementOrderApplied(Formation formation, MovementOrder.MovementOrderEnum orderType)`

**Purpose:** **Purpose:** Invoked when the before formation movement order applied event is raised.

```csharp
// Obtain an instance of BannerBearerLogic from the subsystem API first
BannerBearerLogic bannerBearerLogic = ...;
bannerBearerLogic.OnBeforeFormationMovementOrderApplied(formation, orderType);
```

### OnAfterArrangementOrderApplied
`public void OnAfterArrangementOrderApplied(Formation formation, ArrangementOrder.ArrangementOrderEnum orderEnum)`

**Purpose:** **Purpose:** Invoked when the after arrangement order applied event is raised.

```csharp
// Obtain an instance of BannerBearerLogic from the subsystem API first
BannerBearerLogic bannerBearerLogic = ...;
bannerBearerLogic.OnAfterArrangementOrderApplied(formation, orderEnum);
```

### IsFormationBanner
`public bool IsFormationBanner(Formation formation, SpawnedItemEntity spawnedItem)`

**Purpose:** **Purpose:** Determines whether the this instance is in the formation banner state or condition.

```csharp
// Obtain an instance of BannerBearerLogic from the subsystem API first
BannerBearerLogic bannerBearerLogic = ...;
var result = bannerBearerLogic.IsFormationBanner(formation, spawnedItem);
```

### HasBannerOnGround
`public bool HasBannerOnGround(Formation formation)`

**Purpose:** **Purpose:** Determines whether the this instance already holds banner on ground.

```csharp
// Obtain an instance of BannerBearerLogic from the subsystem API first
BannerBearerLogic bannerBearerLogic = ...;
var result = bannerBearerLogic.HasBannerOnGround(formation);
```

### GetActiveBanner
`public BannerComponent GetActiveBanner(Formation formation)`

**Purpose:** **Purpose:** Reads and returns the active banner value held by the this instance.

```csharp
// Obtain an instance of BannerBearerLogic from the subsystem API first
BannerBearerLogic bannerBearerLogic = ...;
var result = bannerBearerLogic.GetActiveBanner(formation);
```

### GetFormationBannerBearers
`public List<Agent> GetFormationBannerBearers(Formation formation)`

**Purpose:** **Purpose:** Reads and returns the formation banner bearers value held by the this instance.

```csharp
// Obtain an instance of BannerBearerLogic from the subsystem API first
BannerBearerLogic bannerBearerLogic = ...;
var result = bannerBearerLogic.GetFormationBannerBearers(formation);
```

### GetFormationBanner
`public ItemObject GetFormationBanner(Formation formation)`

**Purpose:** **Purpose:** Reads and returns the formation banner value held by the this instance.

```csharp
// Obtain an instance of BannerBearerLogic from the subsystem API first
BannerBearerLogic bannerBearerLogic = ...;
var result = bannerBearerLogic.GetFormationBanner(formation);
```

### IsBannerSearchingAgent
`public bool IsBannerSearchingAgent(Agent agent)`

**Purpose:** **Purpose:** Determines whether the this instance is in the banner searching agent state or condition.

```csharp
// Obtain an instance of BannerBearerLogic from the subsystem API first
BannerBearerLogic bannerBearerLogic = ...;
var result = bannerBearerLogic.IsBannerSearchingAgent(agent);
```

### GetMissingBannerCount
`public int GetMissingBannerCount(Formation formation)`

**Purpose:** **Purpose:** Reads and returns the missing banner count value held by the this instance.

```csharp
// Obtain an instance of BannerBearerLogic from the subsystem API first
BannerBearerLogic bannerBearerLogic = ...;
var result = bannerBearerLogic.GetMissingBannerCount(formation);
```

### GetFormationFromBanner
`public Formation GetFormationFromBanner(SpawnedItemEntity spawnedItem)`

**Purpose:** **Purpose:** Reads and returns the formation from banner value held by the this instance.

```csharp
// Obtain an instance of BannerBearerLogic from the subsystem API first
BannerBearerLogic bannerBearerLogic = ...;
var result = bannerBearerLogic.GetFormationFromBanner(spawnedItem);
```

### SetFormationBanner
`public void SetFormationBanner(Formation formation, ItemObject newBanner)`

**Purpose:** **Purpose:** Assigns a new value to formation banner and updates the object's internal state.

```csharp
// Obtain an instance of BannerBearerLogic from the subsystem API first
BannerBearerLogic bannerBearerLogic = ...;
bannerBearerLogic.SetFormationBanner(formation, newBanner);
```

### OnBehaviorInitialize
`public override void OnBehaviorInitialize()`

**Purpose:** **Purpose:** Invoked when the behavior initialize event is raised.

```csharp
// Obtain an instance of BannerBearerLogic from the subsystem API first
BannerBearerLogic bannerBearerLogic = ...;
bannerBearerLogic.OnBehaviorInitialize();
```

### OnDeploymentFinished
`public override void OnDeploymentFinished()`

**Purpose:** **Purpose:** Invoked when the deployment finished event is raised.

```csharp
// Obtain an instance of BannerBearerLogic from the subsystem API first
BannerBearerLogic bannerBearerLogic = ...;
bannerBearerLogic.OnDeploymentFinished();
```

### OnMissionTick
`public override void OnMissionTick(float dt)`

**Purpose:** **Purpose:** Invoked when the mission tick event is raised.

```csharp
// Obtain an instance of BannerBearerLogic from the subsystem API first
BannerBearerLogic bannerBearerLogic = ...;
bannerBearerLogic.OnMissionTick(0);
```

### OnItemPickup
`public void OnItemPickup(Agent agent, SpawnedItemEntity spawnedItem)`

**Purpose:** **Purpose:** Invoked when the item pickup event is raised.

```csharp
// Obtain an instance of BannerBearerLogic from the subsystem API first
BannerBearerLogic bannerBearerLogic = ...;
bannerBearerLogic.OnItemPickup(agent, spawnedItem);
```

### OnItemDrop
`public void OnItemDrop(Agent agent, SpawnedItemEntity spawnedItem)`

**Purpose:** **Purpose:** Invoked when the item drop event is raised.

```csharp
// Obtain an instance of BannerBearerLogic from the subsystem API first
BannerBearerLogic bannerBearerLogic = ...;
bannerBearerLogic.OnItemDrop(agent, spawnedItem);
```

### OnAgentRemoved
`public override void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow blow)`

**Purpose:** **Purpose:** Invoked when the agent removed event is raised.

```csharp
// Obtain an instance of BannerBearerLogic from the subsystem API first
BannerBearerLogic bannerBearerLogic = ...;
bannerBearerLogic.OnAgentRemoved(affectedAgent, affectorAgent, agentState, blow);
```

### OnAgentPanicked
`public override void OnAgentPanicked(Agent affectedAgent)`

**Purpose:** **Purpose:** Invoked when the agent panicked event is raised.

```csharp
// Obtain an instance of BannerBearerLogic from the subsystem API first
BannerBearerLogic bannerBearerLogic = ...;
bannerBearerLogic.OnAgentPanicked(affectedAgent);
```

### UpdateAgent
`public void UpdateAgent(Agent agent, bool willBecomeBannerBearer)`

**Purpose:** **Purpose:** Recalculates and stores the latest representation of agent.

```csharp
// Obtain an instance of BannerBearerLogic from the subsystem API first
BannerBearerLogic bannerBearerLogic = ...;
bannerBearerLogic.UpdateAgent(agent, false);
```

### SpawnBannerBearer
`public Agent SpawnBannerBearer(IAgentOriginBase troopOrigin, bool isPlayerSide, Formation formation, bool spawnWithHorse, bool isReinforcement, int formationTroopCount, int formationTroopIndex, bool isAlarmed, bool wieldInitialWeapons, Vec3? initialPosition, Vec2? initialDirection, string specialActionSetSuffix = null, bool useTroopClassForSpawn = false)`

**Purpose:** **Purpose:** Executes the SpawnBannerBearer logic.

```csharp
// Obtain an instance of BannerBearerLogic from the subsystem API first
BannerBearerLogic bannerBearerLogic = ...;
var result = bannerBearerLogic.SpawnBannerBearer(troopOrigin, false, formation, false, false, 0, 0, false, false, initialPosition, initialDirection, "example", false);
```

### IsBannerItem
`public static bool IsBannerItem(ItemObject item)`

**Purpose:** **Purpose:** Determines whether the this instance is in the banner item state or condition.

```csharp
// Static call; no instance required
BannerBearerLogic.IsBannerItem(item);
```

## Usage Example

```csharp
var behavior = Mission.Current.GetMissionBehavior<BannerBearerLogic>();
```

## See Also

- [Area Index](../)