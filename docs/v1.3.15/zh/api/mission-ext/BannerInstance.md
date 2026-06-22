<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `BannerInstance`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# BannerInstance

**命名空间:** TaleWorlds.MountAndBlade
**模块:** TaleWorlds.MountAndBlade
**类型:** 结构体 struct struct
**领域:** 战斗系统 MountAndBlade

## 概述

> 本页为自动生成的存根。`BannerInstance` 是 `TaleWorlds.MountAndBlade` 命名空间下的一个结构体 struct。
> 如需了解其属性、方法和开发者用例，请参考源码或
## 主要属性

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


## 主要方法

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

贡献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-mountandblade)