<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `BannerInstance`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# BannerInstance

**命名空间:** TaleWorlds.MountAndBlade
**模块:** TaleWorlds.MountAndBlade
**类型:** `public struct BannerInstance`
**领域:** mission-ext

## 概述

`BannerInstance` 位于 `TaleWorlds.MountAndBlade`，它的公开成员表明它是这一子系统暴露给 mod 的一个正式扩展或数据入口。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

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
`public bool IsFormationBanner(Formation formation, SpawnedItemEntity spawnedItem)`

**用途 / Purpose:** 处理 `is formation banner` 相关逻辑。

### HasBannerOnGround
`public bool HasBannerOnGround(Formation formation)`

**用途 / Purpose:** 判断当前对象是否包含/拥有 `banner on ground`。

### GetActiveBanner
`public BannerComponent GetActiveBanner(Formation formation)`

**用途 / Purpose:** 获取 `active banner` 的当前值。

### GetFormationBannerBearers
`public List<Agent> GetFormationBannerBearers(Formation formation)`

**用途 / Purpose:** 获取 `formation banner bearers` 的当前值。

### GetFormationBanner
`public ItemObject GetFormationBanner(Formation formation)`

**用途 / Purpose:** 获取 `formation banner` 的当前值。

### IsBannerSearchingAgent
`public bool IsBannerSearchingAgent(Agent agent)`

**用途 / Purpose:** 处理 `is banner searching agent` 相关逻辑。

### GetMissingBannerCount
`public int GetMissingBannerCount(Formation formation)`

**用途 / Purpose:** 获取 `missing banner count` 的当前值。

### GetFormationFromBanner
`public Formation GetFormationFromBanner(SpawnedItemEntity spawnedItem)`

**用途 / Purpose:** 获取 `formation from banner` 的当前值。

### SetFormationBanner
`public void SetFormationBanner(Formation formation, ItemObject newBanner)`

**用途 / Purpose:** 设置 `formation banner` 的值或状态。

### OnBehaviorInitialize
`public override void OnBehaviorInitialize()`

**用途 / Purpose:** 当 `behavior initialize` 事件触发时调用此方法。

### OnDeploymentFinished
`public override void OnDeploymentFinished()`

**用途 / Purpose:** 当 `deployment finished` 事件触发时调用此方法。

### OnMissionTick
`public override void OnMissionTick(float dt)`

**用途 / Purpose:** 当 `mission tick` 事件触发时调用此方法。

### OnItemPickup
`public void OnItemPickup(Agent agent, SpawnedItemEntity spawnedItem)`

**用途 / Purpose:** 当 `item pickup` 事件触发时调用此方法。

### OnItemDrop
`public void OnItemDrop(Agent agent, SpawnedItemEntity spawnedItem)`

**用途 / Purpose:** 当 `item drop` 事件触发时调用此方法。

### OnAgentRemoved
`public override void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow blow)`

**用途 / Purpose:** 当 `agent removed` 事件触发时调用此方法。

### OnAgentPanicked
`public override void OnAgentPanicked(Agent affectedAgent)`

**用途 / Purpose:** 当 `agent panicked` 事件触发时调用此方法。

### UpdateAgent
`public void UpdateAgent(Agent agent, bool willBecomeBannerBearer)`

**用途 / Purpose:** 更新 `agent` 的状态或数据。

### SpawnBannerBearer
`public Agent SpawnBannerBearer(IAgentOriginBase troopOrigin, bool isPlayerSide, Formation formation, bool spawnWithHorse, bool isReinforcement, int formationTroopCount, int formationTroopIndex, bool isAlarmed, bool wieldInitialWeapons, bool forceDismounted, Vec3? initialPosition, Vec2? initialDirection, string specialActionSetSuffix = null, bool useTroopClassForSpawn = false)`

**用途 / Purpose:** 处理 `spawn banner bearer` 相关逻辑。

### IsBannerItem
`public static bool IsBannerItem(ItemObject item)`

**用途 / Purpose:** 处理 `is banner item` 相关逻辑。

### SetBannerItem
`public void SetBannerItem(ItemObject bannerItem)`

**用途 / Purpose:** 设置 `banner item` 的值或状态。

## 使用示例

```csharp
// 先从游戏状态中拿到一个 BannerInstance 实例，再调用它的公开方法
var value = new BannerInstance();
value.IsFormationBanner(formation, spawnedItem);
```

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-mountandblade)
