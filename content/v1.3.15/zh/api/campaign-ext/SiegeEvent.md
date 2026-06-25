---
title: "SiegeEvent"
description: "SiegeEvent 的自动生成类参考。"
---
# SiegeEvent

**Namespace:** TaleWorlds.CampaignSystem.Siege
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class SiegeEvent`
**Base:** 无
**File:** `TaleWorlds.CampaignSystem/Siege/SiegeEvent.cs`

## 概述

`SiegeEvent` 位于 `TaleWorlds.CampaignSystem.Siege`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.Siege` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `SiegeWallSeed` | `public int SiegeWallSeed { get; }` |
| `SiegePeopleSeed` | `public int SiegePeopleSeed { get; }` |
| `SiegeStartTime` | `public CampaignTime SiegeStartTime { get; }` |
| `IsPlayerSiegeEvent` | `public bool IsPlayerSiegeEvent { get; }` |
| `BlockadeShouldBeActivated` | `public bool BlockadeShouldBeActivated { get; }` |
| `IsBlockadeActive` | `public bool IsBlockadeActive { get; }` |
| `ReadyToBeRemoved` | `public bool ReadyToBeRemoved { get; }` |
| `NextTimeEngineCanBombard` | `public CampaignTime NextTimeEngineCanBombard { get; }` |
| `AlreadyFired` | `public bool AlreadyFired { get; }` |
| `CurrentTargetType` | `public SiegeBombardTargets CurrentTargetType { get; }` |
| `CurrentTargetIndex` | `public int CurrentTargetIndex { get; }` |
| `PreviousDamagedTargetType` | `public SiegeBombardTargets PreviousDamagedTargetType { get; }` |
| `PreviousTargetIndex` | `public int PreviousTargetIndex { get; }` |
| `LastBombardTime` | `public CampaignTime LastBombardTime { get; }` |
| `NextProjectileCollisionTime` | `public CampaignTime NextProjectileCollisionTime { get; }` |
| `IsReadyToFire` | `public bool IsReadyToFire { get; }` |
| `IsActive` | `public bool IsActive { get; }` |
| `Hitpoints` | `public float Hitpoints { get; }` |
| `Progress` | `public float Progress { get; }` |
| `RangedSiegeEngine` | `public SiegeEvent.RangedSiegeEngine RangedSiegeEngine { get; }` |
| `RedeploymentProgress` | `public float RedeploymentProgress { get; }` |
| `MaxHitPoints` | `public float MaxHitPoints { get; }` |
| `IsConstructed` | `public bool IsConstructed { get; }` |
| `IsBeingRedeployed` | `public bool IsBeingRedeployed { get; }` |
| `DeployedSiegeEngines` | `public MBReadOnlyList<SiegeEvent.SiegeEngineConstructionProgress> DeployedSiegeEngines { get; }` |
| `ReservedSiegeEngines` | `public MBReadOnlyList<SiegeEvent.SiegeEngineConstructionProgress> ReservedSiegeEngines { get; }` |
| `DeployedSiegeEngineTypesCount` | `public MBReadOnlyDictionary<SiegeEngineType, int> DeployedSiegeEngineTypesCount { get; }` |
| `ReservedSiegeEngineTypesCount` | `public MBReadOnlyDictionary<SiegeEngineType, int> ReservedSiegeEngineTypesCount { get; }` |
| `RemovedSiegeEngines` | `public MBReadOnlyList<SiegeEvent.SiegeEnginesContainer.RemovedSiegeEngine> RemovedSiegeEngines { get; }` |

## 主要方法

### ActivateBlockade
`public void ActivateBlockade()`

**用途 / Purpose:** 激活「blockade」对应的资源、状态或功能。

```csharp
// 先通过子系统 API 拿到 SiegeEvent 实例
SiegeEvent siegeEvent = ...;
siegeEvent.ActivateBlockade();
```

### DeactivateBlockade
`public void DeactivateBlockade()`

**用途 / Purpose:** 停用「blockade」对应的资源、状态或功能。

```csharp
// 先通过子系统 API 拿到 SiegeEvent 实例
SiegeEvent siegeEvent = ...;
siegeEvent.DeactivateBlockade();
```

### GetInvolvedPartiesForEventType
`public List<PartyBase> GetInvolvedPartiesForEventType(MapEvent.BattleTypes battleType)`

