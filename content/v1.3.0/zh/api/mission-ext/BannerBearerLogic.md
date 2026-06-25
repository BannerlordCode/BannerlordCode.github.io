---
title: "BannerBearerLogic"
description: "BannerBearerLogic 的自动生成类参考。"
---
# BannerBearerLogic

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class BannerBearerLogic : MissionLogic`
**Base:** `MissionLogic`
**File:** `TaleWorlds.MountAndBlade/BannerBearerLogic.cs`

## 概述

`BannerBearerLogic` 更偏向行为逻辑层：它响应事件、驱动流程，并在每帧或关键节点更新系统状态。

## 心智模型

把 `BannerBearerLogic` 当作一个 Logic 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

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

**用途 / Purpose:** 判断当前对象是否处于 「formation banner」 状态或条件。

```csharp
// 先通过子系统 API 拿到 BannerBearerLogic 实例
BannerBearerLogic bannerBearerLogic = ...;
var result = bannerBearerLogic.IsFormationBanner(formation, spawnedItem);
```

### HasBannerOnGround
`public bool HasBannerOnGround(Formation formation)`

**用途 / Purpose:** 判断当前对象是否已经持有 「banner on ground」。

```csharp
// 先通过子系统 API 拿到 BannerBearerLogic 实例
BannerBearerLogic bannerBearerLogic = ...;
var result = bannerBearerLogic.HasBannerOnGround(formation);
```

### GetActiveBanner
`public BannerComponent GetActiveBanner(Formation formation)`

**用途 / Purpose:** 读取并返回当前对象中 「active banner」 的结果。

```csharp
// 先通过子系统 API 拿到 BannerBearerLogic 实例
BannerBearerLogic bannerBearerLogic = ...;
var result = bannerBearerLogic.GetActiveBanner(formation);
```

### GetFormationBannerBearers
`public List<Agent> GetFormationBannerBearers(Formation formation)`

**用途 / Purpose:** 读取并返回当前对象中 「formation banner bearers」 的结果。

```csharp
// 先通过子系统 API 拿到 BannerBearerLogic 实例
BannerBearerLogic bannerBearerLogic = ...;
var result = bannerBearerLogic.GetFormationBannerBearers(formation);
```

### GetFormationBanner
`public ItemObject GetFormationBanner(Formation formation)`

**用途 / Purpose:** 读取并返回当前对象中 「formation banner」 的结果。

```csharp
// 先通过子系统 API 拿到 BannerBearerLogic 实例
BannerBearerLogic bannerBearerLogic = ...;
var result = bannerBearerLogic.GetFormationBanner(formation);
```

### IsBannerSearchingAgent
`public bool IsBannerSearchingAgent(Agent agent)`

**用途 / Purpose:** 判断当前对象是否处于 「banner searching agent」 状态或条件。

```csharp
// 先通过子系统 API 拿到 BannerBearerLogic 实例
BannerBearerLogic bannerBearerLogic = ...;
var result = bannerBearerLogic.IsBannerSearchingAgent(agent);
```

### GetMissingBannerCount
`public int GetMissingBannerCount(Formation formation)`

**用途 / Purpose:** 读取并返回当前对象中 「missing banner count」 的结果。

```csharp
// 先通过子系统 API 拿到 BannerBearerLogic 实例
BannerBearerLogic bannerBearerLogic = ...;
var result = bannerBearerLogic.GetMissingBannerCount(formation);
```

### GetFormationFromBanner
`public Formation GetFormationFromBanner(SpawnedItemEntity spawnedItem)`

**用途 / Purpose:** 读取并返回当前对象中 「formation from banner」 的结果。

```csharp
// 先通过子系统 API 拿到 BannerBearerLogic 实例
BannerBearerLogic bannerBearerLogic = ...;
var result = bannerBearerLogic.GetFormationFromBanner(spawnedItem);
```

### SetFormationBanner
`public void SetFormationBanner(Formation formation, ItemObject newBanner)`

**用途 / Purpose:** 为 「formation banner」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 BannerBearerLogic 实例
BannerBearerLogic bannerBearerLogic = ...;
bannerBearerLogic.SetFormationBanner(formation, newBanner);
```

### OnBehaviorInitialize
`public override void OnBehaviorInitialize()`

**用途 / Purpose:** 在 「behavior initialize」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 BannerBearerLogic 实例
BannerBearerLogic bannerBearerLogic = ...;
bannerBearerLogic.OnBehaviorInitialize();
```

### OnDeploymentFinished
`public override void OnDeploymentFinished()`

**用途 / Purpose:** 在 「deployment finished」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 BannerBearerLogic 实例
BannerBearerLogic bannerBearerLogic = ...;
bannerBearerLogic.OnDeploymentFinished();
```

