<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `BannerBearerLogic`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# BannerBearerLogic

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class BannerBearerLogic : MissionLogic`
**Base:** `MissionLogic`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/BannerBearerLogic.cs`

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

**Purpose:** Sets the value or state of `banner item`.

### HasBannerEntity
`public bool HasBannerEntity(GameEntity bannerEntity)`

**Purpose:** Checks whether the current object has/contains `banner entity`.

### HasBannerOnGround
`public bool HasBannerOnGround()`

**Purpose:** Checks whether the current object has/contains `banner on ground`.

### HasActiveBannerBearers
`public bool HasActiveBannerBearers()`

**Purpose:** Checks whether the current object has/contains `active banner bearers`.

### IsBannerSearchingAgent
`public bool IsBannerSearchingAgent(Agent agent)`

**Purpose:** Handles logic related to `is banner searching agent`.

### GetNumberOfActiveBannerBearers
`public int GetNumberOfActiveBannerBearers()`

**Purpose:** Gets the current value of `number of active banner bearers`.

### UpdateAgentStats
`public void UpdateAgentStats(bool forceUpdate = false)`

**Purpose:** Updates the state or data of `agent stats`.

### UpdateBannerSearchers
`public void UpdateBannerSearchers()`

**Purpose:** Updates the state or data of `banner searchers`.

### UpdateBannerBearersForDeployment
`public void UpdateBannerBearersForDeployment()`

**Purpose:** Updates the state or data of `banner bearers for deployment`.

### AddBannerEntity
`public void AddBannerEntity(GameEntity entity)`

**Purpose:** Adds `banner entity` to the current collection or state.

### RemoveBannerEntity
`public void RemoveBannerEntity(WeakGameEntity entity)`

**Purpose:** Removes `banner entity` from the current collection or state.

### OnBannerEntityPickedUp
`public void OnBannerEntityPickedUp(GameEntity entity, Agent agent)`

**Purpose:** Called when the `banner entity picked up` event is raised.

### OnBannerEntityDropped
`public void OnBannerEntityDropped(GameEntity entity)`

**Purpose:** Called when the `banner entity dropped` event is raised.

### OnBeforeFormationMovementOrderApplied
`public void OnBeforeFormationMovementOrderApplied(Formation formation, MovementOrder.MovementOrderEnum orderType)`

**Purpose:** Called when the `before formation movement order applied` event is raised.

### OnAfterArrangementOrderApplied
`public void OnAfterArrangementOrderApplied(Formation formation, ArrangementOrder.ArrangementOrderEnum orderEnum)`

**Purpose:** Called when the `after arrangement order applied` event is raised.

### IsFormationBanner
`public bool IsFormationBanner(Formation formation, SpawnedItemEntity spawnedItem)`

**Purpose:** Handles logic related to `is formation banner`.

### HasBannerOnGround
`public bool HasBannerOnGround(Formation formation)`

**Purpose:** Checks whether the current object has/contains `banner on ground`.

### GetActiveBanner
`public BannerComponent GetActiveBanner(Formation formation)`

**Purpose:** Gets the current value of `active banner`.

### GetFormationBannerBearers
`public List<Agent> GetFormationBannerBearers(Formation formation)`

**Purpose:** Gets the current value of `formation banner bearers`.

### GetFormationBanner
`public ItemObject GetFormationBanner(Formation formation)`

**Purpose:** Gets the current value of `formation banner`.

### IsBannerSearchingAgent
`public bool IsBannerSearchingAgent(Agent agent)`

**Purpose:** Handles logic related to `is banner searching agent`.

### GetMissingBannerCount
`public int GetMissingBannerCount(Formation formation)`

**Purpose:** Gets the current value of `missing banner count`.

### GetFormationFromBanner
`public Formation GetFormationFromBanner(SpawnedItemEntity spawnedItem)`

**Purpose:** Gets the current value of `formation from banner`.

### SetFormationBanner
`public void SetFormationBanner(Formation formation, ItemObject newBanner)`

**Purpose:** Sets the value or state of `formation banner`.

### OnBehaviorInitialize
`public override void OnBehaviorInitialize()`

**Purpose:** Called when the `behavior initialize` event is raised.

### OnDeploymentFinished
`public override void OnDeploymentFinished()`

**Purpose:** Called when the `deployment finished` event is raised.

### OnMissionTick
`public override void OnMissionTick(float dt)`

**Purpose:** Called when the `mission tick` event is raised.

### OnItemPickup
`public void OnItemPickup(Agent agent, SpawnedItemEntity spawnedItem)`

**Purpose:** Called when the `item pickup` event is raised.

### OnItemDrop
`public void OnItemDrop(Agent agent, SpawnedItemEntity spawnedItem)`

**Purpose:** Called when the `item drop` event is raised.

### OnAgentRemoved
`public override void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow blow)`

**Purpose:** Called when the `agent removed` event is raised.

### OnAgentPanicked
`public override void OnAgentPanicked(Agent affectedAgent)`

**Purpose:** Called when the `agent panicked` event is raised.

### UpdateAgent
`public void UpdateAgent(Agent agent, bool willBecomeBannerBearer)`

**Purpose:** Updates the state or data of `agent`.

### SpawnBannerBearer
`public Agent SpawnBannerBearer(IAgentOriginBase troopOrigin, bool isPlayerSide, Formation formation, bool spawnWithHorse, bool isReinforcement, int formationTroopCount, int formationTroopIndex, bool isAlarmed, bool wieldInitialWeapons, Vec3? initialPosition, Vec2? initialDirection, string specialActionSetSuffix = null, bool useTroopClassForSpawn = false)`

**Purpose:** Handles logic related to `spawn banner bearer`.

### IsBannerItem
`public static bool IsBannerItem(ItemObject item)`

**Purpose:** Handles logic related to `is banner item`.

## Usage Example

```csharp
Mission.Current.AddMissionBehavior(new BannerBearerLogic());
```

## See Also

- [Complete Class Catalog](../catalog)