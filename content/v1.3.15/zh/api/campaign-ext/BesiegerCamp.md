---
title: "BesiegerCamp"
description: "BesiegerCamp 的自动生成类参考。"
---
# BesiegerCamp

**Namespace:** TaleWorlds.CampaignSystem.Siege
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class BesiegerCamp : ISiegeEventSide`
**Base:** `ISiegeEventSide`
**File:** `TaleWorlds.CampaignSystem/Siege/BesiegerCamp.cs`

## 概述

`BesiegerCamp` 位于 `TaleWorlds.CampaignSystem.Siege`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.Siege` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `SiegeEvent` | `public SiegeEvent SiegeEvent { get; }` |
| `SiegeEngines` | `public SiegeEvent.SiegeEnginesContainer SiegeEngines { get; }` |
| `LeaderParty` | `public MobileParty LeaderParty { get; }` |
| `MapFaction` | `public IFaction MapFaction { get; }` |
| `BattleSide` | `public BattleSideEnum BattleSide { get; }` |
| `SiegeEngineMissiles` | `public MBReadOnlyList<SiegeEvent.SiegeEngineMissile> SiegeEngineMissiles { get; }` |
| `SiegeStrategy` | `public SiegeStrategy SiegeStrategy { get; }` |
| `NumberOfTroopsKilledOnSide` | `public int NumberOfTroopsKilledOnSide { get; }` |
| `IsPreparationComplete` | `public bool IsPreparationComplete { get; }` |
| `IsReadyToBesiege` | `public bool IsReadyToBesiege { get; }` |

## 主要方法

### GetInvolvedPartiesForEventType
`public IEnumerable<PartyBase> GetInvolvedPartiesForEventType(MapEvent.BattleTypes mapEventType = MapEvent.BattleTypes.Siege)`

**用途 / Purpose:** 读取并返回当前对象中 「involved parties for event type」 的结果。

```csharp
// 先通过子系统 API 拿到 BesiegerCamp 实例
BesiegerCamp besiegerCamp = ...;
var result = besiegerCamp.GetInvolvedPartiesForEventType(mapEvent.BattleTypes.Siege);
```

### GetNextInvolvedPartyForEventType
`public PartyBase GetNextInvolvedPartyForEventType(ref int partyIndex, MapEvent.BattleTypes mapEventType = MapEvent.BattleTypes.Siege)`

**用途 / Purpose:** 读取并返回当前对象中 「next involved party for event type」 的结果。

```csharp
// 先通过子系统 API 拿到 BesiegerCamp 实例
BesiegerCamp besiegerCamp = ...;
var result = besiegerCamp.GetNextInvolvedPartyForEventType(partyIndex, mapEvent.BattleTypes.Siege);
```

### HasInvolvedPartyForEventType
`public bool HasInvolvedPartyForEventType(PartyBase party, MapEvent.BattleTypes mapEventType = MapEvent.BattleTypes.Siege)`

**用途 / Purpose:** 判断当前对象是否已经持有 「involved party for event type」。

```csharp
// 先通过子系统 API 拿到 BesiegerCamp 实例
BesiegerCamp besiegerCamp = ...;
var result = besiegerCamp.HasInvolvedPartyForEventType(party, mapEvent.BattleTypes.Siege);
```

### IsBesiegerSideParty
`public bool IsBesiegerSideParty(MobileParty mobileParty)`

**用途 / Purpose:** 判断当前对象是否处于 「besieger side party」 状态或条件。

```csharp
// 先通过子系统 API 拿到 BesiegerCamp 实例
BesiegerCamp besiegerCamp = ...;
var result = besiegerCamp.IsBesiegerSideParty(mobileParty);
```

### InitializeSiegeEventSide
`public void InitializeSiegeEventSide()`

**用途 / Purpose:** 为 「siege event side」 初始化必要的资源、状态或绑定。

```csharp
// 先通过子系统 API 拿到 BesiegerCamp 实例
BesiegerCamp besiegerCamp = ...;
besiegerCamp.InitializeSiegeEventSide();
```

### OnTroopsKilledOnSide
`public void OnTroopsKilledOnSide(int killCount)`

**用途 / Purpose:** 在 「troops killed on side」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 BesiegerCamp 实例
BesiegerCamp besiegerCamp = ...;
besiegerCamp.OnTroopsKilledOnSide(0);
```

### SetSiegeStrategy
`public void SetSiegeStrategy(SiegeStrategy strategy)`

**用途 / Purpose:** 为 「siege strategy」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 BesiegerCamp 实例
BesiegerCamp besiegerCamp = ...;
besiegerCamp.SetSiegeStrategy(strategy);
```

### RemoveAllSiegeParties
`public void RemoveAllSiegeParties()`

**用途 / Purpose:** 从当前容器或状态中移除 「all siege parties」。

```csharp
// 先通过子系统 API 拿到 BesiegerCamp 实例
BesiegerCamp besiegerCamp = ...;
besiegerCamp.RemoveAllSiegeParties();
```

### AddSiegeEngineMissile
`public void AddSiegeEngineMissile(SiegeEvent.SiegeEngineMissile missile)`

**用途 / Purpose:** 将 「siege engine missile」 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 BesiegerCamp 实例
BesiegerCamp besiegerCamp = ...;
besiegerCamp.AddSiegeEngineMissile(missile);
```

### RemoveDeprecatedMissiles
`public void RemoveDeprecatedMissiles()`

**用途 / Purpose:** 从当前容器或状态中移除 「deprecated missiles」。

```csharp
// 先通过子系统 API 拿到 BesiegerCamp 实例
BesiegerCamp besiegerCamp = ...;
besiegerCamp.RemoveDeprecatedMissiles();
```

### BombardHitWalls
`public void BombardHitWalls(SiegeEngineType attackerEngineType, int wallIndex)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 BesiegerCamp 实例
BesiegerCamp besiegerCamp = ...;
besiegerCamp.BombardHitWalls(attackerEngineType, 0);
```

### GetAttackTarget
`public void GetAttackTarget(ISiegeEventSide siegeEventSide, SiegeEngineType siegeEngine, int siegeEngineSlot, out SiegeBombardTargets targetType, out int targetIndex)`

**用途 / Purpose:** 读取并返回当前对象中 「attack target」 的结果。

```csharp
// 先通过子系统 API 拿到 BesiegerCamp 实例
BesiegerCamp besiegerCamp = ...;
besiegerCamp.GetAttackTarget(siegeEventSide, siegeEngine, 0, targetType, targetIndex);
```

### FinalizeSiegeEvent
`public void FinalizeSiegeEvent()`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 BesiegerCamp 实例
BesiegerCamp besiegerCamp = ...;
besiegerCamp.FinalizeSiegeEvent();
```

### OnAfterLoad
`public void OnAfterLoad()`

**用途 / Purpose:** 在 「after load」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 BesiegerCamp 实例
BesiegerCamp besiegerCamp = ...;
besiegerCamp.OnAfterLoad();
```

### SetPositionAfterMapChange
`public void SetPositionAfterMapChange(CampaignVec2 newPosition)`

**用途 / Purpose:** 为 「position after map change」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 BesiegerCamp 实例
BesiegerCamp besiegerCamp = ...;
besiegerCamp.SetPositionAfterMapChange(newPosition);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
BesiegerCamp besiegerCamp = ...;
besiegerCamp.GetInvolvedPartiesForEventType(mapEvent.BattleTypes.Siege);
```

## 参见

- [本区域目录](../)