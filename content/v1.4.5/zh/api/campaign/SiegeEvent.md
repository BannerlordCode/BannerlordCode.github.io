---
title: "SiegeEvent"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `SiegeEvent`
- [← 本领域 / 返回 campaign](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# SiegeEvent

**Namespace:** TaleWorlds.CampaignSystem.Siege
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class SiegeEvent`
**Base:** 无
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Siege/SiegeEvent.cs`

## 概述

`SiegeEvent` 位于 `TaleWorlds.CampaignSystem.Siege`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.Siege` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `NextTimeEngineCanBombard` | `public CampaignTime NextTimeEngineCanBombard { get; }` |
| `AlreadyFired` | `public bool AlreadyFired { get; }` |
| `CurrentTargetType` | `public SiegeBombardTargets CurrentTargetType { get; }` |
| `CurrentTargetIndex` | `public int CurrentTargetIndex { get; }` |
| `PreviousDamagedTargetType` | `public SiegeBombardTargets PreviousDamagedTargetType { get; }` |
| `PreviousTargetIndex` | `public int PreviousTargetIndex { get; }` |
| `LastBombardTime` | `public CampaignTime LastBombardTime { get; }` |
| `NextProjectileCollisionTime` | `public CampaignTime NextProjectileCollisionTime { get; }` |
| `IsActive` | `public bool IsActive { get; }` |
| `Hitpoints` | `public float Hitpoints { get; }` |
| `Progress` | `public float Progress { get; }` |
| `RangedSiegeEngine` | `public RangedSiegeEngine RangedSiegeEngine { get; }` |
| `RedeploymentProgress` | `public float RedeploymentProgress { get; }` |
| `MaxHitPoints` | `public float MaxHitPoints { get; }` |
| `DeployedSiegeEngineTypesCount` | `public MBReadOnlyDictionary<SiegeEngineType, int> DeployedSiegeEngineTypesCount { get; }` |
| `ReservedSiegeEngineTypesCount` | `public MBReadOnlyDictionary<SiegeEngineType, int> ReservedSiegeEngineTypesCount { get; }` |
| `SiegeStartTime` | `public CampaignTime SiegeStartTime { get; }` |
| `IsPlayerSiegeEvent` | `public bool IsPlayerSiegeEvent { get; }` |
| `BlockadeShouldBeActivated` | `public bool BlockadeShouldBeActivated { get; }` |

## 主要方法

### Hold
`public void Hold()`

**用途 / Purpose:** 处理 `hold` 相关逻辑。

### Reload
`public void Reload()`

**用途 / Purpose:** 处理 `reload` 相关逻辑。

### OnFireDecisionTaken
`public void OnFireDecisionTaken(SiegeEvent siegeEvent, BattleSideEnum battleSide, int targetSlotIndex, SiegeBombardTargets targetType)`

**用途 / Purpose:** 当 `fire decision taken` 事件触发时调用此方法。

### SetRedeploymentProgress
`public void SetRedeploymentProgress(float redeploymentProgress)`

**用途 / Purpose:** 设置 `redeployment progress` 的值或状态。

### SetHitpoints
`public void SetHitpoints(float hitPoints)`

**用途 / Purpose:** 设置 `hitpoints` 的值或状态。

### SetProgress
`public void SetProgress(float progress)`

**用途 / Purpose:** 设置 `progress` 的值或状态。

### SetRangedSiegeEngine
`public void SetRangedSiegeEngine(RangedSiegeEngine rangedSiegeEngine)`

**用途 / Purpose:** 设置 `ranged siege engine` 的值或状态。

### AllSiegeEngines
`public IEnumerable<SiegeEngineConstructionProgress> AllSiegeEngines()`

**用途 / Purpose:** 处理 `all siege engines` 相关逻辑。

### AddPrebuiltEngineToReserve
`public void AddPrebuiltEngineToReserve(SiegeEngineConstructionProgress siegeEngine)`

**用途 / Purpose:** 向当前集合/状态中添加 `prebuilt engine to reserve`。

### DeploySiegeEngineAtIndex
`public void DeploySiegeEngineAtIndex(SiegeEngineConstructionProgress siegeEngine, int index)`

**用途 / Purpose:** 处理 `deploy siege engine at index` 相关逻辑。

### RemoveDeployedSiegeEngine
`public void RemoveDeployedSiegeEngine(int index, bool isRanged, bool moveToReserve)`

**用途 / Purpose:** 从当前集合/状态中移除 `deployed siege engine`。

### RemovedSiegeEngineFromReservedSiegeEngines
`public bool RemovedSiegeEngineFromReservedSiegeEngines(SiegeEngineConstructionProgress siegeEngine)`

**用途 / Purpose:** 从当前集合/状态中移除 `d siege engine from reserved siege engines`。

### FindDeploymentIndexOfDeployedEngine
`public int FindDeploymentIndexOfDeployedEngine(SiegeEngineConstructionProgress deployedEngine)`

**用途 / Purpose:** 处理 `find deployment index of deployed engine` 相关逻辑。

### ClearRemovedEnginesIfNecessary
`public bool ClearRemovedEnginesIfNecessary()`

**用途 / Purpose:** 处理 `clear removed engines if necessary` 相关逻辑。

### ActivateBlockade
`public void ActivateBlockade()`

**用途 / Purpose:** 处理 `activate blockade` 相关逻辑。

### DeactivateBlockade
`public void DeactivateBlockade()`

**用途 / Purpose:** 处理 `deactivate blockade` 相关逻辑。

### GetInvolvedPartiesForEventType
`public List<PartyBase> GetInvolvedPartiesForEventType(MapEvent.BattleTypes battleType)`

**用途 / Purpose:** 获取 `involved parties for event type` 的当前值。

### GetCurrentBattleType
`public MapEvent.BattleTypes GetCurrentBattleType()`

**用途 / Purpose:** 获取 `current battle type` 的当前值。

### GetSiegeEventSide
`public ISiegeEventSide GetSiegeEventSide(BattleSideEnum side)`

**用途 / Purpose:** 获取 `siege event side` 的当前值。

### CanPartyJoinSide
`public bool CanPartyJoinSide(PartyBase party, BattleSideEnum side)`

**用途 / Purpose:** 判断当前对象是否可以执行 `party join side`。

### Tick
`public void Tick(float dt)`

**用途 / Purpose:** 处理 `tick` 相关逻辑。

### OnAfterLoad
`public void OnAfterLoad()`

**用途 / Purpose:** 当 `after load` 事件触发时调用此方法。

### OnBeforeSiegeEventEnd
`public void OnBeforeSiegeEventEnd(BattleState winnerSide, MapEvent.BattleTypes battleType)`

**用途 / Purpose:** 当 `before siege event end` 事件触发时调用此方法。

### FinalizeSiegeEvent
`public void FinalizeSiegeEvent()`

**用途 / Purpose:** 处理 `finalize siege event` 相关逻辑。

### IsPartyInvolved
`public bool IsPartyInvolved(PartyBase party)`

**用途 / Purpose:** 处理 `is party involved` 相关逻辑。

### SetPositionAfterMapChange
`public void SetPositionAfterMapChange(CampaignVec2 newPosition)`

**用途 / Purpose:** 设置 `position after map change` 的值或状态。

### DoSiegeAction
`public void DoSiegeAction(ISiegeEventSide siegeEventSide, SiegeStrategyActionModel.SiegeAction siegeAction, SiegeEngineType siegeEngineType, int deploymentIndex, int reserveIndex)`

**用途 / Purpose:** 处理 `do siege action` 相关逻辑。

### AdvanceStrategy
`public void AdvanceStrategy(ISiegeEventSide siegeEventSide)`

**用途 / Purpose:** 处理 `advance strategy` 相关逻辑。

### BreakSiegeEngine
`public void BreakSiegeEngine(ISiegeEventSide siegeEventSide, SiegeEngineType siegeEngineType)`

**用途 / Purpose:** 处理 `break siege engine` 相关逻辑。

### GetPreparedSiegeEnginesAsDictionary
`public Dictionary<SiegeEngineType, int> GetPreparedSiegeEnginesAsDictionary(ISiegeEventSide siegeEventSide)`

**用途 / Purpose:** 获取 `prepared siege engines as dictionary` 的当前值。

### GetPreparedAndActiveSiegeEngines
`public List<MissionSiegeWeapon> GetPreparedAndActiveSiegeEngines(ISiegeEventSide siegeEventSide)`

**用途 / Purpose:** 获取 `prepared and active siege engines` 的当前值。

### SetSiegeEngineStatesAfterSiegeMission
`public void SetSiegeEngineStatesAfterSiegeMission(IEnumerable<IMissionSiegeWeapon> attackerMissionSiegeEngineData, IEnumerable<IMissionSiegeWeapon> defenderMissionSiegeEngineData)`

**用途 / Purpose:** 设置 `siege engine states after siege mission` 的值或状态。

### CreateSiegeObject
`public void CreateSiegeObject(SiegeEngineConstructionProgress siegeEngineConstructionProgress, ISiegeEventSide siegeSide)`

**用途 / Purpose:** 创建一个 `siege object` 实例或对象。

### ToString
`public override string ToString()`

**用途 / Purpose:** 处理 `to string` 相关逻辑。

### ConstructionTick
`public void ConstructionTick(ISiegeEventSide siegeEventSide)`

**用途 / Purpose:** 处理 `construction tick` 相关逻辑。

### BombardTick
`public void BombardTick(ISiegeEventSide siegeEventSide)`

**用途 / Purpose:** 处理 `bombard tick` 相关逻辑。

### FindAttackableRangedEngineWithHighestPriority
`public void FindAttackableRangedEngineWithHighestPriority(ISiegeEventSide siegeEventSide, int attackerSlotIndex, out int targetIndex, out float targetPriority)`

**用途 / Purpose:** 处理 `find attackable ranged engine with highest priority` 相关逻辑。

## 使用示例

```csharp
var value = new SiegeEvent();
value.Hold();
```

## 参见

- [完整类目录](../catalog)