**用途 / Purpose:** 读取并返回当前对象中 「involved parties for event type」 的结果。

```csharp
// 先通过子系统 API 拿到 SiegeEvent 实例
SiegeEvent siegeEvent = ...;
var result = siegeEvent.GetInvolvedPartiesForEventType(battleType);
```

### GetCurrentBattleType
`public MapEvent.BattleTypes GetCurrentBattleType()`

**用途 / Purpose:** 读取并返回当前对象中 「current battle type」 的结果。

```csharp
// 先通过子系统 API 拿到 SiegeEvent 实例
SiegeEvent siegeEvent = ...;
var result = siegeEvent.GetCurrentBattleType();
```

### GetSiegeEventSide
`public ISiegeEventSide GetSiegeEventSide(BattleSideEnum side)`

**用途 / Purpose:** 读取并返回当前对象中 「siege event side」 的结果。

```csharp
// 先通过子系统 API 拿到 SiegeEvent 实例
SiegeEvent siegeEvent = ...;
var result = siegeEvent.GetSiegeEventSide(side);
```

### CanPartyJoinSide
`public bool CanPartyJoinSide(PartyBase party, BattleSideEnum side)`

**用途 / Purpose:** 检查当前对象是否满足 「party join side」 的前置条件。

```csharp
// 先通过子系统 API 拿到 SiegeEvent 实例
SiegeEvent siegeEvent = ...;
var result = siegeEvent.CanPartyJoinSide(party, side);
```

### Tick
`public void Tick(float dt)`

**用途 / Purpose:** 推进当前对象一帧/一个更新周期的状态。

```csharp
// 先通过子系统 API 拿到 SiegeEvent 实例
SiegeEvent siegeEvent = ...;
siegeEvent.Tick(0);
```

### OnAfterLoad
`public void OnAfterLoad()`

**用途 / Purpose:** 在 「after load」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 SiegeEvent 实例
SiegeEvent siegeEvent = ...;
siegeEvent.OnAfterLoad();
```

### OnBeforeSiegeEventEnd
`public void OnBeforeSiegeEventEnd(BattleState winnerSide, MapEvent.BattleTypes battleType)`

**用途 / Purpose:** 在 「before siege event end」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 SiegeEvent 实例
SiegeEvent siegeEvent = ...;
siegeEvent.OnBeforeSiegeEventEnd(winnerSide, battleType);
```

### FinalizeSiegeEvent
`public void FinalizeSiegeEvent()`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 SiegeEvent 实例
SiegeEvent siegeEvent = ...;
siegeEvent.FinalizeSiegeEvent();
```

### IsPartyInvolved
`public bool IsPartyInvolved(PartyBase party)`

**用途 / Purpose:** 判断当前对象是否处于 「party involved」 状态或条件。

```csharp
// 先通过子系统 API 拿到 SiegeEvent 实例
SiegeEvent siegeEvent = ...;
var result = siegeEvent.IsPartyInvolved(party);
```

### SetPositionAfterMapChange
`public void SetPositionAfterMapChange(CampaignVec2 newPosition)`

**用途 / Purpose:** 为 「position after map change」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 SiegeEvent 实例
SiegeEvent siegeEvent = ...;
siegeEvent.SetPositionAfterMapChange(newPosition);
```

### DoSiegeAction
`public void DoSiegeAction(ISiegeEventSide siegeEventSide, SiegeStrategyActionModel.SiegeAction siegeAction, SiegeEngineType siegeEngineType, int deploymentIndex, int reserveIndex)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 SiegeEvent 实例
SiegeEvent siegeEvent = ...;
siegeEvent.DoSiegeAction(siegeEventSide, siegeAction, siegeEngineType, 0, 0);
```

### AdvanceStrategy
`public void AdvanceStrategy(ISiegeEventSide siegeEventSide)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 SiegeEvent 实例
SiegeEvent siegeEvent = ...;
siegeEvent.AdvanceStrategy(siegeEventSide);
```

### BreakSiegeEngine
`public void BreakSiegeEngine(ISiegeEventSide siegeEventSide, SiegeEngineType siegeEngineType)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 SiegeEvent 实例
SiegeEvent siegeEvent = ...;
siegeEvent.BreakSiegeEngine(siegeEventSide, siegeEngineType);
```

### GetPreparedSiegeEnginesAsDictionary
`public Dictionary<SiegeEngineType, int> GetPreparedSiegeEnginesAsDictionary(ISiegeEventSide siegeEventSide)`

**用途 / Purpose:** 读取并返回当前对象中 「prepared siege engines as dictionary」 的结果。

```csharp
// 先通过子系统 API 拿到 SiegeEvent 实例
SiegeEvent siegeEvent = ...;
var result = siegeEvent.GetPreparedSiegeEnginesAsDictionary(siegeEventSide);
```

### GetPreparedAndActiveSiegeEngines
`public List<MissionSiegeWeapon> GetPreparedAndActiveSiegeEngines(ISiegeEventSide siegeEventSide)`

**用途 / Purpose:** 读取并返回当前对象中 「prepared and active siege engines」 的结果。

```csharp
// 先通过子系统 API 拿到 SiegeEvent 实例
SiegeEvent siegeEvent = ...;
var result = siegeEvent.GetPreparedAndActiveSiegeEngines(siegeEventSide);
```

### SetSiegeEngineStatesAfterSiegeMission
`public void SetSiegeEngineStatesAfterSiegeMission(IEnumerable<IMissionSiegeWeapon> attackerMissionSiegeEngineData, IEnumerable<IMissionSiegeWeapon> defenderMissionSiegeEngineData)`

**用途 / Purpose:** 为 「siege engine states after siege mission」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 SiegeEvent 实例
SiegeEvent siegeEvent = ...;
siegeEvent.SetSiegeEngineStatesAfterSiegeMission(attackerMissionSiegeEngineData, defenderMissionSiegeEngineData);
```

### CreateSiegeObject
`public void CreateSiegeObject(SiegeEvent.SiegeEngineConstructionProgress siegeEngineConstructionProgress, ISiegeEventSide siegeSide)`

**用途 / Purpose:** 构建一个新的 「siege object」 实体并返回给调用方。

```csharp
// 先通过子系统 API 拿到 SiegeEvent 实例
SiegeEvent siegeEvent = ...;
siegeEvent.CreateSiegeObject(siegeEngineConstructionProgress, siegeSide);
```

### ToString
`public override string ToString()`

**用途 / Purpose:** 返回当前对象的人类可读字符串表示。

```csharp
// 先通过子系统 API 拿到 SiegeEvent 实例
SiegeEvent siegeEvent = ...;
var result = siegeEvent.ToString();
```

### ConstructionTick
`public void ConstructionTick(ISiegeEventSide siegeEventSide)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 SiegeEvent 实例
SiegeEvent siegeEvent = ...;
siegeEvent.ConstructionTick(siegeEventSide);
```

### BombardTick
`public void BombardTick(ISiegeEventSide siegeEventSide)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 SiegeEvent 实例
SiegeEvent siegeEvent = ...;
siegeEvent.BombardTick(siegeEventSide);
```

### FindAttackableRangedEngineWithHighestPriority
`public void FindAttackableRangedEngineWithHighestPriority(ISiegeEventSide siegeEventSide, int attackerSlotIndex, out int targetIndex, out float targetPriority)`

**用途 / Purpose:** 在当前集合/范围内查找满足条件的「attackable ranged engine with highest priority」。

```csharp
// 先通过子系统 API 拿到 SiegeEvent 实例
SiegeEvent siegeEvent = ...;
siegeEvent.FindAttackableRangedEngineWithHighestPriority(siegeEventSide, 0, targetIndex, targetPriority);
```

### Hold
`public void Hold()`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 SiegeEvent 实例
SiegeEvent siegeEvent = ...;
siegeEvent.Hold();
```

### Reload
`public void Reload()`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 SiegeEvent 实例
SiegeEvent siegeEvent = ...;
siegeEvent.Reload();
```

### OnFireDecisionTaken
`public void OnFireDecisionTaken(SiegeEvent siegeEvent, BattleSideEnum battleSide, int targetSlotIndex, SiegeBombardTargets targetType)`

**用途 / Purpose:** 在 「fire decision taken」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 SiegeEvent 实例
SiegeEvent siegeEvent = ...;
siegeEvent.OnFireDecisionTaken(siegeEvent, battleSide, 0, targetType);
```

### SetRedeploymentProgress
`public void SetRedeploymentProgress(float redeploymentProgress)`

**用途 / Purpose:** 为 「redeployment progress」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 SiegeEvent 实例
SiegeEvent siegeEvent = ...;
siegeEvent.SetRedeploymentProgress(0);
```

### SetHitpoints
`public void SetHitpoints(float hitPoints)`

**用途 / Purpose:** 为 「hitpoints」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 SiegeEvent 实例
SiegeEvent siegeEvent = ...;
siegeEvent.SetHitpoints(0);
```

### SetProgress
`public void SetProgress(float progress)`

**用途 / Purpose:** 为 「progress」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 SiegeEvent 实例
SiegeEvent siegeEvent = ...;
siegeEvent.SetProgress(0);
```

### SetRangedSiegeEngine
`public void SetRangedSiegeEngine(SiegeEvent.RangedSiegeEngine rangedSiegeEngine)`

**用途 / Purpose:** 为 「ranged siege engine」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 SiegeEvent 实例
SiegeEvent siegeEvent = ...;
siegeEvent.SetRangedSiegeEngine(rangedSiegeEngine);
```

### AllSiegeEngines
`public IEnumerable<SiegeEvent.SiegeEngineConstructionProgress> AllSiegeEngines()`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 SiegeEvent 实例
SiegeEvent siegeEvent = ...;
var result = siegeEvent.AllSiegeEngines();
```

### AddPrebuiltEngineToReserve
`public void AddPrebuiltEngineToReserve(SiegeEvent.SiegeEngineConstructionProgress siegeEngine)`

**用途 / Purpose:** 将 「prebuilt engine to reserve」 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 SiegeEvent 实例
SiegeEvent siegeEvent = ...;
siegeEvent.AddPrebuiltEngineToReserve(siegeEngine);
```

### DeploySiegeEngineAtIndex
`public void DeploySiegeEngineAtIndex(SiegeEvent.SiegeEngineConstructionProgress siegeEngine, int index)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 SiegeEvent 实例
SiegeEvent siegeEvent = ...;
siegeEvent.DeploySiegeEngineAtIndex(siegeEngine, 0);
```

### RemoveDeployedSiegeEngine
`public void RemoveDeployedSiegeEngine(int index, bool isRanged, bool moveToReserve)`

**用途 / Purpose:** 从当前容器或状态中移除 「deployed siege engine」。

```csharp
// 先通过子系统 API 拿到 SiegeEvent 实例
SiegeEvent siegeEvent = ...;
siegeEvent.RemoveDeployedSiegeEngine(0, false, false);
```

### RemovedSiegeEngineFromReservedSiegeEngines
`public bool RemovedSiegeEngineFromReservedSiegeEngines(SiegeEvent.SiegeEngineConstructionProgress siegeEngine)`

**用途 / Purpose:** 从当前容器或状态中移除 「d siege engine from reserved siege engines」。

```csharp
// 先通过子系统 API 拿到 SiegeEvent 实例
SiegeEvent siegeEvent = ...;
var result = siegeEvent.RemovedSiegeEngineFromReservedSiegeEngines(siegeEngine);
```

### FindDeploymentIndexOfDeployedEngine
`public int FindDeploymentIndexOfDeployedEngine(SiegeEvent.SiegeEngineConstructionProgress deployedEngine)`

**用途 / Purpose:** 在当前集合/范围内查找满足条件的「deployment index of deployed engine」。

```csharp
// 先通过子系统 API 拿到 SiegeEvent 实例
SiegeEvent siegeEvent = ...;
var result = siegeEvent.FindDeploymentIndexOfDeployedEngine(deployedEngine);
```

### ClearRemovedEnginesIfNecessary
`public bool ClearRemovedEnginesIfNecessary()`

**用途 / Purpose:** 清空当前对象中的「removed engines if necessary」。

```csharp
// 先通过子系统 API 拿到 SiegeEvent 实例
SiegeEvent siegeEvent = ...;
var result = siegeEvent.ClearRemovedEnginesIfNecessary();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
SiegeEvent siegeEvent = ...;
siegeEvent.ActivateBlockade();
```

## 参见

- [本区域目录](../)