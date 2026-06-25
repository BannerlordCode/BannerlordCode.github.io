---
title: "BannerInstance"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `BannerInstance`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# BannerInstance

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public struct BannerInstance`
**Area:** mission-ext

## Overview

`BannerInstance` lives in `TaleWorlds.MountAndBlade`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

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
`public Agent SpawnBannerBearer(IAgentOriginBase troopOrigin, bool isPlayerSide, Formation formation, bool spawnWithHorse, bool isReinforcement, int formationTroopCount, int formationTroopIndex, bool isAlarmed, bool wieldInitialWeapons, bool forceDismounted, Vec3? initialPosition, Vec2? initialDirection, string specialActionSetSuffix = null, bool useTroopClassForSpawn = false)`

**Purpose:** Handles logic related to `spawn banner bearer`.

### IsBannerItem
`public static bool IsBannerItem(ItemObject item)`

**Purpose:** Handles logic related to `is banner item`.

### SetBannerItem
`public void SetBannerItem(ItemObject bannerItem)`

**Purpose:** Sets the value or state of `banner item`.

## Usage Example

```csharp
// First obtain a BannerInstance instance from game state, then call one of its public methods
var value = new BannerInstance();
value.IsFormationBanner(formation, spawnedItem);
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-mountandblade)