### OnMissionTick
`public override void OnMissionTick(float dt)`

**用途 / Purpose:** 在 「mission tick」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 BannerBearerLogic 实例
BannerBearerLogic bannerBearerLogic = ...;
bannerBearerLogic.OnMissionTick(0);
```

### OnItemPickup
`public void OnItemPickup(Agent agent, SpawnedItemEntity spawnedItem)`

**用途 / Purpose:** 在 「item pickup」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 BannerBearerLogic 实例
BannerBearerLogic bannerBearerLogic = ...;
bannerBearerLogic.OnItemPickup(agent, spawnedItem);
```

### OnItemDrop
`public void OnItemDrop(Agent agent, SpawnedItemEntity spawnedItem)`

**用途 / Purpose:** 在 「item drop」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 BannerBearerLogic 实例
BannerBearerLogic bannerBearerLogic = ...;
bannerBearerLogic.OnItemDrop(agent, spawnedItem);
```

### OnAgentRemoved
`public override void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow blow)`

**用途 / Purpose:** 在 「agent removed」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 BannerBearerLogic 实例
BannerBearerLogic bannerBearerLogic = ...;
bannerBearerLogic.OnAgentRemoved(affectedAgent, affectorAgent, agentState, blow);
```

### OnAgentPanicked
`public override void OnAgentPanicked(Agent affectedAgent)`

**用途 / Purpose:** 在 「agent panicked」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 BannerBearerLogic 实例
BannerBearerLogic bannerBearerLogic = ...;
bannerBearerLogic.OnAgentPanicked(affectedAgent);
```

### UpdateAgent
`public void UpdateAgent(Agent agent, bool willBecomeBannerBearer)`

**用途 / Purpose:** 重新计算并更新 「agent」 的最新表示。

```csharp
// 先通过子系统 API 拿到 BannerBearerLogic 实例
BannerBearerLogic bannerBearerLogic = ...;
bannerBearerLogic.UpdateAgent(agent, false);
```

### SpawnBannerBearer
`public Agent SpawnBannerBearer(IAgentOriginBase troopOrigin, bool isPlayerSide, Formation formation, bool spawnWithHorse, bool isReinforcement, int formationTroopCount, int formationTroopIndex, bool isAlarmed, bool wieldInitialWeapons, bool forceDismounted, Vec3? initialPosition, Vec2? initialDirection, string specialActionSetSuffix = null, bool useTroopClassForSpawn = false)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 BannerBearerLogic 实例
BannerBearerLogic bannerBearerLogic = ...;
var result = bannerBearerLogic.SpawnBannerBearer(troopOrigin, false, formation, false, false, 0, 0, false, false, false, initialPosition, initialDirection, "example", false);
```

### IsBannerItem
`public static bool IsBannerItem(ItemObject item)`

**用途 / Purpose:** 判断当前对象是否处于 「banner item」 状态或条件。

```csharp
// 静态调用，不需要实例
BannerBearerLogic.IsBannerItem(item);
```

### SetBannerItem
`public void SetBannerItem(ItemObject bannerItem)`

**用途 / Purpose:** 为 「banner item」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 BannerBearerLogic 实例
BannerBearerLogic bannerBearerLogic = ...;
bannerBearerLogic.SetBannerItem(bannerItem);
```

### HasBannerEntity
`public bool HasBannerEntity(GameEntity bannerEntity)`

**用途 / Purpose:** 判断当前对象是否已经持有 「banner entity」。

```csharp
// 先通过子系统 API 拿到 BannerBearerLogic 实例
BannerBearerLogic bannerBearerLogic = ...;
var result = bannerBearerLogic.HasBannerEntity(bannerEntity);
```

### HasBannerOnGround
`public bool HasBannerOnGround()`

**用途 / Purpose:** 判断当前对象是否已经持有 「banner on ground」。

```csharp
// 先通过子系统 API 拿到 BannerBearerLogic 实例
BannerBearerLogic bannerBearerLogic = ...;
var result = bannerBearerLogic.HasBannerOnGround();
```

### HasActiveBannerBearers
`public bool HasActiveBannerBearers()`

**用途 / Purpose:** 判断当前对象是否已经持有 「active banner bearers」。

```csharp
// 先通过子系统 API 拿到 BannerBearerLogic 实例
BannerBearerLogic bannerBearerLogic = ...;
var result = bannerBearerLogic.HasActiveBannerBearers();
```

### IsBannerSearchingAgent
`public bool IsBannerSearchingAgent(Agent agent)`

**用途 / Purpose:** 判断当前对象是否处于 「banner searching agent」 状态或条件。

```csharp
// 先通过子系统 API 拿到 BannerBearerLogic 实例
BannerBearerLogic bannerBearerLogic = ...;
var result = bannerBearerLogic.IsBannerSearchingAgent(agent);
```

### GetNumberOfActiveBannerBearers
`public int GetNumberOfActiveBannerBearers()`

**用途 / Purpose:** 读取并返回当前对象中 「number of active banner bearers」 的结果。

```csharp
// 先通过子系统 API 拿到 BannerBearerLogic 实例
BannerBearerLogic bannerBearerLogic = ...;
var result = bannerBearerLogic.GetNumberOfActiveBannerBearers();
```

### UpdateAgentStats
`public void UpdateAgentStats(bool forceUpdate = false)`

**用途 / Purpose:** 重新计算并更新 「agent stats」 的最新表示。

```csharp
// 先通过子系统 API 拿到 BannerBearerLogic 实例
BannerBearerLogic bannerBearerLogic = ...;
bannerBearerLogic.UpdateAgentStats(false);
```

### UpdateBannerSearchers
`public void UpdateBannerSearchers()`

**用途 / Purpose:** 重新计算并更新 「banner searchers」 的最新表示。

```csharp
// 先通过子系统 API 拿到 BannerBearerLogic 实例
BannerBearerLogic bannerBearerLogic = ...;
bannerBearerLogic.UpdateBannerSearchers();
```

### UpdateBannerBearersForDeployment
`public void UpdateBannerBearersForDeployment()`

**用途 / Purpose:** 重新计算并更新 「banner bearers for deployment」 的最新表示。

```csharp
// 先通过子系统 API 拿到 BannerBearerLogic 实例
BannerBearerLogic bannerBearerLogic = ...;
bannerBearerLogic.UpdateBannerBearersForDeployment();
```

### AddBannerEntity
`public void AddBannerEntity(GameEntity entity)`

**用途 / Purpose:** 将 「banner entity」 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 BannerBearerLogic 实例
BannerBearerLogic bannerBearerLogic = ...;
bannerBearerLogic.AddBannerEntity(entity);
```

### RemoveBannerEntity
`public void RemoveBannerEntity(WeakGameEntity entity)`

**用途 / Purpose:** 从当前容器或状态中移除 「banner entity」。

```csharp
// 先通过子系统 API 拿到 BannerBearerLogic 实例
BannerBearerLogic bannerBearerLogic = ...;
bannerBearerLogic.RemoveBannerEntity(entity);
```

### OnBannerEntityPickedUp
`public void OnBannerEntityPickedUp(GameEntity entity, Agent agent)`

**用途 / Purpose:** 在 「banner entity picked up」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 BannerBearerLogic 实例
BannerBearerLogic bannerBearerLogic = ...;
bannerBearerLogic.OnBannerEntityPickedUp(entity, agent);
```

### OnBannerEntityDropped
`public void OnBannerEntityDropped(GameEntity entity)`

**用途 / Purpose:** 在 「banner entity dropped」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 BannerBearerLogic 实例
BannerBearerLogic bannerBearerLogic = ...;
bannerBearerLogic.OnBannerEntityDropped(entity);
```

### OnBeforeFormationMovementOrderApplied
`public void OnBeforeFormationMovementOrderApplied(Formation formation, MovementOrder.MovementOrderEnum orderType)`

**用途 / Purpose:** 在 「before formation movement order applied」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 BannerBearerLogic 实例
BannerBearerLogic bannerBearerLogic = ...;
bannerBearerLogic.OnBeforeFormationMovementOrderApplied(formation, orderType);
```

### OnAfterArrangementOrderApplied
`public void OnAfterArrangementOrderApplied(Formation formation, ArrangementOrder.ArrangementOrderEnum orderEnum)`

**用途 / Purpose:** 在 「after arrangement order applied」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 BannerBearerLogic 实例
BannerBearerLogic bannerBearerLogic = ...;
bannerBearerLogic.OnAfterArrangementOrderApplied(formation, orderEnum);
```

## 使用示例

```csharp
var behavior = Mission.Current.GetMissionBehavior<BannerBearerLogic>();
```

## 参见

- [本区域目录](../)