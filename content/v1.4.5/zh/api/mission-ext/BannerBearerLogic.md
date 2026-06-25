---
title: "BannerBearerLogic"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `BannerBearerLogic`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# BannerBearerLogic

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class BannerBearerLogic : MissionLogic`
**Base:** `MissionLogic`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/BannerBearerLogic.cs`

## 概述

`BannerBearerLogic` 更偏向行为逻辑层：它响应事件、驱动流程，并在每帧或关键节点更新系统状态。

## 心智模型

把 `BannerBearerLogic` 当作一个 Logic 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `Formation` | `public Formation Formation { get; }` |
| `BannerItem` | `public ItemObject BannerItem { get; }` |
| `AgentSpawnLogic` | `public IMissionAgentSpawnLogic AgentSpawnLogic { get; }` |

## 主要方法

### SetBannerItem
`public void SetBannerItem(ItemObject bannerItem)`

**用途 / Purpose:** 设置 `banner item` 的值或状态。

### HasBannerEntity
`public bool HasBannerEntity(GameEntity bannerEntity)`

**用途 / Purpose:** 判断当前对象是否包含/拥有 `banner entity`。

### HasBannerOnGround
`public bool HasBannerOnGround()`

**用途 / Purpose:** 判断当前对象是否包含/拥有 `banner on ground`。

### HasActiveBannerBearers
`public bool HasActiveBannerBearers()`

**用途 / Purpose:** 判断当前对象是否包含/拥有 `active banner bearers`。

### IsBannerSearchingAgent
`public bool IsBannerSearchingAgent(Agent agent)`

**用途 / Purpose:** 处理 `is banner searching agent` 相关逻辑。

### GetNumberOfActiveBannerBearers
`public int GetNumberOfActiveBannerBearers()`

**用途 / Purpose:** 获取 `number of active banner bearers` 的当前值。

### UpdateAgentStats
`public void UpdateAgentStats(bool forceUpdate = false)`

**用途 / Purpose:** 更新 `agent stats` 的状态或数据。

### UpdateBannerSearchers
`public void UpdateBannerSearchers()`

**用途 / Purpose:** 更新 `banner searchers` 的状态或数据。

### UpdateBannerBearersForDeployment
`public void UpdateBannerBearersForDeployment()`

**用途 / Purpose:** 更新 `banner bearers for deployment` 的状态或数据。

### AddBannerEntity
`public void AddBannerEntity(GameEntity entity)`

**用途 / Purpose:** 向当前集合/状态中添加 `banner entity`。

### RemoveBannerEntity
`public void RemoveBannerEntity(WeakGameEntity entity)`

**用途 / Purpose:** 从当前集合/状态中移除 `banner entity`。

### OnBannerEntityPickedUp
`public void OnBannerEntityPickedUp(GameEntity entity, Agent agent)`

**用途 / Purpose:** 当 `banner entity picked up` 事件触发时调用此方法。

### OnBannerEntityDropped
`public void OnBannerEntityDropped(GameEntity entity)`

**用途 / Purpose:** 当 `banner entity dropped` 事件触发时调用此方法。

### OnBeforeFormationMovementOrderApplied
`public void OnBeforeFormationMovementOrderApplied(Formation formation, MovementOrder.MovementOrderEnum orderType)`

**用途 / Purpose:** 当 `before formation movement order applied` 事件触发时调用此方法。

### OnAfterArrangementOrderApplied
`public void OnAfterArrangementOrderApplied(Formation formation, ArrangementOrder.ArrangementOrderEnum orderEnum)`

**用途 / Purpose:** 当 `after arrangement order applied` 事件触发时调用此方法。

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
`public Agent SpawnBannerBearer(IAgentOriginBase troopOrigin, bool isPlayerSide, Formation formation, bool spawnWithHorse, bool isReinforcement, int formationTroopCount, int formationTroopIndex, bool isAlarmed, bool wieldInitialWeapons, Vec3? initialPosition, Vec2? initialDirection, string specialActionSetSuffix = null, bool useTroopClassForSpawn = false)`

**用途 / Purpose:** 处理 `spawn banner bearer` 相关逻辑。

### IsBannerItem
`public static bool IsBannerItem(ItemObject item)`

**用途 / Purpose:** 处理 `is banner item` 相关逻辑。

## 使用示例

```csharp
Mission.Current.AddMissionBehavior(new BannerBearerLogic());
```

## 参见

- [完整类目录](../catalog)