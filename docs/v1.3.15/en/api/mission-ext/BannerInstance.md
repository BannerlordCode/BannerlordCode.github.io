<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `BannerInstance`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# BannerInstance

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** struct
**Area:** Mount & Blade

## Overview

> This is an auto-generated stub. `BannerInstance` is a struct in the `TaleWorlds.MountAndBlade` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


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

```csharp
public bool IsFormationBanner(Formation formation, SpawnedItemEntity spawnedItem)
```

### HasBannerOnGround

```csharp
public bool HasBannerOnGround(Formation formation)
```

### GetActiveBanner

```csharp
public BannerComponent GetActiveBanner(Formation formation)
```

### GetFormationBannerBearers

```csharp
public List<Agent> GetFormationBannerBearers(Formation formation)
```

### GetFormationBanner

```csharp
public ItemObject GetFormationBanner(Formation formation)
```

### IsBannerSearchingAgent

```csharp
public bool IsBannerSearchingAgent(Agent agent)
```

### GetMissingBannerCount

```csharp
public int GetMissingBannerCount(Formation formation)
```

### GetFormationFromBanner

```csharp
public Formation GetFormationFromBanner(SpawnedItemEntity spawnedItem)
```

### SetFormationBanner

```csharp
public void SetFormationBanner(Formation formation, ItemObject newBanner)
```

### OnBehaviorInitialize

```csharp
public override void OnBehaviorInitialize()
```

### OnDeploymentFinished

```csharp
public override void OnDeploymentFinished()
```

### OnMissionTick

```csharp
public override void OnMissionTick(float dt)
```

### OnItemPickup

```csharp
public void OnItemPickup(Agent agent, SpawnedItemEntity spawnedItem)
```

### OnItemDrop

```csharp
public void OnItemDrop(Agent agent, SpawnedItemEntity spawnedItem)
```

### OnAgentRemoved

```csharp
public override void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow blow)
```

### OnAgentPanicked

```csharp
public override void OnAgentPanicked(Agent affectedAgent)
```

### UpdateAgent

```csharp
public void UpdateAgent(Agent agent, bool willBecomeBannerBearer)
```

### SpawnBannerBearer

```csharp
public Agent SpawnBannerBearer(IAgentOriginBase troopOrigin, bool isPlayerSide, Formation formation, bool spawnWithHorse, bool isReinforcement, int formationTroopCount, int formationTroopIndex, bool isAlarmed, bool wieldInitialWeapons, bool forceDismounted, Vec3? initialPosition, Vec2? initialDirection, string specialActionSetSuffix = null, bool useTroopClassForSpawn = false)
```

### IsBannerItem

```csharp
public static bool IsBannerItem(ItemObject item)
```

### SetBannerItem

```csharp
public void SetBannerItem(ItemObject bannerItem)
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-mountandblade